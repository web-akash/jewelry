import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const RootLayOut = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default RootLayOut;
