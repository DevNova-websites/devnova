"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useVelocity,
  useMotionValueEvent,
} from "framer-motion";

// ─── Trajectories ─────────────────────────────────────────────────────────────
// ix / iy = Framer Motion initial translate (x, y)
// ax / ay = Framer Motion animate translate (x, y)
// rot     = trail rotation in degrees (positive = clockwise = head goes down-right)
// len     = trail length in px
// rtl     = right-to-left (reverses gradient direction)

interface Trajectory {
  ix: string; iy: string;
  ax: string; ay: string;
  rot: number;
  len: number;
  rtl?: boolean;
}

const TRAJECTORIES: Trajectory[] = [
  // Left → right, shallow descent
  { ix: "-200px", iy: "6vh",  ax: "110vw", ay: "38vh", rot: 22, len: 220 },
  // Left → right, moderate descent
  { ix: "-200px", iy: "4vh",  ax: "110vw", ay: "48vh", rot: 28, len: 195 },
  // Left → right, starting higher
  { ix: "-200px", iy: "12vh", ax: "110vw", ay: "44vh", rot: 20, len: 240 },
  // Right → left, for variety
  { ix: "110vw",  iy: "7vh",  ax: "-200px", ay: "42vh", rot: -22, len: 210, rtl: true },
];

// ─── Single star element ──────────────────────────────────────────────────────
function StarElement({ traj, duration }: { traj: Trajectory; duration: number }) {
  const gradient = traj.rtl
    ? "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,252,220,0.85) 30%, rgba(245,196,0,0.4) 65%, transparent 100%)"
    : "linear-gradient(90deg, transparent 0%, rgba(245,196,0,0.4) 35%, rgba(255,252,220,0.85) 70%, rgba(255,255,255,1) 100%)";

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{ top: 0, left: 0, zIndex: 40 }}
      initial={{ x: traj.ix, y: traj.iy, opacity: 0 }}
      animate={{
        x: traj.ax,
        y: traj.ay,
        opacity: [0, 1, 0.95, 0.75, 0],
      }}
      transition={{
        duration,
        ease: "easeIn",
        opacity: { times: [0, 0.07, 0.55, 0.88, 1], ease: "linear" },
      }}
    >
      {/* Trail */}
      <div
        style={{
          width:           traj.len,
          height:          "1.5px",
          background:      gradient,
          transform:       `rotate(${traj.rot}deg)`,
          transformOrigin: traj.rtl ? "left center" : "right center",
          borderRadius:    "2px",
          boxShadow: [
            "0 0 4px 1px rgba(245,196,0,0.55)",
            "0 0 14px 3px rgba(255,252,220,0.18)",
            "0 0 30px 6px rgba(255,255,255,0.06)",
          ].join(", "),
        }}
      />
      {/* Bright head dot */}
      <div
        style={{
          position:  "absolute",
          top:       "-2px",
          [traj.rtl ? "left" : "right"]: -2,
          width:     "5px",
          height:    "5px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.95)",
          boxShadow:  "0 0 8px 3px rgba(245,196,0,0.7), 0 0 20px 6px rgba(255,255,255,0.25)",
          transform:  `rotate(${traj.rot}deg)`,
          transformOrigin: "center",
        }}
      />
    </motion.div>
  );
}

// ─── Manager ──────────────────────────────────────────────────────────────────
interface StarEntry {
  id: number;
  traj: Trajectory;
  duration: number;
}

let _nextId = 0;

export default function ShootingStar() {
  const [stars, setStars] = useState<StarEntry[]>([]);
  const lastFired = useRef(0);

  const fire = useCallback(() => {
    const now = Date.now();
    if (now - lastFired.current < 3000) return; // 3 s cooldown
    lastFired.current = now;

    const traj     = TRAJECTORIES[Math.floor(Math.random() * TRAJECTORIES.length)];
    const duration = 0.85 + Math.random() * 0.55;
    const id       = ++_nextId;

    setStars((p) => [...p, { id, traj, duration }]);
    setTimeout(
      () => setStars((p) => p.filter((s) => s.id !== id)),
      (duration + 0.4) * 1000,
    );
  }, []);

  // Scroll velocity trigger — fires when scrolling fast
  const { scrollY } = useScroll();
  const velocity    = useVelocity(scrollY);
  useMotionValueEvent(velocity, "change", (v) => {
    if (Math.abs(v) > 420) fire();
  });

  // Ambient trigger — periodic random appearance
  useEffect(() => {
    const id = setInterval(() => {
      if (document.hasFocus() && Math.random() < 0.5) fire();
    }, 5800);
    return () => clearInterval(id);
  }, [fire]);

  return (
    <AnimatePresence>
      {stars.map((s) => (
        <StarElement key={s.id} traj={s.traj} duration={s.duration} />
      ))}
    </AnimatePresence>
  );
}
