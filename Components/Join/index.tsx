import React from "react";
import Button2 from "../Button2";

const Join = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="w-full h-[200px] flex flex-col justify-center items-center bg-primary2 rounded-2xl">
        <h3 className="text-[#fff] font-bold font-[display] text-3xl leading-[60px]">
          Wanna join the Interno?
        </h3>
        <p className="text-[#fff] font-[display] font-light leading-[30px] ">
          It is a long established factory.
        </p>

        <Button2 title="Contact With Us" to="/contact" />
      </div>
    </div>
  );
};

export default Join;
