import React from "react";
import { v7 } from "uuid";
import type { Task } from "../contexts/tasks-context";

export const createContext = <T extends {}>() => {
  const Context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const ctx = React.useContext(Context);
    if (!ctx) {
      throw new Error("useContext must be used within a ContextProvider");
    }
    return ctx;
  };

  return [useContext, Context] as const;
};

export const tasks: Task[] = [
  {
    id: v7(),
    title: "Refactor components to use React Hooks",
    description:
      "Update class components to functional components using hooks like useState and useEffect.",
    completed: false,
    user: "Adam",
  },
  {
    id: v7(),
    title: "Implement Context API for theme management",
    description:
      "Use React Context to manage and provide theme state across the app.",
    completed: false,
    user: "Adam",
  },
  {
    id: v7(),
    title: "Optimize React rendering performance",
    description:
      "Use React.memo and useCallback to prevent unnecessary re-renders.",
    completed: true,
    user: "Mark",
  },
  {
    id: v7(),
    title: "Migrate to React 19",
    description:
      "Upgrade the project to React 19 and enable concurrent features.",
    completed: false,
    user: "Mark",
  },
  {
    id: v7(),
    title: "Add unit tests for React components",
    description:
      "Write tests for all major components using React Testing Library.",
    completed: false,
    user: "Adam",
  },
];
