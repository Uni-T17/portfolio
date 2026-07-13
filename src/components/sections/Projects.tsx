import { FolderGit2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-28 overflow-hidden border-y border-ink/10 bg-panel/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          id="projects-title"
          icon={<FolderGit2 size={16} strokeWidth={2.2} />}
          label="Projects"
          title="Featured work"
          intro="From production platforms for a foundation to mobile apps for student communities — drag, hover to pause, or use the arrows."
        />
      </div>

      {/* Full-bleed carousel so cards can peek past the content column edges. */}
      <Reveal className="mx-auto max-w-7xl px-2 sm:px-4">
        <ProjectsCarousel />
      </Reveal>
    </section>
  );
}
