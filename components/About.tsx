"use client";
import { motion } from "framer-motion";
import { Users, Clock, HeadphonesIcon, Sparkles, Globe } from "lucide-react";
import { useLang } from "@/lib/i18n";

const icons = [Sparkles, Clock, HeadphonesIcon, Globe, Users];

const iconStyles = [
  { bg: "rgba(245,196,0,0.12)", color: "#F5C400" },
  { bg: "rgba(255,159,10,0.12)", color: "#FF9F0A" },
  { bg: "rgba(255,214,10,0.12)", color: "#FFD60A" },
  { bg: "rgba(245,196,0,0.12)", color: "#F5C400" },
  { bg: "rgba(255,159,10,0.12)", color: "#FF9F0A" },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative py-36 overflow-hidden">
      {/* Divider line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7"
            >
              <span className="badge">
                <Sparkles size={10} className="fill-current" />
                {t.about.badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight mb-7"
            >
              {t.about.title}{" "}
              <span className="gradient-text">{t.about.titleAccent}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-white/50 leading-relaxed mb-10"
            >
              {t.about.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2.5"
            >
              {["Stripe Secure", "SSL Incluido", "GDPR Friendly", "99.9% Uptime"].map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg text-white/50"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {t.about.features.map((feature, i) => {
              const Icon = icons[i];
              const style = iconStyles[i];
              const isLastOdd = i === t.about.features.length - 1 && t.about.features.length % 2 !== 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className={`card p-7 group cursor-default${isLastOdd ? " col-span-2 max-w-sm mx-auto w-full" : ""}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: style.bg, border: `1px solid ${style.color}22` }}
                  >
                    <Icon size={19} style={{ color: style.color }} />
                  </div>
                  <h3 className="font-bold text-white text-base mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
