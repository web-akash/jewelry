import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Mypagination from "../components/Mypagination";
import ContainerBox from "../components/ContainerBox";
import Flex from "../components/Flex";
import ProductFilter from "../components/ProductFilter";
import Leftsidebar from "../components/Leftsidebar";
const Product = () => {
  let [show, setShow] = useState(12);
  let handelShowNubmer = (e) => {
    console.log(+e.target.value);
    setShow(+e.target.value);
  };
  return (
    <>
      <Breadcrumb titel="Products" />
      <ContainerBox>
        <Flex className=" mt-12 flex gap-x-12">
          <div className="w-[25%] ">
            <Leftsidebar />
          </div>
          <div className="w-[75%]">
            <Flex className="mb-16 flex items-center justify-end gap-3 ">
              <ProductFilter titel="sort by:">
                <option selected>Featured</option>
                <option value="US">Best Product</option>
                <option value="US">Good Product</option>
              </ProductFilter>
              <ProductFilter onChange={handelShowNubmer} titel="Show:">
                <option selected>12</option>
                <option>24</option>
                <option>48</option>
              </ProductFilter>
            </Flex>

            <div>
              <Mypagination itemsPerPage={show} />
            </div>
          </div>
        </Flex>
      </ContainerBox>
    </>
  );
};

export default Product;
