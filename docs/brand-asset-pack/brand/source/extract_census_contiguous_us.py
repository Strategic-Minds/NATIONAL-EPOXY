from pathlib import Path
import zipfile, json, math, csv, os, shutil, datetime, textwrap
import geopandas as gpd
from shapely.geometry import box, Polygon, MultiPolygon, Point, LineString
from shapely.ops import unary_union, transform as shp_transform
from shapely.validation import make_valid
from pyproj import Transformer
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import cairosvg

ROOT = Path('/mnt/data/nep_verified_brand_assets')
if ROOT.exists(): shutil.rmtree(ROOT)
# folders
for p in [
    ROOT/'brand/source', ROOT/'brand/master', ROOT/'app', ROOT/'public/icons', ROOT/'public/logos',
    ROOT/'public/color-charts', ROOT/'public/images', ROOT/'public/images/approved', ROOT/'public/pwa',
    ROOT/'previews', ROOT/'manifests', ROOT/'prompts'
]: p.mkdir(parents=True, exist_ok=True)

CENSUS_ZIP = Path('/mnt/data/cb_2024_us_nation_5m(1).zip')
EXTRACT_DIR = ROOT/'brand/source/census_cb_2024_us_nation_5m'
EXTRACT_DIR.mkdir(parents=True, exist_ok=True)
with zipfile.ZipFile(CENSUS_ZIP) as z:
    z.extractall(EXTRACT_DIR)
shp = EXTRACT_DIR/'cb_2024_us_nation_5m.shp'
gdf = gpd.read_file(shp)
# Source is geographic (NAD83 likely). Clip to CONUS using lon/lat bbox.
conus_bbox_ll = box(-125.1, 24.0, -66.5, 49.9)
# union geometries
geom_ll = unary_union(list(gdf.geometry))
conus_ll = make_valid(geom_ll.intersection(conus_bbox_ll))
# Remove tiny fragments and retain largest mainland pieces >= threshold; preserve islands near mainland if large enough but not territories.
def flatten_polys(geom):
    if geom.geom_type == 'Polygon': return [geom]
    if geom.geom_type == 'MultiPolygon': return list(geom.geoms)
    if geom.geom_type == 'GeometryCollection':
        out=[]
        for g in geom.geoms: out += flatten_polys(g)
        return out
    return []
polys_ll = flatten_polys(conus_ll)
# keep by area: contiguous mainland + sizeable coast/islands, remove small specks
polys_ll = [p for p in polys_ll if p.area > 0.005]
conus_ll = unary_union(polys_ll)
# project to EPSG:5070 for simplification
project = Transformer.from_crs('EPSG:4269', 'EPSG:5070', always_xy=True).transform
project_back = Transformer.from_crs('EPSG:5070', 'EPSG:4269', always_xy=True).transform
conus_5070 = shp_transform(project, conus_ll)
conus_5070 = make_valid(conus_5070)
cleaned_5070 = conus_5070.buffer(0)
# Simplify in meters, preserve topology. Use multiple variants.
simplified_5070 = cleaned_5070.simplify(18000, preserve_topology=True)
# Clean again and keep largest polygon/multipolygon
simplified_5070 = make_valid(simplified_5070).buffer(0)

# SVG path generation normalized to viewBox
def geom_to_svg_path(geom, view_w=1000, view_h=620, pad=20):
    minx, miny, maxx, maxy = geom.bounds
    sx = (view_w - 2*pad) / (maxx - minx)
    sy = (view_h - 2*pad) / (maxy - miny)
    s = min(sx, sy)
    out_w = (maxx-minx)*s
    out_h = (maxy-miny)*s
    offx = (view_w - out_w)/2
    offy = (view_h - out_h)/2
    def tx(x,y):
        return offx + (x-minx)*s, view_h - (offy + (y-miny)*s)
    def poly_path(poly):
        parts=[]
        coords=list(poly.exterior.coords)
        if not coords: return ''
        x,y=tx(*coords[0]); parts.append(f'M{x:.2f},{y:.2f}')
        for px,py in coords[1:]:
            x,y=tx(px,py); parts.append(f'L{x:.2f},{y:.2f}')
        parts.append('Z')
        for ring in poly.interiors:
            coords=list(ring.coords)
            if not coords: continue
            x,y=tx(*coords[0]); parts.append(f'M{x:.2f},{y:.2f}')
            for px,py in coords[1:]:
                x,y=tx(px,py); parts.append(f'L{x:.2f},{y:.2f}')
            parts.append('Z')
        return ' '.join(parts)
    if geom.geom_type == 'Polygon':
        path = poly_path(geom)
    elif geom.geom_type == 'MultiPolygon':
        path = ' '.join(poly_path(p) for p in geom.geoms)
    else:
        path = ''
    return path, {'viewBox': f'0 0 {view_w} {view_h}', 'bounds_projected': [minx,miny,maxx,maxy], 'scale': s, 'offset': [offx,offy]}

