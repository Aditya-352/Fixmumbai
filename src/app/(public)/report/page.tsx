import React from 'react';
import ReportingWizard from '@/components/report/ReportingWizard';

export default function ReportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="text-3xl font-black text-white">Report Civic Cleanliness Issue</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Fast public reporting under 30 seconds. No login required. Automatically mapped to your BMC Administrative Ward and Assembly Constituency.
        </p>
      </div>

      <ReportingWizard />
    </div>
  );
}
