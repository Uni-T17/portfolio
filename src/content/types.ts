/**
 * Shared shapes for your content. You rarely need to touch this file — it just
 * describes what fields each kind of entry has, so your editor can autocomplete
 * and warn you if you forget a field.
 */

/** One card in the Skills section (e.g. "Frontend" with a list of skills). */
export type SkillGroup = {
  title: string;
  /** Small caption under the title. The "// " prefix is just style. */
  blurb: string;
  /** Skill names. Icons are matched automatically — see content/skills.ts. */
  items: string[];
};

/** The colour of a project card's generated cover art. */
export type ProjectHue = "green" | "blue" | "violet" | "pink";

/** One project card in the Projects carousel. */
export type Project = {
  /** Unique short id (letters/numbers/dashes). Used as a React key. */
  id: string;
  /** 1–2 letters shown big on the cover art, e.g. "DV". */
  monogram: string;
  title: string;
  org: string;
  year: string;
  description: string;
  /** Tech badges shown on the card. */
  tech: string[];
  github: string;
  /** Optional live demo URL. Omit the line entirely if there isn't one. */
  demo?: string;
  hue: ProjectHue;
};

/** One entry in the Experience or Education timeline. */
export type TimelineItem = {
  title: string;
  org: string;
  /** e.g. "2023 — Present" or "2022 · 6 months". */
  period: string;
  description: string;
};

/** A link in the top navigation / footer. */
export type NavItem = {
  label: string;
  /** Must match a section id, e.g. "#projects". */
  href: string;
};
