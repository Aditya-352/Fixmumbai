'use client';

import React, { useState, useRef } from 'react';
import { Sliders } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE (Reported)',
  afterLabel = 'AFTER (Resolved)'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-bold text-slate-800">
        <span className="px-2.5 py-1 bg-red-100 text-red-800 rounded border border-red-300">
          {beforeLabel}
        </span>
        <span className="text-slate-500 font-medium hidden sm:inline">Drag divider to compare ground evidence</span>
        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded border border-emerald-300">
          {afterLabel}
        </span>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200 select-none cursor-ew-resize group"
      >
        {/* AFTER Image (Background) */}
        <img
          src={afterImage}
          alt="After resolution"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE Image (Clipped Overlay) */}
        <div
          className="absolute top-0 bottom-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before report"
            className="absolute top-0 bottom-0 left-0 w-full max-w-none h-full object-cover"
            style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%' }}
          />
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 rounded-full bg-red-600 text-white border-2 border-white shadow-xl flex items-center justify-center">
            <Sliders className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
