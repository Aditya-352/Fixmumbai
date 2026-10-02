'use client';

import React from 'react';
import type {
  GreenSpaceSummary,
  TilesResponse,
  SearchCentre,
  ExplorerFilters,
  FilterType,
} from '@/lib/green/types';
import { RADIUS_OPTIONS_M, DENSITY_META } from '@/lib/green/config';
import GreenSpaceCard from './GreenSpaceCard';
import LayerToggles from './LayerToggles';

interface GreenRightPanelProps {
  centre: SearchCentre;
  spaces: GreenSpaceSummary[];
  spacesLoading: boolean;
  spacesError: string | null;
  spacesPartial: boolean;
  spacesWarnings: string[];
  onRetry: () => void;
  filters: ExplorerFilters;
  onRadiusChange: (r: number) => void;
  onFilterTypeChange: (t: FilterType) => void;
  onToggleVerifiedOnly: () => void;
  onToggleNdviLayer: (cls: 'HIGH' | 'MEDIUM' | 'LOW') => void;
  tiles: TilesResponse | null;
  selectedSpaceId?: string | null;
  onSpaceClick: (id: string) => void;
}

const FILTER_TABS: Array<{ key: FilterType; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'parks', label: 'Parks' },
  { key: 'walkable', label: 'Walkable' },
  { key: 'trails', label: 'Nature Trails' },
];

