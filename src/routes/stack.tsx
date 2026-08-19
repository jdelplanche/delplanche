import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeader } from "@/components/site/Primitives";
import { RedlineNote } from "@/components/site/RedlineNote";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack Specs — delplanche.cloud" },
      {
        name: "description",
        content:
          "Technische vergelijking tussen US Big Tech en de Delplanche / Infomaniak stack: jurisdictie, energie, egress en PUE.",
      },
      { property: "og:title", content: "Stack Specs — delplanche.cloud" },
      {
        property: "og:description",
        content: "Tier 3+ datacenters, PUE < 1.1, 100% hernieuwbare energie en transparante egress.",
      },
    ],
  }),
  component: StackPage,
});

const matrix: [string, string, string][] = [
  ["Juridische Bescherming", "US Cloud Act (FBI/NSA directe toegang)", "Zwitserse FADP & EU-AVG/GDPR"],
  ["Datacenter Energie", "Vaak fossiel / indirect gecompenseerd", "100% Hernieuwbaar (waterkracht & zon)"],
  ["Koeltechniek", "Traditionele airconditioning", "100% Buitenluchtkoeling (geen A/C)"],
  ["PUE-Efficiëntie Index", "~1.35 tot 1.6 (industriegemiddelde)", "< 1.1 (wereldwijde top)"],
  ["Bandbreedte / Egress", "Onvoorspelbaar & extreem duur", "Vaste, transparante tarieven"],
  ["Eigendomsstructuur", "Beursgenoteerde US Tech Giganten", "100% Onafhankelijk Europees familiebedrijf"],
];

const hardware = [
  ["Datacenter Classificatie", "Tier 3+ redundant, Genève & Zürich"],
  ["Storage Layer", "Enterprise NVMe arrays, RAID-beschermd"],
  ["Netwerk", "Redundante 100 Gbit uplinks, DDoS-mitigatie"],
  ["Energie-index (PUE)", "< 1.1 — koeling op buitenlucht"],
  ["Energiebron", "100% hernieuwbaar: waterkracht & zonne-energie"],
  ["Warmterecuperatie", "Restwarmte hergebruikt voor stadsverwarming"],
];

function StackPage() {
  return (
    <PageShell
      index="01 / STACK"
      title="Deep-Dive Architectural Specifications"
      lead="Een directe, ongefilterde vergelijking van infrastructuurparameters. Geen marketing — enkel meetbare eigenschappen."
    >
      <section>
        <SectionHeader index="A / MATRIX" title="Direct Comparison Matrix" />
        <div className="mt-6 overflow-x-auto blueprint-panel p-0">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gridline">
                <th className="p-4 font-mono text-[10px] tracking-[0.16em] text-muted-ink uppercase">
                  Parameter
                </th>
                <th className="p-4 font-mono text-[10px] tracking-[0.16em] text-muted-ink uppercase">
                  US Cloud Giants (AWS / Azure / GCP)
                </th>
                <th className="p-4 font-mono text-[10px] tracking-[0.16em] text-moss uppercase">
                  Delplanche / Infomaniak Stack
                </th>
              </tr>
            </thead>
            <tbody>
              {matrix.map(([param, us, ch]) => (
                <tr key={param} className="border-b border-gridline last:border-0">
                  <td className="p-4 font-mono text-[11px] text-ebony">{param}</td>
                  <td className="p-4 text-sm text-muted-ink">{us}</td>
                  <td className="p-4 text-sm font-medium text-moss">{ch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <RedlineNote className="mt-6">
          // Egress is waar US-facturen ontsporen. Hier: vaste tarieven, geen verrassingen.
        </RedlineNote>
      </section>

      <section>
        <SectionHeader index="B / HARDWARE" title="Datacenter Hardware Specifications" />
        <Panel className="mt-6">
          <dl className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {hardware.map(([k, v]) => (
              <div key={k} className="border-t border-gridline pt-4">
                <dt className="label-mono">{k}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ebony">{v}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </section>
    </PageShell>
  );
}
