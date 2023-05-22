import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";

const BlogList = ({ blogs, onBlogClick }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Link
          to={`/blogs/${blog.id}`}
          key={blog.id}
          onClick={() => onBlogClick(blog)}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <Blog blog={blog} />
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
