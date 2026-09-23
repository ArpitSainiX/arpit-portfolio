"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { skillNodes } from "@/lib/data";

const icons: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,
  python: SiPython,
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
};

const positions: Record<string, { x: number; y: number }> = {
  react: { x: 30, y: 16 },
  nextjs: { x: 64, y: 12 },
  typescript: { x: 86, y: 34 },
  javascript: { x: 13, y: 40 },
  tailwind: { x: 47, y: 46 },
  html5: { x: 8, y: 68 },
  css3: { x: 26, y: 86 },
  python: { x: 72, y: 62 },
  git: { x: 92, y: 70 },
  github: { x: 56, y: 84 },
  vercel: { x: 38, y: 66 },
};

const depthMap = { lg: 26, md: 18, sm: 11 } as const;

const edges: [string, string][] = [
  ["react", "nextjs"],
  ["react", "tailwind"],
  ["react", "javascript"],
  ["nextjs", "typescript"],
  ["nextjs", "vercel"],
  ["tailwind", "css3"],
  ["tailwind", "html5"],
  ["tailwind", "vercel"],
  ["javascript", "html5"],
  ["typescript", "python"],
  ["python", "git"],
  ["python", "github"],
  ["github", "vercel"],
];

const sizeMap = {
  lg: "h-20 w-20 text-3xl sm:h-24 sm:w-24 sm:text-4xl",
  md: "h-16 w-16 text-2xl sm:h-[4.5rem] sm:w-[4.5rem] sm:text-3xl",
  sm: "h-12 w-12 text-lg sm:h-14 sm:w-14 sm:text-xl",
} as const;

function SkillNode({
  node,
  index,
  springX,
  springY,
}: {
  node: (typeof skillNodes)[number];
  index: number;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}) {
  const Icon = icons[node.id];
  const pos = positions[node.id];
  const depth = depthMap[node.size];

  const parallaxX = useTransform(springX, [-1, 1], [-depth, depth]);
  const parallaxY = useTransform(springY, [-1, 1], [-depth, depth]);

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        style={{ x: parallaxX, y: parallaxY }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
          title={node.label}
          data-cursor-hover
          className={`flex items-center justify-center rounded-full border border-border bg-surface text-text-dim shadow-lg transition-colors hover:border-accent hover:text-accent ${sizeMap[node.size]}`}
        >
          <Icon />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function SkillsNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 90, damping: 18, mass: 0.4 });
  const springY = useSpring(rawY, { stiffness: 90, damping: 18, mass: 0.4 });
  const rotateX = useTransform(springY, [-1, 1], [7, -7]);
  const rotateY = useTransform(springX, [-1, 1], [-7, 7]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    rawX.set(relX * 2 - 1);
    rawY.set(relY * 2 - 1);
  };

  const handlePointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative mx-auto aspect-square w-full max-w-md"
      style={{ perspective: 900 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden
          preserveAspectRatio="none"
        >
          {edges.map(([a, b]) => {
            const pa = positions[a];
            const pb = positions[b];
            return (
              <line
                key={`${a}-${b}`}
                x1={pa.x}
                y1={pa.y}
                x2={pb.x}
                y2={pb.y}
                stroke="var(--border)"
                strokeWidth={0.4}
              />
            );
          })}
        </svg>

        {skillNodes.map((node, i) => (
          <SkillNode key={node.id} node={node} index={i} springX={springX} springY={springY} />
        ))}
      </motion.div>
    </div>
  );
}
