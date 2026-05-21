"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const screenshotUrl = (url: string) =>
  `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const tagStyles = [
  { bg: "rgba(245,196,0,0.1)",  border: "rgba(245,196,0,0.3)",  text: "#F5C400"  },
  { bg: "rgba(255,159,10,0.1)", border: "rgba(255,159,10,0.3)", text: "#FF9F0A"  },
  { bg: "rgba(255,214,10,0.1)", border: "rgba(255,214,10,0.3)", text: "#FFD60A"  },
];

export default function Portfolio() {
  const { t } = useLang();

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="badge">
              <ExternalLink size={10} />
              {t.portfolio.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight"
          >
            {t.portfolio.title}{" "}
            <span className="gradient-text">{t.portfolio.titleAccent}</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {t.portfolio.projects.map((project, i) => {
            const tag = tagStyles[i % tagStyles.length];
            return (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group block rounded-[20px] overflow-hidden cursor-pointer"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Preview image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "210px", background: "#0E0E0E" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    style={{
                      background: "linear-gradient(to bottom, transparent 30%, rgba(8,8,8,0.88) 100%)",
                    }}
                  />

                  {/* View overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
                      style={{
                        background: "rgba(245,196,0,0.92)",
                        color: "#080808",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <ArrowUpRight size={15} />
                      {t.portfolio.viewProject}
                    </div>
                  </div>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={screenshotUrl(project.url)}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700"
                    style={{ transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
                    loading="lazy"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                      const next = t.nextElementSibling as HTMLElement | null;
                      if (next) next.style.display = "flex";
                    }}
                  />

                  {/* Fallback */}
                  <div
                    className="absolute inset-0 items-center justify-center hidden flex-col gap-3"
                    style={{ background: "linear-gradient(135deg, rgba(245,196,0,0.12), #0E0E0E)" }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black"
                      style={{ background: "linear-gradient(135deg, #F5C400, #FF9F0A)", color: "#080808" }}
                    >
                      {project.name.charAt(0)}
                    </div>
                    <p className="text-white/40 text-sm">{project.name}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-white text-lg group-hover:text-yellow-200 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <ArrowUpRight
                      size={15}
                      className="flex-shrink-0 mt-1 transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.22)" }}
                    />
                  </div>

                  <span
                    className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider"
                    style={{ background: tag.bg, border: `1px solid ${tag.border}`, color: tag.text }}
                  >
                    {project.category}
                  </span>

                  <p className="text-sm text-white/40 leading-relaxed">{project.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
