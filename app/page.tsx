import { Section } from "@/components/layout/Section";

export default function Home() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-muted font-mono text-sm">01 / foundation</p>
          <h1 className="font-display text-chalk mt-4 text-3xl">
            Ziad Mohamed Shawky
          </h1>
          <p className="text-muted mt-4 max-w-md text-base">
            Data scientist / ML engineer. This section confirms fonts, color
            tokens, and vertical rhythm before content and layout land.
          </p>
        </div>
      </Section>
    </main>
  );
}
