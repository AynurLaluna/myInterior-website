import React from "react";
import axios from "axios";
import { IServiceList } from "@/Interface";

const url = "http://localhost:3001/single_services";
const ListSec = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-around items-center">
        {data.map(({ id, title, listItem }: IServiceList) => {
          return (
            <div className="" key={id}>
              <h3 className="text-3xl text-primary2 font-[other] font-semibold leading-8 tracking-wide">
                {title}
              </h3>
              <div className="mt-2">
                {listItem.map((item) => {
                  return (
                    <ol className="list-decimal h-[4ch] ">
                      <li className="text-lg font-[other] text-primary4 leading-7 ">
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
    </div>
  );
};

export default ListSec;
