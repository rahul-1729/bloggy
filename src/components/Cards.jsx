import React, { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

const Card = ({ id, title, description, onDelete, onEdit }) => {
    const { isNightMode } = useContext(ThemeContext);

    const handleDelete = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this blog?");
        if (isConfirmed) {
          onDelete(id);  
        }
      };

  return (
    <div className={`rounded-lg  shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col min-w-[350px] h-1/3 w-1/4 z-10 backdrop-blur ${isNightMode ? 'bg-gray-800/40 border-2 border-gray-800/40 border-r-white/50 border-b-white/50 text-white hover:bg-gray-800' : 'bg-white shadow-md border text-black'}`}>
      <div className="flex-grow">
        <h3 className={`text-xl truncate overflow-hidden whitespace-nowrap font-semibold mb-2 ${isNightMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`mb-6 truncate overflow-hidden whitespace-nowrap ${isNightMode ? 'text-gray-300' : 'text-gray-600'}`}>
  {description}
</p>

      </div>
      <div className="flex justify-end items-center gap-2 mt-4 h-1/5">
        <button 
          className={`py-1 px-4 text-white ${isNightMode ? "hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] bg-indigo-500 hover:bg-indigo-600": "bg-zinc-800 hover:bg-zinc-700"} rounded`}
          onClick={() => onEdit(id)}
        >
          Edit
        </button>
   
        <button 
          className={`py-1 px-4 border rounded ${isNightMode ? 'bg-transparent hover:bg-red-700/10 text-red-500 border-red-500 hover:border-red-400' : 'bg-transparent hover:bg-gray-100 hover:bg-red-700/10 hover:text-gray-900 border-red-700 hover:border-red-400 hover:text-red-700'}`}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
