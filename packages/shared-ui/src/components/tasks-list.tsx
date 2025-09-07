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

export function TasksList({ tasks }: { tasks: Task[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.user}</TableCell>
            <TableCell>{task.completed ? "Completed" : "Pending"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
