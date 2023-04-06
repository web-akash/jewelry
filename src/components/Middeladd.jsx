import React from "react";
import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";
import Images from "./Images";

const Middeladd = () => {
  return (
    <ContainerBox>
      <Link to="#">
        <Images className="mt-10 lg:mt-32" imgsrc="assets/middeladd.png" />
      </Link>
    </ContainerBox>
  );
};

export default Middeladd;
