"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #050510, #03030c)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 rounded-full blur-sm pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                D
              </div>
              <span className="font-bold text-white text-lg tracking-tight">DevNova</span>
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs mb-5">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/5491166046030"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)" }}
              >
                <MessageCircle size={16} style={{ color: "#4ade80" }} />
              </a>
              <a
                href="mailto:info@devnova.com"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <Mail size={16} style={{ color: "#a5b4fc" }} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.links}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:info@devnova.com"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  info@devnova.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491166046030"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  +54 11 6604-6030
                </a>
              </li>
              <li className="text-sm text-white/30">Argentina ðŸ‡¦ðŸ‡·</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-white/30">
            Â© {new Date().getFullYear()} DevNova. {t.footer.copyright}
          </p>
          <p className="text-xs text-white/25">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
