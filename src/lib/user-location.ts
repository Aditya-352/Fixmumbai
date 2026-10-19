import { APP_BASE_PATH } from '@/lib/base-path';
/**
 * High-accuracy multi-tier user location detector.
 * 1. Tries high-accuracy browser hardware GPS (HTML5 Geolocation) with an adequate 10s timeout.
 * 2. If high accuracy times out/fails, retries with standard Wi-Fi / cell positioning (enableHighAccuracy: false).
 * 3. Falls back to internal /api/locate (IP Geolocation) if browser GPS is denied or unavailable.
 * 4. Enriches coordinates with detailed reverse-geocoding via /api/geocode (locality, suburb, city, state).
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
          label: json.data.label || `${json.data.city || 'Location'}, ${json.data.state || 'India'}`,
          city: json.data.city || '',
          state: json.data.state || '',
        };
      }
    }
  } catch {
    // fallback
  }

  return {
    label: `Location (${lat.toFixed(4)}, ${lon.toFixed(4)})`,
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
 * Full multi-channel location detector:
 * 1. Checks browser hardware GPS with a 10-second timeout.
 * 2. If high accuracy times out/fails, retries with standard network Wi-Fi positioning.
 * 3. Only if browser geolocation is denied or unavailable, falls back to IP Geolocation.
 */
export async function detectExactUserLocation(): Promise<DetectedLocation> {
  // If browser geolocation is available, attempt hardware GPS
  if (typeof window !== 'undefined' && 'geolocation' in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 30000,
        });
      });

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      console.info(`[GPS] Successfully locked exact location: ${lat}, ${lon} (±${Math.round(accuracy)}m)`);
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
    } catch (gpsError: any) {
      console.warn('[GPS] High-accuracy lock failed or timed out:', gpsError?.message || gpsError);

      // If permission was not explicitly denied, retry with standard Wi-Fi / network geolocation
      if (gpsError?.code !== 1 /* PERMISSION_DENIED */) {
        try {
          const quickPos = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: false,
              timeout: 5000,
              maximumAge: 60000,
            });
          });

          const lat = quickPos.coords.latitude;
          const lon = quickPos.coords.longitude;
          const accuracy = quickPos.coords.accuracy;

          console.info(`[GPS] Fast network Wi-Fi position locked: ${lat}, ${lon}`);
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
          // Fall through to IP geolocation
        }
      }
    }
  }

  // Fallback 1: Resolve via internal IP location service
  console.info('[Location] Falling back to network IP geolocation...');
  const ipLoc = await detectLocationViaIp();
  if (ipLoc) {
    const geo = await reverseGeocode(ipLoc.lat, ipLoc.lon);
    if (geo.label && !geo.label.startsWith('Location (')) {
      ipLoc.name = geo.label;
    }
    return ipLoc;
  }

  // Fallback 2: Mumbai center
  return {
    lat: 19.076,
    lon: 72.8777,
    name: 'Mumbai, Maharashtra',
    city: 'Mumbai',
    state: 'Maharashtra',
    source: 'fallback',
  };
}
