"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "03+", label: "Projects Built" },
  { value: "₹6K+", label: "Business Revenue" },
  { value: "2027", label: "Graduation Year" },
];

export default function Stats() {
  return (
    <section className="px-6 md:px-8 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.28em] mb-4">
              Snapshot
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-paper">
              By the Numbers
            </h2>
          </div>

          <p className="text-muted-dim max-w-md leading-relaxed text-sm md:text-base">
            A quick snapshot of projects, entrepreneurship and academic
            progress so far.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 border-y border-line">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="py-8 sm:py-9 sm:px-8 first:sm:pl-0 border-b sm:border-b-0 sm:border-r last:border-b-0 last:sm:border-r-0 border-line"
            >
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-paper">
                {stat.value}
              </p>
              <p className="text-muted-dim mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
