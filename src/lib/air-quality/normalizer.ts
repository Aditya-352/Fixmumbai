import { calculateAqi, categoryForAqi } from './aqi-calculator';
import { getAqicnStationsForLocation, getAqicnStationsForMumbai } from './aqicn-client';
import { getCpcbStationsForMumbai } from './cpcb-client';
import { getOpenWeatherAirQualityForLocation } from './openweather-client';
import { getOpenAqStationsNear } from './openaq-client';
import { isLocationInIndia, isLocationInMumbai, rankStationsByDistance } from './station-resolver';
import type {
  AirQualityResponse,
  AqiCategory,
  AqiSource,
  PollutantId,
  PollutantReading,
  RawStationReading,
} from './types';
import { AirQualityServiceError } from './types';

const STALE_DATA_THRESHOLD_MINUTES = 180;
const AQICN_MAX_DISTANCE_KM = 80; // Supports any city, town, or district in India
const CPCB_MAX_DISTANCE_KM = 35;
const OPENAQ_MAX_DISTANCE_KM = 30;

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
 * Returns formatted active AQI monitoring stations for display on the interactive map.
 */
export async function getLiveAqiStationsForMap() {
  const hasAqicn = Boolean(process.env.AQICN_API_TOKEN || process.env.AQICN_API_KEY);
  if (!hasAqicn) return null;

  try {
    const stations = await getAqicnStationsForMumbai();
    return stations
      .filter((s) => s.latitude !== null && s.longitude !== null && (s.measuredAqi !== null || s.pollutants.length > 0))
      .map((s, idx) => {
        const val = s.measuredAqi ?? calculateAqi(toPollutantMap(s.pollutants))?.value ?? 50;
        const cat = categoryForAqi(val);
        const dominant = s.dominantPollutant || 'PM2.5';
        return {
          id: `aqicn-${s.stationId || idx}`,
          name: s.stationName.split(',')[0] || s.stationName,
          area: s.stationName,
          lat: s.latitude as number,
          lng: s.longitude as number,
          value: Math.round(val),
          category: cat,
          pollutant: dominant,
          lastUpdated: s.lastUpdated,
        };
      });
  } catch (err) {
    console.error('[air-quality] Failed to fetch AQICN map stations:', err);
    return null;
  }
}

/**
 * Fetches real-time AQICN (primary), CPCB, and OpenAQ data for ANY location across India,
 * resolves the nearest usable station, computes AQI, and returns a normalized response.
 */
