import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { IProps } from "@/Interface";
import { FaAngleRight } from "react-icons/fa6";
import { CgArrowRight } from "react-icons/cg";

const url = "http://localhost:3001/article_section";
const ArticleNews = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto w-[80vw] my-20">
      <h3 className="mb-5 text-main-2 text-3xl md:text-4xl font-[display] font-bold md:leading-10 md:tracking-wide">
        Article & News
      </h3>

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

      <div className=" flex items-center justify-center space-x-2 pt-10">
        <Link href="#">
          <div className="flex justify-center items-center size-6 md:size-8 text-sm text-main-4 rounded-full border border-main-3 bg-main-3 duration-300 ease-in-out ">
            1
          </div>
        </Link>
        <Link href="#">
          <div className="flex justify-center items-center size-6 md:size-8  text-sm text-main-4 rounded-full border-[0.5px] border-main-1 hover:border-0 hover:bg-main-3 duration-300 ease-in-out ">
            2
          </div>
        </Link>
        <Link href="#">
          {" "}
          <div className="flex justify-center items-center size-6 md:size-8  text-sm text-main-4 rounded-full border-[0.5px] border-main-1 hover:border-0 hover:bg-main-3 duration-300 ease-in-out ">
            3
          </div>
        </Link>
        <Link href="#">
          <div className="flex justify-center items-center size-6 md:size-8  text-sm text-main-4 rounded-full border-[0.5px] border-main-1 hover:border-0 hover:bg-main-3 duration-300 ease-in-out ">
            <FaAngleRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleNews;
