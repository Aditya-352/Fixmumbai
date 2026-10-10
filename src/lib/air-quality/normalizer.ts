import { calculateAqi } from './aqi-calculator';
import { getAqicnStationsForLocation } from './aqicn-client';
import { getOpenWeatherAirQualityForLocation } from './openweather-client';
import { isLocationInMumbai, rankStationsByDistance } from './station-resolver';
import type {
  AirQualityResponse,
  PollutantId,
  PollutantReading,
  RawStationReading,
  AqiCategory,
} from './types';
import { AirQualityServiceError } from './types';

const STALE_DATA_THRESHOLD_MINUTES = 180;

function toPollutantMap(
  pollutants: PollutantReading[]
): Partial<Record<PollutantId, PollutantReading>> {
  const map: Partial<Record<PollutantId, PollutantReading>> = {};
  for (const p of pollutants) map[p.pollutantId] = p;
  return map;
}

function stationSummary(station: RawStationReading) {
  return {
    name: station.stationName,
    source: station.source,
    distanceKm: station.distanceKm === null ? null : Math.round(station.distanceKm * 10) / 10,
    latitude: station.latitude,
    longitude: station.longitude,
    lastUpdated: station.lastUpdated,
  };
}

function ageInMinutes(isoTimestamp: string | null): number | null {
  if (!isoTimestamp) return null;
  const then = new Date(isoTimestamp).getTime();
  if (Number.isNaN(then)) return null;
  return Math.round((Date.now() - then) / 60000);
}

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

export async function getAirQualityForLocation(
  rawLat: unknown,
  rawLon: unknown
): Promise<AirQualityResponse> {
  const { lat, lon } = validateCoordinates(rawLat, rawLon);

  if (!isLocationInMumbai(lat, lon)) {
    throw new AirQualityServiceError(
      'The requested location is outside the Mumbai service area covered by this feature.',
      'OUT_OF_SERVICE_AREA',
      422
    );
  }

  const [aqicnResult, openWeatherResult] = await Promise.allSettled([
    getAqicnStationsForLocation(lat, lon),
    getOpenWeatherAirQualityForLocation(lat, lon),
  ]);

  const aqicnStationsRaw = aqicnResult.status === 'fulfilled' ? aqicnResult.value : [];
  const openWeatherReading = openWeatherResult.status === 'fulfilled' ? openWeatherResult.value : null;

  // Rank AQICN stations by distance
  const aqicnStations = rankStationsByDistance(aqicnStationsRaw, lat, lon, 50);

  const sources: AirQualityResponse['sources'] = [
    {
      name: 'AQICN',
      stationsFound: aqicnStations.length,
      available: aqicnResult.status === 'fulfilled',
      ...(aqicnResult.status === 'rejected' ? { error: String(aqicnResult.reason) } : {}),
    },
    {
      name: 'OPENWEATHER',
      stationsFound: openWeatherReading ? 1 : 0,
      available: openWeatherResult.status === 'fulfilled',
      ...(openWeatherResult.status === 'rejected' ? { error: String(openWeatherResult.reason) } : {}),
    },
  ];

  if (aqicnStations.length === 0 && !openWeatherReading) {
    throw new AirQualityServiceError(
      'No AQICN or OpenWeather data could be found near this location.',
      'NO_DATA_AVAILABLE',
      404
    );
  }

  // Primary station is the nearest AQICN station
  const primaryStation = aqicnStations.length > 0 ? aqicnStations[0] : null;

  let aqiBlock = null;
  if (primaryStation && typeof primaryStation.measuredAqi === 'number') {
    aqiBlock = {
      value: primaryStation.measuredAqi,
      category: getAqiCategory(primaryStation.measuredAqi),
      source: 'AQICN' as const,
      dominantPollutant: primaryStation.dominantPollutant ?? null,
      valueType: 'measured' as const,
    };
  } else if (openWeatherReading && typeof openWeatherReading.measuredAqi === 'number') {
    aqiBlock = {
      value: openWeatherReading.measuredAqi,
      category: getAqiCategory(openWeatherReading.measuredAqi),
      source: 'OPENWEATHER' as const,
      dominantPollutant: openWeatherReading.dominantPollutant ?? null,
      valueType: 'measured' as const,
    };
  }

  // We use OpenWeather for pollutants if available, else fallback to AQICN pollutants
  let pollutantsData = {};
  if (openWeatherReading && openWeatherReading.pollutants.length > 0) {
    pollutantsData = toPollutantMap(openWeatherReading.pollutants);
  } else if (primaryStation) {
    pollutantsData = toPollutantMap(primaryStation.pollutants);
  }

  const nearestOverall = primaryStation ?? openWeatherReading ?? null;
  const dataAgeMinutes = ageInMinutes(nearestOverall?.lastUpdated ?? null);
  const isStale = dataAgeMinutes !== null && dataAgeMinutes > STALE_DATA_THRESHOLD_MINUTES;

  const noteParts = [
    'AQI is sourced from AQICN. Detailed pollutant data is sourced from OpenWeather API.',
    'This value reflects the nearest available monitoring station, not a sensor at your exact GPS coordinate.',
  ];
  if (isStale) {
    noteParts.push('The underlying reading is more than 3 hours old and may not reflect current conditions.');
  }

  return {
    location: { latitude: lat, longitude: lon },
    aqi: aqiBlock,
    station: primaryStation ? stationSummary(primaryStation) : (openWeatherReading ? stationSummary(openWeatherReading) : null),
    pollutants: pollutantsData,
    supplementary: [],
    timestamp: new Date().toISOString(),
    dataQuality: {
      nearestStationDistanceKm:
        nearestOverall?.distanceKm === null || nearestOverall?.distanceKm === undefined
          ? null
          : Math.round(nearestOverall.distanceKm * 10) / 10,
      dataAgeMinutes,
      isStale,
      note: noteParts.join(' '),
    },
    sources,
  };
}
