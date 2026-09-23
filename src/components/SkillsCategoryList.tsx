"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export function SkillsCategoryList() {
  return (
    <div className="divide-y divide-border border-t border-border">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="py-6"
        >
          <div className="mb-3 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-display text-2xl">
              <span className="text-accent">•</span>
              {group.label}
            </h3>
            <span className="font-mono text-xs text-text-dim">{group.skills.length}</span>
          </div>
          <ul className="mb-3 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-text-dim"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p className="font-mono text-[11px] text-text-dim">
            shipped in:{" "}
            {group.shippedIn.map((item, idx) => (
              <span key={item}>
                <span className="text-text">{item}</span>
                {idx < group.shippedIn.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
