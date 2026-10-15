import { APP_BASE_PATH } from '@/lib/base-path';
/**
 * High-accuracy multi-tier user location detector.
 * 1. Tries high-accuracy browser hardware GPS (HTML5 Geolocation).
 * 2. Falls back instantly to internal /api/locate (IP Geolocation) if hardware GPS is denied, absent, or times out.
 * 3. Enriches coordinates with detailed reverse-geocoding via /api/geocode (locality, suburb, city, state).
 */

export interface DetectedLocation {
  lat: number;
  lon: number;
  name: string;
  city: string;
  state: string;
  source: 'gps' | 'network_ip' | 'fallback';
  accuracy?: number;
}

/**
 * Reverse geocodes coordinates to a clean, human-readable Indian locality name via internal proxy.
 */
export async function reverseGeocode(
  lat: number,
  lon: number
): Promise<{ label: string; city: string; state: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`${APP_BASE_PATH}/api/geocode?lat=${lat}&lon=${lon}`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return {
          label: json.data.label || `${json.data.city}, ${json.data.state}`,
          city: json.data.city || '',
          state: json.data.state || '',
        };
      }
    }
  } catch {
    // fallback
  }

  return {
    label: `Coordinates (${lat.toFixed(3)}, ${lon.toFixed(3)})`,
    city: '',
    state: '',
  };
}

/**
 * Resolves location via internal server-side IP Geolocation endpoint (/api/locate).
 */
export async function detectLocationViaIp(): Promise<DetectedLocation | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`${APP_BASE_PATH}/api/locate`, { signal: controller.signal });
    clearTimeout(timeout);

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        const { lat, lon, city, state, name, source } = json.data;
        return {
          lat,
          lon,
          name: name || `${city}, ${state}`,
          city: city || '',
          state: state || '',
          source: source || 'network_ip',
        };
      }
    }
  } catch {
    // fallback
  }

  return null;
}

/**
 * Full dual-channel location detector:
 * 1. Checks browser hardware GPS with a quick 3-second timeout.
 * 2. If browser GPS fails, times out, or permission is pending, immediately resolves via /api/locate.
 */
export async function detectExactUserLocation(): Promise<DetectedLocation> {
  // If browser geolocation is available, attempt high-accuracy GPS with a 3.5s timeout
  if (typeof window !== 'undefined' && 'geolocation' in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 3500,
          maximumAge: 0,
        });
      });

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      const geo = await reverseGeocode(lat, lon);
      return {
        lat,
        lon,
        name: geo.label,
        city: geo.city,
        state: geo.state,
        source: 'gps',
        accuracy,
      };
    } catch {
      // Browser GPS timed out or was not granted; fall through to network IP
    }
  }

  // Fallback: Resolve via internal IP location service
  const ipLoc = await detectLocationViaIp();
  if (ipLoc) {
    // Enrich with high-res locality details
    const geo = await reverseGeocode(ipLoc.lat, ipLoc.lon);
    if (geo.label && !geo.label.startsWith('Coordinates')) {
      ipLoc.name = geo.label;
    }
    return ipLoc;
  }

  // Final fallback
  return {
    lat: 17.385,
    lon: 78.4867,
    name: 'Hyderabad, Telangana',
    city: 'Hyderabad',
    state: 'Telangana',
    source: 'fallback',
  };
}
