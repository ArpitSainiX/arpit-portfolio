import type { ReactNode } from "react";

const corner =
  "absolute h-5 w-5 border-accent/70 sm:h-6 sm:w-6";

export function TechFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className={`${corner} -left-2 -top-2 border-l-2 border-t-2`} />
      <div className={`${corner} -right-2 -top-2 border-r-2 border-t-2`} />
      <div className={`${corner} -bottom-2 -left-2 border-b-2 border-l-2`} />
      <div className={`${corner} -bottom-2 -right-2 border-b-2 border-r-2`} />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-border">
        {children}
        <div
          className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/25 via-accent/5 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
}
