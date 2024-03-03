import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CgPlayButton } from "react-icons/cg";

const VideoSec = () => {
  return (
    <div className="container mx-auto md:w-[88vw]">
      <div className="w-full relative">
        <Image
          className="w-full"
          src="./images/single1.svg"
          alt="home interior"
          width={100}
          height={100}
        />
        <div className=" absolute left-[230px] top-[60px] md:left-[320px] md:top-[160px] lg:left-[550px] lg:top-[156px] flex justify-center items-center size-9 md:size-12 bg-white rounded-full hover:shadow-lg hover:size-14 duration-500 ease-in-out">
          <Link className=" cursor-pointer" href="/">
            <CgPlayButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoSec;
