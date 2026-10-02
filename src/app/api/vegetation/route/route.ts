import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/lib/green/types';
import { FOOT_ROUTING_FALLBACK_URL, WALK_SPEED_KMH } from '@/lib/green/config';

interface RouteData {
  distanceM: number;
  durationMin: number;
  geometry: any;
  isEstimated: boolean;
}

/**
 * GET /api/vegetation/route?fromLat=...&fromLon=...&toLat=...&toLon=...
 *
 * Calculates pedestrian route geometry and accurate walk time using OSRM / OpenRouteService.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fromLat = parseFloat(searchParams.get('fromLat') || '');
  const fromLon = parseFloat(searchParams.get('fromLon') || '');
  const toLat = parseFloat(searchParams.get('toLat') || '');
  const toLon = parseFloat(searchParams.get('toLon') || '');

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
    // Attempt standard OSM foot routing
    const osrmUrl = `${FOOT_ROUTING_FALLBACK_URL}/route/v1/foot/${fromLon},${fromLat};${toLon},${toLat}?overview=full&geometries=geojson`;
    const res = await fetch(osrmUrl, {
      headers: { 'User-Agent': 'FixMumbai-GreenExplorer/1.0' },
      next: { revalidate: 86400 },
    });

    if (res.ok) {
      const data = await res.json();
      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        return NextResponse.json<ApiResponse<RouteData>>({
          ok: true,
          data: {
            distanceM: route.distance,
            durationMin: Math.round(route.duration / 60),
            geometry: route.geometry,
            isEstimated: false,
          },
          meta: {
            sources: ['OSRM Foot'],
            fetchedAt: new Date().toISOString(),
            cache: 'HIT',
            partial: false,
            warnings: [],
          },
          error: null,
        });
      }
    }

    // Straight-line fallback
    const dLat = ((toLat - fromLat) * Math.PI) / 180;
    const dLon = ((toLon - fromLon) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((fromLat * Math.PI) / 180) *
        Math.cos((toLat * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    const distanceM = 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const durationMin = Math.round((distanceM / 1000 / WALK_SPEED_KMH) * 60);

    return NextResponse.json<ApiResponse<RouteData>>({
      ok: true,
      data: {
        distanceM: Math.round(distanceM),
        durationMin,
        geometry: {
          type: 'LineString',
          coordinates: [
            [fromLon, fromLat],
            [toLon, toLat],
          ],
        },
        isEstimated: true,
      },
      meta: {
        sources: ['Straight-line estimate'],
        fetchedAt: new Date().toISOString(),
        cache: 'NONE',
        partial: true,
        warnings: ['Using straight-line walk estimation'],
      },
      error: null,
    });
  } catch (err: any) {
    return NextResponse.json<ApiResponse<never>>(
      {
        ok: false,
        data: null,
        error: { code: 'ROUTING_ERROR', message: err.message || 'Routing failed' },
      },
      { status: 500 }
    );
  }
}
