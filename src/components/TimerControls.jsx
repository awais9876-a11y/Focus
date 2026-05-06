import React from "react";
import "./TimerControls.css";

const TimerControls = ({ isActive, onStartPause, onReset }) => {
  return (
    <div className="containerStyle">
      <button className="startPauseButtonStyle" onClick={onStartPause}>
        {isActive ? "⏸️" : "▶️"}
      </button>
      <button className="resetButtonStyle" onClick={onReset}>
        {"↺"}
      </button>
    </div>
  );
};

export default TimerControls;
