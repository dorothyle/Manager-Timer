import "./Timer.css";

const Timer = ({ number, unit }) => {
  return (
    <div className="time-unit-container">
      <div className="number-box">
        <p>{number}</p>
      </div>
      <p>{unit}</p>
    </div>
  );
};

export default Timer;
