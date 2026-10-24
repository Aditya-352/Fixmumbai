'use client';

/**
 * Application-wide city selection.
 *
 * ONE source of truth for the selected city, mounted once in the root layout
 * so that every route sees the same selection. The dashboard and the Green
 * Density explorer both read `useCitySelection()`, so changing the city in
 * one place changes it in the other immediately.
 *
 * PERSISTENCE
 * The selection survives navigation and reloads:
 *   1. `?city=<id>` in the URL wins (a shared link always opens the right city),
 *   2. otherwise the last selection is restored from `localStorage`,
 *   3. otherwise Mumbai (the default) is used.
 *
 * Storage access is guarded so it never runs during server rendering, and the
 * first client render always uses the default city so the server and client
 * markup match (no hydration mismatch). The stored value is validated against
 * the city registry, so an unknown or tampered id falls back to Mumbai.
 *
 * The city is also mirrored into the URL with `history.replaceState` so the
 * address bar always reflects the current city without a router round-trip.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  DEFAULT_CITY,
  getCity,
  hasCity,
  type CityId,
} from '@/lib/green/config';
import { CitySelectionProvider } from '@/components/green/CitySelection';

const STORAGE_KEY = 'prisehat:selected-city';

function readStoredCity(): CityId | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const id = raw.trim().toLowerCase();
    return hasCity(id) ? (id as CityId) : null;
  } catch {
    // Private mode / disabled storage — fall through to the default city.
    return null;
  }
}

function writeStoredCity(id: CityId): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Non-fatal: the selection still works for this session.
  }
}

function readCityFromUrl(): CityId | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = new URLSearchParams(window.location.search).get('city');
    if (!raw) return null;
    const id = raw.trim().toLowerCase();
    return hasCity(id) ? (id as CityId) : null;
  } catch {
    return null;
  }
}

function writeCityToUrl(id: CityId): void {
  if (typeof window === 'undefined') return;
  try {
    const url = new URL(window.location.href);
    if (id === DEFAULT_CITY.id) {
      url.searchParams.delete('city');
    } else {
      url.searchParams.set('city', id);
    }
    window.history.replaceState({}, '', url.toString());
  } catch {
    // Non-fatal.
  }
}

export default function AppCityProvider({ children }: { children: React.ReactNode }) {
  // Always start from the default so the server render and the first client
  // render are identical. The stored/URL city is applied in an effect.
  const [cityId, setCityId] = useState<CityId>(DEFAULT_CITY.id);
  const hydratedRef = useRef(false);

  // Restore the persisted selection once, after mount.
  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    const restored = readCityFromUrl() ?? readStoredCity();
    if (restored && restored !== DEFAULT_CITY.id) {
      setCityId(restored);
      // A city restored from the URL becomes the new baseline for this
      // browser, so a later visit without `?city=` still opens it.
      writeStoredCity(restored);
    }
  }, []);

  const selectCity = useCallback((next: CityId) => {
    if (!hasCity(next)) return;
    const id = next as CityId;
    setCityId(id);
    writeStoredCity(id);
    writeCityToUrl(id);
  }, []);

  return (
    <CitySelectionProvider cityId={cityId} onSelect={selectCity}>
      {children}
    </CitySelectionProvider>
  );
}
