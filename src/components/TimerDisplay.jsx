import React from "react";
import "./TimerDisplay.css";

const TimerDisplay = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const padTime = (time) => time.toString().padStart(2, "0");

  return (
    <div className="displayStyle">
      {padTime(minutes)}:{padTime(seconds)}
    </div>
  );
};

export default TimerDisplay;
