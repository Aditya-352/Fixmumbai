import { NextRequest, NextResponse } from 'next/server';

export interface WeatherData {
  temperature: number;
  relativeHumidity: number;
  apparentTemperature: number;
  windSpeed: number;
  windDirection: number;
  pressure?: number;
  clouds?: number;
  visibility?: number | null;
  weatherCondition?: string;
  weatherDescription?: string;
  weatherIcon?: string;
  isDay: boolean;
  shortwaveRadiation: number;
  weatherCode: number;
  sunrise?: string | null;
  sunset?: string | null;
  placeName: string;
  adminName: string;
  country: string;
  provider: 'OPENWEATHER' | 'OPEN_METEO';
  timestamp: string;
}

// In-memory TTL cache (5 minutes) for weather coordinates
interface CachedEntry {
  data: WeatherData;
  expiresAt: number;
}
const weatherCache = new Map<string, CachedEntry>();

function getCacheKey(lat: number, lon: number): string {
  return `${Math.round(lat * 100) / 100},${Math.round(lon * 100) / 100}`;
}

/**
 * GET /pulse/api/weather?lat=19.076&lon=72.877
 *
 * Fetches real-time dynamic weather parameters powered primarily by
 * OpenWeather Current Weather API, with Open-Meteo as high-reliability fallback.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const latStr = searchParams.get('lat') || '19.0760';
  const lonStr = searchParams.get('lon') || '72.8777';

  const lat = parseFloat(latStr);
  const lon = parseFloat(lonStr);

  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return NextResponse.json(
      { success: false, error: 'Invalid latitude or longitude.' },
      { status: 400 }
    );
  }

  // 1. Check in-memory cache
  const cacheKey = getCacheKey(lat, lon);
  const cached = weatherCache.get(cacheKey);
  if (cached && Date.now() < cached.expiresAt) {
    return NextResponse.json(
      { success: true, data: cached.data },
      { headers: { 'Cache-Control': 'private, max-age=300' } }
    );
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  // 2. Primary: OpenWeather Current Weather API
  if (apiKey) {
    try {
      const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      const res = await fetch(openWeatherUrl, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(6000),
      });

      if (res.ok) {
        const data = await res.json();
        const nowSec = Math.floor(Date.now() / 1000);
        const sunriseSec = data.sys?.sunrise ?? 0;
        const sunsetSec = data.sys?.sunset ?? 0;
        const isDay = sunriseSec > 0 && sunsetSec > 0 ? nowSec >= sunriseSec && nowSec < sunsetSec : true;

        const clouds = data.clouds?.all ?? 0;
        const shortwaveRadiation = isDay ? Math.max(0, Math.round((100 - clouds) * 8.5)) : 0;
        const windSpeedKmH = Math.round((data.wind?.speed ?? 0) * 3.6 * 10) / 10;

        const weatherData: WeatherData = {
          temperature: Math.round((data.main?.temp ?? 25) * 10) / 10,
          relativeHumidity: Math.round(data.main?.humidity ?? 50),
          apparentTemperature: Math.round((data.main?.feels_like ?? data.main?.temp ?? 25) * 10) / 10,
          windSpeed: windSpeedKmH,
          windDirection: data.wind?.deg ?? 0,
          pressure: data.main?.pressure,
          clouds,
          visibility: typeof data.visibility === 'number' ? Math.round((data.visibility / 1000) * 10) / 10 : null,
          weatherCondition: data.weather?.[0]?.main || 'Clear',
          weatherDescription: data.weather?.[0]?.description
            ? data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
            : 'Clear Sky',
          weatherIcon: data.weather?.[0]?.icon || (isDay ? '01d' : '01n'),
          isDay,
          shortwaveRadiation,
          weatherCode: data.weather?.[0]?.id ?? 800,
          sunrise: sunriseSec ? new Date(sunriseSec * 1000).toISOString() : null,
          sunset: sunsetSec ? new Date(sunsetSec * 1000).toISOString() : null,
          placeName: data.name || 'Selected Location',
          adminName: data.sys?.country === 'IN' ? 'India' : data.sys?.country || 'India',
          country: data.sys?.country === 'IN' ? 'India' : data.sys?.country || 'India',
          provider: 'OPENWEATHER',
          timestamp: data.dt ? new Date(data.dt * 1000).toISOString() : new Date().toISOString(),
        };

        weatherCache.set(cacheKey, { data: weatherData, expiresAt: Date.now() + 5 * 60 * 1000 });

        return NextResponse.json(
          { success: true, data: weatherData },
          { headers: { 'Cache-Control': 'private, max-age=300' } }
        );
      }
    } catch (err) {
      console.warn('[weather] OpenWeather fetch failed, attempting fallback to Open-Meteo:', err);
    }
  }

  // 3. Fallback: Open-Meteo
  try {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,weather_code,shortwave_radiation&timezone=auto`;
    const geoUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;

    const [weatherRes, geoRes] = await Promise.allSettled([
      fetch(weatherUrl, { next: { revalidate: 300 }, headers: { Accept: 'application/json' } }),
      fetch(geoUrl, {
        headers: {
          'User-Agent': process.env.OPENSTREETMAP_USER_AGENT || 'PriSEHAT-Pulse/1.0 (healthrytixtech@gmail.com)',
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
      } catch {
        // Fallback
      }
    }

    const weatherData: WeatherData = {
      temperature: Math.round(current.temperature_2m * 10) / 10,
      relativeHumidity: Math.round(current.relative_humidity_2m),
      apparentTemperature: Math.round(current.apparent_temperature * 10) / 10,
      windSpeed: Math.round(current.wind_speed_10m * 10) / 10,
      windDirection: current.wind_direction_10m ?? 0,
      isDay: Boolean(current.is_day),
      shortwaveRadiation: current.shortwave_radiation ?? 0,
      weatherCode: current.weather_code ?? 0,
      weatherCondition: current.weather_code < 3 ? 'Clear' : current.weather_code < 60 ? 'Cloudy' : 'Rain',
      weatherDescription: current.weather_code < 3 ? 'Clear Sky' : 'Overcast / Clouds',
      weatherIcon: current.is_day ? '01d' : '01n',
      placeName,
      adminName,
      country,
      provider: 'OPEN_METEO',
      timestamp: current.time,
    };

    weatherCache.set(cacheKey, { data: weatherData, expiresAt: Date.now() + 5 * 60 * 1000 });

    return NextResponse.json({ success: true, data: weatherData });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch weather data';
    return NextResponse.json(
      { success: false, error: message },
      { status: 502 }
    );
  }
}
