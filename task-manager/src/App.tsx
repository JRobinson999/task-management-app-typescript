import CreateTaskForm from "./components/CreateTaskForm";
import React, { useState } from "react";
import "./App.css";
import { Task } from "./types/Task";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div style={{ textAlign: "center" }} className="App">
      <h1>Task Manager</h1>
      <CreateTaskForm onCreate={(task: Task) => setTasks([...tasks, task])} />
      <ul>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
