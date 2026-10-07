'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Wind, MapPin, Loader2 } from 'lucide-react';
import { HEALTH_ADVISORIES } from '@/lib/air-quality/health-advisories';
import type { AqiCategory, PollutantId, AirQualityResponse } from '@/lib/air-quality/types';

const categoryColors: Record<AqiCategory, { bg: string; text: string; border: string }> = {
  'Good': { bg: 'bg-green-50', text: 'text-green-800', border: 'border-green-300' },
  'Satisfactory': { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-300' },
  'Moderate': { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-300' },
  'Poor': { bg: 'bg-orange-50', text: 'text-orange-800', border: 'border-orange-300' },
  'Very Poor': { bg: 'bg-red-50', text: 'text-red-800', border: 'border-red-300' },
  'Severe': { bg: 'bg-rose-100', text: 'text-rose-900', border: 'border-rose-400' },
};

const pollutantEmojis: Record<string, string> = {
  'PM2.5': '😷',
  'PM10': '🏗️',
  'CO': '🚗',
  'SO2': '🏭',
  'NO2': '🚌',
  'OZONE': '☀️',
  'NH3': '🧪'
};

const pollutantFormat: Record<string, { label: string, format: string }> = {
  'PM2.5': { label: 'PM2.5', format: 'µg/m³' },
  'PM10': { label: 'PM10', format: 'µg/m³' },
  'CO': { label: 'CO', format: 'mg/m³' },
  'SO2': { label: 'SO₂', format: 'µg/m³' },
  'NO2': { label: 'NO₂', format: 'µg/m³' },
  'OZONE': { label: 'O₃', format: 'µg/m³' },
  'NH3': { label: 'NH₃', format: 'µg/m³' },
};

export default function AirQualityPage() {
  const [airQualityData, setAirQualityData] = useState<AirQualityResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [locationName, setLocationName] = useState<string>('Detecting your location...');

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocationName(`Your Location (${lat.toFixed(4)}, ${lon.toFixed(4)})`);

        try {
          const res = await fetch(`/api/air-quality?lat=${lat}&lon=${lon}`);
          const json = await res.json();
          if (json.success && json.data) {
            setAirQualityData(json.data);
            if (json.data.station?.name) {
              setLocationName(`Nearest Station: ${json.data.station.name}`);
            }
          } else {
            setError(json.error || 'Failed to fetch air quality for your location.');
          }
        } catch (err) {
          setError('Could not connect to air quality service.');
        } finally {
          setLoading(false);
        }
      },
      (geoError) => {
        setError('Location access denied. Please allow location access to see your local air quality.');
        setLoading(false);
        setLocationName('Location Unknown');
      }
    );
  }, []);

  const pollutantsToDisplay = airQualityData?.pollutants || {};
  if (airQualityData?.supplementary) {
    airQualityData.supplementary.forEach(supp => {
      Object.entries(supp.pollutants).forEach(([key, val]) => {
        if (!pollutantsToDisplay[key as PollutantId]) {
          pollutantsToDisplay[key as PollutantId] = val;
        }
      });
    });
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <div className="flex justify-center mb-2 text-rose-600">
             <Wind className="w-12 h-12" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight uppercase">
            Localized Indian Respiratory <br/>
            <span className="text-slate-600">Health Advice Checklist</span>
          </h1>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold mt-4">
            <MapPin className="w-4 h-4" />
            {locationName}
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center p-12 space-y-4 text-slate-500">
            <Loader2 className="w-10 h-10 animate-spin text-red-500" />
            <div className="font-bold">Locating you & fetching real-time air quality...</div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-6 rounded-2xl text-center font-medium border border-red-200 shadow-sm">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(HEALTH_ADVISORIES).map(([pollutantId, categoryMap]) => {
              const reading = pollutantsToDisplay[pollutantId as PollutantId];
              
              let category: AqiCategory = 'Good';
              let valDisplay = 'N/A';
              
              if (reading && reading.avg !== null) {
                 category = airQualityData?.aqi?.category || 'Moderate';
                 valDisplay = Math.round(reading.avg).toString();
              } else {
                 category = 'Good'; 
              }

              const advisory = categoryMap[category] || categoryMap['Moderate'];
              const colors = categoryColors[category] || categoryColors['Moderate'];
              const formatInfo = pollutantFormat[pollutantId] || { label: pollutantId, format: '' };
              const emoji = pollutantEmojis[pollutantId] || '💨';

              return (
                <div key={pollutantId} className={`rounded-2xl border-2 ${colors.border} bg-white overflow-hidden shadow-sm hover:shadow-md transition`}>
                  {/* Card Header */}
                  <div className={`p-4 ${colors.bg} ${colors.text} border-b ${colors.border} flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{emoji}</div>
                      <div>
                        <div className="font-black text-xl flex items-baseline gap-1">
                          {formatInfo.label}: {valDisplay} <span className="text-sm font-semibold">{formatInfo.format}</span>
                        </div>
                        <div className="text-sm font-semibold opacity-90">
                          ({advisory.label})
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl" title={category}>
                      {advisory.icon}
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-5">
                    <ul className="space-y-3">
                      {advisory.advice.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                          <span className="text-slate-400 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 flex items-center justify-between pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wider">
            <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">🇮🇳</span>
            YOUR LOCAL DATA
          </div>
          <Link href="/" className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Map
          </Link>
        </div>

      </div>
    </div>
  );
}
