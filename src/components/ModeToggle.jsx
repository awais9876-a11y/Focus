import React from "react";
import "./ModeToggle.css";

const ModeToggle = ({ currentMode, setMode }) => {
  const buttonStyle = (mode) => ({
    padding: "0.5rem 1.5rem",
    borderRadius: "1.25rem",
    border: "none",
    cursor: "pointer",
    backgroundColor: currentMode === mode ? "#ffffff" : "transparent",
    color: currentMode === mode ? "var(--primary-color)" : "#99f6e4",
    fontSize: "0.9rem",
    fontWeight: currentMode === mode ? "bold" : "normal",
    transition: "background-color 0.2s",
  });

  return (
    <div className="containerStyle">
      <button
        style={buttonStyle("deepWork")}
        onClick={() => setMode("deepWork")}
      >
        Deep Work
      </button>
      <button
        style={buttonStyle("shortBreak")}
        onClick={() => setMode("shortBreak")}
      >
        Short Break
      </button>
    </div>
  );
};

export default ModeToggle;
