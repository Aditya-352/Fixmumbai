'use client';

import React from 'react';
import { DENSITY_META, NDVI } from '@/lib/green/config';

interface LayerTogglesProps {
  layers: { HIGH: boolean; MEDIUM: boolean; LOW: boolean };
  onChange: (cls: 'HIGH' | 'MEDIUM' | 'LOW') => void;
}

export default function LayerToggles({ layers, onChange }: LayerTogglesProps) {
  const entries: Array<{ cls: 'HIGH' | 'MEDIUM' | 'LOW' }> = [
    { cls: 'HIGH' },
    { cls: 'MEDIUM' },
    { cls: 'LOW' },
  ];

  return (
    <div className="space-y-2" role="group" aria-label="Vegetation density layer toggles">
      {entries.map(({ cls }) => {
        const meta = DENSITY_META[cls];
        const checked = layers[cls];
        const id = `ndvi-layer-${cls.toLowerCase()}`;

        return (
          <div key={cls} className="flex items-center justify-between">
            <label htmlFor={id} className="flex items-center gap-2 cursor-pointer select-none">
              <span
                className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
                style={{ background: meta.colour }}
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-slate-800">{meta.label}</span>
              {meta.range && (
                <span className="text-xs text-slate-400 font-normal">({meta.range})</span>
              )}
            </label>

            {/* Toggle switch */}
            <button
              id={id}
              role="switch"
              aria-checked={checked}
              onClick={() => onChange(cls)}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 ${
                checked ? 'bg-green-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
                  checked ? 'translate-x-4.5' : 'translate-x-0.5'
                }`}
              />
              <span className="sr-only">{meta.label} layer {checked ? 'on' : 'off'}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
