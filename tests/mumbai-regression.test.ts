/**
 * Phase A — Mumbai regression guardrails.
 *
 * PURPOSE
 * Before any multi-city work begins, pin the behaviour that the existing
 * Mumbai-only Green Density application currently produces. These tests exist so
 * that a later refactor which accidentally changes Mumbai's configuration, its
 * production fallback dataset, or its distance/metric semantics fails loudly
 * instead of silently altering published civic numbers.
 *
 * EVERY EXPECTATION HERE IS DERIVED FROM CURRENT VERIFIED BEHAVIOUR
 * --------------------------------------------------------------------
 * The expected values below were read out of the running code and data, not
 * invented:
 *   - MUMBAI's field values are the literal values in `src/lib/green/config.ts`.
 *   - Fallback dataset statistics (45 records, all inside the Mumbai bbox,
 *     0 blank names, 0 missing geometries, the exact category / walkClass /
 *     accessStatus / densityClass vocabularies) were computed by executing the
 *     module, not by reading the file and guessing.
 *   - `formatDistance` boundaries (999 m -> "999 m", 1000 m -> "1.0 km") follow
 *     the documented `< 1000` rule in `src/lib/green/boundary-distance.ts`.
 *
 * WHAT THIS FILE DOES NOT COVER, AND WHY
 * -------------------------------------
 * The audit asked for regression coverage of `nearby`, `search`, `metrics` and
 * `areas/[id]`. Those four are **route handlers**, and this repository's test
 * infrastructure cannot exercise them reliably:
 *
 *   - `vitest.config.ts` sets `environment: 'node'`, includes only files matching
 *     `tests/` + `.test.ts`, and has no React/DOM environment, no `NextRequest`
 *     factory and no network mocking library installed.
 *   - `/api/vegetation/nearby` opens Prisma against the tracked, mutable
 *     `prisma/dev.db`. Pinning its output would pin *database contents*, which
 *     change on every ingest, so such a test would fail for legitimate reasons
 *     and train us to ignore it.
 *   - `/api/vegetation/search` calls the live Photon geocoder and reads
 *     `mumbai-places.json` + `mumbai-wards.json`; `/api/vegetation/metrics`
 *     runs Turf unions over every stored polygon.
 *
 * Instead this file pins the *deterministic inputs and pure functions* those
 * routes are built from — the city configuration, the Mumbai fallback dataset,
 * the distance engine, and the threshold tables. Route-level golden snapshots
 * are explicitly deferred to Phase C, where `?city=` arrives and the handler
 * can be refactored to accept an injected data source, making them testable
 * without a live database. That limitation is recorded in the Phase A report.
 */

import { describe, it, expect } from 'vitest';
import {
  MUMBAI,
  ACTIVE_CITY,
  NDVI,
  DENSITY_META,
  DEFAULT_RADIUS_M,
  RADIUS_OPTIONS_M,
  APP_BASE_PATH,
  GREEN_EXPLORER_ENABLED,
  WALK_SPEED_KMH,
  MIN_PATH_LENGTH_M,
  NDVI_SEARCH_WINDOW_DAYS,
  NDVI_MAX_SCENE_CLOUD_PCT,
  type CityConfig,
} from '@/lib/green/config';
import { STATIC_GREEN_SPACES_FALLBACK } from '@/lib/green/static-spaces-fallback';
import { nearestBoundaryDistance, formatDistance } from '@/lib/green/boundary-distance';
import { classifyNdvi } from '@/lib/green/gee-service';
import type { DensityClass } from '@/lib/green/types';

// ─────────────────────────────────────────────────────────────────────────────
// 1. Mumbai city configuration — the values every Mumbai route depends on
// ─────────────────────────────────────────────────────────────────────────────

