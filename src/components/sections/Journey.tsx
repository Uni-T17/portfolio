import { Route, Terminal } from "lucide-react";
import { education, experience, type TimelineItem } from "@/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { FolderTab, StackedSheet } from "@/components/ui/FolderWindow";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-1.5 space-y-9 border-l-2 border-ink/25 pl-7">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            aria-hidden
            className="absolute -left-[37px] top-1 size-4 rounded-full border-2 border-ink bg-accent"
          />
          <p className="inline-block rounded-md border border-ink/25 bg-tab/70 px-2.5 py-0.5 text-[11px] tracking-wide text-title">
            {item.period}
          </p>
          <h4 className="mt-2.5 font-bold leading-snug text-title">{item.title}</h4>
          <p className="mt-0.5 text-xs text-code-cyan">@ {item.org}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-body">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

function TimelinePanel({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: TimelineItem[];
}) {
  return (
    // `relative` anchors the stacked sheet; the same window treatment as About_Me.
    <div className="relative flex h-full flex-col">
      <StackedSheet />
      <FolderTab>
        {icon}
        <span className="text-sm tracking-[0.2em]">{label}</span>
      </FolderTab>
      {/* Fixed height so Experience and Education always match; the list scrolls
          on its own once more entries are added. */}
      <div className="relative -mt-0.5 flex-1 rounded-b-xl rounded-tr-xl border-2 border-ink bg-card/80 shadow-hard backdrop-blur-xl">
        <div className="scroll-slim max-h-[26rem] overflow-y-auto p-6 sm:p-8">
          <Timeline items={items} />
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="scroll-mt-28 px-5 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="journey-title"
          icon={<Route size={16} strokeWidth={2.2} />}
          label="Journey"
          title="Experience & Education"
          intro="Where I've worked and what I'm studying — in chronological folders."
        />

        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <Reveal className="h-full">
            <TimelinePanel
              icon={<Terminal size={16} strokeWidth={2.2} />}
              label="experience.log"
              items={experience}
            />
          </Reveal>
          <Reveal delay={0.15} className="h-full">
            <TimelinePanel
              icon={<Terminal size={16} strokeWidth={2.2} />}
              label="education.log"
              items={education}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
