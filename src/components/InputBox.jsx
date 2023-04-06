import React from "react";

const InputBox = ({ type, placeholder, className, onChange }) => {
  return (
    <>
      <input
        className={className}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputBox;
