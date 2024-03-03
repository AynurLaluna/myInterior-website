import React from "react";
import axios from "axios";
import { IList } from "@/Interface";

const url = "http://localhost:3001/single_services";
const ListSec = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto my-20 md:my-32 w-[88vw] grid md:grid-cols-2 gap-y-7">
      {data.map(({ id, title, listItem }: IList) => {
        return (
          <div className="flex flex-col justify-between items-center" key={id}>
            <div className="">
              <h3 className="text-2xl md:text-3xl text-main-2 font-[other] font-semibold leading-8 md:tracking-wide">
                {title}
              </h3>
            </div>
            <div className="mt-2 space-y-1 md:space-y-2 ">
              {listItem.map((item) => {
                return (
                  <ol className="list-decimal ">
                    <li className="text-base md:text-lg font-[other] text-main-4 ">
                      {item}
                    </li>
                  </ol>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListSec;
