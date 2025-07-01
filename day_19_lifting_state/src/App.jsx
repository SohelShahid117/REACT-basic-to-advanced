import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import DisplayCount from "./components/DisplayCount";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="flex">
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />

        <DisplayCount count={count} />
      </div>
    </>
  );
}

export default App;
