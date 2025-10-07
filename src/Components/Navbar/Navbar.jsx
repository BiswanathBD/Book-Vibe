import React from "react";
import "./navbar.css";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 flex gap-4 justify-between items-center py-4">
      <Link to="/">
        <h3 className="text-2xl font-bold cursor-pointer flex">
          B<span className="text-green-500">OO</span>K Vibe
        </h3>
      </Link>

      <ul className="md:flex gap-1 text-sm items-center text-neutral-600 nav-option hidden">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Listed Books</li>
        <li>Pages to Read</li>
      </ul>
      <div className="flex gap-2 text-sm nav-btn">
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
