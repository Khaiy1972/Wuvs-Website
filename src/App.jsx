import React from "react";
// import { TopMenu, Home, Timer } from "./modules";
import { TopMenu, Home, Timer, Messages } from "./modules";

function App() {
  return (
    <>
      <div className="container">
        <TopMenu />
        <Home />
        <Timer />
        <Messages />
      </div>
    </>
  );
}

export default App;
