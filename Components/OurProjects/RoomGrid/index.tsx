import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { IGrid, ITabs } from "@/Interface";
import { FaAngleRight } from "react-icons/fa6";

const tabs = [
  { id: 1, title: "Bathroom" },
  { id: 2, title: "Bedroom" },
  { id: 3, title: "Kitchen" },
  { id: 4, title: "LivingRoom" },
];

const url = "http://localhost:3001/bedroom_arch";
const RoomGrid = async () => {
  const { data } = await axios.get(url);
  return (
    <section className="container mx-auto w-[88vw] my-20 space-y-5">
      <div className="tabs flex justify-center items-center ">
        <div className="w-fit space-x-1 border rounded-2xl ">
          {tabs.map(({ id, title }: ITabs) => {
            return (
              <button
                className="tabs hover:bg-main-1 py-2 px-4 md:px-6 lg:px-8 rounded-xl text-sm md:text-base "
                key={id}>
                {title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="content-tabs grid grid-cols-2 gap-10">
        {data.map(({ id, imageUrl }: IGrid) => {
          return (
            <div className="content ">
              <div key={id}>
                <Image
                  className="w-full"
                  src={imageUrl}
                  alt="interior"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="pt-2 text-base md:text-lg font-[display] font-semibold tracking-wide">
                    Minimal Bedroom
                  </h4>
                  <p className="text-xs md:text-sm font-[other] text-main-4">
                    Decor / Architecture
                  </p>
                </div>
                <div className="flex justify-center items-center size-7 md:size-8 bg-main-3 hover:bg-main-1 hover:text-white duration-300 ease-in-out rounded-full">
                  <Link href="#">
                    <FaAngleRight />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="content">Bathroom</div>
        <div className="content">Kitchen</div>
        <div className="content">LivingRoom</div>
      </div>
    </section>
  );
};

export default RoomGrid;
