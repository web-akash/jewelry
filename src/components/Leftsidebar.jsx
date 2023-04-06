import React from "react";
import LeftSideBarContent from "./SideBarContent";

const Leftsidebar = () => {
  return (
    <>
      <LeftSideBarContent
        className="text-xl font-dm text-[##262626] font-bold mb-2 mt-3"
        titel="Jewelry Catagory"
        mydropdown={false}
      />
      <LeftSideBarContent
        className="text-xl font-dm text-[##262626] font-bold mb-2 mt-3"
        titel="Our Brand"
        mydropdown={true}
      />
    </>
  );
};

export default Leftsidebar;
