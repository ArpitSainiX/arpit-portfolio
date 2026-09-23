"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/lib/data";
import { TechFrame } from "@/components/TechFrame";
import { LiveStatus } from "@/components/LiveStatus";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          className="order-2 lg:order-1"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-6 flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-dim"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {profile.role} · Available for freelance &amp; full-time
          </motion.p>

          <h1 className="font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            <motion.span
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="block text-text"
            >
              {profile.firstName}
            </motion.span>
            <motion.span
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="block italic text-accent"
            >
              {profile.lastName}
            </motion.span>
          </h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg"
          >
            {profile.subTagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              data-cursor-hover
              className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-transform hover:-translate-y-0.5"
            >
              See my work
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
            >
              Resume
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex items-center gap-5 text-text-dim"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-cursor-hover
              className="transition-colors hover:text-accent"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-cursor-hover
              className="transition-colors hover:text-accent"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              data-cursor-hover
              className="transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: photoY }}
          className="relative order-1 mx-auto mb-24 w-full max-w-sm sm:mb-16 lg:order-2"
        >
          <TechFrame>
            <div className="relative aspect-[4/5] w-full bg-surface">
              <Image
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 320px"
                className="object-cover grayscale-[15%]"
              />
            </div>
          </TechFrame>

          <div className="absolute -bottom-10 left-1/2 w-[110%] -translate-x-1/2 sm:-bottom-12 sm:left-auto sm:right-[-2.5rem] sm:w-full sm:translate-x-0">
            <LiveStatus />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mx-auto mt-20 hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-dim sm:flex"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
