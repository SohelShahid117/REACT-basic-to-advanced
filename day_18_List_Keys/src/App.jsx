import "./App.css";

function App() {
  const items = ["A", "B", "C"];
  return (
    <>
      <div>
        <h1>206. Handling Lists and Keys in React</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="">
              {index + 1} {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
