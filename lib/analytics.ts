// Eventos de Google Analytics (gtag lo carga components/CookieConsent.tsx, solo
// si el visitante aceptó las cookies). Si no aceptó, si el script
// todavía no cargó o lo bloqueó un adblocker, no pasa nada.
// generate_lead es el evento recomendado de GA4 para consultas: se puede
// marcar como conversión en el panel de Analytics.

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  (window as GtagWindow).gtag?.("event", name, params);
}

export type ContactMethod = "whatsapp" | "email" | "copy_email" | "linkedin" | "form";

export function trackContact(method: ContactMethod, location: string) {
  trackEvent("generate_lead", { method, location });
}
