import React from "react";

const info = [
  { id: 1, title: 12, text: "Years Of Experience" },
  { id: 2, title: 85, text: "Success Project" },
  { id: 3, title: 15, text: "Active Project" },
  { id: 4, title: 95, text: "Happy Customers" },
];
const NumberSection = () => {
  return (
    <div className="my-32 w-full lg:h-[260px] md:h-[200px] h-[140px] bg-main-3 grid grid-cols-4 divide-x divide-main-1 ">
      {info.map(({ id, title, text }) => {
        return (
          <div className="flex flex-col justify-center items-center">
            <h4 className=" lg:text-5xl text-main-1 font-semibold font-[display]">
              {title}
            </h4>
            <p className="lg:mt-4  text-center lg:text-md md:text-md sm:text-sm max-sm:text-xs font-[font] text-main-4 ">
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NumberSection;
