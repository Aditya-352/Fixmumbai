'use client';

import React, { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  ArrowLeft,
  Wind,
  MapPin,
  Loader2,
  Navigation,
  Search,
  CheckCircle2,
  AlertTriangle,
  Info,
  Activity,
  ShieldAlert,
  Thermometer,
  CloudSun,
  Eye,
  Gauge,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import { HEALTH_ADVISORIES } from '@/lib/air-quality/health-advisories';
import type { AqiCategory, PollutantId, AirQualityResponse } from '@/lib/air-quality/types';
import { POPULAR_INDIAN_HUBS, type CityHub, AQI_CATEGORY_COLORS, INDIA_NAQI_MAPPINGS } from '@/components/air-quality/AirQualityMap';
import { detectExactUserLocation, type DetectedLocation } from '@/lib/user-location';

// Dynamically import AirQualityMap to avoid SSR Leaflet window errors
const AirQualityMap = dynamic(() => import('@/components/air-quality/AirQualityMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[480px] bg-slate-100 rounded-3xl animate-pulse flex items-center justify-center border border-slate-200">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
        <span className="text-sm font-bold text-slate-600">Rendering Interactive Air Quality Map...</span>
      </div>
    </div>
  ),
});

const categoryColors: Record<
  AqiCategory,
  { bg: string; text: string; border: string; badge: string; ring: string; hex: string }
> = {
  Good: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-900',
    border: 'border-emerald-300',
    badge: 'bg-emerald-600 text-white',
    ring: 'ring-emerald-500',
    hex: '#10B981',
  },
  Satisfactory: {
    bg: 'bg-lime-50',
    text: 'text-lime-900',
    border: 'border-lime-300',
    badge: 'bg-lime-600 text-white',
    ring: 'ring-lime-500',
    hex: '#84CC16',
  },
  Moderate: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-900',
    border: 'border-yellow-300',
    badge: 'bg-yellow-500 text-slate-900',
    ring: 'ring-yellow-500',
    hex: '#F59E0B',
  },
  Poor: {
    bg: 'bg-orange-50',
    text: 'text-orange-900',
    border: 'border-orange-300',
    badge: 'bg-orange-500 text-white',
    ring: 'ring-orange-500',
    hex: '#F97316',
  },
  'Very Poor': {
    bg: 'bg-rose-50',
    text: 'text-rose-900',
    border: 'border-rose-300',
    badge: 'bg-rose-600 text-white',
    ring: 'ring-rose-500',
    hex: '#EF4444',
  },
  Severe: {
    bg: 'bg-red-100',
    text: 'text-red-950',
    border: 'border-red-400',
    badge: 'bg-red-800 text-white',
    ring: 'ring-red-700',
    hex: '#881337',
  },
};

const pollutantEmojis: Record<string, string> = {
  'PM2.5': '😷',
  PM10: '🏗️',
  CO: '🚗',
  SO2: '🏭',
  NO2: '🚌',
  OZONE: '☀️',
  NH3: '🧪',
};

const pollutantFormat: Record<string, { label: string; format: string; desc: string }> = {
  'PM2.5': { label: 'PM2.5', format: 'µg/m³', desc: 'Fine respirable particles (<2.5µm)' },
  PM10: { label: 'PM10', format: 'µg/m³', desc: 'Inhalable coarse dust & road debris' },
  CO: { label: 'CO', format: 'mg/m³', desc: 'Carbon Monoxide from combustion engines' },
  SO2: { label: 'SO₂', format: 'µg/m³', desc: 'Sulphur Dioxide from thermal plants' },
  NO2: { label: 'NO₂', format: 'µg/m³', desc: 'Nitrogen Dioxide from vehicular exhausts' },
  OZONE: { label: 'O₃', format: 'µg/m³', desc: 'Ground-level Ozone (photochemical smog)' },
  NH3: { label: 'NH₃', format: 'µg/m³', desc: 'Ammonia emissions from fertilizer & waste' },
};

