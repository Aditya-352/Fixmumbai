# My Technical Contributions to FixMumbai

**Author:** Faizan Khan (`fk6307672466@gmail.com`)  
**Project:** FixMumbai (Civic Environmental GIS Platform)  
**Role:** Full-Stack & GIS Engineer (Urban Green Density & Nature Intelligence Lead)  
**Branch:** `green-density-pr` / `feat/green-explorer`  
**Verified Pull Requests & Commits:** PR #5, PR #6, PR #7, PR #8 (`7ddfc22`, `c502aef`, `1e96dd2`, `8bc4b8e`)

---

## A. Overview

FixMumbai is a collaborative civic intelligence and urban governance platform built with Next.js, TypeScript, PostgreSQL/SQLite, and Leaflet. The wider project covers civic issue reporting, Brihanmumbai Municipal Corporation (BMC) ward management, and air quality index (AQI) monitoring—areas originally architected and contributed to by teammates Aditya and Anantha Shayan.

My technical contributions specifically focus on conceiving, designing, architecting, and implementing the **Green Density & Nature Intelligence System (Urban Vegetation GIS)** (`/civic/green`). Prior to this work, FixMumbai lacked any geospatial vegetation metrics, canopy coverage intelligence, or public park access analysis.

Over multiple iterations, I engineered the end-to-end vegetation GIS stack: from Sentinel-2 satellite NDVI ingestion and 100m hexagonal spatial grids, to a dataset of 600+ verified Mumbai green spaces, pedestrian walking routes, image provenance pipelines, resilient offline static fallbacks, and a high-performance, modern responsive dashboard UI.

---

## B. Contributions at a Glance

| Feature / Subsystem | My Specific Contribution | Primary Files / Components | Verification Status |
| :--- | :--- | :--- | :--- |
| **Sentinel-2 NDVI Pipeline & Provenance** | Engineered satellite NDVI calculation, Earth Engine provider, caching, and honest data provenance (satellite source, timestamp, confidence scoring). | `src/lib/green/ndvi-provider.ts`<br>`src/lib/green/ndvi-provenance.ts`<br>`src/lib/green/gee-service.ts` | Verified in PR #5 (`7ddfc22`), PR #8 (`8bc4b8e`) |
| **Mumbai Green Spaces Ingestion (600+ Sites)** | Ingested and categorized 600+ public parks, gardens, nature reserves, and mangrove habitats across Greater Mumbai with coordinates, ward IDs, and OSM metadata. | `scripts/green/seed-mumbai-spaces.ts`<br>`scripts/green/ingest-all-mumbai-parks.ts`<br>`src/lib/green/spaces-service.ts` | Verified in commits `7ddfc22`, `8bc4b8e` & active branch |
| **Zero-DB Resilient Static Fallback** | Implemented high-availability static fallback datasets (Mumbai, Bengaluru, Pune) ensuring the GIS dashboard operates with zero database latency or downtime. | `src/lib/green/static-spaces-fallback.ts`<br>`src/lib/green/bengaluru-static.ts`<br>`src/lib/green/puna-locations-static.ts` | Verified in PR #7 (`1e96dd2`) |
| **100m Hexagonal Grid & SML/HUGSI Metrics** | Built spatial H3/hex-grid vegetation analysis, HUGSI urban canopy scores, and Sustainable Mobility & Livability (SML) indices. | `src/lib/green/hex-grid-service.ts`<br>`src/lib/green/hugsi-metrics.ts`<br>`src/lib/green/sml-framework.ts` | Verified in PR #5 (`7ddfc22`) |
| **Vegetation GIS REST API Layer** | Created 11 Next.js App Router API endpoints for geospatial spatial queries, tile serving, nearest park lookups, BMC nurseries, and search. | `src/app/api/vegetation/**/route.ts` | Verified in PR #5 (`7ddfc22`), PR #7 (`1e96dd2`) |
| **Interactive Map & Leaflet Optimization** | Developed custom React-Leaflet map rendering green markers, NDVI overlays, walking routes, and resolved React 18 / Next.js Fast Refresh double-init bugs. | `src/components/green/GreenMap.tsx`<br>`src/components/green/GreenSpaceCard.tsx` | Verified in commits `3e26778`, `7ddfc22`, `8bc4b8e` |
| **Premium UI/UX Dashboard Redesign** | Designed and built a clean, minimalist environmental intelligence interface with collapsible navigation, wrap-around category pills, and floating detail panels. | `src/components/green/GreenExplorer.tsx`<br>`src/components/green/GreenRightPanel.tsx`<br>`src/components/green/GreenSidebar.tsx` | Verified in working tree & active commits |
| **Wikimedia Commons Photo Provenance** | Built real-world image resolution pipeline using Wikimedia Commons API with attribution, licensing, and citizen photo verification. | `src/lib/green/commons-images.ts`<br>`src/lib/green/photos-service.ts`<br>`src/components/green/CitizenPhotoUpload.tsx` | Verified in PR #8 (`8bc4b8e`) |
| **Automated Testing & Regressions** | Authored test suites for NDVI provider calculation, hex-grid integrity, image provenance, and multi-city client isolation. | `tests/ndvi-provider.test.ts`<br>`tests/hex-grid-integrity.test.ts`<br>`tests/ndvi-provenance.test.ts` | Verified in PR #5 (`7ddfc22`), PR #8 (`8bc4b8e`) |

