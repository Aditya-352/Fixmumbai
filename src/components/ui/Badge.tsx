import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, RefreshCw, XCircle, UserCheck, ShieldAlert } from 'lucide-react';

interface BadgeProps {
  status: string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, size = 'md' }: BadgeProps) {
  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-[11px] gap-1',
    md: 'px-3 py-1 text-xs gap-1.5',
    lg: 'px-3.5 py-1.5 text-sm gap-2'
  }[size];

  switch (status) {
    case 'SUBMITTED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-sm ${sizeClasses}`}>
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          Submitted
        </span>
      );
    case 'ACKNOWLEDGED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-200 shadow-sm ${sizeClasses}`}>
          <Clock className="w-3.5 h-3.5 text-blue-500" />
          Acknowledged
        </span>
      );
    case 'ASSIGNED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-purple-50 text-purple-700 border border-purple-200 shadow-sm ${sizeClasses}`}>
          <Clock className="w-3.5 h-3.5 text-purple-500" />
          Assigned
        </span>
      );
    case 'IN_PROGRESS':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-amber-50 text-amber-800 border border-amber-200 shadow-sm ${sizeClasses}`}>
          <RefreshCw className="w-3.5 h-3.5 text-amber-600 animate-spin" />
          In Progress
        </span>
      );
    case 'RESOLUTION_SUBMITTED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-teal-50 text-teal-800 border border-teal-200 shadow-sm ${sizeClasses}`}>
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
          Resolution Submitted
        </span>
      );
    case 'VERIFIED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm ${sizeClasses}`}>
          <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
          Verified Cleaned
        </span>
      );
    case 'REOPENED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-rose-50 text-rose-800 border border-rose-200 shadow-sm ${sizeClasses}`}>
          <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
          Reopened
        </span>
      );
    case 'REJECTED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-slate-100 text-slate-500 border border-slate-200 line-through ${sizeClasses}`}>
          <XCircle className="w-3.5 h-3.5 text-slate-400" />
          Rejected
        </span>
      );
    default:
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-slate-100 text-slate-700 border border-slate-200 ${sizeClasses}`}>
          {status}
        </span>
      );
  }
}

export function SeverityBadge({ severity }: { severity: string }) {
  if (severity === 'HIGH') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-red-100 text-red-800 border border-red-300">
        <AlertTriangle className="w-3 h-3 text-red-600" />
        High Priority
      </span>
    );
  }
  if (severity === 'MEDIUM') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
        Medium Priority
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-300">
      Low Priority
    </span>
  );
}
