import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center border-2 border-ink font-semibold text-title shadow-hard-sm transition-all duration-300 hover:-translate-y-0.5 hover-glow";

const sizes: Record<Size, string> = {
  sm: "gap-1.5 rounded-md px-3.5 py-2 text-xs",
  md: "gap-2 rounded-lg px-5 py-3 text-sm",
};

const variants: Record<Variant, string> = {
  primary: "bg-mint",
  secondary: "bg-card hover:border-accent hover:text-accent",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** If set, renders an <a>. Otherwise renders a <button>. */
  href?: string;
  /** Open in a new tab (adds target/rel). */
  external?: boolean;
  download?: boolean;
  /** <button> only. */
  type?: "button" | "submit";
  onClick?: () => void;
  "aria-label"?: string;
};

/**
 * The one button used everywhere (hero CTAs, project links, contact submit).
 * Change its look here and every button updates. Renders as a link when `href`
 * is given, otherwise a real <button>.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  download,
  type,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
