/**
 * Phase B — city registry.
 *
 * Covers the four behaviours the registry must guarantee:
 *   1. Omitting a city id yields Mumbai, so every pre-existing caller is
 *      unaffected.
 *   2. Lookup by id is exact and case/whitespace tolerant.
 *   3. An explicitly supplied unknown id raises a typed error and NEVER falls
 *      back to Mumbai.
 *   4. A city without approved boundary metadata and level-compatible
 *      population stays unpublished.
 */

import { describe, it, expect } from 'vitest';
import {
  MUMBAI,
  PUNE,
  BENGALURU,
  ACTIVE_CITY,
  DEFAULT_CITY,
  CITY_REGISTRY,
  listCityIds,
  listCities,
  hasCity,
  getCity,
  isPublished,
  describeCityPublication,
  UnknownCityError,
  type CityId,
  type CityConfig,
} from '@/lib/green/config';

// ─────────────────────────────────────────────────────────────────────────────
// 1. Registry shape
// ─────────────────────────────────────────────────────────────────────────────

describe('registry: shape', () => {
  it('registers exactly the three supported cities', () => {
    expect(listCityIds().sort()).toEqual(['bengaluru', 'mumbai', 'pune']);
    expect(Object.keys(CITY_REGISTRY).sort()).toEqual(['bengaluru', 'mumbai', 'pune']);
    expect(listCities()).toHaveLength(3);
  });

  it('gives every city a stable id that matches its registry key', () => {
    for (const id of listCityIds()) {
      expect(CITY_REGISTRY[id].id).toBe(id);
    }
  });

  it('keys the registry by the CityId union with no extras', () => {
    const declared: CityId[] = ['mumbai', 'pune', 'bengaluru'];
    for (const id of declared) {
      expect(CITY_REGISTRY[id]).toBeDefined();
    }
    expect(Object.keys(CITY_REGISTRY)).toHaveLength(declared.length);
  });

  it('returns the same object references on every lookup (no cloning)', () => {
    expect(getCity('mumbai')).toBe(MUMBAI);
    expect(getCity('pune')).toBe(PUNE);
    expect(getCity('bengaluru')).toBe(BENGALURU);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. Default-city behaviour — the Mumbai-preservation guarantee
// ─────────────────────────────────────────────────────────────────────────────

describe('registry: omitting a city continues to use Mumbai', () => {
  it('makes DEFAULT_CITY the existing MUMBAI object', () => {
    expect(DEFAULT_CITY).toBe(MUMBAI);
  });

  it('keeps ACTIVE_CITY as an alias of DEFAULT_CITY', () => {
    // Every existing route imports ACTIVE_CITY. It must remain the same object.
    expect(ACTIVE_CITY).toBe(DEFAULT_CITY);
    expect(ACTIVE_CITY).toBe(MUMBAI);
  });

  it('returns Mumbai when no id is supplied', () => {
    expect(getCity()).toBe(MUMBAI);
    expect(getCity(undefined)).toBe(MUMBAI);
    expect(getCity(null)).toBe(MUMBAI);
  });

  it('treats an empty or whitespace-only id as "not supplied"', () => {
    expect(getCity('')).toBe(MUMBAI);
    expect(getCity('   ')).toBe(MUMBAI);
    expect(getCity('\t\n')).toBe(MUMBAI);
  });

  it("returns Mumbai when the literal default id 'mumbai' is supplied", () => {
    expect(getCity('mumbai')).toBe(MUMBAI);
  });

  it('leaves Mumbai’s operational configuration untouched', () => {
    expect(MUMBAI.name).toBe('Mumbai, India');
    expect(MUMBAI.country).toBe('India');
    expect(MUMBAI.bbox).toEqual([18.88, 72.76, 19.29, 72.99]);
    expect(MUMBAI.centre).toEqual([19.076, 72.8777]);
    expect(MUMBAI.defaultZoom).toBe(12);
    expect(MUMBAI.monsoonMonths).toEqual([5, 6, 7, 8]);
    expect(MUMBAI.maxRadiusM).toBe(50_000);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 3. Lookup and normalisation
// ─────────────────────────────────────────────────────────────────────────────

describe('registry: lookup', () => {
  it('resolves each registered city', () => {
    expect(getCity('pune').id).toBe('pune');
    expect(getCity('bengaluru').id).toBe('bengaluru');
  });

  it('normalises case and surrounding whitespace', () => {
    expect(getCity('PUNE')).toBe(PUNE);
    expect(getCity('  pune  ')).toBe(PUNE);
    expect(getCity('Bengaluru')).toBe(BENGALURU);
    expect(getCity(' MUMBAI ')).toBe(MUMBAI);
  });

  it('reports existence without throwing', () => {
    expect(hasCity('mumbai')).toBe(true);
    expect(hasCity('PUNE')).toBe(true);
    expect(hasCity('bangalore')).toBe(false);
    expect(hasCity('delhi')).toBe(false);
    expect(hasCity('')).toBe(false);
    expect(hasCity(undefined)).toBe(false);
    expect(hasCity(null)).toBe(false);
    expect(hasCity(42)).toBe(false);
    expect(hasCity({})).toBe(false);
  });

  it('does not resolve inherited object properties as cities', () => {
    // Prototype keys such as 'toString' or 'constructor' must not resolve.
    expect(hasCity('toString')).toBe(false);
    expect(hasCity('constructor')).toBe(false);
    expect(hasCity('__proto__')).toBe(false);
    expect(() => getCity('toString')).toThrow(UnknownCityError);
  });

  it('does not resolve the former Bengaluru governance name', () => {
    // BBMP was dissolved in 2025. The registry is a closed union, so the old
    // name is an error rather than an alias that could mask a stale caller.
    expect(hasCity('bbmp')).toBe(false);
    expect(hasCity('bangalore')).toBe(false);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 4. Unknown ids raise a typed error and never fall back
// ─────────────────────────────────────────────────────────────────────────────

describe('registry: unknown city ids are rejected, never defaulted', () => {
  it('throws UnknownCityError for an unknown id', () => {
    expect(() => getCity('atlantis')).toThrow(UnknownCityError);
    expect(() => getCity('mum-bai')).toThrow(UnknownCityError);
    expect(() => getCity('mumbaii')).toThrow(UnknownCityError);
    expect(() => getCity('Bombay')).toThrow(UnknownCityError);
  });

  it('carries a machine-readable code and the valid ids', () => {
    try {
      getCity('atlantis');
      throw new Error('expected getCity to throw');
    } catch (e) {
      expect(e).toBeInstanceOf(UnknownCityError);
      const err = e as UnknownCityError;
      expect(err.code).toBe('UNKNOWN_CITY');
      expect(err.requestedId).toBe('atlantis');
      expect(err.validCityIds.sort()).toEqual(['bengaluru', 'mumbai', 'pune']);
      expect(err.name).toBe('UnknownCityError');
    }
  });

  it('names the offending id and the valid set in the message', () => {
    try {
      getCity('atlantis');
      throw new Error('expected getCity to throw');
    } catch (e) {
      const msg = (e as Error).message;
      expect(msg).toContain('atlantis');
      expect(msg).toContain('mumbai');
      expect(msg).toContain('pune');
      expect(msg).toContain('bengaluru');
    }
  });

  it('rejects non-string ids rather than coercing them into a lookup', () => {
    expect(() => getCity(42 as unknown as string)).toThrow(UnknownCityError);
    expect(() => getCity({} as unknown as string)).toThrow(UnknownCityError);
    expect(() => getCity([] as unknown as string)).toThrow(UnknownCityError);
  });

  it('is an Error subclass so existing catch blocks still work', () => {
    expect(new UnknownCityError('x', ['mumbai'])).toBeInstanceOf(Error);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 5. Publication guard
// ─────────────────────────────────────────────────────────────────────────────

describe('registry: publication guard', () => {
  it('keeps every registered city unpublished until data is approved', () => {
    // No approved boundary polygon exists for any of the three cities. The guard
    // must say so rather than letting an unverified city look supported.
    expect(isPublished(MUMBAI)).toBe(false);
    expect(isPublished(PUNE)).toBe(false);
    expect(isPublished(BENGALURU)).toBe(false);
    for (const city of listCities()) {
      expect(isPublished(city)).toBe(false);
    }
  });

  it('explains why each city is not publishable', () => {
    for (const city of listCities()) {
      const { published, reasons } = describeCityPublication(city);
      expect(published).toBe(false);
      expect(reasons.length).toBeGreaterThan(0);
      expect(reasons.every((r) => typeof r === 'string' && r.length > 0)).toBe(true);
    }
  });

  it('cites the boundary problems specifically', () => {
    const reasons = describeCityPublication(PUNE).reasons.join(' | ');
    expect(reasons).toMatch(/PROVISIONAL/);
    expect(reasons).toMatch(/bounding box/i);
    expect(reasons).toMatch(/third-party/i);
  });

  it('cites the missing Bengaluru population specifically', () => {
    // Census 2011 publishes no municipal-corporation component for Bengaluru, so
    // borrowing the urban-agglomeration total is the one thing we must not do.
    const reasons = describeCityPublication(BENGALURU).reasons.join(' | ');
    expect(reasons).toMatch(/population/i);
    expect(BENGALURU.populationMeta).toBeUndefined();
  });

  it('cites the missing Mumbai boundary vintage', () => {
    const reasons = describeCityPublication(MUMBAI).reasons.join(' | ');
    expect(reasons).toMatch(/vintage/i);
  });

  it('publishes only when the boundary is approved AND the levels are compatible', () => {
    const base: CityConfig = {
      ...MUMBAI,
      id: 'pune',
      boundaryMeta: {
        status: 'APPROVED',
        bbox: [18.38, 73.73, 18.62, 74.02],
        measuredAreaKm2: 509.9,
        sourceName: 'PMC boundary',
        sourceUrl: 'https://example.invalid',
        publisher: 'PMC',
        isOfficial: true,
        vintage: '2025',
        adminLevel: 'municipal_corporation',
        featureCount: 1,
        unitCount: 1,
        isBoundingBoxOnly: false,
        caveat: null,
      },
      populationMeta: {
        value: 3_124_458,
        level: 'municipal_corporation',
        referenceYear: '2011',
        sourceName: 'Census PCA-UA',
        sourceUrl: 'https://example.invalid',
        publisher: 'ORGI',
        isOfficial: true,
      },
    };

    expect(isPublished(base)).toBe(true);
    expect(describeCityPublication(base)).toEqual({ published: true, reasons: [] });

    // Approved boundary but only a bounding box -> still not publishable.
    expect(
      isPublished({
        ...base,
        boundaryMeta: { ...base.boundaryMeta!, isBoundingBoxOnly: true },
      })
    ).toBe(false);

    // Approved, real boundary but wrong admin level -> not publishable.
    expect(
      isPublished({
        ...base,
        boundaryMeta: { ...base.boundaryMeta!, adminLevel: 'ward_collection' },
      })
    ).toBe(false);

    // Approved boundary with an incompatible population level -> not publishable.
    expect(
      isPublished({
        ...base,
        populationMeta: { ...base.populationMeta!, level: 'urban_agglomeration' },
      })
    ).toBe(false);

    // No population at all -> not publishable.
    expect(isPublished({ ...base, populationMeta: undefined })).toBe(false);

    // Boundary still provisional -> not publishable.
    expect(
      isPublished({
        ...base,
        boundaryMeta: { ...base.boundaryMeta!, status: 'PROVISIONAL' },
      })
    ).toBe(false);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 6. Provisional data for Pune and Bengaluru is labelled as provisional
// ─────────────────────────────────────────────────────────────────────────────

describe('registry: provisional Pune / Bengaluru data is honestly labelled', () => {
  it('never presents a bounding box as a municipal boundary', () => {
    for (const city of [PUNE, BENGALURU, MUMBAI]) {
      expect(city.boundaryMeta!.isBoundingBoxOnly).toBe(true);
      expect(city.boundaryMeta!.status).toBe('PROVISIONAL');
      expect(city.boundaryMeta!.isOfficial).toBe(false);
      expect(city.boundaryMeta!.adminLevel).not.toBe('municipal_corporation');
    }
  });

  it('carries a caveat for every provisional boundary', () => {
    for (const city of listCities()) {
      expect(city.boundaryMeta!.caveat).toBeTruthy();
      expect((city.boundaryMeta!.caveat as string).length).toBeGreaterThan(20);
    }
  });

  it('keeps each provisional bbox internally consistent', () => {
    for (const city of listCities()) {
      const [south, west, north, east] = city.bbox;
      expect(south).toBeLessThan(north);
      expect(west).toBeLessThan(east);
      // The centre must sit inside the bbox for the map to open correctly.
      const [lat, lon] = city.centre;
      expect(lat).toBeGreaterThanOrEqual(south);
      expect(lat).toBeLessThanOrEqual(north);
      expect(lon).toBeGreaterThanOrEqual(west);
      expect(lon).toBeLessThanOrEqual(east);
    }
  });

  it('does not overlap the three cities', () => {
    const boxes = listCities().map((c) => c.bbox);
    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const [s1, w1, n1, e1] = boxes[i];
        const [s2, w2, n2, e2] = boxes[j];
        const overlaps = s1 < n2 && s2 < n1 && w1 < e2 && w2 < e1;
        expect(overlaps).toBe(false);
      }
    }
  });

  it('registers Pune and Bengaluru population only at municipal level', () => {
    // Census 2011 M Corp component. Never the urban-agglomeration total.
    expect(PUNE.populationMeta?.value).toBe(3_124_458);
    expect(PUNE.populationMeta?.level).toBe('municipal_corporation');
    expect(PUNE.populationMeta?.referenceYear).toBe('2011');
    expect(MUMBAI.populationMeta?.value).toBe(12_442_373);
    expect(MUMBAI.populationMeta?.level).toBe('municipal_corporation');
    // Bengaluru: deliberately absent.
    expect(BENGALURU.populationMeta).toBeUndefined();
  });

  it('does not register the Bengaluru urban-aglomeration population anywhere', () => {
    // 8,520,435 is the Census 2011 Bruhat Bangalore UA total. Pairing it with a
    // city-corporation boundary would be wrong in both numerator and denominator.
    const serialised = JSON.stringify(BENGALURU);
    expect(serialised).not.toContain('8520435');
    expect(serialised).not.toContain('8520435'.slice(0, 6));
  });

  it('gives Pune and Bengaluru non-colliding provisional extents', () => {
    expect(PUNE.bbox).not.toEqual(BENGALURU.bbox);
    expect(PUNE.centre).not.toEqual(BENGALURU.centre);
    // Pune ~18.4N/73.9E, Bengaluru ~13.0N/77.6E.
    expect(PUNE.centre[0]).toBeGreaterThan(18);
    expect(BENGALURU.centre[0]).toBeGreaterThan(12.5);
    expect(BENGALURU.centre[0]).toBeLessThan(13.5);
    expect(BENGALURU.centre[1]).toBeGreaterThan(77);
    expect(BENGALURU.centre[1]).toBeLessThan(78);
  });
});
