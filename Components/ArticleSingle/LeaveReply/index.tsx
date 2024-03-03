import Button from "@/Components/Button";
import React from "react";

const LeaveReply = () => {
  return (
    <div className="container mx-auto w-[88vw] my-20 md:my-32">
      <h4 className="lg:text-2xl md:text-2xl sm:text-lg text-lg font-semibold font-[display] my-5 ">
        Leave a Reply
      </h4>
      <div className="">
        <div className="space-x-5">
          <input
            className="lg:w-[280px] border-b border-black py-2 font-[other] placeholder:text-main-4"
            type="name"
            placeholder="Name"
            required
          />
          <input
            className="lg:w-[280px] border-b border-black py-2 font-[other] placeholder:text-main-4"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="space-x-5">
          <input
            className="lg:w-[280px] border-b border-black py-2 font-[other] placeholder:text-main-4"
            type="text"
            placeholder="Website"
            required
          />
          <input
            className="lg:w-[280px] border-b border-black py-2 font-[other] placeholder:text-main-4"
            type="phone"
            placeholder="Phone"
            required
          />
        </div>
        <input
          className="w-96 lg:h-[10rem] md:h-[7rem] h-20 border-b font-[other] border-black placeholder:text-main-4"
          type="textarea"
          placeholder="Hello I am interested in.."
        />
        <div className="pt-5 flex items-center space-x-2">
          <input className="" type="checkbox" id="save" />
          <label
            className="lg:text-base md:text-base sm:text-sm max-sm:text-sm font-[other] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-main-1"
            htmlFor="save">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      </div>
      <div className="mt-10">
        <Button title="Send Now" to="#" />
      </div>
    </div>
  );
};

export default LeaveReply;
