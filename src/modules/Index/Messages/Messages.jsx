import React, { useState, useEffect } from "react";

import herPic from "../../../assets/imgs/Index/messages/herPic.jpg";
import hisPic from "../../../assets/imgs/Index/messages/hisPic.jpg";

import style from "./Messages.module.css";

let herMessages = [
  "\tI never thought life could be as amazing as this, having you by my side. I am forever thankful to God for bringing such an awesome masterpiece for me to cherish, love, and take care of forever, until my very last minute in this world. I will always be here no matter what and how many circumstances we would encounter as I promise to serve you everything on my power to make you happy, feel loved, and worth. I, your significant other, future wife and mother of your children, promise to love you until my eyes closes before entering the kingdom of the greatest one who brought you to me.",
  "hiiiiiii",
  "hi ulit",
];
let hisMessages = [
  "\tTo my one and only love of my life, thank you for always taking care of me, always there for me, and especially thank you for loving me no matter what my flaws are. I promise you that I'll never leave you by your side because I will love you until our time will come. Loving you made me realize how beautiful life is, and I want to live my life with you. Thank you very much for everything.",
  "hiiiiiiii too",
  "hi uliiiit",
];

function Messages() {
  const [herMessage, setHerMessage] = useState(0);
  const [hisMessage, setHisMessage] = useState(0);

  const changeHerMessage = () => {
    setHerMessage((herMessage + 1) % herMessages.length);
  };

  const changeHisMessage = () => {
    setHisMessage((hisMessage + 1) % hisMessages.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeHerMessage();
      changeHisMessage();
    }, 30000); // Update interval to 5 seconds

    return () => clearInterval(intervalId);
  }, [herMessage, hisMessage]);

  return (
    <div className={style.Messages}>
      <div className={`${style.herMessage} ${style.content}`}>
        <img src={herPic} alt="" />
        <div className={style.textContainer}>
          <p onClick={changeHerMessage}>{herMessages[herMessage]}</p>
        </div>
      </div>

      <div className={`${style.hisMessage} ${style.content}`}>
        <img src={hisPic} alt="" />
        <div className={style.textContainer}>
          <p onClick={changeHisMessage}>{hisMessages[hisMessage]}</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;
