import React, { useEffect, useState } from "react";

import "./index.css";
const DigitalTimer = () => {
  const [timerLimit, setTimerLimit] = useState(25);
  const [isStarted, setIsStarted] = useState(false);
  const [timeElapsedInSeconds, setTimeElapsedInSeconds] = useState(0);

  const onIncrementTimerLimit = () => {
    setTimerLimit((prevState) => prevState + 1);
  };

  const onDecrementTimerLimit = () => {
    setTimerLimit((prevState) => prevState - 1);
  };

  useEffect(() => {
    let intervalId;

    if (isStarted) {
      intervalId = setInterval(() => {
        setTimeElapsedInSeconds((prevState) => prevState + 1);
      }, 1000);
    } else if (!isStarted && timeElapsedInSeconds !== 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isStarted, timerLimit]);

  const onStartOrPauseTimer = () => {
    setIsStarted((prevState) => !prevState);
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = Math.floor((totalSeconds % 3600) % 60);

    const minutesInString = (num) => num.toString().padStart(2, "0");

    return `${minutesInString(minutes)}:${minutesInString(remainingSeconds)}`;
  };

  const playIconImage =
    "https://assets.ccbp.in/frontend/react-js/play-icon-img.png";
  const pauseIconImage =
    "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png";

  const totalSeconds = timerLimit * 60;

  return (
    <>
      <div className="app-container">
        <div className="digital-timer-container">
          <h1 className="heading">Digital Timer</h1>

          <div className="timer-display-controls-container">
            <div className="timer-display-container">
              <div className="elapsed-time-container">
                <h1 className="elapsed-time">{formatTime(totalSeconds)}</h1>
                <p className="timer-state">Paused</p>
              </div>
            </div>

            <div className="controls-container">
              <div className="timer-controller-container">
                <button className="control-btn" onClick={onStartOrPauseTimer}>
                  <img
                    src={isStarted ? pauseIconImage : playIconImage}
                    alt={isStarted ? "play icon" : "pause icon"}
                    className="control-icon"
                  />
                  <p className="control-text">
                    {isStarted ? "Pause" : "Start"}
                  </p>
                </button>

                <button className="control-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="control-icon"
                  />
                  <p className="control-text">Reset</p>
                </button>
              </div>

              <div className="timer-limit-controller-container">
                <p className="limit-label">Set Timer limit</p>
                <div className="limit-value-container">
                  <button
                    className="limit-controller-btn"
                    onClick={onDecrementTimerLimit}
                  >
                    -
                  </button>
                  <div className="limit-value">
                    <p style={{ margin: 0, color: "#1e293b" }}>{timerLimit}</p>
                  </div>
                  <button
                    className="limit-controller-btn"
                    onClick={onIncrementTimerLimit}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTimer;
