import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Quote = () => {
  return (
    <div className=" container m-auto w-lg ">
      <div className=" w-xl h-[400px] p-20 flex flex-col items-center justify-center text-center">
        <div>
          <RiDoubleQuotesL className="w-8 h-8" />
        </div>
        <h4 className="my-10 font-[display] italic text-2xl leading-[40px]">
          I like an interior that defies labeling. I don't really want someone
          to walk into a room and know that I did it.
        </h4>
        <p className="font-[other] text-md leading-8 text-primary4">
          -BUNNY WILLIAMS
        </p>
      </div>
    </div>
  );
};

export default Quote;