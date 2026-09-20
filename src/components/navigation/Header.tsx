'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlusCircle, MapPin, Info, Menu, X, Shield } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact 3 Simple Navigation Items as requested
  const navItems = [
    { href: '/map', label: 'Map', icon: MapPin },
    { href: '/report', label: 'Report', icon: PlusCircle },
    { href: '/about', label: 'About', icon: Info },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 text-xl font-black tracking-tight text-slate-900 group">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white font-black shadow-md shadow-red-600/20 group-hover:bg-red-700 transition">
              F
            </div>
            <div className="flex flex-col">
              <span className="leading-none text-xl font-black uppercase tracking-tight">Fix<span className="text-red-600">Mumbai</span></span>
              <span className="text-[9px] text-slate-500 font-bold tracking-widest uppercase">MUMBAI&apos;S CIVIC ISSUES, VISIBLE</span>
            </div>
          </Link>

          {/* Clean Desktop Navigation (Exact 3 Links: Map, Report, About) */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-1.5 ${
                  isActive(item.href)
                    ? 'bg-red-50 text-red-600 border border-red-200'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Primary Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/report"
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm px-6 py-2.5 rounded-full shadow-md shadow-red-600/25 flex items-center gap-2 transition active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              REPORT ISSUE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/report"
              className="bg-red-600 text-white font-black text-xs px-3.5 py-2 rounded-full flex items-center gap-1 shadow-sm"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              REPORT
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-bold ${
                isActive(item.href)
                  ? 'bg-red-50 text-red-600 border border-red-200'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <Link
              href="/report"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-red-600 text-white font-black text-center py-3.5 rounded-full text-sm block shadow-md"
            >
              + REPORT A NEW CIVIC ISSUE
            </Link>
            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1 font-semibold text-slate-600">
              <Link href="/wards" onClick={() => setMobileMenuOpen(false)} className="py-2 bg-slate-100 rounded-lg">Wards</Link>
              <Link href="/accountability" onClick={() => setMobileMenuOpen(false)} className="py-2 bg-slate-100 rounded-lg">Accountability</Link>
              <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="py-2 bg-slate-100 rounded-lg">Authority Login</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
