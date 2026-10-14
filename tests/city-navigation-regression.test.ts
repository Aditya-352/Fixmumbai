/**
 * Regression tests for location-independent city navigation.
 *
 * These lock in two defects that were present and are easy to reintroduce:
 *
 *   1. `useGreenExplorer` accepted a `city` argument but never read it, so the
 *      map centre, bbox containment check and every API request stayed on
 *      Mumbai regardless of the selected city.
 *   2. The explorer depended on automatic browser geolocation on mount.
 *
 * The hook cannot be mounted here (this suite runs in the `node` environment and
 * the project has no jsdom / testing-library), so these are source-level
 * assertions over the shipped hook source plus behavioural assertions over the
 * city registry. They are intentionally narrow: they assert the specific
 * wiring that was broken, not general code shape.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import { CITY_REGISTRY, listCityIds, getCity } from '@/lib/green/config';

const HOOK_SRC = readFileSync(
  join(process.cwd(), 'src/hooks/useGreenExplorer.ts'),
  'utf8'
);

describe('A. no automatic geolocation in the green explorer', () => {
  it('never calls the browser geolocation API from the explorer hook', () => {
    expect(HOOK_SRC).not.toMatch(/navigator\s*\.\s*geolocation/);
    expect(HOOK_SRC).not.toMatch(/getCurrentPosition/);
  });

  it('does not re-introduce the removed setCentreFromGeo geolocating setter', () => {
    expect(HOOK_SRC).not.toMatch(/setCentreFromGeo/);
  });
});

describe('B. the hook actually uses the city argument', () => {
  it('reads the city parameter inside the hook body', () => {
    // Guards the exact regression: a parameter that is accepted but unused.
    // Every fetch below must interpolate it, so a single reference in the
    // signature is not enough — assert the fetches too.
    const fetchMatches = HOOK_SRC.match(/fetch\(`/g) ?? [];
    expect(fetchMatches.length).toBeGreaterThan(0);
    expect(HOOK_SRC).toMatch(/city:\s*city\s*\?\?\s*ACTIVE_CITY\.id/);
  });

  it('threads city into the spaces (nearby) request', () => {
    expect(HOOK_SRC).toMatch(/city:\s*city\s*\?\?\s*ACTIVE_CITY\.id/);
  });

  it('threads city into the tiles, status and search requests', () => {
    expect(HOOK_SRC).toMatch(/tiles\?city=\$\{city/);
    expect(HOOK_SRC).toMatch(/status\?city=\$\{city/);
    expect(HOOK_SRC).toMatch(/search\?q=\$\{encodeURIComponent\(searchQuery\)\}&city=\$\{city/);
  });

  it('re-fetches when the city changes rather than caching a Mumbai result', () => {
    // The data callbacks must depend on `city`; an empty dep array would keep
    // serving the previously selected city's markers.
    expect(HOOK_SRC).toMatch(/\}, \[city\]\);/);
  });

  it('resets centre, markers, search and selection when the city changes', () => {
    const reset = HOOK_SRC.slice(HOOK_SRC.indexOf('City change reset'));
    expect(reset.length).toBeGreaterThan(0);
    for (const setter of [
      'setCentre(defaultCentreFor',
      'setHasChosenCentre(false)',
      'setSpaces([])',
      'setSelectedSpace(null)',
      'setSearchQuery(',
      'setSearchResults([])',
    ]) {
      expect(reset).toContain(setter);
    }
  });
});

describe('C. no Mumbai-only centre leaks across cities', () => {
  it('derives the default centre per city instead of a module-level Mumbai constant', () => {
    expect(HOOK_SRC).toMatch(/function defaultCentreFor\(city: CityId\)/);
    expect(HOOK_SRC).not.toMatch(/const DEFAULT_CENTRE: SearchCentre = \{/);
  });

  it('bounds containment by the selected city, not hardcoded Mumbai', () => {
    expect(HOOK_SRC).toMatch(/function isWithinCity\(city: CityId/);
    expect(HOOK_SRC).not.toMatch(/function isWithinMumbai/);
  });

  it('gives every registered city a distinct centre inside its own bbox', () => {
    const centres = listCityIds().map((id) => CITY_REGISTRY[id].centre.join(','));
    expect(new Set(centres).size).toBe(centres.length);

    for (const id of listCityIds()) {
      const city = getCity(id);
      const [south, west, north, east] = city.bbox;
      const [lat, lon] = city.centre;
      expect(lat).toBeGreaterThanOrEqual(south);
      expect(lat).toBeLessThanOrEqual(north);
      expect(lon).toBeGreaterThanOrEqual(west);
      expect(lon).toBeLessThanOrEqual(east);
    }
  });
});
describe('D. city-scoped API routes honour the city parameter', () => {
  const NEARBY_SRC = readFileSync(
    join(process.cwd(), 'src/app/api/vegetation/nearby/route.ts'),
    'utf8'
  );
  const TILES_SRC = readFileSync(
    join(process.cwd(), 'src/app/api/vegetation/tiles/route.ts'),
    'utf8'
  );

  it('nearby resolves the city instead of testing every point against Mumbai', () => {
    expect(NEARBY_SRC).toMatch(/resolveCity\(/);
    // The bbox/centre maths must read the resolved city, not the Mumbai default.
    expect(NEARBY_SRC).toMatch(/const \[south, west, north, east\] = city\.bbox/);
    expect(NEARBY_SRC).toMatch(/isOutsideCity =/);
    expect(NEARBY_SRC).not.toMatch(/isOutsideMumbai/);
  });

  it('nearby passes the city down to the data layer', () => {
    // Without this the service falls back to the Mumbai DB seed and answers a
    // Pune request with Mumbai records.
    expect(NEARBY_SRC).toMatch(/city:\s*city\.id/);
  });

  it('nearby never serves records for a city with no data', () => {
    expect(NEARBY_SRC).toMatch(/dataStatus === 'EMPTY'/);
  });

  it('tiles does not project one city NDVI imagery onto another city', () => {
    expect(TILES_SRC).toMatch(/cityHasImagery/);
    // Layers must be gated on coverage, not merely on the provider having a scene.
    expect(TILES_SRC).toMatch(/hasObservation && cityHasImagery/);
  });

  it('every city-scoped response identifies the city it answered for', () => {
    for (const src of [NEARBY_SRC, TILES_SRC]) {
      expect(src).toMatch(/city: cityMeta\(resolved\)/);
    }
  });
});
