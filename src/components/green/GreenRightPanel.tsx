'use client';

/**
 * GreenRightPanel — GIS & Environmental Intelligence Panel.
 *
 * Tabbed navigation:
 * 1. 🌿 SPACES: Nearby green spaces, OSM walkability, category filters, radius chips.
 * 2. 📊 METRICS: HUGSI-inspired urban green metrics (18.3% green cover, 20,634/km², Gini 0.62 distribution).
 * 3. 🌱 NURSERIES: All 27 BMC Wardwise Nurseries from the handbook, searchable & filterable by ward.
 * 4. ⬡ HEXAGON: 100m Hex Cell Intelligence Inspector (NDVI mean, min/max, % coverage, area m²).
 */

import React, { useState } from 'react';
import type {
  GreenSpaceSummary,
  TilesResponse,
  SearchCentre,
  ExplorerFilters,
  FilterType,
  RightPanelTab,
} from '@/lib/green/types';
import { RADIUS_OPTIONS_M } from '@/lib/green/config';
import { BMC_NURSERIES, getBmcNurseryWards, type BmcNurseryRecord } from '@/lib/green/nurseries-service';
import {
  MUMBAI_HUGSI_METRICS,
  calculateComprehensiveHugsiMetrics,
  BMC_WARD_DATA,
  type MumbaiGreenMetricsSummary,
  type HexInterpretation,
  type MetricDefinition,
} from '@/lib/green/hugsi-metrics';
import type { HexCellMetric } from '@/lib/green/hex-grid-service';
import GreenSpaceCard from './GreenSpaceCard';
import {
  Compass,
  RefreshCw,
  AlertCircle,
  BarChart3,
  Trees,
  Sprout,
  Home,
  Hexagon,
  Search,
  ExternalLink,
  Info,
  CheckCircle2,
  MapPin,
  X,
  Sliders,
  Shield,
  Layers,
  Calendar,
  ArrowUpDown,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

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
  onZoomTo5km?: () => void;
  compositeType?: 'dry_season' | 'latest_90d';
  onCompositeTypeChange?: (c: 'dry_season' | 'latest_90d') => void;

  // New tabbed navigation & feature props
  activeTab?: RightPanelTab;
  onTabChange?: (tab: RightPanelTab) => void;
  selectedHex?: HexCellMetric | null;
  onCloseHex?: () => void;
  selectedNursery?: BmcNurseryRecord | null;
  onSelectNursery?: (nursery: BmcNurseryRecord | null) => void;
  onCloseNursery?: () => void;
  categoryFilter?: string;
  onCategoryFilterChange?: (cat: string) => void;
  nurseryWard?: string;
  onNurseryWardChange?: (w: string) => void;
}

const TABS: Array<{ id: RightPanelTab; label: string; icon: any }> = [
  { id: 'SPACES', label: 'Spaces', icon: Trees },
  { id: 'METRICS', label: 'HUGSI Metrics', icon: BarChart3 },
  { id: 'NURSERIES', label: 'Nurseries (27)', icon: Sprout },
  { id: 'HEXAGON', label: 'Hex 100m', icon: Hexagon },
];

