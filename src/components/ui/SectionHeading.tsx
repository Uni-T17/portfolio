import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import { FolderTab } from "@/components/ui/FolderWindow";

type SectionHeadingProps = {
  id?: string;
  icon: ReactNode;
  label: string;
  title: string;
  intro?: string;
};

/**
 * Folder-tab styled section heading shared by the open (non-windowed) sections.
 * The tab sits on a hairline "folder edge" rule, with the title and intro below
 * for a clean, consistent hierarchy across every section.
 */
export default function SectionHeading({ id, icon, label, title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="flex flex-col items-start">
        <FolderTab>
          {icon}
          <span className="text-sm tracking-[0.25em]">{label}</span>
        </FolderTab>

        {/* folder edge */}
        <div className="-mt-0.5 h-0.5 w-full max-w-xl rounded-full bg-ink" />

        <h2
          id={id}
          className="mt-5 text-3xl font-bold tracking-tight text-title sm:text-4xl md:text-5xl"
        >
          {title}
          <span className="text-accent">.</span>
        </h2>

        {intro && <p className="mt-3 max-w-2xl leading-relaxed text-soft">{intro}</p>}
      </div>
    </Reveal>
  );
}
