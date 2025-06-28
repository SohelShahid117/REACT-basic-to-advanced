import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const [number, setNumber] = useState(0);
  const increaseNumb = () => {
    setNumber(number + 1);
  };
  const decreaseNumb = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  const resetNumb = () => {
    setNumber(0);
  };

  return (
    <>
      <h1>Hello World</h1>
      <Button count={count} handleClick={handleClick} />
      <Button />
      <Counter
        number={number}
        setNumber={setNumber}
        increaseNumb={increaseNumb}
        decreaseNumb={decreaseNumb}
        resetNumb={resetNumb}
      />
    </>
  );
}

export default App;