const CATEGORIES = [
  'ALL',
  'Park',
  'Nature Reserve',
  'Mangrove & Wetland',
  'Community Garden',
  'Botanical Garden',
  'Forest',
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
  onZoomTo5km,
  compositeType = 'dry_season',
  onCompositeTypeChange,

  activeTab = 'SPACES',
  onTabChange,
  selectedHex,
  onCloseHex,
  selectedNursery,
  onSelectNursery,
  onCloseNursery,
  categoryFilter = 'ALL',
  onCategoryFilterChange,
  nurseryWard = 'ALL',
  onNurseryWardChange,
}: GreenRightPanelProps) {
  const [localTab, setLocalTab] = useState<RightPanelTab>(activeTab);
  const currentTab = onTabChange ? activeTab : localTab;
  const setTab = onTabChange || setLocalTab;

  const [nurserySearch, setNurserySearch] = useState('');
  const [showNdviProvenance, setShowNdviProvenance] = useState(false);
  const [showHandbookModal, setShowHandbookModal] = useState(false);

  // HUGSI Metrics Interactive State
  const [metricsBoundary, setMetricsBoundary] = useState<string>('ALL');
  const [metricsYear, setMetricsYear] = useState<'2011' | '2021' | '2024'>('2024');
  const [metricsDimension, setMetricsDimension] = useState<HexInterpretation>('PARALLEL_SIDES_100M');
  const [metricsData, setMetricsData] = useState<MumbaiGreenMetricsSummary>(() =>
    calculateComprehensiveHugsiMetrics({
      boundaryCode: 'ALL',
      year: '2024',
      hexInterpretation: 'PARALLEL_SIDES_100M',
      spaces,
    })
  );
  const [metricsLoading, setMetricsLoading] = useState<boolean>(false);
  const [activeTooltipMetric, setActiveTooltipMetric] = useState<MetricDefinition | null>(null);
  const [wardTableSearch, setWardTableSearch] = useState<string>('');
  const [wardSortKey, setWardSortKey] = useState<
    'wardCode' | 'greenCoverPercent' | 'populationDensityKm2' | 'greenPerCapitaM2'
  >('greenCoverPercent');
  const [wardSortAsc, setWardSortAsc] = useState<boolean>(false);

  const recalculateMetrics = React.useCallback(
    async (boundary: string, year: '2011' | '2021' | '2024', dim: HexInterpretation) => {
      setMetricsLoading(true);
      try {
        const res = await fetch(
          `/civic/api/vegetation/metrics?ward=${encodeURIComponent(boundary)}&year=${year}&dimension=${dim}`
        );
        const json = await res.json();
        if (json.ok && json.data) {
          setMetricsData(json.data);
        } else {
          const calc = calculateComprehensiveHugsiMetrics({
            boundaryCode: boundary,
            year,
            hexInterpretation: dim,
            spaces,
          });
          setMetricsData(calc);
        }
      } catch (_) {
        const calc = calculateComprehensiveHugsiMetrics({
          boundaryCode: boundary,
          year,
          hexInterpretation: dim,
          spaces,
        });
        setMetricsData(calc);
      } finally {
        setMetricsLoading(false);
      }
    },
    [spaces]
  );

  const nearestVerified = spaces.find(
    (s) => s.walkClass === 'WALKABLE_VERIFIED' || s.accessStatus === 'PUBLIC_TAGGED'
  );

  // Filtered categories
  const filteredSpaces = spaces.filter((s) => {
    if (categoryFilter && categoryFilter !== 'ALL') {
      if (categoryFilter === 'Mangrove & Wetland') {
        return s.category.toLowerCase().includes('mangrove') || s.category.toLowerCase().includes('wetland');
      }
      return s.category.toLowerCase().includes(categoryFilter.toLowerCase());
    }
    return true;
  });

  // Filtered nurseries
  const nurseryWardsList = getBmcNurseryWards();
  const filteredNurseries = BMC_NURSERIES.filter((n) => {
    const matchesWard = nurseryWard === 'ALL' || n.ward.toUpperCase() === nurseryWard.toUpperCase();
    const query = nurserySearch.trim().toLowerCase();
    const matchesSearch =
      !query ||
      n.name.toLowerCase().includes(query) ||
      n.ward.toLowerCase().includes(query) ||
      n.sourceAddress.toLowerCase().includes(query) ||
      n.speciesAvailable.some((sp) => sp.toLowerCase().includes(query));
    return matchesWard && matchesSearch;
  });

  const radiusKm = (filters.radiusM / 1000).toFixed(0);

  return (
    <aside className="w-full flex flex-col h-full overflow-hidden bg-white text-slate-900 border-l border-slate-200">
      {/* ── Top Navigation Tabs ────────────────────────────────────────────── */}
      <div className="flex-shrink-0 flex items-center bg-slate-900 text-white p-1 border-b border-slate-800 overflow-x-auto no-scrollbar">
        {TABS.map((t) => {
          const Icon = t.icon;
          const isActive = currentTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition flex-shrink-0 ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
              {t.id === 'HEXAGON' && selectedHex && (
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── TAB 1: GREEN SPACES ────────────────────────────────────────────── */}
      {currentTab === 'SPACES' && (
        /* min-h-0 lets the flex child actually shrink below its content size;
           without it the scroll container collapses and overflow-hidden clips the
           list, leaving no scrollbar. */
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">

          {/* ── Satellite observation provenance ───────────────────────────
              Only the COMPACT summary row is fixed. The expanded detail is
              rendered inside the scroll container below, so expanding can never
              crush the list back to zero height (the original bug). */}
          <div className="flex-shrink-0 px-3.5 pt-2.5 pb-2 border-b border-slate-100 bg-slate-50">
            <div className="rounded-xl border border-slate-200 bg-white">
              <button
                type="button"
                onClick={() => setShowNdviProvenance((v) => !v)}
                aria-expanded={showNdviProvenance}
                className="w-full flex items-center gap-2 px-2.5 py-2 text-left"
              >
                {showNdviProvenance ? (
                  <ChevronUp className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                )}
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex-shrink-0">
                  Satellite NDVI
                </span>
                <span className="text-[10px] font-mono text-slate-500 truncate flex-1">
                  {tiles?.provenance
                    ? `${tiles.provenance.acquisitionDateUtc?.slice(0, 10) ?? 'no date'} · ${
                        tiles.provenance.satelliteType ?? 'unknown'
                      }${
                        typeof tiles.provenance.sceneCloudCoveragePct === 'number'
                          ? ` · ${tiles.provenance.sceneCloudCoveragePct.toFixed(1)}% cloud`
                          : ''
                      }${tiles.numerical ? ` · mean ${tiles.numerical.mean.toFixed(3)}` : ' · n/a'}`
                    : 'no observation metadata'}
                </span>
                {(() => {
                  const st = tiles?.provenance?.providerStatus;
                  const ok = st === 'IMAGERY_AVAILABLE' || st === 'PARTIAL_COVERAGE';
                  const label =
                    st === 'PARTIAL_COVERAGE' ? 'Partial AOI'
                    : st === 'IMAGERY_AVAILABLE' ? 'Available'
                    : st === 'IMAGERY_UNAVAILABLE' ? 'No imagery'
                    : st === 'AUTHENTICATION_FAILED' ? 'Auth failed'
                    : st === 'AUTHENTICATED' ? 'No AOI'
                    : st === 'NOT_CONFIGURED' ? 'Not configured'
                    : 'Unavailable';
                  return (
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border flex-shrink-0 ${
                      ok
                        ? st === 'PARTIAL_COVERAGE'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {label}
                    </span>
                  );
                })()}
              </button>
            </div>
          </div>

          {/* Nearest Walkable Chip */}
          {nearestVerified && (
            <div className="flex-shrink-0 px-3.5 pt-3 pb-2 border-b border-slate-100 bg-white">
              <div
                onClick={() => onSpaceClick(nearestVerified.id)}
                role="button"
                tabIndex={0}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 cursor-pointer hover:border-emerald-400 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                    🌿 Nearest Walkable
                  </span>
                  <div className="flex items-center gap-1.5">
                    {onZoomTo5km && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onZoomTo5km();
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-[10px] font-bold shadow-xs transition"
                      >
                        Zoom 5 km
                      </button>
                    )}
                    <span className="text-emerald-700 text-xs font-bold flex-shrink-0">
                      {(nearestVerified.distanceM / 1000).toFixed(2)} km
                    </span>
                  </div>
                </div>
                <p className="text-xs font-black text-emerald-950 group-hover:text-emerald-700 transition leading-snug line-clamp-2">
                  {nearestVerified.name}
                </p>
              </div>
            </div>
          )}

          {/* Filter Toolbar */}
          <div className="flex-shrink-0 px-3.5 py-2.5 border-b border-slate-100 bg-slate-50/60 space-y-2">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryFilterChange && onCategoryFilterChange(cat)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition flex-shrink-0 ${
                    categoryFilter === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Radius Selector */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                Radius: {radiusKm} km
              </span>
              <div className="flex gap-1">
                {RADIUS_OPTIONS_M.map((r) => (
                  <button
                    key={r}
                    onClick={() => onRadiusChange(r)}
                    className={`px-2 py-0.5 rounded-lg text-[10.5px] font-bold transition ${
                      filters.radiusM === r
                        ? 'bg-emerald-700 text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {r / 1000}k
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Spaces Card List — expanded provenance scrolls with this list */}
          <div className="flex-1 min-h-0 overflow-y-auto px-3.5 py-2 space-y-2">
            {showNdviProvenance && (
              <div className="rounded-xl border border-slate-200 bg-white p-3 space-y-2">
                <div className="px-2.5 pb-2.5 pt-1 border-t border-slate-100 space-y-2">
                  {tiles?.provenance ? (
                    <>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10.5px] text-slate-600">
                        <span>Acquired (UTC)</span>
                        <span className="font-mono text-slate-900 text-right">
                          {tiles.provenance.acquisitionDateUtc?.slice(0, 10) ?? 'unknown'}
                        </span>
                        <span>Satellite</span>
                        <span className="font-mono text-slate-900 text-right">
                          {tiles.provenance.satelliteType ?? 'unknown'}
                        </span>
                        <span>Scene cloud cover</span>
                        <span className="font-mono text-slate-900 text-right">
                          {typeof tiles.provenance.sceneCloudCoveragePct === 'number'
                            ? `${tiles.provenance.sceneCloudCoveragePct.toFixed(2)}%`
                            : 'unknown'}
                        </span>
                        <span>Resolution</span>
                        <span className="font-mono text-slate-900 text-right">
                          {tiles.provenance.spatialResolutionM
                            ? `${tiles.provenance.spatialResolutionM} m`
                            : 'unverified'}
                        </span>
                      </div>

                      {tiles.numerical ? (
                        <div className="pt-2 border-t border-slate-100">
                          <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1">
                            Measured NDVI (AOI statistics)
                          </p>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10.5px] text-slate-600">
                            <span>Mean</span>
                            <span className="font-mono font-bold text-slate-900 text-right">{tiles.numerical.mean.toFixed(3)}</span>
                            <span>Median</span>
                            <span className="font-mono font-bold text-slate-900 text-right">{tiles.numerical.median.toFixed(3)}</span>
                            <span>Range</span>
                            <span className="font-mono text-slate-900 text-right">
                              {tiles.numerical.min.toFixed(2)} – {tiles.numerical.max.toFixed(2)}
                            </span>
                            <span>Valid pixels</span>
                            <span className="font-mono text-slate-900 text-right">
                              {tiles.numerical.validPixelCount.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <p className="text-[10px] text-slate-500 pt-2 border-t border-slate-100">
                          Numerical NDVI unavailable from the provider for this observation. The
                          displayed vegetation is a colour-rendered tile, not a measurement.
                        </p>
                      )}

                      <p className="text-[9.5px] text-slate-400 leading-snug pt-1.5 border-t border-slate-100">
                        {tiles.provenance.selectionReason}
                      </p>

                      {tiles.provenance.coverageIsPartial && (
                        <p className="text-[9.5px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5 leading-snug">
                          Coverage is limited to{' '}
                          {tiles.provenance.aoi.map((a) => a.name).join(', ')} and does not span the
                          full Mumbai study area. Areas outside are shown without vegetation data, not
                          as zero vegetation.
                        </p>
                      )}

                      <p className="text-[9px] text-slate-400 leading-snug">
                        NDVI is a spectral vegetation-response index from Sentinel-2 surface
                        reflectance, not a measurement of tree count, canopy cover or biodiversity.
                        Mapped green-space coverage shown below is a separate, independent metric.
                      </p>
                    </>
                  ) : (
                    <p className="text-[10.5px] text-slate-500">No observation metadata.</p>
                  )}
                </div>
              </div>
            )}
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 px-1">
              <span>MAPPED GREEN AREAS</span>
              <span>{filteredSpaces.length} locations</span>
            </div>

            {spacesLoading ? (
              <div className="py-12 flex flex-col items-center justify-center gap-3 text-slate-400">
                <div className="w-7 h-7 rounded-full border-3 border-emerald-500 border-t-transparent animate-spin" />
                <span className="text-xs font-semibold">Loading Mumbai green spaces…</span>
              </div>
            ) : filteredSpaces.length === 0 ? (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center text-xs text-slate-500">
                No green spaces match current category or radius.
              </div>
            ) : (
              filteredSpaces.map((space) => (
                <GreenSpaceCard
                  key={space.id}
                  space={space}
                  onClick={onSpaceClick}
                  isSelected={space.id === selectedSpaceId}
                />
              ))
            )}
          </div>
        </div>
      )}

      {/* ── TAB 2: HUGSI-INSPIRED METRICS ──────────────────────────────────── */}
      {currentTab === 'METRICS' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Header Banner */}
          <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white p-4 rounded-2xl border border-emerald-800/80 shadow-md">
            {/* Header eyebrow: label + badge. flex-wrap lets the badge drop to its
                own line on very narrow panels instead of both items wrapping into
                an uneven two-line block; whitespace-nowrap keeps whichever row we
                are on visually flat. */}
            <div className="flex items-center justify-between gap-x-1.5 gap-y-1.5 mb-1.5">
              <div className="flex items-center gap-1 text-emerald-400 text-[11px] font-black uppercase tracking-normal whitespace-nowrap">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Geospatial Engine
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-900/80 text-emerald-200 border border-emerald-700/60 whitespace-nowrap">
                Civic Open Methodology
              </span>
            </div>
            <h2 className="text-base font-black text-white leading-tight">
              HUGSI-Inspired Urban Green Metrics
            </h2>
            <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
              Calculated on actual mapped green polygons clipped to BMC study boundaries,
              Census 2011 population figures, and a 100m hexagonal spatial grid.
            </p>
            {/* items-start (not center) so the shield aligns with the FIRST line of the
                sentence rather than floating against the middle of a 2-line block. */}
            <div className="mt-2.5 pt-2.5 border-t border-emerald-900/60 flex items-start gap-1.5 text-[10px] leading-relaxed text-emerald-300/80">
              <Shield className="w-3 h-3 mt-[1px] text-emerald-400 flex-shrink-0" />
              <span>Independent Mumbai civic methodology; not an official HUGSI certification.</span>
            </div>
          </div>

          {/* Interactive Calculation Controls */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-800">
                <Sliders className="w-3.5 h-3.5 text-emerald-600" />
                <span>Calculation Boundary &amp; Baseline</span>
              </div>
              <button
                onClick={() => recalculateMetrics(metricsBoundary, metricsYear, metricsDimension)}
                disabled={metricsLoading}
                className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-100 hover:bg-emerald-200/80 px-2.5 py-1 rounded-xl transition disabled:opacity-50"
                title="Recalculate metrics for selected boundary"
              >
                <RefreshCw className={`w-3 h-3 ${metricsLoading ? 'animate-spin' : ''}`} />
                {metricsLoading ? 'Calculating…' : 'Recalculate'}
              </button>
            </div>

            <div className="space-y-2">
              {/* Study Boundary Selector */}
              <div>
                <label className="text-[10.5px] font-bold text-slate-600 mb-0.5 block">
                  Study Boundary Extent:
                </label>
                <select
                  value={metricsBoundary}
                  onChange={(e) => {
                    const b = e.target.value;
                    setMetricsBoundary(b);
                    recalculateMetrics(b, metricsYear, metricsDimension);
                  }}
                  className="w-full bg-white border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-600"
                >
                  <option value="ALL">Greater Mumbai (All 24 BMC Wards — 603.4 km²)</option>
                  <optgroup label="Island City Wards">
                    <option value="A">Ward A (Colaba, Fort, Churchgate — 12.5 km²)</option>
                    <option value="B">Ward B (Dongri, Sandhurst Road — 2.47 km²)</option>
                    <option value="C">Ward C (Marine Lines, Kalbadevi — 1.78 km²)</option>
                    <option value="D">Ward D (Malabar Hill, Grant Road — 8.03 km²)</option>
                    <option value="E">Ward E (Byculla, Mazgaon — 7.4 km²)</option>
                    <option value="F/S">Ward F South (Parel, Sewri — 14.0 km²)</option>
                    <option value="G/S">Ward G South (Worli, Prabhadevi — 10.0 km²)</option>
                    <option value="F/N">Ward F North (Matunga, Wadala — 13.98 km²)</option>
                    <option value="G/N">Ward G North (Dadar, Mahim, Dharavi — 9.07 km²)</option>
                  </optgroup>
                  <optgroup label="Western Suburbs Wards">
                    <option value="H/W">Ward H West (Bandra West, Khar — 11.55 km²)</option>
                    <option value="H/E">Ward H East (Bandra East, Kalina — 13.53 km²)</option>
                    <option value="K/W">Ward K West (Andheri West, Versova — 23.4 km²)</option>
                    <option value="K/E">Ward K East (Andheri East, Marol — 24.78 km²)</option>
                    <option value="P/S">Ward P South (Goregaon, Aarey — 24.44 km²)</option>
                    <option value="P/N">Ward P North (Malad, Marve, Aksa — 46.5 km²)</option>
                    <option value="R/S">Ward R South (Kandivali — 17.78 km²)</option>
                    <option value="R/C">Ward R Central (Borivali, SGNP Main — 34.37 km²)</option>
                    <option value="R/N">Ward R North (Dahisar — 18.0 km²)</option>
                  </optgroup>
                  <optgroup label="Eastern Suburbs Wards">
                    <option value="M/W">Ward M West (Chembur — 19.5 km²)</option>
                    <option value="M/E">Ward M East (Govandi, Mankhurd — 32.5 km²)</option>
                    <option value="L">Ward L (Kurla, Sakinaka — 15.88 km²)</option>
                    <option value="N">Ward N (Ghatkopar — 25.96 km²)</option>
                    <option value="S">Ward S (Bhandup, Powai, SGNP Buffer — 64.0 km²)</option>
                    <option value="T">Ward T (Mulund, Yogi Hills — 45.42 km²)</option>
                  </optgroup>
                </select>
              </div>

              {/* Year & Hex Dimension Selectors */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-600 mb-0.5 block">
                    Reference Year:
                  </label>
                  <select
                    value={metricsYear}
                    onChange={(e) => {
                      const y = e.target.value as '2011' | '2021' | '2024';
                      setMetricsYear(y);
                      recalculateMetrics(metricsBoundary, y, metricsDimension);
                    }}
                    className="w-full bg-white border border-slate-300 rounded-xl px-2 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="2024">2024 (Current Est.)</option>
                    <option value="2021">2021 (BMC DP-2034)</option>
                    <option value="2011">2011 (Census Baseline)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-600 mb-0.5 block">
                    Hexagon Dimension:
                  </label>
                  <select
                    value={metricsDimension}
                    onChange={(e) => {
                      const d = e.target.value as HexInterpretation;
                      setMetricsDimension(d);
                      recalculateMetrics(metricsBoundary, metricsYear, d);
                    }}
                    className="w-full bg-white border border-slate-300 rounded-xl px-2 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="PARALLEL_SIDES_100M">100m Flat-to-Flat (8,660 m²)</option>
                    <option value="OPPOSITE_VERTICES_100M">100m Vertex-to-Vertex (6,495 m²)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200">
              <span>Boundary: <strong>{metricsData.boundaryName}</strong></span>
              <span>Obs Date: <strong>{metricsData.hexStats.observationDate}</strong></span>
            </div>
          </div>

          {/* Metric 1: Percentage of Urban Green Space Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2.5 relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Metric 1
                </span>
                <h3 className="text-xs font-extrabold text-slate-800 mt-1">
                  Percentage of Urban Green Space
                </h3>
              </div>
              <button
                onClick={() => setActiveTooltipMetric(metricsData.metrics[0])}
                className="text-slate-400 hover:text-emerald-700 p-1 rounded-lg hover:bg-slate-200 transition"
                title="View formula & methodology tooltip"
              >
                <Info className="w-4 h-4 text-emerald-700" />
              </button>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-emerald-700">
                {metricsData.urbanGreenPercentage}%
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                of study area land
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, metricsData.urbanGreenPercentage)}%` }}
              />
            </div>

            {/* Area Stats Grid */}
            <div className="grid grid-cols-2 gap-2 text-[10.5px] bg-white p-2.5 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-500 block">Mapped Green Area:</span>
                <strong className="text-slate-800">
                  {metricsData.mappedGreenAreaHa.toLocaleString('en-IN')} ha ({metricsData.mappedGreenAreaKm2} km²)
                </strong>
              </div>
              <div>
                <span className="text-slate-500 block">Total Study Boundary:</span>
                <strong className="text-slate-800">
                  {metricsData.cityTotalAreaKm2} km²
                </strong>
              </div>
            </div>

            {/* Spatial Distinction Callout */}
            <div className="p-2 bg-emerald-50/70 border border-emerald-200/80 rounded-xl text-[10px] text-emerald-950 space-y-1">
              <div className="flex items-center gap-1 font-bold text-emerald-900">
                <Layers className="w-3 h-3 text-emerald-700" />
                <span>Mapped Polygons vs Satellite Raster:</span>
              </div>
              <p className="text-slate-600 leading-snug">
                • <strong>Mapped Features:</strong> OpenStreetMap verified parks, mangroves &amp; BMC garden inventory clipped with spatial union (no double-counting).
              </p>
              <p className="text-slate-600 leading-snug">
                • <strong>Satellite Live NDVI:</strong> Live Sentinel-2 photosynthetic canopy reflectance (distinguished from legal boundaries).
              </p>
            </div>
          </div>

          {/* Metric 2: Urban Population Density Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2.5 relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full">
                  Metric 2
                </span>
                <h3 className="text-xs font-extrabold text-slate-800 mt-1">
                  Urban Population Density
                </h3>
              </div>
              <button
                onClick={() => setActiveTooltipMetric(metricsData.metrics[1])}
                className="text-slate-400 hover:text-blue-700 p-1 rounded-lg hover:bg-slate-200 transition"
                title="View formula & methodology tooltip"
              >
                <Info className="w-4 h-4 text-blue-700" />
              </button>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-blue-700">
                {metricsData.populationDensityKm2.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                people / km²
              </span>
            </div>

            {/* Population Stats Grid */}
            <div className="grid grid-cols-2 gap-2 text-[10.5px] bg-white p-2.5 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-500 block">Resident Population:</span>
                <strong className="text-slate-800">
                  {metricsData.population.toLocaleString('en-IN')} persons
                </strong>
              </div>
              <div>
                <span className="text-slate-500 block">Land Area:</span>
                <strong className="text-slate-800">
                  {metricsData.cityTotalAreaKm2} km²
                </strong>
              </div>
            </div>

            <div className="text-[10.5px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 space-y-1">
              <div>
                <strong className="text-slate-800">Formula:</strong> Total Population / Geographic Area in km²
              </div>
              <div>
                <strong className="text-slate-800">Source:</strong> Census of India 2011 Primary Census Abstract (PCA) &amp; BMC DP-2034 ({metricsData.populationReferenceYear})
              </div>
              <div className="text-slate-500 text-[10px] leading-snug">
                Official decennial census enumeration across administrative wards without arbitrary extrapolation.
              </div>
            </div>
          </div>

          {/* Metric 3: Distribution of Urban Green Space Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2.5 relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
                  Metric 3
                </span>
                <h3 className="text-xs font-extrabold text-slate-800 mt-1">
                  Distribution of Urban Green Space
                </h3>
              </div>
              <button
                onClick={() => setActiveTooltipMetric(metricsData.metrics[2])}
                className="text-slate-400 hover:text-teal-700 p-1 rounded-lg hover:bg-slate-200 transition"
                title="View formula & methodology tooltip"
              >
                <Info className="w-4 h-4 text-teal-700" />
              </button>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-teal-700">
                {metricsData.hexStats.medianGreenCoverPct}%
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                Median across 100m hex cells
              </span>
            </div>

            {/* Hex Distribution Statistics Grid */}
            <div className="grid grid-cols-2 gap-2 text-[10.5px] bg-white p-2.5 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-500 block">Valid Cells Analyzed:</span>
                <strong className="text-slate-800">
                  {metricsData.hexStats.validCellsCount.toLocaleString('en-IN')} cells
                </strong>
              </div>
              <div>
                <span className="text-slate-500 block">Mean Cell Cover:</span>
                <strong className="text-slate-800">
                  {metricsData.hexStats.meanGreenCoverPct}%
                </strong>
              </div>
              <div>
                <span className="text-slate-500 block">Vegetated Cells Median:</span>
                <strong className="text-slate-800">
                  {metricsData.hexStats.vegetatedCellsMedianPct}%
                </strong>
              </div>
              <div>
                <span className="text-slate-500 block">Cells with Greenery:</span>
                <strong className="text-slate-800">
                  {metricsData.hexStats.vegetatedCellsCount} ({metricsData.hexStats.vegetatedCellsRatioPct}%)
                </strong>
              </div>
            </div>

            {/* Technical Grid Specification Box */}
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-[10px] text-slate-600 space-y-1">
              <div>
                <strong className="text-slate-800">100m Hex Measurement:</strong>{' '}
                {metricsData.hexStats.interpretation === 'PARALLEL_SIDES_100M'
                  ? 'Flat-to-flat short diameter d = 100m (s = 57.7m, regular area = 8,660.25 m²)'
                  : 'Vertex-to-vertex long diameter D = 100m (s = 50m, regular area = 6,495.19 m²)'}
              </div>
              <div>
                <strong className="text-slate-800">Boundary Clipping:</strong>{' '}
                {metricsData.hexStats.partialBoundaryCellsCount} partial boundary cells clipped to urban perimeter.
              </div>
              <div>
                <strong className="text-slate-800">Exclusion Rule:</strong>{' '}
                Cells with valid boundary area &lt; 50 m² excluded as edge slivers ({metricsData.hexStats.excludedSliverCellsCount} slivers excluded).
              </div>
              <div className="text-slate-500 pt-0.5 leading-snug">
                Uses actual mapped green-space geometries, not merely NDVI thresholds. Missing satellite observations are NOT counted as zero vegetation.
              </div>
            </div>
          </div>

          {/* Ward Distribution Breakdown Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-3 space-y-2.5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-black text-slate-900">
                  All 24 BMC Administrative Wards
                </h3>
                <span className="text-[10px] text-slate-500">
                  Census 2011 &amp; Mapped Green Infrastructure
                </span>
              </div>
              <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                24 Wards
              </span>
            </div>

            {/* Table Search & Filter */}
            <div className="relative">
              <input
                type="text"
                value={wardTableSearch}
                onChange={(e) => setWardTableSearch(e.target.value)}
                placeholder="Filter by ward (e.g. Bandra, D, Colaba, S)…"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-7 pr-2 py-1 text-xs text-slate-800 focus:outline-none focus:border-emerald-600"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" />
            </div>

            <div className="overflow-x-auto max-h-72 overflow-y-auto border border-slate-100 rounded-xl">
              <table className="w-full text-left text-[11px]">
                <thead className="sticky top-0 bg-slate-100 border-b border-slate-200 text-slate-600 font-bold z-10">
                  <tr>
                    <th
                      className="py-1.5 px-2 cursor-pointer hover:text-emerald-700"
                      onClick={() => {
                        setWardSortKey('wardCode');
                        setWardSortAsc(!wardSortAsc);
                      }}
                    >
                      Ward <ArrowUpDown className="w-2.5 h-2.5 inline" />
                    </th>
                    <th
                      className="py-1.5 px-2 cursor-pointer hover:text-emerald-700"
                      onClick={() => {
                        setWardSortKey('greenCoverPercent');
                        setWardSortAsc(!wardSortAsc);
                      }}
                    >
                      % Cover <ArrowUpDown className="w-2.5 h-2.5 inline" />
                    </th>
                    <th
                      className="py-1.5 px-2 cursor-pointer hover:text-emerald-700"
                      onClick={() => {
                        setWardSortKey('populationDensityKm2');
                        setWardSortAsc(!wardSortAsc);
                      }}
                    >
                      Density <ArrowUpDown className="w-2.5 h-2.5 inline" />
                    </th>
                    <th
                      className="py-1.5 px-2 cursor-pointer hover:text-emerald-700"
                      onClick={() => {
                        setWardSortKey('greenPerCapitaM2');
                        setWardSortAsc(!wardSortAsc);
                      }}
                    >
                      Per Capita <ArrowUpDown className="w-2.5 h-2.5 inline" />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {metricsData.wardBreakdown
                    .filter(
                      (w) =>
                        !wardTableSearch ||
                        w.wardCode.toLowerCase().includes(wardTableSearch.toLowerCase()) ||
                        w.wardName.toLowerCase().includes(wardTableSearch.toLowerCase()) ||
                        w.zone.toLowerCase().includes(wardTableSearch.toLowerCase())
                    )
                    .sort((a, b) => {
                      const valA = a[wardSortKey];
                      const valB = b[wardSortKey];
                      if (typeof valA === 'string') {
                        return wardSortAsc
                          ? valA.localeCompare(valB as string)
                          : (valB as string).localeCompare(valA);
                      }
                      return wardSortAsc
                        ? (valA as number) - (valB as number)
                        : (valB as number) - (valA as number);
                    })
                    .map((w) => (
                      <tr
                        key={w.wardCode}
                        onClick={() => {
                          setMetricsBoundary(w.wardCode);
                          recalculateMetrics(w.wardCode, metricsYear, metricsDimension);
                        }}
                        className={`hover:bg-emerald-50/60 cursor-pointer transition ${
                          metricsBoundary === w.wardCode ? 'bg-emerald-50 font-bold' : ''
                        }`}
                        title="Click to calculate metrics for this ward"
                      >
                        <td className="py-1.5 px-2">
                          <span className="font-bold text-slate-900">Ward {w.wardCode}</span>
                          <span className="block text-[9.5px] text-slate-400 truncate max-w-[110px]">
                            {w.wardName.replace(/Ward [A-Z/]+ \((.*)\)/, '$1')}
                          </span>
                        </td>
                        <td className="py-1.5 px-2">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              w.greenCoverPercent > 20
                                ? 'bg-emerald-100 text-emerald-800'
                                : w.greenCoverPercent > 5
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {w.greenCoverPercent}%
                          </span>
                        </td>
                        <td className="py-1.5 px-2 text-slate-600">
                          {w.populationDensityKm2.toLocaleString('en-IN')}/km²
                        </td>
                        <td className="py-1.5 px-2 text-slate-600">
                          {w.greenPerCapitaM2.toFixed(1)} m²
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-400 italic">
              Tip: Click any ward row to recalculate metrics specifically for that ward.
            </p>
          </div>

          {/* Interactive Information Tooltip Modal / Popover */}
          {activeTooltipMetric && (
            <div className="fixed inset-0 z-[1200] bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-black text-white">
                      {activeTooltipMetric.name}
                    </h4>
                  </div>
                  <button
                    onClick={() => setActiveTooltipMetric(null)}
                    className="text-slate-400 hover:text-white p-1 rounded-lg"
                    aria-label="Close tooltip"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 space-y-3 max-h-[75vh] overflow-y-auto text-xs text-slate-700">
                  {/* Formula */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 space-y-1">
                    <span className="text-[10px] font-black uppercase text-emerald-800 tracking-wider block">
                      Mathematical Formula
                    </span>
                    <code className="text-xs font-mono font-bold text-emerald-950 block">
                      {activeTooltipMetric.tooltip.formula}
                    </code>
                  </div>

                  {/* Data Source & Year */}
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500 block">Data Source</span>
                      <strong className="text-slate-900 text-[11px] block mt-0.5">
                        {activeTooltipMetric.tooltip.dataSource}
                      </strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500 block">Reference Year</span>
                      <strong className="text-slate-900 text-[11px] block mt-0.5">
                        {activeTooltipMetric.tooltip.referenceYear}
                      </strong>
                    </div>
                  </div>

                  {/* Geographic Extent */}
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px]">
                    <span className="text-[10px] font-bold text-slate-500 block">Geographic Extent</span>
                    <p className="text-slate-800 font-semibold mt-0.5">
                      {activeTooltipMetric.tooltip.geographicExtent}
                    </p>
                  </div>

                  {/* Calculation Methodology */}
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px]">
                    <span className="text-[10px] font-bold text-slate-500 block">Calculation Method</span>
                    <p className="text-slate-700 mt-0.5 leading-relaxed">
                      {activeTooltipMetric.tooltip.calculationMethod}
                    </p>
                  </div>

                  {/* Limitations & Caveats */}
                  <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-950">
                    <span className="text-[10px] font-bold text-amber-800 block">Limitations &amp; Assumptions</span>
                    <p className="text-amber-900/90 mt-0.5 leading-relaxed">
                      {activeTooltipMetric.tooltip.limitations}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[10px] text-slate-500">
                    <span>Confidence: <strong>{activeTooltipMetric.confidence}</strong></span>
                    <button
                      onClick={() => setActiveTooltipMetric(null)}
                      className="bg-slate-900 text-white font-bold px-3 py-1.5 rounded-xl hover:bg-slate-800"
                    >
                      Got it
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 3: 27 BMC WARDWISE NURSERIES ────────────────────────────────── */}
      {currentTab === 'NURSERIES' && (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header & Source Citation */}
          <div className="flex-shrink-0 p-3.5 bg-amber-50/80 border-b border-amber-200">
            <div className="flex items-center gap-1.5 text-amber-800 text-[10px] font-black uppercase tracking-wider">
              <Sprout className="w-3.5 h-3.5" /> BMC Citizen&apos;s Handbook Annexure
            </div>
            <h2 className="text-sm font-black text-slate-900 mt-0.5">
              All 27 BMC Wardwise Nurseries
            </h2>
            <p className="text-[10px] text-slate-600 mt-0.5">
              Source: Greening Mumbai Handbook (pp. 82–83) · BMC &amp; WRI India.
            </p>

            {/* Ward Selector & Search */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="relative">
                <input
                  type="text"
                  value={nurserySearch}
                  onChange={(e) => setNurserySearch(e.target.value)}
                  placeholder="Search plant or location…"
                  className="w-full bg-white border border-slate-300 rounded-xl pl-7 pr-2 py-1 text-xs text-slate-800 focus:outline-none focus:border-amber-600"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" />
              </div>
              <select
                value={nurseryWard}
                onChange={(e) => onNurseryWardChange && onNurseryWardChange(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-2 py-1 text-xs text-slate-800 focus:outline-none focus:border-amber-600 font-semibold"
              >
                <option value="ALL">All 24 Wards ({BMC_NURSERIES.length})</option>
                {nurseryWardsList.map((w) => (
                  <option key={w} value={w}>
                    Ward {w}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected Nursery Detailed Card */}
          {selectedNursery && (
            <div className="flex-shrink-0 p-3 bg-amber-500/10 border-b border-amber-300 relative">
              <button
                onClick={onCloseNursery}
                className="absolute top-2 right-2 text-slate-400 hover:text-slate-700 p-1"
                aria-label="Close nursery view"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="text-[10px] font-black uppercase tracking-wider bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full">
                Active Ward {selectedNursery.ward}
              </span>
              <h3 className="text-sm font-black text-slate-900 mt-1">{selectedNursery.name}</h3>
              <p className="text-[11px] text-slate-700 mt-0.5 font-medium leading-relaxed">
                {selectedNursery.sourceAddress}
              </p>
              <div className="mt-2 text-[10.5px] space-y-0.5 text-slate-600">
                <div>
                  <strong className="text-slate-800">Status:</strong>{' '}
                  {selectedNursery.verificationStatus === 'VERIFIED'
                    ? '✓ Handbook Geocoded'
                    : '⚠️ Location Needs Verification'}
                </div>
                <div>
                  <strong className="text-slate-800">Available Species:</strong>{' '}
                  {selectedNursery.speciesAvailable.join(', ')}
                </div>
                <div>
                  <strong className="text-slate-800">Operating Hours:</strong>{' '}
                  {selectedNursery.operatingHours}
                </div>
              </div>
            </div>
          )}

          {/* Nursery Cards List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredNurseries.map((n) => {
              const isSelected = selectedNursery?.id === n.id;
              return (
                <div
                  key={n.id}
                  onClick={() => onSelectNursery && onSelectNursery(n)}
                  className={`p-3 rounded-2xl border transition cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50 border-amber-500 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-900">
                      Ward {n.ward}
                    </span>
                    <span
                      className={`text-[9.5px] font-bold ${
                        n.verificationStatus === 'VERIFIED' ? 'text-emerald-700' : 'text-amber-700'
                      }`}
                    >
                      {n.verificationStatus === 'VERIFIED' ? '✓ Verified' : 'Check Location'}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 leading-snug">{n.name}</h4>
                  <p className="text-[10.5px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {n.sourceAddress}
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                    <span>{n.speciesAvailable[0] || 'Saplings'}</span>
                    <span className="font-bold text-amber-700">Locate on Map →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── TAB 4: 100M HEXAGON CELL INSPECTOR ─────────────────────────────── */}
      {currentTab === 'HEXAGON' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-black uppercase tracking-wider mb-1">
              <Hexagon className="w-4 h-4" /> 100m Hexagonal Grid Engine
            </div>
            <h2 className="text-sm font-black text-white leading-tight">
              100-Metre Cell Intelligence Inspector
            </h2>
            <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
              Interpretation: 100 metres across opposite parallel sides (~8,660 m² per regular
              cell). Click any cell on the map to inspect its real spatial intersection.
            </p>
          </div>

          {selectedHex ? (
            <div className="bg-white border-2 border-cyan-500 rounded-2xl p-4 space-y-3 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-[11px] font-mono font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded-lg">
                  {selectedHex.hexId}
                </span>
                <button
                  onClick={onCloseHex}
                  className="text-xs text-slate-400 hover:text-slate-700 font-bold"
                >
                  Clear Selection
                </button>
              </div>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">
                    Green Coverage
                  </span>
                  <span className="text-base font-black text-emerald-700">
                    {selectedHex.greenCoveragePercent}%
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    {selectedHex.intersectingAreaM2.toLocaleString()} m² of{' '}
                    {selectedHex.totalAreaM2.toLocaleString()} m²
                  </span>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">
                    NDVI Mean
                  </span>
                  <span className="text-base font-black text-slate-900">
                    {selectedHex.ndviMean ?? 'Unavailable'}
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    Class: {selectedHex.vegetationClass}
                  </span>
                </div>
              </div>

              {/* Coordinates */}
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-[11px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Cell Centroid:</span>
                  <span className="font-mono font-bold text-slate-800">
                    {selectedHex.centerLat.toFixed(5)}, {selectedHex.centerLon.toFixed(5)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Mapped Intersections:</span>
                  <span className="font-bold text-slate-800">
                    {selectedHex.mappedFeaturesCount} features
                  </span>
                </div>
                {selectedHex.intersectingFeatureNames.length > 0 && (
                  <div className="pt-1 border-t border-slate-200 text-[10.5px] text-slate-600">
                    <strong>Intersecting:</strong>{' '}
                    {selectedHex.intersectingFeatureNames.join(', ')}
                  </div>
                )}
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500 font-medium">Observation Date:</span>
                  <span className="text-slate-700">{selectedHex.observationDate}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-2">
              <Hexagon className="w-8 h-8 text-slate-400 mx-auto" />
              <div className="text-xs font-bold text-slate-700">No cell currently selected</div>
              <p className="text-[11px] text-slate-500">
                Ensure the &quot;100m Hex Grid&quot; toggle is enabled in map layers, then click any
                hexagon on the map to inspect its real spatial intersection.
              </p>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
