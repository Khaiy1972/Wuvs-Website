import React, { useState, useEffect } from "react";

import menuIcon from "../../../assets/imgs/Index/timer/trackerMenu.svg";

import style from "./Timer.module.css"; // Assuming you have CSS styles

function Timer() {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [unix, setUnix] = useState(0);

  const startDate = new Date("May 2, 2019 7:05:00");

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date();
      const timeDifference = now - startDate;

      setYears(Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25)));

      // Approximate months (needs adjustment for accuracy)
      const monthCounter = Math.floor(
        timeDifference / (1000 * 60 * 60 * 24 * 30.44)
      );
      setMonths(monthCounter % 12);

      // Days
      const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const daysInYears = years * 365 + Math.floor(years / 4); // Approximate leap years
      const daysInMonths = months * 30; // Approximate month length
      setDays(totalDays - daysInYears - daysInMonths);

      // Weeks (assuming every year has exactly 52 weeks)
      setWeeks(Math.floor((totalDays - daysInYears) / 7));
    };

    // Unix Timestamp
    setUnix(Math.floor(new Date().getTime() / 1000)); // Unix time in seconds

    calculateTimeDifference(); // Calculate initially
    const intervalId = setInterval(calculateTimeDifference, 1000); // Update every second

    // Cleanup function for the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={style.Timer}>
      {/* header */}
      <div className={style.header}>
        <h1>Anniversary</h1>
      </div>

      {/* tracker */}
      <div className={style.tracker}>
        <div className={style.date}>
          <div className={style.yearTracker}>
            <h1>{years}</h1>
            <p>Year</p>
          </div>

          <div className={style.monthTracker}>
            <h1>{months}</h1>
            <p>Months</p>
          </div>

          <div className={style.weekTracker}>
            <h1>{weeks}</h1>
            <p>Week</p>
          </div>

          <div className={style.dayTracker}>
            <h1>{days}</h1>
            <p>Day</p>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className={style.menu}>
        <div className={style.icon}>
          <img src={menuIcon} alt="Menu Icon" /> {/* Update alt tag */}
        </div>
        <div className={style.btnHolder}>
          <button className={style.btnMenu}>A</button>
          <button className={style.btnMenu}>K</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
