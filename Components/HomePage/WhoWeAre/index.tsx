import React from "react";
import Button from "../../Button";
import Link from "next/link";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";

function WhoWeAre() {
  return (
    <div className="w-[88vw] container m-auto px-10">
      <div className="my-10 flex flex-col-reverse md:flex-row  justify-between items-center">
        <div className="flex flex-col items-stretch justify-center w-[500px] px-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl pt-4 lg:leading-[62.5px] font-bold text-main-2">
            We Create The Art Of Stylish Living Stylishly
          </h2>
          <p className="my-8 text-sm md:text-base lg:text-large font-light text-main-4">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when looking at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className="flex justify-start items-center ">
            <div className="size-8 md:size-10 lg:size-12 flex justify-center items-center bg-[#F4F0EC] rounded-full">
              <Link href="/">
                <IoCallOutline className="text-main-1" />
              </Link>
            </div>
            <div className="text-sm md:text-base ms-2 flex flex-col font-[other]">
              <Link
                className="text-main-2 text-base md:text-lg font-semibold tracking-wide"
                href="/">
                012345678
              </Link>
              <span className="text-main-4 ">Call Us Anytime</span>
            </div>
          </div>
          <div className="mt-5">
            <Button title="Get Started" to="/" />
          </div>
        </div>
        <div className="">
          <Image
            className="size-full"
            src="/images/kitchen.svg"
            alt="kitchen image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
