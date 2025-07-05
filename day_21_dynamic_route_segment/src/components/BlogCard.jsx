import React from "react";
// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router";
import BlogDetails from "../pages/BlogDetails";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gray-50 shadow-md p-5 m-5 rounded-md cursor-pointer hover:-translate-y-1.5 duration-200 transition-all">
      <h1 className="text-2xl my-5">{blog.title}</h1>
      <p className="text-md truncate mb-5">{blog.body.slice(0, 100)} ... </p>
      <Link
        to={`/blogs/${blog.id}`}
        className="bg-blue-400 text-white px-6 py-3 mt-5 mb-0 text-xl font-semibold rounded-md"
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
