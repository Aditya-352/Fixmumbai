import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, RefreshCw, XCircle, UserCheck, ShieldAlert } from 'lucide-react';

interface BadgeProps {
  status: string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatusBadge({ status, size = 'md' }: BadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px] gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2'
  }[size];

  switch (status) {
    case 'SUBMITTED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-slate-100 text-slate-800 border border-slate-300 ${sizeClasses}`}>
          <Clock className="w-3.5 h-3.5 text-slate-600" />
          Submitted
        </span>
      );
    case 'ACKNOWLEDGED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-blue-50 text-blue-800 border border-blue-200 ${sizeClasses}`}>
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          Acknowledged
        </span>
      );
    case 'ASSIGNED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-purple-50 text-purple-800 border border-purple-200 ${sizeClasses}`}>
          <Clock className="w-3.5 h-3.5 text-purple-600" />
          Assigned
        </span>
      );
    case 'IN_PROGRESS':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-amber-50 text-amber-900 border border-amber-300 ${sizeClasses}`}>
          <RefreshCw className="w-3.5 h-3.5 text-amber-600 animate-spin" />
          In Progress
        </span>
      );
    case 'RESOLUTION_SUBMITTED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-cyan-50 text-cyan-900 border border-cyan-300 ${sizeClasses}`}>
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
          Resolution Submitted
        </span>
      );
    case 'VERIFIED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-red-50 text-red-700 border border-red-200 ${sizeClasses}`}>
          <UserCheck className="w-3.5 h-3.5 text-red-600" />
          Verified Cleaned
        </span>
      );
    case 'REOPENED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-rose-100 text-rose-900 border border-rose-300 ${sizeClasses}`}>
          <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
          Reopened
        </span>
      );
    case 'REJECTED':
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-slate-200 text-slate-700 border border-slate-300 ${sizeClasses}`}>
          <XCircle className="w-3.5 h-3.5 text-slate-500" />
          Rejected
        </span>
      );
    default:
      return (
        <span className={`inline-flex items-center font-bold rounded-full bg-slate-100 text-slate-800 ${sizeClasses}`}>
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
