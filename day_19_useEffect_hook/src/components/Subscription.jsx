import React, { useEffect } from "react";

const Subscription = () => {
  console.log("subscription");

  useEffect(() => {
    const handleResizeOfWindow = () => console.log(window.innerWidth);
    window.addEventListener("resize", handleResizeOfWindow);
    return () => window.removeEventListener("resize", handleResizeOfWindow);
  }, []);

  return (
    <div>
      <h1>
        215. Project: Listening to Window Resize Events (using Subscriptions
        with useEffect)
      </h1>
    </div>
  );
};

export default Subscription;
