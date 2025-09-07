"use client";

import { ThemeToggle } from "../components/theme-toggle";
import { ThemeDemo } from "../components/theme-demo";
import DemoCard from "@context-vs-zustand/shared-ui/components/demo-card";

export default function Page() {
  console.log("HomePage rendered"); // For debugging re-renders
  return (
    <main className="container mx-auto p-6 space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Context API Demo</h1>
        <ThemeToggle showLabel />
      </header>

      <ThemeDemo />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DemoCard title="Card 1" />
        <DemoCard title="Card 2" />
        <DemoCard title="Card 3" />
      </div>
    </main>
  );
}
