"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let rafId = 0;

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const render = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(render);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        dot.style.width = "64px";
        dot.style.height = "64px";
        dot.style.backgroundColor = "var(--accent)";
        dot.style.opacity = "0.18";
      } else {
        dot.style.width = "32px";
        dot.style.height = "32px";
        dot.style.backgroundColor = "transparent";
        dot.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot hidden md:block"
      style={{ left: 0, top: 0 }}
      aria-hidden
    />
  );
}
