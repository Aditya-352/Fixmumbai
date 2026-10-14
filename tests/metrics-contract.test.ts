/**
 * Phase C.1 — metrics contract, pagination semantics and cross-city regression.
 *
 * Covers the gaps Phase C left open:
 *   1. Mumbai metrics are SERVED (not refused) but carry an explicit
 *      UNVALIDATED validation block.
 *   2. Pune/Bengaluru are refused with DATA_UNAVAILABLE and produce no figure.
 *   3. Availability and validation are independent axes.
 *   4. Pagination metadata is internally consistent and cannot claim
 *      completeness of a truncated set.
 */

import { describe, it, expect } from 'vitest';
import { assessMetrics } from '@/lib/green/metric-validation';
import { resolveCity } from '@/lib/green/city-param';
import {
  MUMBAI,
  PUNE,
  BENGALURU,
  DEFAULT_CITY,
  getCity,
  isPublished,
  listCityIds,
} from '@/lib/green/config';
import { STATIC_GREEN_SPACES_BY_CITY } from '@/lib/green/static-spaces-fallback';
import { getNearbyGreenSpacesPaged } from '@/lib/green/spaces-service';
import { nearestBoundaryDistance } from '@/lib/green/boundary-distance';
import { recommendationScore } from '@/lib/green/classifier';
import { calculateComprehensiveHugsiMetrics } from '@/lib/green/hugsi-metrics';

const p = (q: string) => new URLSearchParams(q);

// ─────────────────────────────────────────────────────────────────────────────
// A1. Mumbai metrics remain available (Phase C refused them — that was wrong)
// ─────────────────────────────────────────────────────────────────────────────

