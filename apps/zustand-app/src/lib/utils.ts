import { v7 } from "uuid";
import { Task } from "../stores/tasks-store";

export const tasks: Task[] = [
  {
    id: v7(),
    title: "Refactor components to use React Hooks",
    description:
      "Update class components to functional components using hooks like useState and useEffect.",
    completed: false,
    user: "Adam",
    isDeleted: false,
  },
  {
    id: v7(),
    title: "Implement Context API for theme management",
    description:
      "Use React Context to manage and provide theme state across the app.",
    completed: false,
    user: "Adam",
    isDeleted: false,
  },
  {
    id: v7(),
    title: "Optimize React rendering performance",
    description:
      "Use React.memo and useCallback to prevent unnecessary re-renders.",
    completed: true,
    user: "Mark",
    isDeleted: false,
  },
  {
    id: v7(),
    title: "Migrate to React 19",
    description:
      "Upgrade the project to React 19 and enable concurrent features.",
    completed: false,
    user: "Mark",
    isDeleted: false,
  },
  {
    id: v7(),
    title: "Add unit tests for React components",
    description:
      "Write tests for all major components using React Testing Library.",
    completed: false,
    user: "Adam",
    isDeleted: false,
  },
];
