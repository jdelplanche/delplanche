import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageSquareLock, Copy, Check } from "lucide-react";
import {
  ActionButton,
  PageShell,
  Panel,
  SectionHeader,
} from "@/components/site/Primitives";

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
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <PageShell
      index="04 / Contact"
      title="Sovereign Direct Vectors"
      lead="Geen formulieren-doolhof, geen CRM-tracking. Twee directe kanalen, elk end-to-end te verifiëren."
    >
      <section className="grid gap-6 md:grid-cols-2">
        <Panel>
          <Mail size={16} strokeWidth={1.2} className="text-moss" />
          <span className="mt-6 block label-mono">Direct Mail</span>
          <a
            href="mailto:cloud@delplanche.cloud"
            className="mt-3 block font-mono text-[14px] text-ebony transition-colors hover:text-moss"
          >
            cloud@delplanche.cloud
          </a>
          <p className="mt-5 text-sm leading-relaxed text-muted-ink">
            Gehost op Infomaniak kMail — Zwitserse jurisdictie, geen scanning.
          </p>
        </Panel>
        <Panel>
          <MessageSquareLock size={16} strokeWidth={1.2} className="text-moss" />
          <span className="mt-6 block label-mono">Decentraal Matrix Protocol</span>
          <p className="mt-3 font-mono text-[14px] text-ebony">@jona:delplanche.cloud</p>
          <p className="mt-5 text-sm leading-relaxed text-muted-ink">
            End-to-end versleuteld, federatief. Voor realtime technisch overleg.
          </p>
        </Panel>
      </section>

      <section>
        <SectionHeader
          index="A / Verification"
          title="PGP Public Key Fingerprint"
          lead="Verifieer altijd de fingerprint voordat je vertrouwelijke data verstuurt."
        />
        <Panel className="mt-10">
          <div className="border-t border-b border-gridline py-6">
            <p className="font-mono text-[12px] leading-relaxed break-words text-ebony md:text-[14px]">
              {FINGERPRINT}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <ActionButton onClick={copy}>
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Gekopieerd" : "Kopieer Fingerprint"}
            </ActionButton>
            <span
              aria-live="polite"
              className={`border border-gridline bg-card px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-moss uppercase transition-opacity duration-300 ${
                copied ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              Fingerprint gekopieerd naar klembord
            </span>
          </div>
        </Panel>
      </section>
    </PageShell>
  );
}
