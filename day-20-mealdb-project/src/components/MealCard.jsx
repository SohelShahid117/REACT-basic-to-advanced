import React from "react";

const MealCard = ({ meal }) => {
  return (
    <div className="my-5 shadow-md shadow-amber-200 bg-amber-100  p-5 cursor-pointer hover:-translate-y-2 duration-200 text-center">
      <img
        className="w-[200px] h-[200px] mx-auto rounded-xl"
        src={meal.strMealThumb}
        alt=""
      />
      <p className="mb-2 text-2xl text-center">{meal.strMeal}</p>
      <p>{meal.strInstructions.slice(0, 100)}...</p>
      <a href="#" className="text-blue-600 hover:underline">
        Learn More
      </a>
      <p className="mt-2">Price : {meal.strMeasure8} </p>
    </div>
  );
};

export default MealCard;
