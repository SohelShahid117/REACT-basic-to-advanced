import React, { useEffect, useState } from "react";

//214. Project: Build a Timer App with Start/Stop Functionality

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((preValue) => preValue + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => setCount(0);
  return (
    <div className="bg-orange-400 text-white p-32 mt-5 max-w-md mx-auto flex flex-col gap-5 items-center justify-center">
      <h1 className="text-2xl text-center font-semibold">Timer: {count}s</h1>
      <div className="flex gap-5">
        <button
          onClick={handleStart}
          className="bg-green-500 px-6 py-3 rounded-md text-3xl "
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-red-500 px-6 py-3 rounded-md text-3xl "
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 px-6 py-3 rounded-md text-3xl "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
