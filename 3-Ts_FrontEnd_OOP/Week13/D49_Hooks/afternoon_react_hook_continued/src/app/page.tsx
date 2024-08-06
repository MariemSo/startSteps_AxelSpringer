"use client";
import TaskList from "./components/TaskList";
import { tasksList } from "./data";
import { useState } from "react";
export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>(tasksList);
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}
