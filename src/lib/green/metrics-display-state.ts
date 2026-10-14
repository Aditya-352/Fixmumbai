/**
 * Metrics display state — the single model behind every figure the right panel
 * renders.
 *
 * WHY THIS EXISTS
 * Phase C.1 closed the server side: `/metrics` now attaches a validation block
 * and refuses to compute a metric for a city with no records. The panel, however,
 * still had three ways to display a figure that carried NO status:
 *
 *   1. INITIAL RENDER — `metricsData` was seeded from a browser-side
 *      `calculateComprehensiveHugsiMetrics(...)` call while `metricsValidation`
 *      was `null`, so no warning badge rendered at all. A computed-in-the-browser
 *      figure looked identical to a server result.
 *   2. UNEXPECTED RESPONSE — the panel fell back to recomputing locally.
 *   3. TRANSPORT FAILURE — the `catch` branch recomputed locally.
 *
 * `MUMBAI_HUGSI_METRICS` (hugsi-metrics.ts) was a fourth, latent path: it is
 * precomputed at module load from the same unapproved inputs and was imported by
 * the panel without being used. The import has been removed so the path cannot be
 * reopened by accident.
 *
 * All four now funnel through this module, so the status cannot be forgotten at a
 * new call site. The reducer is a pure function, which is why it can be unit
 * tested in this repository's node-only vitest setup without a DOM or a React
 * testing library.
 *
 * VALIDATED IS NOT REACHABLE TODAY
 * No city has an approved boundary plus level-compatible population, so no
 * response can carry an approval. `VALIDATED` is only produced from an explicit
 * `status: 'PUBLISHED'` AND `independentlyValidated: true` in the server payload.
 * Nothing in the current codebase can emit it.
 */

export type MetricsStatus =
  | 'VALIDATED'
  | 'UNVALIDATED'
  | 'DATA_UNAVAILABLE'
  | 'BROWSER_COMPUTED';

/** Where the figure currently on screen came from. */
export type MetricsOrigin = 'SERVER' | 'BROWSER' | 'NONE';

export interface MetricsDisplayState {
  status: MetricsStatus;
  origin: MetricsOrigin;
  /** True only for an explicit, server-confirmed validation decision. */
  independentlyValidated: boolean;
  /** Machine-readable reasons, always shown to the user. Never empty when unvalidated. */
  reasons: string[];
  /** Shown when the server declined to compute a metric for this city. */
  unavailableMessage: string | null;
  /** True while the first request is still in flight. */
  pending: boolean;
}

const BROWSER_REASON =
  'Computed in the browser, not by the metrics service. This figure has not been ' +
  'checked against a server result and must not be cited as a verified statistic.';

function make(
  status: MetricsStatus,
  origin: MetricsOrigin,
  reasons: string[],
  extra: Partial<MetricsDisplayState> = {}
): MetricsDisplayState {
  return {
    status,
    origin,
    independentlyValidated: status === 'VALIDATED',
    reasons,
    unavailableMessage: null,
    pending: false,
    ...extra,
  };
}

/**
 * State shown before the first `/metrics` response arrives.
 *
 * The panel still pre-computes a figure so the tab is never blank, which is the
 * existing Mumbai experience. The smallest safe change is therefore to LABEL that
 * figure rather than suppress it, so the first paint is honest instead of
 * implying a server result.
 */
export function initialMetricsState(): MetricsDisplayState {
  return make('BROWSER_COMPUTED', 'BROWSER', [
    'Shown before the metrics service has responded. ' + BROWSER_REASON,
  ], { pending: true });
}

/** State while a recalculation is in flight and a previous figure is on screen. */
export function pendingMetricsState(previous: MetricsDisplayState): MetricsDisplayState {
  // The previously-labelled figure stays on screen and keeps its label; only the
  // pending flag changes. Re-labelling to BROWSER_COMPUTED here would be wrong:
  // the visible figure is still the previous server/ browser result.
  return { ...previous, pending: true };
}

export interface MetricsApiEnvelope {
  ok?: boolean;
  data?: unknown;
  meta?: {
    validation?: {
      availability?: 'AVAILABLE' | 'NO_DATA';
      status?: 'PUBLISHED' | 'UNVALIDATED';
      independentlyValidated?: boolean;
      reasons?: string[];
    };
    warnings?: string[];
  };
}

/**
 * Derive display state from a `/metrics` response body.
 *
 * Handles every shape the endpoint can return:
 *   - `data` present, validated   → VALIDATED
 *   - `data` present, unvalidated → UNVALIDATED (served but not verified)
 *   - availability NO_DATA        → DATA_UNAVAILABLE, no figure
 *   - anything else               → BROWSER_COMPUTED, because the panel will
 *                                   recompute locally and that must be labelled
 */
export function metricsStateFromResponse(json: MetricsApiEnvelope): MetricsDisplayState {
  const validation = json?.meta?.validation;

  // The city has no data at all. No figure may be displayed.
  if (validation?.availability === 'NO_DATA') {
    // A non-validated state must always explain itself. The server may omit
    // `reasons` on this branch, so a default is supplied rather than leaving the
    // list empty.
    const reasons = validation.reasons?.length ? validation.reasons : [
      `No supported metric data exists for the selected city, so no figure is shown.`,
    ];
    return make(
      'DATA_UNAVAILABLE',
      'NONE',
      reasons,
      {
        unavailableMessage:
          (json?.meta?.warnings ?? []).join(' ') ||
          'Metrics are not available for the selected city.',
      }
    );
  }

  if (json?.ok && json.data) {
    // VALIDATED requires an explicit server decision, not merely the absence of
    // a warning. Both conditions are checked so a partially-populated payload
    // can never be read as approval.
    if (validation?.status === 'PUBLISHED' && validation?.independentlyValidated === true) {
      return make('VALIDATED', 'SERVER', []);
    }
    return make(
      'UNVALIDATED',
      'SERVER',
      validation?.reasons ?? [
        'The metrics service returned no validation status for this figure.',
      ]
    );
  }

  // No usable payload. The panel will recompute locally, so say so.
  return make('BROWSER_COMPUTED', 'BROWSER', [BROWSER_REASON]);
}

/**
 * State after the request could not be completed at all (network error, non-JSON
 * body, server fault). The panel recomputes locally; that is never presented as
 * a server result.
 */
export function metricsStateFromTransportFailure(): MetricsDisplayState {
  return make('BROWSER_COMPUTED', 'BROWSER', [
    'The metrics service could not be reached. ' + BROWSER_REASON,
  ]);
}

/**
 * A figure may only be presented as validated when it came from the server AND
 * the server explicitly approved it. Guards the render path itself, so a future
 * refactor cannot show a green "validated" banner over a browser-computed number.
 */
export function mayPresentAsValidated(state: MetricsDisplayState): boolean {
  return (
    state.status === 'VALIDATED' &&
    state.origin === 'SERVER' &&
    state.independentlyValidated
  );
}

/** True whenever the figure on screen must carry a visible warning. */
export function requiresWarning(state: MetricsDisplayState): boolean {
  return state.status !== 'VALIDATED';
}
