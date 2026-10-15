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
} from 'lucide-react';
import { calculateWbgt } from '@/lib/wbgt/calculator';
import { detectExactUserLocation } from '@/lib/user-location';
import { APP_BASE_PATH } from '@/lib/base-path';

// Dynamically load the Weather Map component
const WeatherMap = dynamic(() => import('@/components/heat-stress/HeatStressMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[540px] sm:h-[660px] rounded-3xl bg-[#0B0F19] flex flex-col items-center justify-center border border-slate-800">
      <RefreshCw className="w-8 h-8 animate-spin text-blue-500 mb-3" />
      <span className="text-xs font-mono text-slate-400">Loading Real-Time Weather Map...</span>
    </div>
  ),
});

export default function HeatStressDashboard() {
  // Currently inspected location (Default: Mumbai)
  const [location, setLocation] = useState({
    lat: 19.076,
    lon: 72.8777,
    name: 'Mumbai',
    state: 'Maharashtra',
  });

  // Real weather parameters fetched dynamically from OpenWeather
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
  const fetchLiveWeather = useCallback(async (lat: number, lon: number, customName?: string, customState?: string) => {
    setLoadingWeather(true);
    try {
      const res = await fetch(`${APP_BASE_PATH}/api/weather?lat=${lat}&lon=${lon}`);
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

        setLocation({
          lat,
          lon,
          name: customName || d.placeName || 'Selected Location',
          state: customState || d.adminName || '',
        });

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
    fetchLiveWeather(location.lat, location.lon, location.name, location.state);
  }, []);

  // Handle location selection from click on map
  const handleSelectLocation = (lat: number, lon: number, name?: string, state?: string) => {
    fetchLiveWeather(lat, lon, name, state);
  };

  // Locate user GPS or Network IP
  const handleLocateMe = async () => {
    try {
      const loc = await detectExactUserLocation();
      handleSelectLocation(loc.lat, loc.lon, loc.name, loc.state);
    } catch (err) {
      console.warn('Location detection failed', err);
    }
  };

  // Run the Healthrytix mathematical formulation based on REAL dynamic values
  const wbgtResult = useMemo(() => {
    return calculateWbgt(temperature, humidity, isDirectSun);
  }, [temperature, humidity, isDirectSun]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Title & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-semibold uppercase">
          <Wind className="w-3.5 h-3.5 text-blue-600 animate-pulse" /> Live Weather & Thermal Simulation
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Real-Time Weather & Heat Stress Map
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore real-time atmospheric conditions, flowing wind currents, and the <strong>Healthrytix WBGT Heat Index</strong> across Maharashtra and India. Click anywhere on the map to sample the live weather and true thermal strain of that exact region.
        </p>
      </div>

      {/* Grid: Map + Clean Right-Side Telemetry Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Real-Time Weather Map */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#1C357C]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                Regional Wind & Thermal Field
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleLocateMe}
                className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition shadow-sm"
              >
                <Locate className="w-3.5 h-3.5" /> Locate GPS
              </button>
              <button
                type="button"
                onClick={() => fetchLiveWeather(location.lat, location.lon, location.name, location.state)}
                disabled={loadingWeather}
                className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition shadow-sm"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingWeather ? 'animate-spin' : ''}`} /> Sync
              </button>
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
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-800">
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
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-blue-700 border border-blue-200 shadow-xs">
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
                <span className="text-xs font-mono font-bold text-emerald-400">
                  Stull Empirical Model
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    Calculated WBGT
                  </span>
                  <span className="text-3xl font-extrabold font-mono text-white">
                    {wbgtResult.wbgt}°C
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    True Thermal Strain
                  </span>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">
                    Stull Wet-Bulb (Tw)
                  </span>
                  <span className="text-3xl font-extrabold font-mono text-blue-400">
                    {wbgtResult.tw}°C
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Sweat Evaporation Limit
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
