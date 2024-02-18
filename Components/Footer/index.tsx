import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { LiaCopyright } from "react-icons/lia";
import Logo from "../Logo";

const pages = [
  { id: 1, to: "/about", title: "About Us" },
  { id: 2, to: "/projects", title: "Our projects" },
  { id: 3, to: "/team", title: "Our Team" },
  { id: 4, to: "/contact", title: "Contact Us" },
  { id: 5, to: "/services", title: "Services" },
  { id: 6, to: "/kitchen", title: "Kitchen" },
  { id: 7, to: "/living", title: "Living Area" },
  { id: 8, to: "/bathroom", title: "Bathroom" },
  { id: 9, to: "/dinning", title: "Dinning Hall" },
  { id: 10, to: "/bedroom", title: "Bedroom" },
];

const Footer = () => {
  return (
    <>
      <div className=" max-container w-full h-[350px] flex justify-between items-center gap-x-20">
        <div className="ms-10 flex flex-col gap-y-6">
          <div>
            <Logo />
          </div>
          <p className="pr-6 my-6">
            It is a long established fact that a reader will be distracted
            looking.
          </p>
          <div className="flex gap-x-6">
            <Link
              className=" text-primary2 hover:text-primary1 ease-in-out duration-300  "
              href="https://www.facebook.com/">
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com/">
              <FaXTwitter />
            </Link>
            <Link href="https://www.linkedin.com/">
              <FaLinkedinIn />
            </Link>
            <Link href="https://www.instagram.com/">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="flex gap-20 ">
          <div className="">
            <h4 className="text-primary2 text-[25px] font-bold font-[display]">
              Pages
            </h4>
            <p className="mt-4">
              <Link href="/about">About Us</Link>
            </p>
            <p className="mt-4">
              <Link href="/projects">Our Projects</Link>
            </p>
            <p className="mt-4">
              <Link href="/team">Our Team</Link>
            </p>
            <p className="mt-4">
              <Link href="/contact">Contact Us</Link>
            </p>
            <p className="mt-4">
              <Link href="/services">Services</Link>
            </p>
          </div>
          <div className="mr-4 ">
            <h4 className="text-primary2 text-[25px] font-bold font-[display]">
              Services
            </h4>
            <p className="mt-4">
              <Link href="/kitchen">Kitchen</Link>
            </p>
            <p className="mt-4">
              <Link href="/living">Living Area</Link>
            </p>
            <p className="mt-4">
              <Link href="/bathroom">Bathroom</Link>
            </p>
            <p className="mt-4">
              <Link href="/dinning">Dinning Hall</Link>
            </p>
            <p className="mt-4">
              <Link href="/bedroom">Bedroom</Link>
            </p>
          </div>

          <div className="mr-4 w-1/3">
            <h4 className="text-primary2 text-[25px] font-bold font-[display]">
              Contact
            </h4>
            <p className="mt-4">
              55 East Brichwood Ave. Brooklyn, New York 11201
            </p>
            <p className="mt-4">contact@interno.com</p>
            <p className="mt-4"> (123) 456 - 7890</p>
          </div>
        </div>
      </div>
      <div className="my-6 py-6 flex justify-center items-center font-normal font-[other] text-lg leading-5 text-primary2 border-t-[0.05rem] border-primary4 ">
        Copyright © Interno | Designed by Victorflow Templates - Powered by
        Webflow
      </div>
    </>
  );
};

export default Footer;
