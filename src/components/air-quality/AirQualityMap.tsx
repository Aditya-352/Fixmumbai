'use client';

import React, { useEffect, useState } from 'react';
import {
  MapPin,
  Navigation,
  Wind,
  Maximize2,
  Sparkles,
  Layers,
} from 'lucide-react';
import type { AirQualityResponse, AqiCategory } from '@/lib/air-quality/types';
import { reverseGeocode } from '@/lib/user-location';

export interface NaqiLevelInfo {
  level: number;
  openWeatherCategory: string;
  naqiCategory: string;
  naqiRange: string;
  healthImpact: string;
  hex: string;
  bg: string;
  text: string;
}

export const INDIA_NAQI_MAPPINGS: Record<number, NaqiLevelInfo> = {
  1: {
    level: 1,
    openWeatherCategory: 'Good',
    naqiCategory: 'Good',
    naqiRange: '0 – 50',
    healthImpact: 'Minimal health impact.',
    hex: '#10B981',
    bg: 'bg-emerald-500',
    text: 'text-emerald-700',
  },
  2: {
    level: 2,
    openWeatherCategory: 'Fair',
    naqiCategory: 'Satisfactory',
    naqiRange: '51 – 100',
    healthImpact: 'Minor breathing discomfort to sensitive people.',
    hex: '#84CC16',
    bg: 'bg-lime-500',
    text: 'text-lime-700',
  },
  3: {
    level: 3,
    openWeatherCategory: 'Moderate',
    naqiCategory: 'Moderate',
    naqiRange: '101 – 200',
    healthImpact: 'Breathing discomfort for people with lung/heart disease.',
    hex: '#F59E0B',
    bg: 'bg-amber-500',
    text: 'text-amber-700',
  },
  4: {
    level: 4,
    openWeatherCategory: 'Poor',
    naqiCategory: 'Poor',
    naqiRange: '201 – 300',
    healthImpact: 'Discomfort to most people on prolonged exposure.',
    hex: '#F97316',
    bg: 'bg-orange-500',
    text: 'text-orange-700',
  },
  5: {
    level: 5,
    openWeatherCategory: 'Very Poor',
    naqiCategory: 'Very Poor',
    naqiRange: '301 – 400',
    healthImpact: 'Can cause respiratory illness on prolonged exposure.',
    hex: '#EF4444',
    bg: 'bg-rose-500',
    text: 'text-rose-700',
  },
  6: {
    level: 6,
    openWeatherCategory: 'Severe',
    naqiCategory: 'Severe',
    naqiRange: '401 – 500',
    healthImpact: 'Severe health impacts; affects even healthy individuals.',
    hex: '#881337',
    bg: 'bg-red-900',
    text: 'text-red-900',
  },
};

export const AQI_CATEGORY_COLORS: Record<AqiCategory, { hex: string; bg: string; text: string; label: string }> = {
  Good: { hex: '#10B981', bg: 'bg-emerald-500', text: 'text-emerald-700', label: 'Good (0–50)' },
  Satisfactory: { hex: '#84CC16', bg: 'bg-lime-500', text: 'text-lime-700', label: 'Satisfactory (51–100)' },
  Moderate: { hex: '#F59E0B', bg: 'bg-amber-500', text: 'text-amber-700', label: 'Moderate (101–200)' },
  Poor: { hex: '#F97316', bg: 'bg-orange-500', text: 'text-orange-700', label: 'Poor (201–300)' },
  'Very Poor': { hex: '#EF4444', bg: 'bg-rose-500', text: 'text-rose-700', label: 'Very Poor (301–400)' },
  Severe: { hex: '#881337', bg: 'bg-red-900', text: 'text-red-900', label: 'Severe (401–500+)' },
};

export interface CityHub {
  name: string;
  state: string;
  lat: number;
  lon: number;
  category: AqiCategory;
  approxAqi: number;
}

