'use client';

import dynamic from 'next/dynamic';

// Dynamic import with ssr:false inside a Client Component
// This prevents any SSR execution and avoids the useContext null error
const EmeraldParticleLayer = dynamic(
  () => import('./EmeraldParticleLayer'),
  { ssr: false, loading: () => null }
);

export default function ParticleShell() {
  return <EmeraldParticleLayer />;
}
