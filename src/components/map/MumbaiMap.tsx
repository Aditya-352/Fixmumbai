'use client';

import React, { useEffect, useState, useRef } from 'react';
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
  AlertTriangle,
  Maximize2,
  Minimize2,
  X,
  Building2,
  Eye,
  Trees,
  Info,
  Sparkles,
  ShieldAlert
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
  description?: string;
}

export type ActiveLayerType = 'aqi' | 'wards' | 'green';

interface MumbaiMapProps {
  reports: ReportMarker[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  selectedReportId?: string | null;
  onMarkerSelect?: (report: ReportMarker) => void;
  showSearchHeader?: boolean;
}

// CPCB AQI Color Standard
const AQI_CATEGORY_COLORS: Record<string, { bg: string; text: string; range: string }> = {
  Good: { bg: '#16A34A', text: '#FFFFFF', range: '0 - 50' },
  Satisfactory: { bg: '#84CC16', text: '#0F172A', range: '51 - 100' },
  Moderate: { bg: '#EAB308', text: '#0F172A', range: '101 - 200' },
  Poor: { bg: '#F97316', text: '#FFFFFF', range: '201 - 300' },
  'Very Poor': { bg: '#DC2626', text: '#FFFFFF', range: '301 - 400' },
  Severe: { bg: '#7F1D1D', text: '#FFFFFF', range: '401 - 500' }
};

// Comprehensive AQI Monitoring Stations across Mumbai AND outside Mumbai (MMR Region: Thane, Navi Mumbai, Kalyan, Panvel, Vasai)
const MMR_AQI_STATIONS = [
  { id: 'aq-1', name: 'Colaba', area: 'Mumbai South', lat: 18.9067, lng: 72.8147, value: 84, category: 'Satisfactory', pollutant: 'PM2.5' },
  { id: 'aq-2', name: 'Worli', area: 'Mumbai South-Central', lat: 19.0176, lng: 72.8162, value: 112, category: 'Moderate', pollutant: 'PM10' },
  { id: 'aq-3', name: 'Bandra East', area: 'Mumbai Western Suburbs', lat: 19.0596, lng: 72.8526, value: 156, category: 'Moderate', pollutant: 'PM2.5' },
  { id: 'aq-4', name: 'Kurla West', area: 'Mumbai Central Suburbs', lat: 19.0726, lng: 72.8845, value: 215, category: 'Poor', pollutant: 'NO2' },
  { id: 'aq-5', name: 'Andheri West', area: 'Mumbai Western Suburbs', lat: 19.1197, lng: 72.8464, value: 142, category: 'Moderate', pollutant: 'PM2.5' },
  { id: 'aq-6', name: 'Borivali East', area: 'Mumbai North Suburbs', lat: 19.2307, lng: 72.8567, value: 68, category: 'Satisfactory', pollutant: 'OZONE' },
  { id: 'aq-7', name: 'Chembur', area: 'Mumbai Harbour Line', lat: 19.0622, lng: 72.8974, value: 245, category: 'Poor', pollutant: 'PM10' },
  { id: 'aq-8', name: 'Deonar', area: 'Mumbai East', lat: 19.0538, lng: 72.9156, value: 318, category: 'Very Poor', pollutant: 'PM2.5' },
  // Outside Mumbai (MMR Region)
  { id: 'aq-9', name: 'Thane West', area: 'Thane City (MMR)', lat: 19.2183, lng: 72.9781, value: 135, category: 'Moderate', pollutant: 'PM10' },
  { id: 'aq-10', name: 'Vashi', area: 'Navi Mumbai (MMR)', lat: 19.0771, lng: 72.9986, value: 128, category: 'Moderate', pollutant: 'PM2.5' },
  { id: 'aq-11', name: 'Airoli', area: 'Navi Mumbai (MMR)', lat: 19.1579, lng: 72.9984, value: 145, category: 'Moderate', pollutant: 'NO2' },
  { id: 'aq-12', name: 'Kalyan West', area: 'Kalyan-Dombivli (MMR)', lat: 19.2403, lng: 73.1305, value: 188, category: 'Moderate', pollutant: 'PM10' },
  { id: 'aq-13', name: 'Panvel', area: 'Navi Mumbai / Raigad (MMR)', lat: 18.9894, lng: 73.1175, value: 95, category: 'Satisfactory', pollutant: 'PM2.5' },
  { id: 'aq-14', name: 'Mira-Bhayandar', area: 'North MMR', lat: 19.2952, lng: 72.8544, value: 122, category: 'Moderate', pollutant: 'PM2.5' },
  { id: 'aq-15', name: 'Vasai-Virar', area: 'Palghar District (MMR)', lat: 19.3919, lng: 72.8397, value: 78, category: 'Satisfactory', pollutant: 'PM10' }
];

// Green Density Canopy Cover Data (Mumbai & MMR)
const GREEN_DENSITY_ZONES = [
  {
    id: 'gd-1',
    name: 'Sanjay Gandhi National Park',
    region: 'Borivali / Mulund / Thane',
    canopyPct: 88,
    category: 'Dense Forest Cover',
    color: '#065F46',
    bounds: [
      [19.18, 72.87],
      [19.26, 72.87],
      [19.26, 72.95],
      [19.18, 72.95]
    ]
  },
  {
    id: 'gd-2',
    name: 'Aarey Forest & Milk Colony',
    region: 'Goregaon East',
    canopyPct: 74,
    category: 'Dense Urban Forest',
    color: '#047857',
    bounds: [
      [19.13, 72.86],
      [19.17, 72.86],
      [19.17, 72.91],
      [19.13, 72.91]
    ]
  },
  {
    id: 'gd-3',
    name: 'Yeoor Hills Forest Reserve',
    region: 'Thane (Outside Mumbai)',
    canopyPct: 82,
    category: 'Protected Hill Canopy',
    color: '#065F46',
    bounds: [
      [19.22, 72.93],
      [19.27, 72.93],
      [19.27, 72.98],
      [19.22, 72.98]
    ]
  },
  {
    id: 'gd-4',
    name: 'Thane Creek Flamingo Sanctuary',
    region: 'Bhandup / Vashi Wetlands',
    canopyPct: 65,
    category: 'Mangrove Ecosystem',
    color: '#059669',
    bounds: [
      [19.08, 72.95],
      [19.18, 72.95],
      [19.18, 73.00],
      [19.08, 73.00]
    ]
  },
  {
    id: 'gd-5',
    name: 'Kharghar Hills Reserve',
    region: 'Navi Mumbai (Outside Mumbai)',
    canopyPct: 70,
    category: 'Hilly Reserve Canopy',
    color: '#047857',
    bounds: [
      [19.02, 73.05],
      [19.07, 73.05],
      [19.07, 73.10],
      [19.02, 73.10]
    ]
  },
  {
    id: 'gd-6',
    name: 'IIT Bombay & Powai Woods',
    region: 'Powai',
    canopyPct: 60,
    category: 'Urban Campus Forest',
    color: '#10B981',
    bounds: [
      [19.11, 72.90],
      [19.14, 72.90],
      [19.14, 72.93],
      [19.11, 72.93]
    ]
  },
  {
    id: 'gd-7',
    name: 'Malabar Hill & Ridge Park',
    region: 'Mumbai South',
    canopyPct: 52,
    category: 'Coastal Hill Canopy',
    color: '#10B981',
    bounds: [
      [18.94, 72.80],
      [18.97, 72.80],
      [18.97, 72.82],
      [18.94, 72.82]
    ]
  }
];

export default function MumbaiMap({
  reports,
  center = [19.0760, 72.8777],
  zoom = 11,
  height = '580px',
  selectedReportId,
  onMarkerSelect,
  showSearchHeader = false
}: MumbaiMapProps) {
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- SINGLE ACTIVE LAYER STATE (AQI | WARDS | GREEN DENSITY) ---
  const [activeLayer, setActiveLayer] = useState<ActiveLayerType>('wards');
  const [prevLayer, setPrevLayer] = useState<ActiveLayerType>('wards');
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Active selected report drawer state
  const [activeReport, setActiveReport] = useState<ReportMarker | null>(null);

  // Map view controller
  const [currentCenter, setCurrentCenter] = useState<[number, number]>(center);
  const [currentZoom, setCurrentZoom] = useState<number>(zoom);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  const LAYER_KEYS: ActiveLayerType[] = ['aqi', 'wards', 'green'];

  // Handle smooth direction-aware layer transition
  const handleSwitchLayer = (nextLayer: ActiveLayerType) => {
    if (nextLayer === activeLayer) return;

    const prevIndex = LAYER_KEYS.indexOf(activeLayer);
    const nextIndex = LAYER_KEYS.indexOf(nextLayer);
    const dir = nextIndex > prevIndex ? 'right' : 'left';

    setSlideDirection(dir);
    setIsTransitioning(true);
    setPrevLayer(activeLayer);
    setActiveLayer(nextLayer);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 350);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedReportId) {
      const found = reports.find(r => r.id === selectedReportId || r.publicReportId === selectedReportId);
      if (found) {
        setActiveReport(found);
        setCurrentCenter([found.latitude, found.longitude]);
        setCurrentZoom(14);
      }
    }
  }, [selectedReportId, reports]);

  const handleLocateUser = () => {
    if (!('geolocation' in navigator)) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setUserLocation(coords);
        setCurrentCenter(coords);
        setCurrentZoom(14);
      },
      () => {
        alert('Could not determine GPS location.');
      },
      { enableHighAccuracy: true }
    );
  };

  if (!mounted) {
    return (
      <div
        className="w-full bg-slate-900 rounded-3xl flex items-center justify-center text-slate-400 border border-slate-800 shadow-2xl"
        style={{ height }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center animate-pulse">
            <MapPin className="w-5 h-5 text-red-500" />
          </div>
          <span className="text-xs font-bold tracking-wider uppercase text-slate-300">Loading FixMumbai GIS Engine...</span>
        </div>
      </div>
    );
  }

  // Dynamic Leaflet Imports
  const L = require('leaflet');
  const { MapContainer, TileLayer, Marker, Popup, Polygon, Circle, useMap } = require('react-leaflet');

  function MapViewController({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();
    useEffect(() => {
      if (map) {
        map.flyTo(center, zoom, { duration: 1.0 });
      }
    }, [center, zoom, map]);
    return null;
  }

  // Marker Icon Generator for Reports
  const createReportIcon = (status: string, isSelected: boolean = false) => {
    const isResolved = status === 'VERIFIED' || status === 'RESOLUTION_SUBMITTED';
    const isInProgress = status === 'IN_PROGRESS' || status === 'ASSIGNED';
    
    let pinColor = '#DD3333';
    let pinSymbol = '●';

    if (isInProgress) {
      pinColor = '#F59E0B';
      pinSymbol = '⚡';
    } else if (isResolved) {
      pinColor = '#10B981';
      pinSymbol = '✓';
    }

    const scale = isSelected ? 'scale(1.25)' : 'scale(1)';
    const shadow = isSelected ? 'box-shadow: 0 0 0 4px ' + pinColor + ', 0 10px 25px rgba(0,0,0,0.4);' : 'box-shadow: 0 4px 12px rgba(0,0,0,0.3);';

    const html = `
      <div style="transform: ${scale}; transition: transform 0.2s ease-in-out;">
        <div style="background-color: ${pinColor}; width: 34px; height: 34px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; border: 2.5px solid #FFFFFF; ${shadow}">
          <span style="transform: rotate(45deg); color: #FFFFFF; font-weight: 900; font-size: 14px; margin-top: 2px; margin-left: 1px;">${pinSymbol}</span>
        </div>
      </div>
    `;

    return L.divIcon({
      className: 'nammakasa-leaflet-marker',
      html,
      iconSize: [34, 34],
      iconAnchor: [17, 34],
      popupAnchor: [0, -34]
    });
  };

  // AQI Station Badge Icon
  const createAqiStationIcon = (category: string, value: number) => {
    const config = AQI_CATEGORY_COLORS[category] || AQI_CATEGORY_COLORS['Moderate'];
    const html = `
      <div style="background-color: ${config.bg}; color: ${config.text}; width: 44px; height: 44px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 3px solid #FFFFFF; box-shadow: 0 4px 14px rgba(0,0,0,0.35); font-family: system-ui, sans-serif; cursor: pointer;">
        <span style="font-weight: 900; font-size: 14px; leading: 1;">${value}</span>
        <span style="font-size: 8px; font-weight: 800; opacity: 0.9; text-transform: uppercase;">AQI</span>
      </div>
    `;
    return L.divIcon({
      className: 'custom-aqi-marker',
      html,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      popupAnchor: [0, -22]
    });
  };

  // Ward Badge Icon
  const createWardBadgeIcon = (wardCode: string, index: number) => {
    const isRed = index % 3 === 0 || wardCode.includes('K') || wardCode.includes('H');
    const bgColor = isRed ? '#DD3333' : '#EAB308';
    const textColor = isRed ? '#FFFFFF' : '#0F172A';
    const label = wardCode.charAt(0);

    const html = `
      <div style="background-color: ${bgColor}; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #FFFFFF; box-shadow: 0 4px 12px rgba(0,0,0,0.3); color: ${textColor}; font-weight: 900; font-size: 13px; font-family: system-ui, sans-serif;">
        ${label}
      </div>
    `;

    return L.divIcon({
      className: 'custom-ward-badge',
      html,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });
  };

  // User Location Pulsing Dot Icon
  const createUserLocationIcon = () => {
    const html = `
      <div style="position: relative; width: 24px; height: 24px;">
        <div style="position: absolute; width: 24px; height: 24px; border-radius: 50%; background-color: rgba(59, 130, 246, 0.4); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
        <div style="position: relative; width: 16px; height: 16px; top: 4px; left: 4px; border-radius: 50%; background-color: #2563EB; border: 3px solid #FFFFFF; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>
      </div>
    `;
    return L.divIcon({
      className: 'user-location-marker',
      html,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
  };

  const activeIndex = LAYER_KEYS.indexOf(activeLayer);

  const containerClasses = isFullscreen
    ? 'fixed inset-0 z-[9999] w-screen h-screen bg-slate-900 overflow-hidden'
    : `relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl transition-all duration-300`;

  return (
    <div className={containerClasses} style={{ height: isFullscreen ? '100vh' : height }}>
      {/* 1. CLEAN & PROPORTIONAL TOP-RIGHT FLOATING SEGMENTED CONTROL TOOLBAR */}
      <div className="absolute top-4 right-4 z-[400] flex items-center gap-2 max-w-[96vw]">
        {/* Connected Equal-Width Grid Segmented Layer Selector Container */}
        <div className="relative grid grid-cols-3 w-[295px] sm:w-[395px] bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-xl text-xs sm:text-xs">
          {/* Sliding Active Pill Indicator */}
          <div
            className="absolute top-1.5 bottom-1.5 rounded-xl bg-red-600 shadow-md shadow-red-600/30 transition-all duration-300 ease-out"
            style={{
              left: `calc(${activeIndex * 33.333}% + 6px)`,
              width: `calc(33.333% - 12px)`
            }}
          />

          {/* AQI Button */}
          <button
            type="button"
            onClick={() => handleSwitchLayer('aqi')}
            className={`relative z-10 py-2.5 rounded-xl font-black transition-colors duration-200 flex items-center justify-center gap-1.5 whitespace-nowrap text-xs text-center ${
              activeLayer === 'aqi' ? 'text-white' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <Wind className="w-4 h-4 shrink-0" />
            <span>AQI</span>
          </button>

          {/* Wards Button */}
          <button
            type="button"
            onClick={() => handleSwitchLayer('wards')}
            className={`relative z-10 py-2.5 rounded-xl font-black transition-colors duration-200 flex items-center justify-center gap-1.5 whitespace-nowrap text-xs text-center ${
              activeLayer === 'wards' ? 'text-white' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4 shrink-0" />
            <span>Wards</span>
          </button>

          {/* Green Density Button */}
          <button
            type="button"
            onClick={() => handleSwitchLayer('green')}
            className={`relative z-10 py-2.5 rounded-xl font-black transition-colors duration-200 flex items-center justify-center gap-1.5 whitespace-nowrap text-xs text-center ${
              activeLayer === 'green' ? 'text-white' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <Trees className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Green Density</span>
            <span className="sm:hidden">Green</span>
          </button>
        </div>

        {/* GPS Locate Me Button */}
        <button
          type="button"
          onClick={handleLocateUser}
          className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-700 hover:text-red-600 transition hover:scale-105 active:scale-95 shrink-0"
          title="Locate My GPS Position"
        >
          <LocateFixed className="w-4 h-4" />
        </button>

        {/* Fullscreen Button */}
        <button
          type="button"
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-700 hover:text-slate-900 transition hidden sm:flex items-center justify-center hover:scale-105 active:scale-95 shrink-0"
          title={isFullscreen ? 'Exit Full Screen' : 'Full Screen'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* 2. SHARED FIXED LEAFLET MAP CONTAINER */}
      <MapContainer
        center={currentCenter}
        zoom={currentZoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
      >
        <MapViewController center={currentCenter} zoom={currentZoom} />

        {/* Clean Base Tile Map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | FixMumbai'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* GPS User Location Marker */}
        {userLocation && (
          <Marker position={userLocation} icon={createUserLocationIcon()}>
            <Popup className="fixmumbai-leaflet-popup">
              <div className="p-1 font-bold text-xs text-blue-700">Your GPS Location</div>
            </Popup>
          </Marker>
        )}

        {/* LAYER A: AQI MONITORING STATIONS */}
        {activeLayer === 'aqi' && MMR_AQI_STATIONS.map((st) => (
          <Marker
            key={st.id}
            position={[st.lat, st.lng]}
            icon={createAqiStationIcon(st.category, st.value)}
          >
            <Popup className="fixmumbai-leaflet-popup">
              <div className="p-2 space-y-2 max-w-[240px] text-slate-900 font-sans">
                <div className="flex items-center justify-between border-b pb-1.5 border-slate-100">
                  <div>
                    <div className="font-extrabold text-sm text-slate-900">{st.name}</div>
                    <div className="text-[10px] text-slate-500 font-semibold">{st.area}</div>
                  </div>
                  <span
                    className="text-xs font-black px-2.5 py-1 rounded-full text-white shadow-sm"
                    style={{ backgroundColor: AQI_CATEGORY_COLORS[st.category]?.bg || '#EAB308' }}
                  >
                    {st.value}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600 bg-slate-50 p-2 rounded-xl">
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase block">AQI CATEGORY</span>
                    <span className="font-black text-slate-900">{st.category}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase block">PRIMARY POLLUTANT</span>
                    <span className="font-black text-slate-900">{st.pollutant}</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* LAYER B: 24 BMC WARDS BOUNDARIES & CENTROID BADGES */}
        {activeLayer === 'wards' && wardsData.map((w, idx) => (
          <React.Fragment key={w.wardCode}>
            <Polygon
              positions={w.polygon || [[w.bbox[1], w.bbox[0]], [w.bbox[3], w.bbox[0]], [w.bbox[3], w.bbox[2]], [w.bbox[1], w.bbox[2]]]}
              pathOptions={{
                color: '#DD3333',
                weight: 2,
                opacity: 0.85,
                fillColor: '#EF4444',
                fillOpacity: 0.05
              }}
            >
              <Popup className="fixmumbai-leaflet-popup">
                <div className="p-2 space-y-1 font-sans text-xs max-w-[240px]">
                  <div className="text-[10px] font-black text-red-600 uppercase tracking-wider">{w.regionZone} • BMC WARD {w.wardCode}</div>
                  <div className="font-extrabold text-sm text-slate-900 leading-tight">{w.wardName}</div>
                  <div className="text-slate-600 text-[11px] font-semibold pt-1">Assistant Commissioner:</div>
                  <div className="text-slate-900 font-bold text-xs">{w.assistantCommissioner}</div>
                  <div className="text-slate-400 text-[10px] border-t border-slate-100 pt-1 mt-1 truncate">{w.wardOfficeName}</div>
                </div>
              </Popup>
            </Polygon>

            <Marker
              position={[w.centerLatitude, w.centerLongitude]}
              icon={createWardBadgeIcon(w.wardCode, idx)}
            >
              <Popup className="fixmumbai-leaflet-popup">
                <div className="p-1 text-center font-sans text-xs">
                  <div className="font-black text-red-600 uppercase">BMC WARD {w.wardCode}</div>
                  <div className="font-bold text-slate-900">{w.wardName}</div>
                </div>
              </Popup>
            </Marker>
          </React.Fragment>
        ))}

        {/* LAYER C: GREEN DENSITY CANOPY POLYGONS & ZONE MARKERS */}
        {activeLayer === 'green' && GREEN_DENSITY_ZONES.map((zone) => (
          <React.Fragment key={zone.id}>
            <Polygon
              positions={zone.bounds}
              pathOptions={{
                color: zone.color,
                weight: 2.5,
                opacity: 0.9,
                fillColor: zone.color,
                fillOpacity: 0.25
              }}
            >
              <Popup className="fixmumbai-leaflet-popup">
                <div className="p-2 space-y-2 font-sans text-xs max-w-[240px]">
                  <div className="flex items-center gap-1.5 text-emerald-700 text-[10px] font-black uppercase tracking-wider">
                    <Trees className="w-3.5 h-3.5" /> Urban Tree Canopy
                  </div>
                  <div className="font-extrabold text-sm text-slate-900 leading-tight">{zone.name}</div>
                  <div className="text-slate-600 text-[11px] font-medium">{zone.region}</div>
                  <div className="bg-emerald-50 text-emerald-900 font-black p-2 rounded-xl text-center flex items-center justify-between border border-emerald-200">
                    <span>CANOPY DENSITY:</span>
                    <span className="text-base text-emerald-700">{zone.canopyPct}%</span>
                  </div>
                </div>
              </Popup>
            </Polygon>

            <Marker
              position={[(zone.bounds[0][0] + zone.bounds[1][0]) / 2, (zone.bounds[0][1] + zone.bounds[2][1]) / 2]}
              icon={L.divIcon({
                className: 'custom-green-marker',
                html: `
                  <div style="background-color: ${zone.color}; color: #FFFFFF; padding: 4px 10px; border-radius: 9999px; border: 2px solid #FFFFFF; box-shadow: 0 4px 12px rgba(0,0,0,0.3); font-weight: 900; font-size: 11px; white-space: nowrap; font-family: system-ui, sans-serif; display: flex; items-center; gap: 4px;">
                    🌳 ${zone.canopyPct}% Canopy
                  </div>
                `,
                iconSize: [100, 24],
                iconAnchor: [50, 12]
              })}
            >
              <Popup className="fixmumbai-leaflet-popup">
                <div className="p-1 font-extrabold text-xs text-emerald-800">{zone.name} ({zone.canopyPct}% Tree Cover)</div>
              </Popup>
            </Marker>
          </React.Fragment>
        ))}

        {/* CIVIC REPORT MARKERS */}
        {reports.map((report) => {
          const isSelected = activeReport?.id === report.id;
          return (
            <Marker
              key={report.id}
              position={[report.latitude, report.longitude]}
              icon={createReportIcon(report.status, isSelected)}
              eventHandlers={{
                click: () => {
                  setActiveReport(report);
                  if (onMarkerSelect) onMarkerSelect(report);
                }
              }}
            >
              <Popup className="fixmumbai-leaflet-popup">
                <div className="p-1.5 space-y-2 max-w-[260px] text-slate-900 font-sans">
                  {report.photoUrl && (
                    <div className="relative h-32 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
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

                  <div className="pt-1">
                    <Link
                      href={`/report/${report.publicReportId}`}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition shadow-sm"
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

      {/* 3. CONTEXTUAL DYNAMIC LEGEND CARD */}
      <div className="absolute bottom-6 left-6 z-[400] max-w-[280px] bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl p-3.5 space-y-2 transition-all duration-300">
        {/* AQI LEGEND */}
        {activeLayer === 'aqi' && (
          <div className="space-y-2 animate-fadeIn text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
              <span className="font-black text-slate-900 flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-emerald-600" /> CPCB AQI Scale
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">MMR Region</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[10px] font-bold">
              {Object.entries(AQI_CATEGORY_COLORS).map(([cat, config]) => (
                <div key={cat} className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-50">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: config.bg }} />
                  <span className="truncate text-slate-800">{cat} ({config.range})</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WARDS LEGEND */}
        {activeLayer === 'wards' && (
          <div className="space-y-2 animate-fadeIn text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
              <span className="font-black text-slate-900 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-red-600" /> BMC Ward Outlines
              </span>
              <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">24 Wards</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug font-medium">
              Polygons demarcate Mumbai&apos;s 24 Administrative Wards (A to T) with centroid ward commissioner codes.
            </p>
          </div>
        )}

        {/* GREEN DENSITY LEGEND */}
        {activeLayer === 'green' && (
          <div className="space-y-2 animate-fadeIn text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
              <span className="font-black text-slate-900 flex items-center gap-1.5">
                <Trees className="w-4 h-4 text-emerald-600" /> Green Canopy Density
              </span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                Beta GIS
              </span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-600 font-medium">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-emerald-900 block"></span> Dense Forest (&gt;75%)
                </span>
                <span className="font-black text-slate-800">SGNP / Yeoor</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-emerald-600 block"></span> Urban Canopy (50-75%)
                </span>
                <span className="font-black text-slate-800">Aarey / Powai</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. ACTIVE CIVIC REPORT DRAWER */}
      {activeReport && (
        <div className="absolute bottom-6 right-6 z-[450] sm:max-w-sm bg-white/98 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl p-5 space-y-3 animate-slideUp">
          <div className="flex items-start justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="font-mono text-xs font-black text-red-600">{activeReport.publicReportId}</span>
              <h3 className="text-base font-black text-slate-900 leading-snug">{activeReport.categoryName}</h3>
              <p className="text-xs text-slate-600 font-semibold flex items-center gap-1 mt-0.5">
                <Navigation className="w-3.5 h-3.5 text-red-600 shrink-0" />
                {activeReport.locality}
              </p>
            </div>
            <button
              onClick={() => setActiveReport(null)}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {activeReport.photoUrl && (
            <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img src={activeReport.photoUrl} alt={activeReport.categoryName} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <StatusBadge status={activeReport.status} size="sm" />
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 pt-1">
            <Link
              href={`/report/${activeReport.publicReportId}`}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3 px-4 rounded-2xl shadow-md shadow-red-600/20 flex items-center justify-center gap-2 transition"
            >
              <Eye className="w-4 h-4" />
              VIEW COMPLAINT FILE
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
