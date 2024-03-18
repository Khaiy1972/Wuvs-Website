import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [targetDate, setTargetDate] = useState(
    new Date("December 31, 2024 23:59:59")
  ); // Set your target date here
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setWeeks(Math.floor(days / 7));
      setMonths(Math.floor(days / 30));
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((difference / (1000 * 60)) % 60));
      setSeconds(Math.floor((difference / 1000) % 60));
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderUnits = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span>{renderUnits(days)}</span>
        <span>Years</span>
      </div>
      <div className="countdown-item">
        <span>{renderUnits(months)}</span>
        <span>Months</span>
      </div>
      <div className="countdown-item">
        <span>{renderUnits(weeks)}</span>
        <span>Weeks</span>
      </div>
      <div className="countdown-item">
        <span>{renderUnits(days)}</span>
        <span>Days</span>
      </div>
      <div className="countdown-item">
        <span>{renderUnits(hours)}</span>
        <span>Hours</span>
      </div>
      <div className="countdown-item">
        <span>{renderUnits(minutes)}</span>
        <span>Minutes</span>
      </div>
      <div className="countdown-item">
        <span>{renderUnits(seconds)}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
