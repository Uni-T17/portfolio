"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, site } from "@/content";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-9 place-items-center rounded-full border border-ink/30 bg-card/60 text-title transition-all duration-300 hover:rotate-45 hover:border-accent hover:text-accent"
    >
      {/* Render both, toggle via CSS, so SSR markup never mismatches */}
      {mounted && resolvedTheme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-ink/20 bg-panel/75 px-4 py-3 backdrop-blur-xl sm:px-6"
      >
        <a
          href="#home"
          className="text-sm font-bold tracking-tight text-title transition-colors hover:text-accent sm:text-base"
        >
          {site.brand}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {nav.map((item, i) => (
              <li key={item.href} className={cn(i > 0 && "border-l border-ink/25")}>
                <a
                  href={item.href}
                  className="px-4 py-1 text-sm text-body transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-ink/30 bg-card/60 text-title"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Scroll progress bar along the nav bottom edge */}
        <motion.span
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute bottom-0 left-4 right-4 h-0.5 origin-left rounded-full bg-gradient-to-r from-code-green via-accent to-iris"
        />
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-ink/20 bg-panel/95 p-3 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm text-body transition-colors hover:bg-tab hover:text-title"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
