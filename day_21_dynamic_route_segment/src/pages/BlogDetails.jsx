import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const BlogDetails = () => {
  let params = useParams();
  console.log(params);
  //   const [blog, setBlog] = useState(null);
  const [blog, setBlog] = useState({});
  /*
    useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };

    fetchBlog();
  }, [params.id]);
  console.log(blog);
  */

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogData();
  }, [params.id]);
  console.log(blog);
  if (!blog)
    return (
      <p className="text-5xl text-red-400 text-center bg-orange-400">
        Loading...
      </p>
    );
  return (
    <>
      <h1 className="text-3xl border-b-4 border-blue-700 py-2 inline-block w-auto mx-auto">
        Blog details page
      </h1>

      <div className="bg-gray-50 p-5 flex flex-col gap-5 my-5 justify-center items-center shadow-md w-1/2 mx-auto">
        <h2 className="text-3xl font-bold">{blog?.title}</h2>
        <p>{blog?.body}</p>

        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-6 py-3 rounded-md text-white inline-block w-42 text-2xl text-center w-2/3 mb-0"
        >
          Go back
        </Link>
      </div>
    </>
  );
};

export default BlogDetails;
