import React, { useState, useEffect } from "react";

import menuIcon from "../../../assets/imgs/Index/timer/trackerMenu.svg";

import style from "./Timer.module.css"; // Assuming you have CSS styles

var setDate = [
  { date: "May 2, 2019 7:05:00", title: "Anniversary" },
  { date: "November 19, 2002 0:00:00", title: "Maria Katherine's Birthday" },
  { date: "May 7, 2002 0:00:00", title: "Nicko's Birthday" },
];

function Timer() {
  const [changeColor, setChangeColor] = useState(0);
  const [dateIndex, setDateIndex] = useState(0);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [unix, setUnix] = useState(0);

  const changeBirthDate = () => {
    setChangeColor(1);
    setDateIndex(((dateIndex - 1 + setDate.length) % (setDate.length - 1)) + 1);
  };

  const backToAnniv = () => {
    setChangeColor(0);
    setDateIndex(0);
  };

  const calculateTimeDifference = () => {
    let startDate = new Date(setDate[dateIndex].date);
    const now = new Date();
    const timeDifference = now - startDate;

    setYears(Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25)));

    // Approximate months (needs adjustment for accuracy)
    setMonths(
      Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 365.25)) /
          (1000 * 60 * 60 * 24 * 30.44)
      )
    );

    setWeeks(
      Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 365.25)) /
          (1000 * 60 * 60 * 24 * 7)
      )
    );

    setDays(
      Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 365.25)) /
          (1000 * 60 * 60 * 24)
      )
    );

    setUnix(Math.floor(new Date().getTime())); // Unix time in seconds
  };

  useEffect(() => {
    calculateTimeDifference(); // Calculate initially

    const intervalId = setInterval(calculateTimeDifference, 1000); // Update every second

    // Cleanup function for the interval
    return () => clearInterval(intervalId);
  }, [dateIndex]);

  return (
    <div className={style.Timer}>
      {/* header */}
      <div className={style.header}>
        <h1>{setDate[dateIndex].title}</h1>
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

        <div className={style.unixTracker}>
          <h2>{unix}</h2>
          <p>Unix Time</p>
        </div>
      </div>

      {/* menu */}
      <div className={style.menu}>
        <div className={style.icon}>
          <img src={menuIcon} alt="Menu Icon" /> {/* Update alt tag */}
        </div>
        <div className={style.btnHolder}>
          <button
            onClick={backToAnniv}
            style={{
              color: changeColor === 0 ? "var(--primary)" : "var(--text)",
            }}
            className={style.btnMenu}
          >
            A
          </button>
          <button
            onClick={changeBirthDate}
            style={{ color: changeColor === 1 ? "var(--red)" : "var(--black)" }}
            className={style.btnMenu}
          >
            K
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
