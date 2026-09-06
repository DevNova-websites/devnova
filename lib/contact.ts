// Configuración centralizada de contacto: un solo lugar para el email y el
// número de WhatsApp, y los helpers que arman las URLs sin fricción para el
// visitante (nada de abrir apps de escritorio ni pestañas que lo saquen del sitio).

export const CONTACT_EMAIL = "info@devnova.com";

// TODO-DEVNOVA: reemplazar por el número real de WhatsApp de DevNova.
// Formato internacional, solo dígitos (sin "+", espacios ni guiones).
export const WHATSAPP_NUMBER = "5491100000000";

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
