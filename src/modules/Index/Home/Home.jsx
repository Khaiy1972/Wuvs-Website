// import images
import homePic from "../../../assets/imgs/Index/home/picTogetherPhotos.jpeg";
import homeAirPlane from "../../../assets/imgs/Index/home/paperAirplain.svg";

import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.Home}>
      <div className={style.imgContainer}>
        <div className={style.box}></div>
        <img src={homePic} />
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
