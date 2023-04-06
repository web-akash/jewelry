import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
const RootLayOut = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Outlet />
    </>
  );
};

export default RootLayOut;
