"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";


const LatestPost = () => {
  return (
    <section className="container mx-auto w-[80vw] my-20 md:my-32">
      <h3 className="mb-5 text-main-2 text-3xl md:text-4xl font-[display] font-bold md:leading-10 md:tracking-wide">
        Latest Post
      </h3>
      <div className=" grid md:grid-cols-2 border-[0.5px] rounded-[3rem] p-7 gap-7 shadow-lg">
        <div className="flex justify-center items-center ">
          <Image
            className="w-fit"
            src="./images/articlePost.svg"
            alt="interior"
            width={100}
            height={100}
          />
        </div>
        <div className=" flex flex-col justify-center md:pr-10">
          <div className="flex flex-col items-start space-y-5 ">
            <h4 className="py-2 text-xl md:text-2xl font-[display] font-semibold leading-6 tracking-wide">
              Low Cost Latest Invented Interior Designing Ideas
            </h4>
            <p className="text-base md:text-lg font-[other] text-main-4">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus posuere in Contrary to popular belief.
            </p>
            <p className="text-base md:text-lg font-[other] text-main-4">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classic.
            </p>
          </div>
          <div className="flex justify-between items-center pt-7">
            <p className=" text-xs font-[other] text-main-4">
              26 December, 2022{" "}
            </p>
            <div className="flex justify-center items-center size-7 md:size-8 bg-main-3 hover:bg-main-1 hover:text-white duration-300 ease-out rounded-full">
              <Link href="/blog">
                <FaAngleRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default LatestPost;
