/**
 * Phase C — server-side city parameter behaviour.
 *
 * These tests exercise `resolveCity` / `cityDataStatus` directly, against
 * `URLSearchParams` rather than a Next request object, so they are deterministic
 * and need no database, no network and no framework runtime.
 *
 * Endpoint-level behaviour that can be tested without a live database is also
 * covered through the same pure functions. Handler tests themselves remain
 * impractical here (no NextRequest factory, mutable SQLite, live geocoder), which
 * is the limitation already recorded in tests/mumbai-regression.test.ts.
 */

import { describe, it, expect } from 'vitest';
import {
  resolveCity,
  readCityValues,
  cityDataStatus,
  cityMeta,
  emptyCityWarnings,
  toErrorBody,
  CityParamError,
  UnknownCityParamError,
  DuplicateCityParamError,
  NO_DATA_WARNING,
  NOT_AVAILABLE_WARNING,
  DATA_UNAVAILABLE_REASON,
} from '@/lib/green/city-param';
import {
  DEFAULT_CITY,
  MUMBAI,
  PUNE,
  BENGALURU,
  getCity,
  isPublished,
  describeCityPublication,
  listCityIds,
  UnknownCityError,
} from '@/lib/green/config';
import { STATIC_GREEN_SPACES_BY_CITY } from '@/lib/green/static-spaces-fallback';
import { selectAoiPolygons } from '@/lib/green/ndvi-provider';

const p = (q: string) => new URLSearchParams(q);

// ─────────────────────────────────────────────────────────────────────────────
// 1. Missing / empty defaults to Mumbai
// ─────────────────────────────────────────────────────────────────────────────

