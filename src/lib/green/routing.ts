/**
 * Routing Adapter — Abstracts routing provider for flexible profile selection.
 *
 * Supported profiles:
 * - driving (OSRM car profile)
 * - walking (OSRM foot profile)
 * - cycling (OSRM bicycle profile)
 *
 * Uses OSRM public demo server with appropriate profile endpoints.
 * Can be swapped for other providers without changing map components.
 */

export type TravelMode = 'driving' | 'walking' | 'cycling';

export interface RoutingProviderConfig {
  baseUrl: string;
  profiles: Record<TravelMode, string>;
  userAgent: string;
  timeoutMs: number;
}

export const DEFAULT_ROUTING_CONFIG: RoutingProviderConfig = {
  baseUrl: 'https://router.project-osrm.org',
  profiles: {
    driving: 'car',
    walking: 'foot',
    cycling: 'bicycle',
  },
  userAgent: 'FixMumbai-GreenExplorer/1.0 (civic green-space routing; contact@fixmumbai.org)',
  timeoutMs: 15000,
};

export interface RouteResult {
  distanceM: number;
  durationMin: number;
  geometry: GeoJSON.LineString | GeoJSON.MultiLineString;
  isEstimated: boolean;
  source: string;
  profile: TravelMode;
}

export interface RoutingError {
  code: string;
  message: string;
}

export class RoutingAdapter {
  private config: RoutingProviderConfig;

  constructor(config: Partial<RoutingProviderConfig> = {}) {
    this.config = { ...DEFAULT_ROUTING_CONFIG, ...config };
  }

  /**
   * Build the OSRM route URL for the given coordinates and profile.
   */
  private buildRouteUrl(
    fromLon: number,
    fromLat: number,
    toLon: number,
    toLat: number,
    profile: string
  ): string {
    const coords = `${fromLon},${fromLat};${toLon},${toLat}`;
    return `${this.config.baseUrl}/route/v1/${profile}/${coords}?overview=full&geometries=geojson&steps=true&annotations=distance,duration`;
  }

  /**
   * Check if a travel mode is supported by the current provider.
   */
  isModeSupported(mode: TravelMode): boolean {
    return mode in this.config.profiles;
  }

  /**
   * Get the OSRM profile name for a travel mode.
   */
  getProfile(mode: TravelMode): string {
    return this.config.profiles[mode];
  }

  /**
   * Calculate a route between two coordinates using the specified travel mode.
   */
  async calculateRoute(
    fromLat: number,
    fromLon: number,
    toLat: number,
    toLon: number,
    mode: TravelMode = 'driving'
  ): Promise<RouteResult> {
    if (!this.isModeSupported(mode)) {
      throw new Error(`Travel mode "${mode}" not supported by current routing provider`);
    }

    const profile = this.getProfile(mode);
    const url = this.buildRouteUrl(fromLon, fromLat, toLon, toLat, profile);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeoutMs);

    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': this.config.userAgent },
        signal: controller.signal,
        next: { revalidate: 86400 },
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        if (res.status === 429) {
          throw { code: 'RATE_LIMIT', message: 'Routing service rate limit exceeded' };
        }
        if (res.status === 504) {
          throw { code: 'TIMEOUT', message: 'Routing service timeout' };
        }
        throw { code: 'ROUTING_ERROR', message: `Routing service returned ${res.status}` };
      }

      const data = await res.json();

      if (!data.routes || data.routes.length === 0) {
        throw { code: 'NO_ROUTE', message: 'No route found between the specified locations' };
      }

      const route = data.routes[0];

      return {
        distanceM: Math.round(route.distance),
        durationMin: Math.round(route.duration / 60),
        geometry: route.geometry,
        isEstimated: false,
        source: `OSRM ${profile}`,
        profile: mode,
      };
    } catch (err: any) {
      clearTimeout(timeoutId);

      if (err.name === 'AbortError') {
        throw { code: 'TIMEOUT', message: 'Routing request timed out' };
      }

      if (err.code) {
        throw err;
      }

      throw { code: 'NETWORK_ERROR', message: err.message || 'Network error during routing' };
    }
  }

  /**
   * Calculate straight-line distance as fallback when routing fails.
   */
  calculateStraightLine(
    fromLat: number,
    fromLon: number,
    toLat: number,
    toLon: number,
    mode: TravelMode
  ): RouteResult {
    const R = 6371000;
    const dLat = ((toLat - fromLat) * Math.PI) / 180;
    const dLon = ((toLon - fromLon) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((fromLat * Math.PI) / 180) *
        Math.cos((toLat * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    const distanceM = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const speeds = { driving: 50, walking: 4.8, cycling: 15 };
    const speedKmh = speeds[mode] ?? 4.8;
    const durationMin = Math.round((distanceM / 1000 / speedKmh) * 60);

    return {
      distanceM: Math.round(distanceM),
      durationMin,
      geometry: {
        type: 'LineString',
        coordinates: [
          [fromLon, fromLat],
          [toLon, toLat],
        ],
      },
      isEstimated: true,
      source: `Straight-line (${mode})`,
      profile: mode,
    };
  }

  /**
   * Generate external navigation URL (Google Maps) for the route.
   */
  generateNavigationUrl(
    fromLat: number,
    fromLon: number,
    toLat: number,
    toLon: number,
    mode: TravelMode
  ): string {
    const travelModeMap: Record<TravelMode, string> = {
      driving: 'driving',
      walking: 'walking',
      cycling: 'bicycling',
    };

    const travelMode = travelModeMap[mode] || 'driving';
    const origin = `${fromLat},${fromLon}`;
    const destination = `${toLat},${toLon}`;

    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=${travelMode}`;
  }
}

export const routingAdapter = new RoutingAdapter();

export function createRoutingAdapter(config?: Partial<RoutingProviderConfig>): RoutingAdapter {
  return new RoutingAdapter(config);
}