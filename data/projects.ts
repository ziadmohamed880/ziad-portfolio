// data/projects.ts

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "retail-sales-dashboard",
    title: "Retail Sales Dashboard",
    tagline:
      "Power BI report modelling 5,000 retail transactions across revenue, margin, and customer segments",
    description:
      "A star-schema Power BI model over 5,000 transactions, with a DAX measure layer covering revenue, margin, RFM customer segmentation, and time intelligence. Four report pages — overview, customers, and products — with drill-through and a custom theme built around a single reserved accent colour.",
    role: "Solo project",
    tech: ["Power BI", "DAX", "Power Query", "Star Schema"],
    image: "/images/projects/retail-sales-dashboard.webp",
    links: {
      demo: "https://app.powerbi.com/view?r=eyJrIjoiMGFjNTZhMWItOWQyOS00ZmI0LWI2MjMtZDNhMjYyMjYwMGIzIiwidCI6ImVhZjYyNGM4LWEwYzQtNDE5NS04N2QyLTQ0M2U1ZDc1MTZjZCIsImMiOjh9&pageName=17b2241b2961e7dcb77e",
    },
    year: "2026",
    featured: false,
  },
  {
    slug: "hirelens",
    title: "HireLens",
    tagline:
      "Career intelligence platform that matches resumes to job descriptions",
    description:
      "A hybrid scoring engine that reads a resume and a job posting and scores how well they match. Combines SBERT embeddings with TF-IDF at a 0.3/0.7 weighting, with OCR for scanned PDFs and an LLM layer for feedback. I owned the NLP and skill-extraction pipeline, where a fix to the word-boundary logic in extraction moved precision and F1 sharply.",
    role: "Team leader, NLP engineer, 5-person team",
    metrics: [
      { label: "Precision", from: 0.71, to: 0.89 },
      { label: "F1", from: 0.73, to: 0.86 },
    ],
    tech: [
      "Python",
      "spaCy",
      "SBERT",
      "TF-IDF",
      "FastAPI",
      "Tesseract OCR",
      "SQLite",
      "Docker",
    ],
    image: "/images/projects/hirelens.webp",
    links: {
      demo: "https://huggingface.co/spaces/ziadmohamedd/hirelens",
    },
    year: "2026",
    featured: true,
  },
  {
    slug: "bbc-news-classification",
    title: "BBC news classification",
    tagline: "Fine-tuned DistilBERT sorting news articles into five categories",
    description:
      "Fine-tuned DistilBERT on the BBC News dataset to 97% accuracy, a 4.5-point macro F1 improvement over classical baselines. The pipeline runs end-to-end, from preprocessing through to a deployed app. Streamlit serves predictions in under 800ms.",
    tech: ["Python", "PyTorch", "Hugging Face", "DistilBERT", "Streamlit"],
    image: "/images/projects/bbc-news.webp",
    links: {
      code: "https://github.com/ziadmohamed880/BBC-News-Article-Classifier",
    },
    year: "2025",
    featured: false,
  },
  {
    slug: "land-type-classification",
    title: "Land type classification",
    tagline:
      "Deep network classifying six land types from Sentinel-2 satellite imagery",
    description:
      "10,000+ Sentinel-2 satellite tiles trained a convolutional model to classify land cover into six types. Normalization and noise reduction brought accuracy to 98%. Built with a team and deployed on Hugging Face Spaces.",
    role: "Team project",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Hugging Face Spaces"],
    image: "/images/projects/land-type.webp",
    links: {
      code: "https://github.com/Ranna3laa/Land-Type-Classification",
    },
    year: "2025",
    featured: false,
  },
  {
    slug: "student-risk-prediction",
    title: "Student academic risk",
    tagline:
      "Classifying students at risk of dropping out from the UCI dataset",
    description:
      "Deployed as a FastAPI endpoint behind a Streamlit interface, this pipeline predicts academic risk level end to end — feature engineering through hyperparameter tuning. A tuned random forest reached 84% accuracy.",
    tech: ["Python", "scikit-learn", "Random Forest", "FastAPI", "Streamlit"],
    image: "/images/projects/student-risk.webp",
    links: {
      code: "https://github.com/ziadmohamed880/Student-Academic-Risk-Prediction",
    },
    year: "2025",
    featured: false,
  },
  {
    slug: "premier-league-analysis",
    title: "Premier league analysis",
    tagline:
      "Ten seasons of match data queried and visualised for tactical trends",
    description:
      "Analysis of more than 3,000 Premier League matches from 2013 to 2023, looking at team performance and tactical efficiency over time. Data queried through MySQL and SQLAlchemy, with xG trends and win-loss ratios visualised in Seaborn and Matplotlib.",
    tech: ["Python", "MySQL", "SQLAlchemy", "Pandas", "Seaborn"],
    image: "/images/projects/premier-league.webp",
    links: {
      code: "https://github.com/ziadmohamed880/Premier-League-analysis",
    },
    year: "2024",
    featured: false,
  },
];
