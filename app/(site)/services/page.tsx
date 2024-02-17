import Banner2 from "@/Components/Banner2";
import Join from "@/Components/Join";
import ServiceSection1 from "@/Components/ServiceSection1";
import ServiceSection2 from "@/Components/ServiceSection2";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner2 header="Services" title1="Home /" title2=" Services" />
      <ServiceSection1 />
      <ServiceSection2 />
      <Join />
    </div>
  );
};

export default page;
