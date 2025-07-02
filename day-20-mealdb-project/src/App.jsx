import { useEffect, useState } from "react";
import "./App.css";
import MealCard from "./components/MealCard";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  //https://www.themealdb.com/api/json/v1/1/search.php?f=a

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((result) => {
        setMeals(result.meals || []);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  }, []);
  console.log(meals);
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="text-center p-5 bg-blue-500 text-white">
        <h1 className="text-2xl">Working with APIs(Data Fetching)</h1>
        <p className="text-2xl">Latest Meal Plans</p>
      </div>
      <div>
        {loading && (
          <p className="text-center text-5xl font-bold text-blue-700">
            Loading...
          </p>
        )}
        {err && (
          <p className="text-red-500 p-5 text-center">Something went wrong</p>
        )}
      </div>
      <div>
        <div className="flex gap-5 justify-center items-center">
          {!loading &&
            !err &&
            meals.map((meal, index) => <MealCard meal={meal} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
