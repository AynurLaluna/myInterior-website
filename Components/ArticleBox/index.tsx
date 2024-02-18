import React from "react";
import Link from "next/link";
import { IProps } from "@/Interface";

import { FaAngleRight } from "react-icons/fa6";

const ArticleBox = ({ id, imageUrl, title, text }: IProps) => {
  return (
    <div className="p-5 rounded-[44px] bg-[#fff] hover:bg-primary3 ease-in-out duration-300">
      <div>
        <img className="w-full" src={imageUrl} alt="interior" />
      </div>
      <div className="">
        <h4 className="py-2 text-lg font-[display] font-semibold leading-6 tracking-wide">
          {title}
        </h4>
        <div className="flex justify-between items-center ">
          <p className="text-sm font-[other] text-primary4">{text}</p>
          <div className="flex justify-center items-center w-8 h-8 bg-primary3 rounded-full">
            <Link href="/blog">
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBox;
