'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Camera,
  X,
  RefreshCw,
  Download,
  MapPin,
  Wind,
  AlertCircle,
  CheckCircle2,
  Upload,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

interface AirQualityPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  locationName: string;
  lat: number;
  lon: number;
  aqiValue: number | null;
  category: string;
  dominantPollutant?: string | null;
  pm25?: number | null;
  pm10?: number | null;
}

export default function AirQualityPhotoModal({
  isOpen,
  onClose,
  locationName,
  lat,
  lon,
  aqiValue,
  category,
  dominantPollutant,
  pm25,
  pm10,
}: AirQualityPhotoModalProps) {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  // Stop camera tracks cleanly
  const stopCamera = useCallback(() => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
    setIsCameraActive(false);
  }, [cameraStream]);

  // Clean up when modal closes or unmounts
  useEffect(() => {
    if (!isOpen) {
      stopCamera();
      setPhotoUrl(null);
      setCameraError(null);
    }
  }, [isOpen, stopCamera]);

  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraStream]);

  // Bind video element when stream is ready
  useEffect(() => {
    if (isCameraActive && cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [isCameraActive, cameraStream]);

  // Start live webcam or mobile environment camera
  const startCamera = async () => {
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera API is not supported in this browser.');
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      setCameraStream(stream);
      setIsCameraActive(true);
    } catch (err: any) {
      console.warn('Live camera access error, falling back to file input:', err);
      setCameraError('Direct webcam stream unavailable. Use the photo capture button below to take a picture.');
      if (cameraInputRef.current) {
        cameraInputRef.current.click();
      }
    }
  };

  // Watermark details onto captured photo canvas
  const applyWatermarkAndSave = (sourceCanvas: HTMLCanvasElement) => {
    const ctx = sourceCanvas.getContext('2d');
    if (!ctx) return;

    const width = sourceCanvas.width;
    const height = sourceCanvas.height;

    // Gradient banner at bottom for clear text overlay
    const bannerHeight = Math.max(90, Math.round(height * 0.17));
    const gradient = ctx.createLinearGradient(0, height - bannerHeight, 0, height);
    gradient.addColorStop(0, 'rgba(15, 23, 42, 0)');
    gradient.addColorStop(0.25, 'rgba(15, 23, 42, 0.78)');
    gradient.addColorStop(1, 'rgba(15, 23, 42, 0.96)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, height - bannerHeight, width, bannerHeight);

    // Text configuration
    ctx.fillStyle = '#FFFFFF';
    const baseFontSize = Math.max(14, Math.round(width * 0.024));
    ctx.font = `bold ${baseFontSize}px system-ui, -apple-system, sans-serif`;

    const now = new Date();
    const timestampStr = now.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const padLeft = Math.round(width * 0.03);
    const lineSpacing = baseFontSize * 1.35;
    let yPos = height - bannerHeight + baseFontSize * 1.35;

    // Line 1: Location & Coordinates
    ctx.fillStyle = '#F8FAFC';
    ctx.fillText(`📍 ${locationName} (${lat.toFixed(4)}°, ${lon.toFixed(4)}°)`, padLeft, yPos);

    // Line 2: AQI Telemetry
    yPos += lineSpacing;
    ctx.fillStyle = '#67E8F9'; // Soft cyan
    const aqiText = aqiValue !== null ? `AQI ${aqiValue}` : 'AQI Monitored';
    const pollText = dominantPollutant ? ` | Dominant: ${dominantPollutant}` : '';
    const pmText = pm25 !== null && pm25 !== undefined ? ` | PM2.5: ${Math.round(pm25)} µg/m³` : '';
    ctx.fillText(`💨 Air Quality: ${aqiText} (${category})${pollText}${pmText}`, padLeft, yPos);

    // Line 3: Timestamp & Platform watermark
    yPos += lineSpacing;
    ctx.fillStyle = '#94A3B8';
    ctx.font = `500 ${Math.max(11, Math.round(baseFontSize * 0.82))}px system-ui, -apple-system, sans-serif`;
    ctx.fillText(`⏱️ ${timestampStr} • FixMumbai Civic Air Quality Audit`, padLeft, yPos);

    const watermarkedDataUrl = sourceCanvas.toDataURL('image/jpeg', 0.92);
    setPhotoUrl(watermarkedDataUrl);
    stopCamera();
  };

  // Capture current video frame
  const capturePhoto = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    applyWatermarkAndSave(canvas);
  };

  // Handle mobile camera file capture fallback
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          applyWatermarkAndSave(canvas);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Download photo to local machine
  const downloadPhoto = () => {
    if (!photoUrl) return;
    const a = document.createElement('a');
    a.href = photoUrl;
    a.download = `FixMumbai_AQI_${locationName.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Hidden mobile camera capture input */}
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          onChange={handleFileInput}
          className="hidden"
        />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-red-100 text-red-600">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                Take Air Quality Photo
              </h3>
              <p className="text-xs text-slate-500 font-medium truncate max-w-[240px] sm:max-w-xs">
                {locationName} • {aqiValue !== null ? `AQI ${aqiValue}` : category}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Camera Viewfinder */}
        <div className="p-6 space-y-4 overflow-y-auto">
          {/* Real-time Environment Context Pill */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span className="font-bold truncate max-w-[190px] sm:max-w-xs">{locationName}</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold text-slate-900 shrink-0">
              <Wind className="w-3.5 h-3.5 text-blue-500" />
              <span>{aqiValue !== null ? `AQI ${aqiValue}` : category}</span>
            </div>
          </div>

          {cameraError && (
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{cameraError}</span>
            </div>
          )}

          {/* Viewfinder / Preview Container */}
          <div className="relative w-full aspect-[4/3] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center shadow-inner">
            {isCameraActive ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  LIVE CAMERA
                </div>
                <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={stopCamera}
                    className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-bold hover:bg-black/80 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={capturePhoto}
                    className="px-5 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs shadow-lg transition flex items-center gap-2 active:scale-95"
                  >
                    <Camera className="w-4 h-4" /> SNAP PHOTO
                  </button>
                </div>
              </>
            ) : photoUrl ? (
              <div className="relative w-full h-full">
                <img src={photoUrl} alt="Captured Air Quality" className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
                  <CheckCircle2 className="w-3 h-3" /> Watermarked
                </div>
              </div>
            ) : (
              <div className="text-center p-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 mx-auto">
                  <Camera className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-200">No Photo Captured</div>
                  <div className="text-xs text-slate-500 max-w-xs mx-auto">
                    Click below to open your camera and capture live air quality & smoke/smog evidence.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Trigger Buttons */}
          {!isCameraActive && !photoUrl && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={startCamera}
                className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold rounded-2xl transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Camera className="w-4 h-4" /> OPEN LIVE CAMERA
              </button>
              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold rounded-2xl transition flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" /> UPLOAD OR NATIVE
              </button>
            </div>
          )}

          {/* Result Action Bar */}
          {photoUrl && (
            <div className="space-y-2 pt-1">
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={startCamera}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Retake
                </button>
                <button
                  type="button"
                  onClick={downloadPhoto}
                  className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Save Photo
                </button>
              </div>

              <Link
                href="/report"
                className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold rounded-2xl transition flex items-center justify-center gap-2 shadow-md text-center"
              >
                <span>File Civic Pollution Report with Photo</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
