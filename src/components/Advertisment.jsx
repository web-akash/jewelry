import React from "react";
import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";
import Flex from "./Flex";
import Images from "./Images";

const Advertisment = () => {
  return (
    <>
      <ContainerBox>
        <Flex className="flex">
          <div className="w-4/2">
            <Link to="#">
              <Images imgsrc="assets/Ad_1.png" />
            </Link>
          </div>
          <div className="4/2 ">
            <Link to="#">
              <Images className=" block" imgsrc="assets/Ad_2.png" />
            </Link>
            <Link>
              <Images className="mt-[5%] block" imgsrc="assets/Ad_3.png" />
            </Link>
          </div>
        </Flex>
      </ContainerBox>
    </>
  );
};

export default Advertisment;
