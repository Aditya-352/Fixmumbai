'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Camera, Upload, MapPin, CheckCircle, ArrowRight, ArrowLeft, AlertCircle, Sparkles, X, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const categories = [
  { id: '1', name: 'Garbage pile', icon: '🗑️', desc: 'Uncollected accumulated trash pile' },
  { id: '2', name: 'Overflowing garbage bin', icon: '🚮', desc: 'Public bin overflowing on ground' },
  { id: '3', name: 'Open dumping', icon: '⚠️', desc: 'Unauthorized open waste dumping' },
  { id: '4', name: 'Construction waste', icon: '🏗️', desc: 'Debris, concrete plaster or sand' },
  { id: '5', name: 'Illegal dumping', icon: '🚛', desc: 'Truck commercial dumping' },
  { id: '6', name: 'Sanitation issue', icon: '🚾', desc: 'Public toilet cleanliness/overflow' },
  { id: '7', name: 'Other civic issue', icon: '🔧', desc: 'Other public amenity concern' }
];

export default function ReportingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [photoUrl, setPhotoUrl] = useState<string>('https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60');
  const [latitude, setLatitude] = useState<number>(19.1360);
  const [longitude, setLongitude] = useState<number>(72.8320);
  const [locality, setLocality] = useState<string>('Andheri West, Ward K/West');
  const [locationStatus, setLocationStatus] = useState<'IDLE' | 'DETECTING' | 'SUCCESS' | 'DENIED'>('IDLE');
  
  // Camera & Upload state
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  // Dynamic categories from database
  const [dbCategories, setDbCategories] = useState<any[]>(categories);
  const [selectedCategory, setSelectedCategory] = useState<string>('Garbage pile');
  const [categoryId, setCategoryId] = useState<string>('Garbage pile');
  const [description, setDescription] = useState<string>('');
  const [severity, setSeverity] = useState<'LOW' | 'MEDIUM' | 'HIGH'>('MEDIUM');
  const [reporterName, setReporterName] = useState<string>('');
  const [reporterEmail, setReporterEmail] = useState<string>('');

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data?.length > 0) {
          setDbCategories(data.data.map((c: any) => ({
            id: c.id,
            name: c.name,
            icon: c.icon === 'Trash2' ? '🗑️' : c.icon === 'Container' ? '🚮' : c.icon === 'AlertTriangle' ? '⚠️' : c.icon === 'Building2' ? '🏗️' : c.icon === 'Truck' ? '🚛' : '🚾',
            desc: c.description
          })));
          setCategoryId(data.data[0].id);
          setSelectedCategory(data.data[0].name);
        }
      })
      .catch(() => {});
  }, []);

  // Bind camera stream to video element
  useEffect(() => {
    if (isCameraActive && cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
      videoRef.current.play().catch(console.error);
    }
  }, [isCameraActive, cameraStream]);

  // Clean up camera stream on unmount
  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraStream]);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera stream not available on this browser.');
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });
      setCameraStream(stream);
      setIsCameraActive(true);
    } catch (err: any) {
      console.error('Camera access error:', err);
      setCameraError('Live camera feed unavailable. Use native camera or select photo from device.');
      if (cameraInputRef.current) {
        cameraInputRef.current.click();
      }
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setError('Photo file size must be under 10MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPhotoUrl(event.target.result as string);
        setError(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDetectLocation = () => {
    setLocationStatus('DETECTING');
    if (!navigator.geolocation) {
      setLocationStatus('DENIED');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
        setLocality(`GPS Position (${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)})`);
        setLocationStatus('SUCCESS');
      },
      () => {
        setLocationStatus('DENIED');
      },
      { timeout: 8000 }
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categoryId: categoryId || '1',
          description: description || `Reported ${selectedCategory} issue.`,
          latitude,
          longitude,
          photoPath: photoUrl,
          severity,
          reporterName: reporterName || 'Anonymous Citizen',
          reporterEmail
        })
      });

      const data = await res.json();
      if (data.success && data.data?.publicReportId) {
        router.push(`/report/${data.data.publicReportId}`);
      } else {
        throw new Error(data.error || 'Failed to submit report');
      }
    } catch (err: any) {
      setError(err.message || 'Submission error');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-xl p-6 sm:p-8 text-slate-900">
      {/* Hidden input for camera capture on mobile devices */}
      <input
        type="file"
        ref={cameraInputRef}
        accept="image/*"
        capture="environment"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
          <span>STEP {step} OF 4</span>
          <span>{step === 1 ? 'Capture Evidence' : step === 2 ? 'Confirm Location' : step === 3 ? 'Select Category' : 'Review & Submit'}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          {error}
        </div>
      )}

      {/* STEP 1: PHOTO CAPTURE */}
      {step === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-red-600" />
              Capture Waste Photo
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Click a live photograph of the waste issue directly using your device camera.
            </p>
          </div>

          {cameraError && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-center gap-2 font-medium">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              {cameraError}
            </div>
          )}

          {/* Main Photo Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-slate-300 bg-slate-900 flex flex-col items-center justify-center">
            {isCameraActive ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
                {/* Camera controls overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 px-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-6 pb-2">
                  <button
                    type="button"
                    onClick={stopCamera}
                    className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-sm"
                  >
                    <X className="w-4 h-4" /> Cancel
                  </button>
                  <button
                    type="button"
                    onClick={capturePhoto}
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-black flex items-center gap-2 shadow-lg shadow-red-600/50 scale-105 active:scale-95 transition"
                  >
                    <Camera className="w-4 h-4" /> SNAP PHOTO
                  </button>
                </div>
              </div>
            ) : photoUrl ? (
              <div className="relative w-full h-full group bg-slate-100">
                <img src={photoUrl} alt="Evidence Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button
                    type="button"
                    onClick={startCamera}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md scale-105 transition"
                  >
                    <Camera className="w-4 h-4" /> Retake Photo with Camera
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center space-y-3 bg-slate-50 w-full h-full flex flex-col items-center justify-center">
                <Camera className="w-12 h-12 text-slate-400 mx-auto" />
                <div>
                  <div className="text-sm font-extrabold text-slate-800">No Photo Taken</div>
                  <div className="text-xs text-slate-500 mt-0.5">Click the camera button below to take a live photo</div>
                </div>
              </div>
            )}
          </div>

          {/* Camera-Only Action Button */}
          {!isCameraActive && (
            <div>
              <button
                type="button"
                onClick={startCamera}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-red-600/25 text-sm transition active:scale-95"
              >
                <Camera className="w-5 h-5" />
                {photoUrl ? 'RETAKE PHOTO WITH CAMERA' : 'OPEN CAMERA & TAKE PHOTO'}
              </button>
            </div>
          )}

          {/* Sample waste photos for quick testing */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-600">Or use a sample waste photo for demo testing:</span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => {
                  if (isCameraActive) stopCamera();
                  setPhotoUrl('https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=60');
                }}
                className="text-[11px] font-semibold p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 truncate"
              >
                Garbage Pile
              </button>
              <button
                type="button"
                onClick={() => {
                  if (isCameraActive) stopCamera();
                  setPhotoUrl('https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=800&auto=format&fit=crop&q=60');
                }}
                className="text-[11px] font-semibold p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 truncate"
              >
                Bin Overflow
              </button>
              <button
                type="button"
                onClick={() => {
                  if (isCameraActive) stopCamera();
                  setPhotoUrl('https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=800&auto=format&fit=crop&q=60');
                }}
                className="text-[11px] font-semibold p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 truncate"
              >
                Debris
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              if (isCameraActive) stopCamera();
              setStep(2);
            }}
            disabled={!photoUrl}
            className={`w-full font-extrabold py-3.5 rounded-full shadow-md flex items-center justify-center gap-2 transition ${
              photoUrl
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/25'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Next: Location <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 2: LOCATION */}
      {step === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" />
              Confirm Location & Ward
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Device GPS automatically maps your report to its BMC Ward & Assembly Constituency.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
            <button
              onClick={handleDetectLocation}
              disabled={locationStatus === 'DETECTING'}
              className="w-full bg-white hover:bg-slate-100 text-red-600 font-bold text-xs py-3 px-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center gap-2 transition"
            >
              <MapPin className="w-4 h-4 text-red-600" />
              {locationStatus === 'DETECTING' ? 'Detecting GPS...' : 'Use Device GPS Location'}
            </button>

            {locationStatus === 'SUCCESS' && (
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Location detected successfully
              </div>
            )}

            <div className="space-y-1 pt-2">
              <label className="text-xs font-bold text-slate-700">Area / Locality Name</label>
              <input
                type="text"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-600 font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 text-[10px] font-bold block">LATITUDE</span>
                <span className="font-mono text-slate-800 font-bold">{latitude.toFixed(4)}</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 text-[10px] font-bold block">LONGITUDE</span>
                <span className="font-mono text-slate-800 font-bold">{longitude.toFixed(4)}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-full flex items-center justify-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="w-2/3 bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-full shadow-md shadow-red-600/25 flex items-center justify-center gap-2"
            >
              Next: Category <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CATEGORY */}
      {step === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-600" />
              Select Issue Category
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Choose the civic cleanliness issue category.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
            {dbCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setCategoryId(cat.id);
                }}
                className={`p-3.5 rounded-2xl text-left border transition flex items-center gap-3 ${
                  selectedCategory === cat.name
                    ? 'bg-red-50 border-red-500 text-slate-900 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <div className="text-xs font-bold text-slate-900">{cat.name}</div>
                  <div className="text-[10px] text-slate-500">{cat.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Urgency selector */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold text-slate-700">Urgency Priority Level</label>
            <div className="grid grid-cols-3 gap-2">
              {(['LOW', 'MEDIUM', 'HIGH'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSeverity(lvl)}
                  className={`py-2 text-xs font-bold rounded-xl border transition ${
                    severity === lvl
                      ? lvl === 'HIGH'
                        ? 'bg-red-600 text-white border-red-600'
                        : lvl === 'MEDIUM'
                        ? 'bg-amber-500 text-white border-amber-500'
                        : 'bg-slate-800 text-white border-slate-800'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-full flex items-center justify-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="w-2/3 bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-full shadow-md shadow-red-600/25 flex items-center justify-center gap-2"
            >
              Review Report <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: REVIEW & SUBMIT */}
      {step === 4 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-red-600" />
              Review & Submit Public Case
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              No login required. Every report creates a transparent public case file.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-4 text-xs">
            <div className="flex items-center gap-4">
              <img src={photoUrl} alt="Evidence" className="w-16 h-16 rounded-xl object-cover border border-slate-200" />
              <div>
                <span className="text-[10px] text-red-600 uppercase font-black tracking-wider">{selectedCategory}</span>
                <div className="text-sm font-extrabold text-slate-900">{locality}</div>
                <div className="text-slate-500 text-[11px] font-semibold mt-0.5">Priority: {severity}</div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-bold">Optional Details / Landmarks</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe landmark or specific issue details..."
                rows={2}
                className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-medium"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(3)}
              disabled={loading}
              className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-full flex items-center justify-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-2/3 bg-red-600 hover:bg-red-700 text-white font-black text-sm py-3.5 rounded-full shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition active:scale-95"
            >
              {loading ? (
                <span>Generating Case...</span>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  SUBMIT PUBLIC REPORT
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
