import React from "react";
import "./navbar.css";
import { GiBookCover } from "react-icons/gi";


const Navbar = () => {
  return (
    <div className="container mx-auto px-4 flex gap-4 justify-between items-center py-4">
      <h3 className="text-2xl font-bold cursor-pointer flex">
        B
        <span className="text-green-600 text-3xl">
          <GiBookCover />
        </span>
        K Vibe
      </h3>
      <ul className="flex gap-2 text-sm items-center text-neutral-600">
        <li>Home</li>
        <li>Listed Books</li>
        <li>Pages to Read</li>
      </ul>
      <div className="flex gap-2 text-sm">
        <button className="bg-gradient-to-r from-green-500 to-green-400">
          Log In
        </button>
        <button className="bg-gradient-to-r from-sky-400 to-sky-500">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
