import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Quote = () => {
  return (
    <div className=" container m-auto w-[88vw]">
      <div className="h-[400px] flex flex-col items-center justify-center text-center">
        <div>
          <RiDoubleQuotesL className=" size-6 md:size-8" />
        </div>
        <h4 className=" my-8 md:my-10 px-20 md:px-40 lg:px-72 font-[display] italic  text-xl md:text-2xl leading-[40px]">
          I like an interior that defies labeling. I don't really want someone
          to walk into a room and know that I did it.
        </h4>
        <p className="font-[other] text-base md:text-lg leading-8 text-main-4">
          -BUNNY WILLIAMS
        </p>
      </div>
    </div>
  );
};

export default Quote;
