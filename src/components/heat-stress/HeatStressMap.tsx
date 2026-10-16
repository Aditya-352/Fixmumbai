'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import type { Map as LeafletMap } from 'leaflet';
import type { WbgtCalculationResult } from '@/lib/wbgt/calculator';
import { calculateWbgt } from '@/lib/wbgt/calculator';
import { Flame, Thermometer, Droplets, Wind, Layers, MapPin, Eye, Info } from 'lucide-react';

interface HeatStressMapProps {
  selectedLocation: {
    lat: number;
    lon: number;
    name: string;
    state?: string;
    zoom?: number;
    locateKey?: number;
  };
  onSelectLocation: (lat: number, lon: number, name?: string, state?: string) => void;
  result: WbgtCalculationResult;
  currentTemp: number;
  currentHumidity: number;
  windSpeed: number;
  windDirection: number;
  loading: boolean;
}

// 56 Regional Thermal Stations covering Maharashtra densely and all quadrants of India
const THERMAL_STATIONS = [
  // --- Mumbai Metropolitan Region (MMR) & Coastal Konkan ---
  { name: 'Colaba', state: 'Mumbai', lat: 18.9067, lon: 72.8147, baseTemp: 33.6, baseRh: 72, isMajor: false },
  { name: 'Marine Drive', state: 'Mumbai', lat: 18.9438, lon: 72.8232, baseTemp: 33.8, baseRh: 70, isMajor: false },
  { name: 'Dadar', state: 'Mumbai', lat: 19.0178, lon: 72.8478, baseTemp: 34.2, baseRh: 68, isMajor: false },
  { name: 'Bandra', state: 'Mumbai', lat: 19.0596, lon: 72.8295, baseTemp: 34.0, baseRh: 66, isMajor: false },
  { name: 'Kurla / BKC', state: 'Mumbai', lat: 19.0664, lon: 72.8682, baseTemp: 34.5, baseRh: 65, isMajor: false },
  { name: 'Mumbai City', state: 'Maharashtra', lat: 19.0760, lon: 72.8777, baseTemp: 34.0, baseRh: 65, isMajor: true },
  { name: 'Andheri', state: 'Mumbai', lat: 19.1136, lon: 72.8697, baseTemp: 34.3, baseRh: 64, isMajor: false },
  { name: 'Borivali', state: 'Mumbai', lat: 19.2288, lon: 72.8541, baseTemp: 34.1, baseRh: 63, isMajor: false },
  { name: 'Thane', state: 'Maharashtra', lat: 19.2183, lon: 72.9781, baseTemp: 34.8, baseRh: 62, isMajor: true },
  { name: 'Navi Mumbai', state: 'Maharashtra', lat: 19.0771, lon: 72.9986, baseTemp: 35.0, baseRh: 60, isMajor: true },
  { name: 'Panvel', state: 'Maharashtra', lat: 18.9894, lon: 73.1175, baseTemp: 35.2, baseRh: 58, isMajor: false },
  { name: 'Kalyan', state: 'Maharashtra', lat: 19.2437, lon: 73.1355, baseTemp: 35.4, baseRh: 58, isMajor: false },
  { name: 'Vasai-Virar', state: 'Maharashtra', lat: 19.4259, lon: 72.8225, baseTemp: 34.3, baseRh: 65, isMajor: false },
  { name: 'Alibaug', state: 'Maharashtra', lat: 18.6414, lon: 72.8722, baseTemp: 33.4, baseRh: 74, isMajor: false },
  { name: 'Ratnagiri', state: 'Maharashtra', lat: 16.9902, lon: 73.3120, baseTemp: 32.5, baseRh: 76, isMajor: false },

  // --- Maharashtra Regional Hubs ---
  { name: 'Pune', state: 'Maharashtra', lat: 18.5204, lon: 73.8567, baseTemp: 31.5, baseRh: 48, isMajor: true },
  { name: 'Pimpri-Chinchwad', state: 'Maharashtra', lat: 18.6279, lon: 73.8009, baseTemp: 31.8, baseRh: 47, isMajor: false },
  { name: 'Nashik', state: 'Maharashtra', lat: 19.9975, lon: 73.7898, baseTemp: 30.2, baseRh: 44, isMajor: true },
  { name: 'Chhatrapati Sambhajinagar', state: 'Maharashtra', lat: 19.8762, lon: 75.3433, baseTemp: 33.4, baseRh: 42, isMajor: true },
  { name: 'Nagpur', state: 'Maharashtra', lat: 21.1458, lon: 79.0882, baseTemp: 35.8, baseRh: 38, isMajor: true },
  { name: 'Amravati', state: 'Maharashtra', lat: 20.9320, lon: 77.7523, baseTemp: 35.2, baseRh: 36, isMajor: false },
  { name: 'Akola', state: 'Maharashtra', lat: 20.7002, lon: 77.0082, baseTemp: 35.6, baseRh: 35, isMajor: false },
  { name: 'Jalgaon', state: 'Maharashtra', lat: 21.0077, lon: 75.5626, baseTemp: 35.5, baseRh: 38, isMajor: false },
  { name: 'Dhule', state: 'Maharashtra', lat: 20.9042, lon: 74.7749, baseTemp: 34.6, baseRh: 40, isMajor: false },
  { name: 'Solapur', state: 'Maharashtra', lat: 17.6599, lon: 75.9064, baseTemp: 34.5, baseRh: 40, isMajor: false },
  { name: 'Kolhapur', state: 'Maharashtra', lat: 16.7050, lon: 74.2433, baseTemp: 31.2, baseRh: 55, isMajor: false },
  { name: 'Satara', state: 'Maharashtra', lat: 17.6805, lon: 73.9926, baseTemp: 30.8, baseRh: 52, isMajor: false },
  { name: 'Nanded', state: 'Maharashtra', lat: 19.1383, lon: 77.3210, baseTemp: 34.8, baseRh: 42, isMajor: false },
  { name: 'Chandrapur', state: 'Maharashtra', lat: 19.9615, lon: 79.2961, baseTemp: 36.2, baseRh: 36, isMajor: false },

  // --- Northern India ---
  { name: 'New Delhi', state: 'Delhi NCR', lat: 28.6139, lon: 77.2090, baseTemp: 33.5, baseRh: 45, isMajor: true },
  { name: 'Chandigarh', state: 'Punjab/Haryana', lat: 30.7333, lon: 76.7794, baseTemp: 31.0, baseRh: 48, isMajor: false },
  { name: 'Jammu', state: 'Jammu & Kashmir', lat: 32.7266, lon: 74.8570, baseTemp: 26.0, baseRh: 50, isMajor: false },
  { name: 'Srinagar', state: 'Jammu & Kashmir', lat: 34.0837, lon: 74.7973, baseTemp: 21.0, baseRh: 55, isMajor: false },
  { name: 'Agra', state: 'Uttar Pradesh', lat: 27.1767, lon: 78.0081, baseTemp: 34.2, baseRh: 42, isMajor: false },
  { name: 'Lucknow', state: 'Uttar Pradesh', lat: 26.8467, lon: 80.9462, baseTemp: 33.1, baseRh: 52, isMajor: false },
  { name: 'Varanasi', state: 'Uttar Pradesh', lat: 25.3176, lon: 82.9739, baseTemp: 33.8, baseRh: 54, isMajor: false },

  // --- Western & Thar Desert ---
  { name: 'Jaipur', state: 'Rajasthan', lat: 26.9124, lon: 75.7873, baseTemp: 34.8, baseRh: 32, isMajor: false },
  { name: 'Jodhpur', state: 'Rajasthan', lat: 26.2389, lon: 73.0243, baseTemp: 36.0, baseRh: 28, isMajor: false },
  { name: 'Bikaner', state: 'Rajasthan', lat: 28.0229, lon: 73.3119, baseTemp: 36.5, baseRh: 26, isMajor: false },
  { name: 'Udaipur', state: 'Rajasthan', lat: 24.5854, lon: 73.7125, baseTemp: 33.5, baseRh: 35, isMajor: false },
  { name: 'Ahmedabad', state: 'Gujarat', lat: 23.0225, lon: 72.5714, baseTemp: 36.4, baseRh: 38, isMajor: true },
  { name: 'Surat', state: 'Gujarat', lat: 21.1702, lon: 72.8311, baseTemp: 34.2, baseRh: 55, isMajor: false },
  { name: 'Rajkot', state: 'Gujarat', lat: 22.3039, lon: 70.8022, baseTemp: 34.5, baseRh: 42, isMajor: false },

  // --- Central & Eastern India ---
  { name: 'Bhopal', state: 'Madhya Pradesh', lat: 23.2599, lon: 77.4126, baseTemp: 34.2, baseRh: 40, isMajor: false },
  { name: 'Indore', state: 'Madhya Pradesh', lat: 22.7196, lon: 75.8577, baseTemp: 33.0, baseRh: 42, isMajor: false },
  { name: 'Gwalior', state: 'Madhya Pradesh', lat: 26.2183, lon: 78.1828, baseTemp: 34.5, baseRh: 38, isMajor: false },
  { name: 'Jabalpur', state: 'Madhya Pradesh', lat: 23.1815, lon: 79.9864, baseTemp: 33.8, baseRh: 45, isMajor: false },
  { name: 'Raipur', state: 'Chhattisgarh', lat: 21.2514, lon: 81.6296, baseTemp: 34.5, baseRh: 48, isMajor: false },
  { name: 'Patna', state: 'Bihar', lat: 25.5941, lon: 85.1376, baseTemp: 32.4, baseRh: 58, isMajor: false },
  { name: 'Ranchi', state: 'Jharkhand', lat: 23.3441, lon: 85.3096, baseTemp: 31.0, baseRh: 52, isMajor: false },
  { name: 'Kolkata', state: 'West Bengal', lat: 22.5726, lon: 88.3639, baseTemp: 32.8, baseRh: 70, isMajor: true },
  { name: 'Bhubaneswar', state: 'Odisha', lat: 20.2961, lon: 85.8245, baseTemp: 33.0, baseRh: 66, isMajor: false },
  { name: 'Guwahati', state: 'Assam', lat: 26.1445, lon: 91.7362, baseTemp: 29.5, baseRh: 72, isMajor: false },

  // --- Southern India ---
  { name: 'Hyderabad', state: 'Telangana', lat: 17.3850, lon: 78.4867, baseTemp: 32.5, baseRh: 50, isMajor: true },
  { name: 'Visakhapatnam', state: 'Andhra Pradesh', lat: 17.6868, lon: 83.2185, baseTemp: 32.0, baseRh: 68, isMajor: false },
  { name: 'Vijayawada', state: 'Andhra Pradesh', lat: 16.5062, lon: 80.6480, baseTemp: 33.5, baseRh: 62, isMajor: false },
  { name: 'Bengaluru', state: 'Karnataka', lat: 12.9716, lon: 77.5946, baseTemp: 27.8, baseRh: 64, isMajor: true },
  { name: 'Mysuru', state: 'Karnataka', lat: 12.2958, lon: 76.6394, baseTemp: 28.5, baseRh: 62, isMajor: false },
  { name: 'Panaji', state: 'Goa', lat: 15.4909, lon: 73.8278, baseTemp: 31.8, baseRh: 74, isMajor: false },
  { name: 'Chennai', state: 'Tamil Nadu', lat: 13.0827, lon: 80.2707, baseTemp: 33.2, baseRh: 72, isMajor: true },
  { name: 'Coimbatore', state: 'Tamil Nadu', lat: 11.0168, lon: 76.9558, baseTemp: 30.2, baseRh: 60, isMajor: false },
  { name: 'Madurai', state: 'Tamil Nadu', lat: 9.9252, lon: 78.1198, baseTemp: 33.5, baseRh: 65, isMajor: false },
  { name: 'Kochi', state: 'Kerala', lat: 9.9312, lon: 76.2673, baseTemp: 30.5, baseRh: 78, isMajor: false },
  { name: 'Thiruvananthapuram', state: 'Kerala', lat: 8.5241, lon: 76.9366, baseTemp: 31.2, baseRh: 75, isMajor: false },
];

