import React from "react";
import Link from "next/link";
import { ITag } from "@/Interface";

const TagButton = ({ title }: ITag) => {
  return (
    <Link href="#">
      <button className="m-1 sm:m-1 md:m-2 lg:m-2 px-4 py-2 bg-main-3 text-main-4 rounded-[10px] text-[other] text-xs sm:text-xs md-text-sm lg:text-sm">
        {title}
      </button>
    </Link>
  );
};

export default TagButton;
