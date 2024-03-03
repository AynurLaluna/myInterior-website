import React from "react";
import Image from "next/image";
import { IService } from "@/Interface";
import TitleH3Dark from "../../TitleH3Dark";

const our_work = [
  {
    id: 1,
    iconUrl: "./icons/icon1.png",
    num: "01",
    title: "Concept & Details",
    description:
      "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
    imageUrl: "./images/image1.svg",
  },
  {
    id: 2,
    iconUrl: "./icons/icon2.png",
    num: "02",
    title: "Idea for Work",
    description:
      "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
    imageUrl: "./images/image2.svg",
  },
  {
    id: 3,
    iconUrl: "./icons/icon3.png",
    num: "03",
    title: "Design",
    description:
      "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
    imageUrl: "./images/image3.svg",
  },
  {
    id: 4,
    iconUrl: "./icons/icon4.png",
    num: "04",
    title: "Perfection",
    description:
      "It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
    imageUrl: "./images/image4.svg",
  },
];

const ServiceSection2 = () => {
  return (
    <div className="container mx-auto w-[80vw] bg-main-3 rounded-3xl  space-y-10 py-10 md:my-32">
      <div className=" flex flex-col justify-center items-center text-center">
        <TitleH3Dark title="How We Work" />
        <p className=" mt-2 text-base md:text-lg font-[other] text-main-4 ">
          It is a long established fact will be distracted.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="gridContainer grid grid-cols-1 gap-7 space-y-5 ">
        {our_work.map(
          ({ id, iconUrl, num, title, description, imageUrl }: IService) => {
            return (
              <div
                key={id}
                className=" flex items-center justify-center space-x-10 ">
                <div className="w-96">
                  <Image
                    className="w-full"
                    src={imageUrl}
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col-reverse justify-between w-64 md:w-80 lg:w-90  md:p-4">
                  <div className="space-y-2">
                    <h4 className=" text-xl md:text-2xl font-semibold text-main-2 font-[display] tracking-wide">
                      {title}
                    </h4>
                    <p className=" text-sm md:text-base lg:text-lg font-[other] text-main-4 ">
                      {description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center space-y-4 md:space-y-5">
                    <img
                      className=" size-8 md:size-10 lg:size-12"
                      src={iconUrl}
                      alt="icon"
                    />
                    <p className=" text-4xl md:text-5xl lg:text-6xl font-semibold font-[display] text-[#fff] ">
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
