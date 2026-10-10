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
import mumbaiPlaces from '@/data/mumbai-places.json';

// ── API base path ──────────────────────────────────────────────────────────
// The app is deployed under /civic (basePath in next.config.js).
// All API calls must use the full path including the basePath so they resolve
// correctly in both development (localhost:3001/civic/...) and production
// (how-network.healthrytix.com/civic/...).
const BASE = '/civic/api/vegetation';

export interface GeoNotice {
  type: 'INSIDE_MUMBAI' | 'OUTSIDE_MUMBAI' | 'DENIED' | 'ERROR';
  message: string;
  distanceKm?: number;
  userLat?: number;
  userLon?: number;
}

interface UseGreenExplorerReturn {
  // centre
  centre: SearchCentre;
  hasChosenCentre: boolean;
  activateCentre: (customCentre?: SearchCentre) => void;
  setCentreFromGeo: () => void;
  setCentreFromSearch: (result: GeocodeResult) => void;
  geoError: string | null;
  geoNotice: GeoNotice | null;
  geoLoading: boolean;
  clearGeoNotice: () => void;

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

/**
 * Resolve a coordinate to a human-readable place name ("Bengaluru, Karnataka").
 * Naming only — the green-density dataset stays limited to ACTIVE_CITY.bbox.
 */
async function resolvePlaceLabel(lat: number, lon: number): Promise<string | null> {
  try {
    const res = await fetch(`${BASE}/reverse?lat=${lat}&lon=${lon}`);
    if (!res.ok) return null;
    const json = await res.json();
    return json.ok ? (json.data?.label ?? null) : null;
  } catch {
    return null;
  }
}

/**
 * Snap an in-coverage coordinate to the nearest known Mumbai locality so the
 * header can name a neighbourhood ("Bandra West") instead of only the city.
 * Returns null when the point is not plausibly inside the city.
 */
function nearestMumbaiLocality(lat: number, lon: number): string | null {
  let best: { name: string; d2: number } | null = null;
  for (const p of mumbaiPlaces) {
    const dLat = p.lat - lat;
    const dLng = p.lng - lon;
    const d2 = dLat * dLat + dLng * dLng;
    if (!best || d2 < best.d2) best = { name: p.name.split('(')[0].trim(), d2 };
  }
  // ~0.035° ≈ 3.9 km. Beyond that the "nearest locality" claim would be false.
  return best && best.d2 <= 0.035 * 0.035 ? best.name : null;
}

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

/**
 * Haversine distance in kilometres between two coordinates.
 */
function haversineDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Checks whether given coordinates fall within the Mumbai coverage diameter / bbox.
 * Includes Mumbai Metropolitan Region boundary (Colaba to Dahisar, Thane, Navi Mumbai).
 */
function isWithinMumbai(lat: number, lon: number): boolean {
  const [south, west, north, east] = ACTIVE_CITY.bbox;
  const pad = 0.15; // ~15km buffer
  const inBbox =
    lat >= south - pad &&
    lat <= north + pad &&
    lon >= west - pad &&
    lon <= east + pad;
  const distFromCentre = haversineDistanceKm(lat, lon, ACTIVE_CITY.centre[0], ACTIVE_CITY.centre[1]);
  return inBbox && distFromCentre <= 45;
}

export function useGreenExplorer(): UseGreenExplorerReturn {
  const [centre, setCentre] = useState<SearchCentre>(DEFAULT_CENTRE);
  const [hasChosenCentre, setHasChosenCentre] = useState<boolean>(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [geoNotice, setGeoNotice] = useState<GeoNotice | null>(null);
  const [geoLoading, setGeoLoading] = useState<boolean>(false);

  const clearGeoNotice = useCallback(() => {
    setGeoNotice(null);
    setGeoError(null);
  }, []);


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

  // ── Geolocation with Mumbai boundary verification ─────────────────────────
  const setCentreFromGeo = useCallback(() => {
    setGeoError(null);
    setGeoNotice(null);

    // Browser doesn't support geolocation
    if (!('geolocation' in navigator)) {
      const msg = 'Geolocation is not supported by your browser. Use the search box to find a location.';
      setGeoError(msg);
      setGeoNotice({ type: 'ERROR', message: msg });
      return;
    }

    setGeoLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoLoading(false);
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const inMumbai = isWithinMumbai(lat, lon);

        // Resolve the real place name first so the header shows where the user
        // actually is, regardless of whether that is inside the coverage area.
        resolvePlaceLabel(lat, lon).then((geocodedName) => {
          if (inMumbai) {
            // Inside Mumbai: directly set user location and fetch nearby spaces.
            // Prefer the local locality gazetteer (it knows Bandra West, Carter
            // Road and friends) over the coarse reverse-geocoder, which usually
            // only resolves to "Mumbai" at city zoom.
            const placeName =
              nearestMumbaiLocality(lat, lon) ?? geocodedName ?? 'Your Location';
            setCentre({
              name: placeName,
              lat,
              lon,
              source: 'geolocation',
              accuracyM: pos.coords.accuracy,
            });
            setHasChosenCentre(true);
            setGeoError(null);
            setGeoNotice({
              type: 'INSIDE_MUMBAI',
              message: `📍 You are in ${placeName}: showing green spaces within walking distance of your current location.`,
              userLat: lat,
              userLon: lon,
            });
          } else {
            // Outside Mumbai: the header/location label follows the visitor, but
            // the data footprint does NOT. hasChosenCentre stays false so the map
            // stays on Mumbai and the API returns the whole city instead of a
            // radius query anchored thousands of kilometres away.
            const placeName = geocodedName ?? 'Your Location';
            const distKm = Math.round(
              haversineDistanceKm(lat, lon, ACTIVE_CITY.centre[0], ACTIVE_CITY.centre[1])
            );
            setCentre({
              name: placeName,
              lat,
              lon,
              source: 'geolocation',
              accuracyM: pos.coords.accuracy,
            });
            setHasChosenCentre(false);
            const outsideMsg =
              `You are in ${placeName}, ${distKm} km from Mumbai. ` +
              `Green Density data is only available for Mumbai, so the map below shows all Mumbai green spaces.`;
            setGeoError(outsideMsg);
            setGeoNotice({
              type: 'OUTSIDE_MUMBAI',
              message: outsideMsg,
              distanceKm: distKm,
              userLat: lat,
              userLon: lon,
            });
          }
        });
      },
      (err) => {
        setGeoLoading(false);
        let msg: string;
        let noticeType: GeoNotice['type'] = 'ERROR';
        switch (err.code) {
          case err.PERMISSION_DENIED:
            msg = 'Location access denied. Showing Mumbai city centre. You can search any locality or park.';
            noticeType = 'DENIED';
            break;
          case err.TIMEOUT:
            msg = 'Location request timed out. Showing Mumbai city centre.';
            noticeType = 'ERROR';
            break;
          case err.POSITION_UNAVAILABLE:
            msg = 'Your current location could not be determined. Showing Mumbai city centre.';
            noticeType = 'ERROR';
            break;
          default:
            msg = 'Could not determine your location. Showing Mumbai city centre.';
            noticeType = 'ERROR';
        }
        setGeoError(msg);
        setGeoNotice({ type: noticeType, message: msg });
      },
      {
        enableHighAccuracy: false,
        timeout: 10_000,
        maximumAge: 300_000,
      }
    );
  }, []);

  // ── Initial loads & Auto-GPS fetch on mount ─────────────────────────────
  useEffect(() => {
    // 1. Status is lightweight — load immediately
    fetchStatus();

    // 2. Automatically request GPS location when user enters Green Density
    setCentreFromGeo();

    // 3. Tiles are expensive (calls AgroMonitoring API) — delay so spaces load first
    const tilesTimer = setTimeout(() => {
      fetchTiles();
    }, 1500);

    return () => {
      clearTimeout(tilesTimer);
    };
  }, [fetchStatus, fetchTiles, setCentreFromGeo]);

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
    geoNotice,
    geoLoading,
    clearGeoNotice,
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
