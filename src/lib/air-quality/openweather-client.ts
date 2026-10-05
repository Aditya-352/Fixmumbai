import { calculateAqi } from './aqi-calculator';
import { airQualityCache, CACHE_TTL, coordinateCacheKey } from './cache';
import type { PollutantId, PollutantReading, RawStationReading } from './types';

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
      co: number; // μg/m3
      no?: number; // μg/m3
      no2: number; // μg/m3
      o3: number; // μg/m3
      so2: number; // μg/m3
      pm2_5: number; // μg/m3
      pm10: number; // μg/m3
      nh3?: number; // μg/m3
    };
    dt: number;
  }>;
}

/**
 * Maps OpenWeather 1-5 index to typical mid-range CPCB AQI numbers if component calculation is unavailable.
 */
function defaultAqiFromOpenWeatherIndex(idx: number): number {
  switch (idx) {
    case 1:
      return 35; // Good (0-50)
    case 2:
      return 75; // Fair / Satisfactory (51-100)
    case 3:
      return 150; // Moderate (101-200)
    case 4:
      return 250; // Poor (201-300)
    case 5:
      return 350; // Very Poor (301-400)
    default:
      return 100;
  }
}

/**
 * Fetches real-time atmospheric air quality data from OpenWeather Air Pollution API for specific coordinates.
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

      const pollutants: PollutantReading[] = [];

      if (typeof comps.pm2_5 === 'number') {
        pollutants.push({
          pollutantId: 'PM2.5',
          unit: 'µg/m³',
          avg: Math.round(comps.pm2_5 * 10) / 10,
          min: null,
          max: null,
        });
      }

      if (typeof comps.pm10 === 'number') {
        pollutants.push({
          pollutantId: 'PM10',
          unit: 'µg/m³',
          avg: Math.round(comps.pm10 * 10) / 10,
          min: null,
          max: null,
        });
      }

      if (typeof comps.no2 === 'number') {
        pollutants.push({
          pollutantId: 'NO2',
          unit: 'µg/m³',
          avg: Math.round(comps.no2 * 10) / 10,
          min: null,
          max: null,
        });
      }

      if (typeof comps.so2 === 'number') {
        pollutants.push({
          pollutantId: 'SO2',
          unit: 'µg/m³',
          avg: Math.round(comps.so2 * 10) / 10,
          min: null,
          max: null,
        });
      }

      if (typeof comps.o3 === 'number') {
        pollutants.push({
          pollutantId: 'OZONE',
          unit: 'µg/m³',
          avg: Math.round(comps.o3 * 10) / 10,
          min: null,
          max: null,
        });
      }

      if (typeof comps.co === 'number') {
        // Convert OpenWeather μg/m³ to mg/m³ for Indian CPCB standard (1 mg = 1000 μg)
        pollutants.push({
          pollutantId: 'CO',
          unit: 'mg/m³',
          avg: Math.round((comps.co / 1000) * 100) / 100,
          min: null,
          max: null,
        });
      }

      if (typeof comps.nh3 === 'number') {
        pollutants.push({
          pollutantId: 'NH3',
          unit: 'µg/m³',
          avg: Math.round(comps.nh3 * 10) / 10,
          min: null,
          max: null,
        });
      }

      const pollutantMap: Partial<Record<PollutantId, PollutantReading>> = {};
      for (const p of pollutants) {
        pollutantMap[p.pollutantId] = p;
      }

      const calculated = calculateAqi(pollutantMap);
      const measuredAqi = calculated?.value ?? defaultAqiFromOpenWeatherIndex(record.main.aqi);
      const dominantPollutant: PollutantId = calculated?.dominantPollutant ?? 'PM2.5';

      const reading: RawStationReading = {
        source: 'OPENWEATHER',
        stationId: `ow-${lat.toFixed(3)}-${lon.toFixed(3)}`,
        stationName: `OpenWeather Atmospheric Observation`,
        latitude: lat,
        longitude: lon,
        city: 'Mumbai',
        state: 'Maharashtra',
        lastUpdated: record.dt ? new Date(record.dt * 1000).toISOString() : new Date().toISOString(),
        pollutants,
        measuredAqi,
        dominantPollutant,
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
