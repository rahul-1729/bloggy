
import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const BlogPage = ({ addBlog }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isNightMode } = useContext(ThemeContext);
  const blogToEdit = state?.blogToEdit;

  const [title, setTitle] = useState(blogToEdit?.title || '');
  const [description, setDescription] = useState(blogToEdit?.description || '');
  const [content, setContent] = useState(blogToEdit?.content || '');

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const contentRef = useRef(null);

  const adjustHeight = (ref) => {
    if (ref && ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight(titleRef);
    adjustHeight(descRef);
    adjustHeight(contentRef);
  }, [title, description, content]);

  const handleSave = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both the title and description.");
      return;
    }

    const blogData = {
      id: blogToEdit?.id,
      title: title.trim(),
      description: description.trim(),
      content: content.trim()
    };

    addBlog(blogData);
    navigate('/');
  };

  return (
    <div className={`z-10 min-h-screen px-6 py-10 w-screen flex flex-col items-center ${isNightMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-green-100 via-white to-yellow-100 text-black text-black'}`}>
      <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-md ${isNightMode ? 'bg-gray-800' : 'bg-white'}`}>
        
        {/* Title Textarea */}
        <textarea
          ref={titleRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
          className={`w-full text-3xl font-bold mb-4 placeholder-gray-400 outline-none resize-none overflow-hidden ${isNightMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        />

        {/* Description Textarea */}
        <textarea
          ref={descRef}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className={`w-full text-lg mb-6 placeholder-gray-400 outline-none resize-none overflow-hidden ${isNightMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        />

        {/* Content Textarea */}
        <textarea
          ref={contentRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content here..."
          className={`w-full text-base leading-relaxed outline-none resize-none placeholder-gray-400 overflow-hidden ${isNightMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        />
      </div>

      <button
        className={`py-1 px-4 rounded mt-4 font-bold ${isNightMode ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-zinc-700 hover:bg-zinc-600 text-white'}`}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default BlogPage;

