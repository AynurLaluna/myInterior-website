import React from "react";
import Button from "../Button";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { CgArrowRight } from "react-icons/cg";

function WhoWeAre() {
  return (
    <div className="container m-auto px-10">
      <div className="my-10 flex justify-between items-center">
        <div className="flex flex-col items-stretch justify-center w-[500px] px-10">
          <h2 className="text-5xl leading-[62.5px] font-bold text-primary2">
            We Create The Art Of Stylish Living Stylishly
          </h2>
          <p className="my-8 px-2 text-md font-light text-primary4">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when looking at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className="flex justify-start items-start ">
            <div className="w-12 h-12 flex justify-center items-center bg-[#F4F0EC] rounded-full">
              <Link href="/">
                <IoCallOutline className="text-primary1" />
              </Link>
            </div>
            <div className="ms-2 flex flex-col">
              <Link href="/">012345678</Link>
              <span>Call Us Anytime</span>
            </div>
          </div>
          <Button title="Get Started" to="/" />
        </div>
        <div>
          <img
            className=" rounded-tr-[326px] rounded-bl-[120px]"
            src="./images/Kitchen.png"
            alt="kitchen image"
          />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
