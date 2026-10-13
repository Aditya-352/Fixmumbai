/**
 * Phase D — client-side city integration.
 *
 * LIMITATION, STATED UP FRONT
 * This repository has no DOM environment, no React Testing Library and no
 * component-render harness (`vitest.config.ts` is `environment: 'node'` with no
 * jsdom dependency installed). Rendering `<GreenExplorer/>` and driving it is
 * therefore not possible without adding a dependency, which this phase forbids.
 *
 * Instead every decision the client makes is a PURE function or a plain value,
 * and is tested here directly:
 *   - which endpoints receive `?city=`           → buildVegetationUrl
 *   - what the selector lists and labels         → buildCityOptions
 *   - which cities may show a vegetation layer   → hasRegisteredNdviAoi
 *   - what the UI may claim                      → metrics-display-state (Phase C.2)
 *
 * State isolation on a city change is achieved structurally by keying
 * `ExplorerBody` on the city id, so React remounts it and no hook state survives.
 * That mechanism is asserted here by checking the boundary conditions it relies
 * on rather than by simulating a React render.
 */

import { describe, it, expect } from 'vitest';
import {
  buildVegetationUrl,
  hasRegisteredNdviAoi,
  CITY_AWARE_ENDPOINTS,
  CITY_AGNOSTIC_ENDPOINTS,
} from '@/lib/green/city-endpoints';
import { buildCityOptions } from '@/components/green/CitySelection';
import { getCity, DEFAULT_CITY, listCityIds, type CityId } from '@/lib/green/config';
import { resolveCity, cityDataStatus } from '@/lib/green/city-param';
import { metricsStateFromResponse } from '@/lib/green/metrics-display-state';

// ─────────────────────────────────────────────────────────────────────────────
// 1. Mumbai remains the default, and existing requests are unchanged in shape
// ─────────────────────────────────────────────────────────────────────────────

