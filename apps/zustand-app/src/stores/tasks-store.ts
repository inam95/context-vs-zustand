import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { tasks as dummyTasks, tasks } from "../lib/utils";

export type Task = {
  id: any;
  title: string;
  description: string;
  completed: boolean;
  user: string;
  isDeleted: boolean;
};

export type TasksView = "list" | "detailed" | "condensed";

export type TasksState = {
  tasks: Task[];
  setTasks: (tasks: Task[] | ((tasks: Task[]) => Task[])) => void;
  currentView: TasksView;
  setCurrentView: (tasksView: TasksView) => void;
  deleteTask: (id: string) => void;
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
        deleteTask: (id: string) => {
          set((state) => {
            return {
              tasks: state.tasks.map((task) => {
                if (task.id === id) {
                  return {
                    ...task,
                    isDeleted: true,
                  };
                }
                return task;
              }),
            };
          });
          setTimeout(() => {
            set((state) => {
              return {
                tasks: state.tasks.filter((task) => task.id !== id),
              };
            });
          }, 5000);
        },
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
