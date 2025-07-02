import "./App.css";
import FetchaDataExample from "./components/FetchDataExample";
import Timer from "./components/Timer";
import Subscription from "./components/Subscription";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleResizeOfWindow = () => console.log(window.innerWidth);
    // window.addEventListener("click",()=>{})
    window.addEventListener("resize", () => {
      handleResizeOfWindow;
    });
  }, []);
  return (
    <>
      <div className="p-5">
        <FetchaDataExample />
        <Timer />
        <Subscription />
      </div>
    </>
  );
}

export default App;
