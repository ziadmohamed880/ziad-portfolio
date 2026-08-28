import { experience } from "@/data/experience";
import { Section } from "@/components/layout/Section";

export function Experience() {
  return (
    <Section id="experience">
      <p className="text-muted font-mono text-sm">02 / experience</p>
      <h2 className="font-display text-chalk mt-4 text-2xl">Experience</h2>

      <ol className="mt-12 flex flex-col gap-12">
        {experience.map((entry) => (
          <li
            key={entry.company}
            className="border-rule/40 border-t pt-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-display text-chalk text-lg">{entry.role}</h3>
              <span className="text-muted font-mono text-xs">
                {entry.period}
              </span>
            </div>

            <p className="text-muted mt-1 font-mono text-xs">
              {entry.company} — {entry.location}
            </p>

            <ul className="mt-4 flex flex-col gap-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="text-muted font-sans text-sm">
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
