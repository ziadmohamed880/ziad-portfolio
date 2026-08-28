"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { m, useReducedMotion } from "motion/react";
import type { Project } from "@/types";
import { TechTag } from "@/components/ui/TechTag";
import { GithubIcon } from "@/components/ui/icons";
import { MetricBar } from "@/components/ui/MetricBar";
import { duration, ease } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
}

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2";

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.article
      className="border-rule/40 bg-surface rounded-[2px] border"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: duration.fast, ease }}
    >
      <div className="relative aspect-video">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.tagline}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-chalk text-lg">{project.title}</h3>
          <span className="text-muted font-mono text-xs">{project.year}</span>
        </div>

        <p className="text-muted mt-2 font-sans text-sm">{project.tagline}</p>

        {project.role && (
          <p className="text-muted mt-4 font-mono text-xs">{project.role}</p>
        )}

        <p className="text-chalk mt-4 font-sans text-sm">
          {project.description}
        </p>

        {project.metrics && (
          <div className="border-rule/40 mt-6 flex flex-wrap gap-8 border-t pt-6">
            {project.metrics.map((metric) => (
              <MetricBar
                key={metric.label}
                label={metric.label}
                from={metric.from}
                to={metric.to}
                className="w-full md:w-auto md:flex-1"
              />
            ))}
          </div>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <TechTag label={tech} />
            </li>
          ))}
        </ul>

        {(project.links.demo || project.links.code) && (
          <div className="border-rule/40 mt-6 flex flex-wrap gap-6 border-t pt-6">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-signal flex items-center gap-2 py-4 font-mono text-xs ${focusRing}`}
              >
                <ExternalLink size={14} />
                Live demo
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted flex items-center gap-2 py-4 font-mono text-xs ${focusRing}`}
              >
                <GithubIcon size={14} />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </m.article>
  );
}
