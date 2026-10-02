import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, TilesResponse, DensityClass } from '@/lib/green/types';
import { GREEN_EXPLORER_ENABLED, DENSITY_META, NDVI_WINDOW_DAYS } from '@/lib/green/config';
import { getNdviTileUrl } from '@/lib/green/gee-service';

/**
 * GET /api/vegetation/tiles
 *
 * Returns Sentinel-2 / Earth Engine NDVI Tile layers and observation metadata.
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

  try {
    const tileResult = await getNdviTileUrl();
    const expiry = new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString();

    const densityClasses: DensityClass[] = ['HIGH', 'MEDIUM', 'LOW'];
    const layers = densityClasses.map((cls) => ({
      urlTemplate: tileResult.tileUrl,
      densityClass: cls,
      label: DENSITY_META[cls].label,
      colour: DENSITY_META[cls].colour,
      opacity: 0.75,
      expiresAt: expiry,
    }));

    const responseData: TilesResponse = {
      layers,
      observationStart: tileResult.dateRange.start,
      observationEnd: tileResult.dateRange.end,
      compositeType: 'TRAILING_90D',
      isMonsoon: false,
      warnings: [],
    };

    return NextResponse.json<ApiResponse<TilesResponse>>({
      ok: true,
      data: responseData,
      meta: {
        sources: [tileResult.source, 'Sentinel-2 L2A'],
        fetchedAt: new Date().toISOString(),
        cache: 'HIT',
        partial: false,
        warnings: [],
      },
      error: null,
    });
  } catch (err: any) {
    return NextResponse.json<ApiResponse<never>>(
      {
        ok: false,
        data: null,
        error: { code: 'TILES_ERROR', message: err.message || 'Failed to generate tile URL' },
      },
      { status: 500 }
    );
  }
}
