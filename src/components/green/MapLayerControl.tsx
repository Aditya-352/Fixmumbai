'use client';

import React, { useState } from 'react';
import type { LayerVisibilityState } from '@/lib/green/types';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';

export interface MapLayerControlProps {
  layerVisibility: LayerVisibilityState;
  onToggleLayer: (layer: keyof LayerVisibilityState) => void;
  onSetBasemap: (mode: 'light' | 'satellite') => void;
  onOpenMobileLayers?: () => void;
}

interface ToggleRowProps {
  dot?: string;
  icon?: React.ReactNode;
  label: string;
  sublabel?: string;
  checked: boolean;
  onChange: () => void;
}

export function ToggleRow({ dot, icon, label, sublabel, checked, onChange }: ToggleRowProps) {
  return (
    <label className="flex items-center justify-between px-2.5 py-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors select-none group min-h-[44px]">
      <div className="flex items-center gap-2.5 min-w-0">
        {dot && (
          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: dot }} />
        )}
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <div className="min-w-0">
          <span className="font-bold text-slate-800 text-[12px] leading-tight block">{label}</span>
          {sublabel && (
            <span className="text-[10px] text-slate-400 font-medium leading-tight block">{sublabel}</span>
          )}
        </div>
      </div>
      {/* Custom toggle switch */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`relative flex-shrink-0 w-9 h-5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 ${
          checked ? 'bg-emerald-600' : 'bg-slate-200'
        }`}
        style={{ height: '20px', width: '36px' }}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            checked ? 'translate-x-4' : 'translate-x-0'
          }`}
          style={{ width: '16px', height: '16px' }}
        />
      </button>
    </label>
  );
}

export function MapLayerControlContent({
  layerVisibility,
  onToggleLayer,
  onSetBasemap,
}: MapLayerControlProps) {
  return (
    <div className="space-y-4">
      {/* ── Basemap ── */}
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 px-1">
          Basemap Mode
        </p>
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100/90 rounded-xl">
          <button
            onClick={() => onSetBasemap('light')}
            className={`py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
              layerVisibility.basemap === 'light'
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ☀️ <span>Light</span>
          </button>
          <button
            onClick={() => onSetBasemap('satellite')}
            className={`py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
              layerVisibility.basemap === 'satellite'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🛰 <span>Satellite</span>
          </button>
        </div>
      </div>

      {/* ── Overlays ── */}
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 px-1">
          Map Features &amp; Overlays
        </p>
        <div className="space-y-1 bg-slate-50/70 p-1.5 rounded-xl border border-slate-100">
          <ToggleRow
            dot="#087F5B"
            label="Green Spaces"
            sublabel="Parks, Gardens & Reserves"
            checked={layerVisibility.greenSpaces}
            onChange={() => onToggleLayer('greenSpaces')}
          />
          <ToggleRow
            dot="#d97706"
            label="BMC Nurseries"
            sublabel="Handbook verified municipal nurseries"
            checked={layerVisibility.nurseries}
            onChange={() => onToggleLayer('nurseries')}
          />
        </div>
      </div>

      {/* ── Analysis Grid ── */}
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 px-1">
          Spatial Intelligence
        </p>
        <div className="space-y-1 bg-slate-50/70 p-1.5 rounded-xl border border-slate-100">
          <ToggleRow
            icon={
              <span className="text-emerald-600 text-sm leading-none font-black">⬡</span>
            }
            label="100m Hex Grid"
            sublabel="Canopy cover analysis (Turf.js)"
            checked={layerVisibility.hexGrid}
            onChange={() => onToggleLayer('hexGrid')}
          />
        </div>
      </div>
    </div>
  );
}

export default function MapLayerControl({
  layerVisibility,
  onToggleLayer,
  onSetBasemap,
  onOpenMobileLayers,
}: MapLayerControlProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile compact floating layer button (sm:hidden) */}
      <div className="sm:hidden absolute top-3 right-3 z-[1000]">
        <button
          onClick={() => {
            if (onOpenMobileLayers) {
              onOpenMobileLayers();
            } else {
              setIsOpen(!isOpen);
            }
          }}
          className="w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center text-slate-800 hover:text-emerald-700 active:scale-95 transition-all"
          aria-label="Open map layers"
          title="Map Layers"
        >
          <Layers className="w-4 h-4 text-emerald-700" />
        </button>
      </div>

      {/* Desktop floating dropdown control (hidden sm:block) */}
      <div className="hidden sm:block absolute top-3.5 right-3.5 z-[1000] font-sans">
        <div
          className="bg-white/97 backdrop-blur-md rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-slate-200/80 overflow-hidden transition-all duration-200"
          style={{ minWidth: '220px' }}
        >
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
            <div className="px-3 pb-3 pt-2 border-t border-slate-100">
              <MapLayerControlContent
                layerVisibility={layerVisibility}
                onToggleLayer={onToggleLayer}
                onSetBasemap={onSetBasemap}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