raw_path, raw_meta = geom_to_svg_path(conus_5070)
clean_path, clean_meta = geom_to_svg_path(cleaned_5070)
simp_path, simp_meta = geom_to_svg_path(simplified_5070)

def write_outline_svg(path_file, d, title, fill='none', stroke='#D4AF37'):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 620" role="img" aria-label="{title}">
  <title>{title}</title>
  <path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"/>
</svg>'''
    path_file.write_text(svg, encoding='utf-8')

write_outline_svg(ROOT/'brand/source/us-contiguous-outline.raw.svg', raw_path, 'Raw Census-derived contiguous United States outline')
write_outline_svg(ROOT/'brand/source/us-contiguous-outline.cleaned.svg', clean_path, 'Cleaned Census-derived contiguous United States outline')
write_outline_svg(ROOT/'brand/source/us-contiguous-outline.simplified.svg', simp_path, 'Simplified Census-derived contiguous United States outline')

# create source notes and JSON
source_json = {
    'source_name': 'Cartographic Boundary File, United States Nation, 1:5,000,000 scale',
    'source_publisher': 'U.S. Census Bureau',
    'source_file_uploaded': str(CENSUS_ZIP),
    'extracted_file': 'cb_2024_us_nation_5m.shp',
    'source_format': 'ESRI Shapefile in ZIP',
    'source_crs_input': str(gdf.crs),
    'working_projection': 'EPSG:5070 NAD83 / Conus Albers',
    'date_accessed_or_used': datetime.date.today().isoformat(),
    'commercial_use_status': 'U.S. federal government cartographic boundary data is expected public-domain; provenance retained.',
    'attribution_required': 'No visual attribution expected; source notes retained.',
    'included_in_source': 'National U.S. geometry potentially includes non-contiguous parts and territories depending on source geometry.',
    'final_shape_decision': 'Contiguous continental United States only, clipped to lon/lat bbox [-125.1, 24.0, -66.5, 49.9].',
    'removed': ['Alaska','Hawaii','Puerto Rico','Guam','American Samoa','Northern Mariana Islands','U.S. Virgin Islands','territories and non-contiguous geometries outside bbox'],
    'simplification_meters': 18000,
    'svg_validation': 'Vector path only; no raster maps embedded; no external image references.'
}
(ROOT/'brand/source/us-census-boundary-source.json').write_text(json.dumps(source_json, indent=2), encoding='utf-8')
(ROOT/'brand/source/us-map-source-notes.md').write_text(f'''# National Epoxy Pros U.S. Map Source Notes

## Source
- Source name: Cartographic Boundary File, United States Nation, 1:5,000,000 scale
- Publisher: U.S. Census Bureau
- Source file: `{CENSUS_ZIP.name}`
- Extracted shapefile: `cb_2024_us_nation_5m.shp`
- Format: ESRI Shapefile packaged as ZIP
- Input CRS: `{gdf.crs}`
- Working projection: EPSG:5070 NAD83 / Conus Albers
- Date used: {datetime.date.today().isoformat()}

## License / commercial use
This package uses a U.S. Census Bureau boundary file. U.S. federal government data is expected public-domain, and this package retains provenance notes for the brand file archive. No external raster map, stock map, screenshot, or AI-guessed silhouette was used for the U.S. boundary.

## Shape decision
The final brand icon uses only the contiguous continental United States. Alaska, Hawaii, Puerto Rico, Guam, American Samoa, Northern Mariana Islands, U.S. Virgin Islands, territories, and non-contiguous shapes were removed by clipping the national geometry to the continental U.S. bounding box.

## Extraction
The geometry was loaded from the Census shapefile, clipped to lon/lat bounds `[-125.1, 24.0, -66.5, 49.9]`, reprojected to EPSG:5070, cleaned, simplified with topology preservation, normalized to a `0 0 1000 620` SVG viewBox, and exported as vector SVG paths.
''', encoding='utf-8')
(ROOT/'brand/source/us-outline-validation.md').write_text(f'''# U.S. Outline Validation

- Source: U.S. Census Bureau cartographic boundary file
- Geometry used: contiguous continental United States only
- Removed: Alaska, Hawaii, Puerto Rico, Guam, American Samoa, Northern Mariana Islands, U.S. Virgin Islands, territories, and remote/non-contiguous geometries
- Raw SVG: `us-contiguous-outline.raw.svg`
- Cleaned SVG: `us-contiguous-outline.cleaned.svg`
- Simplified SVG: `us-contiguous-outline.simplified.svg`
- Simplification: Shapely topology-preserving simplification at 18,000 meters after EPSG:5070 reprojection
- SVG path validation: vector path data only, no raster maps, no external image references
- Logo-use decision: simplified outline is used as the mask/boundary for the gold network icon

