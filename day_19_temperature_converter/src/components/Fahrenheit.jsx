import React from "react";

const Fahrenheit = ({ handleFahrenheitTemp, fahrenheit }) => {
  return (
    <div>
      <label htmlFor="" className="block text-xl mt-5">
        Fahrenheit :
      </label>
      <input
        onChange={(e) => handleFahrenheitTemp(e.target.value)}
        className="border rounded p-3 w-full "
        type="number"
        name="fahrenheit"
        id="fahrenheit"
        placeholder="32° F"
        value={fahrenheit}
      />
    </div>
  );
};

export default Fahrenheit;
