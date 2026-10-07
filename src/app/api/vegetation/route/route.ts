import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';
import { routingAdapter, type RouteResult, type TravelMode } from '@/lib/green/routing';

interface RouteData {
  distanceM: number;
  durationMin: number;
  geometry: any;
  isEstimated: boolean;
  source: string;
  profile: TravelMode;
}

/**
 * GET /api/vegetation/route?fromLat=...&fromLon=...&toLat=...&toLon=...&mode=driving|walking|cycling
 *
 * Calculates route geometry and travel time using OSRM with support for multiple travel modes.
 * Default mode is driving.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const fromLat = parseFloat(searchParams.get('fromLat') || '');
  const fromLon = parseFloat(searchParams.get('fromLon') || '');
  const toLat = parseFloat(searchParams.get('toLat') || '');
  const toLon = parseFloat(searchParams.get('toLon') || '');
  const modeParam = searchParams.get('mode') as TravelMode | null;
  const mode: TravelMode = modeParam && routingAdapter.isModeSupported(modeParam) ? modeParam : 'driving';

  if (isNaN(fromLat) || isNaN(fromLon) || isNaN(toLat) || isNaN(toLon)) {
    return NextResponse.json<ApiResponse<never>>(
      {
        ok: false,
        data: null,
        error: { code: 'INVALID_PARAMS', message: 'Missing or invalid coordinates' },
      },
      { status: 400 }
    );
  }

  try {
    // Attempt routing via OSRM with selected profile
    const result = await routingAdapter.calculateRoute(fromLat, fromLon, toLat, toLon, mode);

    return NextResponse.json<ApiResponse<RouteData>>({
      ok: true,
      data: result,
      meta: {
        sources: [result.source],
        fetchedAt: new Date().toISOString(),
        cache: 'HIT',
        partial: false,
        warnings: [],
      },
      error: null,
    });
  } catch (err: any) {
    // Handle known routing errors
    if (err.code === 'NO_ROUTE' || err.code === 'RATE_LIMIT' || err.code === 'TIMEOUT') {
      // Try straight-line fallback with clear labeling
      const fallback = routingAdapter.calculateStraightLine(fromLat, fromLon, toLat, toLon, mode);

      return NextResponse.json<ApiResponse<RouteData>>({
        ok: true,
        data: fallback,
        meta: {
          sources: [fallback.source],
          fetchedAt: new Date().toISOString(),
          cache: 'NONE',
          partial: true,
          warnings: [
            `Routing unavailable (${err.message}); using straight-line estimate for ${mode}. Distance and time are approximate.`,
          ],
        },
        error: null,
      });
    }

    // Network or other errors — return error response
    const message = err.message || 'Routing failed';
    const code = err.code || 'ROUTING_ERROR';

    return NextResponse.json<ApiResponse<never>>(
      {
        ok: false,
        data: null,
        error: { code, message },
      },
      { status: code === 'NETWORK_ERROR' ? 503 : 500 }
    );
  }
}