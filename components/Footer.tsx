"use client";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { NovaLogo } from "./NovaMascot";

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
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Gold top accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.35), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5 w-fit">
              <NovaLogo size={32} />
              <span className="font-black text-white text-lg tracking-tight">DevNova</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/5491166046030"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(37,211,102,0.09)", border: "1px solid rgba(37,211,102,0.18)" }}
              >
                <MessageCircle size={16} style={{ color: "#4ade80" }} />
              </a>
              <a
                href="mailto:info@devnova.com"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(245,196,0,0.09)", border: "1px solid rgba(245,196,0,0.18)" }}
              >
                <Mail size={16} style={{ color: "#F5C400" }} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">{t.footer.links}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Contacto</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:info@devnova.com" className="text-sm text-white/40 hover:text-white transition-colors">
                  info@devnova.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5491166046030" className="text-sm text-white/40 hover:text-white transition-colors">
                  +54 11 6604-6030
                </a>
              </li>
              <li className="text-sm text-white/25">Argentina 🇦🇷</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} DevNova. {t.footer.copyright}
          </p>
          <p className="text-xs text-white/20">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
