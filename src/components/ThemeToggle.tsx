"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydration guard: server can't know the persisted theme, so defer to client paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === "light";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
    >
      {mounted && (isLight ? <Moon size={16} /> : <Sun size={16} />)}
    </button>
  );
}
