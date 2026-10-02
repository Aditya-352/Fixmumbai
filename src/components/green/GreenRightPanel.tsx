'use client';

import React from 'react';
import type {
  GreenSpaceSummary,
  TilesResponse,
  SearchCentre,
  ExplorerFilters,
  FilterType,
} from '@/lib/green/types';
import { RADIUS_OPTIONS_M } from '@/lib/green/config';
import GreenSpaceCard from './GreenSpaceCard';
import LayerToggles from './LayerToggles';
import { Compass, RefreshCw, AlertCircle } from 'lucide-react';

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
  // Nearest walkable verified space directly from the EXACT same spaces list
  const nearestVerified = spaces.find(
    (s) => s.walkClass === 'WALKABLE_VERIFIED' || s.accessStatus === 'PUBLIC_TAGGED'
  );

  const isNdviProcessed = Boolean(
    tiles?.observationStart && tiles?.observationEnd && tiles.layers.length > 0
  );

  const radiusKm = (filters.radiusM / 1000).toFixed(0);

  return (
    <aside
      className="w-[330px] flex-shrink-0 bg-white border-l border-slate-200 flex flex-col h-full overflow-hidden"
      aria-label="Green spaces panel"
    >
      <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
        {/* ── Vegetation Density Layers ── */}
        <section className="p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <span aria-hidden>🛰</span> Vegetation Density Layers
            </h2>
            {!isNdviProcessed && (
              <span className="text-[9.5px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                Pending GEE
              </span>
            )}
          </div>

          <LayerToggles
            layers={filters.ndviLayers}
            onChange={onToggleNdviLayer}
            disabled={!isNdviProcessed}
            disabledTooltip="NDVI satellite composite pending GEE processing"
          />

          {/* Honest NDVI status */}
          <div className="pt-1">
            {isNdviProcessed ? (
              <p className="text-[10px] text-slate-500">
                NDVI window: {tiles?.observationStart} – {tiles?.observationEnd}
                {tiles?.isMonsoon && (
                  <span className="ml-1.5 bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-bold">
                    Monsoon
                  </span>
                )}
              </p>
            ) : (
              <p className="text-[10px] text-slate-400 italic">
                NDVI layer: not yet processed
              </p>
            )}
          </div>
        </section>

        {/* ── Filter by Type ── */}
        <section className="p-3.5 space-y-2.5">
          <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">
            Filter by Type
          </h2>
          <div className="flex flex-wrap gap-1">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => onFilterTypeChange(tab.key)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  filters.type === tab.key
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                aria-pressed={filters.type === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Verified only toggle */}
          <label className="flex items-center gap-2 pt-1 cursor-pointer">
            <button
              role="switch"
              aria-checked={filters.verifiedOnly}
              onClick={onToggleVerifiedOnly}
              className={`relative inline-flex h-4 w-7.5 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                filters.verifiedOnly ? 'bg-emerald-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white shadow transition-transform ${
                  filters.verifiedOnly ? 'translate-x-3.5' : 'translate-x-0.5'
                }`}
              />
              <span className="sr-only">Show verified spaces only</span>
            </button>
            <span className="text-xs text-slate-700 font-medium select-none">
              Verified walkable only
            </span>
          </label>
        </section>

        {/* ── Search Centre & Radius ── */}
        <section className="p-3.5 space-y-2.5">
          <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">
            {centre.source === 'geolocation' ? 'Your Location' : 'Search Centre'}
          </h2>
          <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <span className="text-red-500 text-sm mt-0.5" aria-hidden>📍</span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-black text-slate-900 truncate">{centre.name}</p>
              <p className="text-[11px] font-mono text-slate-500">
                {centre.lat.toFixed(5)}, {centre.lon.toFixed(5)}
              </p>
              {centre.accuracyM && (
                <p className="text-[10px] text-blue-600 font-medium mt-0.5">
                  Accuracy: ±{Math.round(centre.accuracyM)} m
                </p>
              )}
            </div>
          </div>

          {/* Radius chips */}
          <div className="flex items-center gap-1.5 pt-0.5">
            {RADIUS_OPTIONS_M.map((r) => (
              <button
                key={r}
                onClick={() => onRadiusChange(r)}
                className={`flex-1 py-1 rounded-lg text-xs font-bold transition text-center focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  filters.radiusM === r
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {r >= 1000 ? `${r / 1000} km` : `${r} m`}
              </button>
            ))}
          </div>
        </section>

        {/* ── Nearest Verified Walkable Banner (Guaranteed consistency with list) ── */}
        {nearestVerified && (
          <section className="p-3.5">
            <div
              onClick={() => onSpaceClick(nearestVerified.id)}
              className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 cursor-pointer hover:border-emerald-300 hover:shadow-sm transition group"
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                  🌿 Nearest Walkable Green Space
                </span>
                <span className="text-emerald-700 text-xs font-bold">
                  {(nearestVerified.distanceM / 1000).toFixed(2)} km
                </span>
              </div>
              <p className="text-xs font-black text-emerald-950 group-hover:text-emerald-700 transition line-clamp-1">
                {nearestVerified.name}
              </p>
              <p className="text-[10.5px] text-emerald-800 mt-0.5">
                ~{nearestVerified.walkMinutes ?? Math.round(nearestVerified.distanceM / 80)} min walk ·{' '}
                <span className="font-mono text-[10px]">
                  {nearestVerified.centroid.lat.toFixed(5)}, {nearestVerified.centroid.lon.toFixed(5)}
                </span>
              </p>
            </div>
          </section>
        )}

        {/* ── Recommended Green Spaces Header ── */}
        <section className="p-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">
              Recommended Green Spaces
            </h2>
            <span className="text-[11px] font-bold text-slate-500">
              {spaces.length} found
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            {spaces.length} {spaces.length === 1 ? 'green space' : 'green spaces'} within {radiusKm} km of{' '}
            <span className="font-bold text-slate-700">{centre.name}</span>
          </p>

          {/* Partial data or warnings */}
          {spacesPartial && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-800 flex items-start gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>Some green space details could not be loaded from OSM.</span>
            </div>
          )}

          {/* Error state */}
          {spacesError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 space-y-2">
              <p className="font-semibold">{spacesError}</p>
              <button
                onClick={onRetry}
                className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:underline"
              >
                <RefreshCw className="w-3 h-3" /> Retry query
              </button>
            </div>
          )}

          {/* Loading state */}
          {spacesLoading && (
            <div className="space-y-2 py-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="animate-pulse bg-slate-100 rounded-2xl h-20 w-full border border-slate-200"
                />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!spacesLoading && !spacesError && spaces.length === 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-2">
              <Compass className="w-6 h-6 text-slate-400 mx-auto" />
              <p className="text-xs font-bold text-slate-700">No green spaces in this radius</p>
              <p className="text-[11px] text-slate-500">
                Try increasing the search radius to 5 km or 10 km.
              </p>
            </div>
          )}

          {/* Cards List */}
          {!spacesLoading && (
            <div className="space-y-2 pt-1">
              {spaces.map((space) => (
                <GreenSpaceCard
                  key={space.id}
                  space={space}
                  onClick={onSpaceClick}
                  isSelected={space.id === selectedSpaceId}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </aside>
  );
}
