import { TasksList } from "@context-vs-zustand/shared-ui/components/tasks-list";
import { TasksDetailed } from "@context-vs-zustand/shared-ui/components/tasks-detailed";
import { TasksCondensed } from "@context-vs-zustand/shared-ui/components/tasks-condensed";
import { useTasksContext } from "../contexts/tasks-context";

export function TasksBody() {
  console.log("Rendering TasksBody");

  const { currentView, tasks, currentFilter } = useTasksContext();

  const filteredTasks = currentFilter
    ? tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(currentFilter.toLowerCase()) ||
          task.description.toLowerCase().includes(currentFilter.toLowerCase())
      )
    : tasks;

  return (
    <div className="flex gap-1">
      {currentView === "list" && <TasksList tasks={filteredTasks} />}
      {currentView === "detailed" && <TasksDetailed tasks={filteredTasks} />}
      {currentView === "condensed" && <TasksCondensed tasks={filteredTasks} />}
    </div>
  );
}
