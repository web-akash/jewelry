import React from "react";

const Dropdown = ({ className, children, togolref }) => {
  return (
    <div className={className} ref={togolref}>
      {children}
    </div>
  );
};

export default Dropdown;
