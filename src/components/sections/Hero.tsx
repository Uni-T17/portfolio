"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, FolderGit2, Home, Mail } from "lucide-react";
import { site } from "@/content";
import FolderWindow from "@/components/ui/FolderWindow";
import Magnetic from "@/components/ui/MagneticButton";
import ParticleField from "@/components/ui/ParticleField";
import ProfilePhoto from "@/components/ui/ProfilePhoto";
import SocialLinks from "@/components/ui/SocialLinks";
import Button from "@/components/ui/Button";
import profile from "../../../public/profile.jpeg";

/** Endless type-and-delete loop over the role titles. */
function useTypewriter(words: string[], enabled: boolean) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const word = words[wordIdx % words.length];
    let delay = deleting ? 38 : 72;
    if (!deleting && text === word) delay = 1900;
    else if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setWordIdx((i) => i + 1);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, enabled]);

  return enabled ? text : words[0];
}

export default function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(site.typedRoles, !reduce);

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden">
      <ParticleField />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-6 sm:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
        {/* -------- Left: the "Home" window (below the photo on mobile) -------- */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="order-2 lg:order-1"
        >
          <FolderWindow
            tab={
              <>
                <Home size={18} strokeWidth={2.2} />
                <span className="text-lg sm:text-xl tracking-[0.3em]">Home</span>
              </>
            }
          >
            <p className="text-sm text-soft">Hello all!! I am</p>

            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-accent sm:text-6xl md:text-7xl">
              {site.name.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: reduce ? 0 : 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35 + i * 0.05,
                    duration: 0.5,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </h1>

            <p className="mt-4 min-h-8 text-xl font-semibold text-iris sm:text-2xl">
              <span aria-hidden>&gt; </span>
              <span className="sr-only">{site.role}</span>
              <span aria-hidden>{typed}</span>
              <span aria-hidden className="caret text-iris">
                ▍
              </span>
            </p>

            <div className="mt-8 space-y-1.5 text-sm sm:text-base">
              <p className="text-soft">{"// find my profile on Github:"}</p>
              <p>
                <span className="text-code-green">const</span>{" "}
                <span className="text-code-cyan">githubLink</span>{" "}
                <span className="text-body">=</span>{" "}
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-code-pink underline underline-offset-4 transition-colors hover:text-accent"
                >
                  &quot;{site.github}&quot;
                </a>
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Magnetic>
                <Button href={site.resume} download variant="primary">
                  <Download size={15} />
                  Download_Resume
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="#projects" variant="secondary">
                  <FolderGit2 size={15} />
                  My_Work
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="#contact" variant="secondary">
                  <Mail size={15} />
                  Contact_Me
                </Button>
              </Magnetic>
            </div>
          </FolderWindow>
        </motion.div>

        {/* -------- Right: photo + socials (above the window on mobile) -------- */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="order-1 flex flex-col items-center gap-8 lg:order-2 lg:justify-self-end"
        >
          <ProfilePhoto src={profile} alt={`Portrait of ${site.name}`} />
          <SocialLinks variant="pill" />
        </motion.div>
      </div>
    </section>
  );
}
