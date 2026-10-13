# FixMumbai — Green Density & Nature Intelligence Explorer

> **Feature Module:** Urban Vegetation GIS, Sentinel-2 NDVI Analytics, and Walkable Green Space Discovery  
> **Route:** `/civic/green` (and `/green`)  
> **Scope:** Geospatial vegetation analysis, public green space directory, satellite raster overlays, and pedestrian routing.

---

## 1. Overview

Rapid urbanization in Indian metropolitan regions has led to severe tree canopy depletion, worsening urban heat island (UHI) effects, and restricted access to walkable public green spaces.

The **Green Density & Nature Intelligence Explorer** is a civic GIS subsystem integrated into FixMumbai. It provides citizens, municipal authorities, and urban planners with verifiable, spatial intelligence on vegetation density, urban tree canopy health, municipal nurseries, and accessible public parks across Greater Mumbai.

The system combines **Sentinel-2 multispectral satellite observations**, a directory of **600+ cataloged public green spaces**, a **100m hexagonal spatial grid**, and **resilient zero-database static fallbacks** to ensure high-performance, real-time spatial exploration on both desktop and mobile devices.

---

## 2. Key Features

* **Walkable Green Space Directory (600+ Sites):** Catalog of public parks, gardens, nature reserves, botanical collections, and coastal mangrove ecosystems across South Mumbai, Western Suburbs, and Eastern Suburbs.
* **Sentinel-2 NDVI Vegetation Layer:** Surface reflectance analysis using Near-Infrared (NIR Band 8) and Red (Band 4) satellite observations, classifying vegetation health into High, Medium, and Low density bands.
* **100m Hexagonal Density Grid:** High-resolution spatial tessellation revealing localized canopy distribution and neighborhood micro-climate buffers.
* **Multi-Radius & Category Filtering:** Dynamic search and filtering by category (*Park*, *Nature Reserve*, *Mangrove & Wetland*, *Public Garden*, *Botanical Center*) and walking radius (*500m* to *15km*).
* **Pedestrian Distance & Walking Directions:** Real-time distance calculations from user coordinates to park boundaries, complete with walking distance estimates and compass directions.
* **BMC Municipal Nurseries Mapping:** Geospatial directory of Brihanmumbai Municipal Corporation (BMC) plant nurseries to support community afforestation and sapling procurement.
* **Verified Real-World Photography:** Integration with the Wikimedia Commons API to display CC-licensed photographs with transparent licensing and provenance.
* **Citizen Photo Evidence:** Community upload modal with client-side EXIF GPS validation to crowdsource ground-truth vegetation photos.
* **High-Availability Zero-DB Fallback:** Automatic failover to pre-compiled spatial datasets in static memory if the database is unreachable or unseeded.

---

## 3. Architecture and Workflow

```mermaid
flowchart TD
    subgraph Client ["Client Interface (Next.js / React)"]
        UI[GreenExplorer Page: /civic/green]
        Sidebar[GreenSidebar: Brand & Modes]
        Map[GreenMap: React-Leaflet GIS]
        Panel[GreenRightPanel: Filters & Cards]
        Modal[CitizenPhotoUpload: EXIF GPS]
    end

    subgraph Controller ["State & API Gateway"]
        Hook[useGreenExplorer Hook]
        API["Next.js App Router: /api/vegetation/*"]
    end

    subgraph Engine ["GIS & Spatial Analytics Engine"]
        SpacesSvc[spaces-service.ts]
        NdviSvc[ndvi-provider.ts / gee-service.ts]
        HexSvc[hex-grid-service.ts]
        RouteSvc[routing.ts / boundary-distance.ts]
        NurseriesSvc[nurseries-service.ts]
        CommonsSvc[commons-images.ts]
    end

    subgraph Data ["Data Storage & Fallback"]
        DB[(Prisma: dev.db / PostgreSQL)]
        StaticFallback[(static-spaces-fallback.ts)]
        NurseriesJSON[(bmc-nurseries.json)]
        GEE[Copernicus Sentinel-2 API]
    end

    UI --> Hook
    Sidebar --> UI
    Panel --> Hook
    Map <--> Hook
    Modal --> API

    Hook --> API
    API --> SpacesSvc
    API --> NdviSvc
    API --> HexSvc
    API --> NurseriesSvc

    SpacesSvc --> DB
    SpacesSvc -.->|Failover on Zero DB| StaticFallback
    NdviSvc --> GEE
    NurseriesSvc --> NurseriesJSON
    SpacesSvc --> CommonsSvc
    SpacesSvc --> RouteSvc
```

