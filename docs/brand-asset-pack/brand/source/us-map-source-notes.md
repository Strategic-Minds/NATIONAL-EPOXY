# National Epoxy Pros U.S. Map Source Notes

## Source
- Source name: Cartographic Boundary File, United States Nation, 1:5,000,000 scale
- Publisher: U.S. Census Bureau
- Source file: `cb_2024_us_nation_5m(1).zip`
- Extracted shapefile: `cb_2024_us_nation_5m.shp`
- Format: ESRI Shapefile packaged as ZIP
- Input CRS: `EPSG:4269`
- Working projection: EPSG:5070 NAD83 / Conus Albers
- Date used: 2026-07-07

## License / commercial use
This package uses a U.S. Census Bureau boundary file. U.S. federal government data is expected public-domain, and this package retains provenance notes for the brand file archive. No external raster map, stock map, screenshot, or AI-guessed silhouette was used for the U.S. boundary.

## Shape decision
The final brand icon uses only the contiguous continental United States. Alaska, Hawaii, Puerto Rico, Guam, American Samoa, Northern Mariana Islands, U.S. Virgin Islands, territories, and non-contiguous shapes were removed by clipping the national geometry to the continental U.S. bounding box.

## Extraction
The geometry was loaded from the Census shapefile, clipped to lon/lat bounds `[-125.1, 24.0, -66.5, 49.9]`, reprojected to EPSG:5070, cleaned, simplified with topology preservation, normalized to a `0 0 1000 620` SVG viewBox, and exported as vector SVG paths.
