// Configuración centralizada de contacto: un solo lugar para el email y el
// número de WhatsApp, y los helpers que arman las URLs sin fricción para el
// visitante (nada de abrir apps de escritorio ni pestañas que lo saquen del sitio).

export const CONTACT_EMAIL = "info@devnova.com.ar";

export const LINKEDIN_URL = "https://www.linkedin.com/company/devnova-design/";

// Formato internacional, solo dígitos (sin "+", espacios ni guiones) — usado en la URL de wa.me.
export const WHATSAPP_NUMBER = "5491166046030";

export const WHATSAPP_DISPLAY = "+54 9 11 6604-6030";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Abre el compositor web de Gmail directamente — evita que mailto: dispare
// una app de escritorio (Outlook, etc.) que obliga a iniciar sesión y hace
// que el visitante abandone antes de escribir el mail.
export function gmailComposeUrl(subject: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
    su: subject,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

// Fallback secundario para quien prefiere su propio cliente de mail.
export function mailtoUrl(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
