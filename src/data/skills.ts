export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Data & Analytics",
    items: ["Pandas", "NumPy", "Power BI"],
  },
  {
    category: "Programming",
    items: ["Python", "SQL"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "LSTM", "Tree-Based Models"],
  },
  {
    category: "Finance & Research",
    items: ["Financial Modeling", "Quantitative Analysis", "Equity Research"],
  },
  {
    category: "Web / Product",
    items: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
