"use client";
import { useEffect, useRef } from "react";

// ─── Star field canvas + CSS nebulae ─────────────────────────────────────────
// Three-layer parallax starfield rendered on canvas.
// Nebulae are pure CSS radial-gradients — no JS overhead.

interface Star {
  x: number;
  y: number;
  r: number;       // radius
  o: number;       // base opacity
  ts: number;      // twinkle speed
  to: number;      // twinkle phase offset
  pf: number;      // parallax factor
  rgb: string;     // rgb colour triple (no "rgba()")
}

const STAR_COUNT = 260;

const COLORS = [
  "255,255,255",   // pure white
  "200,218,255",   // blue-white (hot star)
  "255,244,214",   // warm white (cool star)
  "224,232,255",   // ice blue
];

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const scrollRef = useRef(0);
  const starsRef  = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Non-null aliases — TypeScript can't narrow closed-over vars in nested fns
    const cv: HTMLCanvasElement = canvas;
    const cx: CanvasRenderingContext2D = ctx;

    let W = 0, H = 0;

    function buildStars() {
      starsRef.current = Array.from({ length: STAR_COUNT }, () => {
        const layer = Math.random() < 0.55 ? 1 : Math.random() < 0.75 ? 2 : 3;
        return {
          x:   Math.random() * W,
          y:   Math.random() * H,
          r:   layer === 1 ? 0.25 + Math.random() * 0.5
             : layer === 2 ? 0.65 + Math.random() * 0.85
             :               1.1  + Math.random() * 1.0,
          o:   layer === 1 ? 0.12 + Math.random() * 0.25
             : layer === 2 ? 0.28 + Math.random() * 0.42
             :               0.52 + Math.random() * 0.45,
          ts:  0.3 + Math.random() * 2.0,
          to:  Math.random() * Math.PI * 2,
          pf:  layer === 1 ? 0.025 : layer === 2 ? 0.08 : 0.18,
          rgb: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
      });
    }

    function resize() {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;
      buildStars();
    }

    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => { scrollRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    function draw(t: number) {
      const sec    = t * 0.001;
      const scroll = scrollRef.current;

      cx.clearRect(0, 0, W, H);

      for (const star of starsRef.current) {
        let y = (star.y - scroll * star.pf) % H;
        if (y < 0) y += H;

        const twinkle = Math.sin(sec * star.ts + star.to) * 0.22;
        const opacity  = Math.max(0.02, Math.min(1, star.o + twinkle));

        cx.beginPath();
        cx.arc(star.x, y, star.r, 0, Math.PI * 2);
        cx.fillStyle = `rgba(${star.rgb},${opacity.toFixed(3)})`;
        cx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Animated star field */}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* CSS nebulae — pure radial-gradients, zero runtime cost */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: [
            // Upper-right: deep violet/indigo
            "radial-gradient(ellipse 70% 55% at 88% 6%,  rgba(55,8,110,0.26)  0%, transparent 55%)",
            // Lower-left: deep ocean blue
            "radial-gradient(ellipse 55% 45% at 8%  88%, rgba(0,35,82,0.22)   0%, transparent 55%)",
            // Centre: very faint teal haze
            "radial-gradient(ellipse 65% 35% at 48% 50%, rgba(0,52,60,0.10)   0%, transparent 60%)",
            // Lower-right: dark purple
            "radial-gradient(ellipse 40% 50% at 72% 75%, rgba(58,8,100,0.18)  0%, transparent 55%)",
            // Top-centre: hint of dark gold (brand warmth)
            "radial-gradient(ellipse 50% 25% at 50% 2%,  rgba(30,18,0,0.35)   0%, transparent 55%)",
          ].join(", "),
        }}
      />
    </>
  );
}
