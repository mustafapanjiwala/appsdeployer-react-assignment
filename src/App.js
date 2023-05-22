import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPage from "./pages/BlogPage";
import "./App.css";
import blogsData from "./data/blogs.json";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchCategory, setSearchCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledBlogs = shuffleArray(blogsData);
    setBlogs(shuffledBlogs);
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackButtonClick = () => {
    setSelectedBlog(null);
    navigate("/");
  };

  const handleCategorySearch = (event) => {
    setSearchCategory(event.target.value);
  };

  const filteredBlogs = searchCategory
    ? blogs.filter((blog) => blog.category === searchCategory)
    : blogs;

  return (
    <>
      <div className="app">
        {selectedBlog ? (
          <div>
            <BlogPage
              blog={selectedBlog}
              onBackButtonClick={handleBackButtonClick}
            />
          </div>
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <h1>Blogger App</h1>
                  <div className="category-filter">
                    <label htmlFor="category-select">Search by Category:</label>
                    <select
                      id="category-select"
                      value={searchCategory}
                      onChange={handleCategorySearch}
                    >
                      <option value="">All Categories</option>
                      <option value="Sports">Sports</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Technology">Technology</option>
                    </select>
                  </div>
                  <BlogList
                    blogs={filteredBlogs}
                    onBlogClick={handleBlogClick}
                  />
                </>
              }
            />
          </Routes>
        )}
      </div>
    </>
  );
};

export default App;
