import { NextRequest, NextResponse } from 'next/server';

export interface WeatherData {
  temperature: number;
  relativeHumidity: number;
  apparentTemperature: number;
  windSpeed: number;
  windDirection: number;
  isDay: boolean;
  shortwaveRadiation: number;
  weatherCode: number;
  placeName: string;
  adminName: string;
  country: string;
  timestamp: string;
}

/**
 * GET /civic/api/weather?lat=19.076&lon=72.877
 *
 * Fetches real-time dynamic weather parameters from Open-Meteo + Reverse Geocoding for place name.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat') || '19.0760';
  const lon = searchParams.get('lon') || '72.8777';

  try {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,weather_code,shortwave_radiation&timezone=auto`;
    const geoUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;

    const [weatherRes, geoRes] = await Promise.allSettled([
      fetch(weatherUrl, { next: { revalidate: 300 }, headers: { Accept: 'application/json' } }),
      fetch(geoUrl, {
        headers: {
          'User-Agent': 'FixMumbai-WeatherMap/1.0 (contact@fixmumbai.org)',
          'Accept-Language': 'en',
        },
      }),
    ]);

    if (weatherRes.status !== 'fulfilled' || !weatherRes.value.ok) {
      throw new Error('Weather upstream unavailable');
    }

    const weatherJson = await weatherRes.value.json();
    const current = weatherJson.current;

    let placeName = 'Selected Coordinate';
    let adminName = '';
    let country = 'India';

    if (geoRes.status === 'fulfilled' && geoRes.value.ok) {
      try {
        const geoJson = await geoRes.value.json();
        const addr = geoJson.address || {};
        placeName =
          addr.city ||
          addr.town ||
          addr.suburb ||
          addr.county ||
          addr.district ||
          addr.state_district ||
          addr.village ||
          geoJson.name ||
          'Selected Location';
        adminName = addr.state || addr.province || '';
        country = addr.country || 'India';
      } catch (e) {
        // Fallback to coordinates
      }
    }

    const weatherData: WeatherData = {
      temperature: current.temperature_2m,
      relativeHumidity: current.relative_humidity_2m,
      apparentTemperature: current.apparent_temperature,
      windSpeed: current.wind_speed_10m,
      windDirection: current.wind_direction_10m ?? 0,
      isDay: Boolean(current.is_day),
      shortwaveRadiation: current.shortwave_radiation ?? 0,
      weatherCode: current.weather_code ?? 0,
      placeName,
      adminName,
      country,
      timestamp: current.time,
    };

    return NextResponse.json({ success: true, data: weatherData });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch weather data';
    return NextResponse.json(
      { success: false, error: message },
      { status: 502 }
    );
  }
}
