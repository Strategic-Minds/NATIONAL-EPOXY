# U.S. Outline Validation

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
