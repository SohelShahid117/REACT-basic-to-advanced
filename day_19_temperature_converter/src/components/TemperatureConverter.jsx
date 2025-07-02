import React, { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import Fahrenheit from "./Fahrenheit";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState({
    celsius: "",
    fahrenheit: "",
  });

  const handleCelsiusTemp = (value) => {
    if (value === "") {
      setTemperature({ celsius: "", fahrenheit: "" });
      return;
    }
    const celsiusIn = parseFloat(value);
    console.log(celsiusIn);

    const fahrenheitOut = (celsiusIn / 5) * 9 + 32;
    console.log(fahrenheitOut);

    setTemperature({
      celsius: celsiusIn,
      fahrenheit: fahrenheitOut.toFixed(2),
    });
  };

  const handleFahrenheitTemp = (value) => {
    if (value === "") {
      setTemperature({ celsius: "", fahrenheit: "" });
      return;
    }
    const fahrenheitIn = parseFloat(value);
    console.log(fahrenheitIn);

    const celsiusOut = ((fahrenheitIn - 32) * 5) / 9;
    console.log(celsiusOut);

    setTemperature({
      celsius: celsiusOut.toFixed(2),
      fahrenheit: fahrenheitIn,
    });
  };

  console.log(temperature);
  return (
    <div className="max-w-md mx-auto shadow-md rounded-md border-2 m-5 p-5 bg-white">
      <h1 className="text-3xl text-center">Temperature Converter App</h1>

      <CelsiusInput
        handleCelsiusTemp={handleCelsiusTemp}
        celsius={temperature.celsius}
      />
      <Fahrenheit
        handleFahrenheitTemp={handleFahrenheitTemp}
        fahrenheit={temperature.fahrenheit}
      />
    </div>
  );
};

export default TemperatureConverter;
