import { nav, site } from "@/content";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-panel/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center">
        <a href="#home" className="font-bold text-title transition-colors hover:text-accent">
          {site.brand}
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs text-soft transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <SocialLinks />

        <p className="text-xs text-soft">
          <span className="text-code-green">const</span>{" "}
          <span className="text-code-cyan">builtWith</span> = [
          <span className="text-code-pink">&quot;Next.js&quot;</span>,{" "}
          <span className="text-code-pink">&quot;Tailwind&quot;</span>,{" "}
          <span className="text-code-pink">&quot;Framer Motion&quot;</span>];
        </p>
        <p className="text-xs text-soft">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
