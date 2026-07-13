"use client";

import { useCallback, useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/content";
import ProjectCard from "@/components/ui/ProjectCard";

/**
 * Infinitely looping projects carousel.
 *
 * The track holds two copies of the project list so it can scroll forever with
 * no visible seam: a requestAnimationFrame loop nudges `scrollLeft` a little
 * each frame, and whenever it passes the halfway point (one full copy) it wraps
 * back by that amount. Auto-scroll pauses on hover/focus; the arrows step by one
 * card. Respects prefers-reduced-motion (no auto-scroll, arrows still work).
 */
export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const reduce = useReducedMotion();

  // Two copies → seamless wrap.
  const items = [...projects, ...projects];

  useEffect(() => {
    if (reduce) return;
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const speed = 0.45; // px per frame ≈ slow, premium drift
    const tick = () => {
      const half = track.scrollWidth / 2;
      if (!paused.current && half > 0) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  const step = useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 /* gap-6 */ : track.clientWidth * 0.8;
    const half = track.scrollWidth / 2;

    // Keep the wrap seamless when stepping across either edge.
    if (dir === -1 && track.scrollLeft < amount) track.scrollLeft += half;
    else if (dir === 1 && track.scrollLeft >= half) track.scrollLeft -= half;

    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  const hold = (v: boolean) => () => {
    paused.current = v;
  };

  return (
    <div
      className="relative"
      onMouseEnter={hold(true)}
      onMouseLeave={hold(false)}
      onFocusCapture={hold(true)}
      onBlurCapture={hold(false)}
    >
      {/* Track — a CSS mask fades the cards toward both edges so the middle
          cards read as the focus and neighbors dissolve out. Using a mask
          (not a color overlay) keeps it correct over any section background. */}
      <div
        ref={trackRef}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
        }}
        className="no-scrollbar flex gap-6 overflow-x-auto px-1 py-4"
        role="list"
        aria-label="Featured projects"
      >
        {items.map((project, i) => (
          <div
            key={`${project.id}-${i}`}
            data-card
            role="listitem"
            aria-hidden={i >= projects.length}
            className="w-[85%] shrink-0 sm:w-[70%] lg:w-[46%]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous project"
        className="absolute left-1 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-card/90 text-title shadow-hard-sm backdrop-blur transition-all duration-300 hover:-translate-y-1/2 hover:scale-110 hover:border-accent hover:text-accent sm:left-2"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next project"
        className="absolute right-1 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-card/90 text-title shadow-hard-sm backdrop-blur transition-all duration-300 hover:-translate-y-1/2 hover:scale-110 hover:border-accent hover:text-accent sm:right-2"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
