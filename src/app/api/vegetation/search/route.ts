import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, GeocodeResult } from '@/lib/green/types';
import { ACTIVE_CITY, GREEN_EXPLORER_ENABLED } from '@/lib/green/config';

/**
 * GET /api/vegetation/search?q=bandra
 *
 * Proxies geocoding requests to Photon / Nominatim with Mumbai bounding box
 * to protect user privacy and avoid CORS / quota leaks.
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

  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q')?.trim();

  if (!query || query.length < 2) {
    return NextResponse.json<ApiResponse<GeocodeResult[]>>({
      ok: true,
      data: [],
      meta: {
        sources: ['local'],
        fetchedAt: new Date().toISOString(),
        cache: 'NONE',
        partial: false,
        warnings: [],
      },
      error: null,
    });
  }

  const [south, west, north, east] = ACTIVE_CITY.bbox;
  const userAgent = process.env.OPENSTREETMAP_USER_AGENT || 'FixMumbai-CivicApp/1.0 (contact@fixmumbai.org)';

  try {
    // 1. First try Photon API (Komoot / OSM search) with bounding box
    const photonUrl = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&bbox=${west},${south},${east},${north}&limit=6`;
    const photonRes = await fetch(photonUrl, {
      headers: { 'User-Agent': userAgent },
      next: { revalidate: 3600 },
    });

    if (photonRes.ok) {
      const data = await photonRes.json();
      const features = data.features ?? [];
      const results: GeocodeResult[] = features.map((f: any) => ({
        name: f.properties.name || f.properties.street || query,
        displayName: [f.properties.name, f.properties.street, f.properties.district, f.properties.city]
          .filter(Boolean)
          .join(', '),
        lat: f.geometry.coordinates[1],
        lon: f.geometry.coordinates[0],
        source: 'photon',
      }));

      if (results.length > 0) {
        return NextResponse.json<ApiResponse<GeocodeResult[]>>({
          ok: true,
          data: results,
          meta: {
            sources: ['photon'],
            fetchedAt: new Date().toISOString(),
            cache: 'HIT',
            partial: false,
            warnings: [],
          },
          error: null,
        });
      }
    }

    // 2. Fallback to Nominatim OSM with viewbox
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      query + ', Mumbai'
    )}&format=json&viewbox=${west},${north},${east},${south}&bounded=1&limit=6`;

    const nomRes = await fetch(nominatimUrl, {
      headers: { 'User-Agent': userAgent },
      next: { revalidate: 3600 },
    });

    if (nomRes.ok) {
      const data = await nomRes.json();
      const results: GeocodeResult[] = (data || []).map((item: any) => ({
        name: item.name || item.display_name.split(',')[0],
        displayName: item.display_name,
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
        source: 'nominatim',
      }));

      return NextResponse.json<ApiResponse<GeocodeResult[]>>({
        ok: true,
        data: results,
        meta: {
          sources: ['nominatim'],
          fetchedAt: new Date().toISOString(),
          cache: 'HIT',
          partial: false,
          warnings: [],
        },
        error: null,
      });
    }

    return NextResponse.json<ApiResponse<GeocodeResult[]>>({
      ok: true,
      data: [],
      meta: {
        sources: ['nominatim'],
        fetchedAt: new Date().toISOString(),
        cache: 'MISS',
        partial: false,
        warnings: [],
      },
      error: null,
    });
  } catch (error: any) {
    return NextResponse.json<ApiResponse<never>>(
      {
        ok: false,
        data: null,
        error: { code: 'GEOCODE_ERROR', message: error.message || 'Geocoding failed' },
      },
      { status: 500 }
    );
  }
}
