import React from "react";
import BannerLg from "@/Components/BannerLg";
import OurWork from "@/Components/OurWork";
import WhoWeAre from "@/Components/WhoWeAre";
import Reviews from "@/Components/Reviews";
import Brands from "@/Components/Brands";
import NumberSection from "@/Components/NumberSection";
import Join from "@/Components/Join";
import Projects from "@/Components/Projects";


function page() {
  return (
    <div>
      <BannerLg />
      <OurWork />
      <WhoWeAre />
      <Reviews />
      <Brands />
      <Projects />
      <NumberSection />
      <Join />
    
    </div>
  );
}

export default page;
