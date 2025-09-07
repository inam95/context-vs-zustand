import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set, get) => ({
        theme: "light",
        setTheme: (theme) => {
          const root = document.documentElement;
          root.classList.remove("light", "dark");
          root.classList.add(theme);

          set({ theme }, false, "setTheme");
        },
        toggleTheme: () => {
          const currentTheme = get().theme;
          const newTheme = currentTheme === "light" ? "dark" : "light";

          const root = document.documentElement;
          root.classList.remove("light", "dark");
          root.classList.add(newTheme);

          set({ theme: newTheme }, false, "toggleTheme");
        },
      }),
      {
        name: "theme-storage",
        partialize: (state) => ({ theme: state.theme }),
      }
    ),
    {
      name: "theme-store",
    }
  )
);

if (typeof window !== "undefined") {
  const { theme } = useThemeStore.getState();
  const root = document.documentElement;
  root.classList.add(theme);
}
