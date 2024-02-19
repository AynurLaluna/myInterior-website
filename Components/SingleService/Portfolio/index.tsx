import Button2 from "@/Components/Button2";
import React from "react";

const Portfolio = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="flex justify-between">
        <div>
          <img src="./images/single2.svg" alt="interior" />
        </div>
        <div className="flex flex-col gap-x-5">
          <h3 className="w-[20ch] text-4xl text-primary2 font-[display] font-semibold leading-10 tracking-wide">
            We love design. That's how we got here.
          </h3>
          <div className="">
            <p className="my-5 text-md font-[other] text-primary4 leading-7 ">
              It is a long established fact that a reader will be distracted by
              the of readable content .
            </p>
          </div>
          <Button2 to="/project" title="Our Portfolio" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
