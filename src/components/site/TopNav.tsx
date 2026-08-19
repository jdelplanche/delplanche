import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "01 STACK", to: "/stack" },
  { label: "02 SECURITY", to: "/security" },
  { label: "03 ONBOARDING", to: "/onboarding" },
  { label: "04 CONTACT", to: "/contact" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gridline bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" className="font-mono text-[13px] font-bold tracking-[0.12em] text-ebony">
          DELPLANCHE <span className="text-terracotta">/</span> CLOUD
        </Link>

        <div className="hidden items-center gap-2 border border-gridline bg-card px-3 py-1.5 lg:flex">
          <span className="pulse-dot" />
          <span className="font-mono text-[10px] tracking-[0.16em] text-moss uppercase">
            Swiss DC Active (Geneva)
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-[11px] tracking-[0.14em] text-muted-ink uppercase transition-colors hover:text-ebony"
              activeProps={{ className: "text-moss" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-ebony md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gridline bg-canvas px-5 py-4 md:hidden">
          <div className="mb-3 flex items-center gap-2">
            <span className="pulse-dot" />
            <span className="font-mono text-[10px] tracking-[0.16em] text-moss uppercase">
              Swiss DC Active (Geneva)
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] tracking-[0.14em] text-ebony uppercase"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
