import Button from "@/Components/Button";
import React from "react";

const NotFound = () => {
  return (
    <div className="pl-20 flex items-center gap-x-10">
      <div className="space-y-5">
        <h1 className="lg:text-7xl md:text-6xl sm:text-6xl text-6xl text-main-1 font-bold">
          404
        </h1>
        <p className="text-main-2 lg:text-xl md:text-lg sm:text-base text-sm font-[display] font-semibold ">
          We are sorry, but the page you requested was not found
        </p>
        <Button title="Back to Home" to="/" />
      </div>
      <div className="notFound w-full h-[100vh] rounded-bl-full  "></div>
    </div>
  );
};

export default NotFound;
