import { getOpenMeteoAirQualityForLocation } from './open-meteo-client';
import type {
  AirQualityResponse,
  AqiCategory,
  PollutantReading,
} from './types';
import { AirQualityServiceError } from './types';

/**
 * Standard CPCB / National AQI category buckets for 0–500 score.
 */
function getAqiCategory(value: number): AqiCategory {
  if (value <= 50) return 'Good';
  if (value <= 100) return 'Satisfactory';
  if (value <= 200) return 'Moderate';
  if (value <= 300) return 'Poor';
  if (value <= 400) return 'Very Poor';
  return 'Severe';
}

export function validateCoordinates(lat: unknown, lon: unknown): { lat: number; lon: number } {
  const latNum = typeof lat === 'string' ? Number(lat) : (lat as number);
  const lonNum = typeof lon === 'string' ? Number(lon) : (lon as number);

  if (
    typeof latNum !== 'number' ||
    typeof lonNum !== 'number' ||
    !Number.isFinite(latNum) ||
    !Number.isFinite(lonNum) ||
    latNum < -90 ||
    latNum > 90 ||
    lonNum < -180 ||
    lonNum > 180
  ) {
    throw new AirQualityServiceError(
      'lat and lon must be valid numbers (lat in [-90, 90], lon in [-180, 180])',
      'INVALID_COORDINATES',
      400
    );
  }

  return { lat: latNum, lon: lonNum };
}

/**
 * Returns air quality data using ONLY Open-Meteo.
 * Directly provides standard 0–500 AQI and all pollutant concentrations
 * without needing an API key or custom calculations.
 */
export async function getAirQualityForLocation(
  rawLat: unknown,
  rawLon: unknown
): Promise<AirQualityResponse> {
  const { lat, lon } = validateCoordinates(rawLat, rawLon);

  const reading = await getOpenMeteoAirQualityForLocation(lat, lon);

  if (!reading) {
    throw new AirQualityServiceError(
      'Open-Meteo API did not return any air quality data for this location.',
      'NO_DATA_AVAILABLE',
      404
    );
  }

  const aqiValue = reading.measuredAqi;
  const category = (typeof aqiValue === 'number') ? getAqiCategory(aqiValue) : 'Moderate';

  // Build pollutant map from raw Open-Meteo values
  const pollutantsData: Partial<Record<string, PollutantReading>> = {};
  for (const p of reading.pollutants) {
    pollutantsData[p.pollutantId] = p;
  }

  return {
    location: { latitude: lat, longitude: lon },
    aqi: (typeof aqiValue === 'number')
      ? {
          value: aqiValue,
          category,
          source: 'OPEN_METEO',
          dominantPollutant: 'PM2.5',
          valueType: 'measured',
        }
      : null,
    station: {
      name: reading.stationName,
      source: 'OPEN_METEO',
      distanceKm: 0,
      latitude: lat,
      longitude: lon,
      lastUpdated: reading.lastUpdated,
    },
    pollutants: pollutantsData,
    supplementary: [],
    timestamp: new Date().toISOString(),
    dataQuality: {
      nearestStationDistanceKm: 0,
      dataAgeMinutes: null,
      isStale: false,
      note: 'AQI and all pollutant values are provided directly by Open-Meteo (Copernicus CAMS & NOAA models). No API keys or manual calculations needed.',
    },
    sources: [
      {
        name: 'OPEN_METEO',
        stationsFound: 1,
        available: true,
      },
    ],
  };
}
