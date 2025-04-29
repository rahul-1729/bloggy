// import './App.css';
// import Navbar from './components/Navbar';
// import Card from './components/Cards';
// import Blog from './components/Blogpage';
// import React, { useState} from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function Home({ blogs }) {
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <div className='w-screen bg-white flex flex-wrap gap-6'>
//         {blogs.map((blog, index) => (
//             <Card key={index} title={blog.title} description={blog.description} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// function App() {
//   const [blogs, setBlogs] = useState([]);

//   const addBlog = (newBlog) => {
//     setBlogs((prev) => [...prev, newBlog]);
//   };
//   return (
//     <BrowserRouter>
//       <div className='h-screen w-screen bg-white overflow-x-hidden'>
//         <Routes>
//         <Route path="/" element={<Home blogs={blogs} />} />
//         <Route path="/write" element={<Blog addBlog={addBlog} />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Cards';
import Blog from './components/Blogpage';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Home component updated to accept deleteBlog
function Home({ blogs, deleteBlog }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className='w-screen bg-white flex flex-wrap gap-6'>
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              onDelete={deleteBlog}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function App() {
  const [blogs, setBlogs] = useState([]);

  // Add blog with unique ID
  const addBlog = (newBlog) => {
    const blogWithId = { ...newBlog, id: Date.now() }; // Simple unique ID
    setBlogs((prev) => [...prev, blogWithId]);
  };

  // Delete blog by ID
  const deleteBlog = (idToDelete) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== idToDelete);
    setBlogs(updatedBlogs);
  };

  return (
    <BrowserRouter>
      <div className='min-h-screen w-screen bg-white overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<Home blogs={blogs} deleteBlog={deleteBlog} />} />
          <Route path="/write" element={<Blog addBlog={addBlog} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
