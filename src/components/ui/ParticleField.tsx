"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Floating background particles. Positions are a fixed table (not random)
 * so server and client render identically.
 */
const PARTICLES: Array<{
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  shape: "dot" | "blob";
  tone: "accent" | "leaf";
}> = [
  { left: "6%", top: "16%", size: 10, duration: 9, delay: 0, shape: "dot", tone: "leaf" },
  { left: "12%", top: "68%", size: 18, duration: 12, delay: 1.2, shape: "blob", tone: "leaf" },
  { left: "22%", top: "34%", size: 7, duration: 8, delay: 0.6, shape: "dot", tone: "accent" },
  { left: "36%", top: "82%", size: 12, duration: 11, delay: 2, shape: "dot", tone: "leaf" },
  { left: "48%", top: "12%", size: 16, duration: 13, delay: 0.3, shape: "blob", tone: "accent" },
  { left: "58%", top: "58%", size: 8, duration: 9, delay: 1.8, shape: "dot", tone: "leaf" },
  { left: "68%", top: "26%", size: 12, duration: 10, delay: 0.9, shape: "blob", tone: "leaf" },
  { left: "76%", top: "74%", size: 20, duration: 14, delay: 0.2, shape: "blob", tone: "accent" },
  { left: "86%", top: "40%", size: 9, duration: 8.5, delay: 1.5, shape: "dot", tone: "leaf" },
  { left: "93%", top: "14%", size: 13, duration: 11.5, delay: 0.7, shape: "blob", tone: "leaf" },
];

export default function ParticleField() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className={
            p.shape === "dot"
              ? "absolute rounded-full"
              : "absolute rounded-[42%_58%_55%_45%/48%_44%_56%_52%]"
          }
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background:
              p.tone === "accent"
                ? "color-mix(in srgb, var(--accent) 35%, transparent)"
                : "color-mix(in srgb, var(--blob-b) 70%, transparent)",
          }}
          animate={
            reduce
              ? undefined
              : { y: [0, -22, 0], x: [0, 10, 0], rotate: [0, 40, 0] }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
