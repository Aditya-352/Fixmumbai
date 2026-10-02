'use client';

import React from 'react';
import { DENSITY_META } from '@/lib/green/config';

export default function GreenLegend() {
  return (
    <div
      className="absolute bottom-14 right-3 z-[1000] bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl shadow-lg p-3 text-xs min-w-[180px]"
      role="region"
      aria-label="Map legend"
    >
      <div className="font-black text-slate-800 text-[11px] uppercase tracking-wider mb-2">Legend</div>

      {/* NDVI classes */}
      {(['HIGH', 'MEDIUM', 'LOW'] as const).map((cls) => {
        const meta = DENSITY_META[cls];
        return (
          <div key={cls} className="flex items-center gap-2 mb-1">
            <span
              className="w-4 h-3 rounded-sm flex-shrink-0 border border-white/50"
              style={{ background: meta.colour }}
              aria-hidden="true"
            />
            <span className="text-slate-700 font-medium">
              {meta.label}
              {meta.range && (
                <span className="text-slate-400 ml-1 font-normal">({meta.range})</span>
              )}
            </span>
          </div>
        );
      })}

      <div className="border-t border-slate-100 my-2" />

      {/* Markers */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-base leading-none" aria-hidden="true">🌳</span>
        <span className="text-slate-700 font-medium">Park / Green Space</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-base leading-none" aria-hidden="true">🚶</span>
        <span className="text-slate-700 font-medium">Walkable Route (verified)</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span
          className="w-4 h-0 border-t-2 border-dashed border-blue-500 flex-shrink-0"
          style={{ borderStyle: 'dashed' }}
          aria-hidden="true"
        />
        <span className="text-slate-700 font-medium">Accessible Area (public tag)</span>
      </div>

      {/* Source note */}
      <div className="border-t border-slate-100 mt-2 pt-1.5 text-[10px] text-slate-400 leading-tight">
        NDVI: Sentinel-2 · Walkability: OSM
      </div>
    </div>
  );
}
