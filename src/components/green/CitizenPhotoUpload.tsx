'use client';

/**
 * CitizenPhotoUpload — Modal for submitting citizen greenery photographs.
 *
 * Design features:
 * - Premium white modal with clean soft-green accents (#EAF7F0, #087F5B).
 * - Clear tabs: Take a Photo (live camera stream or native mobile capture) vs Upload Photo (drag & drop).
 * - Supports modal overlay mode (with backdrop) and embedded drawer mode.
 * - Form validation: file size, file types, consent checkbox, description.
 * - Moderation disclosure & privacy safeguards.
 * - Submits directly to /civic/api/vegetation/photos.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Camera,
  Upload,
  X,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Sparkles,
  RefreshCw,
  Image as ImageIcon,
} from 'lucide-react';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE_MB = 8;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

const CATEGORIES = [
  { value: 'PARK', label: '🌳 Public Park / Garden' },
  { value: 'OPEN_GREEN_SPACE', label: '🌿 Open Green Space' },
  { value: 'MANGROVE', label: '🌊 Mangrove Patch' },
  { value: 'WETLAND', label: '🦆 Wetland / Marsh' },
  { value: 'COMMUNITY_GARDEN', label: '🥬 Community / Terrace Garden' },
  { value: 'NURSERY', label: '🌱 Municipal Nursery' },
  { value: 'OTHER', label: '🍀 Other Green Canopy' },
];

export interface CitizenPhotoUploadProps {
  greenSpaceId: string | null;
  greenSpaceName: string;
  defaultLat: number;
  defaultLon: number;
  onClose: () => void;
  onSuccess: () => void;
  initialMode?: 'camera' | 'upload';
  isModal?: boolean;
}

type UploadState =
  | { status: 'idle' }
  | { status: 'uploading' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

export default function CitizenPhotoUpload({
  greenSpaceId,
  greenSpaceName,
  defaultLat,
  defaultLon,
  onClose,
  onSuccess,
  initialMode = 'upload',
  isModal = true,
}: CitizenPhotoUploadProps) {
  const [activeMode, setActiveMode] = useState<'camera' | 'upload'>(initialMode);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('OPEN_GREEN_SPACE');
  const [consentGiven, setConsentGiven] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>({ status: 'idle' });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const validateAndSetFile = useCallback((file: File) => {
    setFileError(null);

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError(`File type "${file.type}" not supported. Use JPEG, PNG, or WebP.`);
      return;
    }

    if (file.size > MAX_SIZE_BYTES) {
      setFileError(
        `Image too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Maximum is ${MAX_SIZE_MB} MB.`
      );
      return;
    }

    if (file.size === 0) {
      setFileError('The selected file is empty.');
      return;
    }

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => setPreviewUrl(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  // Camera stream connection
  useEffect(() => {
    if (isCameraActive && cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
      videoRef.current.play().catch(console.error);
    }
  }, [isCameraActive, cameraStream]);

  // Clean up stream on unmount
  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((t) => t.stop());
      }
    };
  }, [cameraStream]);

  // Stop camera tracks cleanly
  const stopCamera = useCallback(() => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((t) => t.stop());
    }
    setCameraStream(null);
    setIsCameraActive(false);
  }, [cameraStream]);

  const handleClose = useCallback(() => {
    stopCamera();
    onClose();
  }, [stopCamera, onClose]);

  // Prevent background scrolling while modal is active
  useEffect(() => {
    if (!isModal) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isModal]);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera not supported on this browser.');
      }
      
      const isPortrait = typeof window !== 'undefined' ? window.innerHeight > window.innerWidth : true;
      let stream: MediaStream;
      try {
        // Attempt portrait constraints with 3:4 aspect ratio where supported
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' },
            aspectRatio: { ideal: 3 / 4 },
            width: { ideal: isPortrait ? 720 : 1280 },
            height: { ideal: isPortrait ? 960 : 720 },
          },
          audio: false,
        });
      } catch (_) {
        // Fallback to basic environment camera if specific resolution/aspect is rejected
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' } },
          audio: false,
        });
      }

      setCameraStream(stream);
      setIsCameraActive(true);
    } catch (err: any) {
      console.warn('Camera stream error, falling back to file input:', err);
      const isPermissionDenied =
        err?.name === 'NotAllowedError' || err?.name === 'PermissionDeniedError';
      const errMsg = isPermissionDenied
        ? 'Camera permission was denied. Please allow camera access in browser settings or use "Upload File".'
        : 'Direct camera preview unavailable. Opening device camera picker…';
      setCameraError(errMsg);
      if (!isPermissionDenied) {
        cameraInputRef.current?.click();
      }
    }
  };

  const capturePhoto = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 720;
    canvas.height = video.videoHeight || 960;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const file = new File([blob], `evidence-${Date.now()}.jpg`, { type: 'image/jpeg' });
        validateAndSetFile(file);
        stopCamera();
      },
      'image/jpeg',
      0.90
    );
  }, [validateAndSetFile, stopCamera]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) validateAndSetFile(file);
      e.target.value = '';
    },
    [validateAndSetFile]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files?.[0];
      if (file) validateAndSetFile(file);
    },
    [validateAndSetFile]
  );

  const clearFile = useCallback(() => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setFileError(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!selectedFile) {
      setUploadState({ status: 'error', message: 'Please select or capture a photo first.' });
      return;
    }

    if (!consentGiven) {
      setUploadState({ status: 'error', message: 'Please tick the consent checkbox to continue.' });
      return;
    }

    setUploadState({ status: 'uploading' });

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('lat', String(defaultLat));
    formData.append('lon', String(defaultLon));
    formData.append('locationSource', 'USER_SELECTED');
    formData.append('consentGiven', 'true');

    if (greenSpaceId) {
      formData.append('greenSpaceId', greenSpaceId);
    }

    try {
      const res = await fetch('/civic/api/vegetation/photos', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        setUploadState({
          status: 'error',
          message: json.error?.message ?? 'Upload failed. Please try again.',
        });
        return;
      }

      setUploadState({
        status: 'success',
        message: json.data?.message ?? 'Photo submitted successfully!',
      });

      setTimeout(() => onSuccess(), 2200);
    } catch (err: any) {
      setUploadState({
        status: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    }
  }, [selectedFile, consentGiven, description, category, defaultLat, defaultLon, greenSpaceId, onSuccess]);

  const content = (
    <div className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border-t sm:border border-[#E5EBE7] flex flex-col h-[94dvh] sm:h-auto sm:max-h-[88vh] overflow-hidden text-[#14231D] animate-fadeIn">
      {/* ── 1. Modal Header ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-[#E5EBE7] bg-white flex-shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[#EAF7F0] text-[#087F5B] flex items-center justify-center font-bold flex-shrink-0">
            <Camera className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h3 className="font-black text-sm text-[#14231D] leading-tight truncate">
              Add Photo Evidence
            </h3>
            <p className="text-[11px] text-[#64746B] truncate">
              Contribute verified visual evidence of Mumbai greenery
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="p-1.5 rounded-xl hover:bg-slate-100 text-[#64746B] hover:text-[#14231D] transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
          aria-label="Close photo upload"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* ── Success State ─────────────────────────────────────────────────── */}
      {uploadState.status === 'success' && (
        <div className="flex-1 flex flex-col items-center justify-center p-8 gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#EAF7F0] flex items-center justify-center text-[#087F5B]">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-black text-[#14231D]">Photo Submitted!</h4>
            <p className="text-xs text-[#64746B] max-w-xs">{uploadState.message}</p>
          </div>
          <div className="bg-[#EAF7F0] border border-[#087F5B]/30 rounded-2xl p-3 text-xs text-[#087F5B] max-w-xs text-center font-medium">
            📋 Your photo is in the review queue and will appear on the map once verified.
          </div>
        </div>
      )}

      {/* ── Form Body (Independently Scrollable) ───────────────────────────── */}
      {uploadState.status !== 'success' && (
        <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-3.5 sm:py-4 space-y-3.5 sm:space-y-4 overscroll-contain">
          {/* 2. Location information and coordinates */}
          <div className="bg-[#EAF7F0] border border-[#087F5B]/20 rounded-2xl p-3 flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#087F5B] flex-shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#14231D] truncate">
                {greenSpaceName || 'Mumbai Green Location'}
              </p>
              <p className="text-[11px] text-[#087F5B] font-mono mt-0.5">
                {defaultLat.toFixed(5)}, {defaultLon.toFixed(5)}
              </p>
            </div>
          </div>

          {/* 3. Take Photo and Upload File controls */}
          {!selectedFile && (
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#F7F9F8] border border-[#E5EBE7] rounded-2xl">
              <button
                type="button"
                onClick={() => {
                  setActiveMode('camera');
                  startCamera();
                }}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[40px] ${
                  activeMode === 'camera'
                    ? 'bg-white text-[#087F5B] shadow-xs border border-[#E5EBE7]'
                    : 'text-[#64746B] hover:text-[#14231D]'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                Take Photo
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveMode('upload');
                  stopCamera();
                  fileInputRef.current?.click();
                }}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[40px] ${
                  activeMode === 'upload'
                    ? 'bg-white text-[#087F5B] shadow-xs border border-[#E5EBE7]'
                    : 'text-[#64746B] hover:text-[#14231D]'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                Upload File
              </button>
            </div>
          )}

          {/* 4. Portrait camera preview / Image Dropzone / Selected Preview */}
          {!selectedFile ? (
            <div>
              {isCameraActive ? (
                /* Live Portrait Camera Stream */
                <div className="relative rounded-2xl overflow-hidden bg-black w-full aspect-[3/4] max-h-[380px] flex items-center justify-center shadow-inner">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-3 px-3 z-10">
                    <button
                      type="button"
                      onClick={() => {
                        stopCamera();
                        setActiveMode('upload');
                      }}
                      className="px-4 py-2 bg-black/70 hover:bg-black/90 active:scale-95 text-white rounded-full text-xs font-bold backdrop-blur-xs transition min-h-[38px]"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={capturePhoto}
                      className="px-5 py-2.5 bg-[#087F5B] hover:bg-[#076B4D] active:scale-95 text-white rounded-full text-xs font-black flex items-center gap-2 shadow-lg transition min-h-[40px]"
                    >
                      <Camera className="w-4 h-4" /> Capture Photo
                    </button>
                  </div>
                </div>
              ) : activeMode === 'camera' ? (
                /* Camera Prompt State */
                <div className="border-2 border-dashed border-[#087F5B]/30 rounded-2xl p-6 text-center bg-[#EAF7F0]/30 w-full aspect-[3/4] max-h-[320px] flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5EBE7] flex items-center justify-center mb-3 text-[#087F5B] shadow-sm">
                    <Camera className="w-7 h-7" />
                  </div>
                  <p className="text-xs font-black text-[#14231D]">
                    Portrait Camera
                  </p>
                  <p className="text-[11px] text-[#64746B] mt-1 max-w-[220px]">
                    Take a live vertical photo of greenery for verified civic mapping
                  </p>
                  <button
                    type="button"
                    onClick={startCamera}
                    className="mt-4 px-5 py-2.5 bg-[#087F5B] hover:bg-[#076B4D] active:scale-95 text-white rounded-full text-xs font-black flex items-center gap-2 shadow-sm transition min-h-[40px]"
                  >
                    <Camera className="w-4 h-4" /> Open Camera
                  </button>
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="text-[11px] font-bold text-[#087F5B] hover:underline mt-2.5"
                  >
                    Or use device camera app
                  </button>
                </div>
              ) : (
                /* Drag and drop zone */
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#E5EBE7] hover:border-[#087F5B] rounded-2xl p-6 text-center cursor-pointer bg-[#F7F9F8] hover:bg-[#EAF7F0]/30 transition group min-h-[160px] flex flex-col items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5EBE7] flex items-center justify-center mx-auto mb-2 text-[#087F5B] group-hover:scale-105 transition-transform">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-[#14231D]">
                    Click to browse or drag and drop photo
                  </p>
                  <p className="text-[11px] text-[#64746B] mt-0.5">
                    JPEG, PNG, WebP · Up to {MAX_SIZE_MB} MB
                  </p>
                </div>
              )}

              {cameraError && (
                <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-xl p-2.5 mt-2">
                  {cameraError}
                </p>
              )}

              {/* Hidden file inputs with environment camera fallback */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={handleFileChange}
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                capture="environment"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          ) : (
            /* Selected File Portrait Preview */
            <div className="space-y-2">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5EBE7] w-full aspect-[3/4] max-h-[340px] sm:max-h-[360px] bg-slate-950 flex items-center justify-center shadow-inner">
                <img
                  src={previewUrl!}
                  alt="Photo preview"
                  className="w-full h-full object-contain"
                />
                <button
                  type="button"
                  onClick={clearFile}
                  className="absolute top-2.5 right-2.5 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition shadow-md min-w-[36px] min-h-[36px] flex items-center justify-center"
                  aria-label="Remove photo"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white text-[11px] flex justify-between items-end">
                  <span className="truncate max-w-[200px] font-medium">{selectedFile.name}</span>
                  <span className="font-mono text-[10px] text-slate-300">
                    {(selectedFile.size / 1024).toFixed(0)} KB
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs font-bold text-[#087F5B] hover:underline"
                >
                  Choose different photo
                </button>
                <button
                  type="button"
                  onClick={clearFile}
                  className="text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Remove
                </button>
              </div>
            </div>
          )}

          {fileError && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-2.5 text-xs text-red-700">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{fileError}</span>
            </div>
          )}

          {/* 5. Greenery category selector */}
          <div>
            <label
              htmlFor="evidence-category"
              className="text-[10.5px] font-bold text-[#64746B] uppercase tracking-wider block mb-1.5"
            >
              Greenery Category
            </label>
            <select
              id="evidence-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white border border-[#E5EBE7] rounded-xl px-3 py-2.5 text-xs font-bold text-[#14231D] focus:outline-none focus:ring-2 focus:ring-[#087F5B]"
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* 6. Optional description & guidelines */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label
                htmlFor="evidence-description"
                className="text-[10.5px] font-bold text-[#64746B] uppercase tracking-wider"
              >
                Description <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <span className="text-[10px] text-[#64746B] font-mono">
                {description.length}/500
              </span>
            </div>
            <textarea
              id="evidence-description"
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, 500))}
              placeholder="e.g. 'Dense tree canopy and lit walkway inside Priyadarshini Park'"
              rows={2}
              className="w-full bg-white border border-[#E5EBE7] rounded-xl p-2.5 text-xs text-[#14231D] focus:outline-none focus:ring-2 focus:ring-[#087F5B] resize-none"
            />
          </div>

          {/* Transparency note */}
          <div className="bg-[#F7F9F8] border border-[#E5EBE7] rounded-xl p-3 text-[11px] text-[#64746B] space-y-1">
            <p className="font-bold text-[#14231D]">Civic Evidence Guidelines</p>
            <ul className="list-disc list-inside space-y-0.5 text-[10.5px]">
              <li>Photos are reviewed before being published on the map.</li>
              <li>Only genuine open greenery and public parks are accepted.</li>
              <li>EXIF GPS tags are stripped; only verified location is mapped.</li>
            </ul>
          </div>

          {/* Consent Checkbox */}
          <label className="flex items-start gap-2.5 cursor-pointer select-none pb-2">
            <input
              type="checkbox"
              checked={consentGiven}
              onChange={(e) => setConsentGiven(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#087F5B] rounded cursor-pointer shrink-0"
            />
            <span className="text-[11px] text-[#64746B] leading-snug">
              I confirm this photo shows real greenery in Mumbai, I hold the right to share it, and I agree to it being displayed on FixMumbai under Creative Commons Attribution.
            </span>
          </label>

          {/* Upload error */}
          {uploadState.status === 'error' && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-2.5 text-xs text-red-700">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{uploadState.message}</span>
            </div>
          )}
        </div>
      )}

      {/* ── 7. Submit Photo for Review (Dedicated Sticky Footer) ───────────── */}
      {uploadState.status !== 'success' && (
        <div className="p-3 sm:p-4 border-t border-[#E5EBE7] bg-white flex-shrink-0 safe-area-bottom pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]">
          <button
            onClick={handleSubmit}
            disabled={!selectedFile || !consentGiven || uploadState.status === 'uploading'}
            className="w-full flex items-center justify-center gap-2 bg-[#087F5B] hover:bg-[#076B4D] disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold py-3.5 rounded-2xl shadow-xs transition active:scale-95 min-h-[44px]"
          >
            {uploadState.status === 'uploading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Evidence…
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                Submit Photo for Review
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );

  if (!isModal) {
    return content;
  }

  return (
    <div
      className="fixed inset-0 z-[3000] bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center sm:p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {content}
    </div>
  );
}
