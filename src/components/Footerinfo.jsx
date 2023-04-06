import React, { Children } from "react";
import List from "./List";

const Footerinfo = ({ children }) => {
  return (
    <div>
      <List>{children}</List>
    </div>
  );
};

export default Footerinfo;
