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

        <div className="space-y-6 sm:space-y-7">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 sm:gap-6"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-lg font-bold shadow-lg sm:h-12 sm:w-12 sm:text-xl ${item.badge.className}`}
                aria-hidden
              >
                {item.badge.label}
              </div>

              <article className="group relative flex-1 overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-7">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--accent-soft)" }}
                  aria-hidden
                />

                <div className="relative flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{item.role}</h3>
                  <span className="font-mono text-xs text-text-dim">{item.period}</span>
                </div>
                <p className="relative mb-5 mt-1 text-sm text-text-dim">
                  {item.org} · {item.location}
                </p>

                <ul className="relative mb-5 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-text-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="relative flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-bg-soft px-2.5 py-1 font-mono text-[11px] text-text-dim"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
