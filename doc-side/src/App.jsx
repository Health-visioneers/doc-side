import SideNav from "./components/left-panel/SideNav";
import "./App.css";
import MiddleArea from "./components/middle-panel/MiddleArea";
import RightArea from "./components/right-panel/RightArea";
import Router from "./Routes/router";
import { BrowserRouter as Routes } from "react-router-dom";

function App() {
  return (
    <>
        <div className="app-container">
          <Routes>
            <SideNav />
            <MiddleArea />
            <RightArea />
            <Router />
          </Routes>
        </div>
     
    </>
  );
}

export default App;
