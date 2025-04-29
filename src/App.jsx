import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogPage from './components/Blogpage';
import BlogList from './components/BlogList';

function App() {
  const [blogs, setBlogs] = useState([]);
  

  const addBlog = (newBlog) => {
    console.log('Adding new blog:', newBlog);
    setBlogs([...blogs, newBlog]);
    console.log('Updated blogs array:', [...blogs, newBlog]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogList blogs={blogs} />} />
          <Route path="/write" element={<BlogPage addBlog={addBlog} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 