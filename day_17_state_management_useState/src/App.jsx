import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <div className="m-5">
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="p-5 border-4 m-5"
          type="text"
          value={text}
          placeholder="type something"
        />
        <p>You type is : {text}</p>
      </div>
    </>
  );
}

export default App;
