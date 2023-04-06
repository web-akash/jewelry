import React from "react";

const Heading = (props) => {
  return (
    <>
      {props.as === undefined ? (
        <h1 className={props.className}>{props.titel}</h1>
      ) : (
        <props.as className={props.className}>{props.titel}</props.as>
      )}
    </>
  );
};

export default Heading;
