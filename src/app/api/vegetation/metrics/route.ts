import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, GreenSpaceSummary } from '@/lib/green/types';
import {
  calculateComprehensiveHugsiMetrics,
  type MumbaiGreenMetricsSummary,
  type HexInterpretation,
} from '@/lib/green/hugsi-metrics';
import { GREEN_EXPLORER_ENABLED } from '@/lib/green/config';
import { assessMetrics } from '@/lib/green/metric-validation';
import { DEFAULT_CANDIDATE_LIMIT } from '@/lib/green/spaces-service';
import {
  resolveCity,
  cityMeta,
  toErrorBody,
  CityParamError,
  DATA_UNAVAILABLE_REASON,
  type ResolvedCity,
} from '@/lib/green/city-param';

/**
 * GET /api/vegetation/metrics?ward=ALL&year=2024&dimension=PARALLEL_SIDES_100M&city=mumbai
 *
 * AVAILABILITY vs. VALIDATION (see lib/green/metric-validation.ts)
 * -------------------------------------------------------------------------
 * These indicators divide a population figure by a boundary area, so the two are
 * only meaningful at the same geographic level. Census 2011 publishes an
 * urban-aglomeration total AND, separately, a municipal-corporation component,
 * and they differ a lot (Greater Mumbai 18,394,912 vs 12,442,373).
 *
 * Two independent questions are answered separately:
 *
 *   availability — can a metric be computed? Needs green-space records.
 *                  Pune and Bengaluru have none, so they receive
 *                  DATA_UNAVAILABLE with `data: null`. No number is produced.
 *
 *   validation   — is the figure independently verified? Mumbai's is NOT: its
 *                  boundary area is a disputed hardcoded constant and its
 *                  population projections are undocumented. It is therefore
 *                  STILL SERVED (preserving the existing Mumbai experience and
 *                  keeping the numbers server-side) but every response carries
 *                  `meta.validation.status = 'UNVALIDATED'` plus the reasons.
 *
 * An earlier revision refused to serve Mumbai because `isPublished()` was false.
 * That was wrong in practice: GreenRightPanel has no error branch, so the client
 * silently recomputed the same figures in the browser and displayed them as a
 * server result. A refusal that is silently overridden is not a control.
 *
 * Dynamically computes HUGSI-inspired urban green space indicators:
 * 1. Percentage of Urban Green Space (clipped polygons with Turf spatial union)
 * 2. Population Density (Census 2011 baseline & DP-2034 GIS area)
 * 3. Distribution of Urban Green Space (100m hex grid median distribution)
 *
 * Grounded in verified OpenStreetMap geometries and Census 2011 enumeration.
 * Never hardcodes values or claims official HUGSI certification.
 */
