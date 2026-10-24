'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { withBasePath } from '@/lib/base-path';
import MumbaiMap, { ReportMarker } from './MumbaiMap';
import { StatusBadge } from '../ui/Badge';
import { useCitySelection } from '@/components/green/CitySelection';
import CitySwitcher from '@/components/city/CitySwitcher';
import { getCityHero, cityWardCount } from '@/lib/green/city-heroes';
import { type CityDashboardStats, isInsideCity } from '@/lib/green/dashboard-stats';
import { DEFAULT_CITY, CITY_REGISTRY, type CityId } from '@/lib/green/config';
import {
  Search,
  MapPin,
  Eye,
  PlusCircle,
  Wind,
  Trees,
  Leaf,
  SlidersHorizontal,
  ArrowRight,
  RotateCcw,
  FileText,
  Trash2,
  ChevronRight,
  Filter,
  X
} from 'lucide-react';

interface WardOption {
  wardCode: string;
  wardName: string;
}

/**
 * Ward sub-line for the "Public Reports" stat.
 *
 * Uses the measured ward count for the selected city when one exists
 * (Mumbai 24, Pune 58, Bengaluru 369 — all from the city registry's boundary
 * metadata). When the count is not known, or the city has no civic reports
 * yet, it says so explicitly rather than borrowing another city's number.
 */
function heroWardSubline(
  stats: CityDashboardStats | undefined,
  cityId: CityId
): string {
  const authority = stats?.wardAuthority ?? getCityHero(cityId).wardAuthority;
  const wards = stats?.wardCount ?? cityWardCount(cityId);
  const reports = stats?.reportCount ?? null;

  if (reports === 0) {
    return `no civic reports in ${authority} areas yet`;
  }
  if (!wards) {
    return `across ${authority} areas`;
  }
  return `mapped across ${wards} ${authority} wards`;
}

interface CategoryOption {
  name: string;
}

interface MapDashboardViewProps {
  initialReports: ReportMarker[];
  wards: WardOption[];
  categories: CategoryOption[];
  totalCount: number;
  openCount: number;
  resolvedCount: number;
  greenSitesCount: number;
  initialFilters: {
    ward?: string;
    category?: string;
    status?: string;
    search?: string;
  };
  /**
   * Real, city-scoped statistics for every registered city, resolved on the
   * server. Carrying the whole map lets the hero switch cities instantly
   * without a round-trip, while every number still comes from the database or
   * the city's own dataset — never another city's.
   */
  cityStats?: Record<CityId, CityDashboardStats>;
}

