"use client";

import { AddNewTask } from "@/src/components/add-new-task";
import { TasksCount } from "@/src/components/tasks-count";
import { TasksBody } from "@/src/components/tasks-body";
import { TasksHeader } from "@/src/components/tasks-header";
import { TasksProvider } from "@/src/contexts/tasks-context";

export default function TasksPage() {
  return (
    <TasksProvider>
      <main className="container mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Tasks: Context API</h1>
        <AddNewTask />
        <TasksCount />
        <TasksHeader />
        <TasksBody />
      </main>
    </TasksProvider>
  );
}
