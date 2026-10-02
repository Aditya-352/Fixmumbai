'use client';

/**
 * GreenExplorer — main orchestrator for the Green Density Explorer.
 *
 * Layout:
 *   [Header — unchanged]
 *   ┌──────────────────────────────────────────────────────┐
 *   │ Title bar (A)                                        │
 *   ├──────────┬───────────────────────────┬───────────────┤
 *   │ Sidebar  │ Map (centre)              │ Right panel   │
 *   │ (B)      │ (C) — Leaflet, ssr:false  │ (D)           │
 *   ├──────────┴───────────────────────────┴───────────────┤
 *   │ Footer strip (F)                                     │
 *   └──────────────────────────────────────────────────────┘
 */

import React, { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import { useGreenExplorer } from '@/hooks/useGreenExplorer';
import GreenSidebar from './GreenSidebar';
import GreenRightPanel from './GreenRightPanel';
import GreenLegend from './GreenLegend';
import SearchBox from './SearchBox';
import { ACTIVE_CITY } from '@/lib/green/config';

// ── GreenMap loaded client-only (fixes blank map from SSR Leaflet import) ───
const GreenMap = dynamic(() => import('./GreenMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-slate-500">
        <div className="w-8 h-8 rounded-full border-4 border-green-500 border-t-transparent animate-spin" />
        <span className="text-sm font-semibold">Loading map…</span>
      </div>
    </div>
  ),
});

// ── Drawer loaded lazily ─────────────────────────────────────────────────────
const GreenDetailDrawer = dynamic(() => import('./GreenDetailDrawer'), { ssr: false });

// ── Today's date (formatted, never hardcoded) ────────────────────────────────
const TODAY = new Date().toLocaleDateString('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default function GreenExplorer() {
  const {
    centre, setCentreFromGeo, setCentreFromSearch, geoError,
    filters, setRadiusM, setFilterType, toggleVerifiedOnly, toggleNdviLayer,
    spaces, spacesLoading, spacesError, spacesPartial, spacesWarnings, refetchSpaces,
    tiles, status,
    selectedSpace, detailLoading, openDetail, closeDetail,
    searchQuery, setSearchQuery, searchResults, searchLoading,
  } = useGreenExplorer();

  const [selectedSpaceId, setSelectedSpaceId] = useState<string | null>(null);

  const handleSpaceClick = useCallback((id: string) => {
    setSelectedSpaceId(id);
    openDetail(id);
  }, [openDetail]);

  const handleLocateMe = useCallback(() => {
    setCentreFromGeo();
  }, [setCentreFromGeo]);

  return (
    <div
      className="flex flex-col"
      style={{ height: 'calc(100vh - 64px)' }} // 64px = header h-16
    >
      {/* ── A. Title bar ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-slate-200 flex-shrink-0">
        <div>
          <h1 className="text-base font-black text-slate-900 leading-tight">
            🌿 Vegetation &amp; Green Spaces
            <span className="text-slate-400 font-normal text-sm ml-2">(Walkable + Accessible)</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Satellite-derived vegetation with OpenStreetMap accessibility evidence
          </p>
          {tiles?.observationStart && tiles?.observationEnd && (
            <p className="text-[10px] text-slate-400 mt-0.5">
              NDVI window: {tiles.observationStart} – {tiles.observationEnd}
              {tiles.isMonsoon && (
                <span className="ml-2 bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">
                  Monsoon composite
                </span>
              )}
            </p>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs font-bold text-slate-700 flex items-center gap-1 justify-end">
            <span aria-hidden>📍</span> {ACTIVE_CITY.name}, {ACTIVE_CITY.country}
          </p>
          <p className="text-xs text-slate-400 flex items-center gap-1 justify-end mt-0.5">
            <span aria-hidden>📅</span> {TODAY}
          </p>
        </div>
      </div>

      {/* ── Main body ────────────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* B. Left sidebar */}
        <GreenSidebar />

        {/* C. Map area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Floating search bar */}
          <div className="absolute top-3 left-3 z-[1000] w-72">
            <SearchBox
              query={searchQuery}
              onQueryChange={setSearchQuery}
              results={searchResults}
              loading={searchLoading}
              onSelect={setCentreFromSearch}
            />
          </div>

          {/* Leaflet map (ssr:false) */}
          <GreenMap
            centre={centre}
            spaces={spaces}
            filters={filters}
            tiles={tiles}
            onSpaceClick={handleSpaceClick}
            selectedSpaceId={selectedSpaceId}
            onLocateMe={handleLocateMe}
            geoError={geoError}
          />

          {/* Legend — bottom-right of map */}
          <GreenLegend />

          {/* Detail drawer — slides over right panel */}
          {(detailLoading || selectedSpace) && (
            <div className="absolute inset-y-0 right-0 w-[340px] z-30">
              <GreenDetailDrawer
                space={selectedSpace}
                loading={detailLoading}
                onClose={() => {
                  closeDetail();
                  setSelectedSpaceId(null);
                }}
                onDirections={
                  selectedSpace?.walkClass === 'WALKABLE_VERIFIED'
                    ? (id) => {
                        // Route drawn on map — wire up in Phase 5
                        console.info('[green] directions requested for', id);
                      }
                    : undefined
                }
              />
            </div>
          )}
        </div>

        {/* D. Right panel */}
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
        />
      </div>

      {/* F. Footer strip */}
      <footer className="flex-shrink-0 bg-slate-50 border-t border-slate-200 px-5 py-2.5 flex gap-8 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span aria-hidden className="text-base">🛰</span>
          <div>
            <p className="font-bold text-slate-700">Vegetation Data</p>
            <p>Sentinel-2 NDVI via Google Earth Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span aria-hidden className="text-base">🗺</span>
          <div>
            <p className="font-bold text-slate-700">Walkability &amp; Accessibility</p>
            <p>OpenStreetMap via Overpass (© contributors, ODbL)</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span aria-hidden className="text-base">🗄</span>
          <div>
            <p className="font-bold text-slate-700">Processing &amp; Storage</p>
            <p>PostgreSQL/PostGIS + existing map infrastructure</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
