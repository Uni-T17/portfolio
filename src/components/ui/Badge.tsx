import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small bordered chip for tech tags and skills. */
export default function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-ink/40 bg-tab/60 px-2.5 py-1 text-xs text-title",
        "transition-colors duration-200 hover:border-accent hover:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
