import TopMenu from "./modules/TopMenu/TopMenu";
import Home from "./modules/Index/Home/Home";
import Timer from "./modules/Index/Timer/Timer";
import UnixTimer from "./modules/Index/Timer/UnixTimer";

function App() {
  return (
    <>
      <div className="container">
        <TopMenu />
        <Home />
        <Timer />
      </div>
    </>
  );
}

export default App;
