import React, { useState, useRef, useEffect } from 'react';

const BlogPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const contentRef = useRef(null);

  // Auto-resize function
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = 'auto'; // reset height
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`; // set to scrollHeight
    }
  }, [content]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
          className="w-full text-3xl font-bold text-gray-800 mb-4 placeholder-gray-400 outline-none"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full text-gray-600 text-lg mb-6 placeholder-gray-400 outline-none resize-none"
        />

        <textarea
          ref={contentRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content here..."
          className="w-full text-gray-800 text-base leading-relaxed outline-none resize-none placeholder-gray-400 overflow-hidden"
        />
      </div>
    </div>
  );
};

export default BlogPage;

