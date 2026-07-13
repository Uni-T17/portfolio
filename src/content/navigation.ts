import type { NavItem } from "@/content/types";

/**
 * Top navigation + footer links.
 * Each `href` must match a section's id on the page (see the section files in
 * src/components/sections). Reorder or rename labels here.
 */
export const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About_Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact_Me", href: "#contact" },
];
