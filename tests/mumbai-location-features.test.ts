import { beforeEach, describe, expect, it, vi } from 'vitest';
import { isLocationInMumbai, isLocationInIndia, mapCoordinatesToCivicBoundary } from '@/lib/gis';
import type { RawStationReading } from '@/lib/air-quality/types';

const mocks = vi.hoisted(() => ({
  getOpenMeteoAirQualityForLocation: vi.fn(),
}));

vi.mock('@/lib/air-quality/open-meteo-client', () => ({
  getOpenMeteoAirQualityForLocation: mocks.getOpenMeteoAirQualityForLocation,
}));

import { getAirQualityForLocation } from '@/lib/air-quality/normalizer';
import { AirQualityServiceError } from '@/lib/air-quality/types';

const MUMBAI_CST = { lat: 18.9402, lon: 72.8356 };
const DELHI = { lat: 28.6139, lon: 77.209 };
const BENGALURU = { lat: 12.9716, lon: 77.5946 };
const LONDON = { lat: 51.5074, lon: -0.1278 };

function openMeteoStation(
  lat: number,
  lon: number,
  overrides: Partial<RawStationReading> = {}
): RawStationReading {
  return {
    source: 'OPEN_METEO',
    stationId: `om-${lat.toFixed(3)}-${lon.toFixed(3)}`,
    stationName: 'Open-Meteo Air Quality Service (CAMS / Copernicus)',
    latitude: lat,
    longitude: lon,
    city: null,
    state: null,
    lastUpdated: new Date().toISOString(),
    pollutants: [
      { pollutantId: 'PM2.5', unit: 'µg/m³', avg: 72.4, min: null, max: null },
      { pollutantId: 'PM10', unit: 'µg/m³', avg: 128.8, min: null, max: null },
      { pollutantId: 'NO2', unit: 'µg/m³', avg: 41.2, min: null, max: null },
      { pollutantId: 'SO2', unit: 'µg/m³', avg: 12.1, min: null, max: null },
      { pollutantId: 'OZONE', unit: 'µg/m³', avg: 48.7, min: null, max: null },
      { pollutantId: 'CO', unit: 'µg/m³', avg: 840, min: null, max: null },
      { pollutantId: 'NH3', unit: 'µg/m³', avg: 9.5, min: null, max: null },
    ],
    measuredAqi: 142,
    dominantPollutant: 'PM2.5',
    coordinatesResolvedFrom: 'upstream',
    ...overrides,
  };
}

describe('India-wide air quality and Mumbai civic location features', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.getOpenMeteoAirQualityForLocation.mockResolvedValue(null);
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

  it('returns Open-Meteo AQI and pollutants for a Mumbai user', async () => {
    mocks.getOpenMeteoAirQualityForLocation.mockResolvedValue(
      openMeteoStation(MUMBAI_CST.lat, MUMBAI_CST.lon)
    );

    const result = await getAirQualityForLocation(String(MUMBAI_CST.lat), String(MUMBAI_CST.lon));

    expect(result.location).toEqual({ latitude: MUMBAI_CST.lat, longitude: MUMBAI_CST.lon });
    expect(result.aqi).toMatchObject({
      source: 'OPEN_METEO',
      value: 142,
      category: 'Moderate',
      valueType: 'measured',
      dominantPollutant: 'PM2.5',
    });
    expect(result.pollutants['PM2.5']?.avg).toBe(72.4);
    expect(result.pollutants.PM10?.avg).toBe(128.8);
    expect(result.pollutants.NO2?.avg).toBe(41.2);
    expect(result.pollutants.SO2?.avg).toBe(12.1);
    expect(result.pollutants.OZONE?.avg).toBe(48.7);
    expect(result.pollutants.CO?.avg).toBe(840);
    expect(result.pollutants.NH3?.avg).toBe(9.5);
    expect(result.sources).toEqual([{ name: 'OPEN_METEO', stationsFound: 1, available: true }]);
    expect(mocks.getOpenMeteoAirQualityForLocation).toHaveBeenCalledWith(
      MUMBAI_CST.lat,
      MUMBAI_CST.lon
    );
  });

  it('returns real-time air quality for other Indian locations (e.g. Delhi)', async () => {
    mocks.getOpenMeteoAirQualityForLocation.mockResolvedValue(
      openMeteoStation(DELHI.lat, DELHI.lon, { measuredAqi: 268 })
    );

    const result = await getAirQualityForLocation(DELHI.lat, DELHI.lon);

    expect(result.location).toEqual({ latitude: DELHI.lat, longitude: DELHI.lon });
    expect(result.aqi).toMatchObject({ source: 'OPEN_METEO', value: 268, category: 'Poor' });
    expect(mocks.getOpenMeteoAirQualityForLocation).toHaveBeenCalledWith(DELHI.lat, DELHI.lon);
  });

  it('returns a null AQI when Open-Meteo has pollutants but no AQI value', async () => {
    mocks.getOpenMeteoAirQualityForLocation.mockResolvedValue(
      openMeteoStation(DELHI.lat, DELHI.lon, { measuredAqi: null })
    );

    const result = await getAirQualityForLocation(DELHI.lat, DELHI.lon);

    expect(result.aqi).toBeNull();
    expect(result.pollutants['PM2.5']?.avg).toBe(72.4);
  });

  it('throws NO_DATA_AVAILABLE when Open-Meteo returns nothing', async () => {
    await expect(getAirQualityForLocation(DELHI.lat, DELHI.lon)).rejects.toMatchObject({
      code: 'NO_DATA_AVAILABLE',
    } satisfies Partial<AirQualityServiceError>);
  });

  it('serves any valid global coordinate (Open-Meteo is worldwide, no India-only gate)', async () => {
    mocks.getOpenMeteoAirQualityForLocation.mockResolvedValue(
      openMeteoStation(LONDON.lat, LONDON.lon, { measuredAqi: 40 })
    );

    const result = await getAirQualityForLocation(LONDON.lat, LONDON.lon);

    expect(result.aqi).toMatchObject({ source: 'OPEN_METEO', value: 40, category: 'Good' });
  });

  it('rejects invalid coordinates before calling the provider', async () => {
    await expect(getAirQualityForLocation('abc', 72)).rejects.toMatchObject({
      code: 'INVALID_COORDINATES',
    } satisfies Partial<AirQualityServiceError>);
    expect(mocks.getOpenMeteoAirQualityForLocation).not.toHaveBeenCalled();
  });
});
