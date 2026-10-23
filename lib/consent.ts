// Estado del consentimiento de cookies de devnova.com.ar.
// Se guarda en localStorage (almacenamiento necesario: solo recuerda la elección del visitante).
// Subí CONSENT_VERSION cuando cambien las cookies opcionales, así el banner vuelve a aparecer.

export const GA_MEASUREMENT_ID = "G-XMT952YT7C";

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "dn_cookie_consent";
// Se vuelve a preguntar a los 12 meses.
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 365;

export const OPEN_SETTINGS_EVENT = "dn:open-cookie-settings";

export type ConsentState = {
  accepted: boolean;
  version: number;
  timestamp: string;
};

export function readConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (Date.now() - new Date(parsed.timestamp).getTime() > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(accepted: boolean): ConsentState {
  const state: ConsentState = {
    accepted,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage bloqueado: la elección igual se aplica en esta visita.
  }
  return state;
}

function deleteCookies(match: (name: string) => boolean) {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter(match)
    .forEach((name) => {
      domains.forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      });
    });
}

/** Borra las cookies de Google Analytics cuando se retira el consentimiento. */
export function clearAnalyticsCookies() {
  deleteCookies((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid");
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
