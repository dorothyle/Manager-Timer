import { useState } from "react";
import Timer from "./Timer";
import "./App.css";

function App() {
  // target time
  const nextFriday = () => {
    const today = new Date();
    const friday = new Date(today.getTime());
    friday.setDate(today.getDate() + ((7 + 5 - today.getDay()) % 7));
    friday.setHours(10);
    friday.setMinutes(0);
    friday.setSeconds(0);
    return friday;
  };
  let meetingTime = nextFriday();
  // decrement time
  // countdown to time in seconds
  // parse into how many days, hours, etc
  return (
    <>
      <h1>TIME UNTIL NEXT MANAGER's MEETING</h1>
      <h2>{meetingTime.toString()}</h2>
      <div className="timer-container">
        <Timer number={13} unit={"Days"} />
        <Timer number={23} unit={"Hours"} />
        <Timer number={59} unit={"Minutes"} />
        <Timer number={58} unit={"Seconds"} />
      </div>
    </>
  );
}

export default App;
