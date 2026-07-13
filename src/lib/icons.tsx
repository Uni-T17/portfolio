/**
 * Central icon registry — the single place that maps a skill/social name to an
 * icon component and its brand color. Everything (skills, socials, project
 * badges) reads from here, so there is one source of truth and no duplicated,
 * hand-written SVG paths. Icons come from `react-icons` (Simple Icons / Font
 * Awesome / Tabler) so the paths are accurate and maintained.
 */
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiPostgresql,
  SiFirebase,
  SiJsonwebtokens,
  SiFigma,
  SiGit,
  SiDocker,
  SiPostman,
  SiCanvas,
  SiGithub,
} from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { Smartphone, Webhook, PenTool, Layers } from "lucide-react";

type IconMeta = { Icon: IconType; color: string };

/** Skill name (matching src/lib/data.ts) → icon + brand accent color. */
export const skillIcons: Record<string, IconMeta> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#111111" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  "Responsive UI": { Icon: Smartphone, color: "#4c6ef5" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { Icon: SiExpress, color: "#259dff" },
  Go: { Icon: SiGo, color: "#00ADD8" },
  "REST APIs": { Icon: Webhook, color: "#0c8fa8" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Firebase: { Icon: SiFirebase, color: "#FFA000" },
  "JWT Auth": { Icon: SiJsonwebtokens, color: "#d63aff" },
  "UI/UX Design": { Icon: PenTool, color: "#e0559a" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Git: { Icon: SiGit, color: "#F05032" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Canva: { Icon: SiCanvas, color: "#00C4CC" },
  "VS Code": { Icon: TbBrandVscode, color: "#007ACC" },
};

/** Look up a skill icon, falling back to a neutral layers glyph. */
export function getSkillIcon(name: string): IconMeta {
  return skillIcons[name] ?? { Icon: Layers, color: "#4c6ef5" };
}

/** Social links use the Font Awesome set (consistent weights, all still shipped). */
export const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
} as const;

export { SiGithub };
