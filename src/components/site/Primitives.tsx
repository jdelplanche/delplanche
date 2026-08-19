import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-gridline bg-card px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-moss uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  index,
  title,
  lead,
}: {
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-terracotta">{index}</span>
        <span className="h-px flex-1 bg-gridline" />
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-ebony md:text-4xl">{title}</h2>
      {lead && <p className="mt-3 text-sm leading-relaxed text-muted-ink md:text-base">{lead}</p>}
    </div>
  );
}

const baseBtn =
  "inline-flex items-center justify-center gap-2 border px-5 py-3 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors";

export function ActionButton({
  children,
  variant = "solid",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" }) {
  return (
    <button
      className={cn(
        baseBtn,
        variant === "solid"
          ? "border-moss bg-moss text-canvas hover:bg-moss-hover"
          : "border-gridline bg-card text-ebony hover:border-moss hover:text-moss",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ActionLink({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        baseBtn,
        variant === "solid"
          ? "border-moss bg-moss text-canvas hover:bg-moss-hover"
          : "border-gridline bg-card text-ebony hover:border-moss hover:text-moss",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("blueprint-panel p-6 md:p-8", className)}>{children}</div>;
}

export function PageShell({
  index,
  title,
  lead,
  children,
}: {
  index: string;
  title: string;
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-28 pb-24 md:px-8 md:pt-36">
      <SectionHeader index={index} title={title} lead={lead} />
      <div className="mt-12 space-y-12">{children}</div>
    </div>
  );
}
