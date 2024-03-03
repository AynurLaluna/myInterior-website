import React from "react";
import axios from "axios";
import { IOurWork } from "@/Interface";
import IconButton from "../../IconButton";

const url = "http://localhost:3001/services";
const ServiceSection1 = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto w-[88vw] flex justify-center my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 m-10">
        {data.map(({ id, header, text }: IOurWork) => {
          return (
            <div
              className=" w-[300px] p-4 sm:border shadow-md md:border-0 rounded-xl text-center hover:bg-main-3 hover:shadow-xl hover:translate-y-2 ease-in-out duration-300"
              key={id}>
              <h4 className="py-2 md:py-2 font-semibold text-lg md:text-xl lg:text-2xl leading-5 text-center text-main-2 font-[display]">
                {header}
              </h4>
              <p className="text-center text-sm md:text-base text-main-4 font-[other]">
                {text}
              </p>
              <IconButton to="/single_services" title="Read More" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection1;
