"use client";

import { TasksList } from "@context-vs-zustand/shared-ui/components/tasks-list";
import { TasksDetailed } from "@context-vs-zustand/shared-ui/components/tasks-detailed";
import { TasksCondensed } from "@context-vs-zustand/shared-ui/components/tasks-condensed";
import { useTasksStore } from "../stores/tasks-store";

export function TasksBody() {
  console.log("Rendering TasksBody");

  const currentView = useTasksStore((state) => state.currentView);
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <div className="flex gap-1">
      {currentView === "list" && <TasksList tasks={tasks} />}
      {currentView === "detailed" && <TasksDetailed tasks={tasks} />}
      {currentView === "condensed" && <TasksCondensed tasks={tasks} />}
    </div>
  );
}
