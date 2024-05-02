import { useState, useEffect } from "react";
import header from "./assets/header.svg";
import Timer from "./Timer";
import "./App.css";

function App() {
  // target time
  const getMeetingTime = () => {
    const today = new Date();
    const friday = new Date(today.getTime());
    friday.setDate(today.getDate() + ((7 + 5 - today.getDay()) % 7));
    friday.setHours(10);
    friday.setMinutes(0);
    friday.setSeconds(0);
    return friday;
  };
  // calculate time until meeting
  const getRemainingTime = (meetingTime) => {
    const now = new Date();
    const goal = meetingTime - now;
    let days = goal / 1000 / 60 / 60 / 24;
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let seconds = (minutes % 1) * 60;
    const remainingTime = {
      days: days.toFixed(0),
      hours: hours.toFixed(0),
      minutes: minutes.toFixed(0),
      seconds: seconds.toFixed(0),
    };
    return remainingTime;
  };
  let meetingTime = getMeetingTime();
  const [remainingTime, setRemainingTime] = useState(
    getRemainingTime(meetingTime)
  );
  useEffect(() => {
    setInterval(() => {
      setRemainingTime(getRemainingTime(meetingTime));
    }, 1000);
  }, []);
  // decrement time
  // countdown to time in seconds
  // parse into how many days, hours, etc
  return (
    <div className="app-container">
      <img className="header" src={header} />
      <h1>Time Until Manager’s Meeting</h1>
      <div className="timer-container">
        <Timer number={remainingTime.days} unit={"Days"} />
        <Timer number={remainingTime.hours} unit={"Hours"} />
        <Timer number={remainingTime.minutes} unit={"Minutes"} />
        <Timer number={remainingTime.seconds} unit={"Seconds"} />
      </div>
    </div>
  );
}

export default App;