---

## C. Detailed Technical Contributions

### 1. Urban Vegetation & Satellite Data Ingestion (NDVI Engine)
* **The Problem:** City authorities and citizens lacked objective, verifiable ground data on urban canopy cover and vegetation distribution across Mumbai's wards.
* **What I Implemented:** 
  - Designed `src/lib/green/ndvi-provider.ts` to interface with satellite imagery and multispectral surface reflectance bands (NIR Band 8 and Red Band 4 from Sentinel-2).
  - Implemented the normalized difference vegetation index formula:
    $$\text{NDVI} = \frac{\text{NIR} - \text{Red}}{\text{NIR} + \text{Red}}$$
  - Built an honest provenance data layer (`src/lib/green/ndvi-provenance.ts`) that records the satellite constellation (`Sentinel-2`), date of capture, cloud coverage percentage, composite method, and verification tier.
  - Authored `scripts/green/remediate-synthetic-ndvi.ts` to purge mock or synthetic numbers and enforce validated satellite data.
* **User & Civic Benefit:** Enables ward officers and researchers to evaluate authentic green health across seasons rather than relying on unverified estimates.

### 2. High-Density Mumbai Green Spaces Directory (600+ Sites)
* **The Problem:** The initial application had no database of walkable public green spaces, gardens, or urban forests.
* **What I Implemented:**
  - Authored GIS ingestion and seeding scripts (`scripts/green/seed-mumbai-spaces.ts` and `scripts/green/ingest-all-mumbai-parks.ts`) querying OpenStreetMap and civic records for municipal parks, mangrove reserves, recreational grounds, and nature reserves.
  - Extracted polygon boundaries, calculated centroids using Turf.js, assigned BMC ward identifiers, and recorded facilities (walking paths, play areas, lighting).
  - Expanded coverage from an initial sample to over 600 walkable green spaces spanning South Mumbai, Western Suburbs, and Central/Eastern Suburbs.
* **User & Civic Benefit:** Citizens can search, discover, and filter walkable green areas within walking distance of any address or transit hub.

### 3. High-Availability Static Fallbacks & Zero-DB Parity
* **The Problem:** In serverless or containerized environments where SQLite or PostgreSQL database connections could experience cold starts or network timeouts, the green exploration dashboard would previously fail.
* **What I Implemented:**
  - Designed a multi-tier fallback mechanism in `src/lib/green/spaces-service.ts` and `src/lib/green/static-spaces-fallback.ts`.
  - Stored verified pre-computed GeoJSON spatial records of green spaces and ward boundaries directly in static memory.
  - If the database query times out or returns empty results, the service transparently serves static records with zero degradation in UI capabilities.
