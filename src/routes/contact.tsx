import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageSquareLock, Copy, Check } from "lucide-react";
import { PageShell, Panel, SectionHeader } from "@/components/site/Primitives";
import { RedlineNote } from "@/components/site/RedlineNote";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Direct Contact Hub — delplanche.cloud" },
      {
        name: "description",
        content:
          "Contacteer Delplanche via versleutelde mail, het Matrix-protocol of verifieer onze PGP-fingerprint.",
      },
      { property: "og:title", content: "Direct Contact Hub — delplanche.cloud" },
      {
        property: "og:description",
        content: "Soevereine communicatievectoren: e-mail, Matrix en PGP.",
      },
    ],
  }),
  component: ContactPage,
});

const FINGERPRINT = "4A2B 8F91 C3E4 D5F6 7890 1234 5678 90AB CDEF 1234";

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(FINGERPRINT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <PageShell
      index="04 / CONTACT"
      title="Sovereign Direct Vectors"
      lead="Geen formulieren-doolhof, geen CRM-tracking. Drie directe kanalen, elk end-to-end te verifiëren."
    >
      <section className="grid gap-6 md:grid-cols-2">
        <Panel>
          <Mail size={18} className="text-moss" />
          <span className="mt-4 block label-mono">E-Mail Vector</span>
          <a
            href="mailto:cloud@delplanche.cloud"
            className="mt-2 block font-mono text-[15px] text-ebony hover:text-moss"
          >
            cloud@delplanche.cloud
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Gehost op Infomaniak kMail — Zwitserse jurisdictie, geen scanning.
          </p>
        </Panel>
        <Panel>
          <MessageSquareLock size={18} className="text-moss" />
          <span className="mt-4 block label-mono">Decentraal Matrix Protocol</span>
          <p className="mt-2 font-mono text-[15px] text-ebony">@jona:delplanche.cloud</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            End-to-end versleuteld, federatief. Voor realtime technisch overleg.
          </p>
        </Panel>
      </section>

      <section>
        <SectionHeader index="A / VERIFICATION" title="PGP Public Key Fingerprint" />
        <Panel className="mt-6">
          <div className="border border-gridline bg-canvas p-5">
            <p className="font-mono text-[12px] leading-relaxed break-words text-ebony md:text-[14px]">
              {FINGERPRINT}
            </p>
          </div>
          <button
            onClick={copy}
            className="mt-5 inline-flex items-center gap-2 border border-moss bg-moss px-4 py-3 font-mono text-[11px] tracking-[0.14em] text-canvas uppercase transition-colors hover:bg-moss-hover"
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? "Gekopieerd" : "[ Kopieer fingerprint ]"}
          </button>
          <RedlineNote className="mt-8">
            // Verifieer altijd de fingerprint voor je vertrouwelijke data verstuurt.
          </RedlineNote>
        </Panel>
      </section>
    </PageShell>
  );
}
