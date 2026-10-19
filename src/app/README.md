# App Routing & API

This directory contains the Next.js App Router structure.

## Overview

- **`api/`**: The core backend logic for the application resides here as Next.js API routes.
  - Handles authentication and user sessions (`auth/`).
  - Manages civic issues, reporting, and verification (`reports/`, `categories/`).
  - Serves geospatial and localized data for Mumbai (`wards/`, `constituencies/`, `hotspots/`).
  - Provides integrations for air quality reporting (`air-quality/`).
  - Analyzes data and user activity (`analytics/`, `activity/`).

The API routes connect directly with the database (via Prisma) and core logic found in the `src/lib` directory.
