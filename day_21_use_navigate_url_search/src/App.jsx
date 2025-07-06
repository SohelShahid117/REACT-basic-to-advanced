import { Link, NavLink, useNavigate } from "react-router";
import "./App.css";

function App() {
  let navigate = useNavigate();
  return (
    <>
      <div>
        <NavLink
          to="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded m-5 font-bold"

          // className={({ isActive }) =>
          //   isActive ? "text-red-500" : "text-black"
          // }
        >
          Login
        </NavLink>
        <button
          onClick={() => navigate("/logout")}
          className="bg-blue-500 text-white px-6 py-3 rounded m-5 font-bold"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default App;
