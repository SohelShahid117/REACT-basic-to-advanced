import { Route, Routes } from "react-router";
import "./App.css";
import Categories from "./components/Categories";
import User from "./components/User";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-950 flex flex-col items-center  p-5">
      <h1 className="text-3xl font-semibold">Optional Route Segment</h1>

      <div className="space-x-5 mt-5">
        <a href="/categories" className="text-blue-500 font-bold underline">
          Categories(No Language)
        </a>
        <a href="/en/categories" className="text-blue-500 font-bold underline">
          Categories(with Language)
        </a>
        <a href="/users/:id" className="text-blue-500 font-bold underline">
          User Profile
        </a>
        <a href="/users/:id/edit" className="text-blue-500 font-bold underline">
          Edit User
        </a>
      </div>

      {/* now routing here */}
      <div className="mt-12 w-full max-w-3xl">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path=":lang?/categories" element={<Categories />} />
          <Route path="users/:userId/edit?" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
