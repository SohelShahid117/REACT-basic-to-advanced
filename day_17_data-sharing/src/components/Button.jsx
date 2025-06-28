import React from "react";

const Button = ({ count, handleClick }) => {
  //   const [count, setCount] = useState(0);
  //   const handleClick = () => {
  //     setCount(count + 1);
  //   };
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 px-6 py-3 text-white rounded-2xl m-5 hover:bg-blue-700"
      >
        Click Me
      </button>
      <p className="p-2 text-2xl">Clicked {count} times</p>
    </div>
  );
};

export default Button;
