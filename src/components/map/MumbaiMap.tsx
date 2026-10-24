'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { StatusBadge } from '../ui/Badge';
import {
  MapPin,
  Navigation,
  Calendar,
  ArrowRight,
  Wind,
  Plus,
  Minus,
  Crosshair,
  Compass,
  Layers,
  Leaf
} from 'lucide-react';

import wardsData from '@/data/mumbai-wards.json';
import { DEFAULT_CITY, type CityId } from '@/lib/green/config';
import {
  BASEMAP_LIGHT_URL,
  BASEMAP_LIGHT_REF_URL,
} from '@/lib/green/config';
import { withBasePath } from '@/lib/base-path';

export interface ReportMarker {
  id: string;
  publicReportId: string;
  locality: string;
  categoryName: string;
  status: string;
  latitude: number;
  longitude: number;
  createdAt?: string;
  photoUrl?: string;
  wardCode?: string;
  acNumber?: number;
}

interface MumbaiMapProps {
  reports: ReportMarker[];
  /** Map framing. Defaults to Mumbai; the dashboard passes the selected city's centre. */
  center?: [number, number];
  zoom?: number;
  height?: string;
  onMarkerSelect?: (report: ReportMarker) => void;
  selectedReportId?: string | null;
  /**
   * Whether to draw the municipal ward overlay. The ward register is
   * Mumbai's (BMC), so the dashboard turns this off for other cities rather
   * than drawing another city's wards on this city's map.
   */
  showWardMarkers?: boolean;
  /** Selected city id, so city-scoped links can carry it. */
  cityId?: CityId;
}

const SATELLITE_TILE_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

