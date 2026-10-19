import { beforeEach, describe, expect, it, vi } from 'vitest';
import { isLocationInMumbai, isLocationInIndia, mapCoordinatesToCivicBoundary } from '@/lib/gis';
import type { RawStationReading } from '@/lib/air-quality/types';

const mocks = vi.hoisted(() => ({
  getCpcbStationsForMumbai: vi.fn(),
  getOpenAqStationsNear: vi.fn(),
  getAqicnStationsForMumbai: vi.fn(),
  getAqicnStationsForLocation: vi.fn(),
  getOpenWeatherAirQualityForLocation: vi.fn(),
}));

vi.mock('@/lib/air-quality/cpcb-client', () => ({
  getCpcbStationsForMumbai: mocks.getCpcbStationsForMumbai,
}));

vi.mock('@/lib/air-quality/openaq-client', () => ({
  getOpenAqStationsNear: mocks.getOpenAqStationsNear,
}));

vi.mock('@/lib/air-quality/aqicn-client', () => ({
  getAqicnStationsForMumbai: mocks.getAqicnStationsForMumbai,
  getAqicnStationsForLocation: mocks.getAqicnStationsForLocation,
}));

vi.mock('@/lib/air-quality/openweather-client', () => ({
  getOpenWeatherAirQualityForLocation: mocks.getOpenWeatherAirQualityForLocation,
}));

import { getAirQualityForLocation } from '@/lib/air-quality/normalizer';
import { AirQualityServiceError } from '@/lib/air-quality/types';

const MUMBAI_CST = { lat: 18.9402, lon: 72.8356 };
const DELHI = { lat: 28.6139, lon: 77.209 };
const BENGALURU = { lat: 12.9716, lon: 77.5946 };
const LONDON = { lat: 51.5074, lon: -0.1278 };

function openWeatherStation(overrides: Partial<RawStationReading> = {}): RawStationReading {
  return station({
    source: 'OPENWEATHER',
    stationId: `ow-${MUMBAI_CST.lat.toFixed(3)}-${MUMBAI_CST.lon.toFixed(3)}`,
    stationName: 'OpenWeather Atmospheric Observation',
    latitude: MUMBAI_CST.lat,
    longitude: MUMBAI_CST.lon,
    measuredAqi: 142,
    dominantPollutant: 'PM2.5',
    pollutants: [
      { pollutantId: 'PM2.5', unit: 'µg/m³', avg: 72.4, min: null, max: null },
      { pollutantId: 'PM10', unit: 'µg/m³', avg: 128.8, min: null, max: null },
      { pollutantId: 'NO2', unit: 'µg/m³', avg: 41.2, min: null, max: null },
      { pollutantId: 'SO2', unit: 'µg/m³', avg: 12.1, min: null, max: null },
      { pollutantId: 'OZONE', unit: 'µg/m³', avg: 48.7, min: null, max: null },
      { pollutantId: 'CO', unit: 'mg/m³', avg: 0.84, min: null, max: null },
      { pollutantId: 'NH3', unit: 'µg/m³', avg: 9.5, min: null, max: null },
    ],
    coordinatesResolvedFrom: 'upstream',
    ...overrides,
  });
}

function station(overrides: Partial<RawStationReading> = {}): RawStationReading {
  return {
    source: 'CPCB',
    stationId: 'Bandra, Mumbai - MPCB',
    stationName: 'Bandra, Mumbai - MPCB',
    latitude: 19.062,
    longitude: 72.854,
    city: 'Mumbai',
    state: 'Maharashtra',
    lastUpdated: new Date().toISOString(),
    pollutants: [
      { pollutantId: 'PM2.5', unit: 'µg/m³', avg: 55, min: null, max: null },
      { pollutantId: 'PM10', unit: 'µg/m³', avg: 110, min: null, max: null },
      { pollutantId: 'NO2', unit: 'µg/m³', avg: 35, min: null, max: null },
    ],
    distanceKm: null,
    coordinatesResolvedFrom: 'reference-table',
    ...overrides,
  };
}