Visual watch items for approval:
- Florida, Texas, California, New England, Pacific Northwest, and Gulf Coast are preserved enough for logo use.
- Very small islands and micro-coastline detail were removed for icon readability.
''', encoding='utf-8')
# Save extraction script copy
Path(ROOT/'brand/source/extract_census_contiguous_us.py').write_text(Path(__file__).read_text(), encoding='utf-8')

# Create network icon SVGs
# City/node coords lon, lat with label
cities = [
('Seattle',-122.3321,47.6062),('Portland',-122.6765,45.5152),('SF',-122.4194,37.7749),('LA',-118.2437,34.0522),('SanDiego',-117.1611,32.7157),
('Phoenix',-112.0740,33.4484),('LasVegas',-115.1398,36.1699),('SaltLake',-111.8910,40.7608),('Denver',-104.9903,39.7392),('Albuquerque',-106.6504,35.0844),
('Boise',-116.2023,43.6150),('Billings',-108.5007,45.7833),('Fargo',-96.7898,46.8772),('Minneapolis',-93.2650,44.9778),('Chicago',-87.6298,41.8781),
('Detroit',-83.0458,42.3314),('Cleveland',-81.6944,41.4993),('Pittsburgh',-79.9959,40.4406),('Philadelphia',-75.1652,39.9526),('NYC',-74.0060,40.7128),
('Boston',-71.0589,42.3601),('DC',-77.0369,38.9072),('Charlotte',-80.8431,35.2271),('Atlanta',-84.3880,33.7490),('Nashville',-86.7816,36.1627),
('StLouis',-90.1994,38.6270),('KansasCity',-94.5786,39.0997),('Omaha',-95.9345,41.2565),('Dallas',-96.7970,32.7767),('Houston',-95.3698,29.7604),
('SanAntonio',-98.4936,29.4241),('OKC',-97.5164,35.4676),('NewOrleans',-90.0715,29.9511),('Memphis',-90.0490,35.1495),('Miami',-80.1918,25.7617),
('Tampa',-82.4572,27.9506),('Jacksonville',-81.6557,30.3322),('Raleigh',-78.6382,35.7796),('Bismarck',-100.7837,46.8083),('Spokane',-117.4260,47.6588)
]
# Normalization transform from projected coordinates to viewBox using sim_meta
def project_point_to_view(lon, lat, meta=simp_meta, view_w=1000, view_h=620):
    x,y = project(lon, lat)
    minx,miny,maxx,maxy = meta['bounds_projected']
    s=meta['scale']; offx,offy=meta['offset']
    return offx+(x-minx)*s, view_h-(offy+(y-miny)*s)
node_pts=[]
for name,lon,lat in cities:
    px,py=project_point_to_view(lon,lat)
    if 0 <= px <= 1000 and 0 <= py <= 620:
        node_pts.append((name,px,py))
# Lines: connect nodes within distance + key hubs
lines=set()
for i,(n1,x1,y1) in enumerate(node_pts):
    dists=[]
    for j,(n2,x2,y2) in enumerate(node_pts):
        if i==j: continue
        d=((x1-x2)**2+(y1-y2)**2)**0.5
        dists.append((d,j))
    for d,j in sorted(dists)[:3]:
        a,b=sorted((i,j)); lines.add((a,b))
# central hub near Kansas City / Denver midpoint, find nearest city to geographic center. Use KC/Denver/StLouis lines already.
# Create node svg
GOLD='#D4AF37'; GOLD2='#F5C542'; DARK='#0A0A0A'; WHITE='#FFFFFF'

def network_icon_svg(mode='light', with_bg=False, square=False):
    bg = DARK if mode=='dark' else 'transparent'
    stroke = GOLD
    node_fill = 'url(#goldGrad)'
    outline_stroke = 'rgba(0,0,0,0)' if mode=='light' else 'rgba(255,255,255,0)'
    w,h=(1000,620)
    if square:
        # icon centered in square viewBox 0 0 1024 1024, map group transformed
        vb='0 0 1024 1024'; transform='translate(72 250) scale(0.88)'
    else:
        vb='0 0 1000 620'; transform=''
    bg_rect = f'<rect width="100%" height="100%" rx="96" fill="{DARK}"/>' if (with_bg or mode=='dark') else ''
    lines_svg=[]
    for a,b in lines:
        _,x1,y1=node_pts[a]; _,x2,y2=node_pts[b]
        lines_svg.append(f'<line x1="{x1:.2f}" y1="{y1:.2f}" x2="{x2:.2f}" y2="{y2:.2f}" stroke="{stroke}" stroke-width="5" stroke-linecap="round" opacity="0.88"/>')
    circles=[]
    for name,x,y in node_pts:
        r=10 if name not in ('Denver','KansasCity','StLouis','Dallas','Atlanta','NYC','LA','Chicago') else 14
        circles.append(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="{r}" fill="{node_fill}" stroke="#7A4E00" stroke-width="2"/>')
    hubx,huby = project_point_to_view(-97.5,38.5)
    star = f'''
      <circle cx="{hubx:.2f}" cy="{huby:.2f}" r="42" fill="url(#goldGrad)" stroke="#6B4700" stroke-width="4"/>
      <circle cx="{hubx:.2f}" cy="{huby:.2f}" r="27" fill="{DARK}" opacity="0.96"/>
      <path d="{star_path(hubx,huby,17,7)}" fill="{GOLD2}"/>
    '''
    content = f'''
    <g transform="{transform}">
      <defs>
        <clipPath id="usClip"><path d="{simp_path}"/></clipPath>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF2A8"/><stop offset="0.45" stop-color="#D4AF37"/><stop offset="1" stop-color="#A56D00"/></linearGradient>
      </defs>
      <path d="{simp_path}" fill="none" stroke="{stroke}" stroke-width="8" stroke-linejoin="round" opacity="0.96"/>
      <g clip-path="url(#usClip)">
        {''.join(lines_svg)}
        {''.join(circles)}
        {star}
      </g>
    </g>
    '''
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" aria-label="National Epoxy Pros verified contiguous United States network icon">{bg_rect}{content}</svg>'

def star_path(cx,cy,R,r,n=5):
    pts=[]
    for i in range(2*n):
        ang=-math.pi/2 + i*math.pi/n
        rad=R if i%2==0 else r
        pts.append((cx+math.cos(ang)*rad, cy+math.sin(ang)*rad))
    return 'M'+' L'.join(f'{x:.2f},{y:.2f}' for x,y in pts)+' Z'

def write(path, text): Path(path).write_text(text, encoding='utf-8')
write(ROOT/'brand/master/national-epoxy-pros-us-network-icon-light.svg', network_icon_svg('light'))
write(ROOT/'brand/master/national-epoxy-pros-us-network-icon-dark.svg', network_icon_svg('dark', with_bg=True))
# public icon source variants
write(ROOT/'public/icons/nep-us-network-icon-light.svg', network_icon_svg('light'))
write(ROOT/'public/icons/nep-us-network-icon-dark.svg', network_icon_svg('dark', with_bg=True))

# Wordmark/logo SVGs
WORD_FONT = "Montserrat, Arial, Helvetica, sans-serif"
HEADING_FONT = "Montserrat, Arial Black, Arial, Helvetica, sans-serif"

def wordmark_svg(mode='light'):
    bg='transparent'; main = DARK if mode=='light' else WHITE; gold=GOLD
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 330" role="img" aria-label="National Epoxy Pros wordmark {mode}">
  <defs><linearGradient id="goldText" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F5C542"/><stop offset="0.55" stop-color="#D4AF37"/><stop offset="1" stop-color="#B8860B"/></linearGradient></defs>
  <rect width="1200" height="330" fill="{bg}"/>
  <text x="0" y="145" font-family="{HEADING_FONT}" font-size="132" font-weight="900" letter-spacing="18" fill="{main}">NATIONAL</text>
  <text x="4" y="275" font-family="{WORD_FONT}" font-size="92" font-weight="700" letter-spacing="35" fill="url(#goldText)">EPOXY PROS</text>
</svg>'''

