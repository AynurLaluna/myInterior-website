import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import MediaIcons from "../../MediaIcons";
import Button from "../../Button";

import Map from "../Map";

const contact = [
  {
    id: 1,
    icon: <MdOutlineMail />,
    li: "info@yourdomain.com",
  },
  {
    id: 2,
    icon: <IoCallOutline />,
    li: "+1 (378) 400-1234",
  },
  {
    id: 3,
    icon: <IoEarthOutline />,
    li: "www.yourdomain.com",
  },
];

const ContactUs = () => {
  return (
    <div className="container mx-auto w-[80vw] my-20 space-y-7 md:space-y-10">
      <h3 className="flex justify-center items-center md:px-60 font-[display] font-bold lg:text-4xl md:text-3xl text-2xl text-center lg:leading-10 md:tracking-wider">
        We love meeting new people and helping them
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-center h-fit space-x-10 space-y-10">
        <div className="w-80 p-10 bg-main-3 rounded-2xl lg:space-y-7 md:space-y-5 space-y-4">
          {contact.map(({ id, icon, li }) => {
            return (
              <div
                className="flex lg:gap-x-4 md:gap-x-3 gap-x-2 items-center"
                key={id}>
                <div className="size-10 bg-white text-main-1 rounded-full flex justify-center items-center">
                  {icon}
                </div>
                <p className=" md:text-base text-xs text-main-4">{li}</p>
              </div>
            );
          })}
          <div className="">
            <MediaIcons />
          </div>
        </div>
        <form
          action="https://getform.io/f/qalpmqra"
          method="POST"
          className="space-y-4 md:px-10">
          <input
            className="w-[45%] mr-4 border-b border-main-2  py-2 text-sm md:text-base font-[other] text-main-2 placeholder:text-main-4 "
            type="text"
            value="name"
            placeholder="Name"
            required
          />
          <input
            className="w-[45%] border-b border-main-2 py-2 text-sm md:text-base font-[other] text-main-2 placeholder:text-main-4 "
            type="email"
            value="email"
            placeholder="Email"
            required
          />
          <input
            className="w-[45%] mr-4 border-b border-main-2 py-2 text-sm md:text-base font-[other] text-main-2 placeholder:text-main-4 "
            type="subject"
            value="subject"
            placeholder="Subject"
            required
          />
          <input
            className="w-[45%] border-b border-main-2 py-2 text-sm md:text-base font-[other] text-main-2 placeholder:text-main-4 "
            type="tel"
            placeholder="Phone"
            value="phone"
            required
          />
          <input
            className="w-full border-b border-main-2 py-10 text-sm md:text-base font-[other] text-main-2 placeholder:text-main-4 "
            type="textarea"
            value="message"
            placeholder="Hello I am interested in.."
            required
          />
          <div className="md:pt-3 flex lg:justify-end md:justify-end justify-center">
            <Button title="Send Now" to="https://getform.io/f/qalpmqra" />
          </div>
        </form>
      </div>

      <Map />
    </div>
  );
};

export default ContactUs;
