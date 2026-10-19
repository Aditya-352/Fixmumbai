'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cityHasNurseries, getNurseriesForCity } from '@/lib/green/nurseries-service';
import type { CityId } from '@/lib/green/config';
import {
  GREEN_DENSITY_TIERS,
  ZERO_COVERAGE_META,
  BLUE_SPACE_META,
} from '@/lib/green/density-scale';

interface GreenLegendProps {
  isNdviProcessed?: boolean;
  /** Selected city — the legend must describe THIS city's data only. */
  cityId?: CityId;
}

export default function GreenLegend({ isNdviProcessed = false, cityId }: GreenLegendProps) {
  const hasNurseries = cityHasNurseries(cityId ?? 'mumbai');
  const nurseryCount = getNurseriesForCity(cityId ?? 'mumbai').length;
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const isWide = typeof window !== 'undefined' && window.innerWidth >= 1280;
    setOpen(isWide);
  }, []);

  return (
    <div
      // On mobile: fixed so it clears the bottom nav bar (58px) + compact attribution bar (16px) = bottom-[78px]
      // On lg+: absolute inside the map container, bottom-10 clears the Leaflet attribution bar
      className={`fixed lg:absolute bottom-[78px] sm:bottom-[88px] lg:bottom-10 right-2.5 sm:right-3 lg:right-4 z-[1050] bg-white rounded-xl sm:rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#E5EBE7] text-xs overflow-hidden transition-all duration-200 max-h-[52vh] sm:max-h-[64vh] lg:max-h-[78vh] overflow-y-auto ${
        open ? 'w-[min(90vw,310px)] sm:w-[310px] max-w-[340px]' : 'w-auto max-w-[calc(100vw-20px)] lg:max-w-none'
      }`}
      role="region"
      aria-label="Map legend"
    >
      {/* Header / Collapse toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 text-[10px] sm:text-[11px] font-black text-[#14231D] uppercase tracking-wider hover:bg-[#F7F9F8] active:bg-[#EDF2EF] transition gap-2 sm:gap-8 focus:outline-none select-none"
        aria-expanded={open}
        aria-controls="green-legend-body"
      >
        <span className="truncate">GIS Map Legend</span>
        {open ? (
          <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#64746B] flex-shrink-0" />
        ) : (
          <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#64746B] flex-shrink-0" />
        )}
      </button>

      {/* Legend body */}
      {open && (
        <div id="green-legend-body" className="px-2.5 pb-2.5 sm:px-3.5 sm:pb-3.5 space-y-2 sm:space-y-2.5 min-w-[200px] sm:min-w-[260px]">

          {/* Section: Green Density Scale */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9.5px] sm:text-[10px] font-black text-[#14231D] uppercase tracking-wider">
                Green Density
              </span>
              <span className="text-[8px] sm:text-[8.5px] font-bold text-[#64746B] uppercase tracking-wider">
                Per Cell Count
              </span>
            </div>

            <p className="text-[8.5px] sm:text-[9.5px] text-[#64746B] leading-snug mb-1.5">
              Colour indicates green density per grid cell. Counts and colours update as you zoom.
            </p>

            {/* Continuous 5-segment horizontal colour-scale bar */}
            <div className="mb-2">
              <div
                className="flex w-full h-3 rounded-md overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)] border border-black/10"
                role="img"
                aria-label="Green density colour gradient: Mint Green (1-9), Sage Green (10-24), Lime Green (25-51), Emerald Green (52-99), Forest Green (100+)"
              >
                {/* Ordered from lowest (1-9) to highest (100+) */}
                {[...GREEN_DENSITY_TIERS].reverse().map((tier) => (
                  <div
                    key={tier.id}
                    className="flex-1 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: tier.color }}
                    title={`${tier.rangeLabel}: ${tier.name} (${tier.densityLevel})`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[7.5px] sm:text-[8px] font-bold text-[#64746B] px-0.5 mt-0.5">
                <span>1–9</span>
                <span>10–24</span>
                <span>25–51</span>
                <span>52–99</span>
                <span>100+</span>
              </div>
            </div>

            {/* Tier list with precise descriptions */}
            <div className="space-y-1 bg-[#F9FBFA] rounded-lg p-1.5 border border-[#EBF0ED]">
              {GREEN_DENSITY_TIERS.map((tier) => (
                <div key={tier.id} className="flex items-center justify-between text-[9px] sm:text-[10px]">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white shadow-xs flex-shrink-0 flex items-center justify-center text-[7px] sm:text-[7.5px] font-black"
                      style={{ backgroundColor: tier.color, color: tier.textColor }}
                    >
                      {tier.rangeLabel === '100+' ? '100' : tier.min}
                    </span>
                    <span className="font-bold text-[#14231D]">
                      {tier.rangeLabel}
                    </span>
                  </div>
                  <span className="text-[8.5px] sm:text-[9.5px] font-medium text-[#44564E]">
                    {tier.densityLevel} ({tier.name})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Blue Spaces & Zero Coverage */}
          <div className="border-t border-[#E5EBE7] pt-1.5 space-y-1">
            <span className="text-[8.5px] sm:text-[9.5px] font-black text-[#64746B] uppercase tracking-wider block mb-0.5">
              Special Cell Coverage
            </span>

            {/* Blue Space */}
            <div className="flex items-center justify-between text-[9px] sm:text-[10px]">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-3.5 h-3.5 rounded-full bg-[#2563EB] border border-white shadow-xs flex-shrink-0 flex items-center justify-center text-[8px] text-white">
                  🚶
                </span>
                <span className="font-bold text-[#14231D]">
                  Blue Space
                </span>
              </div>
              <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#2563EB]">
                Walkable Verified Park
              </span>
            </div>

            {/* Zero Green Coverage */}
            <div className="flex items-center justify-between text-[9px] sm:text-[10px]">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-3.5 h-3.5 rounded-full border-1.5 border-dashed border-[#94A3B8] bg-[#F1F5F3] flex-shrink-0" />
                <span className="font-bold text-[#14231D]">
                  {ZERO_COVERAGE_META.label}
                </span>
              </div>
              <span className="text-[8.5px] sm:text-[9.5px] font-medium text-[#64746B]">
                {ZERO_COVERAGE_META.meaning}
              </span>
            </div>
          </div>

          {/* Section: Infrastructure & Nurseries */}
          <div className="border-t border-[#E5EBE7] pt-1.5">
            <span className="text-[8.5px] sm:text-[9.5px] font-black text-[#64746B] uppercase tracking-wider block mb-0.5">
              Civic Infrastructure
            </span>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-600 border border-white flex-shrink-0 flex items-center justify-center text-[8px] text-white">
                  🌱
                </span>
                <span className="text-[#14231D] font-semibold text-[9px] sm:text-[10px] truncate">
                  {hasNurseries ? `${nurseryCount} BMC Nurseries` : 'Nurseries (none)'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#98FB98] border border-white flex-shrink-0 flex items-center justify-center text-[8px] text-[#143823]">
                  🌳
                </span>
                <span className="text-[#14231D] font-semibold text-[9px] sm:text-[10px]">
                  Parks &amp; Gardens (Individual)
                </span>
              </div>
            </div>
          </div>

          {/* Basemap & Data Note */}
          <div className="border-t border-[#E5EBE7] pt-1 text-[8px] sm:text-[9px] text-[#64746B] space-y-0.5 leading-tight">
            <div><strong>Basemap:</strong> Carto Positron / Esri Imagery</div>
            <div>
              <strong>Data:</strong>{' '}
              {hasNurseries ? 'Sentinel-2 · OSM · BMC Handbook' : 'OSM'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

