import { airQualityCache, CACHE_TTL, coordinateCacheKey } from './cache';
import type { PollutantReading, RawStationReading } from './types';

const OPENWEATHER_AIR_POLLUTION_URL = 'https://api.openweathermap.org/data/2.5/air_pollution';

interface OpenWeatherPollutionResponse {
  coord: {
    lon: number;
    lat: number;
  };
  list: Array<{
    main: {
      aqi: number; // 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor
    };
    components: {
      co: number;     // μg/m3
      no?: number;    // μg/m3
      no2: number;    // μg/m3
      o3: number;     // μg/m3
      so2: number;    // μg/m3
      pm2_5: number;  // μg/m3
      pm10: number;   // μg/m3
      nh3?: number;   // μg/m3
    };
    dt: number;
  }>;
}

/**
 * Fetches real-time air quality data from OpenWeather Air Pollution API.
 * Returns raw AQI (1–5) and all pollutant concentrations directly from the API.
 * No calculations are applied — all values are taken as-is from OpenWeather.
 */
export async function getOpenWeatherAirQualityForLocation(
  lat: number,
  lon: number
): Promise<RawStationReading | null> {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) return null;

  const cacheKey = coordinateCacheKey('openweather', lat, lon);

  return airQualityCache.getOrSet(cacheKey, CACHE_TTL.OPENWEATHER_MS, async () => {
    try {
      const url = `${OPENWEATHER_AIR_POLLUTION_URL}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(6000),
      });

      if (!res.ok) {
        const errorText = await res.text().catch(() => '');
        console.warn(`[openweather] HTTP ${res.status}: ${errorText || res.statusText}`);
        return null;
      }

      const data: OpenWeatherPollutionResponse = await res.json();
      if (!data.list || data.list.length === 0) return null;

      const record = data.list[0];
      const comps = record.components;

      // Collect all pollutants directly from OpenWeather response — raw values, no calculations
      const pollutants: PollutantReading[] = [];

      if (typeof comps.pm2_5 === 'number') {
        pollutants.push({ pollutantId: 'PM2.5', unit: 'µg/m³', avg: comps.pm2_5, min: null, max: null });
      }

      if (typeof comps.pm10 === 'number') {
        pollutants.push({ pollutantId: 'PM10', unit: 'µg/m³', avg: comps.pm10, min: null, max: null });
      }

      if (typeof comps.no2 === 'number') {
        pollutants.push({ pollutantId: 'NO2', unit: 'µg/m³', avg: comps.no2, min: null, max: null });
      }

      if (typeof comps.so2 === 'number') {
        pollutants.push({ pollutantId: 'SO2', unit: 'µg/m³', avg: comps.so2, min: null, max: null });
      }

      if (typeof comps.o3 === 'number') {
        pollutants.push({ pollutantId: 'OZONE', unit: 'µg/m³', avg: comps.o3, min: null, max: null });
      }

      if (typeof comps.co === 'number') {
        pollutants.push({ pollutantId: 'CO', unit: 'µg/m³', avg: comps.co, min: null, max: null });
      }

      if (typeof comps.nh3 === 'number') {
        pollutants.push({ pollutantId: 'NH3', unit: 'µg/m³', avg: comps.nh3, min: null, max: null });
      }

      // Raw OpenWeather AQI 1–5 — used as-is
      const rawAqi = record.main.aqi;

      const reading: RawStationReading = {
        source: 'OPENWEATHER',
        stationId: `ow-${lat.toFixed(3)}-${lon.toFixed(3)}`,
        stationName: 'OpenWeather Air Pollution API',
        latitude: lat,
        longitude: lon,
        city: null,
        state: null,
        lastUpdated: record.dt ? new Date(record.dt * 1000).toISOString() : new Date().toISOString(),
        pollutants,
        measuredAqi: rawAqi,
        openWeatherIndex: rawAqi,
        dominantPollutant: 'PM2.5',
        distanceKm: 0,
        coordinatesResolvedFrom: 'upstream',
      };

      return reading;
    } catch (err) {
      console.warn('[openweather] Error fetching air quality:', err);
      return null;
    }
  });
}
