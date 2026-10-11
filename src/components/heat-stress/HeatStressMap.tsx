'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import type { WbgtCalculationResult } from '@/lib/wbgt/calculator';
import { calculateWbgt } from '@/lib/wbgt/calculator';
import { Thermometer, CloudRain, Wind, Layers, MapPin, Eye, EyeOff } from 'lucide-react';

interface WeatherMapProps {
  selectedLocation: { lat: number; lon: number; name: string; state?: string };
  onSelectLocation: (lat: number, lon: number, name?: string, state?: string) => void;
  result: WbgtCalculationResult;
  currentTemp: number;
  currentHumidity: number;
  windSpeed: number;
  windDirection: number;
  loading: boolean;
}

// Major cities and landmark capitals across India with realistic regional temperatures
const INDIA_CITIES = [
  { name: 'Mumbai', state: 'Maharashtra', lat: 19.0760, lon: 72.8777, temp: 34.0, rh: 65 },
  { name: 'Pune', state: 'Maharashtra', lat: 18.5204, lon: 73.8567, temp: 31.5, rh: 48 },
  { name: 'Nagpur', state: 'Maharashtra', lat: 21.1458, lon: 79.0882, temp: 35.8, rh: 38 },
  { name: 'Nashik', state: 'Maharashtra', lat: 19.9975, lon: 73.7898, temp: 30.2, rh: 44 },
  { name: 'Chhatrapati Sambhajinagar', state: 'Maharashtra', lat: 19.8762, lon: 75.3433, temp: 33.4, rh: 42 },
  { name: 'New Delhi', state: 'Delhi NCR', lat: 28.6139, lon: 77.2090, temp: 33.5, rh: 45 },
  { name: 'Bengaluru', state: 'Karnataka', lat: 12.9716, lon: 77.5946, temp: 27.8, rh: 64 },
  { name: 'Hyderabad', state: 'Telangana', lat: 17.3850, lon: 78.4867, temp: 32.5, rh: 50 },
  { name: 'Chennai', state: 'Tamil Nadu', lat: 13.0827, lon: 80.2707, temp: 33.2, rh: 72 },
  { name: 'Kolkata', state: 'West Bengal', lat: 22.5726, lon: 88.3639, temp: 32.8, rh: 70 },
  { name: 'Ahmedabad', state: 'Gujarat', lat: 23.0225, lon: 72.5714, temp: 36.4, rh: 38 },
  { name: 'Surat', state: 'Gujarat', lat: 21.1702, lon: 72.8311, temp: 34.2, rh: 55 },
  { name: 'Jaipur', state: 'Rajasthan', lat: 26.9124, lon: 75.7873, temp: 34.8, rh: 32 },
  { name: 'Lucknow', state: 'Uttar Pradesh', lat: 26.8467, lon: 80.9462, temp: 33.1, rh: 52 },
  { name: 'Bhopal', state: 'Madhya Pradesh', lat: 23.2599, lon: 77.4126, temp: 34.2, rh: 40 },
  { name: 'Panaji', state: 'Goa', lat: 15.4909, lon: 73.8278, temp: 31.8, rh: 74 },
  { name: 'Visakhapatnam', state: 'Andhra Pradesh', lat: 17.6868, lon: 83.2185, temp: 32.0, rh: 68 },
  { name: 'Kochi', state: 'Kerala', lat: 9.9312, lon: 76.2673, temp: 30.5, rh: 78 },
  { name: 'Patna', state: 'Bihar', lat: 25.5941, lon: 85.1376, temp: 32.4, rh: 58 },
  { name: 'Bhubaneswar', state: 'Odisha', lat: 20.2961, lon: 85.8245, temp: 33.0, rh: 66 },
  { name: 'Guwahati', state: 'Assam', lat: 26.1445, lon: 91.7362, temp: 29.5, rh: 72 },
  { name: 'Srinagar', state: 'Jammu & Kashmir', lat: 34.0837, lon: 74.7973, temp: 21.0, rh: 55 },
];

