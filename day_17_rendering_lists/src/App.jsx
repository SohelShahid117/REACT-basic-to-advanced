import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  // const listItem = products.map((p) => <li key={p.id}>{p.title}</li>);

  const myButton = () => {
    alert("hello Sohel");
  };

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="text-4xl bg-orange-600 font-semibold p-5 text-white">
        <h1>Hello World</h1>
      </div>
      {/* <ul>{listItem}</ul> */}
      <ul>
        {products.map((p) => (
          // <li key={p.id} style={{ color: p.isFruit ? "green" : "red" }}>
          <li
            key={p.id}
            className={`${
              p.isFruit ? "text-green-500" : "text-blue-500"
            } text-3xl mb-4`}
          >
            {p.title}
          </li>
        ))}
      </ul>

      <button
        onClick={myButton}
        className="bg-blue-400 px-4 py-2 rounded-2xl text-white text-2xl hover:scale-110 block"
      >
        Click Me
      </button>

      <button
        onClick={handleClick}
        className="bg-orange-400 my-5 px-4 py-2 rounded-2xl text-white text-2xl hover:scale-110 block"
      >
        Clicked <span className="text-black">{count}</span> itmes
      </button>
      <button
        onClick={handleClick}
        className="bg-blue-600 my-5 px-4 py-2 rounded-2xl text-white text-2xl hover:scale-110 block"
      >
        Clicked <span className="text-black">{count}</span> itmes
      </button>
      <p>Count value is : {count}</p>
    </>
  );
}

export default App;
