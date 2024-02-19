import AboutUs from "@/Components/AboutPage/AboutUs/index.";
import Banner2 from "@/Components/Banner2";
import Quote from "@/Components/AboutPage/Quote";
import TeamOf3 from "@/Components/AboutPage/TeamOf";
import Talk from "@/Components/AboutPage/Talk";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner2 header="About Us" title="Home / Aboout Us" />
      <Quote />
      <AboutUs />
      <TeamOf3 />
      <Talk />
    </div>
  );
};

export default page;
