import React from "react";

const info = [
  { id: 1, title: 12, text: "Years Of Experience" },
  { id: 2, title: 85, text: "Success Project" },
  { id: 3, title: 15, text: "Active Project" },
  { id: 4, title: 95, text: "Happy Customers" },
];
const NumberSection = () => {
  return (
    <div className="w-full h-[300px] bg-primary3 grid grid-cols-4">
      {info.map(({ id, title, text }) => {
        return (
          <div className="flex flex-col justify-center items-center">
            <h4 className=" text-5xl text-primary1 font-semibold font-[display]">
              {title}
            </h4>
            <p className=" mt-4 text-center text-md font-[font] text-primary4 ">
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NumberSection;