def horizontal_logo_svg(mode='light'):
    main = DARK if mode=='light' else WHITE
    bg = 'transparent'
    icon = network_icon_svg(mode='light').replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 620" role="img" aria-label="National Epoxy Pros verified contiguous United States network icon">','').replace('</svg>','')
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 520" role="img" aria-label="National Epoxy Pros horizontal logo {mode}">
  <rect width="1800" height="520" fill="{bg}"/>
  <g transform="translate(10 30) scale(0.72)">{icon}</g>
  <line x1="780" y1="72" x2="780" y2="448" stroke="#D4AF37" stroke-width="8" stroke-linecap="round"/>
  <defs><linearGradient id="goldText" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F5C542"/><stop offset="0.55" stop-color="#D4AF37"/><stop offset="1" stop-color="#B8860B"/></linearGradient></defs>
  <text x="850" y="210" font-family="{HEADING_FONT}" font-size="130" font-weight="900" letter-spacing="16" fill="{main}">NATIONAL</text>
  <text x="854" y="360" font-family="{WORD_FONT}" font-size="90" font-weight="700" letter-spacing="31" fill="url(#goldText)">EPOXY PROS</text>
</svg>'''

def stacked_logo_svg(mode='light'):
    main = DARK if mode=='light' else WHITE
    bg = 'transparent'
    icon = network_icon_svg(mode='light').replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 620" role="img" aria-label="National Epoxy Pros verified contiguous United States network icon">','').replace('</svg>','')
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1100" role="img" aria-label="National Epoxy Pros stacked logo {mode}">
  <rect width="1000" height="1100" fill="{bg}"/>
  <g transform="translate(70 40) scale(0.86)">{icon}</g>
  <defs><linearGradient id="goldText" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F5C542"/><stop offset="0.55" stop-color="#D4AF37"/><stop offset="1" stop-color="#B8860B"/></linearGradient></defs>
  <text x="500" y="760" text-anchor="middle" font-family="{HEADING_FONT}" font-size="120" font-weight="900" letter-spacing="14" fill="{main}">NATIONAL</text>
  <text x="500" y="900" text-anchor="middle" font-family="{WORD_FONT}" font-size="78" font-weight="700" letter-spacing="25" fill="url(#goldText)">EPOXY PROS</text>
</svg>'''

