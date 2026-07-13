import { site } from "@/content";
import { socialIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

const links = [
  { label: "GitHub", href: site.github, Icon: socialIcons.github },
  { label: "LinkedIn", href: site.linkedin, Icon: socialIcons.linkedin },
  { label: "Facebook", href: site.facebook, Icon: socialIcons.facebook },
  { label: "Instagram", href: site.instagram, Icon: socialIcons.instagram },
];

type SocialLinksProps = {
  /** "pill" = grouped inside a rounded bar (hero); "row" = standalone (footer). */
  variant?: "pill" | "row";
  className?: string;
};

/** Reusable social icon links, used in the hero and footer. */
export default function SocialLinks({ variant = "row", className }: SocialLinksProps) {
  return (
    <ul
      className={cn(
        "flex items-center gap-3",
        variant === "pill" && "rounded-full border border-ink/20 bg-panel px-5 py-2.5",
        className
      )}
    >
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid size-10 place-items-center rounded-full border border-ink/20 bg-card text-title shadow-hard-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
          >
            <Icon aria-hidden className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
