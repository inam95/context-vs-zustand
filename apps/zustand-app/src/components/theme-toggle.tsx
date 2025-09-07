"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@context-vs-zustand/shared-ui/components/button";
import { useThemeStore } from "../stores/theme-store";

interface ThemeToggleProps {
  showLabel?: boolean;
}

export function ThemeToggle({ showLabel = false }: ThemeToggleProps) {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  console.log("Zustand ThemeToggle rendered - Current theme:", theme);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="flex items-center gap-2"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4" />
          {showLabel && "Light"}
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          {showLabel && "Dark"}
        </>
      )}
    </Button>
  );
}