---

## 4. Technical Implementation

### Frontend Components (`src/components/green/`)

* **`GreenExplorer.tsx`**: Central state coordinator that orchestrates the map viewport, active park selections, search queries, category filters, and layout modes.
* **`GreenMap.tsx`**: Custom React-Leaflet GIS canvas featuring custom SVG category markers, polygon outlines, NDVI raster layers, and route polylines. Implements explicit cleanup logic on unmount to prevent Leaflet container re-initialization errors in React 18 Strict Mode.
* **`GreenSidebar.tsx`**: Minimalist left navigation bar containing FixMumbai brand assets and mode switchers between the Civic Risk Map, Air Quality Map, and Green Density Explorer.
* **`GreenRightPanel.tsx`**: Floating intelligence drawer hosting category badges, live count headers, distance radius sliders, and scrollable space cards.
* **`GreenSpaceCard.tsx`**: Card item presenting space metadata, category badge, calculated walking distance, NDVI metric bars, and photo thumbnails.
* **`SearchBox.tsx`**: Debounced spatial and keyword search against the green space index.
* **`CitizenPhotoUpload.tsx`**: Photo evidence modal extracting EXIF GPS coordinates client-side to verify user proximity to the claimed space.

### Spatial Services & Algorithms (`src/lib/green/`)

* **`ndvi-provider.ts` & `gee-service.ts`**: Implements Sentinel-2 multispectral surface reflectance ingestion:
  $$\text{NDVI} = \frac{\text{Band 8 (NIR)} - \text{Band 4 (Red)}}{\text{Band 8 (NIR)} + \text{Band 4 (Red)}}$$
  Includes cloud-masking against the `QA60` bitmask and scene classification bands.
* **`ndvi-provenance.ts`**: Data validation model certifying whether NDVI metrics are live satellite pulls, composite estimates, or unvalidated.
* **`hex-grid-service.ts`**: Generates uniform 100m hexagonal polygons across urban bounding envelopes to calculate micro-density scores.
* **`boundary-distance.ts` & `routing.ts`**: Uses Turf.js (`@turf/turf`) to calculate true minimum distances from user coordinates to the nearest point on a park's perimeter polygon rather than relying solely on center points.
* **`spaces-service.ts` & `static-spaces-fallback.ts`**: Manages geospatial filtering and transparent fallback to 45+ verified static Mumbai entries if the database returns zero records.

---

## 5. API Surface

All feature endpoints are hosted under `/api/vegetation/*`:

| Endpoint | Method | Purpose | Key Parameters |
| :--- | :--- | :--- | :--- |
| `/api/vegetation/nearby` | `GET` | Returns green spaces within a radial distance | `lat`, `lon`, `radiusM`, `category`, `limit` |
| `/api/vegetation/search` | `GET` | Autocomplete search by park name or ward | `q`, `limit` |
| `/api/vegetation/metrics` | `GET` | Aggregated city and ward canopy density metrics | `city`, `ward` |
| `/api/vegetation/areas/[id]`| `GET` | Detailed metadata and polygon geometry for a space | `id` |
| `/api/vegetation/nurseries`| `GET` | BMC municipal nursery locations and contacts | `lat`, `lon`, `radiusM` |
| `/api/vegetation/route` | `GET` | Walking directions and waypoints to a target space | `fromLat`, `fromLon`, `toLat`, `toLon` |
| `/api/vegetation/tiles` | `GET` | Metadata and URL template for NDVI raster tiles | `layer`, `zoom` |
| `/api/vegetation/photos` | `POST` | Handles ground-truth citizen photo submissions | Multipart form data with EXIF GPS |

