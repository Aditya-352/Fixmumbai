# City hero image attributions

Hero banners used by the city-aware dashboard hero. All images are
cropped/graded derivatives of the originals listed here; crops are
1376×768 (16:9) to match `mumbai-green-hero.jpg`.

## `mumbai-green-hero.jpg`
Original artwork created for the FixMumbai / PriSEHAT-Pulse project.
No third-party source.

## `pune-green-hero.jpg`
- **Source:** original artwork created for the FixMumbai / PriSEHAT-Pulse
  project ("Gemini_Generated_Image", Pune futuristic green-city panorama).
- **Changes:** cropped to 16:9 and resized.

## `bengaluru-green-hero.jpg`
- **Source:** original artwork created for the FixMumbai / PriSEHAT-Pulse
  project ("Gemini_Generated_Image", Bengaluru panorama showing Vidhana
  Soudha, the metro flyover and the Chinnaswamy Stadium).
- **Changes:** cropped to 16:9 and resized.

## `delhi-green-hero.jpg`
- **Source:** original artwork created for the FixMumbai / PriSEHAT-Pulse
  project ("Gemini_Generated_Image", futuristic green Delhi panorama showing
  India Gate with solar arrays, futuristic Qutub Minar and solar stadium).
- **Changes:** converted to RGB JPEG for the dashboard hero banner.

## Delhi green-space dataset (`src/lib/green/delhi-static.ts`)
- **Source:** OpenStreetMap contributors, ODbL 1.0, via the Overpass API
  (`https://overpass-api.de/api/interpreter`).
- **Query:** named elements within the Delhi (NCT) query envelope tagged
  `leisure=park|garden|nature_reserve|recreation_ground`, `landuse=forest` and
  `boundary=national_park`.
- **Records:** 1143 named green spaces.
- **Note:** `ndvi*` and `densityClass` are area-derived estimates, not measured
  satellite values — Delhi has no registered Sentinel-2 AOI.

## `kolkata-green-hero.jpg`
- **Source:** original artwork created for the FixMumbai / PriSEHAT-Pulse
  project ("Gemini_Generated_Image", Kolkata morning panorama showing Victoria
  Memorial, morning mist over the Hooghly river, Howrah bridge and heritage tram).
- **Changes:** converted to RGB JPEG for the dashboard hero banner.

## `nagpur-green-hero.jpg`
- **Source:** original artwork created for the FixMumbai / PriSEHAT-Pulse
  project (Nagpur sunset cityscape with the tricolour landmark, the lake and
  the green roundabout).
- **Changes:** cropped to 16:9, anchored to the left edge so the temple, the
  tricolour landmark and the roundabout are never cropped away, and resized.

## `hyderabad-green-hero.jpg`
- **Source:** original artwork created for the FixMumbai / PriSEHAT-Pulse
  project ("Hyderabad Sunset — Charminar and Cityscape").
- **Changes:** cropped to 16:9 and resized.

## Kolkata / Nagpur / Hyderabad green-space datasets
Files: `src/lib/green/{kolkata,nagpur,hyderabad}-static.ts`

- **Source:** OpenStreetMap contributors, ODbL 1.0, via the Overpass API
  (`https://overpass-api.de/api/interpreter`).
- **Query:** named elements within each city's municipal-corporation query
  envelope tagged `leisure=park|garden|nature_reserve|recreation_ground|common`,
  `landuse=forest` and `boundary=national_park`.
- **Records:** Kolkata 534 · Nagpur 105 · Hyderabad 517.
- **Note:** `ndvi*` and `densityClass` are area-derived estimates, not measured
  satellite values — none of these cities has a registered Sentinel-2 AOI.
