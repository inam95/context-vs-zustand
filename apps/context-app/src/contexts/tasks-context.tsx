"use client";

import { useState } from "react";
import { createContext } from "../lib/utils";
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

const [useContext, Context] = createContext<TasksState>();

export const useTasksContext = useContext;

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);
  const [currentView, setCurrentView] = useState<TasksView>("list");

  const value: TasksState = {
    tasks,
    setTasks,
    currentView,
    setCurrentView,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const allViews: TasksView[] = ["list", "detailed", "condensed"];
