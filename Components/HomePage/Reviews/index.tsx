import React from "react";
import axios from "axios";
import Image from "next/image";
import { IReview } from "@/Interface";
import TitleH3Dark from "../../TitleH3Dark";

const url = "http://localhost:3001/reviews";
const Reviews = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container w-[80vw] mx-auto my-20 bg-main-3 rounded-3xl">
      <div className="flex justify-center">
        <TitleH3Dark title="What the People Thinks About Us" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-5 py-10">
        {data.map(({ id, fullName, from, text, imageUrl }: IReview) => {
          return (
            <div
              key={id}
              className="w-64 md:w-72 lg:w-84 flex flex-col mx-4 p-7 md:p-8 md:h-64 bg-[#fff] rounded-xl ">
              <div className="flex items-center">
                <div className="size-14 md:size-16">
                  <Image
                    src={imageUrl}
                    alt="an image of a person"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="ms-4">
                  <h4 className="text-base font-[display] font-semibold">
                    {fullName}
                  </h4>
                  <p className="text-xs md:text-sm text-main-4">{from}</p>
                </div>
              </div>
              <p className="text-xs md:text-sm lg:text-base text-main-2 mt-2 ">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
