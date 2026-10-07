'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface GreenLegendProps {
  isNdviProcessed?: boolean;
}

export default function GreenLegend({ isNdviProcessed = false }: GreenLegendProps) {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    const isWide = typeof window !== 'undefined' && window.innerWidth >= 1280;
    setOpen(isWide);
  }, []);

  return (
    <div
      className="absolute bottom-4 right-4 z-[1000] bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-slate-200 text-xs overflow-hidden transition-all duration-200 max-h-[80vh] overflow-y-auto"
      role="region"
      aria-label="Map legend"
    >
      {/* Header / Collapse toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-3.5 py-2.5 text-[11px] font-black text-slate-800 uppercase tracking-wider hover:bg-slate-50 transition gap-8 focus:outline-none"
        aria-expanded={open}
        aria-controls="green-legend-body"
      >
        <span>GIS Map Legend</span>
        {open ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-400" />}
      </button>

      {/* Legend body */}
      {open && (
        <div id="green-legend-body" className="px-3.5 pb-3.5 space-y-2.5 min-w-[230px]">
          {/* Section: NDVI classes */}
          <div>
            <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block mb-1">
              Sentinel-2 NDVI Scale
            </span>
            <div className="space-y-1">
              {/* Smooth NDVI gradient swatch */}
              <div className="flex items-center gap-2 mb-1.5">
                <div
                  className="h-2.5 rounded-sm flex-shrink-0"
                  style={{
                    width: '80px',
                    background: 'linear-gradient(to right, #F5B02E, #A8E66B, #2E6B34)',
                  }}
                />
                <span className="text-[9px] text-slate-400 font-medium">Low → High NDVI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-3.5 rounded-xs flex-shrink-0" style={{ backgroundColor: '#2E6B34' }} />
                <span className="text-slate-700 font-semibold text-[11px]">
                  High Vegetation <span className="text-slate-400 font-normal">(≥0.55)</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-3.5 rounded-xs flex-shrink-0" style={{ backgroundColor: '#A8E66B' }} />
                <span className="text-slate-700 font-semibold text-[11px]">
                  Medium Vegetation <span className="text-slate-400 font-normal">(0.25–0.55)</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-3.5 rounded-xs flex-shrink-0" style={{ backgroundColor: '#F5B02E' }} />
                <span className="text-slate-700 font-semibold text-[11px]">
                  Low Vegetation <span className="text-slate-400 font-normal">(0.10–0.25)</span>
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Section: 100m Hexagonal Grid */}
          <div>
            <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block mb-1">
              100m Hex Grid Analysis
            </span>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-4 h-3.5 rounded-xs border border-emerald-800 bg-emerald-700/40 flex-shrink-0" />
                <span className="text-slate-700 font-semibold text-[11px]">
                  &gt;40% Cell Green Cover
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-3.5 rounded-xs border border-lime-700 bg-lime-600/30 flex-shrink-0" />
                <span className="text-slate-700 font-semibold text-[11px]">
                  15% – 40% Cell Cover
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-3.5 rounded-xs border border-amber-600 bg-amber-500/25 flex-shrink-0" />
                <span className="text-slate-700 font-semibold text-[11px]">
                  &lt;15% Cell Cover
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Section: Infrastructure & Markers */}
          <div>
            <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-wider block mb-1">
              Infrastructure &amp; Nurseries
            </span>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-amber-600 border border-white flex-shrink-0 flex items-center justify-center text-[9px] text-white">
                  🌱
                </span>
                <span className="text-slate-700 font-semibold text-[11px]">27 BMC Nurseries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#1F6B3A] border border-white flex-shrink-0 flex items-center justify-center text-[9px] text-white">
                  🌳
                </span>
                <span className="text-slate-700 font-semibold text-[11px]">Parks &amp; Gardens</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#2563EB] border border-white flex-shrink-0 flex items-center justify-center text-[9px] text-white">
                  🚶
                </span>
                <span className="text-slate-700 font-semibold text-[11px]">Walkable Route</span>
              </div>
            </div>
          </div>

          {/* Basemap & Data Note */}
          <div className="border-t border-slate-100 pt-1.5 text-[9.5px] text-slate-400 space-y-0.5 leading-tight">
            <div><strong>Basemap:</strong> Esri Light Gray Canvas (free, no API key)</div>
            <div><strong>Data:</strong> Sentinel-2 · OSM · BMC Handbook</div>
          </div>
        </div>
      )}
    </div>
  );
}
