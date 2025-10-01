import { AddNewTask } from "@/src/components/add-new-task";
import { TasksCount } from "@/src/components/tasks-count";
import { TasksHeader } from "@/src/components/tasks-header";
import { TasksBody } from "@/src/components/tasks-body";

export default function TasksPage() {
  console.log("Rendering TasksPage");
  return (
    <main className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Tasks: Zustand</h1>
      <AddNewTask />
      <TasksCount />
      <TasksHeader />
      <TasksBody />
    </main>
  );
}
