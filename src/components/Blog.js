import React from "react";

const Blog = ({ blog }) => {
  const truncatedContent =
    blog.content.length > 100
      ? blog.content.slice(0, 100) + "..."
      : blog.content;

  return (
    <div className="blog-card">
      <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
      <h3>{blog.title}</h3>
      <p className="blog-category">{blog.category}</p>
      <p>{truncatedContent}</p>
      <a href={`/blogs/${blog.id}`}>Read More</a>
    </div>
  );
};

export default Blog;
