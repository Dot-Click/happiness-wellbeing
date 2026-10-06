"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}>({
  theme: "light",
  setTheme: () => {},
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [hydrated, setHydrated] = useState(false);

  // Load persisted theme on mount — before any sync-back useEffect runs
  useEffect(() => {
    let stored: Theme | null = null;
    try {
      const v = localStorage.getItem("theme");
      if (v === "light" || v === "dark") stored = v;
    } catch {}
    // Defer the state update so the "hydrated" flag flips first, preventing
    // the sync-back effect from racing with us and overwriting storage.
    queueMicrotask(() => {
      if (stored) setThemeState(stored);
      setHydrated(true);
    });
  }, []);

  // Reflect theme on <html> and persist — skip until after we've read storage
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme, hydrated]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggle = useCallback(
    () => setThemeState((t) => (t === "light" ? "dark" : "light")),
    [],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
