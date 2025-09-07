import { cn } from "@context-vs-zustand/shared-ui/lib/utils";
import { allViews, useTasksContext } from "../contexts/tasks-context";

export function TasksHeader() {
  console.log("Rendering TasksHeader");

  const { currentView, setCurrentView } = useTasksContext();

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
