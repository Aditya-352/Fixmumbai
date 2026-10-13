/**
 * Regression tests: a selected city must only ever show its own records.
 *
 * Three distinct defects produced Mumbai data on the Pune view:
 *
 *  1. The client imported the BMC nursery dataset statically, so all 27 Mumbai
 *     nurseries rendered for every city.
 *  2. `getNearbyGreenSpacesPaged` always read the database. `GreenSpace` has no
 *     city column, so every row is a Mumbai record; asking for Pune therefore
 *     distance-filtered Mumbai's rows.
 *  3. The Bengaluru CSV carries GeoJSON coordinates nested one level deeper
 *     than a `Polygon` allows, which made `nearestBoundaryDistance` return
 *     Infinity and silently dropped every Bengaluru record.
 *
 * These run against the real service and are deterministic: Pune and Bengaluru
 * are served from static datasets and never touch the database.
 */
import { describe, it, expect } from 'vitest';
import { getNearbyGreenSpacesPaged } from '@/lib/green/spaces-service';
import {
  cityHasNurseries,
  getNurseriesForCity,
  getNurseryWardsForCity,
} from '@/lib/green/nurseries-service';

const CITY_CENTRES = {
  mumbai: { lat: 19.076, lon: 72.8777 },
  pune: { lat: 18.5036, lon: 73.8752 },
  bengaluru: { lat: 12.9881, lon: 77.622 },
} as const;

/** Names that identify the Mumbai dataset. */
const MUMBAI_MARKERS = ['Sanjay', 'Godrej', 'Thane Creek', 'Hiranandani', 'Powai', 'Aarey'];

async function spacesFor(city: keyof typeof CITY_CENTRES) {
  const c = CITY_CENTRES[city];
  const r = await getNearbyGreenSpacesPaged({
    lat: c.lat, lon: c.lon,
    radiusM: 5_000, type: 'all', verifiedOnly: false,
    city,
  });
  return r.spaces;
}

describe('city isolation: green spaces', () => {
  it('serves genuine Pune records, not Mumbai ones', async () => {
    const spaces = await spacesFor('pune');
    expect(spaces.length).toBeGreaterThan(0);
    // Every record must sit in Pune's envelope.
    for (const s of spaces) {
      expect(s.centroid.lat).toBeGreaterThan(18.2);
      expect(s.centroid.lat).toBeLessThan(18.7);
    }
    for (const marker of MUMBAI_MARKERS) {
      expect(spaces.some((s) => s.name.includes(marker))).toBe(false);
    }
  });

  it('serves genuine Bengaluru records, not Mumbai ones', async () => {
    const spaces = await spacesFor('bengaluru');
    expect(spaces.length).toBeGreaterThan(0);
    for (const s of spaces) {
      expect(s.centroid.lat).toBeGreaterThan(12.7);
      expect(s.centroid.lat).toBeLessThan(13.3);
    }
    for (const marker of MUMBAI_MARKERS) {
      expect(spaces.some((s) => s.name.includes(marker))).toBe(false);
    }
  });

  it('computes finite, plausible distances for non-Mumbai cities', async () => {
    // Regression: Infinity distances made every record fail the radius filter,
    // and a Mumbai-centre distance made Pune look ~116 km from its own parks.
    for (const city of ['pune', 'bengaluru'] as const) {
      const spaces = await spacesFor(city);
      expect(spaces.length).toBeGreaterThan(0);
      for (const s of spaces) {
        expect(Number.isFinite(s.distanceM)).toBe(true);
        expect(s.distanceM).toBeLessThan(5_000);
      }
    }
  });

  it('still serves Mumbai from the database', async () => {
    const spaces = await spacesFor('mumbai');
    expect(spaces.length).toBeGreaterThan(0);
    for (const s of spaces) {
      expect(s.centroid.lat).toBeGreaterThan(18.8);
      expect(s.centroid.lat).toBeLessThan(19.4);
    }
  });
});

describe('city isolation: nurseries', () => {
  it('returns BMC nurseries only for Mumbai', () => {
    expect(getNurseriesForCity('mumbai').length).toBeGreaterThan(0);
    expect(getNurseriesForCity('pune')).toEqual([]);
    expect(getNurseriesForCity('bengaluru')).toEqual([]);
  });

  it('exposes ward filters only where a dataset exists', () => {
    expect(getNurseryWardsForCity('mumbai').length).toBeGreaterThan(0);
    expect(getNurseryWardsForCity('pune')).toEqual([]);
    expect(getNurseryWardsForCity('bengaluru')).toEqual([]);
  });

  it('reports nursery availability per city', () => {
    expect(cityHasNurseries('mumbai')).toBe(true);
    expect(cityHasNurseries('pune')).toBe(false);
    expect(cityHasNurseries('bengaluru')).toBe(false);
  });
});

describe('geometry normalisation', () => {
  it('accepts a correctly nested Polygon unchanged', async () => {
    const spaces = await spacesFor('pune');
    // Pune's source geometry is already valid; a bad normalisation would show up
    // as a non-finite distance here.
    expect(spaces.every((s) => Number.isFinite(s.distanceM))).toBe(true);
  });

  it('produces finite distances from the over-nested Bengaluru geometry', async () => {
    const spaces = await spacesFor('bengaluru');
    expect(spaces.every((s) => Number.isFinite(s.distanceM))).toBe(true);
    expect(spaces.some((s) => (s.distanceM ?? Infinity) < 1_000)).toBe(true);
  });
});
describe('static id resolution for the detail endpoint', () => {
  it('resolves a static id against the city that owns it', async () => {
    const { findStaticSpace, isStaticSpaceId } = await import('@/lib/green/spaces-service');

    const puneHit = findStaticSpace('static_way_pmcgarden.1');
    expect(puneHit?.city).toBe('pune');

    const blrHit = findStaticSpace('static_node_bengaluru_csv_2');
    expect(blrHit?.city).toBe('bengaluru');

    // A static id must never be assumed to belong to Mumbai.
    expect(puneHit?.city).not.toBe('mumbai');
    expect(isStaticSpaceId('static_way_pmcgarden.1')).toBe(true);
  });

  it('serves detail for a static record in its own city', async () => {
    const { getGreenSpaceDetail } = await import('@/lib/green/spaces-service');
    const detail = await getGreenSpaceDetail('static_way_pmcgarden.1', 18.5036, 73.8752, 'pune');
    expect(detail).not.toBeNull();
    expect(detail!.name).toBe('Jaybhawani Udyan');
    expect(detail!.centroid.lat).toBeGreaterThan(18.2);
    expect(detail!.centroid.lat).toBeLessThan(18.7);
  });

  it('refuses a static id for a different city', async () => {
    const { getGreenSpaceDetail } = await import('@/lib/green/spaces-service');
    // Pune's record must not open for Bengaluru or Mumbai.
    expect(await getGreenSpaceDetail('static_way_pmcgarden.1', 12.9881, 77.622, 'bengaluru')).toBeNull();
    expect(await getGreenSpaceDetail('static_way_pmcgarden.1', 19.076, 72.8777, 'mumbai')).toBeNull();
  });
});
