import React from "react";
import DevFocusTimer from "./components/DevFocusTimer";
import SessionTasks from "./components/SessionTasks";
import "./index.css";

function App() {
  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
  };

  const timerSectionStyle = {
    flex: "1 1 50%",
    backgroundColor: "var(--primary-color)",
    color: "var(--text-light)",
    padding: "2rem 1.5rem",
  };

  const tasksSectionStyle = {
    flex: "1 1 50%",
    backgroundColor: "var(--bg-color-main)",
    padding: "2rem 2.5rem",
  };

  return (
    <div style={containerStyle}>
      <section style={timerSectionStyle}>
        <DevFocusTimer />
      </section>
      <section style={tasksSectionStyle}>
        <SessionTasks />
      </section>
    </div>
  );
}

export default App;
