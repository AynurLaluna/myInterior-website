import React from "react";
import axios from "axios";
import Button from "../Button";
import { IProps } from "@/Interface";
import Image from "next/image";
import TitleH3Dark from "../TitleH3Dark";
import Description from "../Description";

const url = "http://localhost:3001/about_work";
const AboutUs = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto">
      <div className="grid grid-rows-2 max-w-full ">
        {data.map(({ id, title, text, imageUrl }: IProps) => {
          return (
            <div className="flex ">
              <div className="">
                <TitleH3Dark title={title} />
                <Description text={text} />
                <Button to="/" title="Our Concept" />
              </div>
              <div>
                <img
                  className="p-5 rounded-2xl"
                  src={imageUrl}
                  alt="interior "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
