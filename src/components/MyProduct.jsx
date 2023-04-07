import React from "react";
import Batch from "./Batch";
import Images from "./Images";
import Flex from "./Flex";
import { GiSelfLove } from "react-icons/gi";
import { SiConvertio } from "react-icons/si";
import { GrShop } from "react-icons/gr";

const Product = ({ imgsrc, batch, producTitel, productPrice, brand }) => {
  return (
    <>
      <div className="group relative w-full overflow-hidden ">
        <Images imgsrc={imgsrc} />
        {batch && (
          <Batch
            className="absolute top-5 left-5 bg-primery py-2 px-8 font-dm text-sm text-white"
            item="New"
          />
        )}
        <div className="absolute  bottom-[-50%] w-full  bg-[#F5F5F5] px-[30px] py-6 font-bold transition-all delay-100 group-hover:bottom-0">
          <Flex className="ltr flex items-center justify-end gap-4 font-dm text-base ">
            <div className="ltr">Add to Wish List</div>
            <GiSelfLove />
          </Flex>
          <Flex className=" my-5 flex items-center justify-end  gap-4">
            <div>Compare</div>
            <SiConvertio />
          </Flex>
          <Flex className="flex items-center  justify-end  gap-4">
            <div>Add to Cart</div>
            <GrShop />
          </Flex>
        </div>
      </div>
      <div className=" w-full bg-white py-5">
        <h2 className="text-[#262626 ] flex justify-between font-dm text-xl font-bold text-[#262626]">
          {producTitel}
          <span className="text-[#767676]">{productPrice}</span>
        </h2>
        <p className="mt-5 text-base">{brand}</p>
      </div>
    </>
  );
};

export default Product;
