import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center p-10 backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl border border-white/20">
        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-white/80 mt-3 max-w-md mx-auto">
          The page you are looking for might have been removed or doesn't exist.
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-purple-100 transition duration-300"
        >
          Go Home
        </button>

        {/* Decorative glow */}
        <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 -z-10 top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-30 -z-10 bottom-10 right-10"></div>
      </div>
    </div>
  );
};

export default Error;
