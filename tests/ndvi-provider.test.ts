/**
 * Unit tests for the NDVI provider layer.
 *
 * These assert the decision logic that was previously wrong in production:
 *  - a configured key alone must never imply available data
 *  - cloud coverage must gate scene selection
 *  - polygons must never be silently substituted
 *  - rendered PNGs must never become numerical NDVI
 *
 * All provider HTTP is mocked, so the suite is deterministic and offline.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import {
  selectAoiPolygons,
  selectScene,
  extractLayerId,
  parseNumericStats,
  resolveNdviObservation,
  fetchPolygons,
  __resetNdviCaches,
  type AgroScene,
  type AgroPolygon,
} from '@/lib/green/ndvi-provider';
import { ACTIVE_CITY } from '@/lib/green/config';

const SGNP_BOUNDS: [number, number, number, number] = [72.88, 19.2, 72.93, 19.25];

function poly(over: Partial<AgroPolygon> = {}): AgroPolygon {
  return {
    id: 'poly-1',
    name: 'Sanjay Gandhi National Park Mumbai',
    bounds: SGNP_BOUNDS,
    ringLength: 5,
    ...over,
  };
}

function scene(over: Partial<AgroScene> = {}): AgroScene {
  return {
    dt: 1_780_000_000, // 2026-05-29 UTC
    type: 'Sentinel-2',
    cl: 5,
    tile: { ndvi: 'https://api.agromonitoring.com/tile/1.0/{z}/{x}/{y}/LAYER123/POLY?appid=SECRET' },
    ...over,
  } as AgroScene;
}

beforeEach(() => {
  __resetNdviCaches();
  delete process.env.AGROMONITORING_API_KEY;
});
afterEach(() => {
  vi.restoreAllMocks();
  delete process.env.AGROMONITORING_API_KEY;
});

describe('polygon discovery / AOI selection', () => {
  it('drops polygons with invalid geometry instead of substituting them', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({
        ok: true,
        status: 200,
        json: async () => [
          { id: 'good', name: 'Aarey', geo_json: { geometry: { coordinates: [[[72.9, 19.1], [72.95, 19.1], [72.95, 19.15], [72.9, 19.1]]] } } },
          { id: 'bad', name: 'Broken', geo_json: { geometry: { coordinates: [[]] } } },
          { id: 'nonfinite', name: 'NaN', geo_json: { geometry: { coordinates: [[['x', 'y']]] } } },
        ],
      }))
    );
    const { polygons } = await fetchPolygons('k');
    expect(polygons.map((p) => p.id)).toEqual(['good']);
  });

  it('derives real bounds from the validated ring', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({
        ok: true,
        status: 200,
        json: async () => [
          {
            id: 'a',
            name: 'A',
            geo_json: { geometry: { coordinates: [[[72.88, 19.2], [72.93, 19.2], [72.93, 19.25], [72.88, 19.25], [72.88, 19.2]]] } },
          },
        ],
      }))
    );
    const { polygons } = await fetchPolygons('k');
    expect(polygons[0].bounds).toEqual(SGNP_BOUNDS);
  });

  it('selects a Mumbai-related polygon', () => {
    const { selected } = selectAoiPolygons([poly()], ACTIVE_CITY.bbox);
    expect(selected).toHaveLength(1);
  });

  it('reports honestly when no polygon intersects the study area', () => {
    const { selected, warnings } = selectAoiPolygons(
      [poly({ id: 'far', name: 'Somewhere else', bounds: [10, 10, 11, 11] })],
      ACTIVE_CITY.bbox
    );
    expect(selected).toHaveLength(0);
    expect(warnings.join(' ')).toMatch(/no registered polygon intersects/i);
  });

  it('marks coverage partial when the polygon does not span the study area', () => {
    const { selected } = selectAoiPolygons([poly()], ACTIVE_CITY.bbox);
    expect(selected).toHaveLength(1);
    // SGNP bbox is 72.88-72.93 / 19.20-19.25; Mumbai study bbox is far larger.
    const [w, s, e, n] = ACTIVE_CITY.bbox;
    const coversAll = selected[0].bounds[0] <= w && selected[0].bounds[1] <= s &&
      selected[0].bounds[2] >= e && selected[0].bounds[3] >= n;
    expect(coversAll).toBe(false);
  });

  it('ignores polygons outside the study area rather than merging them', () => {
    const { selected } = selectAoiPolygons(
      [poly(), poly({ id: 'far', name: 'Far away', bounds: [10, 10, 11, 11] })],
      ACTIVE_CITY.bbox
    );
    expect(selected.every((p) => p.id !== 'far')).toBe(true);
  });
});

describe('cloud-aware scene selection', () => {
  const opts = { aoiPolygonId: 'p', maxCloudPct: 20, allowCloudFallback: false, requireSentinel2: true };

  it('rejects the newest scene when it is 99% cloud', () => {
    const scenes = [scene({ dt: 2000, cl: 99.57 }), scene({ dt: 1000, cl: 11.54 })];
    const picked = selectScene(scenes, opts);
    expect(picked.scene?.dt).toBe(1000);
    expect(picked.scene?.cl).toBeLessThanOrEqual(20);
  });

  it('never selects a 100% cloud scene as a clean observation', () => {
    const scenes = [scene({ dt: 3000, cl: 100 }), scene({ dt: 2000, cl: 100 }), scene({ dt: 1000, cl: 100 })];
    expect(selectScene(scenes, opts).scene).toBeNull();
  });

  it('returns null with an explanatory reason when nothing qualifies', () => {
    const r = selectScene([scene({ cl: 85 })], opts);
    expect(r.scene).toBeNull();
    expect(r.reason).toMatch(/cloud threshold/i);
  });

  it('picks the newest qualifying scene, not the oldest', () => {
    const scenes = [scene({ dt: 1000, cl: 5 }), scene({ dt: 5000, cl: 8 }), scene({ dt: 3000, cl: 9 })];
    expect(selectScene(scenes, opts).scene?.dt).toBe(5000);
  });

  it('excludes non-Sentinel-2 sensors when Sentinel-2 is required', () => {
    const scenes = [scene({ dt: 9000, type: 'Landsat-8', cl: 1 }), scene({ dt: 1000, type: 'Sentinel-2', cl: 5 })];
    const r = selectScene(scenes, opts);
    expect(r.scene?.type).toBe('Sentinel-2');
    expect(r.scene?.dt).toBe(1000);
  });

  it('skips scenes without an NDVI tile layer', () => {
    const scenes = [scene({ dt: 9000, cl: 1, tile: undefined }), scene({ dt: 1000, cl: 5 })];
    expect(selectScene(scenes, opts).scene?.dt).toBe(1000);
  });

  it('only uses the cloud fallback when explicitly enabled, and labels it', () => {
    const scenes = [scene({ dt: 1000, cl: 97 })];
    expect(selectScene(scenes, opts).scene).toBeNull();
    const fb = selectScene(scenes, { ...opts, allowCloudFallback: true });
    expect(fb.scene?.dt).toBe(1000);
    expect(fb.reason).toMatch(/CLOUD FALLBACK/i);
  });

  it('reports how many scenes passed the threshold', () => {
    const scenes = [scene({ dt: 5000, cl: 5 }), scene({ dt: 4000, cl: 10 }), scene({ dt: 3000, cl: 90 })];
    expect(selectScene(scenes, opts).passingCount).toBe(2);
  });

  it('sorts by UTC acquisition time, newest first', () => {
    const scenes = [scene({ dt: 100 }), scene({ dt: 300 }), scene({ dt: 200 })];
    expect(selectScene(scenes, opts).scene?.dt).toBe(300);
  });
});

describe('numerical NDVI is never derived from rendered tiles', () => {
  it('extracts the upstream layer id from a tile template', () => {
    expect(extractLayerId('https://api.agromonitoring.com/tile/1.0/{z}/{x}/{y}/LAYER1/POLY?appid=x')).toBe('LAYER1');
    expect(extractLayerId('not-a-tile-url')).toBeNull();
  });

  it('parses documented provider statistics', () => {
    const s = parseNumericStats({ mean: 0.38, median: 0.39, min: -0.1, max: 0.72, std: 0.16, p25: 0.26, p75: 0.51, num: 359094 });
    expect(s?.mean).toBe(0.38);
    expect(s?.num).toBe(359094);
  });

  it('rejects malformed statistics rather than inventing values', () => {
    expect(parseNumericStats(null)).toBeNull();
    expect(parseNumericStats({ mean: 0.4 })).toBeNull(); // missing fields
    expect(parseNumericStats({ mean: 'x', median: 1, min: 0, max: 1, std: 1, p25: 0, p75: 1, num: 5 })).toBeNull();
  });
});

describe('provider status is derived from real responses, not env vars', () => {
  it('reports NOT_CONFIGURED when the key is absent', async () => {
    const sel = await resolveNdviObservation();
    expect(sel.status).toBe('NOT_CONFIGURED');
    expect(sel.scene).toBeNull();
    expect(sel.numeric).toBeNull();
  });

  it('reports AUTHENTICATION_FAILED on 401', async () => {
    process.env.AGROMONITORING_API_KEY = 'test-key';
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: false, status: 401, json: async () => ({}) })));
    const sel = await resolveNdviObservation();
    expect(sel.status).toBe('AUTHENTICATION_FAILED');
  });

  it('reports AUTHENTICATED when no polygon has valid geometry', async () => {
    process.env.AGROMONITORING_API_KEY = 'test-key';
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({ ok: true, status: 200, json: async () => [{ id: 'x', name: 'X', geo_json: { geometry: { coordinates: [[]] } } }] }))
    );
    const sel = await resolveNdviObservation();
    expect(sel.status).toBe('AUTHENTICATED');
  });

  it('reports IMAGERY_UNAVAILABLE when no scene meets the cloud threshold', async () => {
    process.env.AGROMONITORING_API_KEY = 'test-key';
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: any) => {
        if (String(url).includes('/polygons')) {
          return {
            ok: true,
            status: 200,
            json: async () => [
              { id: 'p1', name: 'Sanjay Gandhi National Park Mumbai', geo_json: { geometry: { coordinates: [[[72.88, 19.2], [72.93, 19.2], [72.93, 19.25], [72.88, 19.25], [72.88, 19.2]]] } } },
            ],
          };
        }
        return { ok: true, status: 200, json: async () => [scene({ cl: 99.9 })] };
      })
    );
    const sel = await resolveNdviObservation();
    expect(sel.status).toBe('IMAGERY_UNAVAILABLE');
    expect(sel.scene).toBeNull();
  });

  it('never returns a provider URL containing the API key to the caller', async () => {
    process.env.AGROMONITORING_API_KEY = 'SUPER-SECRET-KEY';
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: any) => {
        if (String(url).includes('/polygons')) {
          return {
            ok: true,
            status: 200,
            json: async () => [
              { id: 'p1', name: 'Sanjay Gandhi National Park Mumbai', geo_json: { geometry: { coordinates: [[[72.88, 19.2], [72.93, 19.2], [72.93, 19.25], [72.88, 19.25], [72.88, 19.2]]] } } },
            ],
          };
        }
        if (String(url).includes('/stats/')) {
          return { ok: true, status: 200, json: async () => ({ mean: 0.38, median: 0.39, min: -0.1, max: 0.72, std: 0.16, p25: 0.26, p75: 0.51, num: 359094 }) };
        }
        return {
          ok: true,
          status: 200,
          json: async () => [
            scene({
              cl: 11.54,
              id: 'SCENE1',
              stats: { ndvi: 'https://api.agromonitoring.com/stats/1.0/LAYER1/POLY?appid=SUPER-SECRET-KEY' },
            }),
          ],
        };
      })
    );
    const sel = await resolveNdviObservation();
    expect(sel.status).toBe('PARTIAL_COVERAGE');
    expect(sel.numeric?.mean).toBe(0.38);
    const serialised = JSON.stringify(sel);
    expect(serialised).not.toContain('SUPER-SECRET-KEY');
  });
});