export default function MumbaiMap({
  reports,
  center = [19.0760, 72.8777],
  zoom = 11,
  height = '580px',
  onMarkerSelect,
  selectedReportId,
  showWardMarkers = true,
  cityId = DEFAULT_CITY.id
}: MumbaiMapProps) {
  const [mounted, setMounted] = useState(false);
  // The Green Density layer link opens the explorer for the selected city.
  const greenDensityHref =
    cityId === DEFAULT_CITY.id ? '/green' : `/green?city=${cityId}`;

  const [showWards, setShowWards] = useState(true);
  const [mapType, setMapType] = useState<'streets' | 'satellite'>('streets');
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [locating, setLocating] = useState(false);
  const [userCoord, setUserCoord] = useState<[number, number] | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Re-frame the map when the selected city changes. Leaflet's MapContainer
  // only honours `center` on mount, so the view has to be moved explicitly.
  useEffect(() => {
    if (mapInstance) {
      mapInstance.setView(center, zoom, { animate: true });
    }
  }, [center, zoom, mapInstance]);

  // When selectedReportId changes, smoothly pan to that marker if map is ready
  useEffect(() => {
    if (selectedReportId && mapInstance) {
      const target = reports.find(r => r.publicReportId === selectedReportId || r.id === selectedReportId);
      if (target) {
        mapInstance.flyTo([target.latitude, target.longitude], 14, { duration: 0.8 });
      }
    }
  }, [selectedReportId, mapInstance, reports]);

  if (!mounted) {
    return (
      <div
        className="w-full bg-slate-50 rounded-3xl flex items-center justify-center text-slate-500 border border-[#E2E8F0] shadow-sm"
        style={{ height }}
      >
        <div className="flex flex-col items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-[#EAF6EF] text-[#087F5B] flex items-center justify-center animate-bounce">
            <MapPin className="w-5 h-5 text-[#087F5B]" />
          </div>
          <span className="text-xs font-bold text-slate-700">Loading Mumbai Live Civic Map...</span>
        </div>
      </div>
    );
  }

  // Dynamic Leaflet imports on client
  const L = require('leaflet');
  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');

  // Custom visual marker states matching reference image pins
  const createCustomIcon = (status: string, isSelected: boolean) => {
    let color = '#EF2929'; // Red for Submitted / Reopened
    let symbol = 'R';
    if (status === 'IN_PROGRESS' || status === 'ASSIGNED' || status === 'ACKNOWLEDGED') {
      color = '#F59E0B'; // Amber for In Progress
      symbol = 'P';
    }
    if (status === 'VERIFIED' || status === 'RESOLUTION_SUBMITTED') {
      color = '#087F5B'; // Deep green for Resolved
      symbol = 'V';
    }

    const svgIcon = `
      <div style="
        background-color: ${color};
        width: ${isSelected ? '38px' : '32px'};
        height: ${isSelected ? '38px' : '32px'};
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2.5px solid #FFFFFF;
        box-shadow: 0 4px 12px rgba(0,0,0,0.28);
        transition: transform 0.2s;
      ">
        <span style="
          transform: rotate(45deg);
          color: #FFFFFF;
          font-weight: 900;
          font-size: ${isSelected ? '14px' : '12px'};
          font-family: system-ui, -apple-system, sans-serif;
          margin-top: 1px;
          margin-left: 1px;
        ">${symbol}</span>
      </div>
    `;

    return L.divIcon({
      className: 'custom-leaflet-marker',
      html: svgIcon,
      iconSize: [isSelected ? 38 : 32, isSelected ? 38 : 32],
      iconAnchor: [isSelected ? 19 : 16, isSelected ? 38 : 32],
      popupAnchor: [0, isSelected ? -38 : -32]
    });
  };

  // Ward Circular Badge Marker (Yellow / Red circles matching reference image)
  const createWardBadgeIcon = (wardCode: string, index: number) => {
    const isRed = index % 3 === 0 || wardCode.includes('K') || wardCode.includes('L');
    const isTeal = index % 5 === 0;
    const bgColor = isTeal ? '#087F5B' : isRed ? '#EF2929' : '#F59E0B';
    const textColor = '#FFFFFF';
    const label = wardCode.charAt(0);

    const html = `
      <div style="
        background-color: ${bgColor};
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        box-shadow: 0 3px 8px rgba(0,0,0,0.25);
        color: ${textColor};
        font-weight: 800;
        font-size: 11px;
        font-family: system-ui, sans-serif;
      ">
        ${label}
      </div>
    `;

    return L.divIcon({
      className: 'custom-ward-badge',
      html,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      popupAnchor: [0, -13]
    });
  };

  // Geolocation handler
  const handleLocateMe = () => {
    if (!navigator.geolocation || !mapInstance) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        const { latitude, longitude } = pos.coords;
        setUserCoord([latitude, longitude]);
        mapInstance.flyTo([latitude, longitude], 14, { duration: 1.2 });
      },
      (err) => {
        setLocating(false);
        console.warn('Geolocation failed:', err.message);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  // Recenter handler
  const handleRecenter = () => {
    if (!mapInstance) return;
    mapInstance.flyTo(center, zoom, { duration: 1 });
  };

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm pulse-map bg-slate-50"
      style={{ height }}
    >
      <style>{`
        .pulse-map .leaflet-control-attribution {
          font-size: 9px !important;
          line-height: 1.2 !important;
          padding: 2px 8px !important;
          background: rgba(255, 255, 255, 0.88) !important;
          backdrop-filter: blur(4px);
          border-radius: 8px 0 0 0;
          color: #64748B;
        }
        .pulse-map .leaflet-control-zoom {
          display: none !important;
        }
      `}</style>

      {/* ── Top Map Overlay Controls (Matching Reference Image) ── */}
      <div className="absolute top-3 right-3 z-[400] flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          onClick={() => setShowWards(!showWards)}
          aria-pressed={showWards}
          className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition flex items-center gap-1 shadow-xs active:scale-95 ${
            showWards
              ? 'bg-[#075B43] text-white shadow-xs'
              : 'bg-white/95 backdrop-blur text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Navigation className="w-3 h-3 rotate-45" />
          <span>Waste Aggregation Data</span>
        </button>

        <Link
          href="/air-quality"
          className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition flex items-center gap-1 bg-white/95 backdrop-blur text-slate-700 hover:text-[#087F5B] hover:bg-slate-50 border border-slate-200 shadow-xs"
        >
          <Wind className="w-3 h-3 text-slate-500" />
          <span>Show Air Quality</span>
        </Link>

        <Link
          href={greenDensityHref}
          className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition flex items-center gap-1 bg-white/95 backdrop-blur text-slate-700 hover:text-[#087F5B] hover:bg-slate-50 border border-slate-200 shadow-xs"
        >
          <Leaf className="w-3 h-3 text-[#087F5B]" />
          <span>Green Density</span>
        </Link>
      </div>

      {/* ── Left Map Zoom & Locate Controls (Matching Reference Image) ── */}
      <div className="absolute top-3 left-3 z-[400] flex flex-col gap-1.5">
        <div className="bg-white/95 backdrop-blur rounded-lg border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <button
            type="button"
            onClick={() => mapInstance?.zoomIn()}
            className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition border-b border-slate-100"
            aria-label="Zoom In"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
          <button
            type="button"
            onClick={() => mapInstance?.zoomOut()}
            className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition"
            aria-label="Zoom Out"
          >
            <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleLocateMe}
          disabled={locating}
          className="w-7 h-7 rounded-lg bg-white/95 backdrop-blur border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-[#087F5B] hover:bg-slate-100 transition"
          aria-label="Find my location"
          title="Locate my position"
        >
          <Compass className={`w-3.5 h-3.5 ${locating ? 'animate-spin text-[#087F5B]' : ''}`} />
        </button>
      </div>

      {/* ── Bottom Left Layer Switcher (Satellite / Streets) ── */}
      <div className="absolute bottom-4 left-3.5 z-[400]">
        <button
          type="button"
          onClick={() => setMapType(mapType === 'streets' ? 'satellite' : 'streets')}
          className="bg-white/95 backdrop-blur border border-slate-200 rounded-xl p-1 shadow-md flex items-center gap-2 pr-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition"
          title="Toggle map layers"
        >
          <div
            className="w-7 h-7 rounded-lg overflow-hidden bg-cover bg-center border border-slate-200 flex-shrink-0"
            style={{
              backgroundImage: mapType === 'streets'
                ? `url(${withBasePath('/images/satellite-thumb.jpg')})`
                : 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)'
            }}
          />
          <span className="capitalize">{mapType === 'streets' ? 'Satellite' : 'Streets'}</span>
          <span className="text-[10px] text-slate-400">▼</span>
        </button>
      </div>

      {/* ── Bottom Right Recenter Button ── */}
      <div className="absolute bottom-4 right-3.5 z-[400]">
        <button
          type="button"
          onClick={handleRecenter}
          className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#087F5B] hover:bg-slate-100 transition"
          aria-label="Recenter map"
          title="Recenter city view"
        >
          <Crosshair className="w-4 h-4" />
        </button>
      </div>

      {/* ── Leaflet Map Container ── */}
      <MapContainer
        center={center}
        zoom={zoom}
        zoomControl={false}
        scrollWheelZoom={true}
        preferCanvas={true}
        ref={setMapInstance}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
      >
        {mapType === 'streets' ? (
          <>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> &middot; <a href="https://www.esri.com" target="_blank" rel="noopener">Esri</a> &middot; PriSEHAT Pulse'
              url={BASEMAP_LIGHT_URL}
              maxZoom={19}
              keepBuffer={6}
            />
            {BASEMAP_LIGHT_REF_URL && (
              <TileLayer
                attribution=""
                url={BASEMAP_LIGHT_REF_URL}
                maxZoom={20}
                keepBuffer={6}
                zIndex={4}
              />
            )}
          </>
        ) : (
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com" target="_blank" rel="noopener">Esri</a> &middot; Maxar, Earthstar Geographics'
            url={SATELLITE_TILE_URL}
            maxZoom={19}
            keepBuffer={6}
          />
        )}

        {/* 24 BMC Ward Polygon Outlines & Circular Ward Badges */}
        {(showWardMarkers && showWards) && wardsData.map((w, idx) => (
          <Marker
            key={w.wardCode}
            position={[w.centerLatitude, w.centerLongitude]}
            icon={createWardBadgeIcon(w.wardCode, idx)}
          >
            <Popup className="prisehat-pulse-leaflet-popup">
              <div className="p-2 space-y-1 font-sans text-xs max-w-[240px]">
                <div className="text-[10px] font-black text-[#EF2929] uppercase tracking-wider">
                  {w.regionZone} • BMC WARD {w.wardCode}
                </div>
                <div className="font-extrabold text-sm text-slate-900 leading-tight">{w.wardName}</div>
                <div className="text-slate-600 text-[11px] font-semibold pt-1">Assistant Commissioner:</div>
                <div className="text-slate-900 font-bold text-xs">{w.assistantCommissioner}</div>
                <div className="text-slate-400 text-[10px] border-t border-slate-100 pt-1 mt-1 truncate">
                  {w.wardOfficeName}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Public Reports Markers */}
        {reports.map((report) => {
          const isSelected = selectedReportId === report.publicReportId || selectedReportId === report.id;
          return (
            <Marker
              key={report.id}
              position={[report.latitude, report.longitude]}
              icon={createCustomIcon(report.status, isSelected)}
              eventHandlers={{
                click: () => onMarkerSelect && onMarkerSelect(report)
              }}
            >
              <Popup className="prisehat-pulse-leaflet-popup">
                <div className="p-1 space-y-2 max-w-[260px] text-slate-900 font-sans">
                  {report.photoUrl && (
                    <div className="relative h-28 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img src={report.photoUrl} alt={report.categoryName} className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2">
                        <StatusBadge status={report.status} size="sm" />
                      </div>
                    </div>
                  )}

                  {!report.photoUrl && (
                    <div className="flex items-center justify-between border-b pb-1 border-slate-200">
                      <span className="font-mono font-bold text-xs text-[#EF2929]">{report.publicReportId}</span>
                      <StatusBadge status={report.status} size="sm" />
                    </div>
                  )}

                  <div>
                    <div className="text-sm font-black text-slate-900 leading-tight">{report.categoryName}</div>
                    <div className="text-[11px] text-slate-600 flex items-center gap-1 font-semibold mt-1">
                      <Navigation className="w-3.5 h-3.5 text-[#087F5B] shrink-0" />
                      <span className="truncate">{report.locality}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium border-t border-slate-100 pt-1.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {report.createdAt ? new Date(report.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : 'Recent'}
                    </span>
                    {report.wardCode && <span className="font-mono font-bold text-slate-700">Ward {report.wardCode}</span>}
                  </div>

                  <div className="pt-1">
                    <Link
                      href={`/report/${report.publicReportId}`}
                      className="w-full bg-[#087F5B] hover:bg-[#075B43] text-white font-black text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition shadow-sm"
                    >
                      VIEW CASE FILE <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
