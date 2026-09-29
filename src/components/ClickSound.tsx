"use client";

import { useEffect, useRef } from "react";

export function ClickSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const play = () => {
      if (!ctxRef.current) ctxRef.current = new AudioContext();
      const ctx = ctxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(620, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.12);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.22, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    };

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, [data-cursor-hover]");
      if (!target) return;
      play();
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      ctxRef.current?.close();
    };
  }, []);

  return null;
}
