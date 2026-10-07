'use client';

/**
 * GreenExplorer — Main orchestrator for Green Density & Nature Intelligence Explorer.
 *
 * Professional GIS & Environmental Intelligence Dashboard:
 * - Dark navy left sidebar with 3 map modes.
 * - Clean header with exact observation date, freshness, and 3rd map section indicator.
 * - Large central map with CARTO Positron light basemap, 100m hex grid, 27 BMC nurseries,
 *   green space polygons, and layer toggles.
 * - Right panel with 4 tabs: Spaces, HUGSI Metrics, 27 BMC Nurseries, Hex Inspector.
 * - Full bottom transparency bar detailing satellite, OSM, and BMC Handbook provenance.
 */

import React, { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import { useGreenExplorer } from '@/hooks/useGreenExplorer';
import GreenSidebar from './GreenSidebar';
import GreenRightPanel from './GreenRightPanel';
import GreenLegend from './GreenLegend';
import SearchBox from './SearchBox';
import { ShieldAlert, CheckCircle2, Calendar } from 'lucide-react';

// Leaflet map loaded client-side only
const GreenMap = dynamic(() => import('./GreenMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-slate-500">
        <div className="w-9 h-9 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
        <span className="text-sm font-bold text-slate-700">Loading Geospatial Explorer…</span>
      </div>
    </div>
  ),
});

// Ground detail drawer
const GreenDetailDrawer = dynamic(() => import('./GreenDetailDrawer'), { ssr: false });

