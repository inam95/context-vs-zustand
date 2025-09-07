"use client";

import React from "react";
import { useThemeStore } from "../stores/theme-store";

export function ThemeDemo() {
  const theme = useThemeStore((state) => state.theme);

  console.log("Zustand ThemeDemo rendered - Current theme:", theme);

  return (
    <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
      <h3 className="font-semibold text-lg mb-2">Current Theme (Zustand)</h3>
      <p className="text-muted-foreground">
        Active theme: <span className="font-mono font-semibold">{theme}</span>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 bg-primary text-primary-foreground rounded">
          Primary Color
        </div>
        <div className="p-3 bg-secondary text-secondary-foreground rounded">
          Secondary Color
        </div>
      </div>
    </div>
  );
}