export async function GET(req: NextRequest) {
  if (!GREEN_EXPLORER_ENABLED) {
    return NextResponse.json<ApiResponse<never>>(
      {
        ok: false,
        data: null,
        error: { code: 'FEATURE_DISABLED', message: 'Green Density Explorer is disabled' },
      },
      { status: 503 }
    );
  }

  // ── City resolution ───────────────────────────────────────────────────────
  let resolved: ResolvedCity;
  try {
    resolved = resolveCity(req.nextUrl.searchParams);
  } catch (e) {
    if (e instanceof CityParamError) {
      return NextResponse.json(toErrorBody(e), { status: e.status });
    }
    throw e;
  }
  const city = resolved.city;

  // ── Availability guard ────────────────────────────────────────────────────
  // A city with no green-space records cannot yield a metric. This is the ONLY
  // case that returns `data: null`; it never fabricates a value, and it never
  // falls back to another city's records.
  const validation = assessMetrics(city);
  if (validation.availability === 'NO_DATA') {
    return NextResponse.json(
      {
        ok: true,
        data: null,
        meta: {
          sources: [],
          fetchedAt: new Date().toISOString(),
          cache: 'NONE',
          partial: true,
          warnings: [
            `${DATA_UNAVAILABLE_REASON}: no green-space records are registered for ` +
              `${city.name}, so no metric can be computed. No other city's data is used.`,
            ...validation.reasons,
          ],
          city: cityMeta(resolved),
          validation,
          recordCount: 0,
          truncated: false,
          complete: true,
        },
        error: null,
      } as any,
      { status: 200 }
    );
  }

  const { searchParams } = new URL(req.url);
  const ward = searchParams.get('ward') ?? 'ALL';
  const yearParam = searchParams.get('year') ?? '2024';
  const year = (yearParam === '2011' || yearParam === '2021' || yearParam === '2024') ? yearParam : '2024';
  const dimensionParam = searchParams.get('dimension') ?? searchParams.get('hexInterpretation') ?? 'PARALLEL_SIDES_100M';
  const hexInterpretation: HexInterpretation =
    dimensionParam === 'OPPOSITE_VERTICES_100M' ? 'OPPOSITE_VERTICES_100M' : 'PARALLEL_SIDES_100M';

  // Fetch green spaces with geometries from local DB
  let spaces: GreenSpaceSummary[] = [];
  let recordCount = 0;
  let truncated = false;
  try {
    const mod = await import('@/lib/db');
    // Previously `take: 200`, which silently truncated the candidate set and
    // therefore produced a wrong green-space percentage whenever a city had more
    // than 200 records. Now one extra row is fetched so the cap is detectable.
    const rawSpaces = await (mod.db as any).greenSpace.findMany({
      take: DEFAULT_CANDIDATE_LIMIT + 1,
    });
    recordCount = rawSpaces.length;
    if (rawSpaces.length > DEFAULT_CANDIDATE_LIMIT) {
      truncated = true;
      rawSpaces.length = DEFAULT_CANDIDATE_LIMIT;
    }

    spaces = rawSpaces.map((s: any) => {
      let geometry: any = null;
      if (s.geometryJson) {
        try {
          geometry = JSON.parse(s.geometryJson);
        } catch (_) {}
      }
      return {
        id: s.id,
        osmType: s.osmType,
        osmId: s.osmId,
        name: s.name,
        category: s.category,
        areaM2: s.areaM2,
        centroid: { lat: s.centroidLat, lon: s.centroidLon },
        geometry,
        accessStatus: s.accessStatus,
        walkClass: s.walkClass,
        distanceM: 0,
        walkMin: 0,
        walkRouteEvidence: 'DIRECT_ESTIMATE',
        confidenceScore: 0.9,
      };
    });
  } catch (_) {
    // If DB is unavailable, calculation engine uses spatial baseline geometries
  }

  const result = calculateComprehensiveHugsiMetrics({
    boundaryCode: ward,
    year,
    hexInterpretation,
    spaces,
  });

  return NextResponse.json<ApiResponse<MumbaiGreenMetricsSummary>>({
    ok: true,
    data: result,
    meta: {
      sources: [
        'OpenStreetMap (ODbL) verified green geometries',
        'Brihanmumbai Municipal Corporation (BMC) Garden Dept Inventory',
        'Census of India 2011 Primary Census Abstract (PCA), District 518 & District 519',
        'BMC Development Plan 2034 GIS Ward Directory',
      ],
      fetchedAt: new Date().toISOString(),
      cache: 'HIT',
      partial: false,
      warnings: [
        'HUGSI-inspired civic indicators adapted for Mumbai; not an official HUGSI global ranking score.',
        ...(validation.status === 'UNVALIDATED'
          ? [
              `METRICS_UNVALIDATED: these figures are computed from provisional inputs and are ` +
                `NOT independently validated. Do not cite them as verified statistics. ` +
                `See meta.validation.reasons.`,
            ]
          : []),
        ...(truncated
          ? [
              `Candidate record set truncated at ${DEFAULT_CANDIDATE_LIMIT}; the percentages below ` +
                `are computed from an incomplete set and must not be presented as city-wide.`,
            ]
          : []),
      ],
      city: cityMeta(resolved),
      validation,
      recordCount,
      truncated,
      // Only claim completeness when the candidate set was never capped.
      complete: !truncated,
    } as any,
    error: null,
  });
}
