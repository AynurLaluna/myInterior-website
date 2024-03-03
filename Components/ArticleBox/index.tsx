import React from "react";
import Link from "next/link";
import { IProps } from "@/Interface";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

const ArticleBox = ({ id, imageUrl, title, text }: IProps) => {
  return (
    <div
      key={id}
      className=" gap-y-5 w-64 md:w-72 p-5 rounded-[50px] border border-[#E7E7E7]
    hover:bg-main-3 ease-in-out duration-300">
      <div>
        <Image
          className="w-fit"
          src={imageUrl}
          alt="interior"
          width={100}
          height={100}
        />
      </div>
      <div className="">
        <h4 className=" text-base md:text-lg font-[display] font-semibold md:leading-6 md:tracking-wide">
          {title}
        </h4>
        <div className="flex justify-between items-center ">
          <p className="text-xs md:text-sm font-[other] text-main-4">{text}</p>
          <div className="flex justify-center items-center size-7 md:size-8 bg-main-3 hover:bg-main-1 rounded-full">
            <Link href="/single_article">
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBox;
