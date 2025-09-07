"use client";

import { cn } from "@context-vs-zustand/shared-ui/lib/utils";
import { useTasksStore, allViews } from "../stores/tasks-store";

export function TasksHeader() {
  console.log("Rendering TasksHeader");

  const currentView = useTasksStore((state) => state.currentView);
  const setCurrentView = useTasksStore((state) => state.setCurrentView);

  return (
    <div className="flex gap-1">
      {allViews.map((view) => (
        <button
          key={view}
          onClick={() => setCurrentView(view)}
          className={cn("p-1 bg-gray-200 rounded-md", {
            "bg-gray-400": view === currentView,
          })}
          disabled={view === currentView}
        >
          {view}
        </button>
      ))}
    </div>
  );
}
