import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib/auth';

type LoginPageProps = {
  searchParams: {
    error?: string;
  };
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const session = await getServerSession();

  if (session && ['AUTHORITY_ADMIN', 'SUPER_ADMIN'].includes(session.role)) {
    redirect('/admin');
  }

  const errorMessage =
    searchParams.error === 'not_authorized'
      ? 'This Google account is not authorized for authority access.'
      : searchParams.error === 'google_error'
        ? 'Google sign-in could not be completed. Please try again.'
        : searchParams.error === 'invalid_state'
          ? 'The sign-in session expired. Please try again.'
          : null;

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="mb-8">
          <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
            FixMumbai Authority Portal
          </div>
          <h1 className="text-3xl font-black text-white mt-2">
            Authority Login
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Sign in with a Google account that has been explicitly added to the
            authority users table.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
            {errorMessage}
          </div>
        )}

        <a
          href="/civic/api/auth/google"
          className="w-full inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 px-4 rounded-xl transition"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path fill="#4285F4" d="M21.35 12.27c0-.7-.06-1.37-.18-2.02H12v3.83h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.2Z" />
            <path fill="#34A853" d="M12 21.75c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.29v2.53A9.75 9.75 0 0 0 12 21.75Z" />
            <path fill="#FBBC05" d="M6.54 13.84A5.86 5.86 0 0 1 6.23 12c0-.64.11-1.26.31-1.84V7.63H3.29A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.37l3.25-2.53Z" />
            <path fill="#EA4335" d="M12 6.13c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.11 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.71 5.38l3.25 2.53C7.31 7.85 9.46 6.13 12 6.13Z" />
          </svg>
          Continue with Google
        </a>

        <p className="text-[11px] leading-relaxed text-slate-500 mt-6">
          Access is controlled by the email addresses stored in the database.
          Adding an account does not require storing or handling its Google
          password.
        </p>
      </div>
    </main>
  );
}
