"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/lib/data";
import { BrowserFrame } from "@/components/BrowserFrame";
import { CodeCard } from "@/components/CodeCard";

export function ProjectShowcase() {
  const total = projects.length;

  return (
    <section id="work" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto mb-16 max-w-6xl px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-xs uppercase tracking-widest text-accent"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl tracking-tight sm:text-4xl"
        >
          Things I&rsquo;ve shipped
        </motion.h2>
      </div>

      <div className="mx-auto max-w-6xl space-y-24 px-6 sm:px-8 sm:space-y-32">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-text-dim">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} ·{" "}
                <span className="text-accent">{project.category}</span>
              </p>
              <h3 className="font-display text-3xl tracking-tight sm:text-4xl">
                {project.name}
              </h3>
              <p className="mt-4 text-text-dim">{project.description}</p>

              {project.outcome && (
                <div className="mt-5 border-l-2 border-accent pl-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-text-dim">
                    Outcome
                  </p>
                  <p className="mt-1 font-medium text-text">{project.outcome}</p>
                </div>
              )}

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] text-text-dim"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bg transition-transform hover:-translate-y-0.5"
                  >
                    Live
                    <ArrowUpRight size={14} />
                  </a>
                )}
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
                >
                  <FaGithub size={14} />
                  Code
                </a>
              </div>
            </div>

            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              {project.screenshot && project.liveUrl ? (
                <BrowserFrame
                  url={project.liveUrl}
                  screenshot={project.screenshot}
                  alt={`${project.name} screenshot`}
                />
              ) : (
                <CodeCard project={project} />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
