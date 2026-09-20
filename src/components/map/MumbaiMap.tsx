'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { StatusBadge } from '../ui/Badge';
import { MapPin, Navigation, Calendar, ArrowRight, CheckCircle2, Clock, RefreshCw } from 'lucide-react';

import wardsData from '@/data/mumbai-wards.json';

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
  center?: [number, number];
  zoom?: number;
  height?: string;
  onMarkerSelect?: (report: ReportMarker) => void;
}

export default function MumbaiMap({
  reports,
  center = [19.0760, 72.8777], // Center of Mumbai Metropolitan Area
  zoom = 11,
  height = '560px',
  onMarkerSelect
}: MumbaiMapProps) {
  const [mounted, setMounted] = useState(false);
  const [showWards, setShowWards] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-full bg-slate-100 rounded-3xl flex items-center justify-center text-slate-500 border border-slate-200"
        style={{ height }}
      >
        <div className="flex flex-col items-center gap-2">
          <MapPin className="w-8 h-8 text-red-600 animate-bounce" />
          <span className="text-sm font-bold text-slate-700">Loading Mumbai Live Civic Map...</span>
        </div>
      </div>
    );
  }

  // Dynamic Leaflet container wrapper
  const L = require('leaflet');
  const { MapContainer, TileLayer, Marker, Popup, Polygon } = require('react-leaflet');

  // Custom visual marker states (Icon + Color + Symbol)
  const createCustomIcon = (status: string) => {
    let color = '#DC2626'; // Red for Reported
    let symbol = '●';
    if (status === 'IN_PROGRESS') {
      color = '#D97706'; // Amber for In Progress
      symbol = '●';
    }
    if (status === 'VERIFIED' || status === 'RESOLUTION_SUBMITTED') {
      color = '#059669'; // Emerald for Resolved
      symbol = '✓';
    }

    const svgIcon = `
      <div style="background-color: ${color}; width: 34px; height: 34px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; border: 2.5px solid #FFFFFF; box-shadow: 0 4px 10px rgba(0,0,0,0.25);">
        <span style="transform: rotate(45deg); color: #FFFFFF; font-weight: 900; font-size: 15px; margin-top: 3px; margin-left: 1px;">${symbol}</span>
      </div>
    `;

    return L.divIcon({
      className: 'custom-leaflet-marker',
      html: svgIcon,
      iconSize: [34, 34],
      iconAnchor: [17, 34],
      popupAnchor: [0, -34]
    });
  };

  // Ward Circular Badge Marker (Yellow / Red circles matching user reference image)
  const createWardBadgeIcon = (wardCode: string, index: number) => {
    // Alternate yellow and red circle badges like the screenshot
    const isRed = index % 4 === 0 || wardCode.includes('K') || wardCode.includes('H');
    const bgColor = isRed ? '#DC2626' : '#EAB308';
    const textColor = isRed ? '#FFFFFF' : '#0F172A';
    const label = wardCode.charAt(0);

    const html = `
      <div style="background-color: ${bgColor}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #FFFFFF; box-shadow: 0 4px 12px rgba(0,0,0,0.3); color: ${textColor}; font-weight: 900; font-size: 13px; font-family: system-ui, sans-serif;">
        ${label}
      </div>
    `;

    return L.divIcon({
      className: 'custom-ward-badge',
      html,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15]
    });
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl" style={{ height }}>
      {/* Ward Boundaries Toggle Overlay */}
      <div className="absolute top-3 right-3 z-[400] bg-white/95 backdrop-blur border border-slate-200 shadow-lg rounded-2xl p-1.5 flex items-center gap-2 text-xs font-bold text-slate-800">
        <button
          type="button"
          onClick={() => setShowWards(!showWards)}
          className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 font-extrabold ${
            showWards ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Navigation className="w-3.5 h-3.5" />
          {showWards ? '✓ BMC Wards Map Active' : 'Show 24 BMC Wards'}
        </button>
      </div>

      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | FixMumbai'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 24 BMC Ward Polygon Outlines & Circular Ward Badges (Exact match to reference image) */}
        {showWards && wardsData.map((w, idx) => (
          <React.Fragment key={w.wardCode}>
            <Polygon
              positions={w.polygon || [[w.bbox[1], w.bbox[0]], [w.bbox[3], w.bbox[0]], [w.bbox[3], w.bbox[2]], [w.bbox[1], w.bbox[2]]]}
              pathOptions={{
                color: '#1D4ED8', // Solid vibrant blue border stroke matching screenshot
                weight: 2.5,
                opacity: 0.95,
                fillColor: '#3B82F6',
                fillOpacity: 0.06
              }}
            >
              <Popup className="fixmumbai-leaflet-popup">
                <div className="p-2 space-y-1 font-sans text-xs max-w-[240px]">
                  <div className="text-[10px] font-black text-blue-600 uppercase tracking-wider">{w.regionZone} • BMC WARD {w.wardCode}</div>
                  <div className="font-extrabold text-sm text-slate-900 leading-tight">{w.wardName}</div>
                  <div className="text-slate-600 text-[11px] font-semibold pt-1">Assistant Commissioner:</div>
                  <div className="text-slate-900 font-bold text-xs">{w.assistantCommissioner}</div>
                  <div className="text-slate-400 text-[10px] border-t border-slate-100 pt-1 mt-1 truncate">{w.wardOfficeName}</div>
                </div>
              </Popup>
            </Polygon>

            {/* Circular Ward Letter Badge Marker (Yellow / Red badges matching screenshot) */}
            <Marker
              position={[w.centerLatitude, w.centerLongitude]}
              icon={createWardBadgeIcon(w.wardCode, idx)}
            >
              <Popup className="fixmumbai-leaflet-popup">
                <div className="p-1 space-y-1 font-sans text-xs text-center">
                  <div className="font-black text-xs text-blue-700 uppercase">BMC WARD {w.wardCode}</div>
                  <div className="font-bold text-slate-900">{w.wardName}</div>
                </div>
              </Popup>
            </Marker>
          </React.Fragment>
        ))}

        {reports.map((report) => (
          <Marker
            key={report.id}
            position={[report.latitude, report.longitude]}
            icon={createCustomIcon(report.status)}
            eventHandlers={{
              click: () => onMarkerSelect && onMarkerSelect(report)
            }}
          >
            <Popup className="fixmumbai-leaflet-popup">
              <div className="p-1 space-y-2 max-w-[260px] text-slate-900 font-sans">
                {/* Photo Preview */}
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
                    <span className="font-mono font-bold text-xs text-red-600">{report.publicReportId}</span>
                    <StatusBadge status={report.status} size="sm" />
                  </div>
                )}

                <div>
                  <div className="text-sm font-black text-slate-900 leading-tight">{report.categoryName}</div>
                  <div className="text-[11px] text-slate-600 flex items-center gap-1 font-semibold mt-1">
                    <Navigation className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="truncate">{report.locality}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium border-t border-slate-100 pt-1.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {report.createdAt ? new Date(report.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '20 Sep 2026'}
                  </span>
                  {report.wardCode && <span className="font-mono font-bold text-slate-700">Ward {report.wardCode}</span>}
                </div>

                <div className="pt-1">
                  <Link
                    href={`/report/${report.publicReportId}`}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    VIEW REPORT <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