const TODAY = new Date().toLocaleDateString('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default function GreenExplorer() {
  const {
    centre,
    hasChosenCentre,
    activateCentre,
    setCentreFromGeo,
    setCentreFromSearch,
    geoError,
    filters,
    setRadiusM,
    setFilterType,
    setCategoryFilter,
    setNurseryWard,
    toggleVerifiedOnly,
    toggleNdviLayer,
    toggleLayerVisibility,
    setBasemap,
    activeTab,
    setActiveTab,
    selectedHex,
    setSelectedHex,
    selectedNursery,
    setSelectedNursery,
    compositeType,
    setCompositeType,
    spaces,
    spacesLoading,
    spacesError,
    spacesPartial,
    spacesWarnings,
    refetchSpaces,
    tiles,
    status,
    selectedSpace,
    detailLoading,
    openDetail,
    closeDetail,
    searchQuery,
    setSearchQuery,
    searchResults,
    searchLoading,
  } = useGreenExplorer();

  const [selectedSpaceId, setSelectedSpaceId] = useState<string | null>(null);
  const [activeRoute, setActiveRoute] = useState<{ geojson: any; distM: number; durationMin: number; isEstimated: boolean } | null>(null);
  const [routeOrigin, setRouteOrigin] = useState<{ lat: number; lon: number; label: string } | null>(null);
  const [routeDestination, setRouteDestination] = useState<{ lat: number; lon: number; label: string } | null>(null);
  const [highlightMarker, setHighlightMarker] = useState<{ lat: number; lon: number; name: string } | null>(null);

  const handleSpaceClick = useCallback(
    (id: string) => {
      setSelectedSpaceId(id);
      setActiveRoute(null);
      setRouteOrigin(null);
      setRouteDestination(null);
      activateCentre();
      openDetail(id);
    },
    [openDetail, activateCentre]
  );

  const handleSelectHex = useCallback(
    (hex: any) => {
      setSelectedHex(hex);
      if (hex) setActiveTab('HEXAGON');
    },
    [setSelectedHex, setActiveTab]
  );

  const handleSelectNursery = useCallback(
    (nursery: any) => {
      setSelectedNursery(nursery);
      if (nursery) setActiveTab('NURSERIES');
    },
    [setSelectedNursery, setActiveTab]
  );

  const handleRouteReady = useCallback(
    (geojson: any, distM: number, durationMin: number, isEstimated: boolean, origin?: { lat: number; lon: number; label: string }, destination?: { lat: number; lon: number; label: string }) => {
      setActiveRoute({ geojson, distM, durationMin, isEstimated });
      if (origin) setRouteOrigin(origin);
      if (destination) setRouteDestination(destination);
    },
    []
  );

  const handleHighlightOnMap = useCallback(
    (lat: number, lon: number, name: string) => {
      setHighlightMarker({ lat, lon, name });
    },
    []
  );

  const isNdviProcessed = Boolean(
    tiles?.observationStart && tiles?.observationEnd && tiles.layers && tiles.layers.length > 0
  );

  return (
    <div
      className="flex flex-col overflow-hidden select-none bg-slate-100"
      style={{ height: 'calc(100vh - 64px)' }} // 64px = header
    >
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between px-5 py-2.5 bg-white border-b border-slate-200 flex-shrink-0 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-md shadow-emerald-600/20 text-sm">
            🌿
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-black text-slate-900 leading-tight">
                Green Density &amp; Nature Intelligence
              </h1>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald-300">
                Map 3 of 3
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Vegetation and Green Spaces Subtitle · Mumbai, Maharashtra, India
            </p>
          </div>
        </div>

        {/* Observation date & Freshness Status */}
        <div className="flex items-center gap-4 text-xs">
          {/* Status badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
            {isNdviProcessed ? (
              <span
                className={`flex items-center gap-1.5 font-bold text-[11px] ${
                  tiles?.coverageLimitedToPolygon ? 'text-amber-700' : 'text-emerald-700'
                }`}
              >
                {tiles?.coverageLimitedToPolygon ? (
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                )}
                {tiles?.coverageLimitedToPolygon
                  ? `Sentinel-2 NDVI \u00b7 partial coverage (${tiles?.polygonName ?? 'registered polygon'})`
                  : tiles?.provider === 'AGROMONITORING_SENTINEL_2'
                  ? 'Sentinel-2 NDVI Active (AgroMonitoring)'
                  : tiles?.provider === 'GOOGLE_EARTH_ENGINE'
                  ? 'Sentinel-2 NDVI Active (Earth Engine)'
                  : 'Sentinel-2 NDVI Active (Copernicus)'}
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-amber-700 font-bold text-[11px]">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                Auth Required for Satellite Raster
              </span>
            )}
          </div>

          <div className="text-right">
            <p className="text-xs font-bold text-slate-700 flex items-center gap-1 justify-end">
              <span>📍</span> {centre.name}
            </p>
            <p className="text-[10.5px] text-slate-400 font-mono">
              <Calendar className="w-3 h-3 inline mr-1" />
              Obs Date: {isNdviProcessed ? `${tiles?.observationStart}` : TODAY}
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Dashboard Body ───────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Dark Navy Sidebar */}
        <GreenSidebar />

        {/* Central Map Area */}
        <div className="flex-1 relative overflow-hidden h-full">
          {/* Floating Search Bar */}
          <div className="absolute top-3.5 left-3.5 z-[1000] w-80">
            <SearchBox
              query={searchQuery}
              onQueryChange={setSearchQuery}
              results={searchResults}
              loading={searchLoading}
              onSelect={setCentreFromSearch}
            />
          </div>

          {/* Leaflet Map (SSR: false) */}
          <GreenMap
            centre={centre}
            hasChosenCentre={hasChosenCentre}
            spaces={spaces}
            filters={filters}
            tiles={tiles}
            onSpaceClick={handleSpaceClick}
            selectedSpaceId={selectedSpaceId}
            onSelectHex={handleSelectHex}
            selectedHexId={selectedHex?.hexId}
            onSelectNursery={handleSelectNursery}
            selectedNurseryId={selectedNursery?.id}
            onLocateMe={() => setCentreFromGeo()}
            onToggleLayerVisibility={toggleLayerVisibility}
            onSetBasemap={setBasemap}
            geoError={geoError}
            activeRoute={activeRoute?.geojson ?? null}
            routeOrigin={routeOrigin}
            routeDestination={routeDestination}
            highlightMarker={highlightMarker}
          />

          {/* Map Legend (Bottom-right) */}
          <GreenLegend isNdviProcessed={isNdviProcessed} />
        </div>

        {/* Right Intelligence Panel + Drawer */}
        <div className="relative w-[360px] flex-shrink-0 h-full overflow-hidden bg-white border-l border-slate-200">
          <GreenRightPanel
            centre={centre}
            spaces={spaces}
            spacesLoading={spacesLoading}
            spacesError={spacesError}
            spacesPartial={spacesPartial}
            spacesWarnings={spacesWarnings}
            onRetry={refetchSpaces}
            filters={filters}
            onRadiusChange={setRadiusM}
            onFilterTypeChange={setFilterType}
            onToggleVerifiedOnly={toggleVerifiedOnly}
            onToggleNdviLayer={toggleNdviLayer}
            tiles={tiles}
            selectedSpaceId={selectedSpaceId}
            onSpaceClick={handleSpaceClick}
            onZoomTo5km={() => activateCentre()}
            compositeType={compositeType}
            onCompositeTypeChange={setCompositeType}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            selectedHex={selectedHex}
            onCloseHex={() => setSelectedHex(null)}
            selectedNursery={selectedNursery}
            onSelectNursery={handleSelectNursery}
            onCloseNursery={() => setSelectedNursery(null)}
            categoryFilter={filters.categoryFilter}
            onCategoryFilterChange={setCategoryFilter}
            nurseryWard={filters.nurseryWard}
            onNurseryWardChange={setNurseryWard}
          />

          {/* Detailed Space Drawer (Overlay inside panel container) */}
          {(detailLoading || selectedSpace) && (
            <div className="absolute inset-0 z-30 bg-white">
              <GreenDetailDrawer
                space={selectedSpace}
                loading={detailLoading}
                onClose={() => {
                  closeDetail();
                  setSelectedSpaceId(null);
                  setActiveRoute(null);
                  setRouteOrigin(null);
                  setRouteDestination(null);
                }}
                userLat={centre.lat}
                userLon={centre.lon}
                onRouteReady={handleRouteReady}
                onHighlightOnMap={handleHighlightOnMap}
              />
            </div>
          )}
        </div>
      </div>

      {/* ── Footer Provenance & Data Sources ───────────────────────────────── */}
      <footer className="flex-shrink-0 bg-slate-50 border-t border-slate-200 px-5 py-2 flex flex-wrap gap-8 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="text-base" aria-hidden>
            🛰
          </span>
          <div>
            <p className="font-bold text-slate-700 leading-tight">Sentinel-2 NDVI</p>
            <p className="text-[11px] leading-tight">Copernicus S2_SR_HARMONIZED via Google Earth Engine</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base" aria-hidden>
            🗺
          </span>
          <div>
            <p className="font-bold text-slate-700 leading-tight">High-Contrast Canvas &amp; Boundaries</p>
            <p className="text-[11px] leading-tight">Esri Light Gray Canvas + OSM (© ODbL)</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base" aria-hidden>
            🌱
          </span>
          <div>
            <p className="font-bold text-slate-700 leading-tight">BMC Nurseries</p>
            <p className="text-[11px] leading-tight">
              Greening Mumbai Citizen&apos;s Handbook (pp. 82–83) · BMC &amp; WRI India
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <span className="text-base" aria-hidden>
            ⬡
          </span>
          <div>
            <p className="font-bold text-slate-700 leading-tight">Hexagonal Grid</p>
            <p className="text-[11px] leading-tight">100m Turf.js short-diameter cell analysis</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
