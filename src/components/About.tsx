"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { principles, profile } from "@/lib/data";
import { TechFrame } from "@/components/TechFrame";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <TechFrame>
            <div className="relative aspect-[4/5] w-full max-w-[280px] bg-surface">
              <Image
                src={profile.avatar}
                alt={`${profile.name} at work`}
                fill
                sizes="280px"
                className="object-cover object-top grayscale-[35%]"
              />
            </div>
          </TechFrame>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-text-dim">
            {profile.location} · rated 1300 on chess.com
          </p>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 font-mono text-xs uppercase tracking-widest text-accent"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl"
          >
            Most portfolios show the demo. I care about{" "}
            <span className="italic text-accent">what happens after.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-7 space-y-4 text-text-dim"
          >
            <p>
              The responsive breakpoint nobody tested, the state a real user hits that the
              happy path never covers — that&rsquo;s where the actual work is, and where I
              spend most of mine.
            </p>
            <p>
              I&rsquo;m a frontend developer working across React, Next.js, TypeScript and
              Tailwind CSS — and, in parallel, an AI Model Response Evaluator scoring and
              refining how large language models communicate. Freelance since 2024:
              responsive sites, conversion-focused landing pages, and 10+ edited videos for
              clients who needed both design and delivery.
            </p>
          </motion.div>

          <div className="mt-14 divide-y divide-border border-t border-border">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[1fr_1.4fr] sm:gap-8"
              >
                <h3 className="font-display text-xl sm:text-2xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-text-dim sm:text-[15px]">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
