/**
 * Minimal in-memory TTL cache.
 *
 * The upstream CPCB (data.gov.in) and OpenAQ APIs are both rate-limited and
 * update at most hourly, so there is no need to call them on every map
 * request. This avoids adding a new infra dependency (Redis, etc.) for a
 * single-region MVP — swap the implementation for a shared cache (Redis)
 * when this expands beyond a single Next.js instance.
 *
 * Note: this is per-process memory. In a multi-instance deployment each
 * instance keeps its own cache, which is fine for this use case (it only
 * changes how often upstream is called, not correctness).
 */

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

class TtlCache {
  private store = new Map<string, CacheEntry<unknown>>();

  get<T>(key: string): T | undefined {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value as T;
  }

  set<T>(key: string, value: T, ttlMs: number): void {
    this.store.set(key, { value, expiresAt: Date.now() + ttlMs });
  }

  /** Fetch-or-compute helper: returns the cached value, or computes + stores it. */
  async getOrSet<T>(key: string, ttlMs: number, compute: () => Promise<T>): Promise<T> {
    const cached = this.get<T>(key);
    if (cached !== undefined) return cached;
    const value = await compute();
    this.set(key, value, ttlMs);
    return value;
  }
}

export const airQualityCache = new TtlCache();

/** Round coordinates to ~1km grid cells so nearby requests share a cache entry. */
export function coordinateCacheKey(prefix: string, lat: number, lon: number): string {
  const rlat = Math.round(lat * 100) / 100;
  const rlon = Math.round(lon * 100) / 100;
  return `${prefix}:${rlat},${rlon}`;
}

export const CACHE_TTL = {
  CPCB_MS: 15 * 60 * 1000,
  OPENAQ_MS: 15 * 60 * 1000,
  AQICN_MS: 15 * 60 * 1000,
  OPENWEATHER_MS: 15 * 60 * 1000,
} as const;
