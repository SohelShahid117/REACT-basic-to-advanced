import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-blue-400">
        <TemperatureConverter />
      </div>
    </>
  );
}

export default App;
