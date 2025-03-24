import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center h-screen px-8 sm:px-16 md:px-32 lg:px-50">
      <p
        className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pink-600 mb-4 ps-2"
        style={{ fontFamily: '"Montserrat", sans-serif' }}
      >
        Hello, I'm
      </p>
      <h1
        className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] text-stone-50"
        style={{ fontFamily: '"Montserrat", sans-serif' }}
      >
        Filip Stojanov
      </h1>
      <p
        className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 mt-10 ps-4"
        style={{ fontFamily: '"DM Serif Text", serif' }}
      >
        <span className="text-stone-50">front-end developer</span> building
        modern, responsive, and user-friendly web applications.
      </p>
      <div className="mt-10 ps-4 flex gap-4">
        <button className="px-6 py-2 border text-stone-50 border-stone-50 bg-transparent hover:bg-pink-600 hover:border-transparent hover:text-stone-50 active:bg-pink-600 active:border-transparent active:text-stone-50 transition duration-300 rounded-full">
          Resume
        </button>
        <button className="px-6 py-2 border text-stone-50 border-stone-50 bg-transparent hover:bg-pink-600 hover:border-transparent hover:text-stone-50 active:bg-pink-600 active:border-transparent active:text-stone-50 transition duration-300 rounded-full">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;
