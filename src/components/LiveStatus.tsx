"use client";

import { useEffect, useState } from "react";
import { githubStats, profile } from "@/lib/data";

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function LiveStatus() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date(), githubStats.timeZone));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const rows = [
    { label: "boot", value: "ok" },
    {
      label: "github",
      value: `${githubStats.publicRepos} public repos · ${githubStats.followers} followers`,
    },
    { label: "last push", value: `${githubStats.lastPushRepo} · ${githubStats.lastPushLabel}` },
    { label: "now building", value: githubStats.nowBuilding, accent: true },
    { label: "status", value: githubStats.status },
    { label: "local time", value: `${githubStats.timeZoneLabel} · ${time ?? "--:--:--"}` },
  ];

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-bg/90 p-4 font-mono text-[12px] shadow-2xl backdrop-blur-md sm:text-[13px]">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent/60" />
          <span className="h-2 w-2 rounded-full bg-text-dim/40" />
          <span className="h-2 w-2 rounded-full bg-text-dim/40" />
        </div>
        <span className="flex items-center gap-1.5 text-text-dim">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          live status
        </span>
      </div>
      <ul className="space-y-1.5">
        {rows.map((row) => (
          <li key={row.label} className="flex items-baseline gap-2 text-text-dim">
            <span className="text-accent">▸</span>
            <span>{row.label} ·</span>
            <span className={row.accent ? "text-accent" : "text-text"}>{row.value}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 border-t border-border pt-2.5 text-text-dim">
        {profile.name.toLowerCase().replace(" ", ".")} — v1.0
      </p>
    </div>
  );
}
