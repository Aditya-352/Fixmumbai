import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/geocode?q=<search_query>
 * or
 * GET /api/geocode?lat=<lat>&lon=<lon>
 *
 * Server-side geocoding and reverse geocoding proxy using OpenWeather Geocoding API
 * and OpenStreetMap Nominatim with compliant User-Agent headers (no client CORS/header blocks).
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');
  const latStr = searchParams.get('lat');
  const lonStr = searchParams.get('lon');

  const apiKey = process.env.OPENWEATHER_API_KEY || '04bbf64005764c6d5244b124ad5b98d6';

  // 1. Reverse Geocoding: lat + lon -> locality / city name
  if (latStr && lonStr) {
    const lat = parseFloat(latStr);
    const lon = parseFloat(lonStr);

    if (isNaN(lat) || isNaN(lon)) {
      return NextResponse.json({ success: false, error: 'Invalid coordinates' }, { status: 400 });
    }

    try {
      // First try OpenStreetMap Nominatim with proper User-Agent
      const nomUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=14&addressdetails=1`;
      const nomRes = await fetch(nomUrl, {
        headers: {
          'User-Agent': 'FixMumbai-CivicLocation/1.0 (contact@fixmumbai.org)',
          'Accept-Language': 'en',
        },
        signal: AbortSignal.timeout(4000),
      });

      if (nomRes.ok) {
        const data = await nomRes.json();
        const addr = data.address || {};
        const locality =
          addr.suburb ||
          addr.neighbourhood ||
          addr.residential ||
          addr.commercial ||
          addr.road ||
          '';
        const city =
          addr.city ||
          addr.town ||
          addr.state_district ||
          addr.county ||
          addr.village ||
          '';
        const state = addr.state || '';

        const parts: string[] = [];
        if (locality) parts.push(locality);
        if (city && city !== locality) parts.push(city);
        if (state && state !== city) parts.push(state);

        const label = parts.length > 0 ? parts.join(', ') : `${city || 'Location'}, ${state || 'India'}`;

        return NextResponse.json({
          success: true,
          data: {
            label,
            locality,
            city,
            state,
            country: addr.country || 'India',
            lat,
            lon,
          },
        });
      }
    } catch {
      // Nominatim failed, fall back to OpenWeather Reverse Geocoding
    }

    // Fallback: OpenWeather Reverse Geocoding API
    try {
      const owUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
      const owRes = await fetch(owUrl, { signal: AbortSignal.timeout(4000) });
      if (owRes.ok) {
        const owData = await owRes.json();
        if (Array.isArray(owData) && owData.length > 0) {
          const item = owData[0];
          const label = item.state ? `${item.name}, ${item.state}` : item.name;
          return NextResponse.json({
            success: true,
            data: {
              label,
              locality: item.name,
              city: item.name,
              state: item.state || '',
              country: item.country || 'IN',
              lat,
              lon,
            },
          });
        }
      }
    } catch {
      // Fall through to default
    }

    return NextResponse.json({
      success: true,
      data: {
        label: `Coordinates (${lat.toFixed(3)}, ${lon.toFixed(3)})`,
        city: '',
        state: '',
        lat,
        lon,
      },
    });
  }

  // 2. Forward Geocoding: search query -> coordinates & place details
  if (q && q.trim()) {
    const query = q.trim();

    // Try OpenWeather Direct Geocoding first (instant and official)
    try {
      const owDirectUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)},IN&limit=5&appid=${apiKey}`;
      const owRes = await fetch(owDirectUrl, { signal: AbortSignal.timeout(4000) });
      if (owRes.ok) {
        const owData = await owRes.json();
        if (Array.isArray(owData) && owData.length > 0) {
          const results = owData.map((item: any) => ({
            name: item.name,
            displayName: item.state ? `${item.name}, ${item.state}, India` : `${item.name}, India`,
            city: item.name,
            state: item.state || '',
            lat: item.lat,
            lon: item.lon,
          }));

          return NextResponse.json({ success: true, results });
        }
      }
    } catch {
      // Fall through to Nominatim
    }

    // Fallback: OpenStreetMap Nominatim search
    try {
      const nomSearchUrl = `https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&limit=5&q=${encodeURIComponent(query)}`;
      const nomRes = await fetch(nomSearchUrl, {
        headers: {
          'User-Agent': 'FixMumbai-CivicLocation/1.0 (contact@fixmumbai.org)',
          'Accept-Language': 'en',
        },
        signal: AbortSignal.timeout(4000),
      });

      if (nomRes.ok) {
        const nomData = await nomRes.json();
        if (Array.isArray(nomData) && nomData.length > 0) {
          const results = nomData.map((item: any) => ({
            name: item.name || item.display_name.split(',')[0],
            displayName: item.display_name,
            lat: parseFloat(item.lat),
            lon: parseFloat(item.lon),
          }));

          return NextResponse.json({ success: true, results });
        }
      }
    } catch {
      // ignore
    }

    return NextResponse.json({
      success: false,
      error: `Could not find coordinates for "${query}".`,
      results: [],
    });
  }

  return NextResponse.json(
    { success: false, error: 'Provide either q=<search_query> or lat=<lat>&lon=<lon>' },
    { status: 400 }
  );
}
