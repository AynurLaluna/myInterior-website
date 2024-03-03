import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { ITeam } from "@/Interface";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const url = "http://localhost:3001/our_team";
const Team = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto w-[80vw] my-20 md:my-32 space-y-5 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16">
        {data.map(({ id, imageUrl, fullName, info }: ITeam) => {
          return (
            <div className="space-y-1" key={id}>
              <div className="">
                <Link href="/team_single">
                  <Image
                    className="w-full"
                    src={imageUrl}
                    alt="a team member"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-main-2 font-[display] text-lg font-semibold ">
                  {fullName}
                </h4>
                <p className="text-main-4 font-[other] text-sm ">{info}</p>
                <div className="flex gap-2 pt-4">
                  <div className=" hover:text-main-1 duration-300 ease-in-out">
                    <Link href="https://www.facebook.com/">
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className=" hover:text-main-1 duration-300 ease-in-out">
                    <Link href="https://twitter.com/">
                      <FaXTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