* **User & Civic Benefit:** Guaranteed 100% dashboard uptime and instant page loads, critical for civic users on low-bandwidth mobile connections.

### 4. Resilient Geolocation & Pedestrian Route Calculation
* **The Problem:** Mobile browsers often deny location access, encounter GPS timeouts, or report coordinates outside Mumbai, causing application crashes or empty views.
* **What I Implemented:**
  - Built resilient geolocation handling inside `src/hooks/useGreenExplorer.ts`: automatically gracefully detects permission denials, timeouts, or out-of-bounds positions, defaulting smoothly to central landmarks (e.g., Bandra West / Oval Maidan) with user-friendly notices.
  - Implemented pedestrian walking distance and routing in `src/lib/green/boundary-distance.ts` and `src/lib/green/routing.ts`, calculating geodesic distances and directional turns to the nearest park entrance.
* **User & Civic Benefit:** Eliminates blank screen errors for citizens on restrictive mobile devices and provides actionable walking paths to urban nature.

---

## D. Green Density and GIS Contributions

### 1. Hexagonal Spatial Grid (100m Resolution)
- **Component / Service:** `src/lib/green/hex-grid-service.ts`
- **Technical Approach:** Constructed a uniform 100m hexagonal tessellation covering Mumbai's urban geography.
- **Why Hexagons:** Hexagonal cells provide equidistant neighbors and minimize edge distortion compared to square grids, providing more accurate spatial sampling of vegetation boundaries and heat-island mitigating tree canopies.

### 2. Municipal Nurseries Directory
- **Component / Service:** `src/lib/green/nurseries-service.ts` and `src/data/bmc-nurseries.json`
- **Technical Approach:** Cataloged official BMC-operated municipal plant nurseries across city wards, enabling citizens to locate indigenous saplings for neighborhood greening and civic tree plantation drives.

### 3. SML & HUGSI Standards Implementation
- **Component / Service:** `src/lib/green/hugsi-metrics.ts` and `src/lib/green/sml-framework.ts`
- **Technical Approach:** Modeled urban sustainability indexes aligning with the internationally recognized Husqvarna Urban Green Space Index (HUGSI) standard:
  - Percentage of urban area covered by vegetation.
  - Canopy distribution index.
  - Per capita green space in square meters ($m^2/\text{citizen}$).

---

## E. Frontend and UI/UX Contributions

### 1. Component Hierarchy & Architectural Separation
I authored and iteratively refined the dedicated Green Density frontend components located in `src/components/green/`:
* **`GreenExplorer.tsx`**: Main page coordinator managing synchronized map state, selected park focus, filter triggers, and responsive layout modes.
* **`GreenMap.tsx`**: High-performance Leaflet container with custom SVG map pins color-coded by space category (Park, Nature Reserve, Mangrove & Wetland, Garden, Botanical Center), interactive polygon outlines, and tile layer toggles.
* **`GreenSidebar.tsx`**: Clean, brand-focused left navigation drawer containing FixMumbai identity and map mode switchers (Civic Risk Map, Air Quality Map, Green Density Explorer).
* **`GreenRightPanel.tsx`**: Floating desktop/mobile panel housing category filter pills (with wrap-around badge layout), real-time search input, distance radius sliders, active result counters, and park cards.
* **`GreenSpaceCard.tsx`**: Card item displaying space name, category badge, walking distance, NDVI health bar, and verified photography thumbnail.
* **`CitizenPhotoUpload.tsx`**: Modal interface for community photo submissions with client-side EXIF metadata extraction to verify image capture location and date.

### 2. UI/UX Design System & Polish
* **Color Palette:** Implemented an environmental color system (`#087F5B` deep emerald, `#EAF7F0` mint tint, `#14231D` forest charcoal, and `#64746B` slate muted text).
* **Responsive Layout:**
  - Desktop: Left navigation sidebar + full-screen interactive GIS map + floating collapsible right intelligence panel.
  - Mobile: Bottom floating sheet with scroll snapping and non-intrusive map interaction.
