import React from "react";
import axios from "axios";
import { IReview } from "@/Interface";
import TitleH3Dark from "../../TitleH3Dark";
import Description from "../../Description";

const url = "http://localhost:3001/reviews";
const Reviews = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto my-20 h-[480px] bg-primary3 rounded-3xl">
      <div className="flex justify-center">
        <TitleH3Dark title="What the People Thinks About Us" />
      </div>
      <div className="grid  grid-cols-3 gap-2">
        {data.map(({ id, fullName, from, text, imageUrl }: IReview) => {
          return (
            <div className="flex flex-col mx-2 p-5 bg-[#fff] rounded-xl ">
              <div className="flex items-center">
                <div>
                  <img src={imageUrl} alt="person" />
                </div>
                <div className="ms-4">
                  <h4 className="text-lg font-[display] font-semibold">
                    {fullName}
                  </h4>
                  <Description text={from} />
                </div>
              </div>
              <Description text={text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
