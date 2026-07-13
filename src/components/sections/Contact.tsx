"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Terminal } from "lucide-react";
import { socialIcons } from "@/lib/icons";
import { site } from "@/content";
import FolderWindow from "@/components/ui/FolderWindow";
import Magnetic from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const channels = [
  { label: "email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, Icon: Phone },
  { label: "location", value: site.location, href: undefined, Icon: MapPin },
  { label: "github", value: `@${site.githubUser}`, href: site.github, Icon: socialIcons.github },
  { label: "linkedin", value: "in/tayzartun", href: site.linkedin, Icon: socialIcons.linkedin },
];

const inputClass =
  "w-full rounded-lg border-2 border-ink/30 bg-shell/70 px-4 py-3 text-sm text-body placeholder:text-soft/60 outline-none transition-colors duration-300 focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/30";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  /** Opens the visitor's own mail app — nothing is sent to a server. */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-28 border-t border-ink/10 bg-panel/30 px-5 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact-title"
          icon={<Mail size={16} strokeWidth={2.2} />}
          label="Contact_Me"
          title="Let's build something"
          intro="Open to internships, junior roles and interesting collaborations. The fastest way to reach me is email."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Direct channels */}
          <Reveal>
            <ul className="space-y-4">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <div className="hover-glow flex items-center gap-4 rounded-xl border-2 border-ink/40 bg-card/80 px-5 py-4 backdrop-blur-xl transition-colors duration-300 hover:border-accent">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-ink/25 bg-tab text-title">
                      <Icon size={17} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] tracking-widest text-soft">
                        <span className="text-code-green">const</span>{" "}
                        <span className="text-code-cyan">{label}</span> =
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block truncate text-sm font-semibold text-title transition-colors hover:text-accent"
                        >
                          &quot;{value}&quot;
                        </a>
                      ) : (
                        <p className="truncate text-sm font-semibold text-title">&quot;{value}&quot;</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Mail composer window */}
          <Reveal delay={0.15}>
            <FolderWindow
              tab={
                <>
                  <Terminal size={16} strokeWidth={2.2} />
                  <span className="text-sm tracking-[0.2em]">new_message.txt</span>
                </>
              }
              contentClassName="p-6 sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-xs text-code-cyan">
                      name:
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Recruiter"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs text-code-cyan">
                      email:
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs text-code-cyan">
                    message:
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Hi Tay Zar, we'd love to talk about..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Magnetic>
                    <Button type="submit" variant="primary">
                      <Send size={15} />
                      Send_Message
                    </Button>
                  </Magnetic>
                  <p className="text-[11px] leading-relaxed text-soft">
                    {"// opens your email app — nothing is stored on a server"}
                  </p>
                </div>
              </form>
            </FolderWindow>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