export const POPULAR_INDIAN_HUBS: CityHub[] = [
  { name: 'New Delhi', state: 'Delhi NCR', lat: 28.6139, lon: 77.209, category: 'Very Poor', approxAqi: 342 },
  { name: 'Mumbai', state: 'Maharashtra', lat: 19.076, lon: 72.8777, category: 'Moderate', approxAqi: 158 },
  { name: 'Bengaluru', state: 'Karnataka', lat: 12.9716, lon: 77.5946, category: 'Good', approxAqi: 45 },
  { name: 'Kolkata', state: 'West Bengal', lat: 22.5726, lon: 88.3639, category: 'Moderate', approxAqi: 165 },
  { name: 'Chennai', state: 'Tamil Nadu', lat: 13.0827, lon: 80.2707, category: 'Satisfactory', approxAqi: 82 },
  { name: 'Hyderabad', state: 'Telangana', lat: 17.385, lon: 78.4867, category: 'Moderate', approxAqi: 135 },
  { name: 'Ahmedabad', state: 'Gujarat', lat: 23.0225, lon: 72.5714, category: 'Poor', approxAqi: 225 },
  { name: 'Pune', state: 'Maharashtra', lat: 18.5204, lon: 73.8567, category: 'Satisfactory', approxAqi: 92 },
  { name: 'Jaipur', state: 'Rajasthan', lat: 26.9124, lon: 75.7873, category: 'Poor', approxAqi: 245 },
  { name: 'Lucknow', state: 'Uttar Pradesh', lat: 26.8467, lon: 80.9462, category: 'Very Poor', approxAqi: 320 },
  { name: 'Patna', state: 'Bihar', lat: 25.5941, lon: 85.1376, category: 'Very Poor', approxAqi: 355 },
  { name: 'Chandigarh', state: 'Punjab/Haryana', lat: 30.7333, lon: 76.7794, category: 'Moderate', approxAqi: 138 },
  { name: 'Bhopal', state: 'Madhya Pradesh', lat: 23.2599, lon: 77.4126, category: 'Satisfactory', approxAqi: 85 },
  { name: 'Guwahati', state: 'Assam', lat: 26.1445, lon: 91.7362, category: 'Good', approxAqi: 42 },
  { name: 'Srinagar', state: 'Jammu & Kashmir', lat: 34.0837, lon: 74.7973, category: 'Good', approxAqi: 36 },
  { name: 'Kochi', state: 'Kerala', lat: 9.9312, lon: 76.2673, category: 'Good', approxAqi: 32 },
  { name: 'Visakhapatnam', state: 'Andhra Pradesh', lat: 17.6868, lon: 83.2185, category: 'Satisfactory', approxAqi: 78 },
  { name: 'Nagpur', state: 'Maharashtra', lat: 21.1458, lon: 79.0882, category: 'Moderate', approxAqi: 128 },
  { name: 'Indore', state: 'Madhya Pradesh', lat: 22.7196, lon: 75.8577, category: 'Satisfactory', approxAqi: 86 },
  { name: 'Varanasi', state: 'Uttar Pradesh', lat: 25.3176, lon: 82.9739, category: 'Poor', approxAqi: 265 },
];

interface AirQualityMapProps {
  center: [number, number];
  zoom?: number;
  height?: string;
  activeLocationName: string;
  airQualityData: AirQualityResponse | null;
  onLocationSelect: (lat: number, lon: number, customLabel?: string) => void;
  onInspectDetails?: () => void;
}

