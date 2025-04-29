import React from "react";
import { Trash2 } from "lucide-react";

const Card = ({ title, description}) => {
  return (
    <div className="bg-gray- rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col h-1/3 w-1/4 ">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      <div className="flex justify-end items-center gap-2 mt-4 h-1/5">
       
        <button class="bg-blue-600 text-white hover:bg-gray-100 hover:text-gray-900  py-1 px-4 border border-blue-700 hover:border-blue-200 rounded">
        Edit
        </button>
   
        <button class="bg-transparent hover:bg-gray-100 hover:bg-red-700/10 hover:text-gray-900  py-1 px-4 border border-red-700 hover:border-red-400 rounded hover:text-red-700">
        Delete
        </button>
      
      </div>
    </div>
  );
};

export default Card;
