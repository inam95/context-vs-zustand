"use client";

import { useTasksStore } from "../stores/tasks-store";

export function TasksCount() {
  console.log("Rendering TaskCount");

  const tasksCount = useTasksStore((state) => state.tasks.length);

  return (
    <div className="text-lg text-gray-600 font-medium">
      Total Tasks: {tasksCount}
    </div>
  );
}