describe('Phase C: missing or empty city defaults to Mumbai', () => {
  it('returns Mumbai when the parameter is absent', () => {
    const r = resolveCity(p(''));
    expect(r.city).toBe(MUMBAI);
    expect(r.isDefault).toBe(true);
    expect(r.wasEmpty).toBe(false);
  });

  it('returns Mumbai when the value is empty or whitespace only', () => {
    for (const raw of ['', '   ', '\t', '%20%20']) {
      const r = resolveCity(p(`city=${raw}`));
      expect(r.city).toBe(MUMBAI);
      expect(r.isDefault).toBe(false); // a value WAS supplied
      expect(r.wasEmpty).toBe(true);
    }
  });

  it('accepts undefined, null and an absent search string', () => {
    expect(resolveCity(undefined).city).toBe(MUMBAI);
    expect(resolveCity(null).city).toBe(MUMBAI);
    expect(resolveCity('').city).toBe(MUMBAI);
    expect(resolveCity('?lat=19&lon=72').city).toBe(MUMBAI);
  });

  it('preserves the default identity chain', () => {
    expect(DEFAULT_CITY).toBe(MUMBAI);
    expect(resolveCity(p('')).city).toBe(DEFAULT_CITY);
  });

  it('agrees with getCity() on the empty case', () => {
    expect(resolveCity(p('city=')).city).toBe(getCity(''));
    expect(resolveCity(p('city=%20%20')).city).toBe(getCity('   '));
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. Explicit Mumbai behaves identically to the omitted case
// ─────────────────────────────────────────────────────────────────────────────

describe('Phase C: explicit city=mumbai matches the omitted request', () => {
  it('resolves to the identical Mumbai object', () => {
    const omitted = resolveCity(p(''));
    const explicit = resolveCity(p('city=mumbai'));
    expect(explicit.city).toBe(omitted.city);
  });

  it('produces identical response metadata apart from the default flag', () => {
    const omittedMeta = cityMeta(resolveCity(p('')));
    const explicitMeta = cityMeta(resolveCity(p('city=mumbai')));
    expect(explicitMeta.city).toBe(omittedMeta.city);
    expect(explicitMeta.cityName).toBe(omittedMeta.cityName);
    expect(explicitMeta.boundaryIsBoundingBoxOnly).toBe(omittedMeta.boundaryIsBoundingBoxOnly);
    // Only the "was this defaulted?" flag differs, which is informative.
    expect(omittedMeta.isDefaultCity).toBe(true);
    expect(explicitMeta.isDefaultCity).toBe(false);
  });

  it('normalises case and whitespace exactly as getCity does', () => {
    expect(resolveCity(p('city=MUMBAI')).city).toBe(MUMBAI);
    expect(resolveCity(p('city=%20mumbai%20')).city).toBe(MUMBAI);
    expect(resolveCity(p('city=Pune')).city).toBe(getCity('Pune'));
    expect(resolveCity(p('city=%20PUNE%20')).city).toBe(getCity('  PUNE  '));
  });

  it('resolves every registered city', () => {
    expect(resolveCity(p('city=pune')).city).toBe(PUNE);
    expect(resolveCity(p('city=bengaluru')).city).toBe(BENGALURU);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 3. Duplicate parameters
// ─────────────────────────────────────────────────────────────────────────────

describe('Phase C: duplicate city parameters are rejected', () => {
  it('rejects two different city values', () => {
    expect(() => resolveCity(p('city=pune&city=mumbai'))).toThrow(DuplicateCityParamError);
  });

  it('rejects two IDENTICAL values — a duplicate is still a duplicate', () => {
    let err: unknown;
    try {
      resolveCity(p('city=mumbai&city=mumbai'));
    } catch (e) {
      err = e;
    }
    expect(err).toBeInstanceOf(DuplicateCityParamError);
    expect((err as DuplicateCityParamError).requestedIds).toEqual(['mumbai', 'mumbai']);
  });

  it('rejects three values', () => {
    expect(() => resolveCity(p('city=mumbai&city=pune&city=bengaluru'))).toThrow(
      DuplicateCityParamError
    );
  });

  it('rejects a duplicate even when the second value is empty', () => {
    expect(() => resolveCity(p('city=pune&city='))).toThrow(DuplicateCityParamError);
  });

  it('never silently picks the first or last value', () => {
    try {
      resolveCity(p('city=mumbai&city=pune'));
      throw new Error('expected a throw');
    } catch (e) {
      expect(e).toBeInstanceOf(DuplicateCityParamError);
      expect((e as DuplicateCityParamError).code).toBe('DUPLICATE_CITY_PARAM');
      expect((e as DuplicateCityParamError).status).toBe(400);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 4. Unknown ids
// ─────────────────────────────────────────────────────────────────────────────

describe('Phase C: unknown city ids are rejected', () => {
  it('throws UnknownCityParamError with HTTP 400', () => {
    try {
      resolveCity(p('city=atlantis'));
      throw new Error('expected a throw');
    } catch (e) {
      expect(e).toBeInstanceOf(UnknownCityParamError);
      expect((e as UnknownCityParamError).code).toBe('UNKNOWN_CITY');
      expect((e as UnknownCityParamError).status).toBe(400);
      expect((e as UnknownCityParamError).requestedId).toBe('atlantis');
    }
  });

  it('lists the valid city ids in the error', () => {
    const err = toErrorBody(
      (() => {
        try {
          resolveCity(p('city=atlantis'));
        } catch (e) {
          return e as UnknownCityParamError;
        }
        throw new Error('expected a throw');
      })()
    );
    expect(err.error.code).toBe('UNKNOWN_CITY');
    expect(err.error.validCityIds?.sort()).toEqual(['bengaluru', 'delhi', 'hyderabad', 'kolkata', 'mumbai', 'nagpur', 'pune']);
    expect(err.ok).toBe(false);
    expect(err.data).toBeNull();
  });

  it('rejects prototype property names', () => {
    for (const bad of ['toString', 'constructor', '__proto__', 'hasOwnProperty', 'valueOf']) {
      expect(() => resolveCity(p(`city=${bad}`))).toThrow(UnknownCityParamError);
    }
  });

  it('rejects the dissolved BBMP name and the old Bangalore spelling', () => {
    expect(() => resolveCity(p('city=bbmp'))).toThrow(UnknownCityParamError);
    expect(() => resolveCity(p('city=bangalore'))).toThrow(UnknownCityParamError);
  });

  it('rejects near-misses', () => {
    for (const bad of ['mum-bai', 'mumbaii', 'punee', 'bengalur', ' delhii', 'mumbai ']) {
      const v = bad.trim();
      if (v === 'mumbai') continue; // whitespace-only difference is normalised
      expect(() => resolveCity(p(`city=${encodeURIComponent(bad)}`))).toThrow(
        UnknownCityParamError
      );
    }
  });

  it('cannot smuggle a value in under a different parameter name', () => {
    // `city[]`, `cityId`, `cityx` are NOT the `city` parameter. They must be
    // ignored entirely — which means the request falls back to Mumbai rather
    // than resolving to whatever the alternate name implied.
    for (const q of ['city[]=pune', 'cityId=pune', 'cityx=pune', 'CITY=pune', 'city.name=pune']) {
      const r = resolveCity(p(q));
      expect(r.city).toBe(MUMBAI);
      expect(r.isDefault).toBe(true);
    }
  });

  it('stays consistent with getCity() on what counts as unknown', () => {
    for (const bad of ['atlantis', 'bbmp', 'bangalore', 'toString']) {
      let configThrew = false;
      try {
        getCity(bad);
      } catch (e) {
        configThrew = e instanceof UnknownCityError;
      }
      let paramThrew = false;
      try {
        resolveCity(p(`city=${bad}`));
      } catch (e) {
        paramThrew = e instanceof UnknownCityParamError;
      }
      expect(configThrew).toBe(paramThrew);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 5. Pune / Bengaluru never receive Mumbai data
// ─────────────────────────────────────────────────────────────────────────────

describe('Phase C: cities with no records never borrow Mumbai data', () => {
  it('classifies registered cities with datasets as data-available', () => {
    expect(cityDataStatus(MUMBAI)).toBe('AVAILABLE');
    expect(cityDataStatus(PUNE)).toBe('AVAILABLE');
    expect(cityDataStatus(BENGALURU)).toBe('AVAILABLE');
  });

  it('keeps data availability separate from publication status', () => {
    // isPublished is false for all cities today; data availability is separate from publication.
    for (const city of [MUMBAI, PUNE, BENGALURU]) {
      expect(isPublished(city)).toBe(false);
      expect(cityDataStatus(city)).toBe('AVAILABLE');
    }
  });

  it('registers Pune and Bengaluru in the per-city fallback map', () => {
    // Mumbai remains the original 45-record seed; Pune and Bengaluru have
    // their own candidate datasets added in this phase.
    // Normalized counts from the GeoJSON datasets (Phase D):
    //   Pune: 198 boundary polygons + 81 location points = 279 records
    //   Bengaluru: 1272 point features (261 with positive area_sqm)
    expect(STATIC_GREEN_SPACES_BY_CITY.mumbai).toHaveLength(45);
    expect(STATIC_GREEN_SPACES_BY_CITY.pune).toBeDefined();
    expect(STATIC_GREEN_SPACES_BY_CITY.bengaluru).toBeDefined();
    expect(STATIC_GREEN_SPACES_BY_CITY.pune).toHaveLength(279);
    expect(STATIC_GREEN_SPACES_BY_CITY.bengaluru).toHaveLength(1272);
  });

  it('data status reflects static dataset availability per city', () => {
    // Pune and Bengaluru now have static datasets, so dataStatus is AVAILABLE
    // (not EMPTY), and no NO_DATA_WARNING is emitted.
    for (const id of ['pune', 'bengaluru']) {
      const r = resolveCity(p(`city=${id}`));
      expect(r.dataStatus).toBe('AVAILABLE');
      // No empty-city warning since each city has its own fallback dataset.
      const warnings = emptyCityWarnings(r);
      expect(warnings.length).toBe(0);
    }
  });

  it('never marks a provisional bbox as a municipal boundary', () => {
    for (const id of listCityIds()) {
      expect(cityMeta(resolveCity(p(`city=${id}`))).boundaryIsBoundingBoxOnly).toBe(true);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 6. NDVI AOI selection never invents a polygon
// ─────────────────────────────────────────────────────────────────────────────

describe('Phase C: NDVI selection uses the requested city envelope', () => {
  const sgnp = {
    id: '6ac0a79f4e13cb0a9cfaf4cf',
    name: 'Sanjay Gandhi National Park Mumbai',
    bounds: [72.88, 19.2, 72.93, 19.25] as [number, number, number, number],
    ringLength: 5,
  };

  it('selects the Mumbai polygon for a Mumbai envelope', () => {
    const { selected } = selectAoiPolygons([sgnp], MUMBAI.bbox);
    expect(selected).toHaveLength(1);
  });

  it('selects NOTHING for Pune or Bengaluru — no polygon is invented', () => {
    expect(selectAoiPolygons([sgnp], PUNE.bbox).selected).toHaveLength(0);
    expect(selectAoiPolygons([sgnp], BENGALURU.bbox).selected).toHaveLength(0);
  });

  it('warns rather than substituting when no polygon intersects', () => {
    const { selected, warnings } = selectAoiPolygons([sgnp], PUNE.bbox);
    expect(selected).toHaveLength(0);
    expect(warnings.join(' ')).toMatch(/No registered polygon intersects/);
  });

  it('reports partial coverage for the Mumbai polygon (it is not city-wide)', () => {
    const { selected } = selectAoiPolygons([sgnp], MUMBAI.bbox);
    const [w, s, e, n] = [MUMBAI.bbox[1], MUMBAI.bbox[0], MUMBAI.bbox[3], MUMBAI.bbox[2]];
    const [pw, ps, pe, pn] = sgnp.bounds;
    const coversStudyArea = pw <= w && ps <= s && pe >= e && pn >= n;
    expect(coversStudyArea).toBe(false);
    expect(selected[0].id).toBe(sgnp.id);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 7. Metrics publication guard
// ─────────────────────────────────────────────────────────────────────────────

describe('Phase C: metrics refuse unsupported boundary/population combinations', () => {
  it('blocks statistics for every city, including Mumbai', () => {
    for (const id of listCityIds()) {
      const city = getCity(id);
      expect(isPublished(city)).toBe(false);
      expect(describeCityPublication(city).published).toBe(false);
    }
  });

  it('never combines an urban-agglomeration population with a municipal area', () => {
    // The levels are explicit, so a mismatch is detectable rather than implied.
    for (const id of listCityIds()) {
      const pop = getCity(id).populationMeta;
      if (!pop) continue;
      expect(pop.level).toBe('municipal_corporation');
      expect(pop.level).not.toBe('urban_agglomeration');
    }
  });

  it('registers no population at all for Bengaluru', () => {
    expect(BENGALURU.populationMeta).toBeUndefined();
    expect(describeCityPublication(BENGALURU).reasons.join(' ')).toMatch(/population/i);
  });

  it('uses the municipal-corporation component, not the agglomeration total', () => {
    expect(MUMBAI.populationMeta?.value).toBe(12_442_373);
    expect(PUNE.populationMeta?.value).toBe(3_124_458);
    // The UA totals must not appear as the registered figure.
    expect(MUMBAI.populationMeta?.value).not.toBe(18_394_912);
    expect(PUNE.populationMeta?.value).not.toBe(5_057_709);
  });

  it('exports a stable reason code for the refusal', () => {
    expect(DATA_UNAVAILABLE_REASON).toBe('DATA_UNAVAILABLE');
    expect(NOT_AVAILABLE_WARNING).toBe('NOT_AVAILABLE_FOR_CITY');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 8. Error envelope
// ─────────────────────────────────────────────────────────────────────────────

describe('Phase C: error envelope shape', () => {
  it('serialises duplicates with the offending values', () => {
    try {
      resolveCity(p('city=pune&city=mumbai'));
    } catch (e) {
      const body = toErrorBody(e as CityParamError);
      expect(body.error.code).toBe('DUPLICATE_CITY_PARAM');
      expect(body.error.requestedIds).toEqual(['pune', 'mumbai']);
      expect(body.error.validCityIds).toBeUndefined();
      return;
    }
    throw new Error('expected a throw');
  });

  it('always yields an ApiResponse-shaped failure', () => {
    for (const q of ['city=atlantis', 'city=a&city=b']) {
      try {
        resolveCity(p(q));
      } catch (e) {
        const body = toErrorBody(e as CityParamError);
        expect(body.ok).toBe(false);
        expect(body.data).toBeNull();
        expect(body.error.code).toMatch(/^(UNKNOWN_CITY|DUPLICATE_CITY_PARAM)$/);
        expect(body.error.message.length).toBeGreaterThan(10);
      }
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 9. readCityValues helper
// ─────────────────────────────────────────────────────────────────────────────

describe('Phase C: readCityValues', () => {
  it('returns every occurrence in order', () => {
    expect(readCityValues(p('city=a&city=b&city=c'))).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array when absent', () => {
    expect(readCityValues(p('lat=1&lon=2'))).toEqual([]);
    expect(readCityValues(undefined)).toEqual([]);
  });

  it('accepts a raw query string with or without the leading question mark', () => {
    expect(readCityValues('?city=pune')).toEqual(['pune']);
    expect(readCityValues('city=pune')).toEqual(['pune']);
  });

  it('does not treat a similarly named parameter as the city', () => {
    expect(readCityValues(p('cityId=pune&cityx=pune'))).toEqual([]);
    expect(readCityValues(p('city=pune'))).toEqual(['pune']);
  });
});
