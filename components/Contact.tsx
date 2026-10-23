"use client";

import { useState } from "react";
import { MessageCircle, Mail, Copy, Check } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CONTACT_EMAIL, FORMSPREE_FORM_ID, LINKEDIN_URL, WHATSAPP_DISPLAY, whatsappUrl, gmailComposeUrl } from "@/lib/contact";
import { trackContact } from "@/lib/analytics";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      trackContact("copy_email", "contact");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API no disponible: no hay nada más que hacer, el email ya está visible en texto plano.
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      if (!FORMSPREE_FORM_ID) throw new Error("Formspree form ID not configured");
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _replyto: form.email,
          _subject: `New inquiry from ${form.name}: DevNova website`,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      trackContact("form", "contact");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="reveal section-label block mb-4">{t.contact.eyebrow}</p>
        <h2 className="reveal font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace mb-4">
          {t.contact.title}
        </h2>
        <p className="reveal text-deepspace/60 font-light max-w-lg mb-14 md:mb-20">
          {t.contact.sub}
        </p>

        <div className="reveal grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
          <div className="space-y-8">
            <a
              href={whatsappUrl(t.contact.whatsappMessage)}
              onClick={() => trackContact("whatsapp", "contact")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="w-12 h-12 rounded-full bg-deepspace text-stardust flex items-center justify-center shrink-0 group-hover:bg-nebula transition-colors">
                <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div>
                <div className="section-label mb-1">{t.contact.whatsapp}</div>
                <div className="text-base md:text-lg text-deepspace font-normal group-hover:text-nebula transition-colors">
                  {WHATSAPP_DISPLAY}
                </div>
              </div>
            </a>

            <div>
              <div className="flex items-center gap-4">
                <a
                  href={gmailComposeUrl(t.contact.emailSubject)}
                  onClick={() => trackContact("email", "contact")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 min-w-0"
                >
                  <span className="w-12 h-12 rounded-full bg-deepspace text-stardust flex items-center justify-center shrink-0 group-hover:bg-nebula transition-colors">
                    <Mail className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <div className="section-label mb-1">{t.contact.emailCta}</div>
                    <div className="text-base md:text-lg text-deepspace font-normal group-hover:text-nebula transition-colors truncate">
                      {CONTACT_EMAIL}
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? t.contact.copied : t.contact.copyEmail}
                  title={copied ? t.contact.copied : t.contact.copyEmail}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    copied
                      ? "border-positive text-positive"
                      : "border-deepspace/15 text-deepspace/55 hover:bg-nebula/15 hover:border-nebula hover:text-nebula"
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" strokeWidth={2} /> : <Copy className="w-4 h-4" strokeWidth={1.75} />}
                </button>
              </div>
            </div>

            <a
              href={LINKEDIN_URL}
              onClick={() => trackContact("linkedin", "contact")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="w-12 h-12 rounded-full bg-deepspace text-stardust flex items-center justify-center shrink-0 font-heading font-bold text-sm group-hover:bg-nebula transition-colors">
                in
              </span>
              <div>
                <div className="section-label mb-1">LinkedIn</div>
                <div className="text-base md:text-lg text-deepspace font-normal group-hover:text-nebula transition-colors">
                  DevNova
                </div>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-card border border-deepspace/12 p-6 md:p-8">
            <p className="section-label mb-6">{t.contact.formTitle}</p>
            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wide text-deepspace/50 block mb-1.5">
                  {t.contact.formName}
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-md border border-deepspace/15 bg-stardust px-4 py-2.5 text-sm text-deepspace focus:outline-none focus:border-nebula transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-deepspace/50 block mb-1.5">
                  {t.contact.formEmail}
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-md border border-deepspace/15 bg-stardust px-4 py-2.5 text-sm text-deepspace focus:outline-none focus:border-nebula transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-deepspace/50 block mb-1.5">
                  {t.contact.formMessage}
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full rounded-md border border-deepspace/15 bg-stardust px-4 py-2.5 text-sm text-deepspace focus:outline-none focus:border-nebula transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full px-8 py-3.5 text-sm disabled:opacity-60"
              >
                {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
              </button>

              {status === "sent" && (
                <p className="text-sm text-positive">{t.contact.formSent}</p>
              )}
              {status === "error" && (
                <div className="space-y-3">
                  <p className="text-sm text-negative">{t.contact.formError}</p>
                  {/* Fallback: el mismo mensaje que escribió, precargado en WhatsApp. */}
                  <a
                    href={whatsappUrl(`${form.message}\n\n— ${form.name} (${form.email})`)}
                    onClick={() => trackContact("whatsapp", "form_fallback")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center gap-2 w-full px-8 py-3.5 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                    {t.contact.formErrorWhatsapp}
                  </a>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
