import { airQualityCache, CACHE_TTL, coordinateCacheKey } from './cache';
import type { PollutantReading, RawStationReading } from './types';

const OPEN_METEO_AIR_QUALITY_URL = 'https://air-quality-api.open-meteo.com/v1/air-quality';

interface OpenMeteoAirQualityResponse {
  latitude: number;
  longitude: number;
  current_units?: Record<string, string>;
  current?: {
    time: string;
    us_aqi?: number | null;
    european_aqi?: number | null;
    pm10?: number | null;
    pm2_5?: number | null;
    carbon_monoxide?: number | null;
    nitrogen_dioxide?: number | null;
    sulphur_dioxide?: number | null;
    ozone?: number | null;
    ammonia?: number | null;
  };
}

/**
 * Fetches real-time air quality data directly from the Open-Meteo Air Quality API.
 * - No API key is required.
 * - Returns the direct standard AQI (0–500 scale via `us_aqi`).
 * - Returns all raw pollutant concentrations directly with zero calculations.
 */
export async function getOpenMeteoAirQualityForLocation(
  lat: number,
  lon: number
): Promise<RawStationReading | null> {
  const cacheKey = coordinateCacheKey('open-meteo', lat, lon);

  return airQualityCache.getOrSet(cacheKey, CACHE_TTL.OPEN_METEO_MS, async () => {
    try {
      const url = `${OPEN_METEO_AIR_QUALITY_URL}?latitude=${lat}&longitude=${lon}&current=us_aqi,european_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,ammonia`;
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(6000),
      });

      if (!res.ok) {
        const errorText = await res.text().catch(() => '');
        console.warn(`[open-meteo] HTTP ${res.status}: ${errorText || res.statusText}`);
        return null;
      }

      const data: OpenMeteoAirQualityResponse = await res.json();
      if (!data.current) return null;

      const current = data.current;
      const pollutants: PollutantReading[] = [];

      if (typeof current.pm2_5 === 'number') {
        pollutants.push({
          pollutantId: 'PM2.5',
          unit: 'µg/m³',
          avg: current.pm2_5,
          min: null,
          max: null,
        });
      }

      if (typeof current.pm10 === 'number') {
        pollutants.push({
          pollutantId: 'PM10',
          unit: 'µg/m³',
          avg: current.pm10,
          min: null,
          max: null,
        });
      }

      if (typeof current.nitrogen_dioxide === 'number') {
        pollutants.push({
          pollutantId: 'NO2',
          unit: 'µg/m³',
          avg: current.nitrogen_dioxide,
          min: null,
          max: null,
        });
      }

      if (typeof current.sulphur_dioxide === 'number') {
        pollutants.push({
          pollutantId: 'SO2',
          unit: 'µg/m³',
          avg: current.sulphur_dioxide,
          min: null,
          max: null,
        });
      }

      if (typeof current.ozone === 'number') {
        pollutants.push({
          pollutantId: 'OZONE',
          unit: 'µg/m³',
          avg: current.ozone,
          min: null,
          max: null,
        });
      }

      if (typeof current.carbon_monoxide === 'number') {
        pollutants.push({
          pollutantId: 'CO',
          unit: 'µg/m³',
          avg: current.carbon_monoxide,
          min: null,
          max: null,
        });
      }

      if (typeof current.ammonia === 'number') {
        pollutants.push({
          pollutantId: 'NH3',
          unit: 'µg/m³',
          avg: current.ammonia,
          min: null,
          max: null,
        });
      }

      // Direct 0-500 AQI from Open-Meteo (us_aqi)
      const measuredAqi = typeof current.us_aqi === 'number' ? current.us_aqi : null;

      const reading: RawStationReading = {
        source: 'OPEN_METEO',
        stationId: `om-${lat.toFixed(3)}-${lon.toFixed(3)}`,
        stationName: 'Open-Meteo Air Quality Service (CAMS / Copernicus)',
        latitude: lat,
        longitude: lon,
        city: null,
        state: null,
        lastUpdated: current.time ? new Date(current.time).toISOString() : new Date().toISOString(),
        pollutants,
        measuredAqi,
        dominantPollutant: 'PM2.5',
        distanceKm: 0,
        coordinatesResolvedFrom: 'upstream',
      };

      return reading;
    } catch (err) {
      console.warn('[open-meteo] Error fetching air quality:', err);
      return null;
    }
  });
}
