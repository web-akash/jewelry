import React, { useEffect, useState } from "react";
import ContainerBox from "./ContainerBox";
import Titel from "./Titel";
import Product from "./MyProduct";
import Flex from "./Flex";
import axios from "./Axios";

const Bestseller = () => {
  let [newArrData, setNewArrData] = useState({});
  let fatchData = async () => {
    let res = await axios.get("/ourBestsellers");
    setNewArrData(res.data);
  };

  useEffect(() => {
    fatchData();
  }, []);

  return (
    <>
      <ContainerBox>
        <div className="relative mt-8 lg:mt-32">
          <Titel titel={newArrData.titel} />
        </div>
        <Flex className="flex flex-wrap justify-between  gap-y-5">
          {newArrData.myproduct?.slice(1).map((item) => (
            <div className=" flex   sm:max-w-[300px] lg:max-w-[370px] ">
              <div>
                <Product
                  producTitel={item.productTitel}
                  productPrice={item.price}
                  brand={item.Jwelery}
                  imgsrc={item.itemImg}
                  batch={false}
                />
              </div>
            </div>
          ))}
        </Flex>
      </ContainerBox>
    </>
  );
};

export default Bestseller;
