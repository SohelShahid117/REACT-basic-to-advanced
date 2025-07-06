import { Link, NavLink, Route, Routes } from "react-router";
import "./App.css";
import Files from "./components/Files";

function App() {
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sit!
      </h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          modi alias! Deleniti numquam quas ipsa ea obcaecati neque inventore
          facilis!
        </p>
        <p>Hello world</p>
      </div>
      <a href="/">Click Me</a>
      <nav className="flex gap-5">
        <Link
          to="/files/documents"
          className="bg-blue-500 cursor-pointer text-white px-6 py-3"
        >
          Document
        </Link>
        <Link
          to="/files/natureImg"
          className="bg-blue-500 cursor-pointer text-white px-6 py-3"
        >
          Nature Img
        </Link>
        <Link
          to="/files/vdoTtrl"
          className="bg-blue-500 cursor-pointer text-white px-6 py-3"
        >
          Video Tutorial
        </Link>
      </nav>

      {/* routing */}
      <Routes>
        <Route path="/files/*" element={<Files />} />
      </Routes>
    </div>
  );
}

export default App;
