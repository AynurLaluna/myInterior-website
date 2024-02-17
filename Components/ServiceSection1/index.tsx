import React from "react";
import axios from "axios";
import { IOurWork } from "@/Interface";
import IconButton from "../IconButton";

const url = "http://localhost:3001/services";
const ServiceSection1 = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 m-10">
        {data.map(({ id, header, text }: IOurWork) => {
          return (
            <div
              className=" p-10 text-center text-primary2 bg-white hover:bg-primary3 ease-in-out duration-300 rounded-2xl"
              key={id}>
              <h4 className="py-4 font-semibold font-[display] text-xl text-center">
                {header}
              </h4>
              <p className="text-center text-[0.9rem] font-normal font-[display] text-base text-primary">
                {text}
              </p>
              <IconButton to="/" title="Read More" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection1;
