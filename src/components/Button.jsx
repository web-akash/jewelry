import React from "react";

const Button = ({ className, onClick, titel }) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {titel}
    </button>
  );
};

export default Button;
