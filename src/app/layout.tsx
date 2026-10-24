import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import ParticleShell from '@/components/ui/ParticleShell';
import AppCityProvider from '@/components/city/AppCityProvider';

export const metadata: Metadata = {
  title: "PriSEHAT-Pulse | Mumbai Civic Cleanliness & Public Accountability Platform",
  description: "Make Mumbai's civic cleanliness problems visible, trackable, and accountable. Fast public reporting mapped to 24 BMC Wards and 36 Assembly Constituencies.",
  keywords: ["PriSEHAT-Pulse", "Mumbai", "BMC", "Civic Reporting", "Solid Waste Management", "Cleanliness", "Public Accountability", "Wards"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      {/* position:relative makes body a stacking context so z-index works correctly */}
      <body className="bg-[#F8FAFC] text-slate-900 min-h-screen flex flex-col font-sans antialiased relative overflow-x-hidden w-full max-w-full">
        {/* Layer 1 — decorative emerald particle atmosphere (fixed, pointer-events:none, z-0) */}
        <ParticleShell />

        {/* Layer 2 — app-wide city selection. Mounted above the nav and the page
            content so the dashboard and the Green Density explorer share one
            selected city and stay in sync. */}
        <AppCityProvider>
          {/* Layer 3 — nav (z-50 set inside Header) */}
          <Header />

          {/* Layer 4 — page content */}
          <main className="flex-1 relative z-10 bg-transparent w-full max-w-full overflow-x-hidden">
            {children}
          </main>

          <Footer />
        </AppCityProvider>
      </body>
    </html>
  );
}
