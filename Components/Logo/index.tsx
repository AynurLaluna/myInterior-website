import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="">
      <Link href="/">
        <div className="w-40 h-fit flex items-center">
          <Image
            className="lg:size-9 md:size-8 sm:size-7 size-6"
            width={100}
            height={100}
            src="./icons/Logo.svg"
            alt="logo"
          />
          <span className="lg:ms-2 md:ms-2 sm:ms-1 ms-1 font-[display] lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-primary2 font-semibold">
            Interno
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