// 45 Regional Weather Stations covering all quadrants of India for broad thermal interpolation
const INDIA_THERMAL_GRID = [
  // North
  { lat: 32.7266, lon: 74.8570, baseTemp: 26.0 }, // Jammu
  { lat: 30.7333, lon: 76.7794, baseTemp: 31.0 }, // Chandigarh
  { lat: 29.0588, lon: 76.0856, baseTemp: 33.0 }, // Haryana
  { lat: 28.6139, lon: 77.2090, baseTemp: 33.5 }, // Delhi
  { lat: 27.1767, lon: 78.0081, baseTemp: 34.2 }, // Agra
  { lat: 26.8467, lon: 80.9462, baseTemp: 33.1 }, // Lucknow
  { lat: 25.3176, lon: 82.9739, baseTemp: 33.8 }, // Varanasi
  // West & Thar Desert
  { lat: 28.0229, lon: 73.3119, baseTemp: 36.5 }, // Bikaner
  { lat: 26.9124, lon: 75.7873, baseTemp: 34.8 }, // Jaipur
  { lat: 26.2389, lon: 73.0243, baseTemp: 36.0 }, // Jodhpur
  { lat: 24.5854, lon: 73.7125, baseTemp: 33.5 }, // Udaipur
  { lat: 23.0225, lon: 72.5714, baseTemp: 36.4 }, // Ahmedabad
  { lat: 22.3039, lon: 70.8022, baseTemp: 34.5 }, // Rajkot
  { lat: 21.1702, lon: 72.8311, baseTemp: 34.2 }, // Surat
  // Central
  { lat: 26.2183, lon: 78.1828, baseTemp: 34.5 }, // Gwalior
  { lat: 23.2599, lon: 77.4126, baseTemp: 34.2 }, // Bhopal
  { lat: 22.7196, lon: 75.8577, baseTemp: 33.0 }, // Indore
  { lat: 23.1815, lon: 79.9864, baseTemp: 33.8 }, // Jabalpur
  { lat: 21.2514, lon: 81.6296, baseTemp: 34.5 }, // Raipur
  // Maharashtra
  { lat: 20.9320, lon: 77.7523, baseTemp: 35.2 }, // Amravati
  { lat: 21.1458, lon: 79.0882, baseTemp: 35.8 }, // Nagpur
  { lat: 19.9975, lon: 73.7898, baseTemp: 30.2 }, // Nashik
  { lat: 19.8762, lon: 75.3433, baseTemp: 33.4 }, // Chhatrapati Sambhajinagar
  { lat: 19.0760, lon: 72.8777, baseTemp: 34.0 }, // Mumbai
  { lat: 18.5204, lon: 73.8567, baseTemp: 31.5 }, // Pune
  { lat: 17.6599, lon: 75.9064, baseTemp: 34.5 }, // Solapur
  { lat: 16.7050, lon: 74.2433, baseTemp: 31.2 }, // Kolhapur
  // East
  { lat: 25.5941, lon: 85.1376, baseTemp: 32.4 }, // Patna
  { lat: 23.3441, lon: 85.3096, baseTemp: 31.0 }, // Ranchi
  { lat: 22.5726, lon: 88.3639, baseTemp: 32.8 }, // Kolkata
  { lat: 20.2961, lon: 85.8245, baseTemp: 33.0 }, // Bhubaneswar
  // South
  { lat: 17.3850, lon: 78.4867, baseTemp: 32.5 }, // Hyderabad
  { lat: 15.8281, lon: 78.0373, baseTemp: 34.5 }, // Kurnool
  { lat: 17.6868, lon: 83.2185, baseTemp: 32.0 }, // Visakhapatnam
  { lat: 16.5062, lon: 80.6480, baseTemp: 33.5 }, // Vijayawada
  { lat: 15.3647, lon: 75.1240, baseTemp: 32.0 }, // Hubli
  { lat: 15.4909, lon: 73.8278, baseTemp: 31.8 }, // Goa
  { lat: 12.9716, lon: 77.5946, baseTemp: 27.8 }, // Bengaluru
  { lat: 12.2958, lon: 76.6394, baseTemp: 28.5 }, // Mysuru
  { lat: 13.0827, lon: 80.2707, baseTemp: 33.2 }, // Chennai
  { lat: 11.0168, lon: 76.9558, baseTemp: 30.2 }, // Coimbatore
  { lat: 9.9252, lon: 78.1198, baseTemp: 33.5 }, // Madurai
  { lat: 9.9312, lon: 76.2673, baseTemp: 30.5 }, // Kochi
  { lat: 8.5241, lon: 76.9366, baseTemp: 31.2 }, // Thiruvananthapuram
];

