import { IDescription } from "@/Interface";
import React from "react";

const Description = ({ text }: IDescription) => {
  return (
    <div>
      <p className="mt-2 text-md font-[other] text-primary4 ">{text}</p>
    </div>
  );
};

export default Description;
