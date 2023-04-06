import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Heading from "./Heading";
import LeftSideBarItem from "./LeftSideBarItem";

const SideBarContent = ({ titel, mydropdown, className }) => {
  let [drop, setDrop] = useState(mydropdown);
  let [show, setShow] = useState(mydropdown);
  return (
    <>
      {drop ? (
        <div
          className="flex items-center justify-between"
          onClick={() => setShow(!show)}
        >
          <Heading className={className} as="h4" titel={titel} />
          <IoIosArrowDown />
        </div>
      ) : (
        <>
          <Heading className={className} as="h4" titel={titel} />
        </>
      )}

      {show && (
        <>
          <LeftSideBarItem
            className="text-base text-[#767676]  border-b-2 border-[#F0F0F0] pb-5 font-dm "
            titel=" CaratLane"
            dropdown={false}
          >
            <p>asdkfak</p>
          </LeftSideBarItem>
          <LeftSideBarItem
            titel="  Tanishq"
            className="text-base text-[#767676] border-b-2 border-[#F0F0F0] pb-5 font-dm mt-5"
            dropdown={false}
          >
            <p>asdkfak</p>
          </LeftSideBarItem>
          <LeftSideBarItem
            titel=" Joyalukkas"
            className="text-base text-[#767676] border-b-2 border-[#F0F0F0] pb-5 font-dm mt-5"
            dropdown={false}
          >
            <p>asdkfak</p>
          </LeftSideBarItem>
          <LeftSideBarItem
            titel=" BlueStone"
            className="text-base text-[#767676] border-b-2 border-[#F0F0F0] pb-5 font-dm mt-5"
            dropdown={false}
          >
            <p>asdkfak</p>
          </LeftSideBarItem>
          <LeftSideBarItem
            titel=" Bhima Jewellers"
            className="text-base text-[#767676] border-b-2 border-[#F0F0F0] pb-5 font-dm mt-5"
            dropdown={false}
          >
            <p>asdkfak</p>
          </LeftSideBarItem>
        </>
      )}
      {!drop && (
        <>
          <LeftSideBarItem
            titel=" Tribal Jewellery"
            className="text-base text-[#767676] border-b-2 border-[#F0F0F0] pb-5 font-dm mt-5"
            dropdown={false}
          >
            <p></p>
          </LeftSideBarItem>
          <LeftSideBarItem
            titel=" Custom Jewellery"
            className="text-base text-[#767676] border-b-2 border-[#F0F0F0] pb-5 font-dm mt-5"
            dropdown={false}
          >
            <p>asdkfak</p>
          </LeftSideBarItem>
          <LeftSideBarItem
            titel=" Filigree Jewellery"
            className="text-base text-[#767676] border-b-2 border-[#F0F0F0] pb-5 font-dm mt-5 w-full"
            dropdown={true}
          >
            <Heading
              as="p"
              className="text-base text-[#767676] font-dm mt-5 w-full"
              titel="hello"
            />
          </LeftSideBarItem>
          <LeftSideBarItem
            titel=" Polki Jewellery"
            className="text-base text-[#767676] border-b-2 border-[#F0F0F0] pb-5 font-dm mt-5"
            dropdown={false}
          >
            <p>asdkfak</p>
          </LeftSideBarItem>
        </>
      )}
    </>
  );
};

export default SideBarContent;
