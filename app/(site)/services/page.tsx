import Banner2 from "@/Components/Banner2";
import Join from "@/Components/Join";
import ServiceSection1 from "@/Components/Services/ServiceSection1";
import ServiceSection2 from "@/Components/Services/ServiceSection2";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner2 header="Services" title="Home / Services" />
      <ServiceSection1 />
      <ServiceSection2 />
      <Join />
    </div>
  );
};

export default page;
