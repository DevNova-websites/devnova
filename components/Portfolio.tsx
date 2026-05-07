"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const screenshotUrl = (url: string) =>
  `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const categoryColors = [
  { bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.3)", text: "#a5b4fc" },
  { bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.3)", text: "#c4b5fd" },
  { bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.3)", text: "#93c5fd" },
];

export default function Portfolio() {
  const { t } = useLang();

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(139,92,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#c4b5fd",
            }}
          >
            <ExternalLink size={12} />
            {t.portfolio.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {t.portfolio.title}{" "}
            <span className="gradient-text">{t.portfolio.titleAccent}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto"
          >
            {t.portfolio.sub}
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.portfolio.projects.map((project, i) => {
            const col = categoryColors[i % categoryColors.length];
            return (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.35s ease",
                }}
                whileHover={{ y: -6 }}
              >
                {/* Screenshot preview */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "200px", background: "rgba(13,13,31,0.8)" }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    style={{
                      background: "linear-gradient(to bottom, transparent 40%, rgba(5,5,16,0.9) 100%)",
                    }}
                  />

                  {/* View overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
                      style={{ background: "rgba(99,102,241,0.9)", backdropFilter: "blur(8px)" }}
                    >
                      <ArrowUpRight size={16} />
                      {t.portfolio.viewProject}
                    </div>
                  </div>

                  {/* Screenshot via microlink */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={screenshotUrl(project.url)}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = "flex";
                      }
                    }}
                  />

                  {/* Fallback placeholder */}
                  <div
                    className="absolute inset-0 items-center justify-center hidden"
                    style={{
                      background: `linear-gradient(135deg, ${col.bg.replace("0.12", "0.3")}, rgba(13,13,31,1))`,
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-3"
                        style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                      >
                        {project.name.charAt(0)}
                      </div>
                      <p className="text-white/50 text-sm">{project.name}</p>
                    </div>
                  </div>
                </div>

                {/* Card info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-white text-lg group-hover:text-indigo-200 transition-colors">
                      {project.name}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-white/30 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-1"
                    />
                  </div>

                  <span
                    className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                    style={{ background: col.bg, border: `1px solid ${col.border}`, color: col.text }}
                  >
                    {project.category}
                  </span>

                  <p className="text-sm text-white/50 leading-relaxed">{project.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