/**
 * WBGT Heat Stress Color Scale (Biophysical Risk):
 * Low (< 25°C): Emerald Green (#10B981) - Safe
 * Moderate (25-28°C): Amber / Yellow (#EAB308) - Caution
 * High (28-31°C): Vibrant Orange (#F97316) - High Thermal Load
 * Very High (31-34°C): Crimson Red (#EF4444) - Severe Heat Strain
 * Extreme (>= 34°C): Deep Ruby / Burgundy (#991B1B) - Critical Danger
 */
function getWbgtColor(wbgt: number): { hex: string; label: string } {
  if (wbgt >= 34) return { hex: '#991B1B', label: 'Extreme Danger' };
  if (wbgt >= 31) return { hex: '#EF4444', label: 'Very High Heat' };
  if (wbgt >= 28) return { hex: '#F97316', label: 'High Heat Strain' };
  if (wbgt >= 25) return { hex: '#EAB308', label: 'Moderate Heat' };
  return { hex: '#10B981', label: 'Low / Safe' };
}

/**
 * Surface Air Temperature Color Scale (°C):
 * Cool (< 24°C): Royal Blue (#2563EB)
 * Mild (24-28°C): Emerald Green (#10B981)
 * Moderate Warm (28-32°C): Amber Yellow (#EAB308)
 * Warm Heat (32-36°C): Vibrant Orange (#EA580C)
 * Extreme Heat (>= 36°C): Crimson Red (#DC2626)
 */
