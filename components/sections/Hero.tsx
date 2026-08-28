import Image from "next/image";
import { Download } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2";

export function Hero() {
  return (
    <Section reveal={false}>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto]">
        <Reveal stagger preserveOpacity>
          <p className="text-muted font-mono text-sm">
            {site.name} — {site.role} — {site.location}
          </p>

          <h1 className="font-display text-chalk mt-4 max-w-2xl text-2xl md:text-3xl">
            {site.headline}
          </h1>

          <p className="text-muted mt-6 max-w-xl font-sans text-lg">
            {site.intro}
          </p>

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
        </Reveal>

        <Reveal preserveOpacity>
          <div className="border-rule/40 relative aspect-[3/4] w-48 overflow-hidden rounded-[2px] border md:w-64">
            <Image
              src={site.image}
              alt={site.name}
              fill
              sizes="(min-width: 768px) 256px, 192px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
