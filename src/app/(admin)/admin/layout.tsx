import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib/auth';
import Link from 'next/link';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session || !['AUTHORITY_ADMIN', 'SUPER_ADMIN'].includes(session.role)) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-slate-800 bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-black text-emerald-400">FixMumbai Authority</span>
            <span className="text-xs text-slate-400 truncate">
              {session.name} · {session.email}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="text-xs text-slate-300 hover:text-white"
            >
              Dashboard
            </Link>
            <form action="/civic/api/auth/logout" method="post">
              <button
                type="submit"
                className="text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
