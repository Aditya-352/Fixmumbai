import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/locate
 *
 * Server-side IP Geolocation detection.
 * Inspects client IP headers or server connection to determine the user's real
 * Indian city and coordinates with zero browser mixed-content or CORS issues.
 */
export async function GET(req: NextRequest) {
  // Check forwarded headers
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  let clientIp = forwarded ? forwarded.split(',')[0].trim() : realIp || '';

  // Filter local / private IPs
  if (!clientIp || clientIp === '::1' || clientIp === '127.0.0.1' || clientIp.startsWith('192.168.') || clientIp.startsWith('10.')) {
    clientIp = ''; // Allow external IP lookup provider to detect via server connection
  }

  // Provider 1: ipwho.is
  try {
    const url = clientIp ? `https://ipwho.is/${clientIp}` : 'https://ipwho.is/';
    const res = await fetch(url, { signal: AbortSignal.timeout(3500) });
    if (res.ok) {
      const data = await res.json();
      if (data.success && typeof data.latitude === 'number' && typeof data.longitude === 'number') {
        const city = data.city || 'Hyderabad';
        const state = data.region || 'Telangana';
        return NextResponse.json({
          success: true,
          data: {
            lat: data.latitude,
            lon: data.longitude,
            city,
            state,
            name: `${city}, ${state}`,
            source: 'network_ip',
          },
        });
      }
    }
  } catch {
    // continue to fallback
  }

  // Provider 2: ip-api.com
  try {
    const url = clientIp ? `http://ip-api.com/json/${clientIp}` : 'http://ip-api.com/json';
    const res = await fetch(url, { signal: AbortSignal.timeout(3500) });
    if (res.ok) {
      const data = await res.json();
      if (data.status === 'success' && typeof data.lat === 'number' && typeof data.lon === 'number') {
        const city = data.city || 'Hyderabad';
        const state = data.regionName || 'Telangana';
        return NextResponse.json({
          success: true,
          data: {
            lat: data.lat,
            lon: data.lon,
            city,
            state,
            name: `${city}, ${state}`,
            source: 'network_ip',
          },
        });
      }
    }
  } catch {
    // continue to fallback
  }

  // Default fallback to Hyderabad coordinates
  return NextResponse.json({
    success: true,
    data: {
      lat: 17.385,
      lon: 78.4867,
      city: 'Hyderabad',
      state: 'Telangana',
      name: 'Hyderabad, Telangana',
      source: 'fallback',
    },
  });
}