* **Performance Enhancements:** Decoupled satellite tile loading by 1.5 seconds after vector markers are placed, ensuring that the primary interactive map renders instantly without thread freezing.

---

## F. Technical Implementation

The technologies I directly worked with and integrated into my contributions include:

* **Next.js 14 (App Router):** Client components (`'use client'`), dynamic routing (`/civic/green`), server route handlers (`/api/vegetation/*`), and static generation optimizations.
* **TypeScript:** Strict type safety across the GIS domain (`src/lib/green/types.ts`), defining interfaces for `GreenSpace`, `NdviSummary`, `NdviProvenance`, `LayerVisibilityState`, and `BoundingBox`.
* **Leaflet & React-Leaflet:** Map rendering, custom HTML/SVG DivIcons, polygon layers, map event synchronization, and fly-to view transitions.
* **Turf.js (`@turf/turf`):** Geospatial calculations including point-in-polygon checks, centroid derivations, spatial buffering, and Haversine distance computations.
* **Tailwind CSS:** Custom styling, responsive breakpoints, flexbox wrapping, glassmorphism overlays, and micro-interactions.
* **Vitest:** Automated test harness for verifying GIS arithmetic and data transformers.

---

## G. Testing and Verification

| Test Suite / Check | Files Verified | What Was Tested |
| :--- | :--- | :--- |
| **NDVI Calculation Tests** | `tests/ndvi-provider.test.ts` | Tested mathematical accuracy of the NDVI formula, normalization edge-cases, null handling, and band validation. |
| **NDVI Provenance Tests** | `tests/ndvi-provenance.test.ts` | Verified that provenance metadata (satellite source, timestamp, cloud coverage) is preserved through the serialization pipeline. |
| **Hex Grid Integrity** | `tests/hex-grid-integrity.test.ts` | Validated that 100m hexagonal cells generate valid closed polygons and correct spatial indices without coordinate drift. |
| **Multi-City Regression** | `tests/city-*.test.ts`, `tests/mumbai-regression.test.ts` | Verified that expanding to Bengaluru and Pune did not regress Mumbai's data endpoints or corrupt local coordinate spaces. |
| **TypeScript Compilation** | `npx tsc --noEmit -p tsconfig.json` | Verified clean compilation across all `src/components/green/` and `src/lib/green/` code. |
| **Live Route Verification** | `curl -s http://localhost:3003/civic/green` | Verified HTTP 200 OK server response and successful hydration of the Next.js frontend. |

---

## H. Engineering Challenges and Solutions

### 1. Leaflet Double-Initialization under React 18 / Next.js Fast Refresh
* **Challenge:** During development with Next.js Fast Refresh and React 18 Strict Mode, components mount twice. Leaflet throws `Error: Map container is already initialized` when re-attaching to an existing DOM container.
* **Solution (Commit `3e26778`):** Implemented an explicit cleanup routine inside `GreenMap.tsx` with a ref tracking the Leaflet map instance and container ID. The map instance is destroyed cleanly on unmount (`map.remove()`) before any re-initialization.

### 2. High-Resolution Satellite Tile Bottleneck
* **Challenge:** Requesting multiple satellite raster tiles simultaneously on initial page load caused network contention that delayed initial vector marker rendering.
* **Solution (Commit `1e96dd2`):** Decoupled the vector layer from raster satellite layers. Green space markers and boundaries render immediately; raster satellite tiles are initialized asynchronously with a 1.5-second debounce, resulting in instant perceived load times.

### 3. Avoiding Misleading Synthetic Data
* **Challenge:** Early mock versions used randomly generated NDVI vegetation indices, which could mislead civic users.
* **Solution (Commit `8bc4b8e`):** Replaced mock metrics with an explicit `NdviProvenance` model. When satellite observations are unavailable for a specific coordinate, the system explicitly displays `UNVALIDATED` or `NO_DATA` rather than generating artificial numbers.

