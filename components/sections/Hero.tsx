import { Download } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/layout/Section";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2";

export function Hero() {
  return (
    <Section>
      <p className="text-muted font-mono text-sm">
        {site.name} — {site.role} — {site.location}
      </p>

      <h1 className="font-display text-chalk mt-4 max-w-2xl text-2xl md:text-3xl">
        {site.headline}
      </h1>

      <p className="text-muted mt-6 max-w-xl font-sans text-lg">{site.intro}</p>

      <div className="mt-12 flex flex-wrap gap-6">
        <a
          href="#projects"
          className={`border-chalk text-chalk rounded-[2px] border px-6 py-3 font-mono text-sm ${focusRing}`}
        >
          View work
        </a>
        <a
          href={site.links.cv}
          download
          className={`border-rule/60 text-muted flex items-center gap-2 rounded-[2px] border px-6 py-3 font-mono text-sm ${focusRing}`}
        >
          <Download size={14} />
          Download CV
        </a>
      </div>
    </Section>
  );
}
