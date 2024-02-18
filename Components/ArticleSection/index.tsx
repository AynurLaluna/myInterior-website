import axios from "axios";
import React from "react";
import { IProps } from "@/Interface";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import TitleH3Dark from "../TitleH3Dark";

const url = "http://localhost:3001/articles_news";
const ArticleSection = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto">
      <div className="">
        <TitleH3Dark title="Article & News" />
        <p className="text-center mb-5">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when looking at its layouts the points
          of using.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 ">
        {data.map(({ id, imageUrl, title, text }: IProps) => {
          return (
            <div className="max-w-[320px] p-4 rounded-t-[36px] bg-[#fff] hover:bg-primary3 ease-in-out duration-300">
              <div>
                <img className="" src={imageUrl} alt="interior" />
              </div>
              <div>
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
        })}
      </div>
    </div>
  );
};

export default ArticleSection;
