import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section id="projects">
      <p className="text-muted font-mono text-sm">01 / projects</p>
      <h2 className="font-display text-chalk mt-4 text-2xl">Projects</h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <div key={project.slug} className="md:col-span-2">
            <ProjectCard project={project} />
          </div>
        ))}
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