export default function GreenRightPanel({
  centre,
  spaces,
  spacesLoading,
  spacesError,
  spacesPartial,
  spacesWarnings,
  onRetry,
  filters,
  onRadiusChange,
  onFilterTypeChange,
  onToggleVerifiedOnly,
  onToggleNdviLayer,
  tiles,
  selectedSpaceId,
  onSpaceClick,
}: GreenRightPanelProps) {
  // Nearest walkable verified space
  const nearestVerified = spaces.find((s) => s.walkClass === 'WALKABLE_VERIFIED');
  const unverifiedCount = spaces.filter((s) => s.accessStatus === 'UNKNOWN').length;

  const radiusKm = (filters.radiusM / 1000).toFixed(0);

  return (
    <aside
      className="w-[340px] flex-shrink-0 bg-white border-l border-slate-200 flex flex-col overflow-hidden"
      aria-label="Green spaces panel"
    >
      <div className="flex-1 overflow-y-auto">
        {/* ── Vegetation Density Layers ── */}
        <section className="p-4 border-b border-slate-100">
          <h2 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span aria-hidden>🛰</span> Vegetation Density Layers
          </h2>
          <LayerToggles layers={filters.ndviLayers} onChange={onToggleNdviLayer} />

          {/* Monsoon warning */}
          {tiles?.isMonsoon && (
            <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700 font-medium">
              ⚠️ Monsoon-season composite — NDVI may be elevated or cloud-masked.
            </div>
          )}

          {/* NDVI observation window */}
          {tiles?.observationStart && tiles?.observationEnd && (
            <p className="mt-2 text-[10px] text-slate-400 leading-tight">
              NDVI window: {tiles.observationStart} – {tiles.observationEnd}
            </p>
          )}
        </section>

        {/* ── Filter by Type ── */}
        <section className="p-4 border-b border-slate-100">
          <h2 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">Filter by Type</h2>
          <div className="flex flex-wrap gap-1.5">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => onFilterTypeChange(tab.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  filters.type === tab.key
                    ? 'bg-green-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-pressed={filters.type === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Verified only toggle */}
          <label className="flex items-center gap-2 mt-2.5 cursor-pointer">
            <button
              role="switch"
              aria-checked={filters.verifiedOnly}
              onClick={onToggleVerifiedOnly}
              className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
                filters.verifiedOnly ? 'bg-green-600' : 'bg-slate-300'
              }`}
            >
              <span className={`inline-block h-3 w-3 transform rounded-full bg-white shadow transition-transform ${
                filters.verifiedOnly ? 'translate-x-4.5' : 'translate-x-0.5'
              }`} />
              <span className="sr-only">Show verified spaces only</span>
            </button>
            <span className="text-xs text-slate-600 font-medium">Verified walkable only</span>
          </label>
        </section>

        {/* ── Your Location / Search Centre ── */}
        <section className="p-4 border-b border-slate-100">
          <h2 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
            {centre.source === 'geolocation' ? 'Your Location' : 'Search Centre'}
          </h2>
          <div className="flex items-start gap-2 mb-2">
            <span className="text-slate-400 mt-0.5" aria-hidden>📍</span>
            <div>
              <p className="text-sm font-semibold text-slate-800">{centre.name}</p>
              <p className="text-xs font-mono text-slate-400">
                {centre.lat.toFixed(5)}, {centre.lon.toFixed(5)}
              </p>
              {centre.accuracyM && (
                <p className="text-[10px] text-slate-400 mt-0.5">
                  ±{Math.round(centre.accuracyM)} m accuracy
                </p>
              )}
            </div>
          </div>

          {/* Radius chips */}
          <div className="flex gap-1.5 flex-wrap" role="group" aria-label="Select search radius">
            {RADIUS_OPTIONS_M.map((r) => (
              <button
                key={r}
                onClick={() => onRadiusChange(r)}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  filters.radiusM === r
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-pressed={filters.radiusM === r}
                aria-label={`${r / 1000} km radius`}
              >
                {r / 1000} km
              </button>
            ))}
          </div>
        </section>

        {/* ── Nearest banner ── */}
        <section className="px-4 py-3 border-b border-slate-100">
          {nearestVerified ? (
            <div className="bg-green-50 border border-green-200 rounded-xl px-3 py-2.5 text-xs text-green-800">
              <span className="font-bold">Nearest verified walkable green space:</span>{' '}
              <button
                onClick={() => onSpaceClick(nearestVerified.id)}
                className="font-black underline hover:no-underline focus:outline-none focus:ring-1 focus:ring-green-600 rounded"
              >
                {nearestVerified.name || 'Unnamed'}
              </button>
              {' · '}{(nearestVerified.distanceM / 1000).toFixed(2)} km straight-line
              {nearestVerified.walkMinutes !== null && ` · ~${nearestVerified.walkMinutes} min walk`}
              {' · '}{nearestVerified.centroid.lat.toFixed(5)}, {nearestVerified.centroid.lon.toFixed(5)}
            </div>
          ) : !spacesLoading ? (
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-600">
              No verified walkable green space within {radiusKm} km.{' '}
              {unverifiedCount > 0 && (
                <span>{unverifiedCount} green space{unverifiedCount !== 1 ? 's' : ''} found with access not verified.</span>
              )}
            </div>
          ) : null}
        </section>

        {/* ── Recommended Green Spaces ── */}
        <section className="p-4">
          <h2 className="text-sm font-black text-slate-800 mb-1">
            Recommended Green Spaces
          </h2>
          <p className="text-[11px] text-slate-500 mb-3 leading-tight">
            {spacesLoading ? 'Loading…' : (
              <>
                {spaces.length} green space{spaces.length !== 1 ? 's' : ''} within {radiusKm} km of{' '}
                <span className="font-semibold">{centre.name}</span>{' '}
                ({centre.lat.toFixed(5)}, {centre.lon.toFixed(5)})
              </>
            )}
          </p>

          {/* Partial data chip */}
          {spacesPartial && (
            <div className="mb-3 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 text-xs text-amber-700 font-medium">
              ⚠️ Partial data —{' '}
              {spacesWarnings.length > 0 ? spacesWarnings.join('; ') : 'some sources unavailable.'}
            </div>
          )}

          {/* Error state */}
          {spacesError && !spacesLoading && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center space-y-2 mb-3">
              <p className="text-xs font-bold text-red-700">{spacesError}</p>
              <button
                onClick={onRetry}
                className="text-xs font-bold text-red-600 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              >
                Retry ↻
              </button>
            </div>
          )}

          {/* Loading skeletons */}
          {spacesLoading && (
            <div className="space-y-3 animate-pulse">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-xl border border-slate-200 overflow-hidden">
                  <div className="h-28 bg-slate-100" />
                  <div className="p-3 space-y-2">
                    <div className="h-3 bg-slate-100 rounded w-2/3" />
                    <div className="h-2 bg-slate-100 rounded w-1/2" />
                    <div className="h-2 bg-slate-100 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Space cards */}
          {!spacesLoading && !spacesError && (
            <div className="space-y-3">
              {spaces.length === 0 ? (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center text-sm text-slate-500">
                  No green spaces found within {radiusKm} km of this location.
                  <br />
                  <span className="text-xs text-slate-400">Try a larger radius or different location.</span>
                </div>
              ) : (
                spaces.map((space) => (
                  <GreenSpaceCard
                    key={space.id}
                    space={space}
                    onClick={onSpaceClick}
                    isSelected={space.id === selectedSpaceId}
                  />
                ))
              )}
            </div>
          )}
        </section>

        {/* ── Nature-Based Prescription banner ── */}
        <section className="mx-4 mb-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3 items-start">
            <span className="text-2xl flex-shrink-0" aria-hidden>🌱</span>
            <div>
              <p className="text-xs font-black text-green-800">Nature-Based Prescription</p>
              <p className="text-xs text-green-700 mt-0.5 leading-relaxed">
                Spending time in green spaces may support well-being. Not medical advice.
              </p>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}
