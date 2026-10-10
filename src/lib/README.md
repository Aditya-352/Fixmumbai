# Library & Core Logic

This directory contains the central business logic, utility functions, and third-party API clients used across the platform.

## Modules

- **`db.ts`**: Instantiates and exports the global Prisma database client.
- **`auth.ts`**: Utilities and configuration for user authentication and session management.
- **`gis.ts`**: Geospatial functions utilizing `turf.js` for calculating points in polygons, distance, and geofencing.
- **`duplicate-detector.ts`**: Logic for analyzing incoming reports to detect and merge duplicate civic issues based on proximity and similarity.
- **`air-quality/`**: A complex aggregator that pulls real-time environmental data from multiple sources (AQICN, CPCB, OpenAQ, OpenWeather) and computes a unified AQI for the user.
- **`activity-score.ts`**: Handles the calculation of user reputation/engagement scores based on their contributions and verifications.
