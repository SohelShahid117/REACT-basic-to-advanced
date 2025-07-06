import React from "react";
import { useParams } from "react-router";

const City = () => {
  let { city } = useParams();
  return <div>City Component is {city}</div>;
};

export default City;
