import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
    alert(`hi ${name}`);
    console.log(name, email, message);
    alert("thanks for submitting the form");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-md bg-white text-black p-5 rounded space-y-5"
    >
      <div>
        <label className="block mb-1 text-xl" htmlFor="name">
          Name :
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="enter your name"
          className="border p-2 rounded-md"
        />
      </div>
      <div>
        <label className="block mb-1 text-xl" htmlFor="email">
          Email :
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          id="email"
          placeholder="enter your email"
          className="border p-2 rounded-md"
        />
      </div>
      <div>
        <label className="block mb-1 text-xl" htmlFor="message">
          Message :
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
          className="border"
          name="message"
          id="message"
          placeholder="type your message..."
          rows="5"
          cols="50"
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-md cursor-pointer text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

//10 min