export async function getAirQualityForLocation(
  rawLat: unknown,
  rawLon: unknown
): Promise<AirQualityResponse> {
  const { lat, lon } = validateCoordinates(rawLat, rawLon);

  if (!isLocationInIndia(lat, lon)) {
    throw new AirQualityServiceError(
      'The requested location is outside India (supported coverage area).',
      'OUT_OF_SERVICE_AREA',
      422
    );
  }

  const inMumbai = isLocationInMumbai(lat, lon);
  const hasOpenWeather = Boolean(process.env.OPENWEATHER_API_KEY);
  const hasAqicn = Boolean(process.env.AQICN_API_TOKEN || process.env.AQICN_API_KEY);
  const hasCpcb = Boolean(process.env.CPCB_API_KEY);
  const hasOpenAq = Boolean(process.env.OPENAQ_API_KEY);

  const [openWeatherResult, aqicnResult, cpcbResult, openAqResult] = await Promise.allSettled([
    hasOpenWeather ? getOpenWeatherAirQualityForLocation(lat, lon) : Promise.resolve(null),
    hasAqicn ? getAqicnStationsForLocation(lat, lon) : Promise.resolve([]),
    hasCpcb && inMumbai ? getCpcbStationsForMumbai(lat, lon) : Promise.resolve([]),
    hasOpenAq ? getOpenAqStationsNear(lat, lon) : Promise.resolve([]),
  ]);

  const openWeatherStation = openWeatherResult.status === 'fulfilled' ? openWeatherResult.value : null;
  const aqicnStationsRaw = aqicnResult.status === 'fulfilled' ? aqicnResult.value : [];
  const cpcbStationsRaw = cpcbResult.status === 'fulfilled' ? cpcbResult.value : [];
  const openAqStationsRaw = openAqResult.status === 'fulfilled' ? openAqResult.value : [];

  const aqicnStations = rankStationsByDistance(aqicnStationsRaw, lat, lon, AQICN_MAX_DISTANCE_KM);
  const cpcbStations = rankStationsByDistance(cpcbStationsRaw, lat, lon, CPCB_MAX_DISTANCE_KM);
  const openAqStations = rankStationsByDistance(openAqStationsRaw, lat, lon, OPENAQ_MAX_DISTANCE_KM);

  const sources: AirQualityResponse['sources'] = [];

  if (hasOpenWeather) {
    sources.push({
      name: 'OPENWEATHER',
      stationsFound: openWeatherStation ? 1 : 0,
      available: Boolean(openWeatherStation),
      ...(openWeatherResult.status === 'rejected' ? { error: String(openWeatherResult.reason) } : {}),
    });
  }

  if (hasAqicn) {
    sources.push({
      name: 'AQICN',
      stationsFound: aqicnStations.length,
      available: aqicnResult.status === 'fulfilled',
      ...(aqicnResult.status === 'rejected' ? { error: String(aqicnResult.reason) } : {}),
    });
  }

  if (hasCpcb && inMumbai) {
    sources.push({
      name: 'CPCB',
      stationsFound: cpcbStations.length,
      available: cpcbResult.status === 'fulfilled',
      ...(cpcbResult.status === 'rejected' ? { error: String(cpcbResult.reason) } : {}),
    });
  }

  if (hasOpenAq) {
    sources.push({
      name: 'OPENAQ',
      stationsFound: openAqStations.length,
      available: openAqResult.status === 'fulfilled',
      ...(openAqResult.status === 'rejected' ? { error: String(openAqResult.reason) } : {}),
    });
  }

  if (!openWeatherStation && aqicnStations.length === 0 && cpcbStations.length === 0 && openAqStations.length === 0) {
    throw new AirQualityServiceError(
      'No air quality monitoring stations with usable data were found near this location in India.',
      'NO_DATA_AVAILABLE',
      404
    );
  }

  // --- Primary Provider Resolution ---
  let primaryStation: RawStationReading | null = null;
  let primaryAqi: {
    value: number;
    category: AqiCategory;
    dominantPollutant: PollutantId | null;
    valueType: 'measured' | 'calculated';
  } | null = null;
  let primarySource: AqiSource | null = null;

  // 1. Try OpenWeather (Direct Coordinate Atmospheric Simulation)
  if (openWeatherStation && openWeatherStation.pollutants.length > 0) {
    const calc = calculateAqi(toPollutantMap(openWeatherStation.pollutants));
    primaryStation = openWeatherStation;
    primarySource = 'OPENWEATHER';
    primaryAqi = {
      value: calc?.value ?? openWeatherStation.measuredAqi ?? 50,
      category: calc?.category ?? categoryForAqi(openWeatherStation.measuredAqi ?? 50),
      dominantPollutant: calc?.dominantPollutant ?? openWeatherStation.dominantPollutant ?? 'PM2.5',
      valueType: calc ? 'calculated' : 'measured',
    };
  }

  // 2. Try AQICN (Priority Ground Station Network)
  if (!primaryStation && aqicnStations.length > 0) {
    for (const station of aqicnStations) {
      if (typeof station.measuredAqi === 'number' && station.measuredAqi > 0) {
        primaryStation = station;
        primarySource = 'AQICN';
        primaryAqi = {
          value: Math.round(station.measuredAqi),
          category: categoryForAqi(station.measuredAqi),
          dominantPollutant: station.dominantPollutant ?? 'PM2.5',
          valueType: 'measured',
        };
        break;
      }
      const calc = calculateAqi(toPollutantMap(station.pollutants));
      if (calc) {
        primaryStation = station;
        primarySource = 'AQICN';
        primaryAqi = {
          value: calc.value,
          category: calc.category,
          dominantPollutant: calc.dominantPollutant,
          valueType: 'calculated',
        };
        break;
      }
    }
  }

  // 3. Fall back to CPCB if AQICN not matched (for Mumbai)
  if (!primaryStation && cpcbStations.length > 0) {
    for (const station of cpcbStations) {
      const calc = calculateAqi(toPollutantMap(station.pollutants));
      if (calc) {
        primaryStation = station;
        primarySource = 'CPCB';
        primaryAqi = {
          value: calc.value,
          category: calc.category,
          dominantPollutant: calc.dominantPollutant,
          valueType: 'calculated',
        };
        break;
      }
    }
  }

  // 3. Fall back to OpenAQ if still not matched
  if (!primaryStation && openAqStations.length > 0) {
    for (const station of openAqStations) {
      const calc = calculateAqi(toPollutantMap(station.pollutants));
      if (calc) {
        primaryStation = station;
        primarySource = 'OPENAQ';
        primaryAqi = {
          value: calc.value,
          category: calc.category,
          dominantPollutant: calc.dominantPollutant,
          valueType: 'calculated',
        };
        break;
      }
    }
  }

  // Supplementary stations
  const supplementary = openAqStations
    .filter((s) => primarySource !== 'OPENAQ' || s.stationId !== primaryStation?.stationId)
    .map((station) => ({
      source: 'OPENAQ' as const,
      station: stationSummary(station),
      pollutants: toPollutantMap(station.pollutants),
      aqi: calculateAqi(toPollutantMap(station.pollutants)),
    }));

  const nearestOverall = primaryStation ?? aqicnStations[0] ?? cpcbStations[0] ?? openAqStations[0] ?? null;
  const dataAgeMinutes = ageInMinutes(primaryStation?.lastUpdated ?? nearestOverall?.lastUpdated ?? null);
  const isStale = dataAgeMinutes !== null && dataAgeMinutes > STALE_DATA_THRESHOLD_MINUTES;

  const noteParts = [
    primarySource === 'OPENWEATHER'
      ? 'Air quality observations calculated via OpenWeather real-time atmospheric model for your exact GPS coordinates.'
      : 'This value reflects the nearest available monitoring station, not a sensor at your exact GPS coordinate.',
  ];
  if (primarySource === 'OPENWEATHER') {
    noteParts.push('Calibrated to National CPCB Air Quality Index breakpoint standards.');
  } else if (primarySource === 'AQICN') {
    noteParts.push('Air quality observations provided via AQICN real-time monitoring network.');
  } else if (primarySource === 'OPENAQ') {
    noteParts.push('No primary station was available nearby, so this is an OpenAQ-derived indicative AQI.');
  }
  if (isStale) {
    noteParts.push('The underlying reading is more than 3 hours old and may not reflect current conditions.');
  }

  return {
    location: { latitude: lat, longitude: lon },
    aqi: primaryAqi && primarySource
      ? {
          value: primaryAqi.value,
          category: primaryAqi.category,
          source: primarySource,
          dominantPollutant: primaryAqi.dominantPollutant,
          valueType: primaryAqi.valueType,
        }
      : null,
    station: primaryStation ? stationSummary(primaryStation) : null,
    pollutants: primaryStation ? toPollutantMap(primaryStation.pollutants) : {},
    supplementary,
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
