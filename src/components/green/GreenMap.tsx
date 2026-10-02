'use client';

/**
 * GreenMap — Leaflet map for the Green Density Explorer.
 *
 * MUST be loaded with next/dynamic({ ssr: false }) to avoid SSR import of Leaflet.
 * Never edit MumbaiMap.tsx — this is a completely separate component.
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import type {
  GreenSpaceSummary,
  TilesResponse,
  SearchCentre,
  ExplorerFilters,
} from '@/lib/green/types';
import { ACTIVE_CITY, DENSITY_META, BASEMAP_LIGHT_URL, BASEMAP_SAT_URL } from '@/lib/green/config';

interface GreenMapProps {
  centre: SearchCentre;
  spaces: GreenSpaceSummary[];
  filters: ExplorerFilters;
  tiles: TilesResponse | null;
  onSpaceClick: (id: string) => void;
  selectedSpaceId?: string | null;
  onLocateMe: () => void;
  geoError?: string | null;
}

export default function GreenMap({
  centre,
  spaces,
  filters,
  tiles,
  onSpaceClick,
  selectedSpaceId,
  onLocateMe,
  geoError,
}: GreenMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const tileLayerRef = useRef<any>(null);
  const satLayerRef = useRef<any>(null);
  const ndviLayersRef = useRef<Record<string, any>>({});
  const spaceLayersRef = useRef<any[]>([]);
  const centreMarkerRef = useRef<any>(null);
  const radiusCircleRef = useRef<any>(null);
  const geoCircleRef = useRef<any>(null);

  const [basemap, setBasemap] = useState<'light' | 'satellite'>('light');
  const [mapReady, setMapReady] = useState(false);

  // ── Initialise map once ──────────────────────────────────────────────────
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Dynamic import of Leaflet (safe — this component is always ssr:false)
    import('leaflet').then((L) => {
      // Fix default icon path broken by webpack
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(mapContainerRef.current!, {
        center: [centre.lat, centre.lon],
        zoom: ACTIVE_CITY.defaultZoom,
        zoomControl: false,
        attributionControl: true,
      });

      // Attribution
      map.attributionControl.setPrefix(
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors (ODbL)'
      );

      // Light basemap (CARTO Positron)
      const lightLayer = L.tileLayer(BASEMAP_LIGHT_URL, {
        attribution:
          '© <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);
      tileLayerRef.current = lightLayer;

      // Satellite basemap (Esri World Imagery) — not added yet
      satLayerRef.current = L.tileLayer(BASEMAP_SAT_URL, {
        attribution:
          'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 19,
      });

      // Zoom control (top-right)
      L.control.zoom({ position: 'topright' }).addTo(map);

      // Scale bar
      L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);

      mapRef.current = map;
      setMapReady(true);

      // Force correct size after layout paint
      setTimeout(() => map.invalidateSize(), 200);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        setMapReady(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Basemap toggle ───────────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !tileLayerRef.current || !satLayerRef.current) return;

    if (basemap === 'satellite') {
      if (!map.hasLayer(satLayerRef.current)) map.addLayer(satLayerRef.current);
      if (map.hasLayer(tileLayerRef.current)) map.removeLayer(tileLayerRef.current);
    } else {
      if (!map.hasLayer(tileLayerRef.current)) map.addLayer(tileLayerRef.current);
      if (map.hasLayer(satLayerRef.current)) map.removeLayer(satLayerRef.current);
    }
  }, [basemap]);

  // ── Centre pin + radius circle ───────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    import('leaflet').then((L) => {
      // Remove old markers
      if (centreMarkerRef.current) centreMarkerRef.current.remove();
      if (radiusCircleRef.current) radiusCircleRef.current.remove();
      if (geoCircleRef.current) geoCircleRef.current.remove();

      // Search centre pin
      const pinIcon = L.divIcon({
        className: '',
        html: `<div style="width:14px;height:14px;background:#1d4ed8;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.4)"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      const marker = L.marker([centre.lat, centre.lon], { icon: pinIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-size:12px;font-weight:700">${centre.name}</div>` +
          `<div style="font-size:11px;color:#64748b">${centre.lat.toFixed(5)}, ${centre.lon.toFixed(5)}</div>` +
          (centre.accuracyM ? `<div style="font-size:11px;color:#64748b">±${Math.round(centre.accuracyM)} m</div>` : '')
        );
      centreMarkerRef.current = marker;

      // Radius circle
      const circle = L.circle([centre.lat, centre.lon], {
        radius: filters.radiusM,
        color: '#1d4ed8',
        fillColor: '#1d4ed8',
        fillOpacity: 0.05,
        weight: 1.5,
        dashArray: '6 4',
      }).addTo(map);
      radiusCircleRef.current = circle;

      // Accuracy circle for geolocation
      if (centre.source === 'geolocation' && centre.accuracyM) {
        const acc = L.circle([centre.lat, centre.lon], {
          radius: centre.accuracyM,
          color: '#1d4ed8',
          fillColor: '#93c5fd',
          fillOpacity: 0.15,
          weight: 1,
        }).addTo(map);
        geoCircleRef.current = acc;
      }

      // Fly to new centre
      map.flyTo([centre.lat, centre.lon], map.getZoom(), { duration: 1 });
    });
  }, [centre, filters.radiusM, mapReady]);

  // ── Green space polygons and markers ─────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    import('leaflet').then((L) => {
      // Remove old space layers
      spaceLayersRef.current.forEach((l) => l.remove());
      spaceLayersRef.current = [];

      spaces.forEach((space) => {
        const isSelected = space.id === selectedSpaceId;
        const densityColour = DENSITY_META[space.ndvi?.densityClass ?? 'UNAVAILABLE'].colour;

        // Draw polygon if geometry exists
        if (space.geometry) {
          try {
            const poly = L.geoJSON(space.geometry as any, {
              style: {
                color: isSelected ? '#1d4ed8' : '#16a34a',
                fillColor: densityColour,
                fillOpacity: 0.3,
                weight: isSelected ? 2.5 : 1.5,
                dashArray: space.accessStatus === 'PUBLIC_TAGGED' ? undefined : '4 3',
              },
            })
              .on('click', () => onSpaceClick(space.id))
              .addTo(map);
            spaceLayersRef.current.push(poly);
          } catch (_) {
            // invalid geometry — skip
          }
        }

        // Marker at centroid
        const isWalkable = space.walkClass === 'WALKABLE_VERIFIED';
        const markerHtml = isWalkable
          ? `<div style="background:#1d4ed8;width:28px;height:28px;border-radius:50%;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3);font-size:14px">🚶</div>`
          : `<div style="background:#15803d;width:28px;height:28px;border-radius:50%;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3);font-size:14px">🌳</div>`;

        const icon = L.divIcon({
          className: '',
          html: markerHtml,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        const mkr = L.marker([space.centroid.lat, space.centroid.lon], { icon })
          .bindPopup(
            `<div style="min-width:160px">` +
            `<div style="font-weight:800;font-size:13px;margin-bottom:4px">${space.name || 'Unnamed green space'}</div>` +
            `<div style="font-size:11px;color:#64748b;margin-bottom:2px">${space.category}</div>` +
            `<div style="font-size:11px">${(space.distanceM / 1000).toFixed(2)} km away</div>` +
            `<button onclick="window._greenSpaceClick&&window._greenSpaceClick('${space.id}')" ` +
            `style="margin-top:8px;padding:4px 10px;background:#15803d;color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer">View details</button>` +
            `</div>`
          )
          .on('click', () => onSpaceClick(space.id))
          .addTo(map);
        spaceLayersRef.current.push(mkr);
      });
    });
  }, [spaces, selectedSpaceId, mapReady, onSpaceClick]);

  // ── NDVI tile layers ─────────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || !tiles) return;

    import('leaflet').then((L) => {
      // Remove old ndvi layers
      Object.values(ndviLayersRef.current).forEach((l: any) => l.remove());
      ndviLayersRef.current = {};

      tiles.layers.forEach((layer) => {
        const show = filters.ndviLayers[layer.densityClass as 'HIGH' | 'MEDIUM' | 'LOW'] ?? true;
        const tl = L.tileLayer(layer.urlTemplate, {
          opacity: layer.opacity,
          attribution: 'NDVI © Copernicus Sentinel-2 via Google Earth Engine',
        });
        if (show) tl.addTo(map);
        ndviLayersRef.current[layer.densityClass] = tl;
      });
    });
  }, [tiles, mapReady]);

  // ── Toggle NDVI layers when filter changes ───────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    (['HIGH', 'MEDIUM', 'LOW'] as const).forEach((cls) => {
      const layer = ndviLayersRef.current[cls];
      if (!layer) return;
      if (filters.ndviLayers[cls]) {
        if (!map.hasLayer(layer)) map.addLayer(layer);
      } else {
        if (map.hasLayer(layer)) map.removeLayer(layer);
      }
    });
  }, [filters.ndviLayers, mapReady]);

  // ── Expose click handler for popup buttons ───────────────────────────────
  useEffect(() => {
    (window as any)._greenSpaceClick = onSpaceClick;
    return () => { delete (window as any)._greenSpaceClick; };
  }, [onSpaceClick]);

  return (
    <div className="relative w-full h-full">
      {/* Map container — must have explicit height set by parent */}
      <div ref={mapContainerRef} className="w-full h-full" id="green-map-container" />

      {/* Basemap toggle — bottom-left above scale */}
      <div className="absolute bottom-12 left-3 z-[1000] flex rounded-lg overflow-hidden shadow-lg border border-slate-200">
        <button
          onClick={() => setBasemap('light')}
          className={`px-3 py-1.5 text-xs font-bold transition ${
            basemap === 'light' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'
          }`}
          aria-pressed={basemap === 'light'}
          aria-label="Switch to light map"
        >
          Map
        </button>
        <button
          onClick={() => setBasemap('satellite')}
          className={`px-3 py-1.5 text-xs font-bold transition ${
            basemap === 'satellite' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'
          }`}
          aria-pressed={basemap === 'satellite'}
          aria-label="Switch to satellite map"
        >
          Satellite
        </button>
      </div>

      {/* Locate-me button */}
      <button
        onClick={onLocateMe}
        className="absolute bottom-32 right-3 z-[1000] w-9 h-9 bg-white rounded-lg shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition"
        aria-label="Locate me"
        title="Use my location"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
        </svg>
      </button>

      {/* Geo error notice */}
      {geoError && (
        <div className="absolute top-16 left-3 right-3 z-[1000] bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800 font-medium shadow">
          {geoError}
        </div>
      )}
    </div>
  );
}
