/*
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello Sohel</h1>
    </>
  );
}

export default App;
*/
/*

function App() {
  return <div>I m a Software Engr</div>;
}
export default App;
*/

import "./App.css";
import Button from "./Button";
const App = () => {
  const name = "Shahid";
  return (
    <>
      <h1>Hello World: {name}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, vero
        <br />
        deserunt error quod rem perspiciatis hic dolores recusandae molestiae
        ipsam illo dolor laborum voluptatem fugit praesentium vitae iste? Nemo
        impedit rem ducimus, architecto veritatis mollitia qui officia at odit,
        iusto amet eveniet rerum ipsum repellendus repellat. Voluptatum harum
        ratione autem.
      </p>
      <Button />
    </>
  );
};

export default App;
