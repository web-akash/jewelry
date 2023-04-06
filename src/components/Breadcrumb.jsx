import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";
const Breadcrumb = ({ titel }) => {
  return (
    <>
      <ContainerBox>
        <h1 className="mt-9 font-dm text-5xl font-bold text-primery lg:mt-32">
          {titel}
        </h1>
        <p className="mt-3 flex items-center">
          <Link to="/">Home</Link> <MdOutlineArrowForwardIos />
          {window.location.pathname.split("/")[1]}
        </p>
      </ContainerBox>
    </>
  );
};

export default Breadcrumb;
