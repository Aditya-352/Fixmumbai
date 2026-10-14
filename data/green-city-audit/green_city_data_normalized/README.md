# Green-space source data — normalized GeoJSON package

Prepared from the files uploaded in this conversation on 2026-10-10. This is a data-preparation output only; it does not modify the FixMumbai repository, database, or deployment.

## Files
- `all_cities_greenspaces.geojson` — combined FeatureCollection for Mumbai, Pune, and Bengaluru.
- `mumbai/mumbai_gardens_parks_zoos.geojson` — Mumbai KML converted to GeoJSON; point features only.
- `pune/pune_garden_boundaries.geojson` — Pune PMC KML converted to GeoJSON; polygon features and source attributes retained.
- `pune/pune_garden_locations.geojson` — Pune garden CSV converted to point features from its `(latitude, longitude)` field.
- `bengaluru/bengaluru_park_locations.geojson` — Bengaluru parks CSV converted to point features from latitude/longitude columns.
- `source_supporting/` — supporting source KML/CSVs that should not be interpreted as city-boundary data.
- `DATA_AUDIT.md` — counts, validation notes, caveats.

## Common fields
Every feature has `city`, `source_dataset`, `name`, `category`, `area_sqm`, and `source_geometry_type` (some values can be null). Original source attributes are preserved where present. GeoJSON coordinates use `[longitude, latitude]` as required by GeoJSON.

## Important limitations
- These are park/garden records, not official municipal boundary polygons.
- Point features show reported locations only; they do not describe the footprint or area of a park.
- A source-provided area field is not the same as a geometrically verified area. Area fields are preserved as source values and are not used to calculate city-wide greenery.
- Duplicate candidates are retained intentionally. Automatically deduplicating by name/location could discard valid records.
- `coordinate_sanity` is only a broad geographic-envelope check, not validation against an official city boundary. Features flagged for review are retained and their coordinates are not silently changed.
- NDVI / satellite-derived vegetation is not included in this package. It must be computed separately from suitable imagery with cloud/no-data masking and provenance.
