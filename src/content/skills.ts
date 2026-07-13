import type { SkillGroup } from "@/content/types";

/**
 * The Skills section — a list of groups, each with a title and skill names.
 *
 * ── To add a skill ────────────────────────────────────────────────────────
 * Just add its name to an `items` array below, e.g. "Tailwind CSS".
 * The icon is matched automatically from the name. If a skill has no icon yet,
 * it shows a neutral fallback icon — to give it a real brand icon, add a line
 * to `skillIcons` in src/lib/icons.tsx (there's a guide at the top of that file).
 *
 * ── To add a whole new group ──────────────────────────────────────────────
 * Copy one { title, blurb, items } block and paste it into the array.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "// interfaces people actually enjoy",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    blurb: "// reliable services & data",
    items: ["Node.js", "Express.js", "Go", "REST APIs", "PostgreSQL", "Firebase", "JWT Auth"],
  },
  {
    title: "Design",
    blurb: "// from idea to interface",
    items: ["UI/UX Design", "Figma"],
  },
  {
    title: "Tools",
    blurb: "// the daily workbench",
    items: ["Git", "Docker", "Postman", "Canva", "VS Code"],
  },
];
