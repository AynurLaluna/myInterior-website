import React from "react";
import Button from "../Button";

function BannerLg() {
  return (
    <div className="banner">
      <div className="">
        <h1 className="text-[85px] font-bold w-[11ch] leading-[106px] text-primary2 ">
          Let Your Home Be Unique
        </h1>
        <p className="my-4 text-[1.2rem] font-normal text-left leading-[33px] tracking-wide text-primary4 ">
          There are many variations of the passages of lorem Ipsum from
          available,variations of the passages.
        </p>
        <div >
          <Button title="Get Started" to="/" />
          
        </div>
      </div>
    </div>
  );
}

export default BannerLg;
