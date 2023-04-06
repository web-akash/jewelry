import React from "react";

const Images = ({ imgsrc, className, alt }) => {
  return <img className={className} src={imgsrc} alt={alt} />;
};

export default Images;