---

## 6. Technologies Used

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript 5 (Strict Mode)
* **Mapping & GIS:** Leaflet 1.9, React-Leaflet, Turf.js (`@turf/turf`), Overpass API
* **Satellite Analytics:** Sentinel-2 MSI (Copernicus), Google Earth Engine API
* **Styling:** Tailwind CSS, Lucide React Icons
* **Database & ORM:** Prisma ORM (SQLite for local dev, PostgreSQL for production)
* **Testing:** Vitest

---

## 7. Configuration and Setup

### Prerequisites
* Node.js 18.x or 20.x
* npm or pnpm

### Environment Variables (`.env`)
The green density feature runs in **zero-configuration mode** out-of-the-box using the built-in static fallbacks and OpenStreetMap records. For live satellite pulls via Google Earth Engine, configure:

```env
# Optional: Google Earth Engine Satellite Pipeline
GEE_PROJECT_ID=your-google-cloud-project-id
GEE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GEE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### Database Seeding
To populate the local SQLite/PostgreSQL database with the 600+ Mumbai green spaces:

```bash
# 1. Generate Prisma client
npx prisma generate

# 2. Push schema to dev database
npx prisma db push

# 3. Seed Mumbai spaces
npx ts-node scripts/green/seed-mumbai-spaces.ts
```

*Note: If the database is not seeded, the application seamlessly activates `static-spaces-fallback.ts`.*

---

## 8. How to Use

1. **Launch the application:**
   ```bash
   npm run dev
   ```
2. **Access the Green Explorer:** Open `http://localhost:3000/civic/green` (or `http://localhost:3000/green`) in your browser.
3. **Explore the Map:**
   * **Pan and Zoom:** Explore Mumbai's tree cover across wards.
   * **Click a Pin:** View the park's card in the right drawer with its category, area ($m^2$), and vegetation index.
   * **Filter Spaces:** Select category pills (*Park*, *Nature Reserve*, *Mangrove & Wetland*, etc.) or adjust the radius slider.
   * **Locate Yourself:** Click the geolocation button on the map to calculate walking routes to your nearest park.
   * **Upload Photos:** Click "Take Photo" or "Upload Photo" on a park card to submit community ground truth.

---

## 9. Testing and Verification

### Automated Test Coverage
The module includes focused test suites in the `tests/` directory:

* `tests/ndvi-provider.test.ts`: Verifies NDVI mathematical calculations, band thresholds, and normalization ranges.
* `tests/hex-grid-integrity.test.ts`: Tests 100m hexagonal tessellation geometry generation and boundary adherence.
* `tests/ndvi-provenance.test.ts`: Confirms data provenance tagging and prevents synthetic data leakage.

Run the test suite with:
```bash
npm test
```

### Production Build Verification
The feature has been validated against Next.js production builds:
```bash
npm run build
```
*Result: Compiled successfully across all 55 static and dynamic routes with full TypeScript type checks.*

---

## 10. Limitations and Future Improvements

* **Cloud Cover in Monsoon:** Sentinel-2 optical imagery is affected by monsoon cloud cover between June and September. Future releases can incorporate Sentinel-1 Synthetic Aperture Radar (SAR) for cloud-penetrating vegetation moisture monitoring.
* **Pedestrian Walking Network:** Distance calculations currently use Haversine and geodesic perimeter distances. Integrating OpenRouteService or Valhalla will provide turn-by-turn sidewalk routing taking Mumbai footbridges and rail crossings into account.
* **Tree Species Identification:** Citizen photo uploads currently verify GPS proximity; adding an on-device machine learning classifier could automatically identify native Indian tree species (e.g., Peepal, Banyan, Neem, Gulmohar).
