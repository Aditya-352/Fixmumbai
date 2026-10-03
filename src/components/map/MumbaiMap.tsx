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
  ShieldAlert,
  Globe,
  Layers,
  Search
} from 'lucide-react';

import wardsData from '@/data/mumbai-wards.json';
import mumbaiPlaces from '@/data/mumbai-places.json';
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
  const [activeLayer, setActiveLayer] = useState<ActiveLayerType>('aqi');
  const [prevLayer, setPrevLayer] = useState<ActiveLayerType>('aqi');
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // --- SEARCHED AREA AQI STATE ---
  interface SearchedAqiItem {
    name: string;
    lat: number;
    lng: number;
    wardCode?: string;
    value: number;
    category: string;
    pollutant: string;
    stationName?: string;
    isLoading?: boolean;
  }

  const [searchedLocation, setSearchedLocation] = useState<SearchedAqiItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search suggestions on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered places for autocomplete search
  const filteredPlaces = searchQuery.trim()
    ? mumbaiPlaces.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.wardCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.region.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8)
    : mumbaiPlaces.slice(0, 6);

  // Active selected report drawer state
  const [activeReport, setActiveReport] = useState<ReportMarker | null>(null);

  // Map view controller
  const [currentCenter, setCurrentCenter] = useState<[number, number]>(center);
  const [currentZoom, setCurrentZoom] = useState<number>(zoom);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  const LAYER_KEYS: ActiveLayerType[] = ['aqi', 'wards', 'green'];

  const [mapStyle, setMapStyle] = useState<'streets' | 'satellite'>('streets');

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

  const getAqiAdvisory = (category: string) => {
    switch (category) {
      case 'Good':
        return 'Air quality is clean and satisfactory. Ideal conditions for outdoor civic activities!';
      case 'Satisfactory':
        return 'Air quality is acceptable. Minor discomfort may occur in highly sensitive individuals.';
      case 'Moderate':
        return 'May cause breathing discomfort to people with asthma, heart ailments, or respiratory conditions.';
      case 'Poor':
        return 'Breathing discomfort to most people on prolonged exposure. Sensitive groups should wear masks.';
      case 'Very Poor':
        return 'Can cause respiratory illness on prolonged exposure. Avoid strenuous outdoor physical exertion.';
      case 'Severe':
        return 'Health emergency: impacts healthy people and seriously affects those with pre-existing conditions.';
      default:
        return 'Air quality monitored via CPCB / AQICN official monitoring stations.';
    }
  };

  const handleSelectLocation = (place: { name: string; lat: number; lng: number; wardCode?: string }) => {
    if (activeLayer !== 'aqi') {
      setActiveLayer('aqi');
    }

    let nearest = aqiStations[0] || MMR_AQI_STATIONS[0];
    let minDist = Infinity;
    for (const st of aqiStations) {
      const d = Math.hypot(st.lat - place.lat, st.lng - place.lng);
      if (d < minDist) {
        minDist = d;
        nearest = st;
      }
    }

    const initialItem: SearchedAqiItem = {
      name: place.name,
      lat: place.lat,
      lng: place.lng,
      wardCode: place.wardCode,
      value: nearest.value,
      category: nearest.category,
      pollutant: nearest.pollutant || 'PM2.5',
      stationName: nearest.name,
      isLoading: true
    };

    setSearchedLocation(initialItem);
    setSearchQuery(place.name.replace(/^Ward\s+[A-Z0-9\/]+\s*\((.*?)\)/, '$1').split('(')[0].trim());
    setShowSuggestions(false);
    setCurrentCenter([place.lat, place.lng]);
    setCurrentZoom(14);

    fetch(`/api/air-quality?lat=${place.lat}&lon=${place.lng}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.aqi) {
          setSearchedLocation((prev) => prev ? {
            ...prev,
            value: data.data.aqi.value,
            category: data.data.aqi.category,
            pollutant: data.data.aqi.dominantPollutant || prev.pollutant,
            stationName: data.data.station?.name || prev.stationName,
            isLoading: false
          } : null);
        } else {
          setSearchedLocation((prev) => prev ? { ...prev, isLoading: false } : null);
        }
      })
      .catch(() => {
        setSearchedLocation((prev) => prev ? { ...prev, isLoading: false } : null);
      });
  };

  const handleClearSearch = () => {
    setSearchedLocation(null);
    setSearchQuery('');
    setShowSuggestions(false);
    setCurrentCenter(center);
    setCurrentZoom(zoom);
  };

  const [aqiStations, setAqiStations] = useState(MMR_AQI_STATIONS);

  useEffect(() => {
    setMounted(true);
    let isMounted = true;
    fetch('/api/air-quality?stations=true')
      .then((r) => r.json())
      .then((data) => {
        if (isMounted && data.success && Array.isArray(data.stations) && data.stations.length > 0) {
          setAqiStations(data.stations);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
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
  const { MapContainer, TileLayer, Marker, Popup, Polygon, Circle, Pane, useMap, useMapEvents } = require('react-leaflet');

  if (typeof window !== 'undefined') {
    (window as any).L = L;
    try {
      require('leaflet.heat');
    } catch (e) {}
  }

  function AqiHeatmapLayer({ stations }: { stations: any[] }) {
    const map = useMap();

    useEffect(() => {
      if (!map || !stations || stations.length === 0) return;
      if (!(L as any).heatLayer) return;

      const points = stations.map((st: any) => [
        st.lat,
        st.lng,
        Math.min(1.0, Math.max(0.12, (st.value || 50) / 320)),
      ]);

      const heat = (L as any).heatLayer(points, {
        radius: 65,
        blur: 45,
        maxZoom: 16,
        max: 1.0,
        minOpacity: 0.35,
        gradient: {
          0.0: '#10B981',  // Green (Good)
          0.2: '#84CC16',  // Light Green / Lime (Satisfactory)
          0.4: '#FBBF24',  // Yellow / Amber (Moderate)
          0.6: '#F97316',  // Orange (Poor)
          0.8: '#EF4444',  // Red (Very Poor)
          1.0: '#7F1D1D',  // Deep Maroon (Severe)
        },
      });

      heat.addTo(map);

      return () => {
        map.removeLayer(heat);
      };
    }, [map, stations]);

    return null;
  }

  function MapViewController({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();
    useEffect(() => {
      if (map) {
        map.flyTo(center, zoom, { duration: 1.0 });
      }
    }, [center, zoom, map]);
    return null;
  }

  function MapClickHandler() {
    useMapEvents({
      click(e: any) {
        if (activeLayer === 'aqi') {
          let closestName = `Mumbai Area (${e.latlng.lat.toFixed(3)}, ${e.latlng.lng.toFixed(3)})`;
          let closestWard = '';
          let minDist = Infinity;
          for (const p of mumbaiPlaces) {
            const d = Math.hypot(p.lat - e.latlng.lat, p.lng - e.latlng.lng);
            if (d < minDist) {
              minDist = d;
              if (d < 0.035) {
                closestName = p.name;
                closestWard = p.wardCode;
              }
            }
          }
          handleSelectLocation({
            name: closestName,
            lat: e.latlng.lat,
            lng: e.latlng.lng,
            wardCode: closestWard
          });
        }
      }
    });
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

  // Searched Location AQI Pin Icon
  const createSearchedLocationIcon = (category: string, value: number, name: string) => {
    const config = AQI_CATEGORY_COLORS[category] || AQI_CATEGORY_COLORS['Moderate'];
    const shortName = name.replace(/^Ward\s+[A-Z0-9\/]+\s*\((.*?)\)/, '$1').split('(')[0].trim();
    const html = `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center; cursor: pointer; transform: translate(-50%, -100%);">
        <!-- Radar Pulse Ring -->
        <div style="position: absolute; top: 12px; left: 50%; transform: translate(-50%, -50%); width: 70px; height: 70px; border-radius: 50%; background: ${config.bg}44; animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite; pointer-events: none;"></div>
        
        <!-- Location & AQI Pill -->
        <div style="background: rgba(15, 23, 42, 0.95); color: #FFFFFF; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 800; white-space: nowrap; margin-bottom: 5px; box-shadow: 0 4px 14px rgba(0,0,0,0.35); border: 1.5px solid rgba(255,255,255,0.3); display: flex; align-items: center; gap: 6px; backdrop-filter: blur(4px);">
          <span style="max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">📍 ${shortName}</span>
          <span style="background: ${config.bg}; color: ${config.text}; padding: 1.5px 7px; border-radius: 9999px; font-weight: 900; font-size: 10.5px;">${value} AQI</span>
        </div>

        <!-- Main circular badge -->
        <div style="width: 48px; height: 48px; border-radius: 50%; background-color: ${config.bg}; color: ${config.text}; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 3.5px solid #FFFFFF; box-shadow: 0 8px 24px rgba(0,0,0,0.45);">
          <span style="font-weight: 950; font-size: 16px; line-height: 1;">${value}</span>
          <span style="font-size: 8px; font-weight: 900; opacity: 0.95; text-transform: uppercase; letter-spacing: 0.5px;">${category}</span>
        </div>

        <!-- Pointer triangle -->
        <div style="width: 0; height: 0; border-left: 7px solid transparent; border-right: 7px solid transparent; border-top: 8px solid #FFFFFF; margin-top: -1px; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.3));"></div>
      </div>
    `;
    return L.divIcon({
      className: 'searched-aqi-marker',
      html,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
      popupAnchor: [0, -60]
    });
  };

  // State-Style Ward Territory Badge Icon
  const createWardBadgeIcon = (wardCode: string, wardName: string, color?: string, strokeColor?: string) => {
    const bg = color || '#3B82F6';
    const stroke = strokeColor || '#1D4ED8';
    const cleanName = wardName.replace(/^Ward\s+[A-Z0-9\/]+\s*\((.*?)\)/, '$1').split(',')[0].trim();

    const html = `
      <div style="display: inline-flex; align-items: center; gap: 4px; background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(4px); padding: 2px 7px 2px 4px; border-radius: 9999px; border: 1.5px solid ${stroke}; box-shadow: 0 3px 10px rgba(0,0,0,0.18); font-family: system-ui, sans-serif; cursor: pointer; white-space: nowrap; transform: translate(-50%, -50%);">
        <span style="background: ${bg}; color: #FFFFFF; font-weight: 900; font-size: 10px; padding: 1.5px 5px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px;">${wardCode}</span>
        <span style="font-weight: 800; font-size: 10.5px; color: #1E293B; letter-spacing: -0.2px;">${cleanName}</span>
      </div>
    `;

    return L.divIcon({
      className: 'custom-ward-badge',
      html,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
      popupAnchor: [0, -10]
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
      {/* 1. TOP-RIGHT CONTROLS CONTAINER (TOOLBAR & SEARCH BAR DIRECTLY BELOW) */}
      <div className="absolute top-4 right-4 z-[400] flex flex-col items-end gap-2.5 max-w-[96vw]">
        {/* Row of Toolbar Buttons: Layer Selector, GPS, Streets/Satellite, Fullscreen */}
        <div className="flex items-center gap-2">
          {/* Connected Equal-Width Grid Segmented Layer Selector Container */}
          <div className="relative grid grid-cols-3 w-[280px] sm:w-[360px] bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-xl text-xs sm:text-xs">
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

          {/* Basemap Toggle Button (Satellite / Streets) */}
          <button
            type="button"
            onClick={() => setMapStyle(mapStyle === 'satellite' ? 'streets' : 'satellite')}
            className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-700 hover:text-blue-600 transition hover:scale-105 active:scale-95 shrink-0 flex items-center gap-1.5 text-xs font-bold"
            title={mapStyle === 'satellite' ? 'Switch to Street Map' : 'Switch to Satellite Imagery'}
          >
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="hidden md:inline">{mapStyle === 'satellite' ? 'Satellite' : 'Streets'}</span>
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

        {/* FLOATING AREA SEARCH BAR (BELOW THE BUTTONS OF STREET / TOOLBAR) */}
        <div ref={searchContainerRef} className="w-full sm:w-[360px] md:w-[420px]">
          <div className="relative">
            <div className="flex items-center bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl px-3 py-2.5 gap-2 transition-all focus-within:ring-2 focus-within:ring-red-500 focus-within:border-transparent">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search area for AQI (e.g. Bandra, Worli)..."
                className="w-full bg-transparent text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition shrink-0"
                  title="Clear Search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Autocomplete Suggestions Dropdown */}
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/98 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-72 overflow-y-auto z-50 divide-y divide-slate-100 text-xs">
                {!searchQuery && (
                  <div className="p-2.5 bg-slate-50/80 border-b border-slate-100">
                    <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1.5 px-1">
                      Popular Areas in Mumbai
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Bandra', 'Andheri', 'Colaba', 'Worli', 'Dharavi', 'BKC', 'Powai', 'Chembur', 'Borivali'].map((quick) => (
                        <button
                          key={quick}
                          type="button"
                          onClick={() => {
                            const match = mumbaiPlaces.find((p) => p.name.toLowerCase().includes(quick.toLowerCase()));
                            if (match) handleSelectLocation(match);
                          }}
                          className="px-2 py-1 bg-white hover:bg-red-50 hover:text-red-600 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-700 transition"
                        >
                          {quick}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {filteredPlaces.length === 0 ? (
                  <div className="p-3 text-center text-slate-400 text-xs font-semibold">
                    No matching Mumbai locality found
                  </div>
                ) : (
                  filteredPlaces.map((place, idx) => (
                    <button
                      key={`${place.name}-${idx}`}
                      type="button"
                      onClick={() => handleSelectLocation(place)}
                      className="w-full text-left p-2.5 hover:bg-red-50/80 transition flex items-center justify-between group"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="font-bold text-slate-900 group-hover:text-red-600 transition truncate">
                          {place.name.split('(')[0].trim()}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {place.region} • Ward {place.wardCode}
                        </div>
                      </div>
                      <span className="text-[9px] font-black text-slate-400 uppercase group-hover:text-red-600 shrink-0">
                        View AQI →
                      </span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. SHARED FIXED LEAFLET MAP CONTAINER */}
      <MapContainer
        center={currentCenter}
        zoom={currentZoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
      >
        <MapViewController center={currentCenter} zoom={currentZoom} />
        <MapClickHandler />

        {/* Basemap: Satellite with Boundaries OR Clean Streets */}
        {mapStyle === 'satellite' ? (
          <>
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              maxZoom={18}
            />
            <TileLayer
              attribution='&copy; Esri'
              url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
              opacity={0.65}
              maxZoom={18}
            />
          </>
        ) : (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | FixMumbai'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        )}

        {/* GPS User Location Marker */}
        {userLocation && (
          <Marker position={userLocation} icon={createUserLocationIcon()}>
            <Popup className="fixmumbai-leaflet-popup">
              <div className="p-1 font-bold text-xs text-blue-700">Your GPS Location</div>
            </Popup>
          </Marker>
        )}

        {/* LAYER A: AQI MONITORING STATIONS & CONTINUOUS ATMOSPHERE HEATMAP */}
        {activeLayer === 'aqi' && (
          <>
            {/* Canvas Gaussian Interpolation Layer */}
            <AqiHeatmapLayer stations={aqiStations} />

            {/* WAQI Live Regional Tile Layer */}
            <TileLayer
              url="https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=ce2f660cae929992e09e31bf639a42e8d1dde4e4"
              opacity={0.55}
              zIndex={360}
            />

            {/* Gaussian Atmosphere Plume Discs per Station */}
            <Pane name="aqi-heat" style={{ zIndex: 350 }}>
              {aqiStations.map((st) => {
                const color = AQI_CATEGORY_COLORS[st.category]?.bg || '#EAB308';
                return (
                  <React.Fragment key={`plume-${st.id}`}>
                    <Circle
                      center={[st.lat, st.lng]}
                      radius={16000}
                      pathOptions={{
                        fillColor: color,
                        fillOpacity: 0.22,
                        stroke: false,
                      }}
                    />
                    <Circle
                      center={[st.lat, st.lng]}
                      radius={8000}
                      pathOptions={{
                        fillColor: color,
                        fillOpacity: 0.35,
                        stroke: false,
                      }}
                    />
                  </React.Fragment>
                );
              })}
            </Pane>

            {/* ONLY DISPLAY PIN FOR THE PARTICULAR SEARCHED AREA */}
            {searchedLocation && (
              <Marker
                position={[searchedLocation.lat, searchedLocation.lng]}
                icon={createSearchedLocationIcon(searchedLocation.category, searchedLocation.value, searchedLocation.name)}
              >
                <Popup className="fixmumbai-leaflet-popup" autoPan={true}>
                  <div className="p-2 space-y-2 max-w-[250px] text-slate-900 font-sans">
                    <div className="flex items-center justify-between border-b pb-1.5 border-slate-100">
                      <div>
                        <div className="font-extrabold text-sm text-slate-900">{searchedLocation.name}</div>
                        {searchedLocation.wardCode && (
                          <div className="text-[10px] text-slate-500 font-semibold">Ward {searchedLocation.wardCode}</div>
                        )}
                      </div>
                      <span
                        className="text-xs font-black px-2.5 py-1 rounded-full text-white shadow-sm"
                        style={{ backgroundColor: AQI_CATEGORY_COLORS[searchedLocation.category]?.bg || '#EAB308' }}
                      >
                        {searchedLocation.value}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600 bg-slate-50 p-2 rounded-xl">
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase block">AQI CATEGORY</span>
                        <span className="font-black text-slate-900">{searchedLocation.category}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase block">PRIMARY POLLUTANT</span>
                        <span className="font-black text-slate-900">{searchedLocation.pollutant}</span>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-600 bg-amber-50/70 p-2 rounded-lg font-medium">
                      {getAqiAdvisory(searchedLocation.category)}
                    </p>

                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="w-full text-center py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] rounded-lg transition"
                    >
                      Clear Area Marker
                    </button>
                  </div>
                </Popup>
              </Marker>
            )}
          </>
        )}

        {/* LAYER B: 24 BMC WARDS BOUNDARIES & CENTROID BADGES */}
        {activeLayer === 'wards' && wardsData.map((w: any) => {
          const wardFill = w.color || '#3B82F6';
          const wardStroke = w.borderColor || '#1D4ED8';

          return (
            <React.Fragment key={w.wardCode}>
              <Polygon
                positions={w.polygon || [[w.bbox[1], w.bbox[0]], [w.bbox[3], w.bbox[0]], [w.bbox[3], w.bbox[2]], [w.bbox[1], w.bbox[2]]]}
                pathOptions={{
                  color: wardStroke,
                  weight: 2.5,
                  opacity: 0.95,
                  fillColor: wardFill,
                  fillOpacity: 0.22,
                  dashArray: '5, 3'
                }}
                eventHandlers={{
                  mouseover: (e: any) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.45,
                      weight: 4,
                      color: '#0F172A',
                      dashArray: ''
                    });
                  },
                  mouseout: (e: any) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.22,
                      weight: 2.5,
                      color: wardStroke,
                      dashArray: '5, 3'
                    });
                  },
                  click: () => {
                    setCurrentCenter([w.centerLatitude, w.centerLongitude]);
                    setCurrentZoom(13);
                  }
                }}
              >
                <Popup className="fixmumbai-leaflet-popup">
                  <div className="p-2 space-y-1.5 font-sans text-xs max-w-[260px]">
                    <div className="flex items-center justify-between border-b pb-1 border-slate-100">
                      <span
                        className="text-[10px] font-black uppercase px-2 py-0.5 rounded text-white shadow-xs"
                        style={{ backgroundColor: wardStroke }}
                      >
                        {w.regionZone} • WARD {w.wardCode}
                      </span>
                    </div>
                    <div className="font-black text-sm text-slate-900 leading-tight pt-0.5">{w.wardName}</div>
                    <div className="text-slate-600 text-[11px] pt-0.5">
                      <span className="font-semibold text-slate-500">Asst. Commissioner: </span>
                      <span className="font-bold text-slate-800">{w.assistantCommissioner}</span>
                    </div>
                    <div className="text-slate-400 text-[10px] border-t border-slate-100 pt-1 mt-1 truncate">
                      🏢 {w.wardOfficeName}
                    </div>
                  </div>
                </Popup>
              </Polygon>

              <Marker
                position={[w.centerLatitude, w.centerLongitude]}
                icon={createWardBadgeIcon(w.wardCode, w.wardName, wardFill, wardStroke)}
              >
                <Popup className="fixmumbai-leaflet-popup">
                  <div className="p-1.5 text-center font-sans text-xs">
                    <span
                      className="inline-block text-[10px] font-black uppercase px-2 py-0.5 rounded text-white mb-1"
                      style={{ backgroundColor: wardStroke }}
                    >
                      BMC WARD {w.wardCode}
                    </span>
                    <div className="font-bold text-slate-900">{w.wardName}</div>
                  </div>
                </Popup>
              </Marker>
            </React.Fragment>
          );
        })}

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
          <div className="space-y-2.5 animate-fadeIn text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
              <span className="font-black text-slate-900 flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-emerald-600" /> Air Quality Atmosphere
              </span>
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Live Heatmap
              </span>
            </div>

            {/* Continuous Color Gradient Bar (Google Maps AQI Style) */}
            <div className="space-y-1">
              <div
                className="h-3 w-full rounded-full shadow-inner border border-black/10"
                style={{
                  background: 'linear-gradient(to right, #10B981 0%, #84CC16 18%, #EAB308 36%, #F97316 60%, #EF4444 80%, #7F1D1D 100%)'
                }}
              />
              <div className="flex justify-between text-[9px] font-extrabold text-slate-500 px-0.5">
                <span>0 (Good)</span>
                <span>100</span>
                <span>200</span>
                <span>300</span>
                <span>400</span>
                <span>500+</span>
              </div>
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
                <Building2 className="w-4 h-4 text-blue-600" /> Administrative Wards
              </span>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                24 Territories
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug font-medium">
              Political atlas division of Mumbai into 24 BMC administrative territories with distinct state-style borders.
            </p>
            <div className="grid grid-cols-3 gap-1 pt-0.5 text-[10px] font-bold text-center">
              <div className="bg-blue-50 text-blue-800 p-1 rounded-lg border border-blue-100">
                Island City<br/><span className="text-[9px] font-normal text-blue-600">A to G</span>
              </div>
              <div className="bg-purple-50 text-purple-800 p-1 rounded-lg border border-purple-100">
                Western<br/><span className="text-[9px] font-normal text-purple-600">H/W to R/N</span>
              </div>
              <div className="bg-emerald-50 text-emerald-800 p-1 rounded-lg border border-emerald-100">
                Eastern<br/><span className="text-[9px] font-normal text-emerald-600">L to T</span>
              </div>
            </div>
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

      {/* 5. SEARCHED LOCATION AQI DETAIL FLOATING CARD */}
      {searchedLocation && !activeReport && (
        <div className="absolute bottom-6 right-6 z-[450] sm:max-w-sm w-[90vw] sm:w-[360px] bg-white/98 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl p-4 sm:p-5 space-y-3 animate-slideUp">
          <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                  Searched Area AQI
                </span>
                {searchedLocation.wardCode && (
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    Ward {searchedLocation.wardCode}
                  </span>
                )}
              </div>
              <h3 className="text-base font-black text-slate-900 leading-snug">{searchedLocation.name}</h3>
            </div>
            <button
              onClick={handleClearSearch}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              title="Clear Search"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <div
              className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-white shrink-0 shadow-md"
              style={{ backgroundColor: AQI_CATEGORY_COLORS[searchedLocation.category]?.bg || '#EAB308' }}
            >
              <span className="text-xl font-black leading-none">{searchedLocation.value}</span>
              <span className="text-[8.5px] font-extrabold uppercase mt-0.5 tracking-wider">AQI</span>
            </div>
            <div className="space-y-0.5">
              <div
                className="text-xs font-black uppercase tracking-wide"
                style={{ color: AQI_CATEGORY_COLORS[searchedLocation.category]?.bg || '#EAB308' }}
              >
                {searchedLocation.category}
              </div>
              <p className="text-[11px] text-slate-600 font-medium">
                Primary Pollutant: <span className="font-bold text-slate-800">{searchedLocation.pollutant || 'PM2.5'}</span>
              </p>
              {searchedLocation.stationName && (
                <p className="text-[10px] text-slate-400 truncate max-w-[200px]">
                  Sensor: {searchedLocation.stationName}
                </p>
              )}
            </div>
          </div>

          <p className="text-[11px] text-slate-600 bg-amber-50/70 border border-amber-100/70 p-2.5 rounded-xl font-medium leading-relaxed">
            {getAqiAdvisory(searchedLocation.category)}
          </p>

          <button
            type="button"
            onClick={handleClearSearch}
            className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition text-center shadow-sm"
          >
            Clear Pin & Return to Mumbai Overview
          </button>
        </div>
      )}
    </div>
  );
}
