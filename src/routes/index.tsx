import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Lock, Server, Globe, Zap } from "lucide-react";
import { RedlineNote, RedlineCircle, RedlineArrow } from "@/components/site/RedlineNote";
import { ActionButton, ActionLink, Badge, Panel, SectionHeader } from "@/components/site/Primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "delplanche.cloud — Sovereign Swiss Cloud Architecture" },
      {
        name: "description",
        content:
          "Gecureerde Zwitserse en Europese cloudinfrastructuur: webhosting, VPS en kSuite met FADP-bescherming en 100% hernieuwbare energie.",
      },
      { property: "og:title", content: "delplanche.cloud — Sovereign Swiss Cloud Architecture" },
      {
        property: "og:description",
        content:
          "Infrastructuur voor bedrijven die absolute datasoevereiniteit eisen. Zwitserse datacenters, geen US Cloud Act risico.",
      },
    ],
  }),
  component: Home,
});

const stacks = [
  {
    id: "01",
    title: "Managed Webhosting & Mail",
    icon: Globe,
    specs: [
      "100 GB NVMe Storage",
      "20 Professionele Mailboxen",
      "Onbeperkt dataverkeer",
      "Gratis SSL & Let's Encrypt",
    ],
    cta: "Bestel Webhosting",
    href: "/go/hosting",
    note: "// Aanbevolen voor KMO's, webshops & bureaus.",
  },
  {
    id: "02",
    title: "Cloud VPS & Bare-Metal",
    icon: Server,
    specs: [
      "Dedicated Compute Cores",
      "Schaalbaar RAM & NVMe",
      "Custom Linux / Docker support",
      "High-Availability cluster",
    ],
    cta: "Configureer VPS Instance",
    href: "/go/vps",
    note: "// Ideaal voor zware SaaS-productie & databases.",
  },
  {
    id: "03",
    title: "kSuite & Privacy Storage",
    icon: Lock,
    specs: [
      "MS365 & Google Workspace alternatief",
      "End-to-end versleutelde kDrive",
      "kMail & Swiss Transfer",
      "Nul datamining",
    ],
    cta: "Ontdek Privacy Suite",
    href: "/go/ksuite",
    note: "// Hét soevereine kantoorplatform voor teams.",
  },
];

const steps = [
  {
    id: "01",
    title: "Select Stack",
    body: "Kies het gewenste Infomaniak-pakket via onze geautoriseerde routing-links.",
  },
  {
    id: "02",
    title: "Grant Access",
    body: "Wijs Delplanche aan als technisch beheerder binnen je Infomaniak console.",
  },
  {
    id: "03",
    title: "Turn-Key Setup",
    body: "Wij configureren je DNS, SSL, e-mail en webserver binnen 24 uur.",
  },
];

