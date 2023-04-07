import React, { useEffect, useState } from "react";
import ContainerBox from "./ContainerBox";
import Titel from "./Titel";
import Product from "./MyProduct";
import Flex from "./Flex";
import axios from "./Axios";

const SpacialOffer = () => {
  let [newArrData, setNewArrData] = useState({});
  let fatchData = async () => {
    let res = await axios.get("/newArrivals");
    setNewArrData(res.data);
  };

  useEffect(() => {
    fatchData();
  }, []);
  return (
    <>
      <ContainerBox>
        <div className="relative  mt-8 lg:mt-32">
          <Titel titel="Special Offers" />
        </div>
        <Flex className="flex flex-wrap justify-between  gap-y-5">
          {newArrData.myproduct?.slice(1).map((item) => (
            <div className="max-w-[370px]  ">
              <Product
                producTitel={item.productTitel}
                productPrice={item.price}
                brand={item.Jwelery}
                imgsrc={item.itemImg}
                batch={true}
              />
            </div>
          ))}
        </Flex>
      </ContainerBox>
    </>
  );
};

export default SpacialOffer;
