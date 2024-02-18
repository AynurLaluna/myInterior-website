import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const LatestPost = () => {
  return (
    <section className="container mx-auto">
      <div>
        <h3 className=" text-primary2 text-[1.8rem] font-[display] font-bold leading-10 tracking-wide">
          Latest Post
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[420px]">
          <img
            className="w-fit"
            src="./images/articlePost.svg"
            alt="interior"
          />
        </div>
        <div className="mx-10 w-[360px] flex flex-col gap-y-14">
          <div className="flex flex-col items-start">
            <h4 className="py-2 text-lg font-[display] font-semibold leading-6 tracking-wide">
              Low Cost Latest Invented Interior Designing Ideas
            </h4>
            <p className="text-sm font-[other] text-primary4">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus posuere in Contrary to popular belief.
            </p>
            <p className="text-sm font-[other] text-primary4">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classic.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-[other] text-primary4">
                26 December, 2022{" "}
              </p>
            </div>
            <div className="flex justify-center items-center w-6 h-6 bg-primary3 rounded-full">
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
