"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const THEMES = {
  blue: {
    id: "blue",
    swatch: "#0099FF",
    accentRgb: "0, 153, 255",
    accentDark: "#1D4ED8",
    bgTint: "#2f4cff",
    bgBrightness: 0.4,
    profileImage: "/Profile.jpg",
  },
  red: {
    id: "red",
    swatch: "#BE123C",
    accentRgb: "190, 18, 60",
    accentDark: "#9F1239",
    bgTint: "#9f1239",
    bgBrightness: 0.4,
    profileImage: "/Profile_red.jpg",
  },
  cyan: {
    id: "cyan",
    swatch: "#14B8A6",
    accentRgb: "20, 184, 166",
    accentDark: "#0F766E",
    bgTint: "#0f766e",
    bgBrightness: 0.4,
    profileImage: "/Profile_green.jpg",
  },
} as const;

export type ThemeId = keyof typeof THEMES;

type ThemeContextValue = {
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
  themes: typeof THEMES;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(id: ThemeId) {
  const theme = THEMES[id];
  const root = document.documentElement;
  root.style.setProperty("--accent", theme.swatch);
  root.style.setProperty("--accent-rgb", theme.accentRgb);
  root.style.setProperty("--accent-dark", theme.accentDark);
  root.style.setProperty("--bg-tint", theme.bgTint);
  root.style.setProperty("--bg-brightness", String(theme.bgBrightness));
  root.dataset.theme = id;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState<ThemeId>("blue");

  const setThemeId = useCallback((id: ThemeId) => {
    setThemeIdState(id);
    applyTheme(id);
  }, []);

  useEffect(() => {
    applyTheme(themeId);
  }, [themeId]);

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function accentColors(rgb: string) {
  return Array.from({ length: 10 }, (_, i) => `rgba(${rgb}, ${1 - i * 0.1})`);
}
