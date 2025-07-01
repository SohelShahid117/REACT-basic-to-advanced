import React from "react";

const DisplayCount = ({ count }) => {
  return (
    <div className="max-w-sm mx-auto text-center p-5 shadow-4xl bg-orange-400 border m-5 text-white">
      <h2 className="text-2xl mb-5">Display Count value:</h2>
      <p className="mb-5 text-2xl">{count}</p>
    </div>
  );
};

export default DisplayCount;
