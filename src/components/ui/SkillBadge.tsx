import { getSkillIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

/**
 * A single skill chip: brand icon + label. The icon sits in neutral ink and
 * animates to its real brand color on hover (kept in a CSS var so the markup
 * stays theme-agnostic). Reusable anywhere a skill needs to be shown.
 */
export default function SkillBadge({ name, className }: { name: string; className?: string }) {
  const { Icon, color } = getSkillIcon(name);

  return (
    <span
      style={{ ["--bc" as string]: color }}
      className={cn(
        "group/skill inline-flex items-center gap-2 rounded-lg border border-ink/30 bg-shell/70 px-2.5 py-1.5 text-xs text-title",
        "transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--bc)]",
        className
      )}
    >
      <Icon
        aria-hidden
        className="size-4 shrink-0 text-soft transition-colors duration-200 group-hover/skill:[color:var(--bc)]"
      />
      {name}
    </span>
  );
}
