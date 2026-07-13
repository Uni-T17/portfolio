"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, Server, Sparkles, Wrench } from "lucide-react";
import { skillGroups } from "@/content";
import SkillBadge from "@/components/ui/SkillBadge";
import SectionHeading from "@/components/ui/SectionHeading";

const groupIcons = {
  Frontend: Monitor,
  Backend: Server,
  Design: Palette,
  Tools: Wrench,
} as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-28 px-5 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="skills-title"
          icon={<Sparkles size={16} strokeWidth={2.2} />}
          label="Skills"
          title="What I work with"
          intro="A toolbox that covers the whole journey — from a Figma frame to a containerized deployment."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-64px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.title as keyof typeof groupIcons] ?? Sparkles;
            return (
              <motion.article
                key={group.title}
                variants={card}
                className="hover-glow group rounded-xl border-2 border-ink bg-card/80 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:border-accent"
              >
                <div className="mb-1 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg border border-ink/25 bg-tab text-title transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-bold text-title">{group.title}</h3>
                </div>
                <p className="mb-5 text-xs text-soft">{group.blurb}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <SkillBadge name={item} />
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