---

## I. Summary of Key Files and Components Authored

### Frontend UI (`src/components/green/`)
- `GreenExplorer.tsx`: Root dashboard coordinator and layout container.
- `GreenMap.tsx`: React-Leaflet GIS map with custom SVG pins, hex grids, and boundary layers.
- `GreenRightPanel.tsx`: Right-side intelligence panel with search, category pills, and card list.
- `GreenSidebar.tsx`: Minimalist FixMumbai left brand sidebar and map switcher.
- `GreenSpaceCard.tsx`: Space summary card with distance, category, and NDVI indicators.
- `GreenLegend.tsx`: Map layer legend explaining NDVI colors and civic markers.
- `CitizenPhotoUpload.tsx`: Community ground-truth photo modal with EXIF validation.
- `SearchBox.tsx`: Debounced text search with autocomplete against green spaces.

### GIS Services and Data Logic (`src/lib/green/`)
- `ndvi-provider.ts`: Sentinel-2 satellite data ingestion and NDVI computation.
- `ndvi-provenance.ts`: Metadata provenance and data validation tracking.
- `spaces-service.ts`: Spatial queries, radius filtering, and category lookups.
- `static-spaces-fallback.ts`: Static dataset of verified Mumbai green spaces.
- `hex-grid-service.ts`: 100m hexagonal spatial tessellation engine.
- `hugsi-metrics.ts`: Urban vegetation and canopy index calculations.
- `sml-framework.ts`: Sustainable Mobility and Livability spatial scoring.
- `nurseries-service.ts`: Municipal nursery catalog and distance lookups.
- `commons-images.ts`: Wikimedia Commons image resolution with licensing attribution.
- `routing.ts`: Walking route and pedestrian distance calculator.
- `types.ts`: TypeScript type definitions for the entire green intelligence module.

### API Routes (`src/app/api/vegetation/`)
- `nearby/route.ts`: Proximity queries returning spaces within a specified kilometer radius.
- `metrics/route.ts`: Aggregated ward and city-wide green density statistics.
- `areas/[id]/route.ts`: Detailed metrics for specific parks or conservation areas.
- `search/route.ts`: Spatial and keyword search across spaces.
- `nurseries/route.ts`: BMC nursery locations and contact directory.
- `tiles/route.ts`: Spatial tile server for vegetation overlays.
- `photos/route.ts`: Citizen photo verification and upload handler.

### Scripts & Data Ingestion (`scripts/green/` & `src/data/`)
- `scripts/green/seed-mumbai-spaces.ts`: Database seeder for 600+ Mumbai green spaces.
- `scripts/green/ingest-all-mumbai-parks.ts`: OpenStreetMap Overpass ingestion pipeline.
- `scripts/green/remediate-synthetic-ndvi.ts`: Data remediation script replacing synthetic NDVI values.
- `src/data/bmc-nurseries.json`: Structured directory of municipal nurseries.

---

## J. Summary of Impact

Through these contributions, I delivered the complete **Green Density & Nature Intelligence** pillar of FixMumbai:

1. **Expanded Project Scope:** Transformed FixMumbai from a civic grievance and AQI portal into an integrated urban environmental platform with vegetation and canopy intelligence.
2. **Real-World Civic Scale:** Curated and ingested over 600 verified green spaces across Greater Mumbai, making public parks discoverable to residents with walking distances and directions.
3. **Scientific Data Integrity:** Introduced honest satellite data provenance using Sentinel-2 multispectral imagery and international HUGSI urban forestry metrics.
4. **Resilient Production Engineering:** Built zero-downtime static fallbacks, decoupled map tile loading, and fixed critical Leaflet React lifecycle bugs.
5. **Modern Minimalist UI:** Designed a responsive, accessible GIS explorer interface with clean typography, intuitive spatial filtering, and high-performance rendering.
