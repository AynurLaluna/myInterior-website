import React from "react";
import axios from "axios";
import { IService } from "@/Interface";
import TitleH3Dark from "../TitleH3Dark";

const url = "http://localhost:3001/our_work";
const ServiceSection2 = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto  w-[800px] bg-primary3 rounded-3xl">
      <div className=" flex flex-col items-center text-center">
        <TitleH3Dark title="How We Work" />
        <p className="px-10 mt-2 text-md font-[other] text-primary4 ">
          It is a long established fact will be distracted.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className=" flex flex-col my-20 gap-y-5 ">
        {data.map(
          ({ id, iconUrl, num, title, description, imageUrl }: IService) => {
            return (
              <div className=" flex items-center justify-center ">
                <div>
                  <img
                    className="w-[310px] h-[300px]"
                    src={imageUrl}
                    alt="image"
                  />
                </div>
                <div className="flex flex-col-reverse justify-between w-[300px] h-[200px]">
                  <div className="">
                    <h4 className=" text-2xl text-primary2 font-[display] leading-10">
                      {title}
                    </h4>
                    <p className="text-md font-[other] text-primary4 ">
                      {description}
                    </p>
                  </div>
                  <div className="flex justify-between ">
                    <img className="h-10 w-10" src={iconUrl} alt="icon" />
                    <p className="text-5xl font-[display] text-[#fff] ">
                      {num}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ServiceSection2;
