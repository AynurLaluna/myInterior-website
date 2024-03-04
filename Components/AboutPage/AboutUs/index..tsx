import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../../Button";
import { IProps } from "@/Interface";

const url = "https://interno-db.vercel.app/about_work";

const AboutUs = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto w-[88vw]">
      <div className="space-y-7 flex flex-col  aboutWrapper">
        {data.map(({ id, title, text, imageUrl }: IProps) => {
          return (
            <div className="aboutContainer">
              <div
                key={id}
                className="flex flex-col-reverse md:flex-row justify-center items-center ">
                <div className="flex flex-col space-y-3 md:space-y-5 w-full p-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[display] md:tracking-wide ">
                    {title}
                  </h3>
                  <p className="text-base md:text-lg text-main-4 font-[other] ">
                    {text}
                  </p>
                  <div className="">
                    <Button to="/" title="Our Concept" />
                  </div>
                </div>
                <div className="w-full p-4 ">
                  <Image
                    className="w-fit h-full"
                    src={imageUrl}
                    alt="interior "
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
