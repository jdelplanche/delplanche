import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { ActionButton, PageShell, Panel, SectionHeader } from "@/components/site/Primitives";
import { RedlineNote } from "@/components/site/RedlineNote";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Client Onboarding Protocol — delplanche.cloud" },
      {
        name: "description",
        content:
          "Vraag Turn-Key onboarding aan: DNS, SSL, e-mail en webserver volledig geconfigureerd binnen 24 uur.",
      },
      { property: "og:title", content: "Client Onboarding Protocol — delplanche.cloud" },
      {
        property: "og:description",
        content: "Drie stappen van pakketkeuze tot productieklare Zwitserse infrastructuur.",
      },
    ],
  }),
  component: OnboardingPage,
});

const steps = [
  ["01. Select Stack", "Kies het gewenste Infomaniak-pakket via onze geautoriseerde routing-links."],
  ["02. Grant Access", "Wijs Delplanche aan als technisch beheerder binnen je Infomaniak console."],
  ["03. Turn-Key Setup", "Wij configureren je DNS, SSL, e-mail en webserver binnen 24 uur."],
];

const inputClass =
  "w-full border border-gridline bg-canvas px-3 py-3 font-mono text-[12px] text-ebony outline-none transition-colors placeholder:text-muted-ink/70 focus:border-moss";

function OnboardingPage() {
  const [state, setState] = useState<"idle" | "checking" | "done">("idle");
  const [ticket, setTicket] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("checking");
    setTicket(`DPC-${Math.floor(100000 + Math.random() * 899999)}`);
    setTimeout(() => setState("done"), 1600);
  };

  return (
    <PageShell
      index="03 / ONBOARDING"
      title="Client Protocol & Turn-Key Request"
      lead="Dien je infrastructuuraanvraag in. Elke aanvraag wordt manueel gevalideerd door een architect voordat de configuratie start."
    >
      <section>
        <SectionHeader index="A / WORKFLOW" title="Workflow Overview" />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {steps.map(([title, body]) => (
            <div key={title} className="blueprint-panel p-6">
              <p className="font-mono text-[11px] tracking-[0.14em] text-terracotta uppercase">
                {title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-ink">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader index="B / REQUEST FORM" title="Infrastructure Request" />
        <Panel className="mt-6">
          {state === "done" ? (
            <div className="py-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-moss" />
                <p className="font-mono text-[12px] tracking-[0.14em] text-moss uppercase">
                  Aanvraag gevalideerd — wachtrij bevestigd
                </p>
              </div>
              <dl className="mt-8 divide-y divide-gridline border-y border-gridline">
                {[
                  ["Ticket ID", ticket],
                  ["Queue position", "02 / 07"],
                  ["Validatie", "Automatische pre-check voltooid"],
                  ["Verwachte setup", "< 24 uur na toegangsverlening"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-3">
                    <dt className="label-mono">{k}</dt>
                    <dd className="font-mono text-[12px] text-ebony">{v}</dd>
                  </div>
                ))}
              </dl>
              <RedlineNote className="mt-8">
                // Je ontvangt binnen kort een bevestiging op het opgegeven domein-contact.
              </RedlineNote>
              <ActionButton className="mt-8" variant="outline" onClick={() => setState("idle")}>
                Nieuwe aanvraag
              </ActionButton>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-6 md:grid-cols-2">
              <Field label="Organisatie / Naam">
                <input required name="org" className={inputClass} placeholder="Delplanche BV" />
              </Field>
              <Field label="Domeinnaam">
                <input required name="domain" className={inputClass} placeholder="bedrijf.be" />
              </Field>
              <Field label="Gewenste Stack">
                <select required name="stack" defaultValue="webhosting" className={inputClass}>
                  <option value="webhosting">Managed Webhosting &amp; Mail</option>
                  <option value="vps">Cloud VPS &amp; Bare-Metal</option>
                  <option value="ksuite">kSuite &amp; Privacy Storage</option>
                  <option value="custom">Custom Architectuur</option>
                </select>
              </Field>
              <Field label="Infomaniak Account Status">
                <div className="flex flex-col gap-3 pt-1">
                  {[
                    ["existing", "Ik heb al een account"],
                    ["new", "Ik moet dit nog aanmaken"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className="flex items-center gap-3 font-mono text-[12px] text-ebony"
                    >
                      <input
                        type="radio"
                        name="account"
                        value={value}
                        defaultChecked={value === "existing"}
                        className="h-3 w-3 accent-[var(--moss)]"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </Field>
              <div className="md:col-span-2">
                <Field label="Infrastructuur Notities">
                  <textarea
                    name="notes"
                    rows={5}
                    className={inputClass}
                    placeholder="Huidige hosting, migratievereisten, mailboxen, verwacht verkeer…"
                  />
                </Field>
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center gap-4">
                <ActionButton type="submit" disabled={state === "checking"}>
                  {state === "checking" ? (
                    <>
                      <Loader2 size={13} className="animate-spin" /> Validatie loopt…
                    </>
                  ) : (
                    <>
                      Verzend voor infrastructurele validatie <ArrowUpRight size={13} />
                    </>
                  )}
                </ActionButton>
                <span className="label-mono">Zero-tracking formulier</span>
              </div>
            </form>
          )}
        </Panel>
      </section>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-mono">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
