import React, { useState } from "react";
import { useSearchParams } from "react-router";

const BlogSearch = () => {
  const blogs = [
    {
      id: 1,
      title: "understanding react",
      content: "react is a javascript library",
    },
    { id: 2, title: "learn tailwind css", content: "tailwind pro" },
    { id: 3, title: "javascript basic", content: "javascript expert" },
  ];

  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const searchQuery = searchParams.get("q") || "";
  console.log(searchQuery);

  const [searchItems, setSearchItems] = useState(searchQuery);
  console.log(searchItems);

  const filterBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filterBlogs);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchItems });
  };
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl text-center font-semibold mt-5">
        Blog search functionality using URL search params
      </h1>

      {/* search input & btn */}
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center"
      >
        <input
          value={searchItems}
          onChange={(e) => setSearchItems(e.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="search blogs... "
          className="border p-5 mt-5 rounded-xl focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-4 text-xl bg-blue-500 rounded-md text-white ml-5"
        >
          Search
        </button>
      </form>

      <div>
        {/* {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-5 shadow-md m-8 border-2 border-blue-200 rounded-lg"
          >
            <h1 className="text-xl font-bold text-gray-900">{blog.title}</h1>
            <p className="text-gray-700 text-lg">{blog.content}</p>
          </div>
        ))} */}

        {filterBlogs.length > 0 ? (
          filterBlogs.map((blog) => (
            <div
              key={blog.id}
              className="p-5 shadow-md m-8 border-2 border-blue-200 rounded-lg"
            >
              <h1 className="text-xl font-bold text-gray-900">{blog.title}</h1>
              <p className="text-gray-700 text-lg">{blog.content}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 text-2xl">No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default BlogSearch;
