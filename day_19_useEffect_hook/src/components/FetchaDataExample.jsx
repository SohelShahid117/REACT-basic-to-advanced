import React, { useEffect, useState } from "react";

const FetchaDataExample = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  console.log(data);
  return (
    <div>
      <h1 className="text-xl">
        Data Fetching From :{" "}
        <a
          className="underline font-bold"
          href="https://jsonplaceholder.typicode.com/posts"
        >
          JSON Placeholder
        </a>
      </h1>
      <p>Data length : {data.length}</p>
      <ul className="list-decimal p-5">
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchaDataExample;
