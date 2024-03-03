import React from "react";
import Image from "next/image";
import MediaIcons from "../MediaIcons";

const TeamOf4s = () => {
  return (
    <div className="wrapper grid grid-cols-2 md:grid-cols-4 gap-5 flex-wrap">
      <div className="single-card">
        <div className="front w-48 py-5">
          <Image
            className="w-full"
            src="./images/lucas.svg"
            alt="team member/male"
            width={100}
            height={100}
          />
        </div>
        <div className="back w-48 h-[292.5px] py-5 flex flex-col justify-between items-center bg-white rounded-3xl">
          <div className="text-center">
            <h4 className="text-lg md:text-xl font-semibold font-[display] text-main-2">
              Lucas Reyna
            </h4>
            <p className="text-xs md:text-sm text-main-4 font-[other]">
              Design, Australia
            </p>
          </div>
          <MediaIcons />
          <div className="text-center text-sm text-main-4">
            <p>+1 (378) 400-1234</p>
            <p>lucas@email.com</p>
          </div>
        </div>
      </div>

      <div className="single-card">
        <div className="front w-48 py-5">
          <Image
            className="w-full"
            src="./images/natasha.svg"
            alt="team member/female"
            width={100}
            height={100}
          />
        </div>
        <div className="back w-48 h-[292.5px] py-5 flex flex-col justify-between items-center bg-white rounded-3xl space-y-7">
          <div className="text-center">
            <h4 className="text-lg md:text-xl font-semibold font-[display] text-main-2">
              Natasha Julie
            </h4>
            <p className="text-xs md:text-sm text-main-4 font-[other] ">
              Design, Australia
            </p>
          </div>
          <MediaIcons />
          <div className="text-center text-sm text-main-4">
            <p>+1 (378) 420-1234</p>
            <p>julie@email.com</p>
          </div>
        </div>
      </div>
      <div className="single-card">
        <div className="front w-48 py-5">
          <Image
            className="w-full"
            src="./images/nora.svg"
            alt="team member/female"
            width={100}
            height={100}
          />
        </div>
        <div className="back w-48 h-[292.5px] py-5 flex flex-col justify-between items-center bg-white rounded-3xl space-y-7">
          <div className="text-center">
            <h4 className="text-lg md:text-xl font-semibold font-[display] text-main-2">
              Nora Owen
            </h4>
            <p className="text-xs md:text-sm text-main-4 font-[other]">
              Design, Australia
            </p>
          </div>
          <MediaIcons />
          <div className="text-center text-sm text-main-4">
            <p>+1 (378) 407-1234</p>
            <p>nora@email.com</p>
          </div>
        </div>
      </div>
      <div className="single-card">
        <div className="front w-48 py-5">
          <Image
            className="w-full"
            src="./images/john.svg"
            alt="team member/male"
            width={100}
            height={100}
          />
        </div>
        <div className="back w-48 h-[292.5px] py-5 flex flex-col justify-between items-center bg-white rounded-3xl space-y-7">
          <div className="text-center">
            <h4 className="text-lg md:text-xl font-semibold font-[display] text-main-2">
              John Smith
            </h4>
            <p className="text-xs md:text-sm text-main-4 font-[other]">
              Design, Australia
            </p>
          </div>
          <MediaIcons />
          <div className="text-center text-sm text-main-4">
            <p>+1 (378) 500-1234</p>
            <p>smith@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOf4s;
