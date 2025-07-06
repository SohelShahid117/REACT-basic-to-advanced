import React from "react";
import { useParams } from "react-router";

const Categories = () => {
  let { lang } = useParams();
  console.log(lang);
  return (
    <div className="bg-white p-5 shadow-2xl rounded-3xl">
      <h2>Categories page</h2>
      {lang ? (
        <p>
          u r viewing in
          <span className="text-3xl text-yellow-500 p-2 font-bold">
            {lang}
          </span>{" "}
          language
        </p>
      ) : (
        <p>
          u r not get <span className="text-3xl text-yellow-500">Language</span>
        </p>
      )}
    </div>
  );
};

export default Categories;
