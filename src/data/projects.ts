export interface Project {
  title: string;
  problem: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Stock Prediction System",
    problem:
      "Exploring whether time-series and machine-learning methods can surface useful signals in Indian energy and oil & gas sector equities.",
    description:
      "A quantitative research project focused on stock prediction using time-series methods and machine-learning models. Experimented with tree-based models and LSTM architectures, with structured evaluation and backtesting.",
    tags: ["Time Series", "LSTM", "Tree-Based Models", "Backtesting"],
  },
  {
    title: "Personal Portfolio",
    problem:
      "Designing and building a responsive personal website to present my work, experience and interests clearly.",
    description:
      "Built a responsive portfolio using Next.js, TypeScript, Tailwind CSS and Framer Motion, with reusable components, responsive layouts and motion interactions across desktop and mobile.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