const OWM_KEY = '04bbf64005764c6d5244b124ad5b98d6';

/**
 * Exact Weather Color Scale:
 * Cool (<24°C): Deep Blue / Teal (#2563EB, #06B6D4)
 * Mild (24-28°C): Emerald Green (#10B981)
 * Moderate Warm (28-32°C): Bright Yellow / Amber (#EAB308, #F59E0B)
 * High Heat (32-35°C): Vibrant Orange (#EA580C)
 * Extreme Heat (>=35°C): Crimson / Deep Red (#DC2626, #BE123C)
 */
function getTemperatureColor(temp: number): { hex: string; category: string } {
  if (temp >= 35) return { hex: '#DC2626', category: 'Extreme Heat' };
  if (temp >= 32) return { hex: '#EA580C', category: 'Warm Heat' };
  if (temp >= 28) return { hex: '#EAB308', category: 'Moderate' };
  if (temp >= 24) return { hex: '#10B981', category: 'Mild' };
  return { hex: '#2563EB', category: 'Cool' };
}

export default function WeatherMap({
  selectedLocation,
  onSelectLocation,
  result,
  currentTemp,
  currentHumidity,
  windSpeed,
  windDirection,
  loading,
}: WeatherMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const thermalCanvasLayerRef = useRef<any>(null);
  const targetMarkerRef = useRef<any>(null);
  const LRef = useRef<any>(null);

  const [activeLayer, setActiveLayer] = useState<'temp_radar' | 'clouds' | 'precipitation'>('temp_radar');

  // Initialize Map
  useEffect(() => {
    let isMounted = true;

    async function init() {
      if (!containerRef.current || mapRef.current) return;

      const L = await import('leaflet');
      // @ts-ignore
      await import('leaflet/dist/leaflet.css');
      LRef.current = L;

      if (!isMounted || !containerRef.current) return;

      // 1. Create Base Map centered on India (latitude 21.0, longitude 78.5)
      const map = L.map(containerRef.current, {
        center: [21.5, 78.5],
        zoom: 5,
        minZoom: 4,
        maxZoom: 15,
        zoomControl: false,
        attributionControl: false,
      });

      // 2. Clear Light Gray Base: Shows all Indian State boundaries, coastlines, and rivers
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 16,
          attribution: '&copy; Esri &copy; OpenStreetMap contributors | FixMumbai',
        }
      ).addTo(map);

      // 3. Transparent Reference Layer: Clear crisp labels for all Indian States, Cities & Towns
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 16,
          zIndex: 400, // Kept on top so state & city names always stay crisp
        }
      ).addTo(map);

      L.control.zoom({ position: 'bottomright' }).addTo(map);
      mapRef.current = map;

      // 4. Render Weather Thermal Radial Heat Field
      renderThermalField(map, L);

      // 5. Add India City Markers as circular AQI-style badges
      INDIA_CITIES.forEach((c) => {
        const color = getTemperatureColor(c.temp);
        const cityIcon = L.divIcon({
          className: 'city-weather-circular-badge',
          html: `
            <div style="
              background-color: ${color.hex};
              width: 34px;
              height: 34px;
              border-radius: 50%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border: 2.5px solid #FFFFFF;
              box-shadow: 0 4px 12px rgba(0,0,0,0.35);
              color: #FFFFFF;
              font-family: system-ui, -apple-system, sans-serif;
              cursor: pointer;
              transform: translate(-50%, -50%);
              transition: transform 0.15s ease;
            ">
              <span style="font-weight: 900; font-size: 13px; line-height: 1;">${Math.round(c.temp)}°</span>
            </div>
          `,
          iconSize: [0, 0],
        });

        const m = L.marker([c.lat, c.lon], { icon: cityIcon, zIndexOffset: 1000 }).addTo(map);

        // Tooltip displaying city name on hover
        m.bindTooltip(`<strong>${c.name}</strong>, ${c.state}<br/>Temp: ${c.temp}°C`, {
          direction: 'top',
          offset: [0, -18],
          className: 'weather-city-tooltip',
        });

        m.on('click', (ev: any) => {
          L.DomEvent.stopPropagation(ev);
          onSelectLocation(c.lat, c.lon, c.name, c.state);
        });
      });

      // 6. Click anywhere across India to sample real weather
      map.on('click', (e: any) => {
        const { lat, lng } = e.latlng;
        onSelectLocation(lat, lng, 'Selected Location');
      });

      // 7. Add Target Marker
      createOrUpdateTargetMarker(map, L, selectedLocation.lat, selectedLocation.lon);
    }

    init();

    return () => {
      isMounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Render the Weather Heatmap Color Field (Yellow, Orange, Red, Blue) across Indian states
  const renderThermalField = (map: LeafletMap, L: any) => {
    if (thermalCanvasLayerRef.current) {
      map.removeLayer(thermalCanvasLayerRef.current);
      thermalCanvasLayerRef.current = null;
    }

    const group = L.layerGroup();

    // Loop through regional thermal stations and paint ambient heat halos
    INDIA_THERMAL_GRID.forEach((st) => {
      // Calculate realistic regional temperature
      const tempDelta = currentTemp - 34; // Delta shift based on current inspected location
      const localTemp = Math.round((st.baseTemp + tempDelta * 0.4) * 10) / 10;
      const { hex } = getTemperatureColor(localTemp);

      // Outer soft radial heat field (Yellow, Orange, Red)
      L.circle([st.lat, st.lon], {
        radius: 120000, // 120km radius heat halo
        fillColor: hex,
        fillOpacity: 0.28,
        stroke: false,
        interactive: false,
      }).addTo(group);

      // Inner concentrated core heat field
      L.circle([st.lat, st.lon], {
        radius: 65000, // 65km core
        fillColor: hex,
        fillOpacity: 0.42,
        stroke: false,
        interactive: false,
      }).addTo(group);
    });

    // Also add real OpenWeather tile overlay at 0.5 opacity for extra radar cloud/wind texture
    const owmLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
      {
        maxZoom: 16,
        opacity: 0.55,
        zIndex: 250,
      }
    );
    owmLayer.addTo(group);

    group.addTo(map);
    thermalCanvasLayerRef.current = group;
  };

  // Re-render field when current temperature changes
  useEffect(() => {
    if (mapRef.current && LRef.current) {
      renderThermalField(mapRef.current, LRef.current);
      createOrUpdateTargetMarker(mapRef.current, LRef.current, selectedLocation.lat, selectedLocation.lon);
    }
  }, [currentTemp]);

  // Target Location Indicator: Exact Green Glowing Ring from Reference Image
  const createOrUpdateTargetMarker = (map: LeafletMap, L: any, lat: number, lon: number) => {
    if (targetMarkerRef.current) {
      targetMarkerRef.current.remove();
      targetMarkerRef.current = null;
    }

    const { hex } = getTemperatureColor(currentTemp);

    const iconHtml = `
      <div style="
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 4px solid #22C55E;
        box-shadow: 0 0 20px #22C55E, 0 4px 14px rgba(0,0,0,0.6);
        background: rgba(34, 197, 94, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);
        animation: pulseRing 1.8s infinite;
      ">
        <div style="
          background: #FFFFFF;
          color: #0F172A;
          font-family: system-ui, sans-serif;
          font-size: 10px;
          font-weight: 900;
          padding: 2px 6px;
          border-radius: 9999px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          white-space: nowrap;
          position: absolute;
          top: -22px;
          border: 1px solid #E2E8F0;
        ">
          ${currentTemp}°C
        </div>
        <div style="width: 8px; height: 8px; border-radius: 50%; background: #22C55E; box-shadow: 0 0 8px #22C55E;"></div>
      </div>
      <style>
        @keyframes pulseRing {
          0% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.95; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.95; }
        }
      </style>
    `;

    const customIcon = L.divIcon({
      className: 'target-weather-ring',
      html: iconHtml,
      iconSize: [0, 0],
    });

    targetMarkerRef.current = L.marker([lat, lon], { icon: customIcon, zIndexOffset: 2500 }).addTo(map);
  };

  return (
    <div className="relative w-full h-[540px] sm:h-[660px] rounded-3xl overflow-hidden border border-slate-300 shadow-xl bg-slate-100">
      <div ref={containerRef} className="w-full h-full z-0" />

      {/* Top Left: Location Inspection Card */}
      <div className="absolute top-4 left-4 z-[500] bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200 shadow-xl pointer-events-auto max-w-[280px] sm:max-w-md">
        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Inspected Location</span>
        </div>
        <div className="text-base sm:text-lg font-black text-slate-900 truncate mt-0.5">
          {selectedLocation.name}
        </div>
        <div className="text-xs font-bold text-emerald-600">
          {selectedLocation.state ? `${selectedLocation.state}, ` : ''}India
        </div>
        <div className="text-[11px] font-mono text-slate-500 mt-0.5">
          Lat: {selectedLocation.lat.toFixed(4)}, Lon: {selectedLocation.lon.toFixed(4)}
        </div>
      </div>

      {/* Top Right: Status Badge */}
      <div className="absolute top-4 right-4 z-[500] bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2 text-xs font-bold text-slate-700 pointer-events-none">
        <Thermometer className="w-4 h-4 text-rose-500" />
        <span>India Weather Heatmap Active</span>
      </div>

      {/* Bottom Center: Heat Color Spectrum Scale (Blue -> Green -> Yellow -> Orange -> Red) */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[500] bg-white/95 backdrop-blur-md border border-slate-200 px-5 py-3 rounded-2xl shadow-2xl pointer-events-auto max-w-[94%] sm:max-w-lg w-full">
        <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5">
          <span className="flex items-center gap-1.5">
            <Thermometer className="w-3.5 h-3.5 text-rose-500" />
            Thermal Color Spectrum (°C)
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Radar Satellite Field</span>
        </div>

        {/* Color Gradient Strip: Blue -> Green -> Yellow -> Orange -> Red */}
        <div className="w-full h-3 rounded-full bg-gradient-to-r from-[#2563EB] via-[#10B981] via-[#EAB308] via-[#EA580C] to-[#DC2626] shadow-inner" />

        {/* Temperature step indicators */}
        <div className="flex justify-between text-[10px] font-mono font-bold text-slate-600 mt-1">
          <span>&lt; 24°C (Cool/Blue)</span>
          <span>24-28°C (Green)</span>
          <span>28-32°C (Yellow)</span>
          <span>32-35°C (Orange)</span>
          <span>&gt; 35°C (Red)</span>
        </div>
      </div>
    </div>
  );
}
