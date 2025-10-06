import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
