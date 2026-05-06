import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <div className="itemStyle">
      <div
        className="checkboxStyle"
        style={{ color: task.completed ? "#10b981" : "#cbd5e1" }}
        onClick={() => onToggleComplete(task.id)}
      >
        {task.completed ? "✅" : "○"}
      </div>
      <span
        className="taskStyle"
        style={{
          color: task.completed ? "#94a3b8" : "#1e293b",
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <button
        className="deleteBtn"
        onClick={() => onDeleteTask(task.id)}
        title="Delete task"
      >
        ✖️
      </button>
    </div>
  );
};

export default TaskItem;
