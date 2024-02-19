import React from "react";

const Brands = () => {
  return (
    <div className="container-sm mx-auto">
      <div className="p-20 flex justify-center items-center gap-x-20">
        <div className="w-12 h-12  ">
          <img src="./brandLogos/01.svg" alt="logo" />
        </div>
        <div className="w-12 h-12  ">
          <img src="./brandLogos/02.svg" alt="logo" />
        </div>
        <div className="w-12 h-12  ">
          <img src="./brandLogos/03.svg" alt="logo" />
        </div>
        <div className="w-12 h-12  ">
          <img src="./brandLogos/04.svg" alt="logo" />
        </div>
        <div className="w-12 h-12 ">
          <img src="./brandLogos/05.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