interface LiveWeatherData {
  temperature: number;
  apparentTemperature?: number;
  relativeHumidity: number;
  windSpeed: number;
  pressure?: number;
  visibility?: number;
  weatherCondition: string;
  weatherDescription: string;
  weatherIcon?: string;
}

export default function AirQualityPage() {
  const [airQualityData, setAirQualityData] = useState<AirQualityResponse | null>(null);
  const [weatherData, setWeatherData] = useState<LiveWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [locating, setLocating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [detectedLoc, setDetectedLoc] = useState<DetectedLocation | null>(null);
  const [activeCityName, setActiveCityName] = useState<string>('Detecting exact coordinates...');
  const [currentCoords, setCurrentCoords] = useState<[number, number]>([17.384, 78.458]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [, startTransition] = useTransition();

  const fetchAqiData = async (lat: number, lon: number, customLabel?: string) => {
    setLoading(true);
    setError(null);
    setCurrentCoords([lat, lon]);

    try {
      // 1. Fetch Air Quality data (Weather API primary)
      let res = await fetch(`/civic/api/air-quality?lat=${lat}&lon=${lon}`);
      if (!res.ok && res.status === 404) {
        res = await fetch(`/api/air-quality?lat=${lat}&lon=${lon}`);
      }

      const json = await res.json();
      if (json.success && json.data) {
        setAirQualityData(json.data);
        if (customLabel) {
          setActiveCityName(customLabel);
        } else if (json.data.station?.name) {
          setActiveCityName(json.data.station.name);
        } else {
          setActiveCityName(`Location (${lat.toFixed(3)}, ${lon.toFixed(3)})`);
        }
      } else {
        setError(json.error || 'Failed to retrieve air quality data for this location.');
      }

      // 2. Fetch synchronous Live Weather telemetry from OpenWeather
      try {
        let weatherRes = await fetch(`/civic/api/weather?lat=${lat}&lon=${lon}`);
        if (!weatherRes.ok && weatherRes.status === 404) {
          weatherRes = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
        }
        const weatherJson = await weatherRes.json();
        if (weatherJson.success && weatherJson.data) {
          setWeatherData(weatherJson.data);
        }
      } catch {
        // Silent fallback for weather if offline
      }
    } catch {
      setError('Could not connect to the Weather API network. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // High-accuracy location acquisition (Hardware GPS + Network IP fallback)
  const acquireExactLocation = async (userInitiated = false) => {
    setLocating(true);
    setError(null);
    if (userInitiated) {
      setActiveCityName('Locating your exact coordinates (GPS & Network)...');
    }

    try {
      const loc = await detectExactUserLocation();
      setDetectedLoc(loc);
      await fetchAqiData(loc.lat, loc.lon, loc.name);
    } catch (err: any) {
      console.warn('Location detection failed', err);
      // Fallback
      await fetchAqiData(17.385, 78.4867, 'Hyderabad, Telangana');
    } finally {
      setLocating(false);
    }
  };

  // Automatically take the exact location of the user upon opening the page
  useEffect(() => {
    acquireExactLocation(false);
  }, []);

  const handleUseCurrentLocation = () => {
    acquireExactLocation(true);
  };

  const handleCitySelect = (hub: CityHub) => {
    startTransition(() => {
      fetchAqiData(hub.lat, hub.lon, `${hub.name}, ${hub.state}`);
    });
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      let res = await fetch(`/civic/api/geocode?q=${encodeURIComponent(searchQuery.trim())}`);
      if (!res.ok && res.status === 404) {
        res = await fetch(`/api/geocode?q=${encodeURIComponent(searchQuery.trim())}`);
      }
      const data = await res.json();
      if (data.success && Array.isArray(data.results) && data.results.length > 0) {
        const first = data.results[0];
        fetchAqiData(first.lat, first.lon, first.displayName || first.name);
      } else {
        setError(`Could not find coordinates for "${searchQuery}". Please select a location on the map.`);
      }
    } catch {
      setError('Geocoding search service is temporarily busy. Please choose from the map or cities below.');
    } finally {
      setIsSearching(false);
    }
  };

  const currentAqi = airQualityData?.aqi;
  const currentCategory: AqiCategory = currentAqi?.category || 'Moderate';
  const categoryTheme = categoryColors[currentCategory] || categoryColors['Moderate'];
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
  const isGroundScore = Boolean(currentAqi && currentAqi.value > 5);

  const pollutantsToDisplay = { ...(airQualityData?.pollutants || {}) };
  if (airQualityData?.supplementary) {
    airQualityData.supplementary.forEach((supp) => {
      Object.entries(supp.pollutants).forEach(([key, val]) => {
        if (!pollutantsToDisplay[key as PollutantId]) {
          pollutantsToDisplay[key as PollutantId] = val;
        }
      });
    });
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link & Header */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Civic Map
            </Link>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-black uppercase tracking-wider">
              <span>🇮🇳</span> Weather API Atmospheric Network
            </div>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex p-3 rounded-2xl bg-red-50 text-red-600 shadow-sm border border-red-100">
              <Wind className="w-10 h-10 animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              India Real-Time Air Quality & Weather API
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
              Live atmospheric pollution telemetry, satellite chemical simulations, and clinical respiratory checklists
              powered by OpenWeather API across all Indian cities and coordinates.
            </p>
          </div>
        </div>

        {/* Location Search & Selection Toolbar */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <form onSubmit={handleSearchSubmit} className="flex-1 relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any Indian city, district, or coordinates (e.g. Pune, Varanasi, Noida)..."
                className="w-full pl-11 pr-24 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute right-2 px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-extrabold shadow-sm transition disabled:opacity-50"
              >
                {isSearching ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'SEARCH'}
              </button>
            </form>

            <button
              onClick={handleUseCurrentLocation}
              disabled={locating}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold rounded-2xl transition shadow-sm active:scale-95 shrink-0 disabled:opacity-70"
            >
              {locating ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-red-400" />
              ) : (
                <Navigation className="w-3.5 h-3.5 text-red-400" />
              )}
              {locating ? 'LOCATING...' : 'USE MY EXACT LOCATION'}
            </button>
          </div>

          {/* Quick City Selector Pills with Color Dots (representing location by color) */}
          <div>
            <div className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Major Indian Regional Centers (Color-Coded Status):
            </div>
            <div className="flex flex-wrap gap-2">
              {POPULAR_INDIAN_HUBS.map((hub) => {
                const isSelected = activeCityName.includes(hub.name);
                const hubColor = isSelected ? categoryTheme.hex : (AQI_CATEGORY_COLORS[hub.category]?.hex || '#F59E0B');

                return (
                  <button
                    key={hub.name}
                    onClick={() => handleCitySelect(hub)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-2 ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                    }`}
                  >
                    {/* Color dot representing location air quality */}
                    <span
                      className="w-2.5 h-2.5 rounded-full shadow-sm shrink-0"
                      style={{ backgroundColor: hubColor }}
                    />
                    <span>{hub.name}</span>
                    <span className={`text-[10px] font-extrabold ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                      AQI {hub.approxAqi}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-amber-50 text-amber-800 p-4 rounded-2xl border border-amber-200 flex items-start gap-3 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm font-semibold">{error}</div>
          </div>
        )}

        {/* Interactive Air Quality Map */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-600" />
              Pan-India Air Quality Spatial Map
            </h2>
            <div className="text-xs font-bold text-slate-500 flex items-center gap-2">
              <span>Selected Status:</span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-white text-[11px] font-black"
                style={{ backgroundColor: categoryTheme.hex }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {currentCategory}
              </span>
            </div>
          </div>

          <AirQualityMap
            center={currentCoords}
            zoom={11}
            height="480px"
            activeLocationName={activeCityName}
            airQualityData={airQualityData}
            onLocationSelect={(lat, lon, label) => fetchAqiData(lat, lon, label)}
            onInspectDetails={() => {
              setShowDetails(true);
              setTimeout(() => {
                document.getElementById('air-quality-details')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="bg-white rounded-3xl p-16 border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-4 text-center">
            <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
            <div className="space-y-1">
              <div className="text-lg font-black text-slate-800">
                Fetching Real-Time Weather API Telemetry...
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Querying atmospheric simulations and ground telemetry for {activeCityName}
              </div>
            </div>
          </div>
        ) : airQualityData && (
          <>
            {/* Primary Headline AQI & Weather Card */}
            <div
              onClick={() => setShowDetails(!showDetails)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setShowDetails(!showDetails);
                }
              }}
              className={`rounded-3xl border-2 ${categoryTheme.border} ${categoryTheme.bg} p-6 sm:p-8 shadow-sm transition space-y-6 cursor-pointer group hover:shadow-md relative`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Left: Value, Category & Color Beacon */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
                      <Activity className="w-4 h-4 text-red-600" />
                      National Air Quality Index (India NAQI)
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 group-hover:text-slate-900 transition flex items-center gap-1 sm:hidden">
                      {showDetails ? 'Hide details' : 'Click for details'}
                      {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Glowing color orb representing location by color */}
                    <div className="relative flex items-center justify-center shrink-0">
                      <span
                        className="absolute w-16 h-16 rounded-full animate-ping opacity-30"
                        style={{ backgroundColor: categoryTheme.hex }}
                      />
                      <span
                        className="relative px-3.5 py-3 rounded-2xl shadow-md flex flex-col items-center justify-center text-white font-black border-2 border-white min-w-[58px]"
                        style={{ backgroundColor: categoryTheme.hex }}
                      >
                        <span className="text-lg font-black leading-none">{currentAqi?.value ?? '—'}</span>
                        <span className="text-[9px] font-black uppercase opacity-90 mt-0.5 tracking-wider">AQI</span>
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-baseline gap-2.5">
                        <span className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight">
                          {currentAqi?.value ?? '—'}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-slate-500">
                          AQI
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-500 tracking-wide uppercase">
                          India NAQI
                        </span>
                      </div>

                      {/* Mapped India NAQI Range & Category */}
                      <div className="flex flex-wrap items-center gap-2 pt-0.5">
                        <span
                          className={`inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wide ${categoryTheme.badge}`}
                        >
                          {currentCategory === 'Satisfactory' ? 'Satisfactory' : currentCategory}
                        </span>
                        <span className="px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-black shadow-sm flex items-center gap-1.5">
                          <span>🇮🇳 India NAQI Range:</span>
                          <span className="text-amber-300 font-extrabold">
                            {INDIA_NAQI_MAPPINGS[currentLevel]?.naqiRange}
                          </span>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/90 border border-slate-200 text-slate-700 text-xs font-bold shadow-sm">
                          {airQualityData?.station?.source === 'AQICN' || airQualityData?.station?.source === 'CPCB'
                            ? `Physical Ground Sensor · ${airQualityData?.station?.name || 'Monitoring Station'}`
                            : 'Continuous Atmospheric Simulation'}
                        </span>
                      </div>

                      {/* Health Impact description from Option 3 */}
                      <div className="text-xs font-semibold text-slate-600 pt-0.5 flex items-center gap-1.5">
                        <span className="font-bold text-slate-800">Health Impact:</span>
                        <span>{INDIA_NAQI_MAPPINGS[currentLevel]?.healthImpact}</span>
                      </div>

                      {currentAqi?.dominantPollutant && (
                        <div className="text-xs font-bold text-slate-500">
                          Dominant Pollutant: <span className="text-slate-900 font-extrabold">{currentAqi.dominantPollutant}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Interactive Button to reveal remaining details */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDetails(!showDetails);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold shadow-md transition-all active:scale-95"
                    >
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>
                        {showDetails
                          ? 'Hide Remaining Details'
                          : 'Click to View Remaining Details (Pollutant Levels, Scale & Telemetry)'}
                      </span>
                      {showDetails ? (
                        <ChevronUp className="w-4 h-4 text-slate-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-300" />
                      )}
                    </button>
                    {!showDetails && (
                      <span className="text-[11px] text-slate-500 font-medium italic hidden sm:inline">
                        👆 Click card or button to inspect individual pollutant concentrations ($PM_{2.5}, PM_{10}$, etc.)
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Weather Telemetry & Provider Attribution */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white/85 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/80 space-y-3 text-xs min-w-[260px]"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-1.5 font-black text-slate-900 truncate">
                      <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                      <span className="truncate">{activeCityName}</span>
                    </div>
                    {detectedLoc && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 ${
                          detectedLoc.source === 'gps'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {detectedLoc.source === 'gps' ? '● Precise GPS' : '● Network Position'}
                      </span>
                    )}
                  </div>

                  {/* Weather API Live Conditions (Temperature, Sky, Humidity) */}
                  {weatherData && (
                    <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                      <div className="flex items-center gap-2">
                        {weatherData.weatherIcon ? (
                          <img
                            src={`https://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`}
                            alt={weatherData.weatherCondition}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <CloudSun className="w-5 h-5 text-amber-500" />
                        )}
                        <div>
                          <div className="font-black text-sm text-slate-900">
                            {weatherData.temperature}°C
                          </div>
                          <div className="text-[10px] font-bold text-slate-500 capitalize">
                            {weatherData.weatherDescription}
                          </div>
                        </div>
                      </div>

                      <div className="text-right space-y-0.5">
                        <div className="text-[11px] font-bold text-slate-700 flex items-center justify-end gap-1">
                          <Thermometer className="w-3 h-3 text-red-500" />
                          <span>Feels: {weatherData.apparentTemperature ?? weatherData.temperature}°C</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-semibold">
                          Humidity: {weatherData.relativeHumidity}%
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
                    <span className="text-slate-400 font-semibold">Atmospheric Engine:</span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-900 text-white font-extrabold text-[10px]">
                      OPENWEATHER WEATHER API
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining Details Section (Toggled on click) */}
            {showDetails && (
              <div id="air-quality-details" className="space-y-6 animate-in fade-in-50 duration-300">
                {/* Weather API 5-Level Scale Spectrum mapped to India NAQI */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between text-xs font-black text-slate-700 uppercase tracking-wider gap-2">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-red-600" />
                      Indian National AQI Scale vs Atmospheric 1–5 Level Alignment
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">
                      Active: AQI {currentAqi?.value} · Level {currentLevel} of 5 ({INDIA_NAQI_MAPPINGS[currentLevel]?.openWeatherCategory})
                    </span>
                  </div>

                  {/* 5-Segment Bar */}
                  <div className="grid grid-cols-5 h-6 rounded-2xl overflow-hidden shadow-inner gap-1 bg-slate-200/90 p-1">
                    {[1, 2, 3, 4, 5].map((lvl) => {
                      const info = INDIA_NAQI_MAPPINGS[lvl];
                      const isActive = currentLevel === lvl;
                      return (
                        <div
                          key={lvl}
                          className={`h-full rounded-xl transition-all flex items-center justify-center text-[10px] font-black text-white shadow-sm ${
                            isActive
                              ? 'ring-2 ring-slate-900 ring-offset-1 scale-105 z-10 font-extrabold'
                              : 'opacity-70 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: info.hex }}
                          title={`Level ${lvl} (${info.openWeatherCategory}): India NAQI ${info.naqiRange} - ${info.healthImpact}`}
                        >
                          <span className="hidden sm:inline">{info.naqiRange} ({info.openWeatherCategory})</span>
                          <span className="sm:hidden">{info.naqiRange}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Interactive Legend Grid below Spectrum */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 text-[11px]">
                    {[1, 2, 3, 4, 5].map((lvl) => {
                      const info = INDIA_NAQI_MAPPINGS[lvl];
                      const isActive = currentLevel === lvl;
                      return (
                        <div
                          key={lvl}
                          className={`p-2.5 rounded-xl border transition ${
                            isActive
                              ? 'bg-white border-slate-900 shadow-sm ring-2 ring-slate-900'
                              : 'bg-white/60 border-slate-200/70 text-slate-600'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-black text-slate-800">
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: info.hex }}
                            />
                            <span>{info.openWeatherCategory}</span>
                          </div>
                          <div className="text-[10px] font-extrabold text-slate-700 mt-1">
                            India NAQI: <span className="text-red-700">{info.naqiRange}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 line-clamp-2 mt-0.5 leading-tight">
                            {info.healthImpact}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-100">
                    {airQualityData.dataQuality.note}
                  </div>
                </div>

            {/* Individual Pollutants & Respiratory Health Advice */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-red-600" />
                  Pollutant Breakdown & Respiratory Health Guidance
                </h2>
                <span className="text-xs font-bold text-slate-400 hidden sm:inline">
                  Global WHO & Weather API Health Guidance
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {Object.entries(HEALTH_ADVISORIES).map(([pollutantId, categoryMap]) => {
                  const reading = pollutantsToDisplay[pollutantId as PollutantId];
                  let category: AqiCategory = 'Good';
                  let valDisplay = 'N/A';

                  if (reading && reading.avg !== null) {
                    category = currentCategory;
                    valDisplay = Math.round(reading.avg * 10) / 10 + '';
                  }

                  const advisory = categoryMap[category] || categoryMap['Moderate'];
                  const colors = categoryColors[category] || categoryColors['Moderate'];
                  const formatInfo = pollutantFormat[pollutantId] || {
                    label: pollutantId,
                    format: '',
                    desc: '',
                  };
                  const emoji = pollutantEmojis[pollutantId] || '💨';

                  return (
                    <div
                      key={pollutantId}
                      className={`rounded-2xl border-2 ${colors.border} bg-white overflow-hidden shadow-sm hover:shadow-md transition`}
                    >
                      {/* Card Header */}
                      <div
                        className={`p-4 ${colors.bg} ${colors.text} border-b ${colors.border} flex items-center justify-between`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{emoji}</div>
                          <div>
                            <div className="font-black text-xl flex items-baseline gap-1">
                              {formatInfo.label}: {valDisplay}{' '}
                              <span className="text-xs font-semibold">{formatInfo.format}</span>
                            </div>
                            <div className="text-xs font-bold opacity-80">
                              {formatInfo.desc}
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl" title={category}>
                          {advisory.icon}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 space-y-3">
                        <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                          Recommended Clinical Actions:
                        </div>
                        <ul className="space-y-2.5">
                          {advisory.advice.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Nationwide Weather API Data Infrastructure */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-xs text-slate-600 space-y-3 shadow-sm">
              <div className="font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-4 h-4 text-red-600" /> Environmental Telemetry Infrastructure
              </div>
              <p className="leading-relaxed">
                FixMumbai provides continuous nationwide air quality coverage across all Indian territories by
                integrating the OpenWeather Air Pollution & Weather API with multi-sensor ground networks:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-black text-slate-800">OpenWeather Air Pollution API</div>
                  <div className="text-[11px] text-slate-500">
                    Primary continuous atmospheric simulation, aerosol and chemical transport models across India
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-black text-slate-800">AQICN / WAQI</div>
                  <div className="text-[11px] text-slate-500">
                    World Air Quality Project ground station observations for Indian metropolitan zones
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="font-black text-slate-800">OpenAQ v3</div>
                  <div className="text-[11px] text-slate-500">
                    Global open environmental repository for cross-validating atmospheric measurements
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200 text-xs font-bold text-slate-500">
          <div>INDIA AIR QUALITY MONITORING · WEATHER API TELEMETRY</div>
          <Link
            href="/"
            className="text-red-600 hover:text-red-700 flex items-center gap-1 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Map
          </Link>
        </div>
      </div>
    </div>
  );
}
