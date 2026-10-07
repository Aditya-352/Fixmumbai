'use client';

import React, { useState } from 'react';
import type { LayerVisibilityState } from '@/lib/green/types';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';

interface MapLayerControlProps {
  layerVisibility: LayerVisibilityState;
  onToggleLayer: (layer: keyof LayerVisibilityState) => void;
  onSetBasemap: (mode: 'light' | 'satellite') => void;
}

interface ToggleRowProps {
  dot?: string;
  icon?: React.ReactNode;
  label: string;
  sublabel?: string;
  checked: boolean;
  onChange: () => void;
}

function ToggleRow({ dot, icon, label, sublabel, checked, onChange }: ToggleRowProps) {
  return (
    <label className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors select-none group">
      <div className="flex items-center gap-2 min-w-0">
        {dot && (
          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: dot }} />
        )}
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <div className="min-w-0">
          <span className="font-semibold text-slate-700 text-[11.5px] leading-tight block">{label}</span>
          {sublabel && (
            <span className="text-[9.5px] text-slate-400 font-medium leading-tight block">{sublabel}</span>
          )}
        </div>
      </div>
      {/* Custom toggle switch */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`relative flex-shrink-0 w-8 h-4.5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 ${
          checked ? 'bg-emerald-500' : 'bg-slate-200'
        }`}
        style={{ height: '18px', width: '32px' }}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            checked ? 'translate-x-3.5' : 'translate-x-0'
          }`}
          style={{ width: '14px', height: '14px' }}
        />
      </button>
    </label>
  );
}

export default function MapLayerControl({
  layerVisibility,
  onToggleLayer,
  onSetBasemap,
}: MapLayerControlProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-3.5 right-3.5 z-[1000] font-sans">
      <div className="bg-white/97 backdrop-blur-md rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-slate-200/80 overflow-hidden transition-all duration-200" style={{ minWidth: '210px' }}>

        {/* Header toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-3.5 py-2.5 text-xs font-black text-slate-800 hover:bg-slate-50/80 transition-colors gap-2"
          aria-expanded={isOpen}
          aria-label="Toggle map layers"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <span className="tracking-tight text-[12px]">Map Layers &amp; Grid</span>
          </div>
          {isOpen ? (
            <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          )}
        </button>

        {/* Panel body */}
        {isOpen && (
          <div className="px-2.5 pb-3 pt-1 border-t border-slate-100 space-y-3">

            {/* ── Basemap ── */}
            <div>
              <p className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1.5 px-1">
                Basemap
              </p>
              <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100/80 rounded-xl">
                <button
                  onClick={() => onSetBasemap('light')}
                  className={`py-1.5 rounded-lg font-bold text-[10.5px] transition-all ${
                    layerVisibility.basemap === 'light'
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  ☀️ Light
                </button>
                <button
                  onClick={() => onSetBasemap('satellite')}
                  className={`py-1.5 rounded-lg font-bold text-[10.5px] transition-all ${
                    layerVisibility.basemap === 'satellite'
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  🛰 Satellite
                </button>
              </div>
            </div>

            {/* ── Overlays ── */}
            <div>
              <p className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1 px-1">
                Overlays
              </p>
              <div className="space-y-0.5">
                <ToggleRow
                  dot="#d97706"
                  label="BMC Nurseries"
                  sublabel="All 27 • Handbook verified"
                  checked={layerVisibility.nurseries}
                  onChange={() => onToggleLayer('nurseries')}
                />
              </div>
            </div>

            {/* ── Analysis Grid ── */}
            <div>
              <p className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest mb-1 px-1">
                Analysis Grid
              </p>
              <ToggleRow
                icon={
                  <span className="text-emerald-600 text-[12px] leading-none">⬡</span>
                }
                label="100m Hex Grid"
                sublabel="Zoom ≥ 13 to render • Turf.js"
                checked={layerVisibility.hexGrid}
                onChange={() => onToggleLayer('hexGrid')}
              />
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