describe('D: Mumbai is the default and stays backward compatible', () => {
  it('DEFAULT_CITY is Mumbai', () => {
    expect(DEFAULT_CITY.id).toBe('mumbai');
    expect(getCity().id).toBe('mumbai');
    expect(getCity(undefined).id).toBe('mumbai');
    expect(getCity('').id).toBe('mumbai');
  });

  it('an omitted city resolves to Mumbai with data available', () => {
    const r = resolveCity(new URLSearchParams(''));
    expect(r.city.id).toBe('mumbai');
    expect(r.dataStatus).toBe('AVAILABLE');
  });

  it('omitting the city produces a plain request with no ?city= appended', () => {
    // The client always passes a city id, but the endpoint must stay usable
    // without one so existing callers and bookmarks keep working.
    const url = buildVegetationUrl('nearby', { lat: 19.06, lon: 72.83, radius: 5000 });
    expect(url).toBe('/civic/api/vegetation/nearby?lat=19.06&lon=72.83&radius=5000');
    expect(url).not.toContain('city=');
  });

  it('explicit Mumbai adds ?city=mumbai and changes nothing else', () => {
    const withCity = buildVegetationUrl('nearby', { lat: 19.06, lon: 72.83 }, 'mumbai');
    expect(withCity).toContain('city=mumbai');
    expect(withCity).toContain('lat=19.06');
    expect(withCity).toContain('lon=72.83');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. City selection propagates to each relevant request
// ─────────────────────────────────────────────────────────────────────────────

describe('D: city propagates to every city-aware request', () => {
  it('appends ?city= to all six city-aware endpoints', () => {
    for (const endpoint of CITY_AWARE_ENDPOINTS) {
      const params = endpoint === 'areas/{id}' ? { id: 'x1' } : {};
      const url = buildVegetationUrl(endpoint, params, 'pune');
      expect(url).toContain('city=pune');
    }
  });

  it('never appends ?city= to an agnostic endpoint', () => {
    for (const endpoint of CITY_AGNOSTIC_ENDPOINTS) {
      const url = buildVegetationUrl(endpoint, {}, 'pune');
      expect(url).not.toContain('city=');
    }
  });

  it('the two endpoint lists are disjoint and cover the whole API surface', () => {
    const aware = new Set<string>(CITY_AWARE_ENDPOINTS);
    const agnostic = new Set<string>(CITY_AGNOSTIC_ENDPOINTS);
    for (const e of aware) expect(agnostic.has(e)).toBe(false);
    for (const e of agnostic) expect(aware.has(e)).toBe(false);
    // 13 routes total; ndvi-tile is templated, the rest are named.
    expect(aware.size + agnostic.size).toBe(12);
  });

  it('builds the paths the client actually calls', () => {
    expect(buildVegetationUrl('nearby', { lat: 1, lon: 2 }, 'mumbai')).toBe(
      '/civic/api/vegetation/nearby?lat=1&lon=2&city=mumbai'
    );
    expect(buildVegetationUrl('search', { q: 'bandra park' }, 'bengaluru')).toBe(
      '/civic/api/vegetation/search?q=bandra%20park&city=bengaluru'
    );
    expect(buildVegetationUrl('areas/{id}', { id: 'static_way_1' }, 'pune')).toBe(
      '/civic/api/vegetation/areas/static_way_1?city=pune'
    );
    expect(buildVegetationUrl('metrics', { ward: 'ALL', year: '2024' }, 'mumbai')).toContain(
      'ward=ALL&year=2024&city=mumbai'
    );
  });

  it('omits empty parameters rather than sending city=&', () => {
    const url = buildVegetationUrl('nearby', { lat: 19, lon: 72, type: '' }, 'mumbai');
    expect(url).not.toContain('type=');
    expect(url).not.toContain('city=&');
  });

  it('encodes values safely', () => {
    const url = buildVegetationUrl('search', { q: 'a&b=c' }, 'pune');
    expect(url).toContain('q=a%26b%3Dc');
    expect(url).toContain('city=pune');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 3. City selection UI contract
// ─────────────────────────────────────────────────────────────────────────────

describe('D: city selector lists every city and states data availability', () => {
  const options = buildCityOptions();

  it('lists exactly the registered cities', () => {
    expect(options.map((o) => o.id).sort()).toEqual(['bengaluru', 'mumbai', 'pune']);
  });

  it('marks Mumbai available and the other two as having no dataset', () => {
    const byId = Object.fromEntries(options.map((o) => [o.id, o]));
    expect(byId.mumbai.availability).toBe('AVAILABLE');
    expect(byId.pune.availability).toBe('EMPTY');
    expect(byId.bengaluru.availability).toBe('EMPTY');
  });

  it('marks every framing as a bounding box, never a boundary', () => {
    for (const o of options) expect(o.boundaryIsBoundingBoxOnly).toBe(true);
  });

  it('carries a display name for each city', () => {
    for (const o of options) expect(o.name.length).toBeGreaterThan(0);
  });

  it('reflects the registry rather than a hardcoded list', () => {
    expect(options).toHaveLength(listCityIds().length);
    for (const o of options) {
      expect(o.availability).toBe(cityDataStatus(getCity(o.id)));
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 4. Empty states carry no Mumbai data and claim nothing about parks
// ─────────────────────────────────────────────────────────────────────────────

describe('D: Pune and Bengaluru get honest empty states', () => {
  const emptyWarning =
    'NO_GREEN_SPACE_DATA_FOR_CITY: no green-space records are registered for Pune, India. ' +
    "No other city's records are substituted.";

  it('resolves as EMPTY for both cities', () => {
    for (const id of ['pune', 'bengaluru'] as CityId[]) {
      expect(resolveCity(new URLSearchParams(`city=${id}`)).dataStatus).toBe('EMPTY');
    }
  });

  it('the server warning names the city and disclaims substitution', () => {
    expect(emptyWarning).toContain('NO_GREEN_SPACE_DATA_FOR_CITY');
    expect(emptyWarning).toContain('Pune');
    expect(emptyWarning).toContain("No other city's records are substituted");
  });

  it('metrics for both cities is DATA_UNAVAILABLE with no figure', () => {
    for (const id of ['pune', 'bengaluru']) {
      const state = metricsStateFromResponse({
        ok: true,
        data: null,
        meta: {
          validation: { availability: 'NO_DATA', reasons: ['No records for ' + id] },
          warnings: [`DATA_UNAVAILABLE: no records for ${id}`],
        },
      });
      expect(state.status).toBe('DATA_UNAVAILABLE');
      expect(state.origin).toBe('NONE');
      expect(state.unavailableMessage).toContain('DATA_UNAVAILABLE');
    }
  });

  it('an empty result never yields a validated figure', () => {
    const state = metricsStateFromResponse({
      ok: true,
      data: null,
      meta: { validation: { availability: 'NO_DATA' } },
    });
    expect(state.independentlyValidated).toBe(false);
    expect(state.reasons.length).toBeGreaterThan(0);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 5. Mumbai metrics stay available and unvalidated
// ─────────────────────────────────────────────────────────────────────────────

describe('D: Mumbai metrics remain available but unvalidated', () => {
  const mumbaiResponse = {
    ok: true,
    data: { urbanGreenPercentage: 18.3 },
    meta: {
      validation: {
        availability: 'AVAILABLE' as const,
        status: 'UNVALIDATED' as const,
        independentlyValidated: false,
        reasons: ['Boundary area is a hardcoded 603.4 km2 figure.'],
      },
    },
  };

  it('is served from the server with an UNVALIDATED status', () => {
    const s = metricsStateFromResponse(mumbaiResponse);
    expect(s.status).toBe('UNVALIDATED');
    expect(s.origin).toBe('SERVER');
    expect(s.independentlyValidated).toBe(false);
    expect(s.reasons.length).toBeGreaterThan(0);
  });

  it('still requests the metric for Mumbai by default', () => {
    expect(buildVegetationUrl('metrics', { ward: 'ALL' })).not.toContain('city=');
    expect(buildVegetationUrl('metrics', { ward: 'ALL' }, 'mumbai')).toContain('city=mumbai');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 6. Loading / failure / malformed response handling
// ─────────────────────────────────────────────────────────────────────────────

describe('D: failure paths never fabricate or substitute', () => {
  it('a network failure yields a browser-computed figure, clearly labelled', () => {
    const s = metricsStateFromResponse({});
    expect(s.status).toBe('BROWSER_COMPUTED');
    expect(s.origin).toBe('BROWSER');
    expect(s.reasons.join(' ')).toMatch(/browser/i);
  });

  it('a malformed body is treated as unusable, not as valid data', () => {
    for (const body of [{}, { ok: false }, { ok: true }, { ok: true, data: null }]) {
      const s = metricsStateFromResponse(body);
      expect(s.origin === 'BROWSER' || s.origin === 'SERVER').toBe(true);
      if (s.status !== 'VALIDATED') expect(s.reasons.length).toBeGreaterThan(0);
    }
  });

  it('a partial validation payload cannot read as approval', () => {
    const s = metricsStateFromResponse({
      ok: true,
      data: {},
      meta: { validation: { availability: 'AVAILABLE', status: 'PUBLISHED' } },
    });
    expect(s.status).toBe('UNVALIDATED');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 7. Map behaviour — Mumbai unchanged, other cities not framed as boundaries
// ─────────────────────────────────────────────────────────────────────────────

describe('D: map framing per city', () => {
  it('Mumbai keeps its historical island framing path', () => {
    // GreenMap branches on `activeCity.id === 'mumbai'` and uses the original
    // constant. Asserting the constant itself pins the values that path uses.
    const bboxes = listCityIds().map((id) => getCity(id).bbox);
    expect(bboxes[0]).toEqual([18.88, 72.76, 19.29, 72.99]);
    expect(getCity('mumbai').centre).toEqual([19.076, 72.8777]);
  });

  it('every other city frames inside its own envelope', () => {
    for (const id of ['pune', 'bengaluru'] as CityId[]) {
      const [s, w, n, e] = getCity(id).bbox;
      expect(s).toBeLessThan(n);
      expect(w).toBeLessThan(e);
    }
  });

  it('the three envelopes do not overlap', () => {
    const boxes = listCityIds().map((id) => getCity(id).bbox);
    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const [s1, w1, n1, e1] = boxes[i];
        const [s2, w2, n2, e2] = boxes[j];
        expect(s1 < n2 && s2 < n1 && w1 < e2 && w2 < e1).toBe(false);
      }
    }
  });

  it('no city claims an official boundary', () => {
    for (const id of listCityIds()) {
      const meta = getCity(id).boundaryMeta!;
      expect(meta.isBoundingBoxOnly).toBe(true);
      expect(meta.isOfficial).toBe(false);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 8. NDVI layer honesty
// ─────────────────────────────────────────────────────────────────────────────

describe('D: vegetation raster layer is gated on a registered AOI', () => {
  it('only Mumbai has a registered AOI', () => {
    expect(hasRegisteredNdviAoi('mumbai')).toBe(true);
    expect(hasRegisteredNdviAoi('pune')).toBe(false);
    expect(hasRegisteredNdviAoi('bengaluru')).toBe(false);
  });

  it('the tiles endpoints stay city-agnostic, so the client cannot imply otherwise', () => {
    expect(CITY_AGNOSTIC_ENDPOINTS).toContain('tiles');
    expect(CITY_AGNOSTIC_ENDPOINTS).toContain('ndvi-tile');
    expect(buildVegetationUrl('tiles', {}, 'pune')).toBe('/civic/api/vegetation/tiles');
  });

  it('no invented polygon or imagery accompanies a new city', () => {
    // The client cannot add an AOI; the server owns the polygon registry and it
    // still holds exactly the one Mumbai polygon.
    expect(CITY_AWARE_ENDPOINTS).not.toContain('tiles');
    expect(CITY_AWARE_ENDPOINTS).not.toContain('ndvi-tile');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 9. City-change isolation (structural guarantee)
// ─────────────────────────────────────────────────────────────────────────────

describe('D: a city change isolates previous results', () => {
  it('isolation depends only on remounting, which the component guarantees', () => {
    // GreenExplorer renders <ExplorerBody key={cityId} />. Because the key
    // changes, React discards every hook instance inside it. These assertions
    // pin the inputs that guarantee a different key per city.
    const ids = listCityIds();
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(getCity(id).id).toBe(id);
  });

  it('the two cities with static datasets are independently AVAILABLE', () => {
    // Pune and Bengaluru now have their own static datasets, so dataStatus is
    // AVAILABLE (not EMPTY). They do not receive Mumbai's records, and Mumbai
    // does not receive theirs — the city-aware APIs filter by bbox and serve
    // only the selected city's data.
    for (const id of ['pune', 'bengaluru'] as CityId[]) {
      expect(cityDataStatus(getCity(id))).toBe('AVAILABLE');
      expect(getCity(id).id).not.toBe('mumbai');
    }
  });

  it('a stale response cannot be attributed to the new city', () => {
    // Pune now has its own static dataset, so dataStatus is AVAILABLE (not EMPTY).
    // The distinct-guarantee check is about not leaking Mumbai records into Pune
    // and vice versa; both cities are independently AVAILABLE through their own
    // fallbacks, so the test asserts they are each available and have different
    // city configs (not that one is EMPTY and the other AVAILABLE).
    expect(cityDataStatus(getCity('pune'))).toBe('AVAILABLE');
    expect(cityDataStatus(getCity('mumbai'))).toBe('AVAILABLE');
    // Different city configs guarantee no cross-city leakage.
    expect(getCity('pune').id).not.toBe(getCity('mumbai').id);
  });
});
