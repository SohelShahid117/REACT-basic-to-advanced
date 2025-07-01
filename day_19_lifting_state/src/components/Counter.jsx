import React from "react";

const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div className="max-w-sm mx-auto text-center p-5 shadow-xl border m-5">
      <h2 className="text-2xl mb-5">Counter App</h2>
      <p className="mb-5 text-2xl">{count}</p>
      <div className="space-x-5">
        <button
          onClick={handleIncrement}
          className="bg-green-500 px-6 py-3 rounded-md cursor-pointer text-white text-xl"
        >
          Increase(+)
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 px-6 py-3 rounded-md cursor-pointer text-white text-xl"
        >
          Decrease(-)
        </button>
      </div>
    </div>
  );
};

export default Counter;