describe('India-wide air quality and Mumbai civic location features', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.getCpcbStationsForMumbai.mockResolvedValue([]);
    mocks.getOpenAqStationsNear.mockResolvedValue([]);
    mocks.getAqicnStationsForMumbai.mockResolvedValue([]);
    mocks.getAqicnStationsForLocation.mockResolvedValue([]);
    mocks.getOpenWeatherAirQualityForLocation.mockResolvedValue(null);
  });

  it('accepts Mumbai and other Indian cities, and verifies India geofencing', () => {
    expect(isLocationInMumbai(MUMBAI_CST.lat, MUMBAI_CST.lon)).toBe(true);
    expect(isLocationInMumbai(DELHI.lat, DELHI.lon)).toBe(false);

    expect(isLocationInIndia(MUMBAI_CST.lat, MUMBAI_CST.lon)).toBe(true);
    expect(isLocationInIndia(DELHI.lat, DELHI.lon)).toBe(true);
    expect(isLocationInIndia(BENGALURU.lat, BENGALURU.lon)).toBe(true);
    expect(isLocationInIndia(LONDON.lat, LONDON.lon)).toBe(false);
  });

  it('maps an in-Mumbai GPS point to civic boundaries', () => {
    const mapped = mapCoordinatesToCivicBoundary(MUMBAI_CST.lat, MUMBAI_CST.lon);

    expect(mapped.isWithinMumbai).toBe(true);
    expect(mapped.wardCode).toBeTruthy();
    expect(mapped.acName).toBeTruthy();
    expect(mapped.pcName).toBeTruthy();
  });

  it('returns OpenWeather AQI and pollutants for a Mumbai user even when CPCB is usable', async () => {
    mocks.getCpcbStationsForMumbai.mockResolvedValue([station()]);
    mocks.getOpenWeatherAirQualityForLocation.mockResolvedValue(openWeatherStation());

    const result = await getAirQualityForLocation(String(MUMBAI_CST.lat), String(MUMBAI_CST.lon));

    expect(result.location).toEqual({ latitude: MUMBAI_CST.lat, longitude: MUMBAI_CST.lon });
    expect(result.aqi).toMatchObject({
      source: 'OPENWEATHER',
      value: 142,
      valueType: 'measured',
      dominantPollutant: 'PM2.5',
    });
    expect(result.pollutants['PM2.5']?.avg).toBe(72.4);
    expect(result.pollutants.PM10?.avg).toBe(128.8);
    expect(result.pollutants.NO2?.avg).toBe(41.2);
    expect(result.pollutants.SO2?.avg).toBe(12.1);
    expect(result.pollutants.OZONE?.avg).toBe(48.7);
    expect(result.pollutants.CO?.avg).toBe(0.84);
    expect(result.pollutants.NH3?.avg).toBe(9.5);
    expect(result.sources.find((s) => s.name === 'CPCB')?.stationsFound).toBe(1);
    expect(result.sources.find((s) => s.name === 'OPENWEATHER')?.stationsFound).toBe(1);
  });

  it('falls back to AQICN for a Mumbai user when OpenWeather, CPCB, and OpenAQ have no usable station', async () => {
    mocks.getAqicnStationsForMumbai.mockResolvedValue([
      station({
        source: 'AQICN',
        stationId: 'waqi-7024',
        stationName: 'Mumbai US Consulate',
        latitude: 19.072,
        longitude: 72.868,
        measuredAqi: 104,
        dominantPollutant: 'PM2.5',
        pollutants: [],
        coordinatesResolvedFrom: 'upstream',
      }),
    ]);

    const result = await getAirQualityForLocation(MUMBAI_CST.lat, MUMBAI_CST.lon);

    expect(result.aqi).toMatchObject({
      source: 'AQICN',
      value: 104,
      valueType: 'measured',
      dominantPollutant: 'PM2.5',
    });
    expect(result.dataQuality.note).toContain('OpenWeather did not return a usable reading');
  });

  it('returns real-time air quality for other Indian locations across whole India (e.g. Delhi)', async () => {
    mocks.getOpenWeatherAirQualityForLocation.mockResolvedValue(
      openWeatherStation({
        stationId: `ow-${DELHI.lat.toFixed(3)}-${DELHI.lon.toFixed(3)}`,
        stationName: 'OpenWeather Atmospheric Observation (New Delhi)',
        latitude: DELHI.lat,
        longitude: DELHI.lon,
        city: 'New Delhi',
        state: 'Delhi',
        measuredAqi: 168,
      })
    );

    const result = await getAirQualityForLocation(DELHI.lat, DELHI.lon);

    expect(result.location).toEqual({ latitude: DELHI.lat, longitude: DELHI.lon });
    expect(result.aqi).toMatchObject({
      source: 'OPENWEATHER',
      value: 168,
      valueType: 'measured',
    });
    expect(result.sources.find((s) => s.name === 'OPENWEATHER')?.stationsFound).toBe(1);
    expect(mocks.getOpenWeatherAirQualityForLocation).toHaveBeenCalledWith(DELHI.lat, DELHI.lon);
  });

  it('falls back to AQICN for non-Mumbai Indian locations when OpenWeather is unavailable', async () => {
    mocks.getAqicnStationsForLocation.mockResolvedValue([
      station({
        source: 'AQICN',
        stationId: 'waqi-3251',
        stationName: 'Mandir Marg, Delhi',
        latitude: 28.634,
        longitude: 77.201,
        measuredAqi: 185,
        dominantPollutant: 'PM2.5',
        pollutants: [],
        coordinatesResolvedFrom: 'upstream',
      }),
    ]);

    const result = await getAirQualityForLocation(DELHI.lat, DELHI.lon);

    expect(result.aqi).toMatchObject({
      source: 'AQICN',
      value: 185,
      valueType: 'measured',
    });
    expect(mocks.getAqicnStationsForLocation).toHaveBeenCalledWith(DELHI.lat, DELHI.lon);
  });

  it('does not call upstream air-quality providers for coordinates outside India', async () => {
    await expect(getAirQualityForLocation(LONDON.lat, LONDON.lon)).rejects.toMatchObject({
      code: 'OUT_OF_SERVICE_AREA',
    } satisfies Partial<AirQualityServiceError>);

    expect(mocks.getCpcbStationsForMumbai).not.toHaveBeenCalled();
    expect(mocks.getOpenAqStationsNear).not.toHaveBeenCalled();
    expect(mocks.getAqicnStationsForMumbai).not.toHaveBeenCalled();
    expect(mocks.getAqicnStationsForLocation).not.toHaveBeenCalled();
    expect(mocks.getOpenWeatherAirQualityForLocation).not.toHaveBeenCalled();
  });
});
