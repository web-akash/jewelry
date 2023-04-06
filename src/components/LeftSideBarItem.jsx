import React from "react";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Heading from "./Heading";
const LeftSideBarItem = (props) => {
  let [drop, setDrop] = useState(props.dropdown);
  let [show, setShow] = useState(false);
  return (
    <>
      {drop ? (
        <div
          className="flex items-center justify-between"
          onClick={() => setShow(!show)}
        >
          <h1 className={props.className}>{props.titel}</h1>
          <BsPlusLg />
        </div>
      ) : (
        <h1 className={props.className}>{props.titel}</h1>
      )}

      {show && <div>{props.children}</div>}
    </>
  );
};

export default LeftSideBarItem;
