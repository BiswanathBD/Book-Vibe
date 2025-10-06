import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-sky-500 mt-10 p-20 text-white justify-between items-center gap-10 flex flex-wrap">
      <h1 className="text-4xl font-bold cursor-pointer flex">
        B<span className="text-green-400">OO</span>K Vibe
      </h1>
      <ul className="font-medium md:text-center grid gap-2 w-full mx-4 md:w-1/3 footer-option">
        <li>Home</li>
        <li>Listed Books</li>
        <li>Pages to Read</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex gap-4 text-3xl">
        <FaFacebookSquare />
        <IoLogoYoutube />
        <FaTwitter />
      </div>
    </div>
  );
};

export default Footer;
