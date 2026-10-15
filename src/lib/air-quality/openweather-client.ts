import { airQualityCache, CACHE_TTL, coordinateCacheKey } from './cache';
import { isLocationInMumbai, reverseGeocodeLocation } from './station-resolver';
import { calculateAqi } from './aqi-calculator';
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
 * Finds the dominant pollutant based on which component is highest relative to clean air thresholds.
 */
function findDominantPollutant(comps: OpenWeatherPollutionResponse['list'][0]['components']): PollutantId {
  const scores: Array<{ id: PollutantId; ratio: number }> = [
    { id: 'PM2.5', ratio: (comps.pm2_5 || 0) / 10 },
    { id: 'PM10', ratio: (comps.pm10 || 0) / 20 },
    { id: 'NO2', ratio: (comps.no2 || 0) / 40 },
    { id: 'OZONE', ratio: (comps.o3 || 0) / 60 },
    { id: 'SO2', ratio: (comps.so2 || 0) / 20 },
    { id: 'CO', ratio: (comps.co || 0) / 4400 },
  ];
  scores.sort((a, b) => b.ratio - a.ratio);
  return scores[0]?.id || 'PM2.5';
}

/**
 * Fetches real-time atmospheric air quality data from OpenWeather Air Pollution API for specific coordinates.
 * Gives directly the official OpenWeather Air Quality Index (AQI 1 to 5) without artificial custom calculations.
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

      // Compute official Indian National Air Quality Index (0-500) from component concentrations
      const pollutantMap: Partial<Record<PollutantId, PollutantReading>> = {};
      for (const p of pollutants) pollutantMap[p.pollutantId] = p;
      const calculatedNaqi = calculateAqi(pollutantMap);

      const defaultNaqiForLevel: Record<number, number> = {
        1: 35,
        2: 75,
        3: 150,
        4: 250,
        5: 350,
      };

      const measuredAqi =
        calculatedNaqi?.value ??
        (record.main.aqi <= 5 ? defaultNaqiForLevel[record.main.aqi] || 150 : record.main.aqi);
      const dominantPollutant = calculatedNaqi?.dominantPollutant ?? findDominantPollutant(comps);

      let city = 'India';
      let state = 'India';

      if (isLocationInMumbai(lat, lon)) {
        city = 'Mumbai';
        state = 'Maharashtra';
      } else {
        const geo = await reverseGeocodeLocation(lat, lon);
        if (geo.city) city = geo.city;
        if (geo.state) state = geo.state;
      }

      const reading: RawStationReading = {
        source: 'OPENWEATHER',
        stationId: `ow-${lat.toFixed(3)}-${lon.toFixed(3)}`,
        stationName:
          city && city !== 'India'
            ? `OpenWeather Atmospheric Observation (${city})`
            : 'OpenWeather Atmospheric Observation',
        latitude: lat,
        longitude: lon,
        city,
        state,
        lastUpdated: record.dt ? new Date(record.dt * 1000).toISOString() : new Date().toISOString(),
        pollutants,
        measuredAqi,
        openWeatherIndex: record.main.aqi,
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
