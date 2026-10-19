/**
 * Mathematical biophysical WBGT engine based on Stull (2011) and radiant heat formulation.
 * Replicates the Healthrytix empirical heat stress modeling.
 */

export interface WbgtCalculationResult {
  /** Natural Wet-Bulb Temperature (°C) */
  tw: number;
  /** Radiant Globe Temperature (°C) */
  tg: number;
  /** Wet-Bulb Globe Temperature (°C) */
  wbgt: number;
  /** Thermal load category */
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
  /** Tailwind color classes for badges */
  riskColor: string;
  /** Hex color code for badges/map markers */
  colorHex: string;
  /** PriSEHAT / Health state category */
  state: 'Balanced' | 'Adapt' | 'Recover' | 'Act';
  /** Clinical and operational safety protocol */
  action: string;
}

/**
 * Calculates Stull (2011) Natural Wet-Bulb Temperature (Tw / Tnw).
 *
 * Tw = Td * atan(0.151977 * (RH + 8.313659)^0.5)
 *      + atan(Td + RH)
 *      - atan(RH - 1.676331)
 *      + 0.00391838 * RH^1.5 * atan(0.023101 * RH)
 *      - 4.686035
 */
export function calculateStullWetBulb(temperatureC: number, relativeHumidity: number): number {
  const t = temperatureC;
  const rh = Math.max(0, Math.min(100, relativeHumidity));

  const tw =
    t * Math.atan(0.151977 * Math.pow(rh + 8.313659, 0.5)) +
    Math.atan(t + rh) -
    Math.atan(rh - 1.676331) +
    0.00391838 * Math.pow(rh, 1.5) * Math.atan(0.023101 * rh) -
    4.686035;

  return Math.round(tw * 10) / 10;
}

/**
 * Calculates Radiant Globe Temperature (Tg).
 * Outdoor Direct Sun: Td + 6.5°C
 * Indoor / Shaded:    Td + 0.8°C
 */
export function calculateGlobeTemperature(temperatureC: number, isDirectSun: boolean): number {
  const tg = isDirectSun ? temperatureC + 6.5 : temperatureC + 0.8;
  return Math.round(tg * 10) / 10;
}

/**
 * Computes WBGT from ambient temperature (Td), relative humidity (RH), and solar radiant status.
 *
 * Outdoor (Direct Sun): WBGT = 0.7 * Tnw + 0.2 * Tg + 0.1 * Td
 * Indoor / Shaded:     WBGT = 0.7 * Tnw + 0.3 * Tg
 */
export function calculateWbgt(
  temperatureC: number,
  relativeHumidity: number,
  isDirectSun: boolean
): WbgtCalculationResult {
  const t = temperatureC;
  const rh = Math.max(0, Math.min(100, relativeHumidity));

  // 1. Stull Wet Bulb
  const tw = calculateStullWetBulb(t, rh);

  // 2. Globe Temperature
  const tg = calculateGlobeTemperature(t, isDirectSun);

  // 3. WBGT formulation
  const rawWbgt = isDirectSun
    ? 0.7 * tw + 0.2 * tg + 0.1 * t
    : 0.7 * tw + 0.3 * tg;

  const wbgt = Math.round(rawWbgt * 10) / 10;

  // 4. Threshold classifications
  let riskLevel: WbgtCalculationResult['riskLevel'] = 'Low';
  let riskColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
  let colorHex = '#10B981'; // emerald-500
  let state: WbgtCalculationResult['state'] = 'Balanced';
  let action = 'Standard hydration and routine physical schedules intact.';

  if (wbgt >= 32.2) {
    riskLevel = 'Extreme';
    riskColor = 'text-rose-800 bg-rose-50 border-rose-300';
    colorHex = '#EF4444'; // red-500
    state = 'Act';
    action = 'Suspend direct thermal exertion. Trigger autonomic recovery protocol.';
  } else if (wbgt >= 31.1) {
    riskLevel = 'Very High';
    riskColor = 'text-orange-800 bg-orange-50 border-orange-300';
    colorHex = '#F97316'; // orange-500
    state = 'Act';
    action = 'Mandate 20-min cooling breaks per hour. Limit active outdoor load.';
  } else if (wbgt >= 29.4) {
    riskLevel = 'High';
    riskColor = 'text-amber-800 bg-amber-50 border-amber-300';
    colorHex = '#F59E0B'; // amber-500
    state = 'Recover';
    action = 'Reduce aerobic training duration. Shift sessions to shaded/indoor facilities.';
  } else if (wbgt >= 26.7) {
    riskLevel = 'Moderate';
    riskColor = 'text-yellow-800 bg-yellow-50 border-yellow-300';
    colorHex = '#EAB308'; // yellow-500
    state = 'Adapt';
    action = 'Enforce scheduled hydration pacing. Monitor autonomic recovery trends.';
  }

  return {
    tw,
    tg,
    wbgt,
    riskLevel,
    riskColor,
    colorHex,
    state,
    action,
  };
}
