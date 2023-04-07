import React from "react";

const InputBox = ({ type, placeholder, name, className, onChange }) => {
  return (
    <>
      <input
        className={className}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputBox;
