import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FolderTabProps = {
  children: ReactNode;
  className?: string;
  /** Fill token for the tab (defaults to the folder-tab green). */
  tone?: "tab" | "mint";
};

/**
 * Folder tab with a clean, uniform border and — crucially — geometry that is
 * IDENTICAL on every tab no matter how long the label is.
 *
 * It's built in two pieces so nothing stretches:
 *   1. `body` — a flat rectangle with a fixed rounded top-left corner and 2px
 *      top + left borders (CSS, so the radius is always the same px).
 *   2. `cap`  — a fixed 26px-wide SVG that draws the diagonal slope on the
 *      right. Because the cap width is constant, the slope angle is constant
 *      too; only the flat body grows with the label.
 * An earlier version stretched one SVG across the whole tab, which made the
 * slope/corner change with label length — that's the bug this fixes.
 */
const SLOPE_W = 26;

export function FolderTab({ children, className, tone = "tab" }: FolderTabProps) {
  const fill = tone === "mint" ? "var(--mint)" : "var(--tab)";

  return (
    <div className={cn("relative inline-flex items-stretch", className)}>
      {/* Flat body: rounded top-left + top/left borders, no right/bottom border */}
      <div
        className="flex items-center gap-2.5 rounded-tl-xl border-l-2 border-t-2 border-ink py-2.5 pl-5 pr-3 font-semibold text-title"
        style={{ background: fill }}
      >
        {children}
      </div>

      {/* Fixed-width slope cap */}
      <svg
        aria-hidden
        width={SLOPE_W}
        viewBox={`0 0 ${SLOPE_W} 48`}
        preserveAspectRatio="none"
        className="-ml-px block self-stretch"
        style={{ height: "auto" }}
      >
        {/* fill the lower-left triangle so it reads as one shape with the body */}
        <path d={`M0 0 L${SLOPE_W} 48 L0 48 Z`} fill={fill} />
        {/* stroke only the diagonal — top + left borders come from the body */}
        <path
          d={`M0 0 L${SLOPE_W} 48`}
          fill="none"
          stroke="var(--ink)"
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

/**
 * The offset "second sheet" that peeks out behind a window, giving the stacked
 * folder look. Reusable so any window-style panel can share the exact same
 * treatment. Requires a `relative` positioned parent.
 */
export function StackedSheet({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute left-8 -top-3 -right-3 bottom-6 rounded-xl border-2 border-ink bg-card",
        className
      )}
    />
  );
}

type FolderWindowProps = {
  tab: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  /** Render the offset "stacked sheet" behind the window. */
  stacked?: boolean;
};

/**
 * The signature card of the theme: a bordered window with a folder tab,
 * optionally with a second sheet peeking out behind it.
 */
export default function FolderWindow({
  tab,
  children,
  className,
  contentClassName,
  stacked = true,
}: FolderWindowProps) {
  return (
    <div className={cn("relative", className)}>
      {stacked && <StackedSheet />}
      <div className="relative">
        <FolderTab>{tab}</FolderTab>
        <div
          className={cn(
            "relative -mt-0.5 rounded-b-xl rounded-tr-xl border-2 border-ink bg-card/80 backdrop-blur-xl shadow-hard",
            contentClassName ?? "p-6 sm:p-10"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
