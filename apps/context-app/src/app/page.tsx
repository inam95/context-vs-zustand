"use client";

import { ThemeToggle } from "../components/theme-toggle";
import { ThemeDemo } from "../components/theme-demo";

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

function DemoCard({ title }: { title: string }) {
  console.log(`${title} rendered`); // For debugging re-renders

  return (
    <div className="p-4 border rounded-lg bg-card text-card-foreground">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2">
        This card will re-render every time the theme changes, even though it
        doesn't directly use theme data.
      </p>
    </div>
  );
}
