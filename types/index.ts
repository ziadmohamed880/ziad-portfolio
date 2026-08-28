// types/index.ts

export interface Metric {
  label: string;
  from: number;
  to: number;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role?: string;
  metrics?: Metric[];
  tech: string[];
  image: string;
  links: {
    demo?: string;
    code?: string;
  };
  year: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  image: string;
  headline: string;
  intro: string;
  about: string;
  links: {
    github: string;
    linkedin: string;
    cv: string;
  };
  meta: {
    title: string;
    description: string;
    url: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
}
