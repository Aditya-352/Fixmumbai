/**
 * City parameter resolution for the server-side Green Density API.
 *
 * SEPARATION OF CONCERNS
 * This module deliberately does NOT reuse `isPublished()` from config.ts.
 * The two answer different questions and conflating them breaks the product:
 *
 *   isPublished(city)  → "is this city's boundary + population metadata complete
 *                         enough to publish STATISTICS derived from them?"
 *                         Currently FALSE for all three cities, Mumbai included,
 *                         because no approved boundary polygon exists.
 *
 *   cityDataStatus()   → "does this city have any green-space records to serve?"
 *                         Mumbai is AVAILABLE (45 records); Pune and Bengaluru
 *                         are EMPTY because nothing has been ingested.
 *
 * Gating data serving on isPublished() would hide the only working city.
 * Gating statistics on cityDataStatus() would let unverified boundaries produce
 * numbers. They must stay separate.
 *
 * SAFETY INVARIANT
 * A city with no records returns an EMPTY, explicitly labelled response. It
 * must never borrow another city's data, fallback dataset or imagery. That is
 * the single most important behaviour in this file.
 *
 * WHY NOT config.ts
 * Nothing here needed to change config.ts. `getCity()` already performs the
 * closed-union lookup, case/whitespace normalisation and the typed unknown-id
 * error; this module adds HTTP-shaped concerns (duplicate parameters, data
 * availability, response metadata) that do not belong in the city registry.
 */

import { getCity, hasCity, UnknownCityError, type CityConfig, type CityId, listCityIds } from './config';
import { STATIC_GREEN_SPACES_BY_CITY } from './static-spaces-fallback';

/** Base class for every city-parameter failure, carrying its HTTP status. */
export class CityParamError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.name = 'CityParamError';
    this.code = code;
    this.status = status;
  }
}

/** The city id is not in the registry. Never degrades into a Mumbai fallback. */
export class UnknownCityParamError extends CityParamError {
  readonly requestedId: string;
  readonly validCityIds: CityId[];

  constructor(requestedId: string, validCityIds: CityId[]) {
    super(
      `Unknown city id "${requestedId}". Expected one of: ${validCityIds.join(', ')}. ` +
        `This is an error rather than a fallback so that an invalid city never ` +
        `silently returns another city's data.`,
      'UNKNOWN_CITY',
      400
    );
    this.name = 'UnknownCityParamError';
    this.requestedId = requestedId;
    this.validCityIds = validCityIds;
  }
}

/** More than one `city` parameter was supplied. Ambiguous input is a bug signal. */
export class DuplicateCityParamError extends CityParamError {
  readonly requestedIds: string[];

  constructor(requestedIds: string[]) {
    super(
      `Duplicate "city" parameter: ${requestedIds.map((v) => `"${v}"`).join(', ')}. ` +
        `Supply the city at most once.`,
      'DUPLICATE_CITY_PARAM',
      400
    );
    this.name = 'DuplicateCityParamError';
    this.requestedIds = requestedIds;
  }
}

/** Warning code returned with empty results for a city that has no records. */
export const NO_DATA_WARNING = 'NO_GREEN_SPACE_DATA_FOR_CITY';

/** Warning code for city-scoped datasets that only exist for Mumbai. */
export const NOT_AVAILABLE_WARNING = 'NOT_AVAILABLE_FOR_CITY';

/** Warning code attached to statistics whose inputs fail the publication guard. */
export const DATA_UNAVAILABLE_REASON = 'DATA_UNAVAILABLE';

/**
 * Whether a city has any green-space records this API can serve.
 *
 * Derived from the registered per-city fallback datasets rather than from the
 * database, so it stays a pure, deterministic function that unit tests can
 * exercise without a live Prisma connection. A city becomes AVAILABLE here only
 * when it has a registered dataset; a city whose records exist solely in the
 * database must be registered explicitly.
 *
 * This is NOT `isPublished()`. See the module header.
 */
export type CityDataStatus = 'AVAILABLE' | 'EMPTY';

export function cityDataStatus(city: CityConfig): CityDataStatus {
  const records = STATIC_GREEN_SPACES_BY_CITY[city.id];
  return records && records.length > 0 ? 'AVAILABLE' : 'EMPTY';
}

export interface ResolvedCity {
  city: CityConfig;
  /** True when no usable city id was supplied and Mumbai was substituted. */
  isDefault: boolean;
  /** True when the supplied value was present but empty/whitespace. */
  wasEmpty: boolean;
  dataStatus: CityDataStatus;
}

