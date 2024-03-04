import Button from "@/Components/Button";
import React from "react";

const LeaveReply = () => {
  return (
    <div className=" container md:mx-auto w-[64vw] my-20 md:my-32">
      <h4 className=" md:text-2xl text-xl font-semibold font-[display] my-5 ">
        Leave a Reply
      </h4>
      <form
        action="https://getform.io/f/qalpmqra"
        method="POST"
        className="space-y-2 md:space-y-4 ">
        <input
          type="text"
          name="name"
          className="w-full md:w-[46%] py-2   md:mr-4 border-b-[0.05rem] border-main-4  text-sm md:text-base font-[other] text-main-2 placeholder:text-main-4 "
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          className="w-full md:w-[46%] py-2  md:mr-4 border-b-[0.05rem] border-main-4  text-sm md:text-base font-[other] text-main-2 placeholder:text-main-4 "
          placeholder="Email"
          required
        />

        <input
          type="text"
          name="website"
          placeholder="Website"
          required
          className="w-full md:w-[46%] py-2  md:mr-4 border-b-[0.05rem] border-main-4  text-sm md:text-base font-[other] text-main-2 placeholder:text-main-4 "
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          className="w-full md:w-[46%] py-2  md:mr-4 border-b-[0.05rem] border-main-4  text-sm md:text-base font-[other] text-main-2 placeholder:text-main-4 "
        />

        <input
          type="textarea"
          name="message"
          className="border-b border-main-4  md:border-main-2 w-full h-24 md:h-32  text-sm md:text-base placeholder-main-4 font-[other]"
          placeholder="Hello, I am interested in.."
        />
        <div className="pt-5 flex items-center space-x-2">
          <input className="" type="checkbox" id="save" required name="save" />
          <label
            className="lg:text-base md:text-base sm:text-sm max-sm:text-sm font-[other] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-main-1"
            htmlFor="save">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <div className="pt-7 flex lg:justify-end md:justify-end justify-center">
          <Button title="Send Now" to="https://getform.io/f/qalpmqra" />
        </div>
      </form>
    </div>
  );
};

export default LeaveReply;
