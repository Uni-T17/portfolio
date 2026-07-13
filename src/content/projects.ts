import type { Project } from "@/content/types";

/**
 * The Projects carousel.
 *
 * ── To add a project ──────────────────────────────────────────────────────
 * Copy the TEMPLATE block below, paste it into the array, and fill it in.
 * `hue` picks the cover colour: "green" | "blue" | "violet" | "pink".
 * Omit the `demo` line if there's no live demo.
 *
 * TEMPLATE — copy everything between the braces, including the braces:
 *   {
 *     id: "my-project",              // unique, lowercase-with-dashes
 *     monogram: "MP",                // 1–2 letters shown on the cover
 *     title: "My Project",
 *     org: "Where it was built",
 *     year: "2026",
 *     description: "What it does and what you built.",
 *     tech: ["Next.js", "PostgreSQL"],
 *     github: "https://github.com/you/my-project",
 *     demo: "https://my-project.com", // optional — delete if none
 *     hue: "green",
 *   },
 */
export const projects: Project[] = [
  {
    id: "doitung",
    monogram: "DV",
    title: "DoiTung Vanilla Product Management Platform",
    org: "Mae Fah Luang Foundation",
    year: "2026",
    description:
      "Responsive admin and staff interfaces for managing vanilla production — REST API integration, JWT authentication and role-based access, backed by Go services and PostgreSQL, fully containerized with Docker.",
    tech: ["Next.js", "React", "Go", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/Uni-T17",
    hue: "green",
  },
  {
    id: "book-exchange",
    monogram: "BX",
    title: "Book Exchange Marketplace",
    org: "Mae Fah Luang University",
    year: "2026",
    description:
      "Full-stack platform where students list and exchange books. REST APIs for authentication, book listings and exchange management with PostgreSQL integration and full CRUD operations.",
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/Uni-T17",
    hue: "blue",
  },
  {
    id: "sum-club",
    monogram: "SC",
    title: "SUM Club Management System",
    org: "Team GURUS",
    year: "2024–2025",
    description:
      "Flutter-based admin dashboard for creating and managing club activities, clubs and events — designed end-to-end and deployed on Firebase Hosting.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/Uni-T17",
    hue: "violet",
  },
  {
    id: "idiots-club",
    monogram: "IC",
    title: "Idiots Community Club Mobile App",
    org: "Double-TAC",
    year: "2024–2025",
    description:
      "Cross-platform mobile application for managing community clubs and announcements, with reactive, modular app-wide state powered by Riverpod.",
    tech: ["Flutter", "Riverpod", "Dart"],
    github: "https://github.com/Uni-T17",
    hue: "pink",
  },
];
