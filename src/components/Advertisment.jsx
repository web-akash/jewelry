import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";
import Flex from "./Flex";
import Images from "./Images";
import axios from "./Axios";

const Advertisment = () => {
  let [advertisment, setAdvertisment] = useState({});
  let fatchData = async () => {
    try {
      let res = await axios.get("/advertisment");
      setAdvertisment(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatchData();
  });
  return (
    <>
      <ContainerBox>
        <Flex className="flex justify-evenly">
          <div className="w-4/2">
            <Link to="#">
              <Images imgsrc={advertisment.thertyDes} />
            </Link>
          </div>
          <div className="4/2 ">
            <Link to="#">
              <Images className=" block" imgsrc={advertisment.seventyDes} />
            </Link>
            <Link>
              <Images
                className="mt-[5%] block"
                imgsrc={advertisment.fiftyDes}
              />
            </Link>
          </div>
        </Flex>
      </ContainerBox>
    </>
  );
};

export default Advertisment;
