"use client";

import { motion } from "framer-motion";
import { skillTicker } from "@/lib/data";
import { SkillsNetwork } from "@/components/SkillsNetwork";
import { SkillsCategoryList } from "@/components/SkillsCategoryList";

export function Skills() {
  const row = [...skillTicker, ...skillTicker];

  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="mb-16 overflow-hidden border-y border-border py-5">
        <div className="flex w-max gap-6 animate-marquee">
          {row.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-6 font-display text-xl italic text-text-dim sm:text-2xl"
            >
              {skill}
              <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-xs uppercase tracking-widest text-accent"
        >
          Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mb-14 font-display text-3xl tracking-tight sm:text-4xl"
        >
          What I actually build with
        </motion.h2>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <SkillsNetwork />
          <SkillsCategoryList />
        </div>
      </div>
    </section>
  );
}
