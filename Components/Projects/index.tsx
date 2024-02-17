import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import { IProjects } from "@/Interface";
import TitleH3Dark from "../TitleH3Dark";
import Description from "../Description";

const url = "http://localhost:3001/projects_homepage";
const Projects = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto ">
      <div className=" flex flex-col items-center">
        <TitleH3Dark title="Follow Our Projects" />
        <p className="mb-5 text-md text-center px-20 font-[other] ">
          It is a long established fact that a reader will be distracted by the
          of readable content of page looking at its layouts points.
        </p>
      </div>
      <div className="grid grid-cols-2 w-auto gap-5">
        {data.map(({ id, imageUrl, title, description }: IProjects) => {
          return (
            <div className="max-w-md">
              <div>
                <img
                  className="w-full rounded-tr-2xl"
                  src={imageUrl}
                  alt="decor"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="my-2 ">
                  <h4 className="text-lg font-[display] font-semibold leading-8 tracking-wide">
                    {title}
                  </h4>
                  <p className="text-sm font-[other] text-primary4">
                    {description}
                  </p>
                </div>
                <div>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
