import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="What are we building next?"
        className="inputStyle"
      />
      <button type="submit" className="buttonStyle">
        +
      </button>
    </form>
  );
};

export default TaskInput;
