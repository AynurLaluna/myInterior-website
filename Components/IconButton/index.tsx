import React from "react";
import Link from "next/link";
import { IButton } from "@/Interface";
import { CgArrowRight } from "react-icons/cg";

function IconButton({ title, to }: IButton) {
  return (
    <div className="mt-8 flex flex-column justify-center items-center text-sm text-main-4 hover:text-main-1 ease-in-out duration-300 font-semibold md:leading-5 cursor-pointer">
      <Link href={to}>{title}</Link>
      <CgArrowRight className="size-4 ms-2 " />
    </div>
  );
}

export default IconButton;
