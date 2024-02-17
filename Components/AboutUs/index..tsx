import React from "react";
import axios from "axios";
import Button from "../Button";
import { IProps } from "@/Interface";
import Image from "next/image";

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
                <h3>{title}</h3>
                <p>{text}</p>
                <Button to="/" title="Our Concept" />
              </div>
              <div>
                <Image
                  src={imageUrl}
                  alt="interior image"
                  width={100}
                  height={100}
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
