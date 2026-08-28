// data/skills.ts

import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "SQL", "R", "Java"],
  },
  {
    label: "Machine learning",
    items: [
      "scikit-learn",
      "XGBoost",
      "Random forest",
      "SVM",
      "K-means",
      "Decision trees",
      "Feature engineering",
      "Data cleaning",
      "Model evaluation",
      "Hyperparameter tuning",
    ],
  },
  {
    label: "Deep learning & NLP",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Transformers",
      "spaCy",
      "SBERT",
      "CNNs",
      "RNNs",
      "Transfer learning",
    ],
  },
  {
    label: "Data & visualisation",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel"],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    label: "Big data & streaming",
    items: [
      "Apache Spark",
      "Hadoop",
      "Apache Kafka",
      "Stream processing",
      "Distributed systems",
    ],
  },
  {
    label: "Deployment",
    items: [
      "FastAPI",
      "Flask",
      "Streamlit",
      "Docker",
      "Hugging Face Spaces",
      "AWS",
    ],
  },
  {
    label: "Tools",
    items: ["Git/GitHub", "Google Colab", "Jupyter"],
  },
];
