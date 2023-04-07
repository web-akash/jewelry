import Flex from "./Flex";
import Images from "./Images";
import List from "./List";
import Listitem from "./ListItem";
import { GoThreeBars } from "react-icons/go";
import { useEffect, useState } from "react";
import ContainerBox from "./ContainerBox";
import React from "react";
import axios from "./Axios";

const Navbar = () => {
  let [show, setShow] = useState(true);
  let [navbarData, setNavbarData] = useState({});

  let fatchData = async () => {
    try {
      let res = await axios.get("/navbar");
      setNavbarData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatchData();
  }, []);
  console.log("aksdjf", navbarData);

  useEffect(() => {
    myresize();
    function myresize() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    window.addEventListener("resize", myresize);
  }, []);

  return (
    <ContainerBox className="bg-slate-600">
      <Flex className="block items-center justify-between py-8	lg:flex">
        <div className="flex w-full items-center lg:w-2/6 ">
          <Images imgsrc={navbarData.logo} />
          <GoThreeBars
            onClick={() => setShow(!show)}
            className="	 blcok ml-auto lg:hidden "
          />
        </div>

        <div className="w-full lg:w-2/3 ">
          {show && (
            <List className="mt-4 block items-center	justify-end gap-x-10 text-center font-dm text-sm  font-bold leading-4 text-[#767676] lg:mt-0 lg:flex">
              {navbarData.navItems?.map((product) => (
                <>
                  <Listitem
                    to={`${product.item == "Home" ? "/" : "/" + product.item}`}
                    className="mt-4 hover:text-[#262626] lg:mt-0 "
                    item={product.item}
                  />
                </>
              ))}
            </List>
          )}
        </div>
      </Flex>
    </ContainerBox>
  );
};

export default Navbar;
