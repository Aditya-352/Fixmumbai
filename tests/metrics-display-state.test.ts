/**
 * Phase C.2 — every metrics display path must carry an explicit status.
 *
 * The right panel can put a figure on screen from four routes:
 *   1. the initial browser-side computation, before any request completes;
 *   2. a successful `/metrics` response;
 *   3. a city the server declined to compute (no figure may be shown);
 *   4. a transport failure or unusable payload, where it recomputes locally.
 *
 * Each is asserted here against the pure display-state model, which is the same
 * object the component renders from. This fits the repository's node-only vitest
 * setup — no DOM, no React testing library, no extra dependency.
 */

import { describe, it, expect } from 'vitest';
import {
  initialMetricsState,
  pendingMetricsState,
  metricsStateFromResponse,
  metricsStateFromTransportFailure,
  mayPresentAsValidated,
  requiresWarning,
  type MetricsApiEnvelope,
} from '@/lib/green/metrics-display-state';

// ─────────────────────────────────────────────────────────────────────────────
// Path 1 — initial render, before the request completes
// ─────────────────────────────────────────────────────────────────────────────

describe('C.2 path 1: initial render carries a status', () => {
  it('is labelled BROWSER_COMPUTED, not silently blank', () => {
    const s = initialMetricsState();
    expect(s.status).toBe('BROWSER_COMPUTED');
    expect(s.origin).toBe('BROWSER');
    expect(s.independentlyValidated).toBe(false);
  });

  it('is flagged pending so the UI can tell it apart from a settled figure', () => {
    expect(initialMetricsState().pending).toBe(true);
  });

  it('always explains itself — the warning list is never empty', () => {
    const reasons = initialMetricsState().reasons;
    expect(reasons.length).toBeGreaterThan(0);
    expect(reasons.join(' ')).toMatch(/browser/i);
    expect(reasons.join(' ')).toMatch(/not been checked against a server result/i);
  });

  it('cannot be presented as validated', () => {
    const s = initialMetricsState();
    expect(mayPresentAsValidated(s)).toBe(false);
    expect(requiresWarning(s)).toBe(true);
  });

  it('mentions that it predates the metrics service response', () => {
    expect(initialMetricsState().reasons.join(' ')).toMatch(/before the metrics service/i);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Path 2 — successful API response
// ─────────────────────────────────────────────────────────────────────────────

describe('C.2 path 2: API success carries the server validation status', () => {
  const unvalidatedResponse = (): MetricsApiEnvelope => ({
    ok: true,
    data: { urbanGreenPercentage: 18.3 },
    meta: {
      validation: {
        availability: 'AVAILABLE',
        status: 'UNVALIDATED',
        independentlyValidated: false,
        reasons: ['Boundary area is a hardcoded 603.4 km2 figure.', 'Population is a projection.'],
      },
      warnings: [],
    },
  });

  it('an unvalidated server figure stays UNVALIDATED and lists the reasons', () => {
    const s = metricsStateFromResponse(unvalidatedResponse());
    expect(s.status).toBe('UNVALIDATED');
    expect(s.origin).toBe('SERVER');
    expect(s.reasons).toHaveLength(2);
    expect(s.pending).toBe(false);
    expect(mayPresentAsValidated(s)).toBe(false);
  });

  it('only becomes VALIDATED on an explicit server approval', () => {
    const s = metricsStateFromResponse({
      ok: true,
      data: {},
      meta: { validation: { availability: 'AVAILABLE', status: 'PUBLISHED', independentlyValidated: true } },
    });
    expect(s.status).toBe('VALIDATED');
    expect(s.origin).toBe('SERVER');
    expect(s.reasons).toHaveLength(0);
    expect(mayPresentAsValidated(s)).toBe(true);
    expect(requiresWarning(s)).toBe(false);
  });

  it('refuses to treat a partial payload as approval', () => {
    // 'PUBLISHED' without the corroborating flag, or the flag without the
    // status, must NOT read as validated.
    for (const validation of [
      { availability: 'AVAILABLE', status: 'PUBLISHED' as const },
      { availability: 'AVAILABLE', independentlyValidated: true },
      { availability: 'AVAILABLE', status: 'UNVALIDATED' as const, independentlyValidated: true },
    ]) {
      const s = metricsStateFromResponse({ ok: true, data: {}, meta: { validation } });
      expect(s.status).not.toBe('VALIDATED');
      expect(mayPresentAsValidated(s)).toBe(false);
      expect(s.reasons.length).toBeGreaterThan(0);
    }
  });

  it('never reports VALIDATED for a browser origin even if flags say so', () => {
    const s: ReturnType<typeof initialMetricsState> = {
      ...initialMetricsState(),
      status: 'VALIDATED',
      origin: 'BROWSER',
      independentlyValidated: true,
    };
    expect(mayPresentAsValidated(s)).toBe(false);
  });

  it('defaults to UNVALIDATED when the server omits a validation block', () => {
    const s = metricsStateFromResponse({ ok: true, data: { x: 1 } });
    expect(s.status).toBe('UNVALIDATED');
    expect(s.origin).toBe('SERVER');
    expect(s.reasons.length).toBeGreaterThan(0);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Path 3 — city the server declined to compute
// ─────────────────────────────────────────────────────────────────────────────

describe('C.2 path 3: unavailable city shows no figure', () => {
  const unavailable = (): MetricsApiEnvelope => ({
    ok: true,
    data: null,
    meta: {
      validation: {
        availability: 'NO_DATA',
        status: 'UNVALIDATED',
        independentlyValidated: false,
        reasons: ['No green-space records are registered for Bengaluru.'],
      },
      warnings: ['DATA_UNAVAILABLE: no green-space records for Bengaluru.'],
    },
  });

  it('reports DATA_UNAVAILABLE with no figure origin', () => {
    const s = metricsStateFromResponse(unavailable());
    expect(s.status).toBe('DATA_UNAVAILABLE');
    expect(s.origin).toBe('NONE');
    expect(s.independentlyValidated).toBe(false);
  });

  it('supplies an explicit message so the panel can explain itself', () => {
    const s = metricsStateFromResponse(unavailable());
    expect(s.unavailableMessage).toBeTruthy();
    expect(s.unavailableMessage).toMatch(/DATA_UNAVAILABLE/);
  });

  it('never presents a browser or server figure for an empty city', () => {
    const s = metricsStateFromResponse(unavailable());
    expect(s.origin).toBe('NONE');
    expect(mayPresentAsValidated(s)).toBe(false);
    expect(requiresWarning(s)).toBe(true);
  });

  it('wins over any payload that might accompany it', () => {
    // If a server ever sent both a payload and NO_DATA, availability must win.
    const s = metricsStateFromResponse({
      ok: true,
      data: { urbanGreenPercentage: 18.3 },
      meta: { validation: { availability: 'NO_DATA', reasons: ['no records'] } },
    });
    expect(s.status).toBe('DATA_UNAVAILABLE');
    expect(s.origin).toBe('NONE');
  });

  it('falls back to a generic message when warnings are absent', () => {
    const s = metricsStateFromResponse({
      ok: true,
      data: null,
      meta: { validation: { availability: 'NO_DATA', reasons: [] } },
    });
    expect(s.unavailableMessage).toMatch(/not available/i);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Path 4 — transport failure / unusable payload
// ─────────────────────────────────────────────────────────────────────────────

describe('C.2 path 4: network failure is labelled browser-computed', () => {
  it('labels a transport failure as browser-computed, not server-verified', () => {
    const s = metricsStateFromTransportFailure();
    expect(s.status).toBe('BROWSER_COMPUTED');
    expect(s.origin).toBe('BROWSER');
    expect(s.independentlyValidated).toBe(false);
    expect(mayPresentAsValidated(s)).toBe(false);
  });

  it('says both that the service was unreachable and that it is unverified', () => {
    const reasons = metricsStateFromTransportFailure().reasons.join(' ');
    expect(reasons).toMatch(/could not be reached/i);
    expect(reasons).toMatch(/not been checked against a server result/i);
  });

  it('treats an unusable payload the same way as a transport failure', () => {
    for (const payload of [{}, { ok: false }, { ok: true }, { ok: true, data: null }, null as any]) {
      const s = metricsStateFromResponse(payload);
      expect(s.status).toBe('BROWSER_COMPUTED');
      expect(s.origin).toBe('BROWSER');
      expect(s.reasons.length).toBeGreaterThan(0);
    }
  });

  it('never leaves a settled figure with an empty reason list', () => {
    const states = [
      initialMetricsState(),
      metricsStateFromTransportFailure(),
      metricsStateFromResponse({ ok: true, data: {} }),
      metricsStateFromResponse({}),
      metricsStateFromResponse({ ok: true, data: null, meta: { validation: { availability: 'NO_DATA' } } }),
    ];
    for (const s of states) {
      if (s.status !== 'VALIDATED') expect(s.reasons.length).toBeGreaterThan(0);
      expect(requiresWarning(s)).toBe(true);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Pending transitions
// ─────────────────────────────────────────────────────────────────────────────

describe('C.2: pending transitions preserve the existing label', () => {
  it('keeps the previous status while a recalculation is in flight', () => {
    const served = metricsStateFromResponse({
      ok: true,
      data: {},
      meta: { validation: { availability: 'AVAILABLE', status: 'UNVALIDATED', reasons: ['r'] } },
    });
    const pending = pendingMetricsState(served);
    expect(pending.pending).toBe(true);
    expect(pending.status).toBe(served.status);
    expect(pending.origin).toBe(served.origin);
    expect(pending.reasons).toEqual(served.reasons);
  });

  it('does not relabel a server figure as browser-computed mid-flight', () => {
    const served = metricsStateFromResponse({
      ok: true,
      data: {},
      meta: { validation: { availability: 'AVAILABLE', status: 'UNVALIDATED', reasons: ['r'] } },
    });
    expect(pendingMetricsState(served).origin).toBe('SERVER');
  });

  it('leaves an unavailable state unavailable while pending', () => {
    const unavailable = metricsStateFromResponse({
      ok: true,
      data: null,
      meta: { validation: { availability: 'NO_DATA', reasons: ['no records'] } },
    });
    const pending = pendingMetricsState(unavailable);
    expect(pending.status).toBe('DATA_UNAVAILABLE');
    expect(pending.unavailableMessage).toBeTruthy();
  });

  it('is not idempotent on `pending` (it flips it to true)', () => {
    const settled = { ...initialMetricsState(), pending: false };
    expect(pendingMetricsState(settled).pending).toBe(true);
  });
});