/**
 * Read every value of `city` from a query string.
 *
 * Accepts `URLSearchParams` (what `NextRequest.nextUrl.searchParams` provides)
 * and a plain string, so the function is unit-testable without constructing a
 * Next request object.
 */
export function readCityValues(source: URLSearchParams | string | null | undefined): string[] {
  if (source === null || source === undefined) return [];
  if (typeof source === 'string') {
    return new URLSearchParams(source.startsWith('?') ? source.slice(1) : source).getAll('city');
  }
  return source.getAll('city');
}

/**
 * Resolve the requested city.
 *
 * Behaviour (all approved decisions):
 *   - no `city` parameter            → Mumbai, isDefault = true
 *   - `city=` or whitespace only     → Mumbai, isDefault = true, wasEmpty = true
 *   - two or more `city` parameters  → throws DuplicateCityParamError (400),
 *                                      including when the values are identical
 *   - an unregistered id             → throws UnknownCityParamError (400)
 *
 * Case and surrounding whitespace are normalised exactly as `getCity()` does, so
 * `?city= PUNE ` and `?city=pune` are the same request.
 */
export function resolveCity(
  source: URLSearchParams | string | null | undefined
): ResolvedCity {
  const values = readCityValues(source);

  if (values.length > 1) {
    throw new DuplicateCityParamError(values);
  }

  const city = resolveOne(values.length === 1 ? values[0] : undefined);

  return {
    city,
    isDefault: city.id === 'mumbai' && !values.length,
    wasEmpty: values.length === 1 && values[0].trim() === '',
    dataStatus: cityDataStatus(city),
  };
}

function resolveOne(raw: string | undefined): CityConfig {
  if (raw === undefined) return getCity();

  // An explicitly empty value is treated as "not supplied", per the approved
  // decision, and matches getCity('').
  if (typeof raw !== 'string' || raw.trim() === '') return getCity();

  const key = raw.trim().toLowerCase();

  // hasCity() uses hasOwnProperty, so prototype keys such as 'toString',
  // '__proto__' or 'constructor' can never resolve to a city.
  if (!hasCity(key)) {
    // Preserve the registry's own typed error as the cause for diagnostics.
    try {
      getCity(key);
    } catch (e) {
      if (e instanceof UnknownCityError) {
        throw new UnknownCityParamError(raw, e.validCityIds);
      }
      throw e;
    }
    // Fall back to the registry itself so the list can never drift.
    throw new UnknownCityParamError(raw, listCityIds());
  }

  return getCity(key);
}

/**
 * Shape every city-aware response uses to identify what was actually served, so
 * a client can never mistake one city's empty result for another's data.
 */
export interface CityResponseMeta {
  city: CityId;
  cityName: string;
  isDefaultCity: boolean;
  /** True when the bbox attached to this response is a query envelope only. */
  boundaryIsBoundingBoxOnly: boolean;
}

/**
 * Build the city block for a response `meta`.
 *
 * The boundary flag is deliberately surfaced: `CityConfig.bbox` is a measured
 * query envelope, NOT a municipal boundary, and must not be presented as one.
 */
export function cityMeta(resolved: ResolvedCity): CityResponseMeta {
  return {
    city: resolved.city.id,
    cityName: resolved.city.name,
    isDefaultCity: resolved.isDefault,
    boundaryIsBoundingBoxOnly: resolved.city.boundaryMeta?.isBoundingBoxOnly ?? true,
  };
}

/**
 * Warnings to attach to an empty result for a city with no records.
 * Always includes the city so the response is self-describing.
 */
export function emptyCityWarnings(resolved: ResolvedCity): string[] {
  if (resolved.dataStatus === 'AVAILABLE') {
    return [];
  }
  return [
    `${NO_DATA_WARNING}: no green-space records are registered for ${resolved.city.name}. ` +
      `No other city's records are substituted.`,
  ];
}

/** Serialise a CityParamError into the API's standard error envelope body. */
export function toErrorBody(err: CityParamError): {
  ok: false;
  data: null;
  error: { code: string; message: string; validCityIds?: CityId[]; requestedIds?: string[] };
} {
  const body: {
    ok: false;
    data: null;
    error: { code: string; message: string; validCityIds?: CityId[]; requestedIds?: string[] };
  } = {
    ok: false,
    data: null,
    error: { code: err.code, message: err.message },
  };

  if (err instanceof UnknownCityParamError) {
    body.error.validCityIds = err.validCityIds;
  } else if (err instanceof DuplicateCityParamError) {
    body.error.requestedIds = err.requestedIds;
  }
  return body;
}
