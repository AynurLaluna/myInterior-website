import React from "react";
import axios from "axios";
import { IPricing } from "@/Interface";
import Button from "../Button";

const url = "http://localhost:3001/pricing_cards";
const PricingCards = async () => {
  const { data } = await axios.get(url);
  return (
    <section className="container mx-auto w-[80vw] my-20 md:my-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {data.map(({ id, price, title, pricing_plan, list }: IPricing) => {
          return (
            <div
              className="flex flex-col items-center bg-main-3 rounded-2xl py-10 hover:shadow-xl hover:translate-y-2 duration-300 ease-in-out"
              key={id}>
              <div className="py-2 text-center font-[display]">
                <p className="text-main-2 text-lg font-semibold leading-7 tracking-wide">
                  {title}
                </p>
                <span className="text-sm font-semibold">$</span>
                <span className="ms-1 text-4xl md:text-5xl text-main-1 font-bold tracking-wider">
                  {price}
                </span>
                <p className="text-lg font-semibold tracking-wide">
                  {pricing_plan}
                </p>
              </div>
              <div className="border-t-[1px] border-main-1 space-y-4  py-5">
                {list.map((item) => {
                  return (
                    <div className="">
                      <ul className="text-center">
                        <li className=" text-base font-[other] text-main-4">
                          {item}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
              <Button to="/" title="Get Started" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingCards;
