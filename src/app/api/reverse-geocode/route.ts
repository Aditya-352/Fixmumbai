import { NextRequest, NextResponse } from 'next/server';
import { isLocationInMumbai, mapCoordinatesToCivicBoundary } from '@/lib/gis';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const latStr = searchParams.get('lat');
    const lngStr = searchParams.get('lng');

    if (!latStr || !lngStr) {
      return NextResponse.json({ success: false, error: 'Latitude and Longitude are required' }, { status: 400 });
    }

    const lat = parseFloat(latStr);
    const lng = parseFloat(lngStr);

    if (isNaN(lat) || isNaN(lng)) {
      return NextResponse.json({ success: false, error: 'Invalid coordinates' }, { status: 400 });
    }

    const gis = mapCoordinatesToCivicBoundary(lat, lng);

    let addressName = gis.locality;
    let fullName = `${gis.locality}, Mumbai`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
        {
          headers: {
            'User-Agent': 'FixMumbai-CivicApp/1.0 (contact@fixmumbai.org)',
            'Accept-Language': 'en'
          },
          signal: controller.signal
        }
      );
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.display_name) {
          fullName = data.display_name;
          const parts = data.display_name.split(',');
          addressName = parts.slice(0, 3).join(', ').trim();
        }
      }
    } catch (e) {}

    return NextResponse.json({
      success: true,
      data: {
        addressName,
        fullName,
        lat,
        lng,
        wardCode: gis.wardCode,
        isWithinMumbai: isLocationInMumbai(lat, lng)
      }
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
