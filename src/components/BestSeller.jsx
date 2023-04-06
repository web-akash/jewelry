import React from "react";
import ContainerBox from "./ContainerBox";
import Titel from "./Titel";
import Product from "./MyProduct";
import Flex from "./Flex";

const Bestseller = () => {
  return (
    <>
      <ContainerBox>
        <div className="relative mt-8 lg:mt-32">
          <Titel titel="Our Bestsellers " />
        </div>
        <Flex className="flex flex-wrap justify-between  gap-y-5">
          <div className="justify-between  sm:max-w-[300px] lg:max-w-[370px] ">
            <Product imgsrc="assets/Image (1).png" batch={true} />
          </div>
          <div className="justify-between  sm:max-w-[300px] lg:max-w-[370px]">
            <Product imgsrc="assets/Image (2).png" />
          </div>
          <div className="justify-between  sm:max-w-[300px] lg:max-w-[370px]">
            <Product imgsrc="assets/31_grande 1.png" batch={true} />
          </div>
          <div className="justify-between  sm:max-w-[300px] lg:max-w-[370px]">
            <Product imgsrc="assets/product1.png" />
          </div>
        </Flex>
      </ContainerBox>
    </>
  );
};

export default Bestseller;
