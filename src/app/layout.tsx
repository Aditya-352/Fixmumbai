import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export const metadata: Metadata = {
  title: "FixMumbai | Mumbai Civic Cleanliness & Public Accountability Platform",
  description: "Make Mumbai's civic cleanliness problems visible, trackable, and accountable. Fast public reporting mapped to 24 BMC Wards and 36 Assembly Constituencies.",
  keywords: ["FixMumbai", "Mumbai", "BMC", "Civic Reporting", "Solid Waste Management", "Cleanliness", "Public Accountability", "Wards"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-white text-slate-900 min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