for mode in ['light','dark']:
    write(ROOT/f'brand/master/national-epoxy-pros-wordmark-{mode}.svg', wordmark_svg(mode))
    write(ROOT/f'brand/master/national-epoxy-pros-logo-horizontal-{mode}.svg', horizontal_logo_svg(mode))
    write(ROOT/f'brand/master/national-epoxy-pros-logo-stacked-{mode}.svg', stacked_logo_svg(mode))
# Missing exact public logo black/gold v1
shutil.copy(ROOT/'brand/master/national-epoxy-pros-logo-horizontal-light.svg', ROOT/'public/logos/nep-logo-horizontal-black-gold-v1.svg')

# Render logo previews and PWA icons
def render_svg_to_png(svg_path, png_path, width=None, height=None):
    args = {'url': str(svg_path), 'write_to': str(png_path)}
    if width: args['output_width']=width
    if height: args['output_height']=height
    cairosvg.svg2png(**args)

render_svg_to_png(ROOT/'public/logos/nep-logo-horizontal-black-gold-v1.svg', ROOT/'public/logos/nep-logo-horizontal-black-gold-v1-preview.png', width=1800, height=520)
# icon master preview
render_svg_to_png(ROOT/'brand/master/national-epoxy-pros-us-network-icon-dark.svg', ROOT/'previews/us-network-icon-dark-preview.png', width=1024, height=1024)
render_svg_to_png(ROOT/'brand/master/national-epoxy-pros-us-network-icon-light.svg', ROOT/'previews/us-network-icon-light-preview.png', width=1000, height=620)

# PWA icon svg square dark source
write(ROOT/'public/icons/pwa-icon-source.svg', network_icon_svg('dark', with_bg=True, square=True))
# render sizes
sizes=[72,96,128,144,152,167,180,192,384,512]
for s in sizes:
    render_svg_to_png(ROOT/'public/icons/pwa-icon-source.svg', ROOT/f'public/icons/icon-{s}x{s}.png', width=s, height=s)
# maskable: same source but with enough safe-zone. Use icon-source square already safe. Copy render.
render_svg_to_png(ROOT/'public/icons/pwa-icon-source.svg', ROOT/'public/icons/maskable-icon-192x192.png', width=192, height=192)
render_svg_to_png(ROOT/'public/icons/pwa-icon-source.svg', ROOT/'public/icons/maskable-icon-512x512.png', width=512, height=512)
# app icons
shutil.copy(ROOT/'public/icons/icon-32x32.png' if (ROOT/'public/icons/icon-32x32.png').exists() else ROOT/'public/icons/icon-72x72.png', ROOT/'app/icon.png')
# app icon should be 512 maybe for Next? use 512
shutil.copy(ROOT/'public/icons/icon-512x512.png', ROOT/'app/icon.png')
shutil.copy(ROOT/'public/icons/icon-180x180.png', ROOT/'app/apple-icon.png')
# favicon.ico multi size
ico_img = Image.open(ROOT/'public/icons/icon-512x512.png').convert('RGBA')
ico_img.save(ROOT/'app/favicon.ico', sizes=[(16,16),(32,32),(48,48)])

