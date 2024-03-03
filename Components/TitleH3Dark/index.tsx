import React from "react";
import { ITitleH3 } from "@/Interface";
const TitleH3Dark = ({ title }: ITitleH3) => {
  return (
    <div>
      <h3 className="w-64 md:w-80 lg:w-96 text-center mt-10 text-2xl md:text-[1.5rem] lg:text-3xl font-bold font-[display] text-main-2 md:leading-8 lg:leading-10 md:tracking-wide">
        {title}
      </h3>
    </div>
  );
};

export default TitleH3Dark;
