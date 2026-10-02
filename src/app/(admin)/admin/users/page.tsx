import React from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';
import { User, Shield } from 'lucide-react';

export default async function AdminUsersPage() {
  const users = await db.user.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <div className="text-purple-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <User className="w-4 h-4" /> Role-Based Access Control
          </div>
          <h1 className="text-3xl font-black text-white mt-1">User & Role Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage system administrators, ward operators, and content moderators.
          </p>
        </div>

        <Link href="/admin" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-2 rounded-lg">
          &larr; Back to Admin
        </Link>
      </div>

      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="p-3.5">Name</th>
              <th className="p-3.5">Email</th>
              <th className="p-3.5">Role</th>
              <th className="p-3.5 text-right">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {users.map(u => (
              <tr key={u.id} className="hover:bg-slate-800/50">
                <td className="p-3.5 font-bold text-white">{u.name}</td>
                <td className="p-3.5 text-slate-400">{u.email}</td>
                <td className="p-3.5">
                  <span className="px-2.5 py-1 rounded text-[10px] bg-slate-950 border border-slate-800 text-emerald-400 font-mono font-bold">
                    {u.role}
                  </span>
                </td>
                <td className="p-3.5 text-right font-mono text-slate-500">
                  {new Date(u.createdAt).toLocaleDateString('en-IN')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
