import "./App.css";

function App() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  // const listItem = products.map((p) => <li key={p.id}>{p.title}</li>);

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
            className={`${p.isFruit ? "text-green-500" : "text-blue-500"}`}
          >
            {p.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
