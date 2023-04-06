import React from "react";

const Titel = ({ titel }) => {
  return (
    <>
      <h2 className="mb-2 font-dm text-[39px] font-bold text-primery lg:mb-12">
        {titel}
      </h2>
    </>
  );
};

export default Titel;
