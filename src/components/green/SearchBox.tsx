'use client';

import React, { useRef, useEffect, useState } from 'react';
import type { GeocodeResult } from '@/lib/green/types';
import { Search, X, MapPin, TreePine, Trees, Building2, Compass, Loader2 } from 'lucide-react';

interface SearchBoxProps {
  query: string;
  onQueryChange: (q: string) => void;
  results: GeocodeResult[];
  loading: boolean;
  onSelect: (result: GeocodeResult) => void;
  activeCentreName?: string;
  onResetCentre?: () => void;
}

export default function SearchBox({
  query,
  onQueryChange,
  results,
  loading,
  onSelect,
  activeCentreName,
  onResetCentre,
}: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Close results when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        listRef.current && !listRef.current.contains(e.target as Node) &&
        inputRef.current && !inputRef.current.contains(e.target as Node)
      ) {
        setSelectedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        onSelect(results[selectedIndex]);
        setSelectedIndex(-1);
        inputRef.current?.blur();
      } else if (results.length > 0) {
        onSelect(results[0]);
        setSelectedIndex(-1);
        inputRef.current?.blur();
      }
    } else if (e.key === 'Escape') {
      onQueryChange('');
      setSelectedIndex(-1);
    }
  };

  const getCategoryBadge = (res: GeocodeResult) => {
    switch (res.category) {
      case 'PARK':
        return { label: 'Park', icon: <Trees className="w-3 h-3 text-emerald-600" />, bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'FOREST':
      case 'NATURE_RESERVE':
        return { label: 'Reserve', icon: <TreePine className="w-3 h-3 text-teal-600" />, bg: 'bg-teal-50 text-teal-700 border-teal-200' };
      case 'WARD':
        return { label: 'BMC Ward', icon: <Building2 className="w-3 h-3 text-amber-600" />, bg: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'LOCALITY':
        return { label: 'Locality', icon: <MapPin className="w-3 h-3 text-blue-600" />, bg: 'bg-blue-50 text-blue-700 border-blue-200' };
      default:
        return { label: 'Place', icon: <Compass className="w-3 h-3 text-slate-500" />, bg: 'bg-slate-50 text-slate-700 border-slate-200' };
    }
  };

  return (
    <div className="relative w-full max-w-md select-none font-sans">
      {/* Search Input Bar */}
      <div className="flex items-center bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.12)] px-3.5 py-2.5 gap-2.5 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all">
        <Search className="w-4 h-4 text-emerald-600 flex-shrink-0" />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            onQueryChange(e.target.value);
            setSelectedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search any Mumbai area, ward, park, or locality..."
          className="flex-1 text-xs text-slate-800 bg-transparent outline-none placeholder:text-slate-400 font-medium"
          aria-label="Search Mumbai locality or park"
          aria-autocomplete="list"
          aria-controls="green-search-results"
          autoComplete="off"
        />

        {loading && (
          <Loader2 className="w-3.5 h-3.5 text-emerald-600 animate-spin flex-shrink-0" />
        )}

        {query.length > 0 && !loading && (
          <button
            onClick={() => {
              onQueryChange('');
              setSelectedIndex(-1);
              inputRef.current?.focus();
            }}
            className="w-5 h-5 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {results.length > 0 && (
        <ul
          ref={listRef}
          id="green-search-results"
          role="listbox"
          className="absolute top-full mt-2 left-0 right-0 bg-white/98 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.18)] z-[2000] max-h-80 overflow-y-auto overflow-x-hidden p-1.5 divide-y divide-slate-100"
        >
          {results.map((r, i) => {
            const badge = getCategoryBadge(r);
            const isSelected = i === selectedIndex;

            return (
              <li key={i} role="option" aria-selected={isSelected}>
                <button
                  onMouseDown={(e) => {
                    e.preventDefault();
                    onSelect(r);
                    setSelectedIndex(-1);
                  }}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl transition flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected ? 'bg-emerald-50 text-emerald-950' : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    <div className="mt-0.5 p-1 rounded-lg bg-slate-100 flex-shrink-0">
                      {badge.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-xs leading-tight truncate text-slate-900">
                        {r.name}
                      </div>
                      <div className="text-[10.5px] text-slate-500 truncate leading-tight mt-0.5">
                        {r.displayName}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-md border flex-shrink-0 flex items-center gap-1 ${badge.bg}`}>
                    {badge.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
