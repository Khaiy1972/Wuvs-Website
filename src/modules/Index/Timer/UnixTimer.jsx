import React, { useState, useEffect } from "react";

function UnixTimer() {
  const [unix, setUnix] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUnix(Math.floor(new Date().getTime() / 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Unix Timestamp: {unix}</h2>
    </div>
  );
}

export default UnixTimer;
