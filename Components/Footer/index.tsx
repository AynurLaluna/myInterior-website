import React from "react";
import Link from "next/link";
import MediaIcons from "../MediaIcons";
import Logo from "../Logo";

const footer = [
  {
    id: 1,
    title: "Pages",
    li: ["About Us", "Our Projects", "Our Team", "Contact Us", "Services"],
  },

  {
    id: 2,
    title: "Services",
    li: ["Kitchen", "Living Area", "Bathroom", "Dinning Hall", "Services"],
  },
  {
    id: 3,
    title: "Services",
    li: [
      "55 East Brichwood Ave. Brooklyn, New York 11201",
      "contact@interno.com",
      "(123)456-7890",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="py-7 container mx-auto w-[88vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-10 md:gap-8 gap-7 ">
        <div className="flex flex-col md:gap-y-6 gap-y-4">
          <div>
            <Logo />
          </div>
          <p className="lg:w-10/12 md:w-1/3 w-1/3 lg:my-2 md:my-1.5 my-1 md:text-base sm:text-sm text-xs text-main-4">
            It is a long established fact that a reader will be distracted
            looking.
          </p>
          <MediaIcons />
        </div>
        <div className="nav">
          <h4 className="text-main-2 md:text-xl text-lg font-bold font-[display]">
            Pages
          </h4>

          <p className="lg:my-4 md:my-3 my-1.5  md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/about">About Us</Link>
          </p>
          <p className="lg:my-4 md:my-3 my-1.5  md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/projects">Our Projects</Link>
          </p>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/team">Our Team</Link>
          </p>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/contact">Contact Us</Link>
          </p>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/services">Services</Link>
          </p>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/pricing">Pricing and Plan</Link>
          </p>
        </div>
        <div>
          <h4 className="text-main-2 md:text-xl sm:text-lg text-lg font-bold font-[display]">
            Services
          </h4>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/kitchen">Kitchen</Link>
          </p>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/living">Living Area</Link>
          </p>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm  text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/bathroom">Bathroom</Link>
          </p>

          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm  text-main-4 hover:text-main-1 duration-300 ease-in-out">
            <Link href="/bedroom">Bedroom</Link>
          </p>
        </div>

        <div>
          <h4 className="text-main-2 md:text-xl text-lg font-bold font-[display]">
            Contact
          </h4>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            55 East Brichwood Ave. Brooklyn, New York 11201
          </p>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            contact@interno.com
          </p>
          <p className="lg:my-4 md:my-3 my-1.5 md:text-base text-sm text-main-4 hover:text-main-1 duration-300 ease-in-out">
            {" "}
            (123) 456 - 7890
          </p>
        </div>
      </div>
      <div className=" lg:my-10 md:my-8 sm:my-6 my-4 flex justify-center items-center font-normal font-[other] md:text-lg sm:text-base text-sm lg:pt-10 md:pt-8 sm:pt-6 pt-4 text-main-2 border-t-[0.05rem] border-main-4 ">
        Copyright © Interno | Designed by VictorFlow Templates - Powered by
        WebFlow
      </div>
    </>
  );
};

export default Footer;
