# Data audit

Prepared: 2026-10-10  
Scope: uploaded city green-space datasets only. No external boundary or source verification was performed.

## Normalized feature counts

| City | Dataset | Features | Geometry | Notes |
|---|---|---:|---|---|
| Mumbai | Latest parks/gardens/zoos KML | 990 | Point | 13 records have no name; 2 coordinates fall outside a broad Mumbai envelope and need review. |
| Pune | PMC gardens KML | 198 | Polygon | 198 records have a numeric source area (`st_area_sh`); all polygon rings passed a basic closure/minimum-length check. |
| Pune | Gardens with lat/long CSV | 81 | Point | 81 usable coordinate rows parsed. |
| Bengaluru | Parks CSV | 1272 | Point | 369 records have numeric `Square Meter`; 261 of those are positive, so zero/missing values must not be treated as measured park area. |

## Supporting ward-level data

- Bengaluru ward park summary: 199 ward rows. Summing numeric `Parks #` values gives 4754 reported parks and summed `Park area (sq m)` values give approximately 26,830,485.65 sq m.
- Bengaluru ward playground summary: 199 ward rows; sum of `Playgrounds #` is 780.
- Pune park/composting CSV is included as supporting tabular data. It does not provide coordinates for every record and was not forced into the GeoJSON.
- The ward summary counts and the individual park point list have different totals. They may represent different definitions/coverage; do not merge or reconcile without source metadata.

## Duplicate candidates (not removed)

Potential duplicate name/location keys detected:
- Mumbai: repeated keys exist; names are blank for some records.
- Pune polygons: repeated garden names exist, but no centroid-based deduplication was performed.
- Bengaluru point list: repeated name + rounded-coordinate keys exist.

All source records were retained so that data cleaning decisions remain reviewable.

## Coordinate checks

A broad approximate coordinate envelope was used only as a sanity check:
- Mumbai: longitude 72.65–73.15, latitude 18.70–19.50.
- Pune: longitude 73.50–74.10, latitude 18.30–18.80.
- Bengaluru: longitude 77.20–78.00, latitude 12.70–13.40.

This is not an official boundary test. Two Mumbai point records fall outside the broad envelope:
- `RG at 358 Tenements, Narayan Pujari Nagar, KAG Marg ,worli` — `[72.485, 18.5935]`
- `Eastern freeway Tunnel top Panjarapol` — `[73.8523, 18.6454]`

They are retained and marked `review_outside_rough_city_envelope`; verify against the original source before using them in production.

## What this package does not establish

- No official municipal boundary for Mumbai, Pune, or Bengaluru is included.
- No guarantee of complete city-wide park inventory or completeness date is established by the uploaded files.
- Garden/park presence does not equal vegetated area.
- No Sentinel-2 imagery, NDVI raster, vegetation percentage, population density, or hex-cell density values are generated here.

## Recommended integration guardrails

1. Keep park records in a separate `parks/gardens` layer and keep satellite NDVI in a distinct `vegetation` layer.
2. Do not calculate green-density percentage by summing point counts or source area fields.
3. Retain `source_dataset`, source row/feature ID, and review flags for provenance.
4. Confirm official city boundaries and dataset licences before describing coverage as city-wide.
5. Review flagged Mumbai coordinates and duplicate candidates before public display.
