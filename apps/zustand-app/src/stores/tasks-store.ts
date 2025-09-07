import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { tasks as dummyTasks } from "../lib/utils";

export type Task = {
  id: any;
  title: string;
  description: string;
  completed: boolean;
  user: string;
};

export type TasksView = "list" | "detailed" | "condensed";

export type TasksState = {
  tasks: Task[];
  setTasks: (tasks: Task[] | ((tasks: Task[]) => Task[])) => void;
  currentView: TasksView;
  setCurrentView: (tasksView: TasksView) => void;
};

export const useTasksStore = create<TasksState>()(
  devtools(
    persist(
      (set) => ({
        tasks: dummyTasks,
        setTasks: (arg: Task[] | ((tasks: Task[]) => Task[])) => {
          set((state) => {
            return {
              tasks: typeof arg === "function" ? arg(state.tasks) : arg,
            };
          });
        },
        currentView: "list",
        setCurrentView: (newView: TasksView) => set({ currentView: newView }),
      }),
      {
        name: "tasks-storage",
      }
    ),
    {
      name: "tasks-store",
    }
  )
);

export const allViews: TasksView[] = ["list", "detailed", "condensed"];
