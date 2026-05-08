"use client";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, TrendingUp } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Benefits() {
  const { t } = useLang();

  return (
    <section className="relative py-36 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              <TrendingUp size={10} />
              {t.benefits.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight"
          >
            {t.benefits.title}{" "}
            <span className="gradient-text">{t.benefits.titleAccent}</span>
          </motion.h2>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Pros — DevNova */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[20px] p-8"
            style={{
              background: "linear-gradient(145deg, rgba(245,196,0,0.07), rgba(245,196,0,0.02))",
              border: "1px solid rgba(245,196,0,0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(245,196,0,0.15)" }}
              >
                <CheckCircle2 size={18} style={{ color: "#F5C400" }} />
              </div>
              <h3 className="font-black text-white text-lg">{t.benefits.prosTitle}</h3>
            </div>
            <div className="space-y-5">
              {t.benefits.pros.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#F5C400" }} />
                  <div>
                    <p className="font-bold text-white text-sm">{item.title}</p>
                    <p className="text-xs text-white/45 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cons — sin DevNova */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[20px] p-8"
            style={{
              background: "linear-gradient(145deg, rgba(239,68,68,0.06), rgba(239,68,68,0.02))",
              border: "1px solid rgba(239,68,68,0.18)",
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(239,68,68,0.15)" }}
              >
                <XCircle size={18} style={{ color: "#fca5a5" }} />
              </div>
              <h3 className="font-black text-white text-lg">{t.benefits.consTitle}</h3>
            </div>
            <div className="space-y-5">
              {t.benefits.cons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <XCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#fca5a5" }} />
                  <div>
                    <p className="font-bold text-white text-sm">{item.title}</p>
                    <p className="text-xs text-white/45 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
