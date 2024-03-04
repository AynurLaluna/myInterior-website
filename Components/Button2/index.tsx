import React from "react";
import Link from "next/link";
import { IButton } from "@/Interface";
import { CgArrowRight } from "react-icons/cg";

function Button2({ title, to }: IButton) {
  return (
    <button
      type="submit"
      className="px-5 md:px-0 md:w-48 w-full py-2 flex item-center justify-center text-[#fff] bg-main-1 hover:bg-main-1 ease-in-out duration-300 rounded-[10px] text-center lg:text-lg md:text-base text-sm font-semibold font-[display] tracking-wider">
      <div className="flex items-center">
        <Link className="text-white" href={to}>
          {title}
        </Link>
        <CgArrowRight className=" size-4 lg:ms-2 ms-1 text-main-2 hover:text-main-1 hover:opacity-100 ase-in-out duration-300 " />
      </div>
    </button>
  );
}

export default Button2;
