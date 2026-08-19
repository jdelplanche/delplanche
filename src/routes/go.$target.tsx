import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/site/Primitives";

const TARGETS: Record<string, { label: string; url: string }> = {
  hosting: {
    label: "Managed Webhosting & Mail",
    url: "https://www.infomaniak.com/en/hosting/web-hosting",
  },
  vps: { label: "Cloud VPS & Bare-Metal", url: "https://www.infomaniak.com/en/hosting/vps-cloud" },
  ksuite: { label: "kSuite & Privacy Storage", url: "https://www.infomaniak.com/en/ksuite" },
};

export const Route = createFileRoute("/go/$target")({
  head: () => ({
    meta: [
      { title: "Routing — delplanche.cloud" },
      { name: "robots", content: "noindex" },
      { name: "description", content: "Geautoriseerde routing naar onze infrastructuurpartner." },
      { property: "og:title", content: "Routing — delplanche.cloud" },
      { property: "og:description", content: "Doorverwijzing naar Infomaniak." },
    ],
  }),
  component: GoPage,
});

function GoPage() {
  const { target } = Route.useParams();
  const entry = TARGETS[target];

  useEffect(() => {
    if (entry) {
      const t = setTimeout(() => window.location.replace(entry.url), 1200);
      return () => clearTimeout(t);
    }
  }, [entry]);

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center px-5 py-32 md:px-8">
      <Panel className="w-full">
        <span className="label-mono">Authorized Routing</span>
        {entry ? (
          <>
            <h1 className="mt-4 text-2xl font-semibold text-ebony">
              Doorverwijzen naar Infomaniak…
            </h1>
            <p className="mt-3 text-sm text-muted-ink">
              Stack: <span className="font-mono text-ebony">{entry.label}</span>
            </p>
            <a
              href={entry.url}
              className="mt-8 inline-flex items-center gap-2 border border-moss bg-moss px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-canvas uppercase hover:bg-moss-hover"
            >
              Ga nu verder <ArrowUpRight size={13} />
            </a>
            <p className="mt-6 text-xs leading-relaxed text-muted-ink">
              Delplanche kan een commissie ontvangen bij aankopen via deze link. Dit kost u niets
              extra.
            </p>
          </>
        ) : (
          <>
            <h1 className="mt-4 text-2xl font-semibold text-ebony">Onbekende routing</h1>
            <p className="mt-3 text-sm text-muted-ink">
              Deze routingsleutel bestaat niet. Bekijk de gecureerde stacks op de homepage.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 border border-gridline bg-card px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-ebony uppercase hover:border-moss hover:text-moss"
            >
              Terug naar home
            </Link>
          </>
        )}
      </Panel>
    </div>
  );
}
