// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const BlogPage = ({ addBlog }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [content, setContent] = useState('');
//   const contentRef = useRef(null);
//   const navigate = useNavigate();

//   const handleSave = () => {
//     if (!title.trim() || !description.trim()) {
//       alert("Please fill in both the title and description.");
//       return;
//     }
  
//     addBlog({ title: title.trim(), description: description.trim(), content: content.trim() });
//     navigate('/');
//   };
  

//   // Auto-resize function
//   useEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.style.height = 'auto'; // reset height
//       contentRef.current.style.height = `${contentRef.current.scrollHeight}px`; // set to scrollHeight
//     }
//   }, [content]);

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10 w-screen flex flex-col items-center">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title..."
//           className="w-full text-3xl font-bold text-gray-800 mb-4 placeholder-gray-400 outline-none"
//         />

//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Description"
//           className="w-full text-gray-600 text-lg mb-6 placeholder-gray-400 outline-none resize-none"
//         />

//         <textarea
//           ref={contentRef}
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Write your content here..."
//           className="w-full text-gray-800 text-base leading-relaxed outline-none resize-none placeholder-gray-400 overflow-hidden"
//         />
//       </div>
       
//     <button 
//     className="bg-blue-700 text-white hover:bg-blue-500  py-1 px-4 border rounded mt-4"
//     onClick={handleSave}
//     >
//     Save
//     </button>
     
//     </div>
//   );
// };

// export default BlogPage;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BlogPage = ({ addBlog }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const blogToEdit = state?.blogToEdit;

  const [title, setTitle] = useState(blogToEdit?.title || '');
  const [description, setDescription] = useState(blogToEdit?.description || '');
  const [content, setContent] = useState(blogToEdit?.content || '');
  const contentRef = useRef(null);

  const handleSave = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both the title and description.");
      return;
    }

    const blogData = {
      id: blogToEdit?.id, // If undefined, App will treat it as new
      title: title.trim(),
      description: description.trim(),
      content: content.trim()
    };

    addBlog(blogData);
    navigate('/');
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = 'auto';
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 w-screen flex flex-col items-center">
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

      <button
        className="bg-blue-700 text-white hover:bg-blue-500 py-1 px-4 border rounded mt-4"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default BlogPage;
