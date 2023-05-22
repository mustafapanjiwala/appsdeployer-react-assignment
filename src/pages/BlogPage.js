import React from "react";

const BlogPage = ({ blog, onBackButtonClick }) => {
  return (
    <div className="blog-page">
      <div className="back-button">
        <button onClick={onBackButtonClick}>Back to Blog List</button>
      </div>
      <div>
        <h2>{blog.title}</h2>

        <img src={blog.imageUrl} alt={blog.title} className="blog-page-image" />
        <p className="blog-content">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPage;
