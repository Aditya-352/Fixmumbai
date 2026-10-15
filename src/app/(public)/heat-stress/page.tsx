import React from 'react';
import type { Metadata } from 'next';
import HeatStressDashboard from '@/components/heat-stress/HeatStressDashboard';

export const metadata: Metadata = {
  title: 'WBGT Heat Stress Map | PriSEHAT-Pulse — Empirical Biophysical Modeling',
  description:
    'Monitor real-time Wet-Bulb Globe Temperature (WBGT) and thermal load across Mumbai. Powered by Stull-modified natural wet-bulb formulations and live satellite telemetry.',
  keywords: ['Mumbai WBGT', 'Heat stress map', 'Wet Bulb Globe Temperature', 'Thermal strain', 'PriSEHAT-Pulse'],
};

export default function HeatStressPage() {
  return <HeatStressDashboard />;
}
