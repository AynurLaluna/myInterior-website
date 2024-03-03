import React from "react";
import Button from "../../Button";

function BannerLg() {
  return (
    <div className="banner">
      <div className=" w-64 md:w-[80vw] text-center md:text-left]">
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl sm:text-left font-[display] font-bold lg:leading-[100px] md:leading-[60px] sm:leading- text-main-2 ">
          Let Your Home <br /> Be Unique
        </h1>
        <p className="md:w-96 lg:w-[40vw] text-left md:my-4 my-3 lg:text-lg md:text-base text-sm md:tracking-wide text-main-4 ">
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
