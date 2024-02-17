import React from "react";
import Link from "next/link";
import { IButton } from "@/Interface";
import { CgArrowRight } from "react-icons/cg";

function Button2({ title, to }: IButton) {
  return (
    <div className="my-4 p-2 flex item-center justify-center  w-[209px] h-10 text-[#fff] bg-primary1 hover:bg-primary2 ease-in-out duration-300 rounded-[10px] text-center text-[17px] font-semibold  ">
      <Link href={to}>{title}</Link>
      <CgArrowRight className="w-4 h-4 ms-2 mt-1.5 text-primary2 hover:text-primary1 ease-in-out duration-300 " />
    </div>
  );
}

export default Button2;