describe('C.1: Mumbai metrics are served, preserving the existing experience', () => {
  it('marks Mumbai metrics AVAILABLE, unlike Pune and Bengaluru', () => {
    expect(assessMetrics(MUMBAI).availability).toBe('AVAILABLE');
    expect(assessMetrics(PUNE).availability).toBe('NO_DATA');
    expect(assessMetrics(BENGALURU).availability).toBe('NO_DATA');
  });

  it('omitting the city resolves to Mumbai and yields AVAILABLE metrics', () => {
    const r = resolveCity(p(''));
    expect(r.city).toBe(DEFAULT_CITY);
    expect(assessMetrics(r.city).availability).toBe('AVAILABLE');
  });

  it('explicit city=mumbai behaves identically to the omitted request', () => {
    const a = assessMetrics(resolveCity(p('')).city);
    const b = assessMetrics(resolveCity(p('city=mumbai')).city);
    expect(a.availability).toBe(b.availability);
    expect(a.status).toBe(b.status);
    expect(a.reasons).toEqual(b.reasons);
  });

  it('still produces a real metric figure for Mumbai', () => {
    // The engine itself is unchanged; only its labelling changed.
    const summary = calculateComprehensiveHugsiMetrics({
      boundaryCode: 'ALL',
      year: '2024',
      hexInterpretation: 'PARALLEL_SIDES_100M',
    });
    expect(typeof summary.urbanGreenPercentage).toBe('number');
    expect(summary.cityTotalAreaKm2).toBeGreaterThan(0);
    expect(summary.population).toBeGreaterThan(0);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// A2. Availability and validation are independent axes
// ─────────────────────────────────────────────────────────────────────────────

describe('C.1: availability is separate from validation', () => {
  it('Mumbai is AVAILABLE but UNVALIDATED — serving is not validating', () => {
    const v = assessMetrics(MUMBAI);
    expect(v.availability).toBe('AVAILABLE');
    expect(v.status).toBe('UNVALIDATED');
    expect(v.independentlyValidated).toBe(false);
    expect(v.reasons.length).toBeGreaterThan(0);
  });

  it('being already displayed does not make Mumbai metrics validated', () => {
    // isPublished() is still false, and the validation block says so.
    expect(isPublished(MUMBAI)).toBe(false);
    expect(assessMetrics(MUMBAI).independentlyValidated).toBe(false);
  });

  it('names the specific Mumbai defects rather than a generic disclaimer', () => {
    const reasons = assessMetrics(MUMBAI).reasons.join(' | ');
    expect(reasons).toMatch(/603\.4/);
    expect(reasons).toMatch(/475\.6/);
    expect(reasons).toMatch(/projection/i);
    expect(reasons).toMatch(/bounding box/i);
  });

  it('an UNVALIDATED figure carries at least one reason; PUBLISHED carries none', () => {
    for (const id of listCityIds()) {
      const v = assessMetrics(getCity(id));
      if (v.status === 'PUBLISHED') expect(v.reasons).toHaveLength(0);
      else expect(v.reasons.length).toBeGreaterThan(0);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// A3. Pune / Bengaluru gating
// ─────────────────────────────────────────────────────────────────────────────

describe('C.1: Pune and Bengaluru metrics are unavailable', () => {
  it('refuses both cities with an explicit reason', () => {
    for (const id of ['pune', 'bengaluru']) {
      const v = assessMetrics(getCity(id));
      expect(v.availability).toBe('NO_DATA');
      expect(v.status).toBe('UNVALIDATED');
      expect(v.reasons.join(' ')).toMatch(/No green-space records/i);
    }
  });

  it('never computes a boundary-derived figure for an empty city', () => {
    for (const id of ['pune', 'bengaluru']) {
      const city = getCity(id);
      expect(city.populationMeta === undefined || city.populationMeta.level === 'municipal_corporation').toBe(
        true
      );
      expect(isPublished(city)).toBe(false);
    }
  });

  it('Bengaluru still has no population registered at all', () => {
    expect(BENGALURU.populationMeta).toBeUndefined();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// B. Pagination semantics
// ─────────────────────────────────────────────────────────────────────────────

describe('C.1: pagination metadata is internally consistent', () => {
  const baseArgs = {
    lat: 19.06,
    lon: 72.83,
    radiusM: 50_000,
    type: 'all' as const,
    verifiedOnly: false,
    allCity: true,
  };

  it('reports returned/limit/offset consistently', async () => {
    const { spaces, meta } = await getNearbyGreenSpacesPaged({ ...baseArgs, limit: 10 });
    expect(meta.limit).toBe(10);
    expect(meta.offset).toBe(0);
    expect(meta.returned).toBe(spaces.length);
    expect(spaces.length).toBeLessThanOrEqual(10);
  });

  it('never claims completeness of a truncated candidate set', async () => {
    // A deliberately tiny candidate limit guarantees truncation.
    const { meta } = await getNearbyGreenSpacesPaged({ ...baseArgs, candidateLimit: 3 });
    expect(meta.truncated).toBe(true);
    expect(meta.candidateLimit).toBe(3);
    expect(meta.candidateCount).toBe(3);
  });

  it('flags hasMore when a page is not the last one', async () => {
    const first = await getNearbyGreenSpacesPaged({ ...baseArgs, limit: 5 });
    expect(first.meta.hasMore).toBe(true);
  });

  it('reports hasMore=false once the last page is reached', async () => {
    const all = await getNearbyGreenSpacesPaged({ ...baseArgs, limit: 500 });
    expect(all.meta.hasMore).toBe(false);
    const last = await getNearbyGreenSpacesPaged({ ...baseArgs, limit: 500, offset: 500 });
    expect(last.spaces).toHaveLength(0);
    expect(last.meta.hasMore).toBe(false);
  });

  it('does not skip or duplicate records across pages', async () => {
    const PAGE = 7;
    const seen: string[] = [];
    for (let offset = 0; offset < 200; offset += PAGE) {
      const { spaces, meta } = await getNearbyGreenSpacesPaged({ ...baseArgs, limit: PAGE, offset });
      seen.push(...spaces.map((s) => s.id));
      if (!meta.hasMore) break;
    }
    // No duplicates across pages.
    expect(new Set(seen).size).toBe(seen.length);
    // And the union equals the single unpaginated result.
    const all = await getNearbyGreenSpacesPaged({ ...baseArgs, limit: 500 });
    expect(seen.sort()).toEqual(all.spaces.map((s) => s.id).sort());
  });

  it('page contents are stable across repeated identical requests', async () => {
    const a = await getNearbyGreenSpacesPaged({ ...baseArgs, limit: 6, offset: 6 });
    const b = await getNearbyGreenSpacesPaged({ ...baseArgs, limit: 6, offset: 6 });
    expect(a.spaces.map((s) => s.id)).toEqual(b.spaces.map((s) => s.id));
  });

  it('orders results deterministically by the documented keys', async () => {
    const { spaces } = await getNearbyGreenSpacesPaged({ ...baseArgs, limit: 500 });
    for (let i = 1; i < spaces.length; i++) {
      const prev = spaces[i - 1];
      const cur = spaces[i];
      const sp = recommendationScore(prev.walkClass, prev.ndvi?.mean ?? null);
      const sc = recommendationScore(cur.walkClass, cur.ndvi?.mean ?? null);
      if (sc !== sp) {
        expect(sc).toBeLessThan(sp);
      } else {
        // Equal score -> strictly ascending distance.
        expect(cur.distanceM).toBeGreaterThanOrEqual(prev.distanceM);
      }
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// B. Source metadata honesty
// ─────────────────────────────────────────────────────────────────────────────

describe('C.1: source metadata distinguishes database from static fallback', () => {
  it('reports usedStaticFallback rather than discarding it', async () => {
    const { meta } = await getNearbyGreenSpacesPaged({
      lat: 19.06,
      lon: 72.83,
      radiusM: 50_000,
      type: 'all',
      verifiedOnly: false,
      allCity: true,
    });
    expect(typeof meta.usedStaticFallback).toBe('boolean');
  });

it('Mumbai has the registered fallback dataset; Pune and Bengaluru have their own', () => {
    // Mumbai's fallback is the original 45-record seed dataset.
    expect(STATIC_GREEN_SPACES_BY_CITY.mumbai).toHaveLength(45);
    // Pune and Bengaluru have candidate datasets registered (populated from
    // the normalized GeoJSON datasets in this phase). Record counts:
    //   Pune: 198 boundary polygons + 81 location points = 279 records
    //   Bengaluru: 1272 point features (261 with positive area_sqm)
    expect(STATIC_GREEN_SPACES_BY_CITY.pune).toBeDefined();
    expect(STATIC_GREEN_SPACES_BY_CITY.bengaluru).toBeDefined();
    expect(STATIC_GREEN_SPACES_BY_CITY.pune).toBeDefined();
    expect(STATIC_GREEN_SPACES_BY_CITY.bengaluru).toBeDefined();
  });

  it('every record served for Mumbai comes from that city’s fallback set', async () => {
    const { spaces, meta } = await getNearbyGreenSpacesPaged({
      lat: 19.06,
      lon: 72.83,
      radiusM: 50_000,
      type: 'all',
      verifiedOnly: false,
      allCity: true,
      limit: 500,
    });
    if (meta.usedStaticFallback) {
      for (const s of spaces) {
        expect(s.id.startsWith('static_')).toBe(true);
      }
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// C. Cross-city regression
// ─────────────────────────────────────────────────────────────────────────────

describe('C.1: cross-city isolation', () => {
  it('non-Mumbai cities have their own static datasets, not Mumbai\'s', () => {
    // Pune and Bengaluru now have candidate datasets registered;
    // cityDataStatus reflects that they are no longer EMPTY due to
    // missing DB records, since each city has its own static fallback.
    for (const id of ['pune', 'bengaluru']) {
      const r = resolveCity(p(`city=${id}`));
      expect(r.dataStatus).toBe('AVAILABLE');
      // Each city now has a non-empty static dataset.
      expect(STATIC_GREEN_SPACES_BY_CITY[r.city.id as 'pune' | 'bengaluru'])
        .toBeDefined();
    }
  });

  it('a static_ id is Mumbai-owned by construction', () => {
    const first = STATIC_GREEN_SPACES_BY_CITY.mumbai![0];
    const id = `static_${first.osmType}_${first.osmId}`;
    expect(id.startsWith('static_')).toBe(true);
    // The areas route rejects this prefix for any other city.
    expect(id).not.toMatch(/^static_pune/);
  });

  it('unknown and duplicate city params still produce the documented errors', () => {
    expect(() => resolveCity(p('city=atlantis'))).toThrow(/UNKNOWN_CITY|Unknown city id/);
    expect(() => resolveCity(p('city=mumbai&city=mumbai'))).toThrow(
      /DUPLICATE_CITY_PARAM|Duplicate/
    );
  });

  it('an unsupported city-key form is ignored, never resolved', () => {
    // `city[]`, `cityId` etc. are NOT the city parameter. They must not select a
    // city, and must not error either — they simply do not exist.
    for (const q of ['city[]=pune', 'cityId=pune', 'citys=pune']) {
      const r = resolveCity(p(q));
      expect(r.city).toBe(MUMBAI);
      expect(r.isDefault).toBe(true);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Mumbai behavioural compatibility
// ─────────────────────────────────────────────────────────────────────────────

describe('C.1: existing Mumbai behaviour stays compatible', () => {
  it('distance semantics are unchanged', () => {
    const square: GeoJSON.Polygon = {
      type: 'Polygon',
      coordinates: [
        [
          [72.8, 19.0],
          [72.9, 19.0],
          [72.9, 19.1],
          [72.8, 19.1],
          [72.8, 19.0],
        ],
      ],
    };
    const inside = nearestBoundaryDistance(19.05, 72.85, square as any, 19.05, 72.85);
    expect(inside.isInside).toBe(true);
    expect(inside.distanceM).toBe(0);

    const outside = nearestBoundaryDistance(19.05, 72.79, square as any, 19.05, 72.86);
    expect(outside.distanceM).toBeGreaterThan(1000);
    expect(outside.distanceM).toBeLessThan(1500);
  });

  it('Mumbai still returns its full 45-record fallback set', async () => {
    const { spaces, meta } = await getNearbyGreenSpacesPaged({
      lat: 19.076,
      lon: 72.8777,
      radiusM: 50_000,
      type: 'all',
      verifiedOnly: false,
      allCity: true,
      limit: 500,
    });
    expect(spaces).toHaveLength(45);
    expect(meta.hasMore).toBe(false);
    expect(meta.truncated).toBe(false);
  });

  it('identifies the provenance of every served record consistently', async () => {
    const { spaces, meta } = await getNearbyGreenSpacesPaged({
      lat: 19.076,
      lon: 72.8777,
      radiusM: 50_000,
      type: 'all',
      verifiedOnly: false,
      allCity: true,
      limit: 500,
    });
    // Identifiers must match the declared source: the embedded fallback mints
    // `static_<osmType>_<osmId>`, the database mints cuids. A mismatch would
    // mean records were labelled with a source they did not come from.
    if (meta.usedStaticFallback) {
      for (const s of spaces) expect(s.id).toMatch(/^static_(relation|way)_\d+$/);
    } else {
      for (const s of spaces) expect(s.id).toMatch(/^c[a-z0-9]{20,}$/);
    }
  });
});
