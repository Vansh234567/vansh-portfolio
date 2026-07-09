"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, BarChart3 } from "lucide-react";
import { projects } from "../data/projects";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Model research",
    text: "Tree-based models and LSTM architectures for structured time-series experiments.",
  },
  {
    icon: BarChart3,
    title: "Evaluation",
    text: "Validation and backtesting designed around leakage control and realistic interpretation.",
  },
];

export default function Projects() {
  const stockProject = projects[0];
  const portfolio = projects[1];

  return (
    <section id="projects" className="section-wrap">
      <div className="page-shell section-grid">
        <p className="section-kicker">03 / Selected work</p>

        <div className="projects-stack">
          <motion.article
            className="project-feature"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="project-head">
              <div>
                <p className="eyebrow accent">Flagship research project</p>
                <h2>{stockProject.title}</h2>
              </div>
              {stockProject.github && (
                <a
                  href={stockProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-link"
                  aria-label="Open repository"
                >
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>

            <p className="project-problem">{stockProject.problem}</p>

            <div className="project-pillars project-pillars-two">
              {pillars.map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + i * 0.1 }}
                >
                  <Icon size={28} strokeWidth={1.7} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>

            <p className="project-description">{stockProject.description}</p>
            <div className="tags">
              {stockProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </motion.article>

          {portfolio && (
            <motion.article
              className="project-feature portfolio-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >
              <div className="project-head">
                <div>
                  <p className="eyebrow accent">Web project</p>
                  <h2>{portfolio.title}</h2>
                </div>
              </div>
              <p className="project-problem">{portfolio.problem}</p>
              <p className="project-description">{portfolio.description}</p>
              <div className="tags">
                {portfolio.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>
  );
}
