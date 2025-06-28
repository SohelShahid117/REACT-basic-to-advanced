import React from "react";

const Counter = ({
  number,
  increaseNumb,
  decreaseNumb,
  // resetNumb,
  setNumber,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-white shadow-amber-700 shadow-2xl w-1/3 mx-auto p-5">
      <h1 className="text-5xl font-bold p-2">Counter App</h1>
      <p className="text-2xl">Count Number is : {number}</p>
      <div className="flex flex-row gap-5">
        <button
          onClick={increaseNumb}
          className="bg-green-500 px-6 py-3 m-5 text-xl text-white rounded-2xl hover:bg-green-700 "
        >
          Increase
        </button>
        <button
          onClick={decreaseNumb}
          className="bg-red-500 px-6 py-3 m-5 text-xl text-white rounded-2xl hover:bg-red-700 "
        >
          Decrease
        </button>
        <button
          // onClick={resetNumb}
          onClick={() => {
            setNumber(0);
          }}
          className="bg-gray-500 px-6 py-3 m-5 text-xl text-white rounded-2xl hover:bg-gray-700 "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
