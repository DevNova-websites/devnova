"use client";
import { motion } from "framer-motion";
import { Globe, Rocket, ShoppingCart, Zap, Search, Shield } from "lucide-react";
import { useLang } from "@/lib/i18n";

const iconMap: Record<string, React.ElementType> = {
  Globe, Rocket, ShoppingCart, Zap, Search, Shield,
};

const gradients = [
  "from-indigo-500/20 to-violet-500/20",
  "from-violet-500/20 to-pink-500/20",
  "from-blue-500/20 to-indigo-500/20",
  "from-yellow-500/20 to-orange-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-pink-500/20 to-rose-500/20",
];

const iconColors = [
  "#a5b4fc", "#c4b5fd", "#93c5fd", "#fcd34d", "#6ee7b7", "#f9a8d4",
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#a5b4fc",
            }}
          >
            {t.services.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.services.title}{" "}
            <span className="gradient-text">{t.services.titleAccent}</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-6 cursor-default overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Hover bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: "rgba(99,102,241,0.04)" }}
                />
                {/* Gradient border on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{ border: "1px solid rgba(99,102,241,0.3)" }}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${gradients[i]} group-hover:scale-110 transition-transform duration-300`}
                    style={{ border: `1px solid rgba(255,255,255,0.08)` }}
                  >
                    <Icon size={20} style={{ color: iconColors[i] }} />
                  </div>

                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{service.desc}</p>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(225deg, rgba(99,102,241,0.06), transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
