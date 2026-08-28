import { skills } from "@/data/skills";
import { Section } from "@/components/layout/Section";
import { TechTag } from "@/components/ui/TechTag";

export function Skills() {
  return (
    <Section id="skills">
      <p className="text-muted font-mono text-sm">03 / skills</p>
      <h2 className="font-display text-chalk mt-4 text-2xl">Skills</h2>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.label}>
            <h3 className="text-muted font-mono text-xs">{group.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <TechTag label={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
