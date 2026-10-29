/**
 * Metric availability vs. metric validation.
 *
 * These are two different questions and Phase C conflated them:
 *
 *   AVAILABILITY — "do we have records to compute a metric from?"
 *                  Mumbai: yes (45 mapped records). Pune/Bengaluru: no.
 *                  Driven by `cityDataStatus()`.
 *
 *   VALIDATION   — "is this figure independently verified and safe to publish?"
 *                  Mumbai: NO. The boundary is a measured bounding box rather
 *                  than an administrative polygon, its area is disputed
 *                  (475.6 km² measured vs 603.4 km² hardcoded), and the
 *                  population projections have no documented derivation.
 *                  Driven by `isPublished()`.
 *
 * WHY THIS SEPARATION MATTERS
 * Gating on validation alone (Phase C as first written) made `/metrics` return
 * `data: null` for Mumbai — and because GreenRightPanel has no error branch, the
 * client silently recomputed the same figures in the browser and displayed them
 * as if they had come from the server. The server refusal achieved nothing while
 * creating the appearance of a control that did not exist.
 *
 * The policy here is therefore:
 *   - Metrics are SERVED for any city that has records, so the Mumbai experience
 *     is preserved and the numbers come from the server.
 *   - Every response carries an explicit validation block. A figure that is
 *     served but unvalidated is labelled as such rather than presented as
 *     verified, and the reasons are machine-readable.
 *
 * This does NOT upgrade Mumbai's metrics to "validated". Serving a number and
 * validating a number are independent acts, and only the first is happening.
 */

import { isPublished, describeCityPublication, type CityConfig } from './config';
import { cityDataStatus } from './city-param';

export type MetricAvailability = 'AVAILABLE' | 'NO_DATA';
export type MetricValidationStatus = 'PUBLISHED' | 'UNVALIDATED';

/** Extra, metric-specific problems beyond the generic boundary metadata. */
const METRIC_SPECIFIC_REASONS = [
  'The boundary area used for these percentages is a hardcoded figure in ' +
    'hugsi-metrics.ts (603.4 km² for Greater Mumbai), not a measured ' +
    'administrative boundary. The ward geometry that HAS been measured sums to ' +
    '475.6 km² — a 21% discrepancy that is unresolved.',
  'Population for 2021 and 2024 is a hardcoded projection with no documented ' +
    'derivation. Only the 2011 Census figure is a documented measurement.',
  'The study area is a rectangular bounding box rather than the municipal ' +
    'boundary polygon, so percentages are relative to an envelope, not a ' +
    'jurisdiction.',
];

export interface MetricValidation {
  /** Whether a metric could be computed at all for this city. */
  availability: MetricAvailability;
  /**
   * PUBLISHED   — inputs approved; safe to cite as a validated statistic.
   * UNVALIDATED — computed from provisional or disputed inputs. Serve, but
   *              never present as verified.
   */
  status: MetricValidationStatus;
  /** Convenience mirror of `status === 'PUBLISHED'`. */
  independentlyValidated: boolean;
  /** Every reason the figure is not validated. Empty only when PUBLISHED. */
  reasons: string[];
}

export function assessMetrics(city: CityConfig): MetricValidation {
  // HUGSI metrics engine and ward boundaries are implemented exclusively for Mumbai
  const hasData = city.id === 'mumbai' && cityDataStatus(city) === 'AVAILABLE';
  const availability: MetricAvailability = hasData ? 'AVAILABLE' : 'NO_DATA';

  if (availability === 'NO_DATA') {
    return {
      availability,
      status: 'UNVALIDATED',
      independentlyValidated: false,
      reasons: [
        `No green-space records are registered for ${city.name}, so no metric can be computed.`,
      ],
    };
  }

  const published = isPublished(city);
  if (published) {
    return { availability, status: 'PUBLISHED', independentlyValidated: true, reasons: [] };
  }

  const generic = describeCityPublication(city).reasons;
  // Only add the metric-specific notes for a city whose inputs are actually
  // being used to produce a number.
  return {
    availability,
    status: 'UNVALIDATED',
    independentlyValidated: false,
    reasons: [...generic, ...METRIC_SPECIFIC_REASONS],
  };
}
