"use client";
import { motion } from "framer-motion";
import { Globe, Rocket, ShoppingCart, Zap, Search, Shield, Layers } from "lucide-react";
import { useLang } from "@/lib/i18n";

const iconMap: Record<string, React.ElementType> = {
  Globe, Rocket, ShoppingCart, Zap, Search, Shield,
};

const cardStyles = [
  { icon: "#F5C400",  bg: "rgba(245,196,0,0.1)",  num: "01" },
  { icon: "#FF9F0A",  bg: "rgba(255,159,10,0.1)",  num: "02" },
  { icon: "#FFD60A",  bg: "rgba(255,214,10,0.1)",  num: "03" },
  { icon: "#F5C400",  bg: "rgba(245,196,0,0.1)",   num: "04" },
  { icon: "#FF9F0A",  bg: "rgba(255,159,10,0.1)",  num: "05" },
  { icon: "#FFD60A",  bg: "rgba(255,214,10,0.1)",  num: "06" },
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative py-36 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="badge">
              <Layers size={10} />
              {t.services.badge}
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight"
            >
              {t.services.title}{" "}
              <span className="gradient-text">{t.services.titleAccent}</span>
            </motion.h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            const style = cardStyles[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="card p-7 group cursor-default relative overflow-hidden"
              >
                {/* Number watermark */}
                <span
                  className="absolute top-6 right-7 text-4xl font-black pointer-events-none select-none"
                  style={{ color: "rgba(255,255,255,0.03)" }}
                >
                  {style.num}
                </span>

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: style.bg, border: `1px solid ${style.icon}22` }}
                >
                  <Icon size={21} style={{ color: style.icon }} />
                </div>

                <h3 className="font-bold text-white text-lg mb-2.5 group-hover:text-yellow-100 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
