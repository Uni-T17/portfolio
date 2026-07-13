import type { TimelineItem } from "@/content/types";

/**
 * Work experience — shown in the ">_ experience.log" timeline.
 * Newest first. The panel scrolls on its own once you add more entries.
 *
 * ── To add a job ──────────────────────────────────────────────────────────
 * Copy the TEMPLATE block, paste it at the TOP of the array (newest first):
 *   {
 *     title: "Job Title",
 *     org: "Company / Org",
 *     period: "2025 — Present",   // or "2024 · 6 months"
 *     description: "What you did there.",
 *   },
 */
export const experience: TimelineItem[] = [
  {
    title: "Operations Assistant (Part-Time)",
    org: "Spring University Myanmar",
    period: "2023 — Present",
    description:
      "Assist with data management and digital tools for university operations, working closely with the team to improve workflow efficiency.",
  },
  {
    title: "Computing Assistant (Internship)",
    org: "Concept-X International School",
    period: "2022 · 6 months",
    description:
      "Assisted with teaching computing and supported the lab for primary 1–5 students.",
  },
];