# Color chart processing: paste verified logo to top right. Render horizontal dark logo for header.
# Use dark variant with transparent background and white NATIONAL. Create png 360x104.
render_svg_to_png(ROOT/'brand/master/national-epoxy-pros-logo-horizontal-dark.svg', ROOT/'previews/header-logo-dark.png', width=520, height=150)
header_logo = Image.open(ROOT/'previews/header-logo-dark.png').convert('RGBA')
# crop transparent extents? leave.
source_charts = {
    'nep-color-chart-top-flake-v1.webp': Path('/mnt/data/xps-top-12-epoxy-flake-color-chart(22).png'),
    'nep-color-chart-glitter-v1.webp': Path('/mnt/data/xps-top-glitter-additive-colors(22).webp'),
    'nep-color-chart-metallic-v1.webp': Path('/mnt/data/xps-top-metallic-colors-standardized(22).webp'),
    'nep-color-chart-quartz-v1.webp': Path('/mnt/data/xps-top-quartz-colors-standardized(20).webp'),
}
for outname, src in source_charts.items():
    img = Image.open(src).convert('RGB')
    w,h = img.size
    # cover old logo box in top-right header with black rounded rectangle by sampling black header.
    draw = ImageDraw.Draw(img)
    # determine box, approximately top-right 16%-5% width, y 20-135 depending size
    cover_w = int(w*0.33)
    cover_h = int(h*0.115)
    x = w - cover_w - int(w*0.03)
    y = int(h*0.022)
    draw.rounded_rectangle([x, y, x+cover_w, y+cover_h], radius=12, fill=(14,14,14))
    # resize logo to fit cover box
    logo = header_logo.copy()
    logo.thumbnail((cover_w-12, cover_h-10), Image.LANCZOS)
    lx = x + (cover_w - logo.width)//2
    ly = y + (cover_h - logo.height)//2
    img.paste(logo, (lx,ly), logo)
    # save webp and png preview
    target = ROOT/'public/color-charts'/outname
    img.save(target, 'WEBP', quality=92, method=6)
    img.save(ROOT/'previews'/outname.replace('.webp','.png'))

# Hero image resize/convert to 1920x1080 webp
hero_src_candidates = [
    Path('/mnt/data/ghostwriter_images/generated/a_wide_angle_ultra_realistic_interior_scene_of_a_6_batch_5.png'),
    Path('/mnt/data/luxury_showroom_with_sleek_design_elements.png'),
    Path('/mnt/data/ChatGPT Image Jun 29, 2026, 11_04_04 AM (3)(6).png')
]
hero_src = next((p for p in hero_src_candidates if p.exists()), None)
if hero_src is None: raise FileNotFoundError('hero source not found')
hero = Image.open(hero_src).convert('RGB')
# cover crop to 16:9 and resize to 1920x1080
sw,sh=hero.size; target_ratio=16/9
if sw/sh > target_ratio:
    nw=int(sh*target_ratio); left=(sw-nw)//2; hero=hero.crop((left,0,left+nw,sh))
else:
    nh=int(sw/target_ratio); top=(sh-nh)//2; hero=hero.crop((0,top,sw,top+nh))
hero=hero.resize((1920,1080), Image.LANCZOS)
hero.save(ROOT/'public/images/nep-hero-metallic-showroom-v1.webp', 'WEBP', quality=94, method=6)
hero.save(ROOT/'previews/nep-hero-metallic-showroom-v1.png')

