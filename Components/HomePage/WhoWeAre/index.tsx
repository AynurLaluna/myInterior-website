import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../../Button";
import { IoCallOutline } from "react-icons/io5";

function WhoWeAre() {
  return (
      <div className="container mx-auto w-[88vw] my-20 flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row justify-between items-center md:gap-10 lg:gap-20">
        <div className="md:w-1/2 lg:w-1/2 flex flex-col items-stretch justify-center">
          <h2 className="pt-7 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-main-2 sm:leading-8 md:leading-10 lg:leading-[62px]">
            We Create The Art Of Stylish Living Stylishly
          </h2>
          <p className="py-4 text-sm sm:text-sm md:text-base lg:text-base text-main-4">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when looking at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className="flex justify-start items-center ">
            <div className="size-10 sm:size-10 md:size-12 lg:size-14 flex justify-center items-center bg-[#F4F0EC] rounded-full hover:-translate-y-1 duration-300 ease-in-out">
              <Link href="/">
                <IoCallOutline className="text-main-1" />
              </Link>
            </div>
            <div className="text-sm md:text-base lg:text-lg ms-2 flex flex-col font-[other]">
              <Link
                className="text-main-2 text-base md:text-lg lg:text-xl font-semibold tracking-wider"
                href="/">
                <span>012345678</span>
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
  );
}

export default WhoWeAre;
