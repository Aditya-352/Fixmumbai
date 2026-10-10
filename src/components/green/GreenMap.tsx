'use client';

/**
 * GreenMap — Leaflet map for the Green Density & Nature Intelligence Explorer.
 *
 * Core Features:
 * 1. Default Basemap: CARTO Positron (White/Light Basemap) for maximum NDVI contrast.
 *    Optional Satellite Basemap (Esri World Imagery).
 * 2. Separate layer controls:
 *    - Basemap: Light / Satellite
 *    - NDVI Raster: ON / OFF (in custom blend pane)
 *    - 100m Hexagonal Grid: ON / OFF (Turf.js analysis with click-to-inspect)
 *    - Green Spaces: ON / OFF (OSM boundaries & badges)
 * 3. Interactive Hexagon Inspector:
 *    - Click any 100m hex to highlight and inspect cell metrics (NDVI mean, coverage %, m²).
 * 4. All 27 BMC Wardwise Nurseries:
 *    - Geocoded accurately across Wards A to R/N, with full handbook source citations.
 */

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import type {
  GreenSpaceSummary,
  TilesResponse,
  SearchCentre,
  ExplorerFilters,
  LayerVisibilityState,
} from '@/lib/green/types';
import {
  BASEMAP_LIGHT_URL,
  BASEMAP_LIGHT_ATTRIBUTION,
  BASEMAP_LIGHT_REF_URL,
  BASEMAP_SAT_URL,
  BASEMAP_SAT_ATTRIBUTION,
} from '@/lib/green/config';
import { generate100mHexGrid, type HexCellMetric } from '@/lib/green/hex-grid-service';
import { BMC_NURSERIES, type BmcNurseryRecord } from '@/lib/green/nurseries-service';
import MapLayerControl from './MapLayerControl';
import { Locate, Plus, Minus, X, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { GeoNotice } from '@/hooks/useGreenExplorer';

interface GreenMapProps {
  centre: SearchCentre;
  hasChosenCentre?: boolean;
  spaces: GreenSpaceSummary[];
  filters: ExplorerFilters;
  tiles: TilesResponse | null;
  onSpaceClick: (id: string) => void;
  selectedSpaceId?: string | null;
  onSelectHex?: (hex: HexCellMetric | null) => void;
  selectedHexId?: string | null;
  onSelectNursery?: (nursery: BmcNurseryRecord | null) => void;
  selectedNurseryId?: string | null;
  onLocateMe: () => void;
  onToggleLayerVisibility: (layer: keyof LayerVisibilityState) => void;
  onSetBasemap: (mode: 'light' | 'satellite') => void;
  geoError?: string | null;
  geoNotice?: GeoNotice | null;
  geoLoading?: boolean;
  onDismissGeoNotice?: () => void;
  /** GeoJSON feature for the active pedestrian route (from directions API) */
  activeRoute?: GeoJSON.Feature | null;
  /** Route origin coordinates and label */
  routeOrigin?: { lat: number; lon: number; label: string } | null;
  /** Route destination coordinates and label */
  routeDestination?: { lat: number; lon: number; label: string } | null;
  /** Highlight marker for selected feature */
  highlightMarker?: { lat: number; lon: number; name: string } | null;
}

// ── SVG Icons ───────────────────────────────────────────────────────────────
const TREE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" fill="white" aria-hidden="true">
  <path d="M12 2L6.5 10h2.8L5 15h4.5v5h5v-5H19l-4.3-5h2.8L12 2z"/>
</svg>`;

const WALKER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" fill="white" aria-hidden="true">
  <circle cx="12" cy="4" r="2.2"/>
  <path d="M15.5 8.5l-1.5-1.5-2 1-2-1-1.5 1.5L7 14h2.2l.5-3 1.5 1.5V17h2v-5.5L11.5 10l.5-1.5 2 1.5L16 12h2.2l-2.7-3.5z"/>
</svg>`;

const NURSERY_SPROUT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="white" aria-hidden="true">
  <path d="M12 22v-8c0-3.31-2.69-6-6-6H3v2h3c2.21 0 4 1.79 4 4v8h2zm10-14h-3c-2.21 0-4 1.79-4 4v8h2v-8c0-1.1.9-2 2-2h3V8z"/>
</svg>`;

// Mumbai Island BBox Envelope: [south, west, north, east]
const MUMBAI_ISLAND_BOUNDS: [[number, number], [number, number]] = [
  [18.89, 72.77],
  [19.28, 72.98],
];

export default function GreenMap({
  centre,
  hasChosenCentre = false,
  spaces,
  filters,
  tiles,
  onSpaceClick,
  selectedSpaceId,
  onSelectHex,
  selectedHexId,
  onSelectNursery,
  selectedNurseryId,
  onLocateMe,
  onToggleLayerVisibility,
  onSetBasemap,
  geoError,
  geoNotice = null,
  geoLoading = false,
  onDismissGeoNotice,
  activeRoute = null,
  routeOrigin = null,
  routeDestination = null,
  highlightMarker = null,
}: GreenMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const lightLayerRef = useRef<any>(null);
  const satLayerRef = useRef<any>(null);
  const ndviLayerRef = useRef<any>(null);
  const hexLayerRef = useRef<any>(null);
  const nurseryLayerRef = useRef<any[]>([]);
  const spaceLayersRef = useRef<any[]>([]);
  const centreMarkerRef = useRef<any>(null);
  const radiusCircleRef = useRef<any>(null);
  const geoCircleRef = useRef<any>(null);

  const [mapReady, setMapReady] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(12);
  const [ndviUnavailable, setNdviUnavailable] = useState(false);
  const [rasterLoaded, setRasterLoaded] = useState<boolean>(false);
  const [rasterInViewport, setRasterInViewport] = useState<boolean>(false);
  const routeLayerRef = useRef<any>(null);
  const originMarkerRef = useRef<any>(null);
  const destinationMarkerRef = useRef<any>(null);
  const highlightMarkerRef = useRef<any>(null);

  // Global popup callback handlers
  useEffect(() => {
    (window as any)._greenSpaceClick = (id: string) => onSpaceClick(id);
    (window as any)._nurserySelectClick = (id: string) => {
      const found = BMC_NURSERIES.find((n) => n.id === id);
      if (found && onSelectNursery) onSelectNursery(found);
    };
    return () => {
      delete (window as any)._greenSpaceClick;
      delete (window as any)._nurserySelectClick;
    };
  }, [onSpaceClick, onSelectNursery]);

  // ── Route polyline rendering ──────────────────────────────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    import('leaflet').then((L) => {
      const map = mapRef.current!;

      // Clear previous route
      if (routeLayerRef.current) {
        try { map.removeLayer(routeLayerRef.current); } catch (_) {}
        routeLayerRef.current = null;
      }
      if (originMarkerRef.current) {
        try { map.removeLayer(originMarkerRef.current); } catch (_) {}
        originMarkerRef.current = null;
      }
      if (destinationMarkerRef.current) {
        try { map.removeLayer(destinationMarkerRef.current); } catch (_) {}
        destinationMarkerRef.current = null;
      }

      if (!activeRoute?.geometry) return;

      const geom = activeRoute.geometry;
      let latlngs: [number, number][] = [];

      if (geom.type === 'LineString') {
        latlngs = (geom as GeoJSON.LineString).coordinates.map(([lon, lat]) => [lat, lon]);
      } else if (geom.type === 'MultiLineString') {
        (geom as GeoJSON.MultiLineString).coordinates.forEach((seg) => {
          seg.forEach(([lon, lat]) => latlngs.push([lat, lon]));
        });
      }

      if (latlngs.length < 2) return;

      // Shadow/outline
      const shadow = L.polyline(latlngs, {
        color: '#1e40af',
        weight: 7,
        opacity: 0.25,
        lineJoin: 'round',
        lineCap: 'round',
      }).addTo(map);

      // Main route line
      const routeLine = L.polyline(latlngs, {
        color: '#3b82f6',
        weight: 4,
        opacity: 0.9,
        dashArray: '8 4',
        lineJoin: 'round',
        lineCap: 'round',
      }).addTo(map);

      // Group them so we can remove both at once
      const group = L.layerGroup([shadow, routeLine]).addTo(map);
      routeLayerRef.current = group;

      // Add origin marker
      if (routeOrigin) {
        const originHtml = `
          <div style="
            width:28px;height:28px;border-radius:50%;
            background:#2563EB;border:3px solid #ffffff;
            box-shadow:0 2px 8px rgba(37,99,235,0.5);
            display:flex;align-items:center;justify-content:center;
            font:800 10px system-ui;color:#ffffff;
          ">📍</div>`;
        const originIcon = L.divIcon({ className: '', html: originHtml, iconSize: [28, 28], iconAnchor: [14, 14] });
        originMarkerRef.current = L.marker([routeOrigin.lat, routeOrigin.lon], { icon: originIcon })
          .bindPopup(`<div style="font:800 12px system-ui;color:#0f172a">Origin</div><div style="font:11px system-ui;color:#64748b">${routeOrigin.label}</div><div style="font:10px monospace;color:#64748b">${routeOrigin.lat.toFixed(5)}, ${routeOrigin.lon.toFixed(5)}</div>`, { maxWidth: 200 })
          .addTo(map);
      }

      // Add destination marker
      if (routeDestination) {
        const destHtml = `
          <div style="
            width:28px;height:28px;border-radius:50%;
            background:#16a34a;border:3px solid #ffffff;
            box-shadow:0 2px 8px rgba(22,163,74,0.5);
            display:flex;align-items:center;justify-content:center;
            font:800 10px system-ui;color:#ffffff;
          ">🏁</div>`;
        const destIcon = L.divIcon({ className: '', html: destHtml, iconSize: [28, 28], iconAnchor: [14, 14] });
        destinationMarkerRef.current = L.marker([routeDestination.lat, routeDestination.lon], { icon: destIcon })
          .bindPopup(`<div style="font:800 12px system-ui;color:#0f172a">Destination</div><div style="font:11px system-ui;color:#64748b">${routeDestination.label}</div><div style="font:10px monospace;color:#64748b">${routeDestination.lat.toFixed(5)}, ${routeDestination.lon.toFixed(5)}</div>`, { maxWidth: 200 })
          .addTo(map);
      }

      // Fit map to route
      try {
        const bounds = L.latLngBounds(latlngs);
        map.fitBounds(bounds.pad(0.15), { maxZoom: 15 });
      } catch (_) {}
    });
  }, [activeRoute, mapReady, routeOrigin, routeDestination]);

  // ── Highlight marker for selected feature ──────────────────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    import('leaflet').then((L) => {
      const map = mapRef.current!;

      if (highlightMarkerRef.current) {
        try { map.removeLayer(highlightMarkerRef.current); } catch (_) {}
        highlightMarkerRef.current = null;
      }

      if (!highlightMarker) return;

      const pulseHtml = `
        <div style="position:relative;width:32px;height:32px;display:flex;align-items:center;justify-content:center;">
          <div style="position:absolute;inset:-8px;background:rgba(245,158,11,0.35);border-radius:50%;animation:greenCentreHalo 2s infinite ease-out;"></div>
          <div style="width:20px;height:20px;background:#f59e0b;border:3px solid #ffffff;border-radius:50%;box-shadow:0 2px 8px rgba(245,158,11,0.5);position:relative;z-index:2;"></div>
        </div>`;
      const pulseIcon = L.divIcon({ className: '', html: pulseHtml, iconSize: [32, 32], iconAnchor: [16, 16] });
      const marker = L.marker([highlightMarker.lat, highlightMarker.lon], { icon: pulseIcon })
        .bindPopup(`<div style="font:800 12px system-ui;color:#0f172a">${highlightMarker.name}</div><div style="font:10px monospace;color:#64748b">${highlightMarker.lat.toFixed(5)}, ${highlightMarker.lon.toFixed(5)}</div>`, { maxWidth: 200 })
        .addTo(map);

      highlightMarkerRef.current = marker;
      map.flyTo([highlightMarker.lat, highlightMarker.lon], 16, { duration: 0.8 });
    });
  }, [highlightMarker, mapReady]);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    if (mapRef.current) mapRef.current.zoomIn();
  }, []);

  const handleZoomOut = useCallback(() => {
    if (mapRef.current) mapRef.current.zoomOut();
  }, []);

  const flyToLocation = useCallback((lat: number, lon: number, zoom: number = 14) => {
    if (mapRef.current) {
      mapRef.current.flyTo([lat, lon], zoom, { duration: 1.2 });
    }
  }, []);

  // ── 1. Init Leaflet map with White/Light CARTO Positron ───────────────────
  useEffect(() => {
    let cancelled = false;
    const container = mapContainerRef.current;
    if (!container) return;

    import('leaflet').then((L) => {
      if (cancelled) return;

      if (mapRef.current) {
        try { mapRef.current.remove(); } catch (_) {}
        mapRef.current = null;
      }
      if ((container as any)._leaflet_id) delete (container as any)._leaflet_id;

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(container, {
        zoomControl: false,
        attributionControl: true,
        preferCanvas: true,
      });

      // Basemap tiles are NOT filtered — this keeps Satellite mode genuinely
      // true-colour. Any styling must target the dedicated NDVI pane instead.
      const basemapPane = map.getPane('tilePane')!;
      basemapPane.style.filter = '';

      // NDVI overlay lives in its own pane so nothing applied to vegetation can
      // bleed onto the light basemap or the satellite imagery.
      // zIndex 350 => above tilePane (200, basemap), below overlayPane (400,
      // routes/polygons) and hexPane (420).
      // No CSS filter is applied here: the provider's PNG already carries the
      // correct vegetation colours and NoData alpha, so altering them would
      // misrepresent the data.
      const ndviPane = map.createPane('ndviPane');
      ndviPane.style.zIndex = '350';

      // Custom pane for 100m hex grid (above NDVI, below markers)
      const hexPane = map.createPane('hexPane');
      hexPane.style.zIndex = '420';

      map.attributionControl.setPrefix(
        '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors · ' +
        'Esri · Copernicus Sentinel-2 / AgroMonitoring'
      );

      // Light/White Basemap: High-Contrast CARTO Positron (Zero watermarks, full Mumbai coverage)
      const lightBase = L.tileLayer(BASEMAP_LIGHT_URL, {
        attribution: BASEMAP_LIGHT_ATTRIBUTION,
        subdomains: 'abc',
        maxZoom: 19,
        keepBuffer: 6,
        updateWhenIdle: false,
        updateWhenZooming: true,
      });

      const layersToGroup: any[] = [lightBase];
      const refUrl = BASEMAP_LIGHT_REF_URL as string;
      if (refUrl && refUrl.length > 0) {
        const lightRef = L.tileLayer(BASEMAP_LIGHT_REF_URL, {
          maxZoom: 20,
          keepBuffer: 6,
          zIndex: 4,
          attribution: '',
        });
        layersToGroup.push(lightRef);
      }
      const lightGroup = L.layerGroup(layersToGroup);
      lightLayerRef.current = lightGroup;

      // Satellite Basemap: Esri World Imagery
      satLayerRef.current = L.tileLayer(BASEMAP_SAT_URL, {
        attribution: BASEMAP_SAT_ATTRIBUTION,
        maxZoom: 19,
        keepBuffer: 6,
      });

      // Default to light basemap
      lightGroup.addTo(map);

      // Fit to Mumbai island bounds
      map.fitBounds(MUMBAI_ISLAND_BOUNDS, { padding: [16, 16] });
      setZoomLevel(map.getZoom());

      map.on('zoomend', () => {
        setZoomLevel(map.getZoom());
      });

      mapRef.current = map;
      setMapReady(true);

      setTimeout(() => {
        if (!cancelled && mapRef.current) mapRef.current.invalidateSize();
      }, 150);
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        try { mapRef.current.remove(); } catch (_) {}
        mapRef.current = null;
      }
      if (container && (container as any)._leaflet_id) delete (container as any)._leaflet_id;
      setMapReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── 2. Basemap Switcher (Light / Satellite) ───────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || !lightLayerRef.current || !satLayerRef.current) return;

    if (filters.layerVisibility.basemap === 'satellite') {
      if (!map.hasLayer(satLayerRef.current)) map.addLayer(satLayerRef.current);
      if (map.hasLayer(lightLayerRef.current)) map.removeLayer(lightLayerRef.current);
    } else {
      if (!map.hasLayer(lightLayerRef.current)) map.addLayer(lightLayerRef.current);
      if (map.hasLayer(satLayerRef.current)) map.removeLayer(satLayerRef.current);
    }
  }, [filters.layerVisibility.basemap, mapReady]);

  // ── 2b. Live Sentinel-2 NDVI Raster Layer (AgroMonitoring / Copernicus) ───
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    if (ndviLayerRef.current) {
      try { ndviLayerRef.current.remove(); } catch (_) {}
      ndviLayerRef.current = null;
    }

    const ndviTileUrl = tiles?.layers?.[0]?.urlTemplate;
    const isNdviVisible = Boolean(filters.layerVisibility.ndvi && ndviTileUrl);

    if (isNdviVisible && ndviTileUrl) {
      setNdviUnavailable(false);
      import('leaflet').then((L) => {
        if (!mapRef.current) return;

        // Leaflet Tile Layer (AgroMonitoring Sentinel-2 XYZ template)
        // Real Sentinel-2 raster tiles. No imageOverlay, no stretched
        // rectangle, no synthetic green polygons: upstream PNG alpha is passed
        // through untouched so NoData stays transparent.
        //
        // `bounds` restricts requests to the extent the provider actually holds
        // imagery for, so we never request (or paint) tiles outside the real
        // Sentinel-2 footprint.
        const cov = tiles?.coverageBounds;
        const tileBounds: [[number, number], [number, number]] | undefined = cov
          ? [[cov[1], cov[0]], [cov[3], cov[2]]]
          : undefined;

        const layer = L.tileLayer(ndviTileUrl, {
          pane: 'ndviPane',
          opacity: 1,
          maxZoom: 19,
          minZoom: 10,
          zIndex: 8,
          crossOrigin: true,
          ...(tileBounds ? { bounds: tileBounds } : {}),
          attribution: 'Sentinel-2 NDVI &copy; AgroMonitoring / Copernicus',
        });

        layer.on('tileload', () => {
          setRasterLoaded(true);
        });

        layer.addTo(mapRef.current);
        ndviLayerRef.current = layer;

        // Viewport intersection check
        // Track whether the viewport overlaps the area the provider actually
        // holds imagery for, so the UI can explain an empty NDVI map honestly.
        const checkViewport = () => {
          if (!mapRef.current || !tiles?.coverageBounds) return;
          const mapBounds = mapRef.current.getBounds();
          const [minLon, minLat, maxLon, maxLat] = tiles.coverageBounds;
          const coverage = L.latLngBounds([minLat, minLon], [maxLat, maxLon]);
          setRasterInViewport(mapBounds.intersects(coverage));
        };

        checkViewport();
        mapRef.current.on('moveend', checkViewport);
      });
    } else if (filters.layerVisibility.ndvi && !ndviTileUrl) {
      setNdviUnavailable(true);
      setRasterLoaded(false);
      setRasterInViewport(false);
    } else {
      setNdviUnavailable(false);
      setRasterLoaded(false);
      setRasterInViewport(false);
    }

    return () => {
      if (ndviLayerRef.current) {
        try { ndviLayerRef.current.remove(); } catch (_) {}
        ndviLayerRef.current = null;
      }
    };
  }, [filters.layerVisibility.ndvi, tiles, mapReady]);

  // ── 3. Centre Pin & 5km Radius Circle ─────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    import('leaflet').then((L) => {
      if (!mapRef.current) return;

      if (centreMarkerRef.current) { centreMarkerRef.current.remove(); centreMarkerRef.current = null; }
      if (radiusCircleRef.current) { radiusCircleRef.current.remove(); radiusCircleRef.current = null; }
      if (geoCircleRef.current) { geoCircleRef.current.remove(); geoCircleRef.current = null; }

      if (hasChosenCentre) {
        const circle = L.circle([centre.lat, centre.lon], {
          radius: filters.radiusM,
          color: '#2563EB',
          fillColor: '#3B82F6',
          fillOpacity: 0.05,
          weight: 2,
          dashArray: '6 4',
        }).addTo(map);
        radiusCircleRef.current = circle;

        const bounds = circle.getBounds().pad(0.06);
        map.flyToBounds(bounds, { duration: 1.2 });

        const pinHtml = `
          <div style="position:relative;width:24px;height:24px;display:flex;align-items:center;justify-content:center;">
            <div style="position:absolute;inset:-6px;background:rgba(37,99,235,0.35);border-radius:50%;animation:greenCentreHalo 2s infinite ease-out;"></div>
            <div style="width:16px;height:16px;background:#2563EB;border:3px solid #ffffff;border-radius:50%;box-shadow:0 2px 8px rgba(37,99,235,0.5);position:relative;z-index:2;"></div>
          </div>`;
        const pinIcon = L.divIcon({ className: '', html: pinHtml, iconSize: [24, 24], iconAnchor: [12, 12] });
        const marker = L.marker([centre.lat, centre.lon], { icon: pinIcon })
          .bindPopup(
            `<div style="font:800 13px/1.3 system-ui,sans-serif;color:#0f172a">${centre.name}</div>` +
            `<div style="font:11px/1.4 monospace;color:#64748b;margin-top:3px">${centre.lat.toFixed(5)}, ${centre.lon.toFixed(5)}</div>` +
            (centre.accuracyM ? `<div style="font-size:11px;color:#2563eb;margin-top:2px">GPS accuracy: ±${Math.round(centre.accuracyM)} m</div>` : '')
          )
          .addTo(map);
        centreMarkerRef.current = marker;

        if (centre.source === 'geolocation' && centre.accuracyM) {
          const acc = L.circle([centre.lat, centre.lon], {
            radius: centre.accuracyM,
            color: '#2563EB',
            fillColor: '#93C5FD',
            fillOpacity: 0.15,
            weight: 1,
          }).addTo(map);
          geoCircleRef.current = acc;
        }
      }
    });
  }, [centre, filters.radiusM, hasChosenCentre, mapReady]);

  // ── 4. 100-Metre Hexagonal Grid Overlay ────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    if (hexLayerRef.current) {
      try { hexLayerRef.current.remove(); } catch (_) {}
      hexLayerRef.current = null;
    }

    if (!filters.layerVisibility.hexGrid) return;
    // The grid is a Mumbai-coverage analysis layer, so it only makes sense in
    // focus mode (a centre inside the city). A visitor elsewhere keeps the
    // city-wide view without a stray grid anchored on their own coordinates.
    if (!hasChosenCentre) return;
    // Only render hex grid at zoom >= 13 to avoid overwhelming the full-city view
    if (zoomLevel < 13) return;

    import('leaflet').then((L) => {
      if (!mapRef.current) return;

      // Focused analysis area around current centre or island
      const minLon = centre.lon - 0.045;
      const minLat = centre.lat - 0.040;
      const maxLon = centre.lon + 0.045;
      const maxLat = centre.lat + 0.040;

      const hexData = generate100mHexGrid(
        [minLon, minLat, maxLon, maxLat],
        spaces,
        'PARALLEL_SIDES_100M'
      );

      const geoJsonLayer = L.geoJSON(hexData as any, {
        pane: 'hexPane',
        style: (feature) => {
          const m = feature?.properties as HexCellMetric;
          const isSelected = m?.hexId === selectedHexId;
          const pct = m?.greenCoveragePercent ?? 0;

          let fillColor = 'transparent';
          let fillOpacity = 0;
          let strokeColor = '#94a3b8';
          let weight = 0.7;
          let dashArray: string | undefined = '2 2';

          if (pct >= 40) {
            fillColor = '#15803d'; // dark green
            fillOpacity = 0.38;
            strokeColor = '#166534';
            weight = 1.2;
            dashArray = undefined;
          } else if (pct >= 15) {
            fillColor = '#65a30d'; // medium green
            fillOpacity = 0.28;
            strokeColor = '#4d7c0f';
            weight = 1.0;
            dashArray = undefined;
          } else if (pct > 0) {
            fillColor = '#f59e0b'; // light green/yellow
            fillOpacity = 0.22;
            strokeColor = '#d97706';
            weight = 0.9;
            dashArray = undefined;
          }

          if (isSelected) {
            fillColor = '#0284c7';
            fillOpacity = 0.45;
            strokeColor = '#0369a1';
            weight = 2.5;
            dashArray = undefined;
          }

          return {
            color: strokeColor,
            fillColor,
            fillOpacity,
            weight,
            dashArray,
          };
        },
        onEachFeature: (feature, layer) => {
          const m = feature.properties as HexCellMetric;
          layer.bindTooltip(
            `<div style="font:800 11px system-ui;color:#0f172a">100m Cell: ${m.hexId}</div>` +
            `<div style="font:600 10px system-ui;color:#16a34a">${m.greenCoveragePercent}% green cover (${m.intersectingAreaM2.toLocaleString()} m²)</div>` +
            `<div style="font:500 10px monospace;color:#64748b">NDVI mean: ${m.ndviMean ?? 'N/A'}</div>`,
            { sticky: true, opacity: 0.95 }
          );

          layer.on('click', () => {
            if (onSelectHex) onSelectHex(m);
          });
        },
      }).addTo(map);

      hexLayerRef.current = geoJsonLayer;
    });
  }, [
    centre,
    spaces,
    filters.layerVisibility.hexGrid,
    hasChosenCentre,
    zoomLevel,
    selectedHexId,
    mapReady,
    onSelectHex,
  ]);

  // ── 5. All 27 BMC Wardwise Nurseries ──────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    nurseryLayerRef.current.forEach((l) => { try { l.remove(); } catch (_) {} });
    nurseryLayerRef.current = [];

    if (!filters.layerVisibility.nurseries) return;

    import('leaflet').then((L) => {
      if (!mapRef.current) return;

      let list = BMC_NURSERIES;
      if (filters.nurseryWard && filters.nurseryWard !== 'ALL') {
        list = list.filter((n) => n.ward.toUpperCase() === filters.nurseryWard!.toUpperCase());
      }

      list.forEach((nursery) => {
        const isSelected = nursery.id === selectedNurseryId;
        const size = isSelected ? 28 : 22;  // Smaller, less obtrusive markers
        const bg = '#d97706';

        const markerHtml = `
          <div style="
            width:${size}px;
            height:${size}px;
            border-radius:50%;
            background:${bg};
            border:${isSelected ? '4px' : '2.5px'} solid #ffffff;
            box-shadow:0 3px 12px rgba(217,119,6,0.45);
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            transition:transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
            ${isSelected ? 'transform:scale(1.2);' : ''}
          " onmouseover="this.style.transform='scale(1.2)'" onmouseout="if(!${isSelected})this.style.transform='scale(1)'">
            ${NURSERY_SPROUT_SVG}
          </div>`;

        const icon = L.divIcon({
          className: '',
          html: markerHtml,
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });

        const popupHtml = `
          <div style="min-width:220px;font-family:system-ui,sans-serif">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
              <span style="font:800 10px system-ui;background:#fef3c7;color:#92400e;padding:2px 6px;border-radius:6px">BMC Ward ${nursery.ward}</span>
              <span style="font:700 9px system-ui;color:${nursery.verificationStatus === 'VERIFIED' ? '#15803d' : '#b45309'}">
                ${nursery.verificationStatus === 'VERIFIED' ? '✓ Handbook Verified' : '⚠️ Location Needs Check'}
              </span>
            </div>
            <div style="font:900 13px/1.3 system-ui;color:#0f172a;margin-bottom:3px">${nursery.name}</div>
            <div style="font:500 10.5px/1.4 system-ui;color:#475569;margin-bottom:6px">${nursery.sourceAddress}</div>
            <div style="font:600 10px system-ui;color:#059669;margin-bottom:8px">🌱 Plants: ${nursery.speciesAvailable.slice(0, 3).join(', ')}</div>
            <button onclick="window._nurserySelectClick&&window._nurserySelectClick('${nursery.id}')"
              style="width:100%;padding:6px 10px;background:#d97706;color:#ffffff;border:none;border-radius:8px;font:800 11px system-ui;cursor:pointer">
              Inspect Nursery in Sidebar →
            </button>
          </div>`;

        const mkr = L.marker([nursery.latitude, nursery.longitude], { icon })
          .bindPopup(popupHtml, { maxWidth: 260 })
          .on('click', () => {
            if (onSelectNursery) onSelectNursery(nursery);
          })
          .addTo(map);

        nurseryLayerRef.current.push(mkr);
      });
    });
  }, [filters.layerVisibility.nurseries, filters.nurseryWard, selectedNurseryId, mapReady, onSelectNursery]);

  // ── 6. Green Spaces Polygons & Markers ────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    spaceLayersRef.current.forEach((l) => { try { l.remove(); } catch (_) {} });
    spaceLayersRef.current = [];

    if (!filters.layerVisibility.greenSpaces) return;

    import('leaflet').then((L) => {
      if (!mapRef.current) return;

      const isNdviActive = Boolean(
        filters.layerVisibility.ndvi &&
        tiles?.observationStart &&
        tiles?.observationEnd &&
        tiles.layers &&
        tiles.layers.length > 0
      );

      spaces.forEach((space) => {
        const isSelected = space.id === selectedSpaceId;
        const isWalkable = space.walkClass === 'WALKABLE_VERIFIED';
        const isPublic = space.accessStatus === 'PUBLIC_TAGGED';
        const ha = (space.areaM2 ? space.areaM2 / 10000 : 0) || (space.areaHectares ?? 0);
        const nameLower = (space.name || '').toLowerCase();

        const isBigOrReserve =
          ha >= 20 ||
          space.category === 'Nature Reserve' ||
          space.category === 'National Park' ||
          nameLower.includes('sanjay gandhi') ||
          nameLower.includes('sgnp') ||
          nameLower.includes('aarey') ||
          nameLower.includes('mahim') ||
          nameLower.includes('hanging garden');

        let showMarker = false;
        if (isSelected) {
          showMarker = true;
        } else if (zoomLevel <= 12) {
          showMarker = isBigOrReserve;
        } else if (zoomLevel <= 14) {
          showMarker = ha >= 2 || isBigOrReserve;
        } else {
          showMarker = true;
        }

        // OSM Green Space boundary — drawn ONLY for the selected feature.
        // Rendering every park outline produced a map covered in blue dashed
        // boxes; parks remain discoverable via their markers, and the boundary
        // appears as soon as a space is selected.
        if (isSelected && space.geometry && (space.geometry.type === 'Polygon' || space.geometry.type === 'MultiPolygon')) {
          try {
            const ndviClass = space.ndvi?.densityClass;
            const ndviMean = space.ndvi?.mean;
            const isPublic = space.accessStatus === 'PUBLIC_TAGGED';

            let strokeColor = '#4d7c0f';
            let strokeWidth = 1.5;
            let strokeOpacity = 0.6;
            let dashArray: string | undefined = undefined;

            if (isPublic && !isSelected) {
              strokeColor = '#2563EB';
              strokeWidth = 1.8;
              dashArray = '4 3';
              strokeOpacity = 0.7;
            }

            if (isSelected) {
              strokeColor = '#1D4ED8';
              strokeWidth = 3;
              strokeOpacity = 0.9;
              dashArray = undefined;
            }

            const areaHa = space.areaM2 ? (space.areaM2 / 10000).toFixed(1) : null;
            const ndviDisplay = ndviMean !== null && ndviMean !== undefined ? ndviMean.toFixed(2) : null;

            const poly = L.geoJSON(space.geometry as any, {
              pane: 'ndviPane',
              style: {
                color: strokeColor,
                opacity: strokeOpacity,
                weight: strokeWidth,
                dashArray,
                fillOpacity: 0,
              },
            })
              .bindTooltip(
                `<div style="font-family:system-ui,sans-serif;padding:2px 0;">
                  <div style="font-weight:800;font-size:12px;color:#0f172a;line-height:1.2;">${space.name || space.category}</div>
                  <div style="display:flex;align-items:center;gap:6px;margin-top:3px;font-size:10px;color:#475569;">
                    <span style="font-weight:700;color:#16a34a;">${space.category}</span>
                    ${areaHa ? `<span>· ${areaHa} ha</span>` : ''}
                  </div>
                  ${ndviDisplay ? `
                    <div style="margin-top:3px;font-size:10px;font-weight:700;color:${ndviMean! >= 0.55 ? '#15803d' : ndviMean! >= 0.25 ? '#65a30d' : '#d97706'};">
                      NDVI: ${ndviDisplay} (${ndviClass === 'HIGH' ? 'High Vegetation' : ndviClass === 'MEDIUM' ? 'Medium Vegetation' : 'Low Vegetation'})
                    </div>
                  ` : ''}
                  <div style="margin-top:2px;font-size:9.5px;color:${isWalkable ? '#2563eb' : '#64748b'};">
                    ${isWalkable ? '✓ Walkable & Verified' : 'Mapped Urban Canopy'}
                  </div>
                </div>`,
                { sticky: true, opacity: 0.95 }
              )
              .on('click', () => onSpaceClick(space.id))
              .addTo(map);

            spaceLayersRef.current.push(poly);
          } catch (_) {}
        }

        // Marker Badges
        if (showMarker) {
          const fillBg = isWalkable ? '#2563EB' : '#1F6B3A';
          const svgIcon = isWalkable ? WALKER_SVG : TREE_SVG;
          const badgeSize = isSelected ? 30 : 24;  // Smaller, less obtrusive markers
          const borderWidth = isSelected ? '3px' : '2px';

          const markerHtml = `
            <div class="green-marker-badge" style="
              width:${badgeSize}px;
              height:${badgeSize}px;
              border-radius:50%;
              background:${fillBg};
              box-shadow:0 0 0 ${borderWidth} #ffffff, 0 3px 10px rgba(0,0,0,0.22);
              display:flex;
              align-items:center;
              justify-content:center;
              cursor:pointer;
              transition:transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
              ${isSelected ? 'transform:scale(1.15); animation:greenBadgePulse 2s infinite ease-in-out;' : ''}
            " onmouseover="if(!${isSelected})this.style.transform='scale(1.15)'" onmouseout="if(!${isSelected})this.style.transform='scale(1)'">
              ${svgIcon}
            </div>`;

          const icon = L.divIcon({
            className: '',
            html: markerHtml,
            iconSize: [badgeSize, badgeSize],
            iconAnchor: [badgeSize / 2, badgeSize / 2],
          });

          const wMin = space.walkMinutes ?? Math.round(space.distanceM / 80);
          const walkLabel = space.walkMinutesEstimated !== false ? `~${wMin} min (est.)` : `${wMin} min walk`;

          const popupHtml =
            `<div style="min-width:190px;font-family:system-ui,sans-serif">` +
            `<div style="font:900 13px/1.3 system-ui;color:#0f172a;margin-bottom:4px">${space.name || 'Unnamed'}</div>` +
            `<div style="font:600 11px/1 system-ui;color:${isWalkable ? '#2563eb' : '#1f6b3a'};margin-bottom:3px">${space.category} · ${isWalkable ? '✓ Walkable' : 'Green space'}</div>` +
            `<div style="font-size:11px;color:#64748b;margin-bottom:7px">${(space.distanceM / 1000).toFixed(2)} km · ${walkLabel}</div>` +
            `<button onclick="window._greenSpaceClick&&window._greenSpaceClick('${space.id}')" ` +
            `style="width:100%;padding:7px 12px;background:${fillBg};color:#fff;border:none;border-radius:8px;` +
            `font:800 11px/1 system-ui;cursor:pointer;letter-spacing:.03em">View Details →</button>` +
            `</div>`;

          const mkr = L.marker([space.centroid.lat, space.centroid.lon], { icon })
            .bindPopup(popupHtml, { maxWidth: 230 })
            .on('click', () => onSpaceClick(space.id))
            .addTo(map);

          spaceLayersRef.current.push(mkr);
        }
      });
    });
  }, [
    spaces,
    selectedSpaceId,
    mapReady,
    zoomLevel,
    tiles,
    filters.layerVisibility.greenSpaces,
    filters.layerVisibility.ndvi,
    onSpaceClick,
  ]);

  return (
    <div className="w-full h-full relative">
      <style>{`
        @keyframes greenCentreHalo {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0;   }
        }
        @keyframes greenBadgePulse {
          0%, 100% { box-shadow: 0 0 0 4px #ffffff, 0 4px 14px rgba(0,0,0,0.25); }
          50%      { box-shadow: 0 0 0 4px #ffffff, 0 0 0 8px rgba(37,99,235,0.45), 0 6px 20px rgba(0,0,0,0.3); }
        }
      `}</style>

      {/* Leaflet container */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Floating Layer Controls (Top-right) */}
      <MapLayerControl
        layerVisibility={filters.layerVisibility}
        onToggleLayer={onToggleLayerVisibility}
        onSetBasemap={onSetBasemap}
      />

      {/* Bottom-left Controls Stack (Zoom + / -, Locate-Me, Scale Bar) */}
      <div className="absolute bottom-4 left-4 z-[1000] flex flex-col gap-2.5">
        <div className="flex flex-col gap-1.5">
          <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.12)] border border-slate-200/90 overflow-hidden flex flex-col w-9">
            <button
              onClick={handleZoomIn}
              className="w-9 h-9 flex items-center justify-center text-slate-700 hover:bg-slate-50 font-bold transition focus:outline-none"
              title="Zoom In"
              aria-label="Zoom in"
            >
              <Plus className="w-4 h-4" />
            </button>
            <div className="border-t border-slate-100" />
            <button
              onClick={handleZoomOut}
              className="w-9 h-9 flex items-center justify-center text-slate-700 hover:bg-slate-50 font-bold transition focus:outline-none"
              title="Zoom Out"
              aria-label="Zoom out"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onLocateMe}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:bg-blue-50 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all focus:outline-none"
            title="Use my GPS location"
            aria-label="Find my current location"
          >
            <Locate className="w-4 h-4" />
          </button>
        </div>

        {/* Scale Bar */}
        <div className="bg-white/90 backdrop-blur-xs px-2 py-1 rounded-lg border border-slate-200/80 shadow-xs select-none pointer-events-none w-32">
          <div className="flex justify-between text-[9.5px] font-bold text-slate-700 w-full px-0.5 mb-0.5">
            <span>0</span>
            <span>2.5</span>
            <span>5 km</span>
          </div>
          <div className="h-1.5 border-l-2 border-r-2 border-b-2 border-slate-700 w-full relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 -translate-x-1/2" />
          </div>
        </div>
      </div>

      {/* Geolocation Loading Indicator */}
      {geoLoading && (
        <div className="absolute top-16 left-4 z-[1000] bg-white/95 backdrop-blur-md border border-blue-200 text-blue-900 text-xs px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
          <Locate className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="font-semibold">Detecting your location in Mumbai…</span>
        </div>
      )}

      {/* Geolocation Notice / Outside Diameter Alert Toast */}
      {geoNotice && (
        <div
          className={`absolute top-16 left-4 z-[1000] text-xs px-3.5 py-2.5 rounded-2xl shadow-xl flex items-start gap-2.5 max-w-sm border backdrop-blur-md transition-all ${
            geoNotice.type === 'OUTSIDE_MUMBAI'
              ? 'bg-amber-600/95 text-white border-amber-500 shadow-amber-900/20'
              : geoNotice.type === 'INSIDE_MUMBAI'
              ? 'bg-emerald-600/95 text-white border-emerald-500 shadow-emerald-900/20'
              : 'bg-slate-800/95 text-white border-slate-700'
          }`}
        >
          <span className="text-base shrink-0 mt-0.5">
            {geoNotice.type === 'OUTSIDE_MUMBAI' ? '⚠️' : geoNotice.type === 'INSIDE_MUMBAI' ? '📍' : 'ℹ️'}
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-bold leading-tight">
              {geoNotice.type === 'OUTSIDE_MUMBAI'
                ? 'Outside Coverage Diameter'
                : geoNotice.type === 'INSIDE_MUMBAI'
                ? 'Mumbai GPS Active'
                : 'Notice'}
            </p>
            <p className="text-[11px] opacity-90 mt-0.5 leading-snug">{geoNotice.message}</p>
          </div>
          {onDismissGeoNotice && (
            <button
              onClick={onDismissGeoNotice}
              className="p-1 hover:bg-white/20 rounded-lg text-white shrink-0 -mr-1"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* NDVI unavailable honest state */}
      {ndviUnavailable && filters.layerVisibility.ndvi && (
        <div className="absolute top-16 left-4 z-[1000] bg-slate-800/90 backdrop-blur-sm text-white text-[11px] px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 max-w-[240px] border border-slate-700">
          <span className="text-base leading-none">🛰️</span>
          <div>
            <div className="font-bold leading-tight">Satellite NDVI</div>
            <div className="text-slate-300 font-medium leading-tight mt-0.5">
              Real tiles loading — enable NDVI in layers panel once ready
            </div>
          </div>
        </div>
      )}

      {/* Hex grid zoom hint — only show when grid is ON but zoom too low */}
      {filters.layerVisibility.hexGrid && zoomLevel < 13 && (
        <div className="absolute bottom-20 left-4 z-[1000] bg-white/90 backdrop-blur-sm text-slate-600 text-[10.5px] px-2.5 py-1.5 rounded-lg shadow border border-slate-200 flex items-center gap-1.5 select-none pointer-events-none">
          <span>⬡</span>
          <span>Zoom in (≥13) to see 100m hex grid</span>
        </div>
      )}
    </div>
  );
}
