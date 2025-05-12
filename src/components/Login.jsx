import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import aeroplane from '../assets/aeroplane.png';
import earth from '../assets/earth.png';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === 'abc@gmail.com' && formData.password === 'password123') {
      onLogin();
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center p-7 overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        className="absolute top-[100px] left-0 w-40 sm:w-48 md:w-56 lg:w-64 z-0 animate-wiggle"
      >
        <circle cx="50" cy="50" r="30" fill="#B0E0E6" />
        <circle cx="80" cy="50" r="40" fill="#B0E0E6" />
        <circle cx="110" cy="60" r="30" fill="#B0E0E6" />
        <circle cx="140" cy="50" r="40" fill="#B0E0E6" />
        <circle cx="170" cy="50" r="30" fill="#B0E0E6" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        className="absolute top-16 left-[150px] w-40 sm:w-48 md:w-56 lg:w-64 z-10 animate-wiggle"
      >
        <circle cx="50" cy="50" r="30" fill="#F5F7F7" />
        <circle cx="80" cy="50" r="40" fill="#F5F7F7" />
        <circle cx="110" cy="60" r="30" fill="#F5F7F7" />
        <circle cx="140" cy="50" r="40" fill="#F5F7F7" />
        <circle cx="170" cy="50" r="30" fill="#F5F7F7" />
      </svg>

      <img
        src={aeroplane}
        alt="Aeroplane"
        className="absolute transform top-[110px] w-48 sm:w-40 md:w-48 lg:w-56 z-10 animate-move-left-to-right"
      />

      <img
        src={earth}
        alt="Earth"
        className="absolute bottom-0"
      />

      <div className="bg-white/60 backdrop-blur p-8 rounded-lg shadow-xl w-full max-w-md z-20">
        <h2 className="text-2xl font-bold text-center text-gray-600">Share your experience with <span className="text-indigo-500">Bloggy</span></h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-700"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-md font-medium text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
