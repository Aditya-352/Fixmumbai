'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { StatusBadge } from '../ui/Badge';
import {
  MapPin,
  Navigation,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Clock,
  RefreshCw,
  Wind,
  LocateFixed,
  AlertTriangle
} from 'lucide-react';

import wardsData from '@/data/mumbai-wards.json';
import type { AirQualityResponse, AqiCategory } from '@/lib/air-quality/types';

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

// AQI category colors follow CPCB's National AQI color scale.
const AQI_CATEGORY_COLORS: Record<AqiCategory, string> = {
  Good: '#16A34A',
  Satisfactory: '#84CC16',
  Moderate: '#EAB308',
  Poor: '#F97316',
  'Very Poor': '#DC2626',
  Severe: '#7F1D1D'
};

const AIR_QUALITY_API_PATH = '/civic/api/air-quality';

type AqStatus = 'idle' | 'locating' | 'loading' | 'ready' | 'error';

export default function MumbaiMap({
  reports,
  center = [19.0760, 72.8777], // Center of Mumbai Metropolitan Area
  zoom = 11,
  height = '560px',
  onMarkerSelect
}: MumbaiMapProps) {
  const [mounted, setMounted] = useState(false);
  const [showWards, setShowWards] = useState(true);

  // --- Air Quality layer state ---
  const [showAirQuality, setShowAirQuality] = useState(false);
  const [aqStatus, setAqStatus] = useState<AqStatus>('idle');
  const [aqError, setAqError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [airQuality, setAirQuality] = useState<AirQualityResponse | null>(null);

  const fetchAirQuality = async (lat: number, lon: number) => {
    setAqStatus('loading');
    setAqError(null);
    try {
      const res = await fetch(`${AIR_QUALITY_API_PATH}?lat=${lat}&lon=${lon}`);
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Air quality data is not available right now.');
      }
      setAirQuality(json.data as AirQualityResponse);
      setAqStatus('ready');
    } catch (err: any) {
      setAqError(err.message || 'Could not load air quality data.');
      setAqStatus('error');
    }
  };

  const handleToggleAirQuality = () => {
    const next = !showAirQuality;
    setShowAirQuality(next);
    if (!next) return;

    if (userLocation) {
      fetchAirQuality(userLocation[0], userLocation[1]);
      return;
    }

    if (!('geolocation' in navigator)) {
      setAqStatus('error');
      setAqError('Your browser does not support location access.');
      return;
    }

    setAqStatus('locating');
    setAqError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
        setUserLocation(coords);
        fetchAirQuality(coords[0], coords[1]);
      },
      (geoError) => {
        setAqStatus('error');
        setAqError(
          geoError.code === geoError.PERMISSION_DENIED
            ? 'Location access was denied. Enable location permissions to see air quality near you.'
            : 'Could not determine your location. Please try again.'
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 5 * 60 * 1000 }
    );
  };

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

  // Air Quality marker: colored by CPCB AQI category, placed at the user's GPS location.
  const createAqiIcon = (category: AqiCategory, value: number) => {
    const color = AQI_CATEGORY_COLORS[category];
    const html = `
      <div style="background-color: ${color}; width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #FFFFFF; box-shadow: 0 4px 14px rgba(0,0,0,0.35); color: #FFFFFF; font-weight: 900; font-size: 13px; font-family: system-ui, sans-serif;">
        ${value}
      </div>
    `;
    return L.divIcon({
      className: 'custom-aqi-marker',
      html,
      iconSize: [42, 42],
      iconAnchor: [21, 42],
      popupAnchor: [0, -42]
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

        <button
          type="button"
          onClick={handleToggleAirQuality}
          className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 font-extrabold ${
            showAirQuality ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {aqStatus === 'locating' || aqStatus === 'loading' ? (
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Wind className="w-3.5 h-3.5" />
          )}
          {showAirQuality ? '✓ Air Quality Layer' : 'Show Air Quality'}
        </button>
      </div>

      {/* Air Quality status / error pill */}
      {showAirQuality && (aqStatus === 'locating' || aqStatus === 'loading' || aqStatus === 'error') && (
        <div className="absolute top-16 right-3 z-[400] max-w-[260px] bg-white/95 backdrop-blur border border-slate-200 shadow-lg rounded-2xl px-3 py-2 text-[11px] font-semibold text-slate-700 flex items-start gap-1.5">
          {aqStatus === 'error' ? (
            <>
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <span>{aqError}</span>
            </>
          ) : (
            <>
              <LocateFixed className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 animate-pulse" />
              <span>{aqStatus === 'locating' ? 'Getting your location…' : 'Fetching nearby air quality…'}</span>
            </>
          )}
        </div>
      )}

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

        {showAirQuality && userLocation && airQuality?.aqi && (
          <Marker
            position={userLocation}
            icon={createAqiIcon(airQuality.aqi.category, airQuality.aqi.value)}
          >
            <Popup className="fixmumbai-leaflet-popup">
              <div className="p-1 space-y-2 max-w-[260px] text-slate-900 font-sans">
                <div className="flex items-center justify-between border-b pb-1.5 border-slate-200">
                  <span className="text-sm font-black text-slate-900">
                    AQI {airQuality.aqi.value} · {airQuality.aqi.category}
                  </span>
                  <span
                    className="text-[10px] font-black px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: AQI_CATEGORY_COLORS[airQuality.aqi.category] }}
                  >
                    {airQuality.aqi.source}
                  </span>
                </div>

                {airQuality.aqi.dominantPollutant && (
                  <div className="text-[11px] text-slate-600 font-semibold">
                    Dominant pollutant: <span className="text-slate-900">{airQuality.aqi.dominantPollutant}</span>
                  </div>
                )}

                {airQuality.station && (
                  <div className="text-[11px] text-slate-600 space-y-0.5 border-t border-slate-100 pt-1.5">
                    <div className="font-bold text-slate-800">{airQuality.station.name}</div>
                    <div>
                      {airQuality.station.distanceKm !== null
                        ? `${airQuality.station.distanceKm} km away`
                        : 'Distance unavailable'}
                      {airQuality.station.lastUpdated &&
                        ` · ${new Date(airQuality.station.lastUpdated).toLocaleString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}`}
                    </div>
                  </div>
                )}

                {Object.keys(airQuality.pollutants).length > 0 && (
                  <div className="grid grid-cols-2 gap-1 text-[10px] border-t border-slate-100 pt-1.5">
                    {Object.entries(airQuality.pollutants).map(([id, reading]) => (
                      <div key={id} className="bg-slate-50 rounded-lg px-1.5 py-1">
                        <div className="font-bold text-slate-700">{id}</div>
                        <div className="text-slate-500">
                          {reading?.avg ?? '—'} {reading?.unit}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="text-[10px] text-slate-500 italic border-t border-slate-100 pt-1.5 leading-snug">
                  {airQuality.dataQuality.note}
                </div>
              </div>
            </Popup>
          </Marker>
        )}

        {showAirQuality && userLocation && !airQuality?.aqi && aqStatus === 'ready' && (
          <Marker position={userLocation} icon={L.divIcon({
            className: 'custom-aqi-marker-empty',
            html: `<div style="background-color:#64748B;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid #FFFFFF;box-shadow:0 4px 10px rgba(0,0,0,0.3);color:#FFFFFF;font-size:16px;">?</div>`,
            iconSize: [34, 34],
            iconAnchor: [17, 34],
            popupAnchor: [0, -34]
          })}>
            <Popup className="fixmumbai-leaflet-popup">
              <div className="p-1 text-xs text-slate-700 max-w-[220px]">
                No monitoring station data is currently available near your location.
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
