// data/site.ts

import type { SiteConfig } from "@/types";
import { getSiteUrl } from "@/lib/site-url";

export const site: SiteConfig = {
  name: "Ziad Mohamed Shawky",
  role: "Data scientist",
  location: "Alexandria, Egypt — open to remote",
  email: "ziadmohamed8804@gmail.com",

  headline: "I build machine learning systems that ship.",

  intro:
    "Data science graduate working in NLP and applied machine learning. Four internships, five deployed projects, and a habit of chasing down why a number moved.",

  about:
    "I finished a B.Sc. in Data Science at Alexandria University in 2026. Most of my work sits between modelling and deployment — building the pipeline, finding where it breaks, and getting it in front of people through FastAPI, Streamlit, or Hugging Face Spaces. The work I care most about is the unglamorous part: the extraction bug that quietly costs you eighteen points of precision until someone goes looking for it.",

  links: {
    github: "https://github.com/ziadmohamed880",
    linkedin: "https://linkedin.com/in/ziad-mohamed-a0131130a",
    cv: "/Ziad_Shawky_CV.pdf",
  },

  meta: {
    title: "Ziad Mohamed Shawky — Data scientist",
    description:
      "Data scientist working in NLP and applied machine learning. Projects in resume matching, text classification, and satellite imagery.",
    url: getSiteUrl(),
  },

  notFound: {
    title: "Page not found.",
    description: "The page you're looking for doesn't exist or moved.",
    cta: "Back home",
  },
};
