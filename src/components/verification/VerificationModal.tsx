'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, Star, AlertTriangle, ShieldCheck } from 'lucide-react';

interface VerificationModalProps {
  reportId: string;
  publicReportId: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function VerificationModal({
  reportId,
  publicReportId,
  onClose,
  onSuccess
}: VerificationModalProps) {
  const [isResolved, setIsResolved] = useState<boolean | null>(null);
  const [rating, setRating] = useState<number>(5);
  const [comments, setComments] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (isResolved === null) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/reports/${reportId}/verification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          isResolved,
          rating: isResolved ? rating : null,
          comments
        })
      });

      const data = await res.json();
      if (data.success) {
        onSuccess();
      } else {
        throw new Error(data.error || 'Verification submission failed');
      }
    } catch (err: any) {
      setError(err.message || 'Error submitting verification');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl space-y-5 animate-fadeIn">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-base">Citizen Verification</span>
          </div>
          <span className="text-xs font-mono text-slate-400">{publicReportId}</span>
        </div>

        {error && (
          <div className="p-3 bg-red-950/80 border border-red-800 rounded-lg text-xs text-red-300">
            {error}
          </div>
        )}

        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-200 block">
            Was this civic cleanliness issue actually resolved on ground?
          </label>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setIsResolved(true)}
              className={`p-3.5 rounded-xl border font-bold text-xs flex flex-col items-center gap-2 transition ${
                isResolved === true
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              YES, RESOLVED
            </button>

            <button
              type="button"
              onClick={() => setIsResolved(false)}
              className={`p-3.5 rounded-xl border font-bold text-xs flex flex-col items-center gap-2 transition ${
                isResolved === false
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <XCircle className="w-6 h-6 text-rose-400" />
              NOT YET RESOLVED
            </button>
          </div>
        </div>

        {isResolved === true && (
          <div className="space-y-2 animate-fadeIn">
            <label className="text-xs font-semibold text-slate-300">Rate Cleanliness Quality</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 hover:scale-110 transition"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {isResolved === false && (
          <div className="p-3 bg-amber-950/60 border border-amber-800 rounded-lg text-xs text-amber-300 flex items-start gap-2 animate-fadeIn">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Submitting &quot;NOT YET RESOLVED&quot; will automatically reopen this public case and send an alert to the BMC Ward Officer.</span>
          </div>
        )}

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Citizen Comments / Verification Notes</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder={isResolved ? 'Confirmed area is completely clean...' : 'Explain why issue is still unresolved...'}
            rows={3}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-1/3 bg-slate-800 text-slate-300 font-semibold py-2.5 rounded-xl text-xs hover:bg-slate-700"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isResolved === null || loading}
            className="w-2/3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs disabled:opacity-50 transition shadow-lg shadow-emerald-500/20"
          >
            {loading ? 'Submitting...' : 'Submit Verification'}
          </button>
        </div>
      </div>
    </div>
  );
}
