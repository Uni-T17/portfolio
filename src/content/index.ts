/**
 * Content barrel — re-exports everything so components can do a single
 * `import { projects, site, ... } from "@/content"`.
 *
 * You normally DON'T edit this file. To change what's on the site, edit the
 * individual files in this folder (site.ts, projects.ts, skills.ts, …).
 */
export { site } from "@/content/site";
export { nav } from "@/content/navigation";
export { about } from "@/content/about";
export { skillGroups } from "@/content/skills";
export { projects } from "@/content/projects";
export { experience } from "@/content/experience";
export { education } from "@/content/education";

export type {
  SkillGroup,
  Project,
  ProjectHue,
  TimelineItem,
  NavItem,
} from "@/content/types";
