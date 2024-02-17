import React from "react";

const TeamOf = () => {
  return (
    <div className=" m-auto bg-primary3 ">
      <div className=" m-10 flex flex-col items-center">
        <h2 className="mt-10 text-3xl font-bold font-[display] text-primary2 leading-10 tracking-wide">
          What the People Thinks About Us
        </h2>
        <div className="grid grid-cols-4 gap-2 flex-wrap py-10">
          <div className="py-5">
            <img src="./images/lucas.svg" alt="team member/woman" />
          </div>
          <div className="py-5">
            <img src="./images/natasha.svg" alt="team member/woman" />
          </div>
          <div className="py-5">
            <img src="./images/nora.svg" alt="" />
          </div>
          <div className="py-5">
            <img src="./images/john.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOf;