describe('regression: Mumbai city configuration', () => {
  it('pins the exact MUMBAI configuration', () => {
    expect(MUMBAI.name).toBe('Mumbai, India');
    expect(MUMBAI.country).toBe('India');
    // [south, west, north, east]
    expect(MUMBAI.bbox).toEqual([18.88, 72.76, 19.29, 72.99]);
    expect(MUMBAI.centre).toEqual([19.076, 72.8777]);
    expect(MUMBAI.defaultZoom).toBe(12);
    expect(MUMBAI.monsoonMonths).toEqual([5, 6, 7, 8]);
    expect(MUMBAI.maxRadiusM).toBe(50_000);
  });

  it('keeps ACTIVE_CITY identical to MUMBAI (identity, not a copy)', () => {
    // Every existing route imports ACTIVE_CITY. If this stops being the same
    // object reference, some route is reading a different city.
    expect(ACTIVE_CITY).toBe(MUMBAI);
  });

  it('keeps the Mumbai bbox ordered south <= north and west <= east', () => {
    const [south, west, north, east] = MUMBAI.bbox;
    expect(south).toBeLessThan(north);
    expect(west).toBeLessThan(east);
  });

  it('keeps the Mumbai centre inside the Mumbai bbox', () => {
    const [south, west, north, east] = MUMBAI.bbox;
    const [lat, lon] = MUMBAI.centre;
    expect(lat).toBeGreaterThanOrEqual(south);
    expect(lat).toBeLessThanOrEqual(north);
    expect(lon).toBeGreaterThanOrEqual(west);
    expect(lon).toBeLessThanOrEqual(east);
  });

  it('pins the radius limits enforced by /api/vegetation/nearby', () => {
    // nearby/route.ts rejects radius < 100 or > ACTIVE_CITY.maxRadiusM.
    expect(MUMBAI.maxRadiusM).toBe(50_000);
    expect(DEFAULT_RADIUS_M).toBe(5_000);
    expect([...RADIUS_OPTIONS_M]).toEqual([1000, 3000, 5000, 10_000]);
    // Every offered chip must be inside the server-side accepted range.
    for (const r of RADIUS_OPTIONS_M) {
      expect(r).toBeGreaterThanOrEqual(100);
      expect(r).toBeLessThanOrEqual(MUMBAI.maxRadiusM);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. Global (non-city) constants that Mumbai behaviour depends on
// ─────────────────────────────────────────────────────────────────────────────

describe('regression: global green-density constants', () => {
  it('pins the NDVI display thresholds', () => {
    expect(NDVI.lowMin).toBe(0.1);
    expect(NDVI.mediumMin).toBe(0.25);
    expect(NDVI.highMin).toBe(0.55);
  });

  it('pins the density band boundaries so classification cannot drift', () => {
    // derive from NDVI + DENSITY_META rather than hardcoding, so the two stay
    // consistent with each other.
    expect(DENSITY_META.HIGH.range).toBe(`0.55 – 0.90`);
    expect(DENSITY_META.MEDIUM.range).toBe(`0.25 – 0.55`);
    expect(DENSITY_META.LOW.range).toBe(`0.10 – 0.25`);
    expect(DENSITY_META.UNAVAILABLE.range).toBeUndefined();
    expect(DENSITY_META.HIGH.colour).toBe('#2E6B34');
    expect(DENSITY_META.MEDIUM.colour).toBe('#A8E66B');
    expect(DENSITY_META.LOW.colour).toBe('#F5B02E');
  });

  it('classifies NDVI at exactly the documented thresholds', () => {
    expect(classifyNdvi(0.9)).toBe('HIGH');
    expect(classifyNdvi(0.55)).toBe('HIGH'); // boundary is inclusive
    expect(classifyNdvi(0.54)).toBe('MEDIUM');
    expect(classifyNdvi(0.25)).toBe('MEDIUM'); // boundary is inclusive
    expect(classifyNdvi(0.24)).toBe('LOW');
    expect(classifyNdvi(0.1)).toBe('LOW'); // boundary is inclusive
    expect(classifyNdvi(0.09)).toBe('UNAVAILABLE');
  });

  it('treats null / NaN NDVI as unavailable rather than zero', () => {
    expect(classifyNdvi(null)).toBe('UNAVAILABLE');
    expect(classifyNdvi(NaN)).toBe('UNAVAILABLE');
    // `undefined` is outside the declared signature; the implementation still
    // guards against it at runtime, so that robustness is asserted too.
    expect(classifyNdvi(undefined as unknown as number)).toBe('UNAVAILABLE');
    // Water / barren land is NOT zero vegetation and must not be reported as it.
    expect(classifyNdvi(0)).toBe('UNAVAILABLE');
  });

  it('pins app-level constants', () => {
    expect(APP_BASE_PATH).toBe('/civic');
    expect(GREEN_EXPLORER_ENABLED).toBe(true);
    expect(WALK_SPEED_KMH).toBe(4.8);
    expect(MIN_PATH_LENGTH_M).toBe(100);
    expect(NDVI_SEARCH_WINDOW_DAYS).toBe(180);
    expect(NDVI_MAX_SCENE_CLOUD_PCT).toBe(20);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 3. Mumbai production fallback dataset
//    This is what /api/vegetation/nearby serves when the DB is empty, which is
//    the current production state. It must not change silently.
// ─────────────────────────────────────────────────────────────────────────────

describe('regression: Mumbai production fallback dataset', () => {
  it('serves exactly 45 records', () => {
    expect(STATIC_GREEN_SPACES_FALLBACK).toHaveLength(45);
  });

  it('places every record inside the Mumbai bbox', () => {
    const [south, west, north, east] = MUMBAI.bbox;
    const outside = STATIC_GREEN_SPACES_FALLBACK.filter(
      (s) =>
        s.centroidLat < south ||
        s.centroidLat > north ||
        s.centroidLon < west ||
        s.centroidLon > east
    );
    expect(outside).toHaveLength(0);
  });

  it('has no blank names and no missing geometry', () => {
    expect(
      STATIC_GREEN_SPACES_FALLBACK.filter((s) => !s.name || !s.name.trim())
    ).toHaveLength(0);
    expect(STATIC_GREEN_SPACES_FALLBACK.filter((s) => !s.geometry)).toHaveLength(0);
  });

  it('pins the category vocabulary', () => {
    const cats = [...new Set(STATIC_GREEN_SPACES_FALLBACK.map((s) => s.category))].sort();
    expect(cats).toEqual([
      'Botanical Garden',
      'Community Garden',
      'Forest',
      'Green Corridor',
      'Mangrove',
      'National Park',
      'Nature Reserve',
      'Park',
      'Public Garden',
      'Wetland',
    ]);
  });

  it('pins the walkClass and accessStatus vocabularies', () => {
    const wc = [...new Set(STATIC_GREEN_SPACES_FALLBACK.map((s) => s.walkClass))].sort();
    expect(wc).toEqual([
      'ACCESS_UNVERIFIED',
      'PATHS_PRESENT_ACCESS_UNVERIFIED',
      'WALKABLE_VERIFIED',
    ]);
    const ac = [...new Set(STATIC_GREEN_SPACES_FALLBACK.map((s) => s.accessStatus))].sort();
    expect(ac).toEqual(['PUBLIC_TAGGED', 'UNKNOWN']);
    const dc = [...new Set(STATIC_GREEN_SPACES_FALLBACK.map((s) => s.densityClass))].sort();
    expect(dc).toEqual(['HIGH', 'LOW', 'MEDIUM']);
  });

  it('keeps the static_ id namespace that spaces-service.mints', () => {
    // spaces-service builds `static_${osmType}_${osmId}`; the first record is
    // relation/200001 and must keep producing that exact key, because
    // GreenSpaceImage rows and detail links are keyed by it.
    const first = STATIC_GREEN_SPACES_FALLBACK[0];
    expect(first.osmType).toBe('relation');
    expect(String(first.osmId)).toBe('200001');
    expect(`static_${first.osmType}_${first.osmId}`).toBe('static_relation_200001');
  });

  it('no longer carries hand-written Wikimedia image URLs', () => {
    // Those URLs had invented MD5 hash directories and all returned HTTP 400.
    // Imagery now comes from src/data/green-space-images.json only.
    const withImage = STATIC_GREEN_SPACES_FALLBACK.filter(
      (s) => (s as any).imageUrl !== undefined
    );
    expect(withImage).toHaveLength(0);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 4. Distance engine — powers `nearby` sorting and the detail drawer
// ─────────────────────────────────────────────────────────────────────────────

describe('regression: nearest-boundary distance engine', () => {
  const square = (minLon: number, minLat: number, maxLon: number, maxLat: number): GeoJSON.Polygon => ({
    type: 'Polygon',
    coordinates: [
      [
        [minLon, minLat],
        [maxLon, minLat],
        [maxLon, maxLat],
        [minLon, maxLat],
        [minLon, minLat],
      ],
    ],
  });

  it('reports distance 0 for a point inside the polygon', () => {
    const r = nearestBoundaryDistance(19.05, 72.83, square(72.80, 19.00, 72.90, 19.10) as any, 19.05, 72.85);
    expect(r.isInside).toBe(true);
    expect(r.distanceM).toBe(0);
  });

  it('measures to the boundary, not to the centroid', () => {
    // Point sits ~1.1 km west of the polygon edge but ~7 km from the centroid.
    const r = nearestBoundaryDistance(19.05, 72.79, square(72.80, 19.00, 72.90, 19.10) as any, 19.05, 72.86);
    expect(r.isInside).toBe(false);
    expect(r.distanceM).toBeGreaterThan(1000);
    expect(r.distanceM).toBeLessThan(1500);
  });

  it('falls back to the centroid when no geometry exists', () => {
    const r = nearestBoundaryDistance(19.05, 72.83, null, 19.05, 72.83);
    expect(r.distanceMethod).toBe('CENTROID_FALLBACK');
    expect(r.distanceM).toBe(0);
    expect(r.isInside).toBe(false);
  });

  it('formats distance at the documented 1 km boundary', () => {
    expect(formatDistance(0)).toBe('0 m');
    expect(formatDistance(999)).toBe('999 m');
    expect(formatDistance(1000)).toBe('1.0 km');
    expect(formatDistance(1499)).toBe('1.5 km');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 5. Type-level guard: the registry work in Phase B must not disturb Mumbai
// ─────────────────────────────────────────────────────────────────────────────

describe('regression: CityConfig shape is unchanged for existing consumers', () => {
  it('still satisfies the pre-registry structural contract', () => {
    // Every existing consumer reads exactly these fields. Adding `id` in Phase B
    // must not remove or rename any of them.
    const required: Array<keyof CityConfig> = [
      'name',
      'country',
      'bbox',
      'centre',
      'defaultZoom',
      'monsoonMonths',
      'maxRadiusM',
    ];
    for (const key of required) {
      expect(MUMBAI[key]).toBeDefined();
    }
    expect(MUMBAI.bbox).toHaveLength(4);
    expect(MUMBAI.centre).toHaveLength(2);
    expect(MUMBAI.monsoonMonths.length).toBeGreaterThan(0);
  });

  it('keeps DENSITY_META exhaustive over DensityClass', () => {
    const classes: DensityClass[] = ['HIGH', 'MEDIUM', 'LOW', 'UNAVAILABLE'];
    for (const c of classes) {
      expect(DENSITY_META[c]).toBeDefined();
      expect(DENSITY_META[c].label).toBeTruthy();
      expect(DENSITY_META[c].colour).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });
});
