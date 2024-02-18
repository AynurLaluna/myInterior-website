import React from "react";
import axios from "axios";
import Link from "next/link";
import { ITeam } from "@/Interface";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const url = "http://localhost:3001/our_team";
const Team = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-4 gap-12">
        {data.map(({ id, imageUrl, fullName, info }: ITeam) => {
          return (
            <div className="" key={id}>
              <div>
                <img src={imageUrl} alt="team member" />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-primary2 font-[display] text-lg font-semibold leading-8 ">
                  {fullName}
                </h4>
                <p className="text-primary4 font-[other] text-sm ">{info}</p>
                <div className="flex mt-3">
                  <div className="px-2">
                    <Link href="https://www.facebook.com/">
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="px-2">
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
