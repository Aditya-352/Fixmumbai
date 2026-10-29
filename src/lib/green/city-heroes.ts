/**
 * City hero configuration for the main civic-GIS dashboard.
 *
 * Each supported city has:
 *  - a hero image (all are 1376×768 so the banner keeps a constant ratio),
 *  - an `object-position` tuned for that specific photograph,
 *  - the hero heading, and
 *  - the wording used for the ward statistic.
 *
 * Images are credited in `public/images/ATTRIBUTIONS.md`. The Pune and
 * Bengaluru photographs are derivatives of Wikimedia Commons originals.
 *
 * This module is intentionally data-only so it can be imported from both
 * server components (for the page shell) and client components (for the
 * interactive hero) without pulling anything heavy in.
 */

import { CITY_REGISTRY, type CityId } from '@/lib/green/config';

export interface CityHeroConfig {
  /** Path under `public/`. Resolve with `withBasePath()` before use. */
  image: string;
  /** CSS `object-position` for the hero photograph. */
  objectPosition: string;
  /** Hero headline, e.g. "A cleaner, greener and better Pune". */
  heading: string;
  /** Short name used inside the headline. */
  shortName: string;
  /** Label for the ward statistic, e.g. "PMC wards". */
  wardAuthority: string;
  /**
   * Ward authority as it should read in the stat sub-line:
   * "mapped across 24 BMC wards".
   */
  wardLabel: string;
}

export const CITY_HEROES: Record<CityId, CityHeroConfig> = {
  mumbai: {
    image: '/images/mumbai-green-hero.jpg',
    objectPosition: 'center center',
    heading: 'A cleaner, greener and better Mumbai',
    shortName: 'Mumbai',
    wardAuthority: 'BMC',
    wardLabel: 'BMC wards',
  },
  pune: {
    image: '/images/pune-green-hero.jpg',
    // The panorama is very wide, so the banner crops a band out of it. Hold
    // that band high enough to keep the skyline, the green towers and the
    // sky in frame, with the flyover sweeping through the lower right.
    objectPosition: '50% 22%',
    heading: 'A cleaner, greener and better Pune',
    shortName: 'Pune',
    wardAuthority: 'PMC',
    wardLabel: 'PMC wards',
  },
  kolkata: {
    image: '/images/kolkata-green-hero.jpg',
    // The panorama is wide, so the banner crops a band out of it. Hold that
    // band on the landmarks — Victoria Memorial, the morning mist over the
    // Hooghly, and Howrah Bridge — with the crisp morning sky along the top.
    objectPosition: '50% 32%',
    heading: 'A cleaner, greener and better Kolkata',
    shortName: 'Kolkata',
    wardAuthority: 'KMC',
    wardLabel: 'KMC wards',
  },
  nagpur: {
    image: '/images/nagpur-green-hero.jpg',
    // Anchor the horizontal crop to the LEFT edge so the temple, the tricolour
    // landmark and the green roundabout in the left of the frame are never cut
    // away. Vertically, hold the band on the landmark and the lake rather than
    // the empty upper sky.
    objectPosition: '0% 38%',
    heading: 'A cleaner, greener and better Nagpur',
    shortName: 'Nagpur',
    wardAuthority: 'NMC',
    wardLabel: 'NMC wards',
  },
  hyderabad: {
    image: '/images/hyderabad-green-hero.jpg',
    // Hold the band on the Charminar and the lake, with the sunset sky along
    // the top edge.
    objectPosition: '50% 30%',
    heading: 'A cleaner, greener and better Hyderabad',
    shortName: 'Hyderabad',
    wardAuthority: 'GHMC',
    wardLabel: 'GHMC wards',
  },
  delhi: {
    image: '/images/delhi-green-hero.jpg',
    // The panorama is wide, so the banner crops a band out of it. Hold that
    // band on the landmarks — India Gate with green solar terraces, futuristic
    // Qutub Minar with observation decks, and the solar stadium.
    objectPosition: '50% 38%',
    heading: 'A cleaner, greener and better Delhi',
    shortName: 'Delhi',
    wardAuthority: 'MCD',
    wardLabel: 'MCD wards',
  },
  bengaluru: {
    image: '/images/bengaluru-green-hero.jpg',
    // The panorama is wide, so the banner crops a band out of it. Hold that
    // band on the landmarks — Vidhana Soudha, the metro flyover and the
    // stadium — with the skyline and sky along the top.
    objectPosition: '50% 26%',
    heading: 'A cleaner, greener and better Bengaluru',
    shortName: 'Bengaluru',
    wardAuthority: 'BBMP',
    wardLabel: 'BBMP wards',
  },
};

/** Hero configuration for a city id, with a safe fallback to the default. */
export function getCityHero(cityId: CityId | undefined): CityHeroConfig {
  if (cityId && cityId in CITY_HEROES) return CITY_HEROES[cityId];
  return CITY_HEROES.mumbai;
}

/**
 * Number of administrative wards for a city, from the measured boundary
 * metadata in the city registry. Returns `null` when the figure has not been
 * measured, so callers can hide the statistic instead of inventing a number.
 */
export function cityWardCount(cityId: CityId | undefined): number | null {
  if (!cityId) return null;
  const cfg = CITY_REGISTRY[cityId];
  const n = cfg?.boundaryMeta?.unitCount;
  return typeof n === 'number' && n > 0 ? n : null;
}
