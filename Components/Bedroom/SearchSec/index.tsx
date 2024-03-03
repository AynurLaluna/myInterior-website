import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const SearchSec = () => {
  return (
    <div className="container mx-auto w-[88vw] my-20">
      <Image
        className="w-full"
        src="./images/bedSearch.svg"
        alt="interior"
        width={100}
        height={100}></Image>
      <div className="size-14 flex justify-center items-center rounded-full bg-[#fff] relative bottom-[196px] left-[226px]">
        <Link href="/">
          <IoSearch className="text-main-1 text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default SearchSec;
