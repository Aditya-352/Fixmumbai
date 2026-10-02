'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import type {
  GreenSpaceSummary,
  GreenSpaceDetail,
  SearchCentre,
  ExplorerFilters,
  FilterType,
  GeocodeResult,
  TilesResponse,
  GreenStatusResponse,
} from '@/lib/green/types';
import { DEFAULT_RADIUS_M, ACTIVE_CITY } from '@/lib/green/config';

const BASE = '/civic/api/vegetation';

interface UseGreenExplorerReturn {
  // centre
  centre: SearchCentre;
  setCentreFromGeo: () => void;
  setCentreFromSearch: (result: GeocodeResult) => void;
  geoError: string | null;

  // filters
  filters: ExplorerFilters;
  setRadiusM: (r: number) => void;
  setFilterType: (t: FilterType) => void;
  toggleVerifiedOnly: () => void;
  toggleNdviLayer: (cls: 'HIGH' | 'MEDIUM' | 'LOW') => void;

  // spaces
  spaces: GreenSpaceSummary[];
  spacesLoading: boolean;
  spacesError: string | null;
  spacesPartial: boolean;
  spacesWarnings: string[];
  refetchSpaces: () => void;

  // tiles
  tiles: TilesResponse | null;
  tilesLoading: boolean;

  // status
  status: GreenStatusResponse | null;

  // detail drawer
  selectedSpace: GreenSpaceDetail | null;
  detailLoading: boolean;
  openDetail: (id: string) => void;
  closeDetail: () => void;

  // search autocomplete
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  searchResults: GeocodeResult[];
  searchLoading: boolean;
}

const DEFAULT_CENTRE: SearchCentre = {
  name: ACTIVE_CITY.name,
  lat: ACTIVE_CITY.centre[0],
  lon: ACTIVE_CITY.centre[1],
  source: 'default',
};

const DEFAULT_FILTERS: ExplorerFilters = {
  type: 'all',
  verifiedOnly: false,
  radiusM: DEFAULT_RADIUS_M,
  ndviLayers: { HIGH: true, MEDIUM: true, LOW: true },
};

