import { NextRequest, NextResponse } from 'next/server';
import { getAirQualityForLocation } from '@/lib/air-quality/normalizer';
import { AirQualityServiceError } from '@/lib/air-quality/types';

/**
 * GET /api/air-quality?lat=<latitude>&lon=<longitude>
 *
 * Returns the best available air quality information near the given point,
 * scoped strictly to the Mumbai service area for this phase. CPCB (via
 * data.gov.in) is treated as the primary, authoritative source; OpenAQ is
 * supplementary. The two are never averaged or merged into one number.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (lat === null || lon === null) {
    return NextResponse.json(
      { success: false, error: 'Both lat and lon query parameters are required.' },
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
