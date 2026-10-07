import { NextRequest } from 'next/server';
import { extractLayerId } from '@/lib/green/ndvi-provider';

/**
 * GET /api/vegetation/ndvi-tile/{z}/{x}/{y}
 *
 * Server-side proxy for AgroMonitoring NDVI *display* tiles.
 *
 * SECURITY
 *  - The upstream tile template embeds `?appid=<API_KEY>`. It is rebuilt here,
 *    server-side, so the key is never present in any client-visible payload,
 *    request, or log line.
 *
 * RENDERING CONTRACT
 *  - The upstream PNG is a COLOUR-RENDERED visualisation. Its bytes are passed
 *    through unchanged, preserving the alpha channel so NoData / cloud-masked
 *    pixels stay fully transparent and the basemap remains visible.
 *  - RGB values are never decoded into numerical NDVI.
 *
 * CACHING
 *  - Successful tiles: long-lived, keyed by provider + layer + z/x/y.
 *  - Failures: never cached as success. A tile with no imagery resolves to a
 *    1x1 fully transparent PNG (genuinely transparent, verified RGBA 0,0,0,0) so
 *    the map shows basemap instead of an error block. This is an honest
 *    "no observation here", not fabricated vegetation.
 */
export const dynamic = 'force-dynamic';

const UPSTREAM_BASE = 'https://api.agromonitoring.com/tile/1.0';
const USER_AGENT = 'FixMumbai/1.0 (civic green-space NDVI; contact@fixmumbai.org)';

/**
 * 1x1 fully transparent RGBA PNG.
 * Verified to decode to RGBA(0,0,0,0). Regenerate only with an alpha assertion —
 * an incorrect constant here previously tinted the entire map blue.
 */
const TRANSPARENT_PNG = Uint8Array.from(
  atob(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNgAAIAAAUAAen63NgAAAAASUVORK5CYII='
  ),
  (c) => c.charCodeAt(0)
);

function pngResponse(body: Uint8Array | ArrayBuffer, cacheControl: string) {
  return new Response(body as any, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': cacheControl,
      'Access-Control-Allow-Origin': '*',
      'Cross-Origin-Resource-Policy': 'cross-origin',
      'X-NDVI-Tile': 'colour-render',
    },
  });
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { z: string; x: string; y: number } }
) {
  const z = Number(params.z);
  const x = Number(params.x);
  const y = Number(params.y);

  if (![z, x, y].every((n) => Number.isInteger(n))) {
    return new Response('Bad tile coordinates', { status: 400 });
  }
  // Web-Mercator tile bounds for the requested zoom.
  if (z < 0 || z > 22 || x < 0 || y < 0 || x >= 2 ** z || y >= 2 ** z) {
    return new Response('Tile out of range', { status: 400 });
  }

  const apiKey = process.env.AGROMONITORING_API_KEY;
  if (!apiKey) {
    return pngResponse(TRANSPARENT_PNG, 'no-store');
  }

  // Resolve the active layer + polygon from the same selection logic the tiles
  // endpoint uses, so the proxy can never serve one polygon's imagery under
  // another polygon's metadata.
  const { resolveNdviObservation } = await import('@/lib/green/ndvi-provider');
  const sel = await resolveNdviObservation();

  if (!sel.scene || !sel.tileLayerId) {
    // No usable observation: honest transparent tile, explicitly uncached.
    return pngResponse(TRANSPARENT_PNG, 'no-store');
  }

  const polygonId = sel.scene.aoiPolygonId;
  const upstream =
    `${UPSTREAM_BASE}/${z}/${x}/${y}/${encodeURIComponent(sel.tileLayerId)}/` +
    `${encodeURIComponent(polygonId)}?appid=${encodeURIComponent(apiKey)}`;

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    const res = await fetch(upstream, {
      headers: { 'User-Agent': USER_AGENT, Accept: 'image/png' },
      signal: ctrl.signal,
      // Tile bytes are keyed by provider+layer+z/x/y upstream, so a stable cache
      // is safe; we additionally vary on the active scene id.
      next: { revalidate: 604800 },
    });

    if (!res.ok) {
      // 404 = provider has no tile here (outside its pyramid). 401/403 = auth.
      // 429 = rate limited. All resolve to transparent, never to a cached body.
      return pngResponse(TRANSPARENT_PNG, 'no-store');
    }

    const buf = await res.arrayBuffer();
    if (buf.byteLength === 0) return pngResponse(TRANSPARENT_PNG, 'no-store');

    return pngResponse(
      buf,
      'public, max-age=604800, stale-while-revalidate=86400'
    );
  } catch {
    // Network failure or timeout: never surface as a successful observation.
    return pngResponse(TRANSPARENT_PNG, 'no-store');
  } finally {
    clearTimeout(timer);
  }
}
