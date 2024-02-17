import React from "react";

const Brands = () => {
  return (
    <div className="container-sm mx-auto">
      <div className="p-20 flex justify-between items-center">
        <div className="w-8 h-8 ">
          <img src="./brandLogos/Home.png" alt="logo" />
        </div>
        <div className="w-8 h-8 ">
          <img src="./brandLogos/Vs.png" alt="logo" />
        </div>
        <div className="w-8 h-8 ">
          <img src="./brandLogos/Brand.png" alt="logo" />
        </div>
        <div className="w-8 h-8 ">
          <img src="./brandLogos/Nature.png" alt="logo" />
        </div>
        <div className="w-8 h-8 ">
          <img src="./brandLogos/Classic.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
