import React from 'react';
import type { Metadata } from 'next';
import GreenExplorer from '@/components/green/GreenExplorer';

export const metadata: Metadata = {
  title: 'Green Density Explorer | FixMumbai — Vegetation & Walkable Green Spaces',
  description:
    'Explore Mumbai\'s green spaces with satellite-derived NDVI vegetation density (Sentinel-2) and OpenStreetMap walkability evidence. Find walkable parks and nature areas near you.',
  keywords: ['Mumbai green spaces', 'NDVI', 'parks', 'walkability', 'vegetation map', 'FixMumbai'],
};

/**
 * /civic/green — Green Density & Nature Exploration
 *
 * The GreenExplorer component is fully client-rendered (next/dynamic ssr:false
 * for the Leaflet map). This server component only provides the SEO wrapper.
 */
export default function GreenPage() {
  return (
    <>
      {/* GreenExplorer fills the viewport below the site header */}
      <GreenExplorer />
    </>
  );
}