export default function AirQualityMap({
  center,
  zoom = 6,
  height = '500px',
  activeLocationName,
  airQualityData,
  onLocationSelect,
  onInspectDetails,
}: AirQualityMapProps) {
  const [mounted, setMounted] = useState(false);
  const [showAtmosphericHalo, setShowAtmosphericHalo] = useState(true);

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
          <Wind className="w-8 h-8 text-red-600 animate-spin" />
          <span className="text-sm font-bold text-slate-700">Loading Real-Time Air Quality Map...</span>
        </div>
      </div>
    );
  }

  // Dynamic Leaflet resolution
  const L = require('leaflet');
  const { MapContainer, TileLayer, Marker, Popup, Circle, useMap, useMapEvents } = require('react-leaflet');

  // Animated Camera Controller
  function MapController({ targetCenter, targetZoom }: { targetCenter: [number, number]; targetZoom: number }) {
    const map = useMap();
    useEffect(() => {
      map.flyTo(targetCenter, targetZoom, { duration: 1.2 });
    }, [targetCenter[0], targetCenter[1], targetZoom, map]);
    return null;
  }

  // Map Click Listener to pick coordinates anywhere in India
  function MapClickHandler() {
    useMapEvents({
      async click(e: any) {
        const lat = Number(e.latlng.lat.toFixed(4));
        const lon = Number(e.latlng.lng.toFixed(4));
        const geo = await reverseGeocode(lat, lon);
        onLocationSelect(lat, lon, geo.label);
      },
    });
    return null;
  }

  const currentCategory: AqiCategory = airQualityData?.aqi?.category || 'Moderate';
  const categoryMeta = AQI_CATEGORY_COLORS[currentCategory] || AQI_CATEGORY_COLORS.Moderate;
  const currentAqi = airQualityData?.aqi;
  const isGroundScore = Boolean(currentAqi && currentAqi.value > 5);
  const currentLevel =
    currentAqi?.openWeatherIndex ||
    (currentAqi?.value && currentAqi.value <= 5
      ? currentAqi.value
      : currentAqi?.value
      ? currentAqi.value <= 50
        ? 1
        : currentAqi.value <= 100
        ? 2
        : currentAqi.value <= 200
        ? 3
        : currentAqi.value <= 300
        ? 4
        : 5
      : 3);
  const currentAqiValue = currentAqi?.value ?? '—';
  const markerDisplayVal = currentAqiValue;

  // Primary Location Marker: Visual color beacon with glowing pulse and high contrast
  const createActiveMarkerIcon = (colorHex: string, aqiVal: string | number) => {
    const isNum = typeof aqiVal === 'number' || (!isNaN(Number(aqiVal)) && Number(aqiVal) > 9);
    const fontSize = isNum ? '12px' : '13px';
    const html = `
      <div style="position: relative; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center;">
        <div style="position: absolute; width: 56px; height: 56px; border-radius: 50%; background-color: ${colorHex}; opacity: 0.35; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
        <div style="position: absolute; width: 44px; height: 44px; border-radius: 50%; background-color: ${colorHex}; opacity: 0.55;"></div>
        <div style="position: relative; width: 38px; height: 38px; border-radius: 50%; background-color: ${colorHex}; border: 3px solid #FFFFFF; box-shadow: 0 4px 16px rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-weight: 900; font-size: ${fontSize}; font-family: system-ui, -apple-system, sans-serif;">
          ${aqiVal}
        </div>
      </div>
    `;

    return L.divIcon({
      className: 'custom-aqi-active-icon',
      html,
      iconSize: [56, 56],
      iconAnchor: [28, 28],
      popupAnchor: [0, -28],
    });
  };

  // City Node Marker: Vivid colored circle dot representing location by AQI color
  const createCityColorDotIcon = (category: AqiCategory, isSelected: boolean) => {
    const color = AQI_CATEGORY_COLORS[category]?.hex || '#F59E0B';
    const size = isSelected ? 28 : 20;
    const border = isSelected ? '3px solid #0F172A' : '2px solid #FFFFFF';
    const shadow = isSelected ? '0 0 12px ' + color : '0 2px 8px rgba(0,0,0,0.25)';

    const html = `
      <div style="width: ${size}px; height: ${size}px; border-radius: 50%; background-color: ${color}; border: ${border}; box-shadow: ${shadow}; transition: transform 0.2s ease; display: flex; align-items: center; justify-content: center;">
      </div>
    `;

    return L.divIcon({
      className: 'custom-aqi-city-dot',
      html,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -size / 2],
    });
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
      {/* Top Map Header & Controls Bar */}
      <div className="absolute top-4 left-4 right-4 z-[400] flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* Left: Active Location Color Indicator Badge */}
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/90 shadow-lg flex items-center gap-3">
          {/* Glowing color orb representing location by color */}
          <div className="relative flex items-center justify-center">
            <span
              className="absolute w-5 h-5 rounded-full animate-ping opacity-60"
              style={{ backgroundColor: categoryMeta.hex }}
            />
            <span
              className="relative w-4 h-4 rounded-full ring-2 ring-white shadow-sm"
              style={{ backgroundColor: categoryMeta.hex }}
            />
          </div>

          <div className="flex flex-col">
            <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Active Coordinates
            </div>
            <div className="text-xs font-black text-slate-900 truncate max-w-[200px] sm:max-w-[260px]">
              {activeLocationName}
            </div>
          </div>

          <div
            onClick={() => onInspectDetails?.()}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black text-white ml-1 shadow-sm flex flex-col items-end leading-tight ${
              onInspectDetails ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform' : ''
            }`}
            style={{ backgroundColor: categoryMeta.hex }}
            title={onInspectDetails ? 'Click to inspect remaining air quality details' : undefined}
          >
            <span className="text-sm font-black tracking-tight">AQI {currentAqiValue}</span>
            <span className="text-[10px] font-bold opacity-90">
              {currentCategory === 'Satisfactory' ? 'Satisfactory' : currentCategory} (NAQI {INDIA_NAQI_MAPPINGS[currentLevel]?.naqiRange})
            </span>
          </div>
        </div>

        {/* Right: Quick Map Controls */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setShowAtmosphericHalo(!showAtmosphericHalo)}
            className={`px-3 py-2 rounded-2xl text-xs font-extrabold flex items-center gap-1.5 shadow-md backdrop-blur-md transition ${
              showAtmosphericHalo
                ? 'bg-slate-900 text-white'
                : 'bg-white/95 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
            title="Toggle atmospheric dispersion circle"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Pollution Halo</span>
          </button>

          <button
            onClick={() => onLocationSelect(20.5937, 78.9629, 'India Overview')}
            className="px-3 py-2 rounded-2xl text-xs font-extrabold bg-white/95 text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-md backdrop-blur-md transition flex items-center gap-1.5"
            title="Fit to All-India view"
          >
            <Maximize2 className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">All-India</span>
          </button>
        </div>
      </div>

      {/* Main Leaflet Map Container */}
      <div style={{ height }}>
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%', zIndex: 1 }}
        >
          <MapController targetCenter={center} targetZoom={zoom} />
          <MapClickHandler />

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Weather API'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Atmospheric Dispersion Footprint Circle (Colored by AQI) */}
          {showAtmosphericHalo && (
            <Circle
              center={center}
              radius={18000}
              pathOptions={{
                color: categoryMeta.hex,
                fillColor: categoryMeta.hex,
                fillOpacity: 0.18,
                weight: 2,
                dashArray: '6, 6',
              }}
            />
          )}

          {/* Major Indian Hubs as Colored Circular Beacons */}
          {POPULAR_INDIAN_HUBS.map((hub) => {
            const isSelected =
              Math.abs(hub.lat - center[0]) < 0.1 && Math.abs(hub.lon - center[1]) < 0.1;

            // If this hub is currently selected, skip rendering the static dot so the live ActiveMarker handles clicks and popups
            if (isSelected) return null;

            const hubColor = AQI_CATEGORY_COLORS[hub.category]?.hex || '#F59E0B';

            return (
              <Marker
                key={hub.name}
                position={[hub.lat, hub.lon]}
                icon={createCityColorDotIcon(hub.category, false)}
                eventHandlers={{
                  click: () => onLocationSelect(hub.lat, hub.lon, `${hub.name}, ${hub.state}`),
                }}
              >
                <Popup className="fixmumbai-leaflet-popup">
                  <div className="p-2 space-y-2 text-xs font-sans max-w-[220px]">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                      <span className="font-black text-sm text-slate-900">{hub.name}</span>
                      <span className="text-[10px] font-bold text-slate-500">{hub.state}</span>
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl text-slate-700">
                      <span className="text-[11px] font-semibold">Typical Air Quality:</span>
                      <span className="font-black text-xs text-slate-900">
                        AQI {hub.approxAqi} ({hub.category})
                      </span>
                    </div>

                    <button
                      onClick={() => onLocationSelect(hub.lat, hub.lon, `${hub.name}, ${hub.state}`)}
                      className="w-full mt-1.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[11px] font-extrabold transition shadow-sm"
                    >
                      Inspect Live AQI
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          {/* Active / User Selected Location Marker */}
          <Marker
            position={center}
            icon={createActiveMarkerIcon(categoryMeta.hex, markerDisplayVal)}
          >
            <Popup className="fixmumbai-leaflet-popup">
              <div className="p-2 space-y-2 text-xs font-sans max-w-[250px]">
                <div
                  className="p-3 rounded-2xl text-white space-y-1 shadow-sm"
                  style={{ backgroundColor: categoryMeta.hex }}
                >
                  <div className="text-[10px] uppercase font-black tracking-wider opacity-90 flex items-center justify-between">
                    <span>
                      {airQualityData?.station?.source === 'AQICN' || airQualityData?.station?.source === 'CPCB'
                        ? 'Ground Sensor'
                        : 'Atmospheric Model'}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-black/20 text-[9px] font-extrabold">
                      India NAQI
                    </span>
                  </div>
                  <div className="text-xl font-black leading-tight flex items-baseline gap-1.5">
                    <span>{currentAqiValue} AQI</span>
                    <span className="text-xs font-extrabold opacity-90">
                      · {currentCategory === 'Satisfactory' ? 'Satisfactory' : currentCategory}
                    </span>
                  </div>
                  <div className="text-xs font-bold opacity-95">
                    NAQI Band: {INDIA_NAQI_MAPPINGS[currentLevel]?.naqiRange}
                  </div>
                </div>

                <div className="space-y-1 text-[11px]">
                  <div className="font-bold text-slate-800">{activeLocationName}</div>
                  <div className="text-slate-500">
                    Coordinates: {center[0].toFixed(3)}°N, {center[1].toFixed(3)}°E
                  </div>
                  {airQualityData?.aqi?.dominantPollutant && (
                    <div className="text-slate-700 font-semibold pt-1 border-t border-slate-100 flex items-center justify-between">
                      <span>Dominant:</span>
                      <span className="font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
                        {airQualityData.aqi.dominantPollutant}
                      </span>
                    </div>
                  )}

                  {onInspectDetails && (
                    <button
                      onClick={() => onInspectDetails()}
                      className="w-full mt-2 py-1.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-[11px] shadow-sm transition active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <span>Click to View Remaining Details</span>
                    </button>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Floating Bottom Glassmorphic Color Spectrum Legend */}
      <div className="absolute bottom-4 left-4 right-4 z-[400] pointer-events-none">
        <div className="pointer-events-auto max-w-2xl mx-auto bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-xl space-y-2">
          <div className="flex items-center justify-between text-[11px] font-black text-slate-600 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              Weather API Air Quality Spectrum
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Click map to inspect any location</span>
          </div>

          {/* Color Gradient Swatches representing location status by color */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-1.5">
            {Object.entries(AQI_CATEGORY_COLORS)
              .map(([cat, meta]) => (
                <div
                  key={cat}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <span
                    className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: meta.hex }}
                  />
                  <span className="text-[10px] font-black text-slate-700 truncate">
                    {meta.label}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
