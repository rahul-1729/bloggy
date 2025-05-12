import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Cards';
import Blog from './components/Blogpage';
import Login from './components/Login';
import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';

function Home({ blogs, deleteBlog, search, setSearch }) {
  const navigate = useNavigate();
  const { isNightMode } = useContext(ThemeContext);

  const handleEdit = (blog) => {
    navigate('/write', { state: { blogToEdit: blog } });
  };

  const filtered = blogs.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar setSearch={setSearch} />  
      <div className={`container mx-auto px-4 py-8 ${isNightMode ? 'bg-gray-900 text-white' : 'bg-transparent text-black'}`}>
        <div className={"w-screen flex flex-wrap gap-6 bg-tranparent"}>
          {filtered.map((blog) => (
            <Card
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              onDelete={deleteBlog}
              onEdit={() => handleEdit(blog)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function App() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const { isNightMode } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addBlog = (newBlog) => {
    if (newBlog.id) {
      // edit mode
      setBlogs((prev) => prev.map(b => b.id === newBlog.id ? newBlog : b));
    } else {
      // add mode
      const blogWithId = { ...newBlog, id: Date.now() };
      setBlogs((prev) => [...prev, blogWithId]);
    }
  };

  const deleteBlog = (idToDelete) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== idToDelete);
    setBlogs(updatedBlogs);
  };

  return (
    <BrowserRouter>
      <div className={`min-h-screen w-screen overflow-x-hidden ${isNightMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-green-100 via-white to-yellow-100 text-black'}`}>
        <div className={`w-1/3 aspect-square rounded-full bg-gradient-to-tr  ${isNightMode ?"from-pink-500 via-indigo-500 to-gray-900":""}  absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 blur-2xl`}></div>

        <Routes>
          {!isLoggedIn ? (
            <Route path="/*" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          ) : (
            <>
              <Route path="/" element={<Home blogs={blogs} deleteBlog={deleteBlog} search={search} setSearch={setSearch} />} />
              <Route path="/write" element={<Blog addBlog={addBlog} />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;