export function useGreenExplorer(): UseGreenExplorerReturn {
  const [centre, setCentre] = useState<SearchCentre>(DEFAULT_CENTRE);
  const [geoError, setGeoError] = useState<string | null>(null);

  const [filters, setFilters] = useState<ExplorerFilters>(DEFAULT_FILTERS);

  const [spaces, setSpaces] = useState<GreenSpaceSummary[]>([]);
  const [spacesLoading, setSpacesLoading] = useState(false);
  const [spacesError, setSpacesError] = useState<string | null>(null);
  const [spacesPartial, setSpacesPartial] = useState(false);
  const [spacesWarnings, setSpacesWarnings] = useState<string[]>([]);

  const [tiles, setTiles] = useState<TilesResponse | null>(null);
  const [tilesLoading, setTilesLoading] = useState(false);

  const [status, setStatus] = useState<GreenStatusResponse | null>(null);

  const [selectedSpace, setSelectedSpace] = useState<GreenSpaceDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<GeocodeResult[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // ── Fetch nearby spaces ────────────────────────────────────────────────────
  const fetchSpaces = useCallback(async (c: SearchCentre, f: ExplorerFilters) => {
    setSpacesLoading(true);
    setSpacesError(null);
    setSpacesPartial(false);
    setSpacesWarnings([]);

    const params = new URLSearchParams({
      lat: String(c.lat),
      lon: String(c.lon),
      radius: String(f.radiusM),
      type: f.type,
      verifiedOnly: String(f.verifiedOnly),
    });

    try {
      const res = await fetch(`${BASE}/nearby?${params}`);
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setSpacesError(json.error?.message ?? 'Failed to load green spaces.');
        return;
      }
      setSpaces(json.data ?? []);
      setSpacesPartial(json.meta?.partial ?? false);
      setSpacesWarnings(json.meta?.warnings ?? []);
    } catch (e: any) {
      setSpacesError('Network error loading green spaces. Please retry.');
    } finally {
      setSpacesLoading(false);
    }
  }, []);

  const refetchSpaces = useCallback(() => {
    fetchSpaces(centre, filters);
  }, [centre, filters, fetchSpaces]);

  // ── Fetch tiles ────────────────────────────────────────────────────────────
  const fetchTiles = useCallback(async () => {
    setTilesLoading(true);
    try {
      const res = await fetch(`${BASE}/tiles`);
      const json = await res.json();
      if (res.ok && json.ok) setTiles(json.data);
    } catch {
      // silent — tiles are optional
    } finally {
      setTilesLoading(false);
    }
  }, []);

  // ── Fetch status ───────────────────────────────────────────────────────────
  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch(`${BASE}/status`);
      const json = await res.json();
      if (res.ok && json.ok) setStatus(json.data);
    } catch {
      // silent
    }
  }, []);

  // ── Initial loads ──────────────────────────────────────────────────────────
  useEffect(() => {
    fetchStatus();
    fetchTiles();
  }, [fetchStatus, fetchTiles]);

  useEffect(() => {
    fetchSpaces(centre, filters);
  }, [centre, filters, fetchSpaces]);

  // ── Geolocation ────────────────────────────────────────────────────────────
  const setCentreFromGeo = useCallback(() => {
    setGeoError(null);
    if (!('geolocation' in navigator)) {
      setGeoError('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCentre({
          name: 'Your location',
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          source: 'geolocation',
          accuracyM: pos.coords.accuracy,
        });
      },
      (err) => {
        const msg =
          err.code === err.PERMISSION_DENIED
            ? 'Location access denied. Using search centre instead.'
            : 'Could not determine your location.';
        setGeoError(msg);
      },
      { enableHighAccuracy: true, timeout: 10_000, maximumAge: 300_000 }
    );
  }, []);

  const setCentreFromSearch = useCallback((result: GeocodeResult) => {
    setCentre({
      name: result.name,
      lat: result.lat,
      lon: result.lon,
      source: 'search',
    });
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  // ── Filters ────────────────────────────────────────────────────────────────
  const setRadiusM = useCallback((r: number) => {
    setFilters((f) => ({ ...f, radiusM: r }));
  }, []);

  const setFilterType = useCallback((t: FilterType) => {
    setFilters((f) => ({ ...f, type: t }));
  }, []);

  const toggleVerifiedOnly = useCallback(() => {
    setFilters((f) => ({ ...f, verifiedOnly: !f.verifiedOnly }));
  }, []);

  const toggleNdviLayer = useCallback((cls: 'HIGH' | 'MEDIUM' | 'LOW') => {
    setFilters((f) => ({
      ...f,
      ndviLayers: { ...f.ndviLayers, [cls]: !f.ndviLayers[cls] },
    }));
  }, []);

  // ── Detail drawer ──────────────────────────────────────────────────────────
  const openDetail = useCallback(async (id: string) => {
    setDetailLoading(true);
    setSelectedSpace(null);
    try {
      const res = await fetch(`${BASE}/areas/${id}`);
      const json = await res.json();
      if (res.ok && json.ok) {
        setSelectedSpace(json.data);
      }
    } catch {
      // leave null — caller shows error
    } finally {
      setDetailLoading(false);
    }
  }, []);

  const closeDetail = useCallback(() => {
    setSelectedSpace(null);
  }, []);

  // ── Search autocomplete (debounced 300 ms) ─────────────────────────────────
  useEffect(() => {
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    if (searchQuery.length < 3) {
      setSearchResults([]);
      return;
    }
    searchTimerRef.current = setTimeout(async () => {
      setSearchLoading(true);
      if (abortRef.current) abortRef.current.abort();
      abortRef.current = new AbortController();
      try {
        const res = await fetch(
          `${BASE}/search?q=${encodeURIComponent(searchQuery)}`,
          { signal: abortRef.current.signal }
        );
        const json = await res.json();
        if (res.ok && json.ok) setSearchResults(json.data ?? []);
      } catch {
        // aborted or network error — ignore
      } finally {
        setSearchLoading(false);
      }
    }, 300);
  }, [searchQuery]);

  return {
    centre,
    setCentreFromGeo,
    setCentreFromSearch,
    geoError,
    filters,
    setRadiusM,
    setFilterType,
    toggleVerifiedOnly,
    toggleNdviLayer,
    spaces,
    spacesLoading,
    spacesError,
    spacesPartial,
    spacesWarnings,
    refetchSpaces,
    tiles,
    tilesLoading,
    status,
    selectedSpace,
    detailLoading,
    openDetail,
    closeDetail,
    searchQuery,
    setSearchQuery,
    searchResults,
    searchLoading,
  };
}
