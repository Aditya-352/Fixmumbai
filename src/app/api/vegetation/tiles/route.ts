import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, TilesResponse, TileProvenance } from '@/lib/green/types';
import { GREEN_EXPLORER_ENABLED, DENSITY_META } from '@/lib/green/config';
import { resolveNdviObservation } from '@/lib/green/ndvi-provider';

/**
 * GET /api/vegetation/tiles
 *
 * Returns the NDVI display layer plus full observation provenance.
 *
 * Honesty contract:
 *  - `layers` is empty unless a real observation was selected, so the UI can
 *    never render an "NDVI active" state without imagery behind it.
 *  - The tile template is this app's own same-origin proxy. The provider key is
 *    never returned to the browser.
 *  - Display tiles are colour-rendered PNGs. Numerical NDVI, when the provider
 *    supplies it, is reported separately in `numerical`.
 */
export async function GET(_req: NextRequest) {
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

  const sel = await resolveNdviObservation();

  // No usable observation -> empty layers + honest status. Never fabricate.
  const hasObservation =
    sel.status === 'IMAGERY_AVAILABLE' || sel.status === 'PARTIAL_COVERAGE';

  const provenance: TileProvenance = {
    providerStatus: sel.status,
    providerMessage: sel.message,
    provider: sel.scene?.provider ?? 'AGROMONITORING',
    dataset: sel.scene?.dataset ?? null,
    sceneId: sel.scene?.sceneId ?? null,
    satelliteType: sel.scene?.satelliteType ?? null,
    acquisitionDateUtc: sel.scene?.acquisitionDateUtc ?? null,
    sceneCloudCoveragePct: sel.scene?.cloudCoveragePct ?? null,
    cloudThresholdPct: sel.cloudThresholdPct,
    selectionReason: sel.scene?.selectionReason ?? null,
    spatialResolutionM: sel.scene?.spatialResolutionM ?? null,
    searchWindowDays: sel.searchWindowDays,
    scenesExamined: sel.scenesExamined,
    scenesPassingCloudFilter: sel.scenesPassingCloudFilter,
    aoi: sel.coverage.map((c) => ({
      name: c.aoiName,
      polygonId: c.polygonId,
      bounds: c.bounds,
      partialStudyArea: c.partialStudyArea,
    })),
    coverageIsPartial: sel.coverageIsPartial,
    studyAreaName: 'Mumbai',
    // Numerical NDVI comes from the provider's statistics endpoint, never from
    // decoding the rendered PNG.
    numerical: sel.numeric
      ? {
          mean: sel.numeric.mean,
          median: sel.numeric.median,
          min: sel.numeric.min,
          max: sel.numeric.max,
          std: sel.numeric.std,
          p25: sel.numeric.p25,
          p75: sel.numeric.p75,
          validPixelCount: sel.numeric.num,
        }
      : null,
    // True when the rendered tiles are colour visualisation, not raw values.
    displayTilesAreColourRenders: true,
    disclaimer:
      'NDVI is a spectral vegetation-response index derived from Sentinel-2 surface reflectance ' +
      '(B8, B4). It is not a direct measurement of tree count, canopy percentage, biodiversity, ' +
      'accessibility or ecological quality. Display thresholds are configurable styling choices.',
  };

  const warnings = [...sel.warnings];

  const responseData: TilesResponse = hasObservation
    ? {
        layers: (['HIGH', 'MEDIUM', 'LOW'] as const).map((cls) => ({
          urlTemplate: '/civic/api/vegetation/ndvi-tile/{z}/{x}/{y}',
          densityClass: cls,
          label: DENSITY_META[cls].label,
          colour: DENSITY_META[cls].colour,
          opacity: 1,
          expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
        })),
        coverageBounds: sel.coverage[0]?.bounds ?? null,
        polygonName: sel.coverage[0]?.aoiName ?? undefined,
        provider: sel.scene?.provider ?? 'AGROMONITORING',
        observationStart: sel.scene?.acquisitionDateUtc ?? null,
        observationEnd: sel.scene?.acquisitionDateUtc ?? null,
        isMonsoon: false,
        coverageLimitedToPolygon: sel.coverageIsPartial,
        numerical: provenance.numerical,
        provenance,
        warnings,
      }
    : {
        layers: [],
        coverageBounds: null,
        provider: 'AGROMONITORING',
        observationStart: null,
        observationEnd: null,
        isMonsoon: false,
        coverageLimitedToPolygon: sel.coverageIsPartial,
        numerical: null,
        provenance,
        warnings,
      };

  return NextResponse.json<ApiResponse<TilesResponse>>({
    ok: true,
    data: responseData,
    meta: {
      sources: sel.scene ? [sel.scene.dataset] : ['AgroMonitoring (no usable observation)'],
      fetchedAt: new Date().toISOString(),
      cache: 'HIT',
      partial: sel.coverageIsPartial || !hasObservation,
      warnings,
    },
    error: null,
  });
}