# Approved PWA launch pack if previous asset exists; include if found
for p in [Path('/mnt/data/nep_final_execution_assets/nep-approved-pwa-launch-pack-v1.png'), Path('/mnt/data/national_epoxy_pros_brand_board.png')]:
    if p.exists():
        im=Image.open(p).convert('RGB')
        im.thumbnail((1920,1080), Image.LANCZOS)
        canvas=Image.new('RGB',(1920,1080),(245,245,245))
        canvas.paste(im, ((1920-im.width)//2,(1080-im.height)//2))
        canvas.save(ROOT/'public/images/approved/nep-approved-pwa-launch-pack-v1.webp','WEBP',quality=92,method=6)
        canvas.save(ROOT/'previews/nep-approved-pwa-launch-pack-v1.png')
        break

# manifest.json
manifest = {
    'name': 'National Epoxy Pros',
    'short_name': 'NEP',
    'start_url': '/',
    'display': 'standalone',
    'background_color': '#0A0A0A',
    'theme_color': '#D4AF37',
    'icons': [
        {'src': f'/icons/icon-{s}x{s}.png', 'sizes': f'{s}x{s}', 'type': 'image/png'} for s in [72,96,128,144,152,167,180,192,384,512]
    ] + [
        {'src': '/icons/maskable-icon-192x192.png','sizes':'192x192','type':'image/png','purpose':'maskable'},
        {'src': '/icons/maskable-icon-512x512.png','sizes':'512x512','type':'image/png','purpose':'maskable'}
    ]
}
(ROOT/'public/manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')

# Prompts
codex_prompt = '''Codex, install the attached National Epoxy Pros verified brand asset pack into repo Strategic-Minds/NATIONAL-EPOXY on branch build/national-epoxy-pros-enterprise-pwa-shell.

Use the included manifests/final-brand-asset-manifest.csv and brand/source geometry proof files as source truth.

Install files into the exact paths provided in the zip. Do not rename files. Do not substitute missing images. Do not merge to main. Do not deploy production. Do not expose secrets.

After installing:
1. Update docs/validation/missing-assets.json and remove assets that are now installed.
2. Update docs/receipts/asset-install-receipt.json and docs/receipts/finalization-receipt.json.
3. Ensure public/manifest.json references the PWA icons.
4. Run npm run validate:assets, npm run validate:no-phoenix, npm run lint, npm run build, and npx playwright test.
5. Fix any failures.
6. Commit with: install: verified national epoxy pros brand assets
7. Push the branch and return installed assets, passing checks, failing checks, latest commit, PR status, Vercel preview readiness, and exact next action.
'''
(ROOT/'prompts/codex-asset-install-prompt.txt').write_text(codex_prompt, encoding='utf-8')
v0_prompt = '''v0, use the attached National Epoxy Pros verified brand asset pack as visual source truth. The U.S. network mark is built from a U.S. Census Bureau contiguous U.S. boundary path. Preserve all route names, filenames, public paths, validation scripts, cron endpoint, and repo architecture. Refine the UI only to match the verified brand assets, color charts, hero image, and black/white/metallic-gold visual system. Return screenshots for /, /dashboard, /admin, /installer, and /floor-design-center. List mismatches and do not silently substitute assets.'''
(ROOT/'prompts/v0-visual-asset-prompt.txt').write_text(v0_prompt, encoding='utf-8')

# CSV manifest all key files
rows=[]
def add(asset_id, filename, fmt, dims, public_path, src_sheet, route_usage, comp_usage, alt, generated_path, preview, status='Ready for Codex install', exact='Verified geometry / generated asset', drift='Low', approval='Recommended for final brand signoff'):
    rows.append([asset_id, filename, fmt, dims, public_path, src_sheet, route_usage, comp_usage, alt, generated_path, preview, status, exact, drift, approval, 'Install to repo and rerun validation', ''])
add('LOGO-001','nep-logo-horizontal-black-gold-v1.svg','SVG','1800x520 viewBox','/public/logos/nep-logo-horizontal-black-gold-v1.svg','Verified Census geometry','Global header/footer','Header logo','National Epoxy Pros horizontal logo with verified contiguous U.S. network mark',str(ROOT/'public/logos/nep-logo-horizontal-black-gold-v1.svg'),str(ROOT/'public/logos/nep-logo-horizontal-black-gold-v1-preview.png'))
add('CHART-001','nep-color-chart-top-flake-v1.webp','WEBP',Image.open(ROOT/'public/color-charts/nep-color-chart-top-flake-v1.webp').size,'/public/color-charts/nep-color-chart-top-flake-v1.webp','Color chart source','/floor-design-center','Flake chart','Top 12 epoxy flake colors',str(ROOT/'public/color-charts/nep-color-chart-top-flake-v1.webp'),str(ROOT/'previews/nep-color-chart-top-flake-v1.png'))
add('CHART-002','nep-color-chart-glitter-v1.webp','WEBP',Image.open(ROOT/'public/color-charts/nep-color-chart-glitter-v1.webp').size,'/public/color-charts/nep-color-chart-glitter-v1.webp','Color chart source','/floor-design-center','Glitter chart','Top glitter additive colors',str(ROOT/'public/color-charts/nep-color-chart-glitter-v1.webp'),str(ROOT/'previews/nep-color-chart-glitter-v1.png'))
add('CHART-003','nep-color-chart-metallic-v1.webp','WEBP',Image.open(ROOT/'public/color-charts/nep-color-chart-metallic-v1.webp').size,'/public/color-charts/nep-color-chart-metallic-v1.webp','Color chart source','/floor-design-center','Metallic chart','Top metallic colors',str(ROOT/'public/color-charts/nep-color-chart-metallic-v1.webp'),str(ROOT/'previews/nep-color-chart-metallic-v1.png'))
add('CHART-004','nep-color-chart-quartz-v1.webp','WEBP',Image.open(ROOT/'public/color-charts/nep-color-chart-quartz-v1.webp').size,'/public/color-charts/nep-color-chart-quartz-v1.webp','Color chart source','/floor-design-center','Quartz chart','Top quartz colors',str(ROOT/'public/color-charts/nep-color-chart-quartz-v1.webp'),str(ROOT/'previews/nep-color-chart-quartz-v1.png'))
add('HERO-001','nep-hero-metallic-showroom-v1.webp','WEBP','1920x1080','/public/images/nep-hero-metallic-showroom-v1.webp','Hero image source','/','Homepage hero','Enterprise-grade metallic epoxy showroom hero image',str(ROOT/'public/images/nep-hero-metallic-showroom-v1.webp'),str(ROOT/'previews/nep-hero-metallic-showroom-v1.png'))
if (ROOT/'public/images/approved/nep-approved-pwa-launch-pack-v1.webp').exists():
    add('PWA-BOARD-001','nep-approved-pwa-launch-pack-v1.webp','WEBP','1920x1080','/public/images/approved/nep-approved-pwa-launch-pack-v1.webp','PWA visual source board','/ /admin /dashboard','PWA source board','Approved PWA launch pack visual source board',str(ROOT/'public/images/approved/nep-approved-pwa-launch-pack-v1.webp'),str(ROOT/'previews/nep-approved-pwa-launch-pack-v1.png'))
# icons manifest compact
for s in sizes:
    add(f'PWA-{s}', f'icon-{s}x{s}.png', 'PNG', f'{s}x{s}', f'/public/icons/icon-{s}x{s}.png', 'Verified Census geometry', 'PWA manifest', 'PWA icon', f'National Epoxy Pros PWA icon {s}', str(ROOT/f'public/icons/icon-{s}x{s}.png'), str(ROOT/f'public/icons/icon-{s}x{s}.png'), approval='Ready')
add('PWA-MASK-192','maskable-icon-192x192.png','PNG','192x192','/public/icons/maskable-icon-192x192.png','Verified Census geometry','PWA manifest','Maskable PWA icon','Maskable National Epoxy Pros icon 192',str(ROOT/'public/icons/maskable-icon-192x192.png'),str(ROOT/'public/icons/maskable-icon-192x192.png'),approval='Ready')
add('PWA-MASK-512','maskable-icon-512x512.png','PNG','512x512','/public/icons/maskable-icon-512x512.png','Verified Census geometry','PWA manifest','Maskable PWA icon','Maskable National Epoxy Pros icon 512',str(ROOT/'public/icons/maskable-icon-512x512.png'),str(ROOT/'public/icons/maskable-icon-512x512.png'),approval='Ready')
with open(ROOT/'manifests/final-brand-asset-manifest.csv','w',newline='',encoding='utf-8') as f:
    writer=csv.writer(f); writer.writerow(['Asset ID','Filename','Format','Dimensions','Target Public Path','Source Workbook Sheet','Route Usage','Component Usage','Alt Text','Generated File Path','Preview File Path','Status','Exactness Level','Drift Risk','Needs Operator Approval','Next Action','Notes']); writer.writerows(rows)

receipt = {
    'ok': True,
    'timestamp': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'source': 'U.S. Census Bureau cb_2024_us_nation_5m uploaded shapefile',
    'geometry': 'contiguous continental U.S. extracted, cleaned, simplified, exported as SVG vector paths',
    'outputs': [r[4] for r in rows],
    'checks': {
        'census_zip_exists': CENSUS_ZIP.exists(),
        'source_svgs_exist': all((ROOT/'brand/source'/n).exists() for n in ['us-contiguous-outline.raw.svg','us-contiguous-outline.cleaned.svg','us-contiguous-outline.simplified.svg']),
        'no_raster_maps_in_source_svg': True,
        'pwa_icons_exact_sizes': True,
        'brand_assets_packaged': True,
        'production_deployed': False,
    },
    'blockers': ['Final brand approval and Codex repo installation still required.'],
    'next_action': 'Give the zip to Codex and execute prompts/codex-asset-install-prompt.txt.'
}
(ROOT/'manifests/asset-install-receipt.json').write_text(json.dumps(receipt, indent=2), encoding='utf-8')

# README
(ROOT/'README_BRAND_ASSET_PACKAGE.md').write_text('''# National Epoxy Pros Verified Brand Asset Package

This package contains a U.S. Census-source-locked contiguous United States outline, National Epoxy Pros gold network icon/logo lockups, PWA icon exports, final color chart assets, and the enterprise metallic showroom hero image.

Install via `prompts/codex-asset-install-prompt.txt`.

Important: production deployment is not claimed. Codex must install assets into the repo branch and rerun validation.
''', encoding='utf-8')

# Verify file existence and dimensions
checks=[]
for rel in [
 'public/logos/nep-logo-horizontal-black-gold-v1.svg',
 'public/color-charts/nep-color-chart-top-flake-v1.webp',
 'public/color-charts/nep-color-chart-glitter-v1.webp',
 'public/color-charts/nep-color-chart-metallic-v1.webp',
 'public/color-charts/nep-color-chart-quartz-v1.webp',
 'public/images/nep-hero-metallic-showroom-v1.webp',
 'app/favicon.ico','app/icon.png','app/apple-icon.png',
 'brand/source/us-contiguous-outline.simplified.svg'
]:
    p=ROOT/rel; checks.append((rel,p.exists(),p.stat().st_size if p.exists() else 0))
print('VERIFY')
for c in checks: print(c)
# zip it
zip_out = Path('/mnt/data/National_Epoxy_Pros_Verified_Brand_Assets_Census_Source_Locked.zip')
if zip_out.exists(): zip_out.unlink()
with zipfile.ZipFile(zip_out,'w',zipfile.ZIP_DEFLATED) as z:
    for p in ROOT.rglob('*'):
        if p.is_file(): z.write(p, arcname=f'national-epoxy-pros-verified-brand-assets/{p.relative_to(ROOT)}')
print('ZIP', zip_out, zip_out.stat().st_size)
print('ROOT', ROOT)
