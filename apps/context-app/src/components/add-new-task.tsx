import { Button } from "@context-vs-zustand/shared-ui/components/button";
import { useTasksContext } from "../contexts/tasks-context";

export function AddNewTask() {
  console.log("Rendering AddNewTask");

  const { setTasks } = useTasksContext();

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
