import React from "react";
import { IBanner } from "@/Interface";

function Banner2({ header, title1, title2 }: IBanner) {
  return (
    <div className="banner2">
      <div className=" flex items-end justify-center w-full h-[300px] ">
        <div className="flex  flex-col items-center justify-center w-[300px] h-[120px] bg-[#fff] rounded-t-[37px] text-center">
          <h2 className="text-2xl font-semibold text-primary2 ">{header}</h2>
          <div className=" text-primary4 text-sm ">
            <span>{title1}</span>
            <span>{title2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
