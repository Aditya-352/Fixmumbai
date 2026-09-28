import { NextRequest, NextResponse } from 'next/server';
import { isLocationInMumbai, mapCoordinatesToCivicBoundary } from '@/lib/gis';
import mumbaiPlaces from '@/data/mumbai-places.json';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';
    const q = query.toLowerCase().trim();

    // 1. Search local static Mumbai places first
    const localMatches = (!q
      ? mumbaiPlaces.slice(0, 6)
      : mumbaiPlaces.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.wardCode.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q)
        ).slice(0, 5)
    ).map(p => ({
      name: p.name,
      fullName: `${p.name}, ${p.region}, Mumbai`,
      lat: p.lat,
      lng: p.lng,
      isMumbai: true,
      wardCode: p.wardCode,
      source: 'LOCAL'
    }));

    if (!q) {
      return NextResponse.json({ success: true, data: localMatches });
    }

    // 2. Fetch from OpenStreetMap Nominatim API for global search (Bangalore, Delhi, worldwide)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=8`,
        {
          headers: {
            'User-Agent': 'FixMumbai-CivicApp/1.0 (contact@fixmumbai.org)',
            'Accept-Language': 'en'
          },
          signal: controller.signal
        }
      );
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        const globalMatches = data.map((item: any) => {
          const lat = parseFloat(item.lat);
          const lng = parseFloat(item.lon);
          const isMumbai = isLocationInMumbai(lat, lng);
          const gis = mapCoordinatesToCivicBoundary(lat, lng);
          const parts = item.display_name.split(',');
          const shortName = parts.slice(0, 2).join(', ').trim();

          return {
            name: shortName,
            fullName: item.display_name,
            lat,
            lng,
            isMumbai,
            wardCode: gis.wardCode,
            source: 'GLOBAL'
          };
        });

        const combined = [...localMatches];
        for (const g of globalMatches) {
          if (!combined.some(l => Math.abs(l.lat - g.lat) < 0.005 && Math.abs(l.lng - g.lng) < 0.005)) {
            combined.push(g);
          }
        }
        return NextResponse.json({ success: true, data: combined.slice(0, 10) });
      }
    } catch (apiErr) {
      console.warn('Nominatim API search warning:', apiErr);
    }

    return NextResponse.json({ success: true, data: localMatches });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
