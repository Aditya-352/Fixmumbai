'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import {
  Sun,
  CloudSun,
  Droplets,
  Thermometer,
  Wind,
  ShieldCheck,
  Activity,
  Locate,
  RefreshCw,
  Compass,
  MapPin,
  Gauge,
  Eye,
  Sunrise,
  Sunset,
  Cloud,
  Search,
  Loader2,
  X,
  Navigation,
  Flame,
} from 'lucide-react';
import { calculateWbgt } from '@/lib/wbgt/calculator';
import { detectExactUserLocation } from '@/lib/user-location';

// Dynamically load the Heat Stress Map component
const WeatherMap = dynamic(() => import('@/components/heat-stress/HeatStressMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[540px] sm:h-[660px] rounded-3xl bg-[#0B0F19] flex flex-col items-center justify-center border border-slate-800">
      <RefreshCw className="w-8 h-8 animate-spin text-rose-500 mb-3" />
      <span className="text-xs font-mono text-slate-400">Loading Real-Time WBGT Heat Map...</span>
    </div>
  ),
});


export default function HeatStressDashboard() {
  // Currently inspected location (Default: Mumbai)
  const [location, setLocation] = useState<{
    lat: number;
    lon: number;
    name: string;
    state?: string;
    zoom?: number;
    locateKey?: number;
  }>({
    lat: 19.076,
    lon: 72.8777,
    name: 'Mumbai',
    state: 'Maharashtra',
    zoom: 7,
  });

  // Search query & geocoding states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Array<{ name: string; displayName: string; lat: number; lon: number; state?: string }>>([]);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [locating, setLocating] = useState<boolean>(false);

  // Real weather parameters fetched dynamically from OpenWeather / Open-Meteo
  const [temperature, setTemperature] = useState<number>(33.6);
  const [humidity, setHumidity] = useState<number>(52);
  const [apparentTemp, setApparentTemp] = useState<number>(36.2);
  const [windSpeed, setWindSpeed] = useState<number>(14.5);
  const [windDirection, setWindDirection] = useState<number>(240);
  const [isDirectSun, setIsDirectSun] = useState<boolean>(true);
  const [weatherDescription, setWeatherDescription] = useState<string>('Clear Sky');
  const [weatherIcon, setWeatherIcon] = useState<string>('01d');
  const [pressure, setPressure] = useState<number | undefined>(1012);
  const [clouds, setClouds] = useState<number>(15);
  const [visibility, setVisibility] = useState<number | null>(10);
  const [sunriseTime, setSunriseTime] = useState<string | null>(null);
  const [sunsetTime, setSunsetTime] = useState<string | null>(null);
  const [provider, setProvider] = useState<string>('OPENWEATHER');
  const [loadingWeather, setLoadingWeather] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // Fetch real-time weather & reverse-geocoded place details
  const fetchLiveWeather = useCallback(async (lat: number, lon: number, customName?: string, customState?: string, customZoom?: number) => {
    setLoadingWeather(true);
    try {
      // Support Next.js basePath /civic and fallback gracefully
      let res = await fetch(`/civic/api/weather?lat=${lat}&lon=${lon}`);
      if (!res.ok && res.status === 404) {
        res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
      }
      const json = await res.json();
      if (json.success && json.data) {
        const d = json.data;
        setTemperature(Math.round(d.temperature * 10) / 10);
        setHumidity(Math.round(d.relativeHumidity));
        setApparentTemp(Math.round(d.apparentTemperature * 10) / 10);
        setWindSpeed(Math.round(d.windSpeed * 10) / 10);
        setWindDirection(d.windDirection || 240);
        setIsDirectSun(d.isDay && (d.clouds ?? 0) < 50);

        if (d.weatherDescription) setWeatherDescription(d.weatherDescription);
        if (d.weatherIcon) setWeatherIcon(d.weatherIcon);
        if (d.pressure) setPressure(d.pressure);
        if (typeof d.clouds === 'number') setClouds(d.clouds);
        if (typeof d.visibility === 'number') setVisibility(d.visibility);
        if (d.provider) setProvider(d.provider);

        if (d.sunrise) {
          setSunriseTime(new Date(d.sunrise).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
        if (d.sunset) {
          setSunsetTime(new Date(d.sunset).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }

        setLocation(prev => ({
          lat,
          lon,
          name: customName || d.placeName || prev.name || 'Selected Location',
          state: customState || d.adminName || prev.state || '',
          zoom: customZoom ?? prev.zoom,
          locateKey: prev.locateKey,
        }));

        setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      }
    } catch (err) {
      console.error('Failed to fetch real-time weather', err);
    } finally {
      setLoadingWeather(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchLiveWeather(location.lat, location.lon, location.name, location.state, 7);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle location selection from click on map or geocoding
  const handleSelectLocation = (lat: number, lon: number, name?: string, state?: string) => {
    setLocation(prev => ({
      lat,
      lon,
      name: name || 'Inspected Location',
      state,
      zoom: prev.zoom,
      locateKey: Date.now(),
    }));
    fetchLiveWeather(lat, lon, name, state);
  };

  // Search submission handler (queries /api/geocode or /civic/api/geocode)
  const handleSearchSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchError(null);
    try {
      let res = await fetch(`/civic/api/geocode?q=${encodeURIComponent(searchQuery.trim())}`);
      if (!res.ok && res.status === 404) {
        res = await fetch(`/api/geocode?q=${encodeURIComponent(searchQuery.trim())}`);
      }
      const data = await res.json();
      if (data.success && Array.isArray(data.results) && data.results.length > 0) {
        setSearchResults(data.results);
        const first = data.results[0];
        fetchLiveWeather(first.lat, first.lon, first.name || first.displayName, first.state, 14);
        if (data.results.length === 1) {
          setSearchResults([]);
        }
      } else {
        setSearchError(`No coordinates found for "${searchQuery.trim()}". Please try another city, district, or ward.`);
      }
    } catch (err) {
      setSearchError('Geocoding search service is busy. Please choose from the map or quick regional centers.');
    } finally {
      setIsSearching(false);
    }
  };

  // Selection from search suggestions dropdown
  const handleSelectSearchResult = (resultItem: { name: string; displayName: string; lat: number; lon: number; state?: string }) => {
    setSearchResults([]);
    setSearchQuery(resultItem.displayName || resultItem.name);
    fetchLiveWeather(resultItem.lat, resultItem.lon, resultItem.name, resultItem.state, 14);
  };

  // Locate user GPS or Network IP
  const handleLocateMe = async () => {
    setLocating(true);
    try {
      const loc = await detectExactUserLocation();
      // Instantly position the map and marker on the exact user location at zoom 16
      setLocation({
        lat: loc.lat,
        lon: loc.lon,
        name: loc.name,
        state: loc.state,
        zoom: 16,
        locateKey: Date.now(),
      });
      setSearchQuery(`${loc.name}${loc.state ? `, ${loc.state}` : ''}`);
      setSearchResults([]);

      // Fetch live real-time weather
      await fetchLiveWeather(loc.lat, loc.lon, loc.name, loc.state, 16);
    } catch (err) {
      console.warn('Location detection failed', err);
    } finally {
      setLocating(false);
    }
  };

  // Run the Healthrytix mathematical formulation based on REAL dynamic values
  const wbgtResult = useMemo(() => {
    return calculateWbgt(temperature, humidity, isDirectSun);
  }, [temperature, humidity, isDirectSun]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-700 text-xs font-semibold uppercase">
          <Flame className="w-3.5 h-3.5 text-rose-600 animate-pulse" /> Live WBGT Biophysical Heat Stress Map
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Real-Time WBGT Thermal Heat Map
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore continuous real-time thermal radiation fields, microclimatic variance, and the <strong>Healthrytix WBGT Heat Index</strong> across Maharashtra and India. Search any locality or click anywhere on the heat map to inspect live weather and biophysical heat strain.
        </p>
      </div>

      {/* Location Search Bar & Quick Regional Selectors */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Main Search Input Form */}
          <form onSubmit={handleSearchSubmit} className="relative flex-1 flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (searchError) setSearchError(null);
              }}
              placeholder="Search any Indian city, district, or neighborhood (e.g. Bandra, Pune, Nagpur, New Delhi)..."
              className="w-full pl-11 pr-28 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSearchResults([]);
                  setSearchError(null);
                }}
                className="absolute right-24 p-1 text-slate-400 hover:text-slate-600 rounded-full transition"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              disabled={isSearching}
              className="absolute right-2 px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-extrabold shadow-sm transition disabled:opacity-50 flex items-center gap-1.5"
            >
              {isSearching ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
              <span>{isSearching ? 'SEARCHING' : 'SEARCH'}</span>
            </button>
          </form>

          {/* Action Buttons: GPS + Sync */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleLocateMe}
              disabled={locating}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold rounded-2xl transition shadow-sm active:scale-95 disabled:opacity-70"
            >
              {locating ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-rose-400" />
              ) : (
                <Navigation className="w-3.5 h-3.5 text-rose-400" />
              )}
              <span>{locating ? 'LOCATING...' : 'USE GPS'}</span>
            </button>

            <button
              type="button"
              onClick={() => fetchLiveWeather(location.lat, location.lon, location.name, location.state)}
              disabled={loadingWeather}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold rounded-2xl transition shadow-sm disabled:opacity-70"
              title="Refresh Live Weather"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingWeather ? 'animate-spin text-rose-600' : ''}`} />
              <span className="hidden sm:inline">SYNC</span>
            </button>
          </div>
        </div>

        {/* Search Results Dropdown Suggestions (if multiple matches) */}
        {searchResults.length > 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2 space-y-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
              Select Location Match:
            </div>
            {searchResults.map((res, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectSearchResult(res)}
                className="w-full text-left px-3 py-2 rounded-xl text-xs hover:bg-white hover:shadow-xs transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span className="font-bold text-slate-800 group-hover:text-rose-600">{res.displayName || res.name}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 shrink-0">
                  {res.lat.toFixed(3)}, {res.lon.toFixed(3)}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Search Error Notice */}
        {searchError && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl text-xs font-semibold text-rose-700 flex items-center justify-between">
            <span>{searchError}</span>
            <button type="button" onClick={() => setSearchError(null)} className="text-rose-400 hover:text-rose-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
        </div>

      {/* Grid: Map + Clean Right-Side Telemetry Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Real-Time WBGT Heat Map */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                Continuous Thermal Heat Field & WBGT
              </span>
            </div>
            <div className="text-xs font-mono text-slate-500">
              Click anywhere to inspect microclimate
            </div>
          </div>

          <WeatherMap
            selectedLocation={location}
            onSelectLocation={handleSelectLocation}
            result={wbgtResult}
            currentTemp={temperature}
            currentHumidity={humidity}
            windSpeed={windSpeed}
            windDirection={windDirection}
            loading={loadingWeather}
          />

          {/* Real-time Telemetry Bar */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>DYNAMIC TELEMETRY: {provider === 'OPENWEATHER' ? 'OPENWEATHER REAL-TIME OBSERVATION' : 'OPEN-METEO SATELLITE & GRID'}</span>
            </div>
            <div>
              SYNCED AT: <span className="font-bold text-slate-800">{lastUpdated || 'Loading...'}</span>
            </div>
          </div>
        </div>

        {/* Right: Clean Real-Time Weather & Health Advisory Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-6">
            {/* Header: Location & Status */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Location Inspected
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  {location.name}
                </h3>
                {location.state && (
                  <span className="text-xs font-mono text-emerald-600 font-bold block">
                    {location.state}, India
                  </span>
                )}
              </div>
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${wbgtResult.riskColor}`}>
                {wbgtResult.riskLevel} Thermal Load
              </span>
            </div>

            {/* Weather Condition Banner */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 text-slate-800">
              <div className="flex items-center gap-3">
                {weatherIcon && (
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                    alt={weatherDescription}
                    className="w-11 h-11 -my-2 drop-shadow-sm"
                  />
                )}
                <div>
                  <div className="font-extrabold text-sm text-slate-900">{weatherDescription}</div>
                  <div className="text-[11px] font-medium text-slate-500">Real-time Atmospheric Condition</div>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-rose-700 border border-rose-200 shadow-xs">
                OpenWeather
              </span>
            </div>

            {/* Real Weather Measurements (Live & Automatic) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Thermometer className="w-4 h-4 text-rose-500" /> Air Temperature
                </div>
                <div className="text-3xl font-black font-mono text-slate-900 mt-1">
                  {temperature}°C
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Feels like {apparentTemp}°C
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Droplets className="w-4 h-4 text-emerald-600" /> Relative Humidity
                </div>
                <div className="text-3xl font-black font-mono text-emerald-600 mt-1">
                  {humidity}%
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Dew Evaporative Rate
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Wind className="w-4 h-4 text-blue-500" /> Wind Velocity
                </div>
                <div className="text-2xl font-black font-mono text-slate-900 mt-1">
                  {windSpeed} <span className="text-sm font-normal text-slate-500">km/h</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Heading: {windDirection}°
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  {isDirectSun ? (
                    <Sun className="w-4 h-4 text-amber-500" />
                  ) : (
                    <CloudSun className="w-4 h-4 text-slate-500" />
                  )}
                  Solar Radiant Status
                </div>
                <div className="text-lg font-black text-slate-900 mt-1 truncate">
                  {isDirectSun ? 'Direct Sun (+6.5°)' : 'Shaded / Low (+0.8°)'}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Cloud Cover: {clouds}%
                </div>
              </div>
            </div>

            {/* Extended OpenWeather Barometric & Sunlight Telemetry */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center justify-center gap-1">
                  <Gauge className="w-3 h-3 text-slate-500" /> Pressure
                </div>
                <div className="font-mono font-bold text-slate-800 mt-0.5">
                  {pressure ? `${pressure} hPa` : '—'}
                </div>
              </div>

              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center justify-center gap-1">
                  <Eye className="w-3 h-3 text-slate-500" /> Visibility
                </div>
                <div className="font-mono font-bold text-slate-800 mt-0.5">
                  {visibility !== null ? `${visibility} km` : '10 km'}
                </div>
              </div>

              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center justify-center gap-1">
                  <Sunset className="w-3 h-3 text-amber-500" /> Sunset
                </div>
                <div className="font-mono font-bold text-slate-800 mt-0.5">
                  {sunsetTime || '—'}
                </div>
              </div>
            </div>

            {/* Healthrytix WBGT Biophysical Output */}
            <div className="p-5 rounded-2xl bg-[#0B0F19] text-white border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase">
                  Biophysical Heat Stress Engine
                </span>
                <span className="text-xs font-mono font-bold text-rose-400">
                  Thermal Analysis
                </span>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase font-bold">
                    Calculated WBGT Index
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    True Microclimatic Thermal Strain
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-white">
                    {wbgtResult.wbgt}°C
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-1 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">PriSEHAT Health State:</span>
                  <span className="font-bold text-white px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                    {wbgtResult.state}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="font-bold text-slate-200 block mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Recommended Operational Protocol:
                  </span>
                  <span className="text-slate-400 font-sans leading-relaxed">
                    {wbgtResult.action}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
