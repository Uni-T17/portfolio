import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/content";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

/** Gradient palettes for the generated cover art (work in both themes). */
const hues: Record<Project["hue"], [string, string, string]> = {
  green: ["#7cc98a", "#2f9e6a", "#0c8fa8"],
  blue: ["#7f9cf9", "#4c6ef5", "#38cfe8"],
  violet: ["#a5a1f5", "#6c63e0", "#e0559a"],
  pink: ["#f2a1c8", "#e0559a", "#6c63e0"],
};

function ProjectCover({ project }: { project: Project }) {
  const [a, b, c] = hues[project.hue];
  return (
    <div className="relative h-44 overflow-hidden border-b-2 border-ink">
      <div
        aria-hidden
        className="animated-gradient absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `linear-gradient(130deg, ${a}, ${b}, ${c})` }}
      />
      {/* faux window chrome */}
      <div aria-hidden className="absolute left-4 top-3.5 flex gap-1.5">
        <span className="size-2.5 rounded-full bg-white/60" />
        <span className="size-2.5 rounded-full bg-white/40" />
        <span className="size-2.5 rounded-full bg-white/25" />
      </div>
      {/* faux terminal lines */}
      <div aria-hidden className="absolute bottom-4 left-4 space-y-1 text-[10px] leading-4 text-white/75">
        <p>$ cd {project.id}</p>
        <p>
          $ npm run build <span className="text-white">✓</span>
        </p>
      </div>
      <span
        aria-hidden
        className="absolute -right-2 -top-5 select-none text-[104px] font-bold leading-none text-white/20 transition-transform duration-500 group-hover:-translate-y-1.5"
      >
        {project.monogram}
      </span>
    </div>
  );
}

/** A single project card. Reused by the projects carousel. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="hover-glow group flex h-full flex-col overflow-hidden rounded-xl border-2 border-ink bg-card/80 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1.5 hover:border-accent">
      <ProjectCover project={project} />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-[11px] tracking-wide text-soft">
            {project.org} · {project.year}
          </p>
          <h3 className="mt-1 font-bold leading-snug text-title">{project.title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-body">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-1">
          {project.demo && (
            <Button href={project.demo} external variant="primary" size="sm">
              <ExternalLink size={13} />
              Live_Demo
            </Button>
          )}
          <Button href={project.github} external variant="secondary" size="sm">
            <FaGithub size={13} />
            GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}
