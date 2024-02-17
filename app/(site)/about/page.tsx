import AboutUs from "@/Components/AboutUs/index.";
import Banner2 from "@/Components/Banner2";
import Quote from "@/Components/Quote";
import TeamOf3 from "@/Components/TeamOf";
import Talk from "@/Components/Talk";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner2 header="About Us" title1="Home /" title2=" About Us" />
      <Quote />
      <AboutUs />
      <TeamOf3 />
      <Talk />
    </div>
  );
};

export default page;
