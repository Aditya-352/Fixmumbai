'use client';

/**
 * GreenMap — Leaflet map for the Green Density Explorer.
 *
 * MUST be loaded with next/dynamic({ ssr: false }) to avoid SSR import of Leaflet.
 * Never edit MumbaiMap.tsx — this is a completely separate component.
 */

import React, { useEffect, useRef, useState } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import type {
  GreenSpaceSummary,
  TilesResponse,
  SearchCentre,
  ExplorerFilters,
} from '@/lib/green/types';
import {
  ACTIVE_CITY,
  DENSITY_META,
  BASEMAP_LIGHT_URL,
  BASEMAP_SAT_URL,
} from '@/lib/green/config';
import { Locate } from 'lucide-react';

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
  const lightBaseLayerRef = useRef<any>(null);
  const satLayerRef = useRef<any>(null);
  const spaceLayersRef = useRef<any[]>([]);
  const centreMarkerRef = useRef<any>(null);
  const radiusCircleRef = useRef<any>(null);
  const geoCircleRef = useRef<any>(null);

  const [basemap, setBasemap] = useState<'light' | 'satellite'>('light');
  const [mapReady, setMapReady] = useState(false);

  // Expose global click handler for popup buttons
  useEffect(() => {
    (window as any)._greenSpaceClick = (id: string) => {
      onSpaceClick(id);
    };
    return () => {
      delete (window as any)._greenSpaceClick;
    };
  }, [onSpaceClick]);

  // ── Initialise map once (Optimized tile buffering & smooth panning) ──
  useEffect(() => {
    let isCancelled = false;
    const container = mapContainerRef.current;
    if (!container) return;

    import('leaflet').then((L) => {
      if (isCancelled) return;

      // Safely cleanup existing leaflet map instance on this container
      if (mapRef.current) {
        try {
          mapRef.current.remove();
        } catch (_) {}
        mapRef.current = null;
      }
      if ((container as any)._leaflet_id) {
        delete (container as any)._leaflet_id;
      }

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(container, {
        center: [centre.lat, centre.lon],
        zoom: ACTIVE_CITY.defaultZoom,
        zoomControl: false,
        attributionControl: true,
        preferCanvas: true,
      });

      // Attribution
      map.attributionControl.setPrefix(
        '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
      );

      // Fast, lightweight Esri World Light Gray Base Layer with keepBuffer for snappy pan/zoom
      const lightBase = L.tileLayer(BASEMAP_LIGHT_URL, {
        attribution: 'Tiles © Esri',
        maxZoom: 19,
        keepBuffer: 8,
        updateWhenIdle: false,
        updateWhenZooming: true,
      }).addTo(map);
      lightBaseLayerRef.current = lightBase;

      // Fast Esri World Imagery (Satellite)
      satLayerRef.current = L.tileLayer(BASEMAP_SAT_URL, {
        attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics',
        maxZoom: 19,
        keepBuffer: 8,
        updateWhenIdle: false,
        updateWhenZooming: true,
      });

      // Zoom control at bottom-left
      L.control.zoom({ position: 'bottomleft' }).addTo(map);

      // Scale bar
      L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);

      mapRef.current = map;
      setMapReady(true);

      setTimeout(() => {
        if (!isCancelled && mapRef.current) {
          mapRef.current.invalidateSize();
        }
      }, 200);
    });

    return () => {
      isCancelled = true;
      if (mapRef.current) {
        try {
          mapRef.current.remove();
        } catch (_) {}
        mapRef.current = null;
      }
      if (container && (container as any)._leaflet_id) {
        delete (container as any)._leaflet_id;
      }
      setMapReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Instant Basemap toggle ────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || !lightBaseLayerRef.current || !satLayerRef.current) return;

    if (basemap === 'satellite') {
      if (!map.hasLayer(satLayerRef.current)) map.addLayer(satLayerRef.current);
      if (map.hasLayer(lightBaseLayerRef.current)) map.removeLayer(lightBaseLayerRef.current);
    } else {
      if (!map.hasLayer(lightBaseLayerRef.current)) map.addLayer(lightBaseLayerRef.current);
      if (map.hasLayer(satLayerRef.current)) map.removeLayer(satLayerRef.current);
    }
  }, [basemap, mapReady]);

  // ── Centre pin + radius circle ───────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    import('leaflet').then((L) => {
      if (!mapRef.current) return;

      if (centreMarkerRef.current) centreMarkerRef.current.remove();
      if (radiusCircleRef.current) radiusCircleRef.current.remove();
      if (geoCircleRef.current) geoCircleRef.current.remove();

      // Search centre pin
      const pinIcon = L.divIcon({
        className: '',
        html: `<div style="width:16px;height:16px;background:#2563eb;border:3px solid #ffffff;border-radius:50%;box-shadow:0 2px 10px rgba(0,0,0,0.45)"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      const marker = L.marker([centre.lat, centre.lon], { icon: pinIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-size:12px;font-weight:800;color:#0f172a">${centre.name}</div>` +
          `<div style="font-size:11px;color:#64748b;font-mono:true;margin-top:2px">${centre.lat.toFixed(5)}, ${centre.lon.toFixed(5)}</div>` +
          (centre.accuracyM ? `<div style="font-size:11px;color:#2563eb;margin-top:2px">Accuracy: ±${Math.round(centre.accuracyM)} m</div>` : '')
        );
      centreMarkerRef.current = marker;

      // Radius circle
      const circle = L.circle([centre.lat, centre.lon], {
        radius: filters.radiusM,
        color: '#2563eb',
        fillColor: '#3b82f6',
        fillOpacity: 0.04,
        weight: 1.5,
        dashArray: '6 4',
      }).addTo(map);
      radiusCircleRef.current = circle;

      // Accuracy circle for geolocation
      if (centre.source === 'geolocation' && centre.accuracyM) {
        const acc = L.circle([centre.lat, centre.lon], {
          radius: centre.accuracyM,
          color: '#2563eb',
          fillColor: '#93c5fd',
          fillOpacity: 0.15,
          weight: 1,
        }).addTo(map);
        geoCircleRef.current = acc;
      }

      map.flyTo([centre.lat, centre.lon], map.getZoom(), { duration: 0.8 });
    });
  }, [centre, filters.radiusM, mapReady]);

  // ── Green space polygons and markers ─────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    import('leaflet').then((L) => {
      if (!mapRef.current) return;

      spaceLayersRef.current.forEach((l) => l.remove());
      spaceLayersRef.current = [];

      spaces.forEach((space) => {
        const isSelected = space.id === selectedSpaceId;
        const isWalkable = space.walkClass === 'WALKABLE_VERIFIED';
        const densityColour = DENSITY_META[space.ndvi?.densityClass ?? 'UNAVAILABLE'].colour;

        // 1. Draw polygon boundary
        if (space.geometry) {
          try {
            const isPublicTagged = space.accessStatus === 'PUBLIC_TAGGED';
            const poly = L.geoJSON(space.geometry as any, {
              style: {
                color: isSelected ? '#2563eb' : isPublicTagged ? '#3b82f6' : '#16a34a',
                fillColor: densityColour !== '#94a3b8' ? densityColour : '#22c55e',
                fillOpacity: isSelected ? 0.45 : 0.25,
                weight: isSelected ? 3 : 2,
                dashArray: isPublicTagged ? '5 4' : undefined,
              },
            })
              .on('click', () => onSpaceClick(space.id))
              .addTo(map);
            spaceLayersRef.current.push(poly);
          } catch (_) {
            // invalid geometry
          }
        }

        // 2. Custom Marker at centroid
        const markerBg = isSelected ? '#1d4ed8' : isWalkable ? '#15803d' : '#166534';
        const markerEmoji = isWalkable ? '🚶' : '🌳';
        const markerHtml = `<div style="background:${markerBg};width:30px;height:30px;border-radius:50%;border:2.5px solid #ffffff;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 10px rgba(0,0,0,0.35);font-size:15px;cursor:pointer;transition:transform 0.15s">${markerEmoji}</div>`;

        const icon = L.divIcon({
          className: '',
          html: markerHtml,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });

        const mkr = L.marker([space.centroid.lat, space.centroid.lon], { icon })
          .bindPopup(
            `<div style="min-width:180px;font-family:inherit">` +
            `<div style="font-weight:900;font-size:13px;color:#0f172a;line-height:1.2;margin-bottom:4px">${space.name || 'Unnamed green space'}</div>` +
            `<div style="font-size:11px;font-weight:600;color:#16a34a;margin-bottom:2px">${space.category} · ${isWalkable ? 'Walkable' : 'Green Space'}</div>` +
            `<div style="font-size:11px;color:#64748b">${(space.distanceM / 1000).toFixed(2)} km straight-line · ~${space.walkMinutes ?? Math.round(space.distanceM / 80)} min walk</div>` +
            `<button onclick="window._greenSpaceClick&&window._greenSpaceClick('${space.id}')" ` +
            `style="margin-top:8px;width:100%;padding:6px 12px;background:#15803d;color:#ffffff;border:none;border-radius:8px;font-size:11px;font-weight:800;cursor:pointer">View Ground Details</button>` +
            `</div>`
          )
          .on('click', () => onSpaceClick(space.id))
          .addTo(map);
        spaceLayersRef.current.push(mkr);
      });
    });
  }, [spaces, selectedSpaceId, mapReady, onSpaceClick]);

  return (
    <div className="w-full h-full relative">
      <div ref={mapContainerRef} className="w-full h-full bg-slate-100" />

      {/* Locate Me button (positioned at bottom-left above zoom controls) */}
      <div className="absolute bottom-24 left-3 z-[1000] flex flex-col gap-1.5">
        <button
          onClick={onLocateMe}
          className="w-8 h-8 rounded-lg bg-white border border-slate-300 shadow-md hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-blue-600 transition"
          title="Locate me (GPS)"
          aria-label="Find my current location"
        >
          <Locate className="w-4 h-4" />
        </button>
      </div>

      {/* Basemap Switcher (bottom-left) */}
      <div className="absolute bottom-4 left-24 z-[1000] bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-1 shadow-md flex gap-1">
        <button
          onClick={() => setBasemap('light')}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
            basemap === 'light'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Map
        </button>
        <button
          onClick={() => setBasemap('satellite')}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
            basemap === 'satellite'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Satellite
        </button>
      </div>

      {/* Geolocation error toast */}
      {geoError && (
        <div className="absolute top-16 left-3 z-[1000] bg-amber-50 border border-amber-300 text-amber-800 text-xs px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 max-w-xs">
          <span>⚠️</span>
          <span>{geoError}</span>
        </div>
      )}
    </div>
  );
}
