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

// ─── Full animated mascot: Hero illustration ──────────────────────────────
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
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nv-star" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#FFD60A" />
            <stop offset="45%" stopColor="#F5C400" />
            <stop offset="100%" stopColor="#FF9F0A" />
          </linearGradient>
          <filter id="nv-glow" x="-28%" y="-28%" width="156%" height="156%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="7" result="blur" />
            <feFlood floodColor="#F5C400" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="nv-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5C400" stopOpacity="0.14" />
            <stop offset="65%" stopColor="#F5C400" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#F5C400" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient halo */}
        <circle cx="150" cy="150" r="148" fill="url(#nv-halo)" />

        {/* Outer orbit ring — rotates clockwise */}
        <motion.g
          animate={animated ? { rotate: 360 } : undefined}
          transition={animated ? { duration: 32, repeat: Infinity, ease: "linear" } : undefined}
          style={{ transformOrigin: "150px 150px" }}
        >
          <circle cx="150" cy="150" r="132" stroke="#F5C400" strokeWidth="1" strokeDasharray="4 16" opacity="0.28" />
          {/* Cardinal nodes */}
          <circle cx="150" cy="18"  r="4"   fill="#F5C400" opacity="0.7" />
          <circle cx="282" cy="150" r="4"   fill="#F5C400" opacity="0.7" />
          <circle cx="150" cy="282" r="4"   fill="#F5C400" opacity="0.7" />
          <circle cx="18"  cy="150" r="4"   fill="#F5C400" opacity="0.7" />
          {/* Diagonal minor nodes */}
          <circle cx="243" cy="57"  r="2.5" fill="#FF9F0A" opacity="0.45" />
          <circle cx="243" cy="243" r="2.5" fill="#FF9F0A" opacity="0.45" />
          <circle cx="57"  cy="243" r="2.5" fill="#FF9F0A" opacity="0.45" />
          <circle cx="57"  cy="57"  r="2.5" fill="#FF9F0A" opacity="0.45" />
        </motion.g>

        {/* Inner ring — counter-rotates */}
        <motion.g
          animate={animated ? { rotate: -360 } : undefined}
          transition={animated ? { duration: 22, repeat: Infinity, ease: "linear" } : undefined}
          style={{ transformOrigin: "150px 150px" }}
        >
          <circle cx="150" cy="150" r="108" stroke="#FFD60A" strokeWidth="0.6" strokeDasharray="2 22" opacity="0.16" />
        </motion.g>

        {/* 8-pointed angular star — subtle breathe pulse */}
        <motion.path
          d="M150,55 L170,102 L217,83 L198,130 L245,150 L198,170 L217,217 L170,198 L150,245 L130,198 L83,217 L102,170 L55,150 L102,130 L83,83 L130,102 Z"
          fill="url(#nv-star)"
          filter="url(#nv-glow)"
          animate={animated ? { scale: [1, 1.02, 1] } : undefined}
          transition={animated ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined}
          style={{ transformOrigin: "150px 150px" }}
        />

        {/* Inner octagon ring — geometric detail */}
        <polygon
          points="150,100 186,114 200,150 186,186 150,200 114,186 100,150 114,114"
          stroke="#FFD60A"
          strokeWidth="0.8"
          fill="none"
          opacity="0.2"
        />

        {/* Eyes */}
        <rect x="123" y="134" width="18" height="24" rx="4" fill="#080808" />
        <rect x="159" y="134" width="18" height="24" rx="4" fill="#080808" />

        {/* Eye highlights — LED glow dots */}
        <rect x="125" y="136" width="6" height="6" rx="1.5" fill="#FFD60A" />
        <rect x="161" y="136" width="6" height="6" rx="1.5" fill="#FFD60A" />
      </svg>
    </motion.div>
  );
}
