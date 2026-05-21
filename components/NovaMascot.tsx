"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// ─── Small logo mark: Navbar, Footer, Modal ───────────────────────────────
export function NovaLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/imagenes/logo-devnova.png"
      alt="DevNova"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

// ─── Planet hero illustration ─────────────────────────────────────────────
export default function NovaMascot({
  size = 300,
  className = "",
  animated = true,
}: {
  size?: number;
  className?: string;
  animated?: boolean;
}) {
  return (
    <motion.div
      className={`relative select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      initial={animated ? { opacity: 0, scale: 0.78, y: 24 } : false}
      animate={animated ? { opacity: 1, scale: 1, y: 0 } : false}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Outer ambient halo */}
          <radialGradient id="nv-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#F5C400" stopOpacity="0.10" />
            <stop offset="55%"  stopColor="#F5C400" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#F5C400" stopOpacity="0"    />
          </radialGradient>

          {/* Planet atmosphere rim */}
          <radialGradient id="nv-atmo" cx="38%" cy="34%" r="66%">
            <stop offset="62%"  stopColor="#F5C400" stopOpacity="0"    />
            <stop offset="100%" stopColor="#F5C400" stopOpacity="0.22" />
          </radialGradient>

          {/* Planet surface dark base */}
          <radialGradient id="nv-surface" cx="36%" cy="32%" r="70%">
            <stop offset="0%"   stopColor="#1c1400" />
            <stop offset="100%" stopColor="#060606" />
          </radialGradient>

          {/* Planet glow filter */}
          <filter id="nv-planet-glow" x="-22%" y="-22%" width="144%" height="144%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
            <feFlood floodColor="#F5C400" floodOpacity="0.25" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Star dot glow */}
          <filter id="nv-dot-glow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Logo circular clip */}
          <clipPath id="nv-logo-clip">
            <circle cx="200" cy="200" r="76" />
          </clipPath>
        </defs>

        {/* ── Outer ambient halo ─────────────────────────────── */}
        <circle cx="200" cy="200" r="192" fill="url(#nv-halo)" />

        {/* ── Static background sparkles ─────────────────────── */}
        <circle cx="62"  cy="82"  r="1.2" fill="white"   opacity="0.35" />
        <circle cx="330" cy="68"  r="1.5" fill="white"   opacity="0.28" />
        <circle cx="44"  cy="295" r="1.0" fill="white"   opacity="0.22" />
        <circle cx="352" cy="310" r="1.3" fill="white"   opacity="0.25" />
        <circle cx="158" cy="34"  r="1.0" fill="#FFD60A" opacity="0.55" />
        <circle cx="255" cy="355" r="1.2" fill="#FFD60A" opacity="0.40" />
        <circle cx="366" cy="155" r="0.9" fill="white"   opacity="0.28" />
        <circle cx="36"  cy="175" r="0.8" fill="#FFD60A" opacity="0.32" />
        <circle cx="295" cy="42"  r="1.0" fill="white"   opacity="0.20" />
        <circle cx="108" cy="358" r="0.9" fill="white"   opacity="0.22" />

        {/* ── Back half of outer ring (behind planet) ─────────── */}
        <ellipse
          cx="200" cy="200" rx="166" ry="46"
          stroke="#F5C400" strokeWidth="0.9" strokeDasharray="5 22"
          opacity="0.15" transform="rotate(-16 200 200)"
        />

        {/* ── Outer orbit — rotating stars (clockwise, slow) ──── */}
        <motion.g
          animate={animated ? { rotate: 360 } : undefined}
          transition={animated ? { duration: 24, repeat: Infinity, ease: "linear" } : undefined}
          style={{ transformOrigin: "200px 200px" }}
        >
          {/* top */}
          <circle cx="200" cy="34"  r="4"   fill="#F5C400" opacity="0.70" filter="url(#nv-dot-glow)" />
          {/* right */}
          <circle cx="352" cy="190" r="2.8" fill="#FFD60A" opacity="0.55" filter="url(#nv-dot-glow)" />
          {/* bottom-left */}
          <circle cx="72"  cy="218" r="2.2" fill="#FF9F0A" opacity="0.45" />
        </motion.g>

        {/* ── Inner ring (behind planet) ───────────────────────── */}
        <ellipse
          cx="200" cy="200" rx="124" ry="33"
          stroke="#FFD60A" strokeWidth="0.6" strokeDasharray="3 16"
          opacity="0.18" transform="rotate(18 200 200)"
        />

        {/* ── Inner orbit — rotating stars (counter-clockwise) ─── */}
        <motion.g
          animate={animated ? { rotate: -360 } : undefined}
          transition={animated ? { duration: 16, repeat: Infinity, ease: "linear" } : undefined}
          style={{ transformOrigin: "200px 200px" }}
        >
          {/* top */}
          <circle cx="200" cy="76"  r="3.2" fill="#FFD60A" opacity="0.65" filter="url(#nv-dot-glow)" />
          {/* bottom-right */}
          <circle cx="318" cy="205" r="2"   fill="#F5C400" opacity="0.48" />
        </motion.g>

        {/* ── Planet soft glow shell ─────────────────────────── */}
        <circle cx="200" cy="200" r="90"
          fill="#F5C400" opacity="0.025"
        />

        {/* ── Planet body ────────────────────────────────────── */}
        <circle
          cx="200" cy="200" r="76"
          fill="url(#nv-surface)"
          filter="url(#nv-planet-glow)"
        />

        {/* ── Logo texture (clipped to circle) ──────────────── */}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <image
          href="/imagenes/logo-devnova.png"
          x="124" y="124"
          width="152" height="152"
          clipPath="url(#nv-logo-clip)"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* ── Atmosphere rim overlay ─────────────────────────── */}
        <circle cx="200" cy="200" r="76" fill="url(#nv-atmo)" />

        {/* ── Specular highlight (top-left glint) ───────────── */}
        <ellipse
          cx="176" cy="164" rx="22" ry="14"
          fill="white" opacity="0.055"
          transform="rotate(-30 176 164)"
        />

        {/* ── Front arc of outer ring (in front of planet) ──── */}
        <path
          d="M 34 200 A 166 46 0 0 0 366 200"
          stroke="#F5C400" strokeWidth="0.9" strokeDasharray="5 22"
          opacity="0.32" transform="rotate(-16 200 200)"
          fill="none"
        />

        {/* ── Front arc of inner ring ────────────────────────── */}
        <path
          d="M 76 200 A 124 33 0 0 0 324 200"
          stroke="#FFD60A" strokeWidth="0.7" strokeDasharray="3 16"
          opacity="0.28" transform="rotate(18 200 200)"
          fill="none"
        />

        {/* ── Breathing pulse ring ───────────────────────────── */}
        <motion.circle
          cx="200" cy="200" r="92"
          stroke="#F5C400" strokeWidth="0.6"
          fill="none"
          opacity="0"
          animate={animated ? { opacity: [0, 0.08, 0], r: [88, 102, 88] } : undefined}
          transition={animated ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : undefined}
        />
      </svg>
    </motion.div>
  );
}
