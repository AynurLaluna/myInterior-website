import React from "react";
import Button from "../../Button";

const Talk = () => {
  return (
    <div className="container mx-auto w-[88vw] my-20 md:my-32">
      <div className=" flex flex-col justify-center items-center">
        <h2 className="my-10 max-w-[400px] text-center text-3xl font-bold font-[display] text-primary2 leading-10 tracking-wide">
          Creative project? Let's have a productive talk.
        </h2>
        <div className="flex flex-col justify-center items-center ">
          <div>
            <input
              className=" mr-4 w-80 border-b-[0.05rem] border-main-4 py-2 placeholder:text-main-4 "
              type="text"
              placeholder="Name"
              required
            />
            <input
              className=" mr-4 w-80 border-b-[0.05rem] border-main-4  py-2 placeholder:text-main-4 "
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            className=" w-full min-h-20 border-b-[0.05rem] border-main-4  py-10 md:py-16 placeholder:text-main-4 "
            type="textarea"
            placeholder="Hello I'm interested in.."
          />
        </div>
        <div className="mt-5 ">
          <Button to="#" title="Send Now" />
        </div>
      </div>
    </div>
  );
};

export default Talk;
