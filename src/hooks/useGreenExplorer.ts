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
  RightPanelTab,
  LayerVisibilityState,
} from '@/lib/green/types';
import type { HexCellMetric } from '@/lib/green/hex-grid-service';
import type { BmcNurseryRecord } from '@/lib/green/nurseries-service';
import { DEFAULT_RADIUS_M, ACTIVE_CITY } from '@/lib/green/config';

// ── API base path ──────────────────────────────────────────────────────────
// The app is deployed under /civic (basePath in next.config.js).
// All API calls must use the full path including the basePath so they resolve
// correctly in both development (localhost:3001/civic/...) and production
// (how-network.healthrytix.com/civic/...).
const BASE = '/civic/api/vegetation';

interface UseGreenExplorerReturn {
  // centre
  centre: SearchCentre;
  hasChosenCentre: boolean;
  activateCentre: (customCentre?: SearchCentre) => void;
  setCentreFromGeo: () => void;
  setCentreFromSearch: (result: GeocodeResult) => void;
  geoError: string | null;

  // filters
  filters: ExplorerFilters;
  setRadiusM: (r: number) => void;
  setFilterType: (t: FilterType) => void;
  setCategoryFilter: (cat: string) => void;
  setNurseryWard: (ward: string) => void;
  toggleVerifiedOnly: () => void;
  toggleNdviLayer: (cls: 'HIGH' | 'MEDIUM' | 'LOW') => void;
  toggleLayerVisibility: (layer: keyof LayerVisibilityState) => void;
  setBasemap: (m: 'light' | 'satellite') => void;

  // tabs
  activeTab: RightPanelTab;
  setActiveTab: (t: RightPanelTab) => void;

  // selected features
  selectedHex: HexCellMetric | null;
  setSelectedHex: (h: HexCellMetric | null) => void;
  selectedNursery: BmcNurseryRecord | null;
  setSelectedNursery: (n: BmcNurseryRecord | null) => void;

  // composite selector
  compositeType: 'dry_season' | 'latest_90d';
  setCompositeType: (c: 'dry_season' | 'latest_90d') => void;

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
  categoryFilter: 'ALL',
  nurseryWard: 'ALL',
  verifiedOnly: false,
  radiusM: DEFAULT_RADIUS_M,
  ndviLayers: { HIGH: true, MEDIUM: true, LOW: true },
  layerVisibility: {
    basemap: 'light',
    ndvi: false,            // Removed from UI — kept off
    hexGrid: false,         // OFF by default — enable via Map Layers & Grid
    greenSpaces: true,      // Always on — toggle removed from UI but markers always visible
    nurseries: true,
  },
};

