import type { Project } from "@/lib/data";

export function CodeCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-text-dim/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-dim/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-dim/30" />
        </div>
        <div className="ml-2 flex-1 truncate rounded-full bg-bg px-3 py-1 font-mono text-[11px] text-text-dim">
          {project.id} — README.md
        </div>
      </div>
      <div className="aspect-[16/10] w-full space-y-3 overflow-hidden bg-bg p-6 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        <p className="text-accent"># {project.name}</p>
        <p className="text-text-dim">{project.description}</p>
        {project.outcome && (
          <p>
            <span className="text-text-dim">outcome ·</span>{" "}
            <span className="text-text">{project.outcome}</span>
          </p>
        )}
        <p className="text-text-dim">
          stack ·{" "}
          {project.stack.map((s, i) => (
            <span key={s}>
              <span className="text-text">{s}</span>
              {i < project.stack.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p className="text-text-dim">
          status · <span className="text-accent">code available, no live deploy</span>
        </p>
      </div>
    </div>
  );
}