export default function MapDashboardView({
  initialReports,
  wards,
  categories,
  totalCount,
  openCount,
  resolvedCount,
  greenSitesCount,
  initialFilters,
  cityStats: cityStatsByCity
}: MapDashboardViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // The selected city is app-wide state, shared with the Green Density explorer.
  const { cityId } = useCitySelection();
  const hero = getCityHero(cityId);

  // Map framing follows the selected city — never Mumbai's coordinates for
  // another city.
  const cityCentre = useMemo<[number, number]>(
    () => CITY_REGISTRY[cityId]?.centre ?? CITY_REGISTRY[DEFAULT_CITY.id].centre,
    [cityId]
  );

  // Real statistics for the selected city.
  const cityStats = cityStatsByCity?.[cityId];

  // The ward register in the database is Mumbai's (BMC) only, so it is shown
  // for Mumbai and withheld — with an explicit empty state — elsewhere.
  const cityWards = useMemo(
    () => (cityId === DEFAULT_CITY.id ? wards : []),
    [cityId, wards]
  );

  // Local filter states
  const [search, setSearch] = useState(initialFilters.search || '');
  const [ward, setWard] = useState(initialFilters.ward || '');
  const [category, setCategory] = useState(initialFilters.category || '');
  const [status, setStatus] = useState(initialFilters.status || '');
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // A ward filter that is not valid for the newly selected city is cleared —
  // the ward register only exists for Mumbai, so keeping it would silently
  // hide every report.
  useEffect(() => {
    if (ward && cityWards.length === 0) {
      setWard('');
      updateUrlParams('', category, status, search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityId, cityWards.length]);

  // Client-side instant filter computation.
  // Reports are also scoped to the selected city so a city's map never shows
  // another city's markers.
  const filteredReports = useMemo(() => {
    return initialReports.filter((r) => {
      if (!isInsideCity(cityId, r.latitude, r.longitude)) return false;
      if (ward && r.wardCode !== ward) return false;
      if (category && r.categoryName !== category) return false;
      if (status && r.status !== status) return false;
      if (search) {
        const query = search.toLowerCase();
        const matchesId = r.publicReportId?.toLowerCase().includes(query);
        const matchesLoc = r.locality?.toLowerCase().includes(query);
        const matchesCat = r.categoryName?.toLowerCase().includes(query);
        if (!matchesId && !matchesLoc && !matchesCat) return false;
      }
      return true;
    });
  }, [initialReports, cityId, ward, category, status, search]);

  // Sync to URL query parameters
  const updateUrlParams = (newWard: string, newCat: string, newStatus: string, newSearch: string) => {
    const params = new URLSearchParams();
    if (newWard) params.set('ward', newWard);
    if (newCat) params.set('category', newCat);
    if (newStatus) params.set('status', newStatus);
    if (newSearch) params.set('search', newSearch);
    // Keep the selected city in the URL so a filter change never resets it.
    if (cityId !== DEFAULT_CITY.id) params.set('city', cityId);
    const query = params.toString();
    router.replace(`/map${query ? `?${query}` : ''}`, { scroll: false });
  };

  const handleResetFilters = () => {
    setSearch('');
    setWard('');
    setCategory('');
    setStatus('');
    setSelectedReportId(null);
    router.replace('/map', { scroll: false });
  };

  // Border accent color according to status
  const getStatusBorderClass = (reportStatus: string) => {
    if (reportStatus === 'VERIFIED' || reportStatus === 'RESOLUTION_SUBMITTED') {
      return 'border-l-4 border-l-[#087F5B]';
    }
    if (reportStatus === 'IN_PROGRESS' || reportStatus === 'ASSIGNED' || reportStatus === 'ACKNOWLEDGED') {
      return 'border-l-4 border-l-[#F59E0B]';
    }
    return 'border-l-4 border-l-[#EF2929]';
  };

  const getStatusTextClass = (reportStatus: string) => {
    if (reportStatus === 'VERIFIED' || reportStatus === 'RESOLUTION_SUBMITTED') {
      return 'text-[#087F5B]';
    }
    if (reportStatus === 'IN_PROGRESS' || reportStatus === 'ASSIGNED' || reportStatus === 'ACKNOWLEDGED') {
      return 'text-[#F59E0B]';
    }
    return 'text-[#EF2929]';
  };

  return (
    <div className="min-h-screen bg-transparent text-[#17243B]">
      {/* ── Main Container: Sidebar + Dashboard ── */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ══════════════════════════════════════════════════════════════════
              LEFT SIDEBAR: CIVIC INSIGHTS, FILTERS, GREEN MUMBAI PROMO
          ══════════════════════════════════════════════════════════════════ */}
          <aside className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0 space-y-5">

            {/* Mobile Filter Toggle Button */}
            <div className="lg:hidden flex items-center justify-between bg-white p-3.5 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider text-slate-800">
                <Filter className="w-4 h-4 text-[#087F5B]" />
                <span>Civic Filters & Navigation</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="px-3 py-1.5 rounded-xl bg-[#EAF6EF] text-[#087F5B] text-xs font-bold border border-[#087F5B]/20"
              >
                {mobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {/* Sidebar Content (Always visible on desktop, toggleable on mobile) */}
            <div className={`space-y-5 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>

              {/* Group 1: Civic Insights Navigation */}
              <div className="bg-white rounded-3xl p-5 border border-[#E2E8F0] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-100">
                  <Leaf className="w-4 h-4 text-[#087F5B]" />
                  <span>Civic Insights</span>
                </div>

                <nav className="space-y-1 text-xs font-bold">
                  {/* Live Civic GIS Map (Active) */}
                  <Link
                    href="/map"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-[#EAF6EF] text-[#087F5B] border border-[#087F5B]/20 font-black shadow-xs transition"
                  >
                    <MapPin className="w-4 h-4 text-[#087F5B]" />
                    <span>Live Civic GIS Map</span>
                  </Link>

                  {/* Air Quality Layer */}
                  <Link
                    href="/air-quality"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
                  >
                    <Wind className="w-4 h-4 text-slate-400" />
                    <span>Air Quality Layer</span>
                  </Link>

                  {/* Green Density & Nature Explorer */}
                  <Link
                    href={`/green${cityId !== DEFAULT_CITY.id ? `?city=${cityId}` : ''}`}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Trees className="w-4 h-4 text-slate-400 group-hover:text-[#087F5B]" />
                      <span>Green Density & Nature</span>
                    </div>
                    <span className="bg-[#087F5B] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                      NEW
                    </span>
                  </Link>
                </nav>
              </div>

              {/* Group 2: Filters */}
              <div className="bg-white rounded-3xl p-5 border border-[#E2E8F0] shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900">
                    <SlidersHorizontal className="w-4 h-4 text-[#087F5B]" />
                    <span>Filters</span>
                  </div>
                  {(search || ward || category || status) && (
                    <button
                      type="button"
                      onClick={handleResetFilters}
                      className="text-[11px] text-[#EF2929] hover:underline font-bold flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" /> Reset
                    </button>
                  )}
                </div>

                <div className="space-y-3.5 text-xs">
                  {/* Search Keywords / Case ID */}
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                      Search Keywords / Case ID
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          updateUrlParams(ward, category, status, e.target.value);
                        }}
                        placeholder="e.g. MUM-000182 or Andheri"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl pl-8 pr-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#087F5B] focus:bg-white font-medium transition text-xs"
                      />
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    </div>
                  </div>

                  {/* Ward filter — the ward register is Mumbai's (BMC) only. */}
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                      {hero.wardAuthority} Ward
                    </label>
                    {cityWards.length > 0 ? (
                      <select
                        value={ward}
                        onChange={(e) => {
                          setWard(e.target.value);
                          updateUrlParams(e.target.value, category, status, search);
                        }}
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#087F5B] focus:bg-white font-medium transition text-xs"
                      >
                        <option value="">All {cityWards.length} Wards</option>
                        {cityWards.map((w) => (
                          <option key={w.wardCode} value={w.wardCode}>
                            Ward {w.wardCode} - {w.wardName}
                          </option>
                        ))}
                      </select>
                    ) : (
                      /* No ward register for this city yet — say so rather than
                         offering another city's wards. */
                      <div className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-slate-500 font-medium text-xs">
                        No {hero.wardAuthority} ward register for {hero.shortName} yet
                      </div>
                    )}
                  </div>

                  {/* Issue Category */}
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                      Issue Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                        updateUrlParams(ward, e.target.value, status, search);
                      }}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#087F5B] focus:bg-white font-medium transition text-xs"
                    >
                      <option value="">All Categories</option>
                      {categories.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Resolution Status */}
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                      Resolution Status
                    </label>
                    <select
                      value={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                        updateUrlParams(ward, category, e.target.value, search);
                      }}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#087F5B] focus:bg-white font-medium transition text-xs"
                    >
                      <option value="">All Statuses</option>
                      <option value="SUBMITTED">Submitted</option>
                      <option value="ACKNOWLEDGED">Acknowledged</option>
                      <option value="ASSIGNED">Assigned</option>
                      <option value="IN_PROGRESS">In Progress</option>
                      <option value="RESOLUTION_SUBMITTED">Resolution Submitted</option>
                      <option value="VERIFIED">Verified</option>
                      <option value="REOPENED">Reopened</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Group 3: Greener Mumbai Promo Card */}
              <Link
                href={`/green${cityId !== DEFAULT_CITY.id ? `?city=${cityId}` : ''}`}
                className="group block bg-[#EAF6EF] rounded-3xl p-5 border border-[#087F5B]/20 relative overflow-hidden transition-all hover:shadow-md"
              >
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-white/90 flex items-center justify-center text-[#087F5B] shadow-xs">
                      <Leaf className="w-4 h-4 text-[#087F5B] fill-[#087F5B]/30" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#087F5B] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#17243B]">Greener {hero.shortName}</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mt-0.5">
                      Explore green cover &amp; nature across {hero.shortName} &rarr;
                    </p>
                  </div>
                </div>

                {/* Subtle tree background art */}
                <div
                  className="absolute -bottom-3 -right-3 w-28 h-20 bg-cover bg-no-repeat opacity-40 pointer-events-none"
                  style={{ backgroundImage: `url(${withBasePath(hero.image)})` }}
                />
              </Link>

            </div>
          </aside>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT COLUMN: HERO BANNER, MODE SELECTOR, GIS MAP & CASE LIST
          ══════════════════════════════════════════════════════════════════ */}
          <main className="flex-1 min-w-0 space-y-6">

            {/* ── HERO BANNER: EXACT REFERENCE MATCH ── */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-sm border border-[#E2E8F0]"
              style={{ minHeight: '260px' }}
            >
              {/* 1. Full-bleed background photo — completely visible */}
              <div
                key={hero.image}
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${withBasePath(hero.image)})`,
                  backgroundPosition: hero.objectPosition,
                }}
              />

              {/* 2. Scrims — the photograph is revealed progressively from
                  left to right. The wash is concentrated where the text block
                  sits (left) and releases quickly, so the rest of the city
                  stays fully visible. A light bottom wash carries the stat
                  card without flattening the image. */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to right, rgba(255,255,255,0.56) 0%, rgba(255,255,255,0.34) 20%, rgba(255,255,255,0.12) 36%, rgba(255,255,255,0.02) 48%, rgba(255,255,255,0) 54%)'
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0) 36%)'
                }}
              />

              {/* 3. Content layer */}
              <div className="relative z-10 flex flex-col justify-between h-full px-7 py-6" style={{ minHeight: '260px' }}>

                {/* Top: Badge + City switcher + Heading + Subtitle */}
                <div className="space-y-2 max-w-[420px]">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#087F5B] bg-white/90 text-[#087F5B] text-[11px] font-black uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B] animate-pulse" />
                      LIVE CIVIC GIS MAP
                    </div>
                    <CitySwitcher />
                  </div>

                  <h1
                    className="text-[26px] sm:text-[30px] font-black text-[#17243B] leading-tight tracking-tight"
                    style={{ textShadow: '0 1px 3px rgba(255,255,255,0.95), 0 2px 14px rgba(255,255,255,0.85), 0 4px 26px rgba(255,255,255,0.6)' }}
                  >
                    A cleaner, greener<br />and better {hero.shortName}
                  </h1>

                  <p
                    className="text-[13px] text-[#344155] font-semibold leading-relaxed"
                    style={{ textShadow: '0 1px 3px rgba(255,255,255,0.95), 0 2px 12px rgba(255,255,255,0.85), 0 4px 22px rgba(255,255,255,0.55)' }}
                  >
                    Explore and report civic issues, track air quality,<br className="hidden sm:block" />
                    find green cover and help build a sustainable city.
                  </p>
                </div>

                {/* Bottom row: Stats card left + CTA button right */}
                <div className="flex items-end justify-between mt-6 flex-wrap gap-3">
                  {/* Stats pill card */}
                  <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl px-4 sm:px-5 py-3 shadow-sm">
                    {/* Public Reports — real count for the selected city */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#EAF6EF] flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-[#087F5B]" />
                      </div>
                      <div>
                        <div className="text-xl font-black text-[#17243B] leading-none">
                          {cityStats ? cityStats.reportCount : totalCount}
                        </div>
                        <div className="text-[11px] text-slate-500 font-semibold leading-tight">
                          Public Reports<br />
                          <span className="text-[10px] text-slate-400">
                            {heroWardSubline(cityStats, cityId)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-10 bg-slate-200" />

                    {/* Green Density — real per-city site count */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#EAF6EF] flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-4 h-4 text-[#087F5B]" />
                      </div>
                      <div>
                        <div className="text-xl font-black text-[#17243B] leading-none">
                          {cityStats ? cityStats.greenSitesCount : greenSitesCount}
                        </div>
                        <div className="text-[11px] text-slate-500 font-semibold leading-tight">
                          Green Density<br />
                          <span className="text-[10px] text-slate-400">explorer sites</span>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>

            {/* ── MAIN MAP + FILTERED CASE LIST GRID ── */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

              {/* Map Container (takes 2 of 3 columns on xl) */}
              <div className="xl:col-span-2">
                <MumbaiMap
                  center={cityCentre}
                  reports={filteredReports}
                  showWardMarkers={cityWards.length > 0}
                  cityId={cityId}
                  height="590px"
                  selectedReportId={selectedReportId}
                  onMarkerSelect={(r) => setSelectedReportId(r.publicReportId)}
                />
              </div>

              {/* Filtered Case List (takes 1 of 3 columns on xl) */}
              <div className="bg-white rounded-3xl p-5 border border-[#E2E8F0] shadow-sm flex flex-col h-[590px]">
                {/* List Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 flex-shrink-0">
                  <h3 className="text-sm font-black text-[#17243B] tracking-tight">
                    Filtered Case List
                  </h3>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {filteredReports.length} cases
                  </span>
                </div>

                {/* Case Cards Scrollable List */}
                <div className="flex-1 overflow-y-auto space-y-3 pt-3 pr-1 custom-scrollbar">
                  {filteredReports.length === 0 ? (
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-2 my-auto">
                      <div className="text-slate-700 text-xs font-bold">No public reports match these filters</div>
                      <p className="text-[11px] text-slate-500">Try clearing or selecting a different ward or status option.</p>
                      <button
                        type="button"
                        onClick={handleResetFilters}
                        className="mt-2 text-xs font-bold text-[#087F5B] hover:underline"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  ) : (
                    filteredReports.map((r) => {
                      const isSelected = selectedReportId === r.publicReportId;
                      const borderAccentClass = getStatusBorderClass(r.status);
                      const textAccentClass = getStatusTextClass(r.status);

                      return (
                        <div
                          key={r.id}
                          onClick={() => setSelectedReportId(r.publicReportId)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 text-xs bg-white ${borderAccentClass} ${
                            isSelected
                              ? 'border-[#087F5B] ring-2 ring-[#087F5B]/20 shadow-md bg-[#EAF6EF]/20'
                              : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                          }`}
                        >
                          {/* Row 1: Case ID + Status Badge */}
                          <div className="flex items-center justify-between">
                            <span className={`font-mono font-black text-xs ${textAccentClass}`}>
                              {r.publicReportId}
                            </span>
                            <StatusBadge status={r.status} size="sm" />
                          </div>

                          {/* Row 2: Locality */}
                          <div className="font-black text-[#17243B] text-sm leading-snug">
                            {r.locality}
                          </div>

                          {/* Row 3: Category / Issue */}
                          <div className="text-slate-600 text-[11px] font-medium leading-relaxed">
                            {r.categoryName}
                          </div>

                          {/* Row 4: Ward Code + View Case File Link */}
                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                            <span className="font-bold text-slate-400">
                              Ward {r.wardCode || 'N/A'}
                            </span>
                            <Link
                              href={`/report/${r.publicReportId}`}
                              className="text-[#EF2929] hover:underline font-extrabold flex items-center gap-1 transition"
                            >
                              <span>View Case File</span>
                              <Eye className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
