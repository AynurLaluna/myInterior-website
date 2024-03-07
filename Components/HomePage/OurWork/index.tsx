import React from "react";
import { IOurWork } from "@/Interface";
import IconButton from "../../IconButton";
function OurWork() {
  const review: IOurWork[] = [
    {
      id: 0,
      header: "Project Plan",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      id: 1,
      header: "Interior Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      id: 2,
      header: "Realization",
      text: "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
  ];

  return (
    <div className="container mx-auto py-20 md:py-32 w-[88vw]">
      <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center gap-10 ">
        {review.map(({ id, header, text }) => {
          return (
            <div
              className="p-4 md:p-4 lg:p-5 sm:border shadow-md md:border-0 rounded-xl text-center hover:bg-main-3 hover:shadow-xl hover:translate-y-2 ease-in-out duration-300 "
              key={id}>
              <h4 className="py-1 sm:py-1 md:py-2 lg:py-3 font-semibold lg:text-2xl md:text-xl sm:text-lg text-base text-center text-main-2 font-[display]">
                {header}
              </h4>
              <p className="px-6 text-center text-sm sm:text-sm md:text-base lg:text-base text-main-4 font-[other]">
                {text}
              </p>
              <IconButton to="/" title="Read More" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurWork;
