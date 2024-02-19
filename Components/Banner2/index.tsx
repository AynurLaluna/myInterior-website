import React from "react";
import { IBanner } from "@/Interface";

function Banner2({ header, title }: IBanner) {
  return (
    <div className="banner2">
      <div className=" flex items-end justify-center w-full h-[300px] ">
        <div className="flex flex-col items-center justify-center w-[300px] h-[120px] bg-[#fff] rounded-t-[37px] text-center">
          <h2 className="text-4xl  text-primary2 font-[display] font-semibold leading-10 tracking-wide">
            {header}
          </h2>
          <div className="text-primary4 font-[other] text-md">
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
