import React from "react";
import { Task } from "../types/Task";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>
        <strong>Status:</strong>{" "}
        {task.status === "completed" ? "Completed" : "Pending"}
      </p>
      <p>
        <strong>Created At:</strong> {task.createdAt.toLocaleString()}
      </p>
      <p>
        <strong>Updated At:</strong> {task.updatedAt.toLocaleString()}
      </p>
    </div>
  );
};

export default TaskCard;
