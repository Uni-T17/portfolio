import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type FloatingChip = {
  label: string;
  /** Tailwind position classes, e.g. "-left-4 top-10". */
  position: string;
  /** Extra classes (float speed variant, etc.). */
  className?: string;
};

type ProfilePhotoProps = {
  src: StaticImageData;
  alt: string;
  chips?: FloatingChip[];
  className?: string;
};

const defaultChips: FloatingChip[] = [
  { label: "<dev />", position: "-left-3 top-8 sm:-left-6", className: "float-y" },
  { label: "next.js", position: "-right-3 bottom-16 sm:-right-6", className: "float-y-slow" },
  { label: "UI/UX", position: "right-2 top-2", className: "float-y-slow" },
];

/**
 * Circular portrait framed by a rotating dashed orbit ring, with floating
 * "code tag" chips. Reusable — pass any image, alt text and chip set.
 */
export default function ProfilePhoto({
  src,
  alt,
  chips = defaultChips,
  className,
}: ProfilePhotoProps) {
  return (
    <div className={cn("relative mx-auto aspect-square w-72 sm:w-80", className)}>
      {/* Orbit rings */}
      <div
        aria-hidden
        className="orbit-spin absolute inset-0 rounded-full border-2 border-dashed border-ink/25"
      />
      <div
        aria-hidden
        className="orbit-spin-rev absolute inset-[7%] rounded-full border border-dashed border-accent/25"
      />
      {/* Soft glow */}
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 68%)" }}
      />

      {/* Photo */}
      <div className="absolute inset-[11%] overflow-hidden rounded-full border-[3px] border-ink shadow-hard">
        <Image
          src={src}
          alt={alt}
          priority
          placeholder="blur"
          sizes="(max-width: 640px) 288px, 320px"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Floating chips */}
      {chips.map((chip) => (
        <span
          key={chip.label}
          aria-hidden
          className={cn(
            "absolute z-10 inline-flex items-center gap-1.5 rounded-lg border-2 border-ink bg-card px-3 py-1 text-xs font-semibold text-title shadow-hard-sm",
            chip.position,
            chip.className
          )}
        >
          <span className="size-1.5 rounded-full bg-code-green" />
          {chip.label}
        </span>
      ))}
    </div>
  );
}
