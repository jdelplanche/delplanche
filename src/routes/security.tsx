import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Leaf, Gauge, Lock } from "lucide-react";
import { PageShell, Panel, SectionHeader } from "@/components/site/Primitives";
import { RedlineNote } from "@/components/site/RedlineNote";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & Compliance — delplanche.cloud" },
      {
        name: "description",
        content:
          "Zwitserse FADP-wetgeving, immuniteit voor de US Cloud Act, ISO 27001/14001/50001 en verplichte TLS 1.3.",
      },
      { property: "og:title", content: "Security & Compliance — delplanche.cloud" },
      {
        property: "og:description",
        content: "Juridische en technische bescherming van uw data onder Zwitsers recht.",
      },
    ],
  }),
  component: SecurityPage,
});

const isos = [
  { code: "ISO 27001", label: "Informatiebeveiliging", icon: ShieldCheck },
  { code: "ISO 14001", label: "Milieumanagement", icon: Leaf },
  { code: "ISO 50001", label: "Energie-efficiëntie", icon: Gauge },
];

const encryption = [
  ["TLS 1.3", "Verplicht op alle endpoints; oudere suites geweigerd."],
  ["DNSSEC", "Ondertekende zones tegen cache poisoning en spoofing."],
  ["HSTS Preload", "Browser-enforced HTTPS, geen downgrade mogelijk."],
  ["At-Rest Encryptie", "Versleutelde volumes binnen Zwitserse jurisdictie."],
];

function SecurityPage() {
  return (
    <PageShell
      index="02 / SECURITY"
      title="Compliance & Swiss Law"
      lead="Datasoevereiniteit is geen feature maar een juridische positie. Zwitserland biedt een grondwettelijk beschermd kader dat US-jurisdicties niet kunnen evenaren."
    >
      <section className="grid gap-6 md:grid-cols-2">
        <Panel>
          <span className="label-mono">Jurisdictie</span>
          <h3 className="mt-3 text-xl font-semibold text-ebony">
            Zwitserse Datenschutzgesetz (FADP)
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            De FADP (nLPD/DSG) verankert dataminimalisatie, doelbinding en transparantie in Zwitsers
            recht. Buitenlandse autoriteiten kunnen data enkel opvragen via formele rechtshulp,
            beoordeeld door een Zwitserse rechter — niet via een administratieve bevel.
          </p>
        </Panel>
        <Panel>
          <span className="label-mono">Immuniteit</span>
          <h3 className="mt-3 text-xl font-semibold text-ebony">US Cloud Act Immuniteit</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            De US Cloud Act verplicht Amerikaanse bedrijven data te overhandigen, waar die ook staat
            — inclusief EU-regio's. Infomaniak is 100% Zwitsers eigendom zonder US-entiteit en valt
            daardoor buiten het bereik van deze wet.
          </p>
          <RedlineNote className="mt-6">// Geen US-entiteit = geen extraterritoriale claim.</RedlineNote>
        </Panel>
      </section>

      <section>
        <SectionHeader index="A / CERTIFICATIONS" title="ISO Certificeringen" />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {isos.map((iso) => (
            <div key={iso.code} className="blueprint-panel p-6">
              <iso.icon size={18} className="text-moss" />
              <p className="mt-4 font-mono text-[13px] font-bold tracking-[0.1em] text-ebony">
                {iso.code}
              </p>
              <p className="mt-1 text-sm text-muted-ink">{iso.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader index="B / ENCRYPTION" title="Encryption Standards" />
        <Panel className="mt-6">
          <dl className="divide-y divide-gridline">
            {encryption.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-2 py-4 md:flex-row md:gap-8">
                <dt className="w-48 shrink-0 font-mono text-[11px] tracking-[0.12em] text-moss uppercase">
                  {k}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex items-center gap-2 border-t border-gridline pt-6">
            <Lock size={14} className="text-moss" />
            <span className="label-mono">Network status: all systems nominal — Geneva</span>
          </div>
        </Panel>
      </section>
    </PageShell>
  );
}
