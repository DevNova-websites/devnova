"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CONTACT_EMAIL, LINKEDIN_URL, WHATSAPP_DISPLAY, whatsappUrl, gmailComposeUrl } from "@/lib/contact";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".contact-fade", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        ".contact-fade",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API no disponible: no hay nada más que hacer, el email ya está visible en texto plano.
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      ref={rootRef}
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="contact-fade opacity-0 section-label block mb-4">{t.contact.eyebrow}</p>
        <h2 className="contact-fade opacity-0 font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace mb-4">
          {t.contact.title}
        </h2>
        <p className="contact-fade opacity-0 text-deepspace/60 font-light max-w-lg mb-14 md:mb-20">
          {t.contact.sub}
        </p>

        <div className="contact-fade opacity-0 grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
          <div className="space-y-8">
            <a
              href={whatsappUrl(t.contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="w-12 h-12 rounded-full bg-deepspace text-stardust flex items-center justify-center shrink-0 group-hover:bg-nebula transition-colors">
                <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <div>
                <div className="section-label mb-1">{t.contact.whatsapp}</div>
                <div className="text-base md:text-lg text-deepspace font-medium group-hover:text-nebula transition-colors">
                  {WHATSAPP_DISPLAY}
                </div>
              </div>
            </a>

            <div>
              <div className="flex items-center gap-4">
                <a
                  href={gmailComposeUrl(t.contact.emailSubject)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 min-w-0"
                >
                  <span className="w-12 h-12 rounded-full bg-deepspace text-stardust flex items-center justify-center shrink-0 group-hover:bg-nebula transition-colors">
                    <Mail className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <div className="section-label mb-1">{t.contact.emailCta}</div>
                    <div className="text-base md:text-lg text-deepspace font-medium group-hover:text-nebula transition-colors truncate">
                      {CONTACT_EMAIL}
                    </div>
                  </div>
                </a>
                <button
                  onClick={copyEmail}
                  className="pill shrink-0 hover:bg-nebula/15 hover:border-nebula hover:text-nebula transition-colors"
                >
                  {copied ? t.contact.copied : t.contact.copyEmail}
                </button>
              </div>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="w-12 h-12 rounded-full bg-deepspace text-stardust flex items-center justify-center shrink-0 font-heading font-bold text-sm group-hover:bg-nebula transition-colors">
                in
              </span>
              <div>
                <div className="section-label mb-1">LinkedIn</div>
                <div className="text-base md:text-lg text-deepspace font-medium group-hover:text-nebula transition-colors">
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
                <p className="text-sm text-negative">{t.contact.formError}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
