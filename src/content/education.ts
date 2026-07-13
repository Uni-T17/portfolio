import type { TimelineItem } from "@/content/types";

/**
 * Education — shown in the ">_ education.log" timeline.
 * Newest first. The panel scrolls on its own once you add more entries.
 *
 * ── To add a degree / course ──────────────────────────────────────────────
 * Copy the TEMPLATE block, paste it at the TOP of the array (newest first):
 *   {
 *     title: "Degree / Course",
 *     org: "School / University",
 *     period: "2025 — Present",
 *     description: "What you studied / focused on.",
 *   },
 */
export const education: TimelineItem[] = [
  {
    title: "B.Eng. in Software Engineering",
    org: "Mae Fah Luang University",
    period: "2023 — Present",
    description:
      "Focusing on software development, algorithms and system design, with hands-on work in programming, data structures and web technologies.",
  },
  {
    title: "Diploma in Computer Science",
    org: "Spring University Myanmar",
    period: "2024 — 2025",
    description:
      "Deepening my understanding of computer systems, programming principles and software engineering methodologies.",
  },
];
