'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { StatusBadge, SeverityBadge } from '@/components/ui/Badge';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import VerificationModal from '@/components/verification/VerificationModal';
import MumbaiMap from '@/components/map/MumbaiMap';
import { Shield, MapPin, Building2, User, Clock, CheckCircle2, AlertTriangle, ArrowLeft, Share2, Copy, Check } from 'lucide-react';

export default function PublicReportDetailPage() {
  const params = useParams();
  const reportId = params.id as string;

  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchReport = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/reports/${reportId}`);
      const data = await res.json();
      if (data.success) {
        setReport(data.data);
      } else {
        throw new Error(data.error || 'Case file not found');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, [reportId]);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `FixMumbai Public Report ${report?.publicReportId}`,
          text: `Civic issue report at ${report?.locality}`,
          url: shareUrl
        });
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center text-slate-500 space-y-3">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <div className="text-sm font-bold text-slate-700">Loading Case File {reportId}...</div>
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <AlertTriangle className="w-12 h-12 text-rose-600 mx-auto" />
        <h2 className="text-2xl font-black text-slate-900">Case File Not Found</h2>
        <p className="text-xs text-slate-500 font-medium">{error || 'The requested public report ID does not exist.'}</p>
        <Link href="/map" className="inline-block bg-red-600 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md">
          Return to Public Map
        </Link>
      </div>
    );
  }

  const latestEvidence = report.resolutionEvidence?.[0];
  const mapMarkers = [{
    id: report.id,
    publicReportId: report.publicReportId,
    locality: report.locality,
    categoryName: report.category.name,
    status: report.status,
    latitude: report.latitude,
    longitude: report.longitude,
    wardCode: report.bmcWard?.wardCode
  }];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 bg-white text-slate-900">
      {/* Top Breadcrumb & Share */}
      <div className="flex items-center justify-between">
        <Link href="/map" className="text-xs text-slate-600 hover:text-red-600 font-bold flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Public Map
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-600" />}
            {copied ? 'Link Copied!' : 'Share Report'}
          </button>

          <span className="font-mono font-bold text-red-600 text-sm bg-red-50 px-3 py-1 rounded-full border border-red-200">
            {report.publicReportId}
          </span>
        </div>
      </div>

      {/* Main Case Header */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-black text-red-600 uppercase tracking-wider">{report.category.name}</span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">{report.locality}</h1>
            <div className="text-xs text-slate-500 font-semibold pt-1">
              Reported on {new Date(report.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SeverityBadge severity={report.severity} />
            <StatusBadge status={report.status} size="lg" />
          </div>
        </div>

        <p className="text-sm text-slate-800 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200 font-medium">
          &quot;{report.description}&quot;
        </p>

        {/* Verification Alert Callout */}
        {['RESOLUTION_SUBMITTED', 'IN_PROGRESS'].includes(report.status) && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Citizen Ground Verification Active
              </div>
              <p className="text-[11px] text-slate-600 font-medium">
                Were you at this location? Confirm if the cleanup was actually completed.
              </p>
            </div>
            <button
              onClick={() => setShowVerificationModal(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-full shrink-0 shadow-md"
            >
              Verify Ground Resolution
            </button>
          </div>
        )}
      </div>

      {/* Photo Evidence & Resolution Slider */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <Shield className="w-5 h-5 text-red-600" />
          Cleanliness Evidence Photo
        </h2>

        {latestEvidence && latestEvidence.afterImagePath ? (
          <BeforeAfterSlider
            beforeImage={report.photos[0]?.storagePath || 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60'}
            afterImage={latestEvidence.afterImagePath}
          />
        ) : (
          <div className="aspect-video max-h-96 rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
            <img
              src={report.photos[0]?.storagePath || 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60'}
              alt="Evidence photo"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Report Location GIS Map */}
      <div className="space-y-3">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-600" /> Exact Location Map
        </h2>
        <MumbaiMap
          reports={mapMarkers}
          center={[report.latitude, report.longitude]}
          zoom={14}
          height="360px"
        />
      </div>

      {/* Geographic Boundary Hierarchy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
          <div className="text-slate-500 text-xs font-bold flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-red-600" /> BMC Administrative Ward
          </div>
          <div className="text-base font-black text-slate-900">
            Ward {report.bmcWard?.wardCode || 'N/A'} ({report.bmcWard?.regionZone || 'Mumbai'})
          </div>
          <p className="text-xs text-slate-500 font-medium">{report.bmcWard?.wardName}</p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
          <div className="text-slate-500 text-xs font-bold flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-600" /> Assembly Constituency
          </div>
          <div className="text-base font-black text-slate-900">
            {report.assemblyConstituency ? `${report.assemblyConstituency.acNumber} - ${report.assemblyConstituency.acName}` : 'N/A'}
          </div>
          <div className="text-xs text-slate-500 font-medium">
            MLA: {report.assemblyConstituency?.representatives?.[0]?.name || 'N/A'}
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1">
          <div className="text-slate-500 text-xs font-bold flex items-center gap-1.5">
            <User className="w-4 h-4 text-purple-600" /> Parliamentary Constituency
          </div>
          <div className="text-base font-black text-slate-900">
            {report.parliamentaryConstituency ? `${report.parliamentaryConstituency.pcNumber} - ${report.parliamentaryConstituency.pcName}` : 'N/A'}
          </div>
          <div className="text-xs text-slate-500 font-medium">
            MP: {report.parliamentaryConstituency?.representatives?.[0]?.name || 'N/A'}
          </div>
        </div>
      </div>

      {/* Case Timeline */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-600" />
          Report Timeline
        </h2>

        <div className="relative pl-6 border-l-2 border-slate-300 space-y-6">
          {report.timelineEvents.map((evt: any) => (
            <div key={evt.id} className="relative group">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-white border-2 border-red-600 shadow-sm" />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-red-600 uppercase font-mono">{evt.eventType}</span>
                  <span className="text-[10px] text-slate-500 font-mono font-semibold">
                    {new Date(evt.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-medium">{evt.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Citizen Verification Modal */}
      {showVerificationModal && (
        <VerificationModal
          reportId={report.id}
          publicReportId={report.publicReportId}
          onClose={() => setShowVerificationModal(false)}
          onSuccess={() => {
            setShowVerificationModal(false);
            fetchReport();
          }}
        />
      )}
    </div>
  );
}
