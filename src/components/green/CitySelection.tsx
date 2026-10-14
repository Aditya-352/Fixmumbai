'use client';

/**
 * Client-side city selection for Green Density.
 *
 * WHY SHARED STATE RATHER THAN THE URL
 * `/green` is a statically prerendered route (Next reports `○ /green`) and this
 * application has no Suspense boundary anywhere. `useSearchParams()` in a static
 * route forces Next to either error at build time ("should be wrapped in a
 * suspense boundary") or to opt the route into dynamic rendering, which would
 * change a route that is currently prerendered and served from cache. A path
 * segment (`/green/[city]`) would break the deployed `/civic/green` URL that
 * existing links and navigation point at.
 *
 * So the selected city lives in shared client state, owned in exactly one place
 * (`GreenExplorer`) and passed down. Nothing else holds a city of its own, so
 * the map, nearby list, search, detail drawer and metrics cannot disagree.
 *
 * URL synchronisation remains possible later — `?city=pune` is accepted by every
 * relevant endpoint already — and can be added without changing this model.
 *
 * DATA AVAILABILITY IS NOT VALIDATION
 * `cityDataStatus()` says whether a city has records to show. It is deliberately
 * separate from `isPublished()`, which says whether boundary/population metadata
 * is approved. A city may be selectable and still have no data; that is an
 * expected state, not an error.
 */

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import {
  getCity,
  listCityIds,
  DEFAULT_CITY,
  type CityConfig,
  type CityId,
} from '@/lib/green/config';
import { cityDataStatus, type CityDataStatus } from '@/lib/green/city-param';

export interface CityOption {
  id: CityId;
  name: string;
  availability: CityDataStatus;
  /** True when the city's map framing is a measured envelope, not a boundary. */
  boundaryIsBoundingBoxOnly: boolean;
}

export interface CitySelectionValue {
  city: CityConfig;
  cityId: CityId;
  options: CityOption[];
  selectCity: (id: CityId) => void;
}

const CitySelectionContext = createContext<CitySelectionValue | null>(null);

export function buildCityOptions(): CityOption[] {
  return listCityIds().map((id) => {
    const c = getCity(id);
    return {
      id,
      name: c.name,
      availability: cityDataStatus(c),
      boundaryIsBoundingBoxOnly: c.boundaryMeta?.isBoundingBoxOnly ?? true,
    };
  });
}

export function CitySelectionProvider({
  cityId,
  onSelect,
  children,
}: {
  cityId: CityId;
  onSelect: (id: CityId) => void;
  children: ReactNode;
}) {
  const value = useMemo<CitySelectionValue>(
    () => ({
      city: getCity(cityId),
      cityId,
      options: buildCityOptions(),
      selectCity: onSelect,
    }),
    [cityId, onSelect]
  );
  return <CitySelectionContext.Provider value={value}>{children}</CitySelectionContext.Provider>;
}

export function useCitySelection(): CitySelectionValue {
  const ctx = useContext(CitySelectionContext);
  if (!ctx) {
    // Falling back to the default keeps a component usable in isolation (for
    // example in a test or a storybook-style harness) without silently
    // pretending a city was selected.
    const fallback = getCity(DEFAULT_CITY.id);
    return {
      city: fallback,
      cityId: fallback.id,
      options: buildCityOptions(),
      selectCity: () => {},
    };
  }
  return ctx;
}

/**
 * Build a query string carrying the selected city.
 *
 * Only the endpoints that accept `?city=` should be given this:
 *   nearby, search, areas/{id}, metrics, nurseries, sml
 * `reverse`, `route`, `photos`, `status` and the NDVI tile proxy deliberately
 * ignore it, so sending it there would imply a capability that does not exist.
 */
export function withCity(url: string, cityId: CityId): string {
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}city=${encodeURIComponent(cityId)}`;
}
