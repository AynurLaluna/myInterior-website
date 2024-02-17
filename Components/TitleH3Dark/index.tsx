import React from "react";
import { ITitleH3 } from "@/Interface";
const TitleH3Dark = ({ title }: ITitleH3) => {
  return (
    <div>
      <h3 className="text-center my-10 text-3xl font-bold font-[display] text-primary2 leading-10 tracking-wide">
        {title}
      </h3>
    </div>
  );
};

export default TitleH3Dark;
