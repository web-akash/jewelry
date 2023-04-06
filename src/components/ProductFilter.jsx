import React from "react";

const ProductFilter = ({ titel, children, onChange }) => {
  return (
    <>
      <span>{titel}</span>
      <select
        onChange={onChange}
        id="countries"
        className=" focus:ring-black-500 focus:border-black-500  block w-[240px]   border border-[#F0F0F] p-2.5 text-base text-[#767676] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        {children}
      </select>
    </>
  );
};

export default ProductFilter;
