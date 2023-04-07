import React, { useEffect } from "react";
import ContainerBox from "./ContainerBox";
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { RxReload } from "react-icons/rx";

import Flex from "./Flex";
import { useState } from "react";
import axios from "./Axios";
import Heading from "./Heading";

const BannerService = () => {
  let [bannarS, setBannerS] = useState({});
  let fatchdata = async () => {
    let res = await axios.get("/bannerService");
    setBannerS(res.data);
  };

  useEffect(() => {
    fatchdata();
  });
  return (
    <>
      <div className="-mt-2 bg-[#F0F0F0] py-8 font-dm text-[10px] md:text-base">
        <ContainerBox>
          <Flex className="flex justify-between">
            <Flex className="flex items-center gap-4">
              <RiNumber2 />
              <Heading as="p" titel={bannarS.one} />
            </Flex>
            <Flex className="flex items-center gap-4">
              <FaTruck />
              <Heading as="p" titel={bannarS.two} />
            </Flex>
            <Flex className="flex items-center gap-4">
              <RxReload />
              <Heading as="p" titel={bannarS.three} />
            </Flex>
          </Flex>
        </ContainerBox>
      </div>
    </>
  );
};

export default BannerService;
