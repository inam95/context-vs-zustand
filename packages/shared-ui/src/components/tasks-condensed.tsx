// @ts-ignore
import { Task } from "../types.js";

export function TasksCondensed({ tasks }: { tasks: Task[] }) {
  console.log("Rendering TasksCondensed");

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <div key={task.id} className="flex flex-col gap-2 border p-2 rounded">
          <div className="font-bold">{task.title}</div>
          <div className="text-sm text-gray-600">{task.user}</div>
          <div className="text-sm">
            {task.completed ? "✓ Done" : "○ Pending"}
          </div>
        </div>
      ))}
    </div>
  );
}
