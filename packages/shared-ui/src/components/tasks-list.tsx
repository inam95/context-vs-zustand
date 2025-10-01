import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  // @ts-ignore
} from "./table";
// @ts-ignore
import { Task } from "../types";
import { TrashIcon } from "lucide-react";
// @ts-ignore
import { Button } from "./button";
// @ts-ignore
import { cn } from "../lib/utils";

export function TasksList({
  tasks,
  onDelete,
}: {
  tasks: Task[];
  onDelete?: (id: string) => void;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow
            key={task.id}
            className={cn({
              "bg-gray-200": task.isDeleted,
            })}
          >
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.user}</TableCell>
            <TableCell>{task.completed ? "Completed" : "Pending"}</TableCell>
            <TableCell>
              <Button onClick={() => onDelete?.(task.id)}>
                <TrashIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
