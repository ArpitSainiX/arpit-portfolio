"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-xs uppercase tracking-widest text-accent"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mb-14 font-display text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Where the work happened
        </motion.h2>

        <div className="relative border-l border-border pl-8 sm:pl-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-14 last:mb-0"
            >
              <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[3.05rem]" />
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-xl font-bold">{item.role}</h3>
                <span className="font-mono text-xs text-text-dim">{item.period}</span>
              </div>
              <p className="mb-4 text-sm text-text-dim">
                {item.org} · {item.location}
              </p>
              <ul className="space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-text-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
