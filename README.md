# 🌿 PRI_SEHAT PULSE
### Smart Civic Intelligence • Environmental Monitoring • Sustainable Cities

**PRI_SEHAT PULSE** is a geospatial civic-tech platform designed to help citizens explore urban environments, report civic issues, understand environmental conditions, and discover green spaces through interactive maps and data-driven insights.

The platform brings civic reporting, Geographic Information Systems (GIS), air-quality exploration, Wet Bulb Globe Temperature (WBGT) heat mapping, and urban greenery discovery into a unified experience.

Supporting **Mumbai, Pune, and Bengaluru**, PRI_SEHAT PULSE aims to make civic information more accessible and encourage cleaner, greener, healthier, and more sustainable cities.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Civic GIS Map](#-civic-gis-map)
- [Air Quality Monitoring](#-air-quality-monitoring)
- [WBGT Heat Map](#-wbgt-heat-map)
- [Green Density & Nature Explorer](#-green-density--nature-explorer)
- [Multi-City Architecture](#-multi-city-architecture)
- [Technology Stack](#-technology-stack)
- [Application Architecture](#-application-architecture)
- [Performance Optimization](#-performance-optimization)
- [Getting Started](#-getting-started)
- [Environment Configuration](#-environment-configuration)
- [Development Workflow](#-development-workflow)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌍 Overview

Urban communities face interconnected challenges involving waste management, sanitation, air pollution, rising temperatures, and declining green cover.

PRI_SEHAT PULSE provides a unified digital platform to explore these challenges through interactive geospatial visualization and civic reporting.

Instead of treating civic issues and environmental information as separate experiences, the platform brings them together through dedicated map layers and exploration tools.

### Platform Objectives

- Make civic issues easier to report, locate, and track.
- Improve visibility into public reports across administrative wards.
- Provide access to air-quality and urban heat information.
- Help users discover nearby parks, gardens, and green spaces.
- Visualize vegetation and green-cover information using geospatial data.
- Support city-specific exploration through a synchronized multi-city experience.
- Improve the performance and usability of map-based environmental applications.

---

## ✨ Key Features

### 1. Interactive Civic Reporting

Explore public civic reports through an interactive map interface.

- View reported civic issues geographically.
- Search using keywords, locations, or case IDs.
- Filter reports by administrative ward.
- Filter by issue category and resolution status.
- Open individual case details.
- Track report statuses, including submitted, acknowledged, and resolution-submitted states where available.
- Access the report-issue workflow.

### 2. Environmental Intelligence

Explore environmental information through dedicated visualization layers.

- Air Quality Layer.
- WBGT Heat Map.
- Green Density & Nature Explorer.
- Geospatial visualization of green spaces.
- Satellite imagery and vegetation-index exploration where data is available.

### 3. Multi-City Exploration

Switch between supported cities:

- Mumbai
- Pune
- Bengaluru

The selected city determines the relevant exploration context, allowing users to navigate city-specific environmental data and green spaces.

### 4. Interactive GIS Experience

The mapping interface uses geospatial tools to support spatial exploration, map navigation, geographic overlays, and location-based information.

### 5. Performance-Conscious Data Access

Database operations are designed to reduce unnecessary repeated queries when retrieving green-space records and their associated vegetation observations and images.

---

## 🗺️ Civic GIS Map

The Civic GIS Map is the primary interface for exploring public reports geographically.

### Features

- Interactive map navigation and zoom controls.
- Geographic markers representing civic reports.
- Search by case ID or relevant keywords.
- Ward-based filtering.
- Issue-category filtering.
- Resolution-status filtering.
- Filtered case-list panel.
- Individual case-detail navigation.
- Entry points to environmental exploration layers.

The interface combines a spatial map with a case-list panel so users can explore geographic locations and review the associated report information.

### Typical Workflow

1. Open the Civic GIS Map.
2. Search for a location or case ID.
3. Apply ward, category, or status filters.
4. Explore matching markers on the map.
5. Open a report to inspect its details.

---

## 🌬️ Air Quality Monitoring

The Air Quality Layer provides a dedicated interface for exploring air-quality information geographically.

Its purpose is to make environmental conditions easier to understand through spatial visualization.

The layer can be used alongside civic mapping to provide broader environmental context.

**Data note:** Availability, coverage, timestamps, and measurement accuracy depend on the configured data source. The interface should not be interpreted as providing live readings unless the underlying data source supplies current observations.

---

## 🌡️ WBGT Heat Map

The Wet Bulb Globe Temperature (WBGT) Heat Map provides a dedicated view for understanding heat-related environmental conditions.

WBGT is an environmental heat-stress indicator that considers multiple environmental factors, depending on the measurement or estimation method used.

### Intended Use

- Explore spatial differences in heat-related conditions.
- Visualize geographic patterns using a dedicated heat-map interface.
- Support environmental awareness and urban exploration.

Actual WBGT measurements or estimates require an appropriate data source and methodology. A visualization layer alone does not establish that measurements are real-time or scientifically validated.

---

## 🌳 Green Density & Nature Explorer

The Green Density & Nature Explorer is a core environmental component of PRI_SEHAT PULSE.

It allows users to explore green spaces, investigate geographic boundaries, and examine available vegetation information through an interactive GIS interface.

### Green-Space Discovery

The explorer presents green-space information through searchable and navigable cards.

Depending on the available record, users can inspect:

- Green-space names and categories.
- Green-density classifications.
- Distance to the nearest mapped boundary.
- Estimated walking time.
- Geographic location and map context.
- Associated images when available.

Walking estimates and classifications depend on the available geographic data and the implemented calculation method.

### Geospatial Visualization

The explorer uses mapping and geospatial processing tools to support geographic operations and map-based exploration.

Relevant technologies include Leaflet, React-Leaflet, and Turf.js.

### Satellite Imagery and NDVI

The project includes work involving satellite imagery and Normalized Difference Vegetation Index (NDVI) exploration.

NDVI is a remote-sensing index commonly used to assess vegetation greenness using near-infrared and red reflectance.

A typical NDVI expression is:

NDVI = (NIR − Red) / (NIR + Red)

NDVI can help investigate vegetation patterns, but it is not a direct measurement of tree count, public accessibility, or ground-level plant health.

The project has used an AgroMonitoring integration for Sentinel-2 imagery and NDVI-related workflows, alongside satellite imagery and geographic data.

Coverage and results depend on imagery availability, cloud conditions, configured geographic areas, and API configuration.

### Green-Space Images

Green-space cards can display associated photographs when image sources are available.

Images should retain their source and attribution information where required. Generic or randomly sourced greenery photographs should not be represented as verified photographs of a specific park without location verification.

---

## 🏙️ Multi-City Architecture

PRI_SEHAT PULSE supports city-specific exploration for Mumbai, Pune, and Bengaluru.

### City Selection

The application includes city-selection functionality in the environmental exploration experience.

The selected city provides context for the displayed geographic data and green-space records.

Where city selection is shared across the main map and Green Density Explorer, both interfaces should remain synchronized through a common city-selection state or provider.

### City-Aware Data

City-aware data access is important for keeping map markers, green-space records, search results, and environmental visualizations consistent with the selected city.

The geographic boundaries, administrative systems, available records, and environmental data sources may differ between cities.

For example, municipal boundaries and administrative datasets must be configured according to the relevant local authority rather than assuming every city uses the same geographic model.

**Data integrity principle:** Each city's records and geographic calculations should use the correct city context. Missing data should be identified explicitly rather than silently replaced with unrelated records from another city.

---

## 🛠️ Technology Stack

The following technologies are part of the project's established development stack.

| Technology | Purpose |
|---|---|
| Next.js 14 | Application framework and routing |
| React 18 | Component-based user interface |
| TypeScript / JavaScript | Application development |
| Leaflet | Interactive mapping |
| React-Leaflet | React integration for Leaflet maps |
| Turf.js | Geospatial calculations and geographic operations |
| PostgreSQL | Relational database |
| Prisma ORM | Database access and data modeling |
| AgroMonitoring API | Configured satellite and vegetation-data workflows |
| Sentinel-2 imagery | Satellite-based vegetation analysis |
| Esri World Imagery | Satellite basemap imagery where configured |
| OpenStreetMap / Overpass | Geographic data and mapping workflows where configured |
| Git and GitHub | Version control and collaboration |

The precise technologies used by each module may differ according to the current implementation.

---

## 🏗️ Application Architecture

PRI_SEHAT PULSE follows a web application architecture that combines an interactive frontend, server-side application logic, database access, and external geospatial data sources.

### Frontend

The frontend is responsible for:

- Rendering application pages and reusable components.
- Managing map interactions.
- Displaying civic reports and green-space cards.
- Handling search and filter controls.
- Supporting city selection and navigation.
- Presenting geographic layers and environmental information.

### Server-Side Application

The server-side layer handles relevant application requests and integrations.

Responsibilities may include:

- Retrieving civic report records.
- Fetching green-space information.
- Loading vegetation observations and image metadata.
- Processing city-specific query parameters.
- Communicating with configured external APIs.
- Applying caching and data-access optimizations.

### Database

PostgreSQL stores structured application data, accessed through Prisma ORM.

Depending on the configured schema, relevant records include green spaces, vegetation observations, image metadata, and other application entities.

### External Data Sources

The project uses or has integrated workflows involving geographic data, satellite imagery, and vegetation information.

External data availability and API credentials determine which datasets can be retrieved.

---

## ⚡ Performance Optimization

Efficient database access is particularly important when loading hundreds or thousands of green-space records.

### Reducing N+1 Queries

A previous Green Density optimization addressed repeated database queries for vegetation observations and image metadata.

The earlier implementation could perform separate lookups for individual green spaces that lacked preloaded vegetation or image information.

The optimized approach batches relevant lookups using collections of green-space IDs and maps the returned records back to their corresponding spaces.

### Reported Query Reduction

| Metric | Before | After |
|---|---:|---:|
| Green-space records | 1,031 | 1,031 |
| Database queries in the targeted lookup path | 2,063 | 3 |

This represents a reduction of approximately 99.85% in query count for that targeted lookup path.

The figures describe the reported optimization, not a guarantee that every application request performs exactly three database queries. Actual query counts depend on execution paths, caching, and database operations.

### Benefits

- Fewer repetitive database round trips.
- More efficient retrieval of associated metadata.
- Better scalability for larger green-space collections.
- Reduced database overhead in the optimized lookup path.

Performance should be measured using representative data and verified with database logs or query instrumentation.

---

## 🚀 Getting Started

### Prerequisites

Install the following development tools:

- Node.js compatible with the project.
- npm or the package manager specified by the repository.
- PostgreSQL.
- Git.

Access to external geospatial data requires the relevant API credentials where applicable.

### 1. Clone the Repository

Replace the placeholder with the repository URL you have access to.

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

### 2. Install Dependencies

```bash
npm install
```

If the repository uses a committed lockfile and a compatible npm setup, `npm ci` can be used for reproducible installation.

### 3. Configure Environment Variables

Create a local `.env` file using the variable names expected by the application.

```bash
touch .env
```

Add the database connection string and any external API credentials required by the existing implementation.

Do not commit secret values to GitHub.

### 4. Configure the Database

Ensure PostgreSQL is running and the database connection is correctly configured.

Use the project's existing Prisma schema and migration workflow.

For a project configured with Prisma migrations, the command may be:

```bash
npx prisma migrate deploy
```

Use the appropriate development migration command when creating or modifying schema migrations locally.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local address shown in the terminal, commonly:

```text
http://localhost:3000
```

The exact setup commands depend on the scripts and configuration currently present in the repository.

---

## 🔐 Environment Configuration

Keep API keys and database credentials in server-side environment variables.

The following table describes configuration categories that may be required. Confirm the exact variable names in the existing codebase before adding them.

| Configuration | Purpose |
|---|---|
| PostgreSQL connection URL | Database connectivity |
| AgroMonitoring API key | Configured satellite and vegetation workflows |
| External image API key, if integrated | Remote image discovery |
| Map or imagery provider credentials, if required | Access to configured geographic services |

Do not expose private credentials through client-side environment variables.

Never commit `.env` files containing secrets. Use a suitable `.env.example` containing placeholder values for documented configuration.

---

## 🧪 Testing and Verification

Before deploying changes, verify the following areas:

- Application pages load successfully.
- Civic report search and filters return the expected results.
- Case details open correctly.
- Map markers correspond to the intended records.
- City switching updates the relevant city context.
- The Green Density Explorer displays the correct city-specific spaces.
- Missing images and unavailable external services fail gracefully.
- Satellite and vegetation layers handle unavailable data appropriately.
- Database queries avoid unnecessary per-record lookups.
- Mobile and desktop layouts remain usable.

External data layers should clearly communicate when data is unavailable or stale.

---

## 🔮 Future Improvements

Potential areas for continued development include:

- More comprehensive city-specific environmental datasets.
- Improved monitoring and validation of external data sources.
- Additional vegetation-analysis workflows.
- Better image provenance and location verification.
- More extensive performance monitoring.
- Improved accessibility and mobile usability.
- Expanded testing for geographic calculations and city switching.
- More detailed environmental insights and historical comparisons.

These are potential improvements, not claims that every feature is already implemented.

---

## 🤝 Contributing

Contributions that improve functionality, performance, accessibility, data quality, and documentation are welcome.

### Suggested Workflow

1. Fork the repository.
2. Create a feature branch.
3. Implement a focused change.
4. Run relevant checks.
5. Commit your changes with a descriptive message.
6. Open a pull request explaining the implementation and its impact.

For GIS-related changes, include information about data sources, coordinate systems, geographic assumptions, and validation where relevant.

---

## 🔒 Security and Data Quality

- Keep private API keys outside committed source code.
- Validate user input on the server side.
- Protect report-submission and database operations appropriately.
- Respect external data-provider terms and attribution requirements.
- Distinguish verified geographic information from estimated or illustrative data.
- Avoid presenting unavailable or stale observations as live environmental measurements.

---

## 📄 License

Add the applicable license and attribution information according to the repository's existing licensing terms and the requirements of the external datasets and services used.

Do not assume that all third-party imagery, maps, or datasets share the same license.

---

## 🌱 Vision

**PRI_SEHAT PULSE — Connecting Civic Action with Environmental Intelligence.**

By bringing civic reporting, interactive GIS, air-quality exploration, heat awareness, and green-space discovery together, PRI_SEHAT PULSE aims to make urban information easier to explore and support more informed, sustainable communities.

*Explore your city. Understand your environment. Contribute to a better future.*
