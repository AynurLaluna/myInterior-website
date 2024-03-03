import React from "react";
import Image from "next/image";
import Button2 from "@/Components/Button2";

const Portfolio = () => {
  return (
    <div className="container mx-auto w-[88vw]">
      <div className="grid md:grid-cols-2 space-y-7 md:space-x-10 ">
        <div className="w-fit">
          <Image
            className="w-full"
            src="./images/single2.svg"
            alt="interior"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="w-64 md:w-80 text-2xl md:text-3xl ld:text-4xl text-main-2 font-[display] font-bold md:leading-10 md:tracking-wide">
            We love design. That's how we got here.
          </h3>
          <p className=" text-base md:text-lg font-[other] text-main-4 ">
            It is a long established fact that a reader will be distracted by
            the of readable content. Lalala blalala black and white. Wipe your
            mouth for god sake.
          </p>
          <div>
            <Button2 to="/project" title="Our Portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
