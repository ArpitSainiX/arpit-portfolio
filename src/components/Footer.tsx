import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p className="font-mono text-xs text-text-dim">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-text-dim">
          Designed &amp; built by {profile.name}
        </p>
      </div>
    </footer>
  );
}
