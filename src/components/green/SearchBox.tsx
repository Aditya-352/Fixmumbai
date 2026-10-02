'use client';

import React, { useRef, useEffect } from 'react';
import type { GeocodeResult } from '@/lib/green/types';

interface SearchBoxProps {
  query: string;
  onQueryChange: (q: string) => void;
  results: GeocodeResult[];
  loading: boolean;
  onSelect: (result: GeocodeResult) => void;
}

export default function SearchBox({
  query,
  onQueryChange,
  results,
  loading,
  onSelect,
}: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Close results when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        listRef.current && !listRef.current.contains(e.target as Node) &&
        inputRef.current && !inputRef.current.contains(e.target as Node)
      ) {
        onQueryChange('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onQueryChange]);

  return (
    <div className="relative w-full max-w-sm">
      {/* Input */}
      <div className="flex items-center bg-white border border-slate-200 rounded-xl shadow-md px-3 py-2 gap-2 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19A8 8 0 103 11a8 8 0 008 8z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search location (e.g. Bandra, Andheri…)"
          className="flex-1 text-sm text-slate-800 bg-transparent outline-none placeholder:text-slate-400 font-medium"
          aria-label="Search location"
          aria-autocomplete="list"
          aria-controls="green-search-results"
          autoComplete="off"
        />
        {loading && (
          <div className="w-3 h-3 rounded-full border-2 border-green-500 border-t-transparent animate-spin flex-shrink-0" aria-label="Searching…" />
        )}
      </div>

      {/* Results dropdown */}
      {results.length > 0 && (
        <ul
          ref={listRef}
          id="green-search-results"
          role="listbox"
          className="absolute top-full mt-1 left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-xl z-10 overflow-hidden"
        >
          {results.map((r, i) => (
            <li key={i} role="option" aria-selected={false}>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  onSelect(r);
                }}
                className="w-full text-left px-4 py-2.5 text-sm text-slate-800 hover:bg-green-50 focus:bg-green-50 focus:outline-none transition flex flex-col gap-0.5"
              >
                <span className="font-semibold">{r.name}</span>
                <span className="text-xs text-slate-400 truncate">{r.displayName}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
