'use client';

/**
 * CitizenPhotoUpload — Modal for submitting citizen greenery photographs.
 *
 * Features:
 * - Camera capture on mobile (capture="environment") + file picker fallback
 * - Image preview with size/type validation before upload
 * - Category selector (park, mangrove, wetland, etc.)
 * - Optional description (max 500 chars)
 * - Location: uses greenSpace centroid by default; shows lat/lon for transparency
 * - Explicit consent checkbox (required before submit)
 * - Clear moderation disclosure ("Your photo will be reviewed before appearing publicly")
 * - Handles upload progress, success, and error states
 * - Never stores EXIF GPS; only user-confirmed coordinates
 */

import React, { useState, useRef, useCallback } from 'react';
import { Camera, Upload, X, MapPin, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE_MB = 8;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

const CATEGORIES = [
  { value: 'PARK', label: '🌳 Park' },
  { value: 'GARDEN', label: '🌺 Garden' },
  { value: 'OPEN_GREEN_SPACE', label: '🌿 Open Green Space' },
  { value: 'MANGROVE', label: '🌊 Mangrove' },
  { value: 'WETLAND', label: '🦆 Wetland' },
  { value: 'COMMUNITY_GARDEN', label: '🥬 Community Garden' },
  { value: 'NURSERY', label: '🌱 Nursery' },
  { value: 'OTHER', label: '🍀 Other Greenery' },
];

interface CitizenPhotoUploadProps {
  greenSpaceId: string | null;
  greenSpaceName: string;
  defaultLat: number;
  defaultLon: number;
  onClose: () => void;
  onSuccess: () => void;
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
}: CitizenPhotoUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('OPEN_GREEN_SPACE');
  const [consentGiven, setConsentGiven] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>({ status: 'idle' });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const validateAndSetFile = useCallback((file: File) => {
    setFileError(null);

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError(`File type "${file.type}" not supported. Use JPEG, PNG, or WebP.`);
      return;
    }

    if (file.size > MAX_SIZE_BYTES) {
      setFileError(`Image too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Maximum is ${MAX_SIZE_MB} MB.`);
      return;
    }

    if (file.size === 0) {
      setFileError('The selected file is empty.');
      return;
    }

    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => setPreviewUrl(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) validateAndSetFile(file);
    // Reset input so same file can be selected again
    e.target.value = '';
  }, [validateAndSetFile]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) validateAndSetFile(file);
  }, [validateAndSetFile]);

  const clearFile = useCallback(() => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setFileError(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!selectedFile) {
      setUploadState({ status: 'error', message: 'Please select a photo first.' });
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

      // Auto-close after 2.5s on success
      setTimeout(() => onSuccess(), 2500);
    } catch (err: any) {
      setUploadState({
        status: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    }
  }, [selectedFile, consentGiven, description, category, defaultLat, defaultLon, greenSpaceId, onSuccess]);

  return (
    <div
      className="absolute inset-0 z-50 bg-white flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Add greenery photo"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-emerald-600" />
          <span className="font-black text-slate-900 text-sm">Add Greenery Photo</span>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
          aria-label="Close photo upload"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Success state */}
      {uploadState.status === 'success' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-500" />
          <div className="text-center space-y-1">
            <h3 className="text-lg font-black text-slate-900">Photo Submitted!</h3>
            <p className="text-sm text-slate-600">{uploadState.message}</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 max-w-xs text-center">
            📋 Your photo is in the review queue and will appear on the map once approved.
          </div>
        </div>
      )}

      {/* Form */}
      {uploadState.status !== 'success' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Location context */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2.5 flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-emerald-800">{greenSpaceName}</p>
              <p className="text-[10.5px] text-emerald-700 mt-0.5">
                Location: {defaultLat.toFixed(5)}, {defaultLon.toFixed(5)}
              </p>
            </div>
          </div>

          {/* File picker area */}
          {!selectedFile ? (
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 block">
                Select Photo
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/40 transition"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-600">Tap to select from gallery</p>
                <p className="text-[10.5px] text-slate-400 mt-1">JPEG, PNG, WebP · Max {MAX_SIZE_MB} MB</p>
                <p className="text-[10px] text-slate-400">Or drag and drop</p>
              </div>

              {/* Camera capture button (mobile) */}
              <button
                onClick={() => cameraInputRef.current?.click()}
                className="w-full mt-2 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl transition"
              >
                <Camera className="w-3.5 h-3.5" />
                Use Camera
              </button>

              {/* Hidden inputs */}
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
            /* Preview */
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={previewUrl!}
                  alt="Photo preview"
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={clearFile}
                  className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 transition"
                  aria-label="Remove photo"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-3 py-1.5">
                  <p className="text-white text-[10px]">
                    {selectedFile.name} · {(selectedFile.size / 1024).toFixed(0)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full mt-2 text-xs font-semibold text-slate-600 underline"
              >
                Choose a different photo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          )}

          {/* File error */}
          {fileError && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-3 py-2 text-xs text-red-700">
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
              {fileError}
            </div>
          )}

          {/* Category */}
          <div>
            <label htmlFor="photo-category" className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
              Category
            </label>
            <select
              id="photo-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="photo-description" className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
              Description <span className="font-normal text-slate-400">(optional)</span>
            </label>
            <textarea
              id="photo-description"
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, 500))}
              placeholder="What's visible in this photo? e.g. 'Mangroves along the creek near Bandra'"
              rows={3}
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 resize-none"
            />
            <p className="text-[10px] text-slate-400 mt-0.5 text-right">{description.length}/500</p>
          </div>

          {/* Moderation notice */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-600 space-y-1">
            <p className="font-bold text-slate-700">Before you submit</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Your photo will be reviewed before appearing on the map.</li>
              <li>Only photos of real open greenery are accepted.</li>
              <li>EXIF location data in your file will not be stored.</li>
              <li>Your user account (if signed in) will be associated.</li>
            </ul>
          </div>

          {/* Consent */}
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={consentGiven}
              onChange={(e) => setConsentGiven(e.target.checked)}
              className="mt-0.5 accent-emerald-600 w-4 h-4 flex-shrink-0"
            />
            <span className="text-xs text-slate-700 leading-relaxed">
              I confirm this photo shows real open greenery in Mumbai, I have the right to share it, and I agree to it being displayed on FixMumbai under a Creative Commons Attribution licence after moderation.
            </span>
          </label>

          {/* Upload error */}
          {uploadState.status === 'error' && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-3 py-2 text-xs text-red-700">
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
              {uploadState.message}
            </div>
          )}
        </div>
      )}

      {/* Submit footer */}
      {uploadState.status !== 'success' && (
        <div className="flex-shrink-0 px-4 py-3 border-t border-slate-200 bg-white">
          <button
            onClick={handleSubmit}
            disabled={!selectedFile || !consentGiven || uploadState.status === 'uploading'}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:text-slate-500 text-white text-sm font-bold py-3 rounded-xl transition"
          >
            {uploadState.status === 'uploading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Uploading…
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                Submit Photo for Review
              </>
            )}
          </button>
          <p className="text-[10px] text-slate-400 text-center mt-1.5">
            Photos are reviewed by our team before appearing publicly.
          </p>
        </div>
      )}
    </div>
  );
}
