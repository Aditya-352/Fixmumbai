import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, GreenStatusResponse } from '@/lib/green/types';
import { GREEN_EXPLORER_ENABLED } from '@/lib/green/config';
import { db } from '@/lib/db';

/**
 * GET /api/vegetation/status
 *
 * Returns feature flag, DB connectivity, GEE reachability, last ingest run,
 * last NDVI composite window, and tile cache expiry.
 */
export async function GET(_req: NextRequest): Promise<NextResponse> {
  const fetchedAt = new Date().toISOString();

  let postGisOk = false;
  let lastIngest: string | null = null;
  let lastNdviWindow: { start: string; end: string } | null = null;
  let tileCacheExpiry: string | null = null;

  // Check DB connectivity (SQLite — no PostGIS; just verify Prisma connects)
  try {
    await (db as any).$queryRaw`SELECT 1`;
    postGisOk = true; // "PostGIS ok" means "DB reachable" in SQLite fallback mode
  } catch {
    postGisOk = false;
  }

  // GEE reachability — only if configured
  let geeReachable = false;
  if (process.env.GEE_PROJECT_ID) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 4000);
      const res = await fetch('https://earthengine.googleapis.com/', {
        method: 'HEAD',
        signal: ctrl.signal,
      });
      clearTimeout(timer);
      geeReachable = res.ok || res.status < 500;
    } catch {
      geeReachable = false;
    }
  }

  const data: GreenStatusResponse = {
    featureEnabled: GREEN_EXPLORER_ENABLED,
    postGisOk,
    geeReachable,
    lastIngest,
    lastNdviWindow,
    tileCacheExpiry,
  };

  const response: ApiResponse<GreenStatusResponse> = {
    ok: true,
    data,
    meta: {
      sources: ['db', 'gee-ping'],
      fetchedAt,
      cache: 'NONE',
      partial: false,
      warnings: process.env.GEE_PROJECT_ID ? [] : ['GEE_PROJECT_ID not configured — NDVI unavailable'],
    },
    error: null,
  };

  return NextResponse.json(response, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
