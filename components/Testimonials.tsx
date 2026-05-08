"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLang } from "@/lib/i18n";

const avatarColors = [
  { from: "#F5C400", to: "#FF9F0A" },
  { from: "#FF9F0A", to: "#FF5722" },
  { from: "#FFD60A", to: "#F5C400" },
  { from: "#FF5722", to: "#FF9F0A" },
  { from: "#F5C400", to: "#FFD60A" },
  { from: "#FF9F0A", to: "#F5C400" },
];

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="relative py-36 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(245,196,0,0.025) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="badge">
              <Star size={10} className="fill-current" />
              {t.testimonials.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight"
          >
            {t.testimonials.title}{" "}
            <span className="gradient-text">{t.testimonials.titleAccent}</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.testimonials.items.map((item, i) => {
            const av = avatarColors[i % avatarColors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="card p-7 group cursor-default flex flex-col"
              >
                {/* Quote icon */}
                <Quote
                  size={22}
                  className="mb-5 opacity-25 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ color: "#F5C400" }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-white/60 leading-relaxed mb-6 italic flex-1">
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${av.from}, ${av.to})`,
                      color: "#080808",
                    }}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <p className="text-xs text-white/35">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
