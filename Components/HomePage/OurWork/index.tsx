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
    <div className="container m-auto">
      <div className="py-20 flex flex-column justify-center ">
        {review.map(({ id, header, text }) => {
          return (
            <div
              className="w-3/12 px-12 items-center text-center text-primary2 "
              key={id}>
              <h4 className="py-4 font-semibold text-[1.5rem] text-center">
                {header}
              </h4>
              <p className="text-center font-normal text-base text-primary">
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
