import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { IProjects } from "@/Interface";
import TitleH3Dark from "../../TitleH3Dark";
import { FaAngleRight } from "react-icons/fa6";

const url = "http://localhost:3001/projects_homepage";
const Projects = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container w-[88vw] mx-auto ">
      <div className=" flex flex-col items-center space-y-2">
        <TitleH3Dark title="Follow Our Projects" />
        <p className="text-sm md:text-base text-center w-84 md:w-96  font-[other] ">
          It is a long established fact that a reader will be distracted by the
          of readable content of page looking at its layouts points.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-auto gap-7 mt-4 md:mt-10 lg:mt-20 ">
        {data.map(({ id, imageUrl, title, description }: IProjects) => {
          return (
            <div className="w-[360px] md:w-[400px] lg:[420px] mx-auto ">
              <div className="size-fit ">
                <Image
                  className="size-full rounded-r-2xl"
                  src={imageUrl}
                  alt="decor"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="my-1 md:my-2 ">
                  <h4 className="text-base md:text-lg lg:text-xl font-[display] font-semibold leading-8 tracking-wide">
                    {title}
                  </h4>
                  <p className=" text-xs md:text-sm lg:text-base font-[other] text-main-4">
                    {description}
                  </p>
                </div>
                <div className="flex justify-center items-center size-7 md:size-8 lg:size-10 bg-main-3 hover:bg-main-1 hover:text-white ease-in-out duration-300 rounded-full">
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
