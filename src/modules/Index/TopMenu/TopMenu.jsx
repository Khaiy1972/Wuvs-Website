import React from "react";

import wuvsLogo from "../../../assets/imgs/Index/home/MKCHLogoW.svg";

import style from "./TopMenu.module.css";

function TopMenu() {
  return (
    <div className={style.TopMenu}>
      <img src={wuvsLogo} style={{ fill: "var(--primary)" }} />
      <br />
    </div>
  );
}

export default TopMenu;
