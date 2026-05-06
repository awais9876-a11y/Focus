import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./SessionTasks.css";

const SessionTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: taskText, completed: false },
      ]);
    }
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="outer">
      <h1 className="titleStyle">Session Tasks</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default SessionTasks;
