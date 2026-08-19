import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-gridline bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-[13px] font-bold tracking-[0.12em] text-ebony">
              DELPLANCHE <span className="text-terracotta">/</span> CLOUD
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-ink">
              Delplanche kan een commissie ontvangen bij aankopen via onze geautoriseerde links. Dit
              kost u niets extra en ondersteunt ons soevereine ecosysteem.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="label-mono">Index</span>
            <Link to="/privacy" className="font-mono text-[11px] tracking-[0.12em] text-ebony uppercase hover:text-moss">
              Privacy Policy &amp; Affiliate Disclosure
            </Link>
            <Link to="/legal" className="font-mono text-[11px] tracking-[0.12em] text-ebony uppercase hover:text-moss">
              Legal Impressum
            </Link>
            <Link to="/security" className="font-mono text-[11px] tracking-[0.12em] text-ebony uppercase hover:text-moss">
              Network Status
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-gridline pt-6 md:flex-row md:justify-between">
          <span className="label-mono">© {new Date().getFullYear()} Delplanche — Brussel, België</span>
          <span className="label-mono">Infrastructure: Infomaniak / Genève — CH</span>
        </div>
      </div>
    </footer>
  );
}
