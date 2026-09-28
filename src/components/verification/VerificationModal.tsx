'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, XCircle, Star, AlertTriangle, ShieldCheck, Camera, X, MapPin, Navigation } from 'lucide-react';
import { calculateDistanceMeters } from '@/lib/gis';

interface VerificationModalProps {
  reportId: string;
  publicReportId: string;
  reportLatitude?: number;
  reportLongitude?: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function VerificationModal({
  reportId,
  publicReportId,
  reportLatitude,
  reportLongitude,
  onClose,
  onSuccess
}: VerificationModalProps) {
  const [isResolved, setIsResolved] = useState<boolean | null>(null);
  const [rating, setRating] = useState<number>(5);
  const [comments, setComments] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // GPS Citizen Location State
  const [citizenLat, setCitizenLat] = useState<number | null>(null);
  const [citizenLng, setCitizenLng] = useState<number | null>(null);
  const [distanceMeters, setDistanceMeters] = useState<number | null>(null);
  const [locating, setLocating] = useState<boolean>(false);
  const [locError, setLocError] = useState<string | null>(null);

  // Camera stream state
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Acquire Citizen Location when modal opens
    if (navigator.geolocation) {
      setLocating(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const cLat = pos.coords.latitude;
          const cLng = pos.coords.longitude;
          setCitizenLat(cLat);
          setCitizenLng(cLng);
          if (reportLatitude != null && reportLongitude != null) {
            const dist = calculateDistanceMeters(reportLatitude, reportLongitude, cLat, cLng);
            setDistanceMeters(Math.round(dist));
          }
          setLocating(false);
        },
        (err) => {
          console.warn('Geolocation warning:', err.message);
          setLocError('Could not verify GPS location. You can still submit feedback.');
          setLocating(false);
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    }
  }, [reportLatitude, reportLongitude]);

  useEffect(() => {
    if (isCameraActive && cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
      videoRef.current.play().catch(console.error);
    }
  }, [isCameraActive, cameraStream]);

  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach(t => t.stop());
      }
    };
  }, [cameraStream]);

  const startCamera = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera device access not available.');
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false
      });
      setCameraStream(stream);
      setIsCameraActive(true);
    } catch (err) {
      console.error('Camera access error:', err);
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(t => t.stop());
      setCameraStream(null);
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      setPhotoUrl(dataUrl);
      stopCamera();
    }
  };

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
          comments,
          reopenEvidencePhoto: photoUrl || undefined,
          citizenLatitude: citizenLat,
          citizenLongitude: citizenLng,
          distanceMeters
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
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl space-y-5 animate-fadeIn max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-base">Citizen Ground Verification</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="p-3 bg-red-950/80 border border-red-800 rounded-lg text-xs text-red-300">
            {error}
          </div>
        )}

        {/* GPS Proximity Check Status Banner */}
        {locating ? (
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400 flex items-center gap-2 animate-pulse">
            <Navigation className="w-4 h-4 text-emerald-400 animate-spin" />
            Verifying your current GPS proximity to reported location...
          </div>
        ) : distanceMeters !== null ? (
          <div className={`p-3 border rounded-xl text-xs flex items-center gap-2 font-medium ${
            distanceMeters <= 300
              ? 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
              : 'bg-amber-950/60 border-amber-800 text-amber-300'
          }`}>
            <MapPin className={`w-4 h-4 shrink-0 ${distanceMeters <= 300 ? 'text-emerald-400' : 'text-amber-400'}`} />
            <span>
              {distanceMeters <= 300
                ? `✓ Verified Proximity: You are near the reported location (${distanceMeters} meters away)`
                : `⚠️ Location Notice: You are currently ${distanceMeters >= 1000 ? `${(distanceMeters / 1000).toFixed(1)} km` : `${distanceMeters} m`} away from original report location.`}
            </span>
          </div>
        ) : locError ? (
          <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-[11px] text-slate-400 flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5 text-slate-500" />
            {locError}
          </div>
        ) : null}

        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-200 block">
            Is this civic issue solved or not at this exact location?
          </label>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setIsResolved(true)}
              className={`p-3.5 rounded-2xl border font-extrabold text-xs flex flex-col items-center gap-2 transition ${
                isResolved === true
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-md scale-105'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              YES, SOLVED
            </button>

            <button
              type="button"
              onClick={() => setIsResolved(false)}
              className={`p-3.5 rounded-2xl border font-extrabold text-xs flex flex-col items-center gap-2 transition ${
                isResolved === false
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 shadow-md scale-105'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <XCircle className="w-6 h-6 text-rose-400" />
              NOT SOLVED
            </button>
          </div>
        </div>

        {/* Live Camera Photo Capture of Exact Location */}
        <div className="space-y-2 pt-1 border-t border-slate-800">
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-emerald-400" />
              Take Location Photo Evidence:
            </span>
            <span className="text-[10px] text-slate-400 font-normal">Live Camera</span>
          </label>

          {isCameraActive ? (
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex flex-col items-center justify-center border-2 border-emerald-500 shadow-lg">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 px-3 bg-gradient-to-t from-black/80 to-transparent pt-4 pb-1">
                <button
                  type="button"
                  onClick={stopCamera}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-full"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={capturePhoto}
                  className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-full flex items-center gap-1.5 shadow-lg active:scale-95"
                >
                  <Camera className="w-4 h-4" /> SNAP LOCATION PHOTO
                </button>
              </div>
            </div>
          ) : photoUrl ? (
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-emerald-500 bg-slate-950 group shadow-md">
              <img src={photoUrl} alt="Location Verification Evidence" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={startCamera}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Camera className="w-3.5 h-3.5" /> Retake Photo with Camera
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={startCamera}
              className="w-full py-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-2xl text-xs font-bold text-slate-200 flex items-center justify-center gap-2 transition active:scale-95"
            >
              <Camera className="w-4 h-4 text-emerald-400" /> Click to Open Camera & Take Location Photo
            </button>
          )}
        </div>

        {isResolved === true && (
          <div className="space-y-2 animate-fadeIn pt-1">
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
          <div className="p-3 bg-amber-950/60 border border-amber-800 rounded-xl text-xs text-amber-300 flex items-start gap-2 animate-fadeIn">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Submitting &quot;NOT SOLVED&quot; will automatically reopen this report and notify the Ward Officer with your photo evidence.</span>
          </div>
        )}

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300">Citizen Verification Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder={isResolved ? 'Confirmed area is completely clean...' : 'Explain why issue is still unresolved...'}
            rows={2}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-medium"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-1/3 bg-slate-800 text-slate-300 font-semibold py-3 rounded-2xl text-xs hover:bg-slate-700"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isResolved === null || loading}
            className="w-2/3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 rounded-2xl text-xs disabled:opacity-50 transition shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            {loading ? 'Submitting...' : 'Submit Resolution Feedback'}
          </button>
        </div>
      </div>
    </div>
  );
}
