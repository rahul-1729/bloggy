import React from "react";

const Card = ({ id, title, description, onDelete, onEdit }) => {
    const handleDelete = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this blog?");
        if (isConfirmed) {
          onDelete(id);  
        }
      };
  return (
    <div className=" rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col h-1/3 w-1/4 ">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      <div className="flex justify-end items-center gap-2 mt-4 h-1/5">
       
        <button 
        className="bg-blue-600 text-white hover:bg-gray-100 hover:text-gray-900  py-1 px-4 border border-blue-700 hover:border-blue-200 rounded"
        onClick={() => onEdit(id)}
        >
        Edit
        </button>
   
        <button 
        className="bg-transparent hover:bg-gray-100 hover:bg-red-700/10 hover:text-gray-900  py-1 px-4 border border-red-700 hover:border-red-400 rounded hover:text-red-700"
        onClick={() => handleDelete(id)}
        >
        Delete
        </button>
      
      </div>
    </div>
  );
};

export default Card;
