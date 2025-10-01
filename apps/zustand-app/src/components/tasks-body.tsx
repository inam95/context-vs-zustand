"use client";

import { TasksList } from "@context-vs-zustand/shared-ui/components/tasks-list";
import { TasksDetailed } from "@context-vs-zustand/shared-ui/components/tasks-detailed";
import { TasksCondensed } from "@context-vs-zustand/shared-ui/components/tasks-condensed";
import { useTasksStore } from "../stores/tasks-store";
import { useEffect, useState } from "react";
import { tasks } from "../lib/utils";

export function TasksBody() {
  console.log("Rendering TasksBody");

  const currentView = useTasksStore((state) => state.currentView);
  const tasks = useTasksStore((state) => state.tasks);
  const deleteTask = useTasksStore((state) => state.deleteTask);

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  return (
    <div className="flex gap-1">
      {currentView === "list" && (
        <TasksList tasks={tasks} onDelete={handleDeleteTask} />
      )}
      {currentView === "detailed" && <TasksDetailed tasks={tasks} />}
      {currentView === "condensed" && <TasksCondensed tasks={tasks} />}
    </div>
  );
}

function useGetTask(url: string) {
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await (await fetch(url)).json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return tasks;
}
