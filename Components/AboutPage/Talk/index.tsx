import React from "react";
import Button from "../../Button";

const Talk = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex flex-col justify-center items-center">
        <h2 className="my-10 max-w-[400px] text-center text-3xl font-bold font-[display] text-primary2 leading-10 tracking-wide">
          Creative project? Let's have a productive talk.
        </h2>
        <div>
          <div>
            <input
              className="mr-4 w-[300px] border-b-[0.05rem] py-2"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className=" mr-4 w-[300px] border-b-[0.05rem] py-2"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            className=" w-full min-h-20 border-b-[0.05rem] py-16"
            type="textarea"
            placeholder="Hello I'm interested in.."
          />
        </div>
        <Button to="/" title="Send Now" />
      </div>
    </div>
  );
};

export default Talk;
