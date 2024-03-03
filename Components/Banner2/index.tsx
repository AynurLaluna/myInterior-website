import React from "react";
import { IBanner } from "@/Interface";
function Banner2({ header, title }: IBanner) {
  return (
    <div className=" flex items-end justify-center w-full h-[300px] ">
      <div className="flex flex-col items-center justify-center py-4 md:py-5 lg:py-6 w-fit bg-white rounded-t-3xl text-center">
        <h2 className="px-7 text-xl md:text-3xl lg:text-4xl  text-main-2 font-[display] font-bold md:leading-10 tracking-wide">
          {header}
        </h2>
        <div className="text-main-4 font-[other] text-sm md:text-base">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
