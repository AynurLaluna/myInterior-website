import React from "react";
import Link from "next/link";
import { IButton } from "@/Interface";
import { CgArrowRight } from "react-icons/cg";

function IconButton({ title, to }: IButton) {
  return (
    <div className="mt-8 flex flex-column justify-center items-center text-sm text-primary4 hover:text-primary1 ease-in-out duration-300 font-semibold leading-5 cursor-pointer ">
      <Link href={to}>{title}</Link>
      <CgArrowRight className="w-4 h-4 ms-2 text-primary2 hover:text-primary1 ease-in-out duration-300 " />
    </div>
  );
}

export default IconButton;
