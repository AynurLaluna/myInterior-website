import axios from "axios";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IProps } from "@/Interface";
import { FaAngleRight } from "react-icons/fa6";

const url = "https://interno-db.vercel.app/articles_news";
const ArticleSection = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto w-[80vw] my-20">
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-5 text-main-2 text-3xl md:text-4xl font-[display] font-bold md:leading-10 md:tracking-wide">
          Article & News
        </h3>
        <p className="w-72 md:w-96 text-center pb-5 text-xs md:text-sm lg:text-base font-[other]">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when looking at its layouts the points
          of using.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-5 md:gap-10 ">
        {data.map(({ id, imageUrl, title, text }: IProps) => {
          return (
            <div
              key={id}
              className="w-80 space-y-5 md:space-y-7 p-5 rounded-[50px] border border-[#E7E7E7] hover:shadow-lg hover:translate-y-1
    hover:bg-main-3  ease-in-out duration-300">
              <div className="">
                <Image
                  className="w-full"
                  src={imageUrl}
                  alt="interior"
                  width={100}
                  height={100}
                />
              </div>
              <div className="space-y-5">
                <h4 className=" text-base md:text-lg font-[display] font-semibold md:tracking-wide">
                  {title}
                </h4>
                <div className="flex justify-between items-center pb-3">
                  <p className="text-xs md:text-sm font-[other] text-main-4">
                    {text}
                  </p>
                  <div className="flex justify-center items-center size-7 md:size-8 bg-main-3 hover:bg-main-1 hover:text-white duration-300 ease-in-out rounded-full">
                    <Link href="/single_article">
                      <FaAngleRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleSection;
