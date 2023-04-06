import React from "react";
import List from "./List";

const Footerlistitem = ({ className, MenuTitel, children }) => {
  return (
    <>
      <h4 className={className}>{MenuTitel}</h4>
      <List>{children}</List>
    </>
  );
};

export default Footerlistitem;
