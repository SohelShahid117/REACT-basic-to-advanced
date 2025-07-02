import React from "react";

const CelsiusInput = ({ handleCelsiusTemp, celsius }) => {
  return (
    <div>
      <label htmlFor="celsius" className="block text-xl mt-5">
        Celsius :
      </label>
      <input
        onChange={(e) => handleCelsiusTemp(e.target.value)}
        className="border rounded p-3 w-full "
        type="number"
        name="celsius"
        id="celsius"
        placeholder="0° C"
        // placeholder={`${temperature.fahrenheit}° C`}
        value={celsius}
      />
    </div>
  );
};

export default CelsiusInput;
