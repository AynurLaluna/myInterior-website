import React from "react";
import Button2 from "../Button2";

const Join = () => {
  return (
    <div className="md:container mx-auto my-20 md:w-[88vw]">
      <div className="w-full h-[200px] flex flex-col justify-center items-center bg-main-2 md:rounded-2xl space-y-2">
        <h3 className="text-[#fff] font-bold font-[display] lg:text-4xl md:text-3xl text-2xl md:leading-[60px] md:tracking-wider">
          Wanna join the Interno?
        </h3>
        <p className="text-sm md:text-base text-[#fff] font-[display] font-light md:leading-[30px] ">
          It is a long established factory.
        </p>
        <Button2 title="Contact With Us" to="/contact" />
      </div>
    </div>
  );
};

export default Join;
