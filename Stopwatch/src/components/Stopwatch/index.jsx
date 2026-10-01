// import { useEffect, useState } from "react";
// import "./index.css";
// const Stopwatch = () => {
//   const [isTimerRunning, setIsTimerRunning] = useState(false);
//   const [timeElapsedInSeconds, setTimeElapsedInSeconds] = useState(0);

//   useEffect(() => {
//     let intervalId;

//     if (isTimerRunning) {
//       intervalId = setInterval(() => {
//         setTimeElapsedInSeconds((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(intervalId);
//     }

//     return () => clearInterval(intervalId);
//   }, [isTimerRunning]);

//   const onStartTimer = () => {
//     setIsTimerRunning(true);
//   };

//   const onStopTimer = () => {
//     setIsTimerRunning(false);
//   };
//   const onResetTimer = () => {
//     setIsTimerRunning(false);
//     setTimeElapsedInSeconds(0);
//   };

//   const getFormattedTime = () => {
//     const minutes = Math.floor(timeElapsedInSeconds / 60);
//     const seconds = timeElapsedInSeconds % 60;

//     const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`;
//     const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`;

//     return `${stringifiedMinutes}:${stringifiedSeconds}`;
//   };

//   return (
//     <div className="stop-watch-background">
//       <h1 className="title">StopWatch</h1>
//       <div className="container">
//         <div className="stop-watch-container">
//           <div className="stop-watch-container-title">
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
//               alt="stopwatch"
//               className="stopwatch-image"
//             />
//             <p className="timer-title">Timer</p>
//           </div>
//           <p className="stopwatch-timer">{getFormattedTime()}</p>
//           <div className="stopwatch-control-container">
//             <button
//               disabled={isTimerRunning}
//               onClick={onStartTimer}
//               className="control-btn start-btn"
//             >
//               Start
//             </button>
//             <button
//               disabled={!isTimerRunning}
//               onClick={onStopTimer}
//               className="control-btn stop-btn"
//             >
//               Stop
//             </button>
//             <button onClick={onResetTimer} className="control-btn reset-btn">
//               Reset
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stopwatch;



import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => {
    clearInterval(this.intervalId)
  }

  onStartTimer = () => {
    const {isTimerRunning} = this.state

    if (!isTimerRunning) {
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({
          timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
        }))
      }, 1000)
      this.setState({isTimerRunning: true})
    }
  }

  onStopTimer = () => {
    this.clearTimerInterval()
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({
      isTimerRunning: false,
      timeElapsedInSeconds: 0,
    })
  }

  getFormattedTime = () => {
    const {timeElapsedInSeconds} = this.state

    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = timeElapsedInSeconds % 60
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="stop-watch-background">
        <h1 className="title">StopWatch</h1>
        <div className="container">
          <div className="stop-watch-container">
            <div className="stop-watch-container-title">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="stopwatch-image"
              />
              <p className="timer-title">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{this.getFormattedTime()}</h1>
            <div className="stopwatch-control-container">
              <button
                disabled={isTimerRunning}
                onClick={this.onStartTimer}
                className="control-btn start-btn"
              >
                Start
              </button>
              <button
                disabled={!isTimerRunning}
                onClick={this.onStopTimer}
                className="control-btn stop-btn"
              >
                Stop
              </button>
              <button
                onClick={this.onResetTimer}
                className="control-btn reset-btn"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
