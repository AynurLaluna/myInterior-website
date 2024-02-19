import React from "react";
import axios from "axios";
import Link from "next/link";
import { IProjects } from "@/Interface";
import TitleH3Dark from "../../TitleH3Dark";
import { FaAngleRight } from "react-icons/fa6";

const url = "http://localhost:3001/projects_homepage";
const Projects = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto my-20">
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
                <img className=" rounded-tr-2xl" src={imageUrl} alt="decor" />
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
                <div className="flex justify-center items-center w-10 h-10 bg-primary3 rounded-full">
                  <Link href="/projects">
                    <FaAngleRight />
                  </Link>
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
