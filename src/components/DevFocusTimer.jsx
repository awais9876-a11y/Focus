import React, { useState, useEffect, useRef } from "react";
import ModeToggle from "./ModeToggle";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import "./DevFocusTimer.css";

const TIMES = {
  deepWork: 25 * 60,
  shortBreak: 5 * 60,
};

const DevFocusTimer = () => {
  const [mode, setMode] = useState("deepWork");
  const [timeLeft, setTimeLeft] = useState(TIMES[mode]);
  const [isActive, setIsActive] = useState(false);
  const timerIntervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(TIMES[mode]);
    setIsActive(false);
    clearInterval(timerIntervalRef.current);
  }, [mode]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerIntervalRef.current);
      setIsActive(false);
    } else {
      clearInterval(timerIntervalRef.current);
    }

    return () => clearInterval(timerIntervalRef.current);
  }, [isActive, timeLeft]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(TIMES[mode]);
  };

  return (
    <div className="outerCon">
      <header className="focusCont">
        <div className="name">
          <span>FOCUS GUROO</span>
        </div>
      </header>

      <div className="innerdev">
        <ModeToggle currentMode={mode} setMode={setMode} />
        <TimerDisplay timeLeft={timeLeft} />
        <TimerControls
          isActive={isActive}
          onStartPause={handleStartPause}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default DevFocusTimer;
