import Image from "next/image";

export function BrowserFrame({ url, screenshot, alt }: { url: string; screenshot: string; alt: string }) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-text-dim/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-dim/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-dim/30" />
        </div>
        <div className="ml-2 flex-1 truncate rounded-full bg-bg px-3 py-1 font-mono text-[11px] text-text-dim">
          {host}
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full bg-bg">
        <Image src={screenshot} alt={alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-top" />
      </div>
    </div>
  );
}