function getTempColor(temp: number): { hex: string; label: string } {
  if (temp >= 36) return { hex: '#DC2626', label: 'Extreme Heat' };
  if (temp >= 32) return { hex: '#EA580C', label: 'Warm Heat' };
  if (temp >= 28) return { hex: '#EAB308', label: 'Moderate' };
  if (temp >= 24) return { hex: '#10B981', label: 'Mild' };
  return { hex: '#2563EB', label: 'Cool' };
}

function hexToRgba(hex: string, alpha: number): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function HeatStressMap({
  selectedLocation,
  onSelectLocation,
  result,
  currentTemp,
  currentHumidity,
  windSpeed,
  windDirection,
  loading,
}: HeatStressMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const markersGroupRef = useRef<any>(null);
  const targetMarkerRef = useRef<any>(null);
  const LRef = useRef<any>(null);

  // Active heatmap layer mode: 'temp' (Surface Temperature)
  const heatmapMode = 'temp';

  // Compute thermal values & WBGT biophysical score for all regional stations
  const computedStations = useMemo(() => {
    const tempDelta = currentTemp - 34.0;
    const rhDelta = (currentHumidity - 55) * 0.25;

    return THERMAL_STATIONS.map((st) => {
      const localTemp = Math.round((st.baseTemp + tempDelta * 0.35) * 10) / 10;
      const localRh = Math.max(15, Math.min(95, Math.round(st.baseRh + rhDelta)));
      const wbgtCalc = calculateWbgt(localTemp, localRh, true);
      const localWbgt = wbgtCalc.wbgt;

      const wbgtInfo = getWbgtColor(localWbgt);
      const tempInfo = getTempColor(localTemp);

      return {
        ...st,
        temp: localTemp,
        rh: localRh,
        wbgt: localWbgt,
        wbgtColor: wbgtInfo.hex,
        wbgtLabel: wbgtInfo.label,
        tempColor: tempInfo.hex,
        tempLabel: tempInfo.label,
      };
    });
  }, [currentTemp, currentHumidity]);

  // Redraw the continuous HTML5 Canvas Thermal Heat Map Layer
  const redrawHeatCanvas = () => {
    if (!canvasRef.current || !mapRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const map = mapRef.current;
    const dpr = window.devicePixelRatio || 1;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const zoom = map.getZoom();
    // Dynamically scale heat blur radius according to zoom level
    const baseRadius = Math.max(90, Math.min(280, Math.pow(1.36, zoom - 4) * 65));

    // Paint smooth continuous thermal radial gradients for all stations
    computedStations.forEach((st) => {
      const pt = map.latLngToContainerPoint([st.lat, st.lon]);
      if (
        pt.x < -baseRadius * 1.5 ||
        pt.x > width + baseRadius * 1.5 ||
        pt.y < -baseRadius * 1.5 ||
        pt.y > height + baseRadius * 1.5
      ) {
        return;
      }

      const activeColor = st.tempColor;
      const grad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, baseRadius);

      grad.addColorStop(0, hexToRgba(activeColor, 0.72));
      grad.addColorStop(0.35, hexToRgba(activeColor, 0.48));
      grad.addColorStop(0.70, hexToRgba(activeColor, 0.20));
      grad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, baseRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  };

  // Re-render city badge markers on map
  const renderCityMarkers = (map: LeafletMap, L: any) => {
    if (markersGroupRef.current) {
      markersGroupRef.current.clearLayers();
    } else {
      markersGroupRef.current = L.layerGroup().addTo(map);
    }

    computedStations
      .filter((c) => c.isMajor)
      .forEach((c) => {
        const activeColor = c.tempColor;
        const displayVal = `${Math.round(c.temp)}°`;

        const cityIcon = L.divIcon({
          className: 'wbgt-heatmap-circular-badge',
          html: `
            <div style="
              background-color: ${activeColor};
              width: 36px;
              height: 36px;
              border-radius: 50%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              border: 2.5px solid #FFFFFF;
              box-shadow: 0 4px 14px rgba(0,0,0,0.45);
              color: #FFFFFF;
              font-family: system-ui, -apple-system, sans-serif;
              cursor: pointer;
              transform: translate(-50%, -50%);
              transition: transform 0.15s ease;
            ">
              <span style="font-weight: 900; font-size: 13px; line-height: 1;">${displayVal}</span>
            </div>
          `,
          iconSize: [0, 0],
        });

        const m = L.marker([c.lat, c.lon], { icon: cityIcon, zIndexOffset: 1200 });

        m.bindTooltip(
          `
          <div style="font-family: system-ui, sans-serif; font-size: 12px; line-height: 1.4;">
            <div style="font-weight: 800; font-size: 13px; color: #0F172A;">${c.name}, ${c.state}</div>
            <div style="color: #475569; margin-top: 2px;">
              <strong>Surface Temp:</strong> 
              <span style="font-weight: 800; color: ${activeColor};">${displayVal}C</span>
            </div>
            <div style="color: #64748B; font-size: 11px;">
              Temp: ${c.temp}°C | Humidity: ${c.rh}%
            </div>
            <div style="font-size: 10px; font-weight: 700; color: #059669; margin-top: 2px;">
              ${c.tempLabel}
            </div>
          </div>
        `,
          {
            direction: 'top',
            offset: [0, -20],
            className: 'wbgt-city-tooltip',
          }
        );

        m.on('click', (ev: any) => {
          L.DomEvent.stopPropagation(ev);
          onSelectLocation(c.lat, c.lon, c.name, c.state);
        });

        markersGroupRef.current.addLayer(m);
      });
  };

  // Target Location Indicator: Pulsing Glowing Green Ring Marker
  const createOrUpdateTargetMarker = (map: LeafletMap, L: any, lat: number, lon: number) => {
    if (targetMarkerRef.current) {
      targetMarkerRef.current.remove();
      targetMarkerRef.current = null;
    }

    const valDisplay = `${currentTemp}°C`;

    const iconHtml = `
      <div style="
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 4px solid #10B981;
        box-shadow: 0 0 24px #10B981, 0 4px 14px rgba(0,0,0,0.6);
        background: rgba(16, 185, 129, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);
        animation: wbgtPulseRing 1.8s infinite;
      ">
        <div style="
          background: #0F172A;
          color: #F8FAFC;
          font-family: system-ui, sans-serif;
          font-size: 11px;
          font-weight: 900;
          padding: 3px 8px;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
          white-space: nowrap;
          position: absolute;
          top: -26px;
          border: 1px solid rgba(255,255,255,0.25);
        ">
          ${valDisplay}
        </div>
        <div style="width: 10px; height: 10px; border-radius: 50%; background: #10B981; box-shadow: 0 0 10px #10B981;"></div>
      </div>
      <style>
        @keyframes wbgtPulseRing {
          0% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.95; }
          50% { transform: translate(-50%, -50%) scale(1.18); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.95; }
        }
      </style>
    `;

    const customIcon = L.divIcon({
      className: 'target-wbgt-ring',
      html: iconHtml,
      iconSize: [0, 0],
    });

    targetMarkerRef.current = L.marker([lat, lon], { icon: customIcon, zIndexOffset: 2500 }).addTo(map);
  };

  // Initialize Leaflet Map
  useEffect(() => {
    let isMounted = true;

    async function init() {
      if (!containerRef.current || mapRef.current) return;

      const L = await import('leaflet');
      // @ts-ignore
      await import('leaflet/dist/leaflet.css');
      LRef.current = L;

      if (!isMounted || !containerRef.current) return;

      // 1. Create Base Map centered on location or Maharashtra & Western India
      const map = L.map(containerRef.current, {
        center: [selectedLocation.lat || 19.076, selectedLocation.lon || 72.8777],
        zoom: selectedLocation.zoom || 7,
        minZoom: 3,
        maxZoom: 18,
        zoomControl: false,
        attributionControl: false,
      });

      // 2. High-contrast Crisp Base Map: CartoDB Positron / ArcGIS Gray Base
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 18,
          attribution: '&copy; Esri &copy; OpenStreetMap contributors | FixMumbai',
        }
      ).addTo(map);

      // 3. Crisp State and District Reference Labels Layer
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 18,
          zIndex: 400,
        }
      ).addTo(map);

      L.control.zoom({ position: 'bottomright' }).addTo(map);
      mapRef.current = map;

      // 4. Create HTML5 Canvas Heat Map Layer
      const canvas = document.createElement('canvas');
      canvas.className = 'leaflet-wbgt-heatmap-canvas';
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '350';
      containerRef.current.appendChild(canvas);
      canvasRef.current = canvas;

      // Listen to map movements to redraw canvas dynamically
      map.on('move', redrawHeatCanvas);
      map.on('moveend', redrawHeatCanvas);
      map.on('zoomend', redrawHeatCanvas);
      map.on('resize', redrawHeatCanvas);

      // Initial canvas draw
      redrawHeatCanvas();

      // 5. Render landmark city badges
      renderCityMarkers(map, L);

      // 6. Click anywhere on the map to sample coordinates
      map.on('click', (e: any) => {
        const { lat, lng } = e.latlng;
        onSelectLocation(lat, lng, 'Inspected Coordinate');
      });

      // 7. Add target marker
      createOrUpdateTargetMarker(map, L, selectedLocation.lat, selectedLocation.lon);
    }

    init();

    return () => {
      isMounted = false;
      if (canvasRef.current && canvasRef.current.parentNode) {
        canvasRef.current.parentNode.removeChild(canvasRef.current);
        canvasRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update canvas & markers when telemetry or mode changes
  useEffect(() => {
    redrawHeatCanvas();
    if (mapRef.current && LRef.current) {
      renderCityMarkers(mapRef.current, LRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computedStations, heatmapMode]);

  // Update target marker and fly smoothly when location changes
  useEffect(() => {
    if (mapRef.current && LRef.current) {
      createOrUpdateTargetMarker(mapRef.current, LRef.current, selectedLocation.lat, selectedLocation.lon);
      const targetZoom = selectedLocation.zoom ?? Math.max(mapRef.current.getZoom(), 15);
      mapRef.current.flyTo([selectedLocation.lat, selectedLocation.lon], targetZoom, {
        animate: true,
        duration: 1.5,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedLocation.lat,
    selectedLocation.lon,
    selectedLocation.zoom,
    selectedLocation.locateKey,
    currentTemp,
  ]);

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

      {/* Top Right: Status Badge & Surface Temp Mode Indicator */}
      <div className="absolute top-4 right-4 z-[500] flex flex-col items-end gap-2 pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2 text-xs font-bold text-slate-800">
          <Thermometer className="w-4 h-4 text-blue-500 animate-pulse" />
          <span>Surface Temperature Heat Map</span>
        </div>

        <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-1.5 text-xs font-bold text-blue-700">
          <Thermometer className="w-3.5 h-3.5 text-blue-600" />
          <span>Surface Temp</span>
        </div>
      </div>

      {/* Bottom Center: Thermal Heat Spectrum Legend */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[500] bg-white/95 backdrop-blur-md border border-slate-200 px-5 py-3 rounded-2xl shadow-2xl pointer-events-auto max-w-[94%] sm:max-w-lg w-full">
        <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5">
          <span className="flex items-center gap-1.5">
            <Thermometer className="w-3.5 h-3.5 text-blue-500" />
            <span>Surface Temperature Gradient</span>
          </span>
          <span className="text-[10px] text-blue-700 font-mono font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
            Ambient Air / Surface °C
          </span>
        </div>

        {/* Color Gradient Strip */}
        <div className="w-full h-3 rounded-full bg-gradient-to-r from-[#2563EB] via-[#10B981] via-[#EAB308] via-[#EA580C] to-[#DC2626] shadow-inner" />

        {/* Legend Temperature Labels */}
        <div className="flex justify-between text-[10px] font-mono font-bold text-slate-600 mt-1">
          <span className="text-blue-700">&lt; 24°C (Cool)</span>
          <span className="text-emerald-700">24-28°C (Mild)</span>
          <span className="text-amber-700">28-32°C (Warm)</span>
          <span className="text-orange-700">32-36°C (Hot)</span>
          <span className="text-red-700">&gt; 36°C (Extreme)</span>
        </div>
      </div>
    </div>
  );
}
