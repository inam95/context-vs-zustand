"use client";

import { useShallow } from "zustand/react/shallow";
import { Button } from "@context-vs-zustand/shared-ui/components/button";
import { useTasksStore } from "../stores/tasks-store";

export function AddNewTask() {
  console.log("Rendering AddNewTask");

  const [tasks, setTasks] = useTasksStore(
    useShallow((state) => [state.tasks, state.setTasks])
  );

  return (
    <div>
      <Button
        onClick={() =>
          setTasks((prevTasks) =>
            prevTasks.concat({
              id: prevTasks.length + 1,
              title: "New Task",
              user: "John Doe",
              completed: false,
              description: "New Task",
            })
          )
        }
      >
        Add New Task
      </Button>
    </div>
  );
}
