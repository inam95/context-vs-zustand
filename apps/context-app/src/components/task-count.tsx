import { useTasksContext } from "../contexts/tasks-context";

export function TaskCount() {
  console.log("Rendering TaskCount");

  const { tasks } = useTasksContext();

  return (
    <div className="text-lg text-gray-600 font-medium">
      Total Tasks: {tasks.length}
    </div>
  );
}
