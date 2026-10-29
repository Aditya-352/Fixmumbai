import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const GreenExplorer = dynamic(() => import('@/components/green/GreenExplorer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100dvh-64px)] bg-[#F7F9F8] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-[#64746B]">
        <div className="w-9 h-9 rounded-full border-4 border-[#087F5B] border-t-transparent animate-spin" />
        <span className="text-sm font-bold text-[#14231D]">Loading Green Density Explorer…</span>
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Green Density Explorer | PriSEHAT-Pulse — Vegetation & Walkable Green Spaces',
  description:
    'Explore Mumbai\'s green spaces with satellite-derived NDVI vegetation density (Sentinel-2) and OpenStreetMap walkability evidence. Find walkable parks and nature areas near you.',
  keywords: ['Mumbai green spaces', 'NDVI', 'parks', 'walkability', 'vegetation map', 'PriSEHAT-Pulse'],
};

/**
 * /pulse/green — Green Density & Nature Exploration
 */
export default function GreenPage() {
  return <GreenExplorer />;
}

