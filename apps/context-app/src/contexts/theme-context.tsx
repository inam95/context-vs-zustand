"use client";

import { useEffect, useState } from "react";
import { createContext } from "../lib/utils";

type Theme = "light" | "dark";

type ThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const [useContext, Context] = createContext<ThemeContextState>();

export const useThemeContext = useContext;

export const ThemeProvider = ({
  children,
  defaultTheme = "light",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Context.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </Context.Provider>
  );
};
