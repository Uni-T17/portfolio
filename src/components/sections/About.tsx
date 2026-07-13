import { User } from "lucide-react";
import { about, site } from "@/content";
import FolderWindow from "@/components/ui/FolderWindow";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-28 border-y border-ink/10 bg-panel/30 px-5 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <FolderWindow
            tab={
              <>
                <User size={18} strokeWidth={2.2} />
                <span className="text-lg tracking-[0.25em]">About_Me</span>
              </>
            }
          >
            <h2 id="about-title" className="sr-only">
              About me
            </h2>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Summary + code card */}
              <div>
                <p className="leading-relaxed text-body">{about.summary}</p>

                <div className="mt-8 rounded-xl border border-ink/25 bg-shell/70 p-5 text-sm leading-7 shadow-hard-sm">
                  <p>
                    <span className="text-code-green">const</span>{" "}
                    <span className="text-code-cyan">developer</span> = {"{"}
                  </p>
                  <p className="pl-5">
                    name: <span className="text-code-pink">&quot;{site.name}&quot;</span>,
                  </p>
                  <p className="pl-5">
                    base: <span className="text-code-pink">&quot;{site.location}&quot;</span>,
                  </p>
                  <p className="pl-5">
                    focus: [<span className="text-code-pink">&quot;Fullstack&quot;</span>,{" "}
                    <span className="text-code-pink">&quot;UI/UX&quot;</span>],
                  </p>
                  <p className="pl-5">
                    openTo:{" "}
                    <span className="text-code-pink">&quot;Internships &amp; junior roles&quot;</span>,
                  </p>
                  <p>{"};"}</p>
                </div>

                <dl className="mt-8 grid grid-cols-3 gap-4">
                  {about.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-ink/25 bg-tab/50 p-4 text-center"
                    >
                      <dt className="order-2 mt-1 block text-[11px] text-soft">{s.label}</dt>
                      <dd className="text-2xl font-bold text-accent">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Goals + strengths */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-widest text-title">
                    <span className="text-soft">{"// "}</span>Career_Goals
                  </h3>
                  <ul className="space-y-3">
                    {about.goals.map((goal) => (
                      <li key={goal} className="flex gap-3 text-sm leading-relaxed">
                        <span aria-hidden className="mt-0.5 text-code-green">
                          →
                        </span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-widest text-title">
                    <span className="text-soft">{"// "}</span>Strengths
                  </h3>
                  <ul className="space-y-3">
                    {about.strengths.map((s) => (
                      <li key={s} className="flex gap-3 text-sm leading-relaxed">
                        <span aria-hidden className="mt-0.5 text-code-cyan">
                          ✓
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FolderWindow>
        </Reveal>
      </div>
    </section>
  );
}
