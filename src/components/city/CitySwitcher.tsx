'use client';

/**
 * CitySwitcher — compact, accessible city selector for the dashboard hero.
 *
 * Reads and writes the app-wide selected city through `useCitySelection()`,
 * so choosing a city here is the same act as choosing it in the Green Density
 * explorer. Both stay in sync because they share one provider.
 *
 * Accessibility:
 *  - a real `button` with `aria-haspopup="listbox"` / `aria-expanded`,
 *  - the popup is a `listbox` with `role="option"` children and
 *    `aria-selected` on the active city,
 *  - full keyboard support: Enter/Space to open, ArrowUp/Down to move,
 *    Home/End to jump, Enter to commit, Escape to dismiss, Tab to leave,
 *  - focus returns to the trigger when the popup closes,
 *  - the active option carries an emerald active state and a visible ring.
 */

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { MapPin, Check, ChevronDown } from 'lucide-react';
import { useCitySelection } from '@/components/green/CitySelection';
import { getCity } from '@/lib/green/config';
import { getCityHero } from '@/lib/green/city-heroes';
import type { CityId } from '@/lib/green/config';

const shortName = (id: CityId): string =>
  getCity(id).name.replace(/,\s*India\s*$/, '').trim() || getCityHero(id).shortName;

export default function CitySwitcher({ className = '' }: { className?: string }) {
  const { cityId, options, selectCity } = useCitySelection();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const listboxId = useId();

  const ids = options.map((o) => o.id);
  const currentIndex = Math.max(0, ids.indexOf(cityId));
  const currentLabel = shortName(cityId);

  const close = useCallback(
    (returnFocus = true) => {
      setOpen(false);
      if (returnFocus) triggerRef.current?.focus();
    },
    []
  );

  const commit = useCallback(
    (id: CityId) => {
      selectCity(id);
      close();
    },
    [selectCity, close]
  );

  // Close when the pointer goes outside the control.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  // Keep the highlighted option in view while navigating with the keyboard.
  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [open, activeIndex]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(currentIndex);
        setOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        close();
        break;
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % ids.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + ids.length) % ids.length);
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(ids.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (ids[activeIndex]) commit(ids[activeIndex]);
        break;
      case 'Tab':
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div ref={rootRef} className={`relative ${className}`} onKeyDown={onKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        aria-label={`Selected city: ${currentLabel}. Change city`}
        onClick={() => {
          setActiveIndex(currentIndex);
          setOpen((v) => !v);
        }}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#087F5B]/25 bg-white/90 backdrop-blur-sm pl-2.5 pr-2 py-1.5 text-[#087F5B] shadow-sm transition-all duration-200 hover:bg-white hover:border-[#087F5B]/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] motion-reduce:transition-none"
      >
        <MapPin className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
        <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider whitespace-nowrap">
          {currentLabel}
        </span>
        <ChevronDown
          className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-label="Select city"
          aria-activedescendant={`${listboxId}-${ids[activeIndex]}`}
          className="absolute z-30 mt-1.5 right-0 min-w-[164px] rounded-2xl border border-[#E5EBE7] bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(8,127,91,0.18)] py-1 overflow-hidden animate-fadeIn"
        >
          {options.map((o, i) => {
            const selected = o.id === cityId;
            const highlighted = i === activeIndex;
            return (
              <li
                key={o.id}
                id={`${listboxId}-${o.id}`}
                role="option"
                aria-selected={selected}
                data-index={i}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => commit(o.id)}
                className={`flex items-center justify-between gap-2 px-3 py-2 text-xs font-bold cursor-pointer transition-colors ${
                  highlighted ? 'bg-[#EAF7F0] text-[#087F5B]' : 'text-[#14231D]'
                }`}
              >
                <span className="truncate">{shortName(o.id)}</span>
                {selected && <Check className="w-3.5 h-3.5 flex-shrink-0 text-[#087F5B]" aria-hidden="true" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
