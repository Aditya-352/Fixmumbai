// Mirrors `basePath` in next.config.js. The app is served under /pulse, so any
// absolute URL handed to the browser must include it or it 404s in production.
export const APP_BASE_PATH = '/pulse';

/** Join a root-relative path onto the app base path (idempotent). */
export function withBasePath(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = APP_BASE_PATH;
  if (path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}
