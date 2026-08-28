import Link from "next/link";
import { site } from "@/data/site";
import { Section } from "@/components/layout/Section";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2";

export default function NotFound() {
  return (
    <main>
      <Section reveal={false}>
        <p className="text-muted font-mono text-sm">404</p>
        <h1 className="font-display text-chalk mt-4 max-w-2xl text-2xl md:text-3xl">
          {site.notFound.title}
        </h1>
        <p className="text-muted mt-6 max-w-xl font-sans text-lg">
          {site.notFound.description}
        </p>
        <Link
          href="/"
          className={`border-chalk text-chalk mt-12 inline-block rounded-[2px] border px-6 py-3 font-mono text-sm ${focusRing}`}
        >
          {site.notFound.cta}
        </Link>
      </Section>
    </main>
  );
}
