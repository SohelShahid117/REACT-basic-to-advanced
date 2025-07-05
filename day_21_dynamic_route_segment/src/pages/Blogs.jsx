import React, { useEffect, useState } from "react";
import BlogCard from "./../components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //   useEffect(
  //     () =>
  //       fetch("https://jsonplaceholder.typicode.com/posts")
  //         .then((res) => res.json())
  //         .then((result) => setBlogs(result))
  //         .catch((err) => console.log(err)),
  //     []
  //   );

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };

    fetchBlogs();
  }, []);
  console.log(blogs);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold p-2 border-l-4 border-blue-600 m-5">
        All Blog Posts
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
