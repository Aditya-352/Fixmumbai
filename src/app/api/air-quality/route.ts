import { NextRequest, NextResponse } from 'next/server';
import { getAirQualityForLocation, getLiveAqiStationsForMap } from '@/lib/air-quality/normalizer';
import { AirQualityServiceError } from '@/lib/air-quality/types';

/**
 * GET /api/air-quality?lat=<latitude>&lon=<longitude>
 * or
 * GET /api/air-quality?stations=true
 *
 * Returns the best available air quality information near the given point,
 * or live monitoring stations across Mumbai/MMR.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const stationsOnly = searchParams.get('stations') === 'true';

  if (stationsOnly) {
    try {
      const stations = await getLiveAqiStationsForMap();
      return NextResponse.json(
        { success: true, stations },
        { headers: { 'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=300' } }
      );
    } catch (err) {
      console.error('[air-quality] Error loading live stations:', err);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch live monitoring stations' },
        { status: 500 }
      );
    }
  }

  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (lat === null || lon === null) {
    return NextResponse.json(
      { success: false, error: 'Both lat and lon query parameters are required, or pass ?stations=true' },
      { status: 400 }
    );
  }

  try {
    const data = await getAirQualityForLocation(lat, lon);
    return NextResponse.json(
      { success: true, data },
      { headers: { 'Cache-Control': 'private, max-age=300' } }
    );
  } catch (error) {
    if (error instanceof AirQualityServiceError) {
      console.error(`[air-quality] ${error.code}: ${error.message}`);
      return NextResponse.json(
        { success: false, error: error.message, code: error.code },
        { status: error.statusCode }
      );
    }

    console.error('[air-quality] Unexpected error while resolving air quality data', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to retrieve air quality data at this time. Please try again shortly.',
        code: 'UPSTREAM_ERROR',
      },
      { status: 502 }
    );
  }
}
