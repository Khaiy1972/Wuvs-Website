import React, { useState } from "react";
// import { TopMenu, Home, Timer } from "./modules";
import { TopMenu, Home, Timer, Messages, PhotoGallery } from "./modules";

function App() {
  // const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [isDark, setIsDark] = useState("isDark", preference);

  return (
    <>
      <div className="container">
        <TopMenu />
        <Home />
        <Timer />
        <Messages />
        <PhotoGallery />
      </div>
    </>
  );
}

export default App;
