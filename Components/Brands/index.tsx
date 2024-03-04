import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="container mx-auto w-[88vw] mb-20">
      <div className="p-20 flex justify-center items-center gap-10">
        <div className="w-32 md:w-44">
          <Image
            src="./brandLogos/01.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="w-32 md:w-44">
          <Image
            src="./brandLogos/02.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="w-32 md:w-44">
          <Image
            src="./brandLogos/03.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="w-32 md:w-44">
          <Image
            src="./brandLogos/04.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="w-32 md:w-48">
          <Image
            src="./brandLogos/05.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
