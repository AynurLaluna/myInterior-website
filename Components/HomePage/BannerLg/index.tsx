import React from "react";
import Button from "../../Button";

function BannerLg() {
  return (
    <div className="banner">
      <div className=" w-64 sm:w-[72vw] md:w-[80vw] lg:[88vw] text-center md:text-left]">
        <h1 className="text-left lg:text-5xl md:text-5xl sm:text-4xl text-3xl sm:text-left font-[display] font-bold lg:leading-[3.5rem] md:leading-16 text-main-2 ">
          Let Your Home <br /> Be Unique
        </h1>
        <p className="md:w-96 lg:w-[40vw] text-left lg:my-5 md:my-4 sm:my-4 my-4 lg:text-lg md:text-base sm:text-sm  md:tracking-wide lg:tracking-wide text-main-4 ">
          There are many variations of the passages of lorem Ipsum from
          available,variations of the passages.
        </p>
        <div>
          <Button title="Get Started" to="/" />
        </div>
      </div>
    </div>
  );
}

export default BannerLg;
