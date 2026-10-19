'use client';

/**
 * GreenExplorer — Main orchestrator for Green Density & Nature Intelligence Explorer.
 *
 * Premium Environmental Intelligence Dashboard:
 * - Clean white (#FFFFFF) page header with forest-green (#087F5B) accents.
 * - Collapsible white left sidebar with accordion sections.
 * - Hero central map with floating white controls.
 * - Right intelligence panel with soft-green tabs.
 * - Responsive mobile bottom navigation (Map, Explore, Layers, Photo).
 * - Global photo evidence modal (Take Photo / Upload Photo).
 * - Footer provenance bar with data-source attribution.
 */

import React, { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import { useGreenExplorer } from '@/hooks/useGreenExplorer';
import GreenSidebar from './GreenSidebar';
import GreenRightPanel from './GreenRightPanel';
import GreenLegend from './GreenLegend';
import SearchBox from './SearchBox';
import { MapLayerControlContent } from './MapLayerControl';
import {
  ShieldAlert,
  CheckCircle2,
  Calendar,
  Camera,
  Map,
  Layers,
  Trees,
  X,
} from 'lucide-react';
import { DEFAULT_CITY, type CityId } from '@/lib/green/config';
import { CitySelectionProvider, useCitySelection, type CityOption } from './CitySelection';

// Citizen photo upload — loaded lazily
const CitizenPhotoUpload = dynamic(() => import('./CitizenPhotoUpload'), { ssr: false });

// Leaflet map loaded client-side only
const GreenMap = dynamic(() => import('./GreenMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#F7F9F8] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-[#64746B]">
        <div className="w-9 h-9 rounded-full border-4 border-[#087F5B] border-t-transparent animate-spin" />
        <span className="text-sm font-bold text-[#14231D]">Loading Geospatial Explorer…</span>
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

/**
 * Outer shell: the single owner of the selected city.
 *
 * `ExplorerBody` is keyed on the city id, so changing city remounts it. That
 * guarantees complete state isolation — every hook starts empty, the map starts
 * on the new city's framing, and a response belonging to the previous city can
 * never be rendered in the new one. This is simpler and safer than trying to
 * unwind every piece of state by hand.
 */
export default function GreenExplorer() {
  const [cityId, setCityId] = React.useState<CityId>(() => {
    if (typeof window !== 'undefined') {
      try {
        const p = new URLSearchParams(window.location.search);
        const c = p.get('city')?.toLowerCase();
        if (c === 'pune' || c === 'bengaluru') return c as CityId;
      } catch (_) {}
    }
    return DEFAULT_CITY.id;
  });

  const handleSelectCity = React.useCallback((id: CityId) => {
    setCityId(id);
    if (typeof window !== 'undefined') {
      try {
        const url = new URL(window.location.href);
        if (id === DEFAULT_CITY.id) {
          url.searchParams.delete('city');
        } else {
          url.searchParams.set('city', id);
        }
        window.history.replaceState({}, '', url.toString());
      } catch (_) {}
    }
  }, []);

  return (
    <CitySelectionProvider cityId={cityId} onSelect={handleSelectCity}>
      <ExplorerBody key={cityId} cityId={cityId} />
    </CitySelectionProvider>
  );
}

/** City selector. Lists every registered city and is explicit about data availability. */
function CitySelector({ options, current, onSelect }: {
  options: CityOption[];
  current: CityId;
  onSelect: (id: CityId) => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <label htmlFor="city-select" className="text-[10px] font-black uppercase tracking-wider text-[#64746B]">
        City
      </label>
      <select
        id="city-select"
        value={current}
        onChange={(e) => onSelect(e.target.value as CityId)}
        className="text-xs font-bold rounded-lg border border-[#E5EBE7] bg-white px-2 py-1 text-[#14231D] focus:outline-none focus:ring-2 focus:ring-[#087F5B]"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
            {o.availability === 'EMPTY' ? ' — no dataset yet' : ''}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ── Mobile bottom nav item types ──────────────────────────────────────────── */
type MobileView = 'map' | 'explore' | 'layers' | 'photo';

function ExplorerBody({ cityId }: { cityId: CityId }) {
  const { city, options, selectCity } = useCitySelection();
  const {
    centre,
    hasChosenCentre,
    activateCentre,
    setCentreFromSearch,
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
    spacesTotal,
    spacesHasMore,
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
  } = useGreenExplorer(cityId);

  const [selectedSpaceId, setSelectedSpaceId] = useState<string | null>(null);
  const [activeRoute, setActiveRoute] = useState<{ geojson: any; distM: number; durationMin: number; isEstimated: boolean } | null>(null);
  const [routeOrigin, setRouteOrigin] = useState<{ lat: number; lon: number; label: string } | null>(null);
  const [routeDestination, setRouteDestination] = useState<{ lat: number; lon: number; label: string } | null>(null);
  const [highlightMarker, setHighlightMarker] = useState<{ lat: number; lon: number; name: string } | null>(null);

  // Photo modal state
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [photoModalMode, setPhotoModalMode] = useState<'camera' | 'upload'>('upload');

  // Mobile view state
  const [mobileView, setMobileView] = useState<MobileView>('map');

  const handleOpenPhotoModal = useCallback((mode?: 'camera' | 'upload') => {
    setPhotoModalMode(mode ?? 'upload');
    setPhotoModalOpen(true);
  }, []);

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
      className="flex flex-col overflow-hidden select-none bg-[#F7F9F8] h-[calc(100dvh-56px)] sm:h-[calc(100dvh-64px)]"
    >
      {/* ── Premium White Header ────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 bg-white border-b border-[#E5EBE7] flex-shrink-0 gap-2 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#087F5B] text-white flex items-center justify-center font-black shadow-sm text-xs sm:text-sm flex-shrink-0">
            🌿
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1 sm:gap-2">
              <h1 className="text-[13px] sm:text-base font-black text-[#14231D] leading-tight whitespace-nowrap">
                Green Density
              </h1>
              <span className="bg-[#EAF7F0] text-[#087F5B] text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full border border-[#087F5B]/20 flex-shrink-0">
                Live
              </span>
            </div>
            <p className="text-xs text-[#64746B] font-medium hidden sm:block truncate">
              Discover greener spaces across {city.name}
            </p>
          </div>
        </div>

        {/* Right side: status + city */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs flex-shrink-0">

          {/* Status badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F7F9F8] border border-[#E5EBE7]">
            {isNdviProcessed ? (
              <span
                className={`flex items-center gap-1.5 font-bold text-[11px] ${
                  tiles?.coverageLimitedToPolygon ? 'text-amber-700' : 'text-[#087F5B]'
                }`}
              >
                {tiles?.coverageLimitedToPolygon ? (
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
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

          <div className="text-right flex flex-col items-end">
            <CitySelector options={options} current={city.id} onSelect={selectCity} />
            <p className="text-xs font-bold text-[#14231D] hidden sm:flex items-center gap-1 justify-end mt-1">
              <span>📍</span> {centre.name}
            </p>
            <p className="text-[10.5px] text-[#64746B] font-mono hidden sm:block">
              <Calendar className="w-3 h-3 inline mr-1" />
              Obs Date: {isNdviProcessed ? `${tiles?.observationStart}` : TODAY}
            </p>
          </div>
        </div>
      </header>

      {/* ── Main Dashboard Body ───────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left White Sidebar — hidden below lg */}
        <GreenSidebar
          filters={filters}
          onFilterTypeChange={setFilterType}
          onCategoryFilterChange={setCategoryFilter}
          onRadiusChange={setRadiusM}
          layerVisibility={filters.layerVisibility}
          onToggleLayer={toggleLayerVisibility}
          onSetBasemap={setBasemap}
          totalSpaces={spacesTotal ?? spaces.length}
          cityName={city.name.replace(/,\s*India$/, '')}
          centreName={centre.name}
          onOpenPhotoModal={handleOpenPhotoModal}
          isNdviProcessed={isNdviProcessed}
        />

        {/* Central Map Area */}
        <div className="flex-1 relative overflow-hidden h-full">
          {/* Floating Search Bar — Responsive width that doesn't collide with the mobile layers button */}
          <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 z-[1000] w-[calc(100%-62px)] sm:w-80">
            <SearchBox
              query={searchQuery}
              onQueryChange={setSearchQuery}
              results={searchResults}
              loading={searchLoading}
              onSelect={setCentreFromSearch}
              cityName={city.name.replace(/,\s*India$/, '')}
            />
          </div>

          {/* Leaflet Map (SSR: false) */}
          <GreenMap
            city={city}
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
            onToggleLayerVisibility={toggleLayerVisibility}
            onSetBasemap={setBasemap}
            activeRoute={activeRoute?.geojson ?? null}
            routeOrigin={routeOrigin}
            routeDestination={routeDestination}
            highlightMarker={highlightMarker}
            onOpenMobileLayers={() => setMobileView('layers')}
          />

          {/* Map Legend (Bottom-right) */}
          <GreenLegend isNdviProcessed={isNdviProcessed} cityId={cityId} />
        </div>

        {/* Right Intelligence Panel + Drawer — hidden below lg */}
        <div className="relative hidden lg:flex w-[360px] flex-shrink-0 h-full overflow-hidden bg-white border-l border-[#E5EBE7]">
          <GreenRightPanel
            cityId={cityId}
            centre={centre}
            spaces={spaces}
            spacesLoading={spacesLoading}
            spacesError={spacesError}
            spacesPartial={spacesPartial}
            spacesWarnings={spacesWarnings}
            spacesTotal={spacesTotal}
            spacesHasMore={spacesHasMore}
            cityBoundaryIsProvisional={city.boundaryMeta?.isBoundingBoxOnly ?? true}
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

      {/* ── Mobile Bottom Navigation (< lg) ─────────────────────────────────── */}
      <nav className="lg:hidden flex-shrink-0 grid grid-cols-4 items-center bg-white border-t border-[#E5EBE7] px-1 py-1.5 safe-area-bottom shadow-[0_-2px_10px_rgba(0,0,0,0.04)]">
        {([
          { id: 'map' as MobileView, label: 'Map', icon: Map },
          { id: 'explore' as MobileView, label: 'Explore', icon: Trees },
          { id: 'photo' as MobileView, label: 'Evidence', icon: Camera },
          { id: 'layers' as MobileView, label: 'Layers', icon: Layers },
        ]).map(({ id, label, icon: Icon }) => {
          const active = mobileView === id;
          return (
            <button
              key={id}
              onClick={() => {
                if (id === 'photo') {
                  handleOpenPhotoModal('upload');
                } else {
                  setMobileView(id);
                }
              }}
              className={`w-full flex flex-col items-center justify-center min-h-[44px] py-1 px-1 rounded-xl transition-all ${
                active
                  ? 'text-[#087F5B] bg-[#EAF7F0]'
                  : 'text-[#64746B] hover:text-[#14231D]'
              }`}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5 truncate max-w-full text-center">{label}</span>
            </button>
          );
        })}
      </nav>

      {/* ── Mobile Explore Bottom Sheet (< lg) ────────────────────────────────── */}
      {mobileView === 'explore' && (
        <div className="lg:hidden fixed inset-x-0 bottom-[58px] z-[2000] max-h-[70vh] overflow-y-auto bg-white border-t border-[#E5EBE7] rounded-t-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.14)] animate-fadeIn safe-area-bottom">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5EBE7] sticky top-0 bg-white z-10">
            <h2 className="text-sm font-black text-[#14231D]">Explore Green Spaces</h2>
            <button
              onClick={() => setMobileView('map')}
              className="text-[#64746B] hover:text-[#14231D] p-1.5 rounded-lg transition min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close explore sheet"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-3">
            <GreenRightPanel
              cityId={cityId}
              centre={centre}
              spaces={spaces}
              spacesLoading={spacesLoading}
              spacesError={spacesError}
              spacesPartial={spacesPartial}
              spacesWarnings={spacesWarnings}
              spacesTotal={spacesTotal}
              spacesHasMore={spacesHasMore}
              cityBoundaryIsProvisional={city.boundaryMeta?.isBoundingBoxOnly ?? true}
              onRetry={refetchSpaces}
              filters={filters}
              onRadiusChange={setRadiusM}
              onFilterTypeChange={setFilterType}
              onToggleVerifiedOnly={toggleVerifiedOnly}
              onToggleNdviLayer={toggleNdviLayer}
              tiles={tiles}
              selectedSpaceId={selectedSpaceId}
              onSpaceClick={(id) => {
                handleSpaceClick(id);
                setMobileView('map');
              }}
              onZoomTo5km={() => activateCentre()}
              compositeType={compositeType}
              onCompositeTypeChange={setCompositeType}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              selectedHex={selectedHex}
              onCloseHex={() => setSelectedHex(null)}
              selectedNursery={selectedNursery}
              onSelectNursery={(n) => {
                handleSelectNursery(n);
                setMobileView('map');
              }}
              onCloseNursery={() => setSelectedNursery(null)}
              categoryFilter={filters.categoryFilter}
              onCategoryFilterChange={setCategoryFilter}
              nurseryWard={filters.nurseryWard}
              onNurseryWardChange={setNurseryWard}
            />
          </div>
        </div>
      )}

      {/* ── Mobile Layers Bottom Sheet (< lg) ────────────────────────────────── */}
      {mobileView === 'layers' && (
        <div className="lg:hidden fixed inset-x-0 bottom-[58px] z-[2000] max-h-[70vh] overflow-y-auto bg-white border-t border-[#E5EBE7] rounded-t-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.14)] animate-fadeIn safe-area-bottom">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5EBE7] sticky top-0 bg-white z-10">
            <h2 className="text-sm font-black text-[#14231D]">Map Layers &amp; Overlays</h2>
            <button
              onClick={() => setMobileView('map')}
              className="text-[#64746B] hover:text-[#14231D] p-1.5 rounded-lg transition min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close layers sheet"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <MapLayerControlContent
              layerVisibility={filters.layerVisibility}
              onToggleLayer={toggleLayerVisibility}
              onSetBasemap={setBasemap}
            />
          </div>
        </div>
      )}

      {/* ── Mobile Space Detail Full Drawer (< lg) ───────────────────────────── */}
      {(detailLoading || selectedSpace) && (
        <div className="lg:hidden fixed inset-x-0 bottom-[58px] top-14 z-[2000] bg-white overflow-hidden flex flex-col shadow-[0_-4px_24px_rgba(0,0,0,0.18)] animate-fadeIn">
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

      {/* ── Global Photo Evidence Modal ─────────────────────────────────────── */}
      {photoModalOpen && (
        <CitizenPhotoUpload
          greenSpaceId={selectedSpaceId}
          greenSpaceName={selectedSpace?.name ?? 'General Observation'}
          defaultLat={centre.lat}
          defaultLon={centre.lon}
          onClose={() => setPhotoModalOpen(false)}
          onSuccess={() => {
            setPhotoModalOpen(false);
            refetchSpaces();
          }}
          initialMode={photoModalMode}
          isModal={true}
        />
      )}

      <footer className="hidden sm:flex flex-shrink-0 bg-white border-t border-[#E5EBE7] px-5 py-2.5 items-center justify-end text-xs text-[#64746B]">
        <div className="flex items-center gap-2">
          <span className="text-base" aria-hidden>
            ⬡
          </span>
          <div>
            <p className="font-bold text-[#14231D] leading-tight">Hexagonal Grid</p>
            <p className="text-[11px] leading-tight">100m Turf.js short-diameter cell analysis</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
