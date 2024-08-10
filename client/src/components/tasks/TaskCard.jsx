// client/src/components/tasks/TaskCard.jsx

import { useTasks } from "../../context/tasksContext"; // Verifica que la ruta y el nombre sean correctos
import { Button, ButtonLink, Card } from "../ui";

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task._id);
    }
  };

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={handleDelete}>Delete</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}
