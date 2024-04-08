import React, { useState } from "react";

// import images
import homePic from "../../../assets/imgs/Index/home/picTogetherPhotos.jpeg";
import pic1 from "../../../assets/imgs/Index/home/picTogether2.jpg";
import pic2 from "../../../assets/imgs/Index/home/picTogether3.jpg";
import pic3 from "../../../assets/imgs/Index/home/picTogether5.jpg";
import pic4 from "../../../assets/imgs/Index/home/picTogether6.jpg";
import pic5 from "../../../assets/imgs/Index/home/picTogether8.jpg";
import pic6 from "../../../assets/imgs/Index/home/picTogether10.jpg";
import pic7 from "../../../assets/imgs/Index/home/picTogether11.jpg";

import homeAirPlane from "../../../assets/imgs/Index/home/paperAirplain.svg";

import style from "./Home.module.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  let photoContainer = [homePic, pic1, pic2, pic3, pic4, pic5, pic6, pic7];

  const changePhoto = () => {
    setCurrentIndex((currentIndex + 1) % photoContainer.length);
  };

  return (
    <div className={style.Home}>
      <div className={style.imgContainer}>
        <div className={style.box}></div>
        <img onClick={changePhoto} src={photoContainer[currentIndex]} />
      </div>
      <div className={style.textContainer}>
        <h1>WUVS</h1>
        <p>Our true love will never fades</p>
      </div>
      <div className={style.drawingContainer}>
        <img src={homeAirPlane} alt="" />
      </div>
    </div>
  );
}

export default Home;