export function useGreenExplorer(): UseGreenExplorerReturn {
  const [centre, setCentre] = useState<SearchCentre>(DEFAULT_CENTRE);
  const [hasChosenCentre, setHasChosenCentre] = useState<boolean>(false);
  const [geoError, setGeoError] = useState<string | null>(null);


  const [compositeType, setCompositeType] = useState<'dry_season' | 'latest_90d'>('dry_season');
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
  const spacesAbortRef = useRef<AbortController | null>(null);
  const spacesDebounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Fetch nearby spaces with 250ms debounce and AbortController ─────────────────────
  const fetchSpaces = useCallback(async (c: SearchCentre, f: ExplorerFilters, isChosen: boolean) => {
    if (spacesAbortRef.current) {
      spacesAbortRef.current.abort();
    }
    const controller = new AbortController();
    spacesAbortRef.current = controller;

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

    // If centre is not chosen yet, load whole city for initial map overview
    if (!isChosen) {
      params.set('allCity', 'true');
    }

    try {
      const res = await fetch(`${BASE}/nearby?${params}`, { signal: controller.signal });
      const json = await res.json();

      if (!res.ok) {
        // HTTP-level error — report it
        setSpacesError(json.error?.message ?? `Server error (${res.status}). Please retry.`);
        return;
      }

      if (!json.ok) {
        // API-level error — report it but don't crash marker layers
        const errCode = json.error?.code ?? 'UNKNOWN';
        const errMsg = json.error?.message ?? 'Failed to load green spaces.';

        if (errCode === 'OUT_OF_BOUNDS') {
          // Non-Mumbai visitor: show a gentle explanation (no hard error)
          // The server now handles this gracefully, but older deployments may not
          setSpacesError(
            'Your location is outside Mumbai. ' +
            'Showing all Mumbai green spaces for exploration.'
          );
        } else {
          setSpacesError(errMsg);
        }
        return;
      }

      const data = json.data ?? [];
      setSpaces(data);
      setSpacesPartial(json.meta?.partial ?? false);

      // Filter out the "seed required" warning so it doesn't alarm end users
      // (it's informational for operators, not actionable for visitors)
      const userFacingWarnings = (json.meta?.warnings ?? []).filter(
        (w: string) => !w.includes('seeding script') && !w.includes('db-empty')
      );
      setSpacesWarnings(userFacingWarnings);

    } catch (e: any) {
      if (e.name !== 'AbortError') {
        setSpacesError('Network error loading green spaces. Please retry.');
      }
    } finally {
      setSpacesLoading(false);
    }
  }, []);

  const refetchSpaces = useCallback(() => {
    fetchSpaces(centre, filters, hasChosenCentre);
  }, [centre, filters, hasChosenCentre, fetchSpaces]);

  const activateCentre = useCallback((customCentre?: SearchCentre) => {
    if (customCentre) {
      setCentre(customCentre);
    }
    setHasChosenCentre(true);
  }, []);

  // ── Fetch tiles (satellite NDVI — expensive, load independently after spaces) ────
  // Tiles are loaded with a 1.5s delay after mount so they don't block the
  // initial green-space data fetch (which is the most important content).
  const fetchTiles = useCallback(async () => {
    setTilesLoading(true);
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 20_000); // 20s timeout
      const res = await fetch(`${BASE}/tiles`, { signal: ctrl.signal });
      clearTimeout(timer);
      const json = await res.json();
      if (res.ok && json.ok) setTiles(json.data);
      // If tiles fail, that's OK — satellite is optional. Spaces still show.
    } catch {
      // silent — tiles are optional; NDVI unavailable state is shown in UI
    } finally {
      setTilesLoading(false);
    }
  }, []);

  // ── Fetch status (lightweight DB connectivity check) ──────────────────────
  const fetchStatus = useCallback(async () => {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 8_000);
      const res = await fetch(`${BASE}/status`, { signal: ctrl.signal });
      clearTimeout(timer);
      const json = await res.json();
      if (res.ok && json.ok) setStatus(json.data);
    } catch {
      // silent
    }
  }, []);

  // ── Initial loads ─────────────────────────────────────────────────────────
  // Strategy for Issue A (slow navigation) and Issue E (blocking render):
  // 1. Spaces load immediately (essential content, shown first)
  // 2. Status loads in parallel with spaces (lightweight)
  // 3. Tiles load LAST with a delay (expensive, optional satellite imagery)
  //    This prevents the AgroMonitoring API call from blocking the page.
  useEffect(() => {
    // Status is lightweight — load immediately
    fetchStatus();

    // Tiles are expensive (calls AgroMonitoring API) — delay so spaces load first
    const tilesTimer = setTimeout(() => {
      fetchTiles();
    }, 1500);

    return () => {
      clearTimeout(tilesTimer);
    };
  }, [fetchStatus, fetchTiles]);

  useEffect(() => {
    if (spacesDebounceTimerRef.current) {
      clearTimeout(spacesDebounceTimerRef.current);
    }
    spacesDebounceTimerRef.current = setTimeout(() => {
      fetchSpaces(centre, filters, hasChosenCentre);
    }, 250);

    return () => {
      if (spacesDebounceTimerRef.current) {
        clearTimeout(spacesDebounceTimerRef.current);
      }
    };
  }, [centre, filters, hasChosenCentre, fetchSpaces]);

  // ── Geolocation (Issue D) ──────────────────────────────────────────────────
  // Supports visitors anywhere in the world:
  //  - Mumbai visitors: centres map on actual position, shows nearby spaces
  //  - Non-Mumbai visitors: uses actual position, API now returns all city data
  //    with a warning (instead of blocking with OUT_OF_BOUNDS error)
  //  - All cases handled: granted, denied, timeout, unavailable, unsupported
  const setCentreFromGeo = useCallback(() => {
    setGeoError(null);

    // Case 6: Browser doesn't support geolocation
    if (!('geolocation' in navigator)) {
      setGeoError('Geolocation is not supported by your browser. Use the search box to find a location.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      // Case 1 & 2: Permission granted (first time or previously granted)
      (pos) => {
        setCentre({
          name: 'Your location',
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          source: 'geolocation',
          accuracyM: pos.coords.accuracy,
        });
        setHasChosenCentre(true);
        // geoError is cleared — user sees their position
      },
      // Cases 3, 4, 5: Permission denied / timeout / unavailable
      (err) => {
        let msg: string;
        switch (err.code) {
          case err.PERMISSION_DENIED:
            // Case 3: Permission denied
            msg = 'Location access denied. Use the search box to find a Mumbai locality or park.';
            break;
          case err.TIMEOUT:
            // Case 4: Timed out
            msg = 'Location request timed out. Check your device settings or use manual search.';
            break;
          case err.POSITION_UNAVAILABLE:
            // Case 5: Device location unavailable
            msg = 'Your current location could not be determined. Use the search box instead.';
            break;
          default:
            msg = 'Could not determine your location. Use the search box to find a place.';
        }
        setGeoError(msg);
        // Important: do NOT trap the user — map and data remain usable
        // hasChosenCentre stays false so city overview is preserved
      },
      {
        // enableHighAccuracy: true requests GPS (more accurate, slower).
        // Use false for a faster response; the accuracy difference is acceptable
        // for green-space discovery (we're looking for parks, not a specific door).
        enableHighAccuracy: false,
        timeout: 10_000,
        maximumAge: 300_000, // 5 min — acceptable for green space exploration
      }
    );
  }, []);

  const setCentreFromSearch = useCallback((result: GeocodeResult) => {
    setCentre({
      name: result.name,
      lat: result.lat,
      lon: result.lon,
      source: 'search',
    });
    setHasChosenCentre(true);
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  const [activeTab, setActiveTab] = useState<RightPanelTab>('SPACES');
  const [selectedHex, setSelectedHex] = useState<HexCellMetric | null>(null);
  const [selectedNursery, setSelectedNursery] = useState<BmcNurseryRecord | null>(null);

  // ── Filters ────────────────────────────────────────────────────────────────
  const setRadiusM = useCallback((r: number) => {
    setFilters((f) => ({ ...f, radiusM: r }));
  }, []);

  const setFilterType = useCallback((t: FilterType) => {
    setFilters((f) => ({ ...f, type: t }));
  }, []);

  const setCategoryFilter = useCallback((cat: string) => {
    setFilters((f) => ({ ...f, categoryFilter: cat }));
  }, []);

  const setNurseryWard = useCallback((ward: string) => {
    setFilters((f) => ({ ...f, nurseryWard: ward }));
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

  const toggleLayerVisibility = useCallback((layer: keyof LayerVisibilityState) => {
    setFilters((f) => ({
      ...f,
      layerVisibility: {
        ...f.layerVisibility,
        [layer]: !f.layerVisibility[layer],
      },
    }));
  }, []);

  const setBasemap = useCallback((mode: 'light' | 'satellite') => {
    setFilters((f) => ({
      ...f,
      layerVisibility: {
        ...f.layerVisibility,
        basemap: mode,
      },
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
    hasChosenCentre,
    activateCentre,
    setCentreFromGeo,
    setCentreFromSearch,
    geoError,
    filters,
    setRadiusM,
    setFilterType,
    setCategoryFilter,
    setNurseryWard,
    toggleVerifiedOnly,
    toggleNdviLayer,
    toggleLayerVisibility,
    setBasemap,
    activeTab,
    setActiveTab,
    selectedHex,
    setSelectedHex,
    selectedNursery,
    setSelectedNursery,
    compositeType,
    setCompositeType,
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
