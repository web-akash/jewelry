import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContainerBox from "./ContainerBox";
import Images from "./Images";
import axios from "./Axios";

const Middeladd = () => {
  let [middel, setMiddel] = useState({});
  let fatchData = async () => {
    try {
      let res = await axios.get("/middeladd");
      setMiddel(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatchData();
  });
  return (
    <ContainerBox>
      <Link to="#">
        <Images className="mt-10 lg:mt-32 w-full" imgsrc={middel.item} />
      </Link>
    </ContainerBox>
  );
};

export default Middeladd;
