import React from "react";
import { Link } from "react-router-dom";

const Listitem = ({ to, className, item }) => {
  return (
    <Link to={to}>
      <li className={className}>{item}</li>
    </Link>
  );
};

export default Listitem;