function Home() {
  const scrollToStacks = () =>
    document.getElementById("stacks")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="mx-auto max-w-6xl px-5 pt-28 pb-24 md:px-8 md:pt-36">
      {/* HERO */}
      <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <Badge>[ Status: Verified Swiss Stack ]</Badge>
          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold text-ebony md:text-6xl">
            Sovereign Cloud
            <br />
            Architecture.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-ink">
            Gecureerde Europese en Zwitserse infrastructuur voor bedrijven en projecten die absolute
            datasoevereiniteit, ongeëvenaarde uptime en juridische bescherming eisen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton onClick={scrollToStacks}>
              Bekijk Cloud Stacks <ArrowUpRight size={13} />
            </ActionButton>
            <ActionLink to="/onboarding" variant="outline">
              Turn-Key Onboarding <ArrowUpRight size={13} />
            </ActionLink>
          </div>
        </div>
        <div className="lg:pb-6">
          <RedlineNote arrow="left" rotate={-2}>
            // Nul risico op de US Cloud Act. Gecertificeerde Tier 3+ datacenters op Zwitserse
            waterkracht.
          </RedlineNote>
        </div>
      </section>

      {/* DATAFLOW */}
      <section className="mt-24">
        <SectionHeader
          index="A / DATAFLOW"
          title="Direct Architecture Flow"
          lead="Elke request verlaat de browser versleuteld en eindigt binnen Zwitserse jurisdictie. Geen tussenliggende US-hops."
        />
        <Panel className="mt-8">
          <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <FlowNode label="Node 01" title="Client Browser" detail="TLS 1.3 handshake" />
            <FlowConnector label="TLS 1.3" />
            <FlowNode label="Node 02" title="Delplanche Edge" detail="Routing & caching" />
            <FlowConnector label="Private link" />
            <div className="relative">
              <FlowNode
                label="Node 03"
                title="Infomaniak DC"
                detail="Genève — CH"
                accent
              />
              <RedlineCircle className="absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)]" />
            </div>
          </div>
          <div className="mt-10 flex items-start gap-2 md:justify-end">
            <RedlineNote rotate={-2}>
              // Unieke bescherming onder het Zwitserse recht (FADP) — 100% compliance.
            </RedlineNote>
            <RedlineArrow direction="up" className="hidden md:block" />
          </div>
        </Panel>
      </section>

      {/* STACKS */}
      <section id="stacks" className="mt-24 scroll-mt-24">
        <SectionHeader
          index="B / CURATED STACKS"
          title="The Curated Stacks"
          lead="Drie gevalideerde configuraties. Geen eindeloze catalogus — alleen wat wij zelf in productie draaien."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stacks.map((s) => (
            <div key={s.id} className="blueprint-panel flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-terracotta">
                  {s.id}
                </span>
                <s.icon size={16} className="text-moss" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ebony">{s.title}</h3>
              <ul className="mt-5 space-y-2 border-t border-gridline pt-5">
                {s.specs.map((spec) => (
                  <li key={spec} className="font-mono text-[11px] leading-relaxed text-muted-ink">
                    • {spec}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grow" />
              <RedlineNote rotate={-1.5} className="mb-5">
                {s.note}
              </RedlineNote>
              <a
                href={s.href}
                className="inline-flex items-center justify-center gap-2 border border-moss bg-moss px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-canvas uppercase transition-colors hover:bg-moss-hover"
              >
                {s.cta} <ArrowUpRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ONBOARDING TEASER */}
      <section className="mt-24">
        <SectionHeader
          index="C / PROTOCOL"
          title="Turn-Key Onboarding"
          lead="Van pakketkeuze tot volledig geconfigureerde infrastructuur binnen 24 uur."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="blueprint-panel p-6">
              <span className="font-mono text-[11px] tracking-[0.2em] text-terracotta">
                {step.id}
              </span>
              <h3 className="mt-4 font-mono text-[12px] tracking-[0.14em] text-ebony uppercase">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-ink">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ActionLink to="/onboarding">
            Start Onboarding Protocol <ArrowUpRight size={13} />
          </ActionLink>
          <Link
            to="/stack"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-muted-ink uppercase hover:text-moss"
          >
            <Zap size={13} /> Bekijk technische specificaties
          </Link>
        </div>
      </section>
    </div>
  );
}

function FlowNode({
  label,
  title,
  detail,
  accent,
}: {
  label: string;
  title: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`border bg-canvas p-5 ${accent ? "border-moss" : "border-gridline"}`}
    >
      <span className="label-mono">{label}</span>
      <p className={`mt-3 text-sm font-semibold ${accent ? "text-moss" : "text-ebony"}`}>{title}</p>
      <p className="mt-1 font-mono text-[11px] text-muted-ink">{detail}</p>
    </div>
  );
}

function FlowConnector({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-2">
      <span className="hidden h-px w-10 bg-gridline md:block" />
      <span className="font-mono text-[9px] tracking-[0.16em] text-terracotta uppercase">
        {label}
      </span>
      <span className="h-8 w-px bg-gridline md:hidden" />
    </div>
  );
}
