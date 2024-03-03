import React from "react";
import Button from "../../Button";

const Talk = () => {
  return (
    <div className="container mx-auto w-[80vw] my-20 md:my-32">
      <div className=" flex flex-col justify-center items-center">
        <h2 className="my-10 max-w-[400px] text-center text-3xl font-bold font-[display] text-main-2 md:leading-10 md:tracking-wide">
          Creative project? Let's have a productive talk.
        </h2>
        <form
          action="https://getform.io/f/qalpmqra"
          method="POST"
          className="flex flex-col justify-center items-center ">
          <div>
            <input
              className="mr-4 w-full md:w-80 border-b-[0.05rem] border-main-4 py-2 placeholder:text-main-4 font-[other]"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className=" mr-4 w-full md:w-80 border-b-[0.05rem] border-main-4  py-2 placeholder:text-main-4 font-[other]"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            className=" w-full h-32 border-b-[0.05rem] border-main-4  py-10 md:py-16 placeholder:text-main-4 font-[other]"
            type="textarea"
            name="message"
            placeholder="Hello I am interested in.."
          />
          <div className="w-full pt-5 flex lg:justify-end md:justify-end justify-center">
            <Button title="Send Now" to="https://getform.io/f/qalpmqra" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Talk;
