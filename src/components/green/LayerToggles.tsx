'use client';

import React from 'react';
import { DENSITY_META } from '@/lib/green/config';

interface LayerTogglesProps {
  layers: { HIGH: boolean; MEDIUM: boolean; LOW: boolean };
  onChange: (cls: 'HIGH' | 'MEDIUM' | 'LOW') => void;
  disabled?: boolean;
  disabledTooltip?: string;
}

export default function LayerToggles({
  layers,
  onChange,
  disabled = false,
  disabledTooltip = 'NDVI satellite composite pending GEE processing',
}: LayerTogglesProps) {
  const entries: Array<{ cls: 'HIGH' | 'MEDIUM' | 'LOW' }> = [
    { cls: 'HIGH' },
    { cls: 'MEDIUM' },
    { cls: 'LOW' },
  ];

  return (
    <div
      className={`space-y-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      role="group"
      aria-label="Vegetation density layer toggles"
      title={disabled ? disabledTooltip : undefined}
    >
      {entries.map(({ cls }) => {
        const meta = DENSITY_META[cls];
        const checked = !disabled && layers[cls];
        const id = `ndvi-layer-${cls.toLowerCase()}`;

        return (
          <div key={cls} className="flex items-center justify-between">
            <label
              htmlFor={id}
              className={`flex items-center gap-2 select-none ${
                disabled ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <span
                className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
                style={{ background: meta.colour }}
                aria-hidden="true"
              />
              <span className="text-xs font-bold text-slate-800">{meta.label}</span>
              {meta.range && (
                <span className="text-[10px] text-slate-400 font-normal">({meta.range})</span>
              )}
            </label>

            {/* Toggle switch */}
            <button
              id={id}
              role="switch"
              disabled={disabled}
              aria-checked={checked}
              onClick={() => !disabled && onChange(cls)}
              className={`relative inline-flex h-4.5 w-8.5 items-center rounded-full transition-colors ${
                disabled
                  ? 'bg-slate-200 cursor-not-allowed'
                  : checked
                  ? 'bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  : 'bg-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500'
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
                  checked ? 'translate-x-4' : 'translate-x-0.5'
                }`}
              />
              <span className="sr-only">
                {meta.label} layer {checked ? 'on' : 'off'}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
