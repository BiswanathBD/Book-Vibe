import React from "react";
import heroImg from "../../assets/pngwing 1.png";

const Hero = () => {
  return (
    <div className="container mx-auto p-10 lg:p-20 lg:flex justify-center items-center mb-10 mt-4 bg-gray-100 rounded-2xl">
      <div className="flex-1">
        <h1 className="text-6xl leading-snug font-semibold">
          Books to freshen up your bookshelf
        </h1>
        <button className="px-4 py-2 bg-green-500 rounded-sm text-white font-semibold mt-12">
          View The List
        </button>
      </div>

      <div className="flex-1 flex justify-end">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
