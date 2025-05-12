import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function Search({ setSearch }) {
  const navigate = useNavigate();
  const { isNightMode, toggleTheme } = useContext(ThemeContext);
  const [deco, setDeco] = useState("");
  const [decoicon, setDecoicon] = useState("gray");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFocus = () => {
    setDeco(isNightMode ? "border border-sky-500" : "border border-black");
    setDecoicon(isNightMode ? "skyblue" : "black");
  };

  const handleBlur = () => {
    setDeco("");
    setDecoicon("gray");
  };

  const handleWriteClick = () => {
    navigate('/write');
  };

  return (
    <div
      className={`w-screen h-[80px] px-10 py-1 flex justify-between items-center sticky top-0 z-20 bg-transparent ${isNightMode ? ' text-white' : ' text-black'}`}
    >
      <div
        onClick={handleWriteClick}
        className={`cursor-pointer whitespace-nowrap py-1 px-4 text-white text-sm font-bold rounded ${isNightMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-zinc-800 hover:bg-zinc-700'}`}
      >
        Write a Blog...
      </div>

      <div className={`w-2/5 h-3/5 rounded-full ${isNightMode ? "bg-gray-600/40":"bg-white"} flex p-4 items-center gap-5 ${deco}`}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={decoicon}
            className="text-gray-white size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <input
          type="text"
          className={`bg-transparent focus:outline-none placeholder-gray-500 w-full ${isNightMode ? 'text-white' : 'text-black'}`}
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleSearch}
        />
      </div>

      {/* Theme Toggle Switch */}
      <div
        onClick={toggleTheme}
        className={`w-14 h-8 ${isNightMode ? "bg-gray-600/40 border-2 border-gray-300":"bg-white border border-zinc-400 shadow shadow-md"} dark:bg-gray-600 rounded-full flex items-center px-1 cursor-pointer relative transition-colors `}
      >
        {/* Icons on sides */}
        <SunIcon className="w-4 h-4 text-yellow-300 absolute left-1" />
        <MoonIcon className="w-4 h-4 text-blue-500 absolute right-1" />

        {/* Sliding Thumb */}
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isNightMode ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
    </div>
  );
}

export default Search;
