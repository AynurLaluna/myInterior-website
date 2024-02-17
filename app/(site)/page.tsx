import React from "react";
import BannerLg from "@/Components/BannerLg";
import OurWork from "@/Components/OurWork";
import WhoWeAre from "@/Components/WhoWeAre";
import Reviews from "@/Components/Reviews";
import Brands from "@/Components/Brands";
import NumberSection from "@/Components/NumberSection";
import Join from "@/Components/Join";


function page() {
  return (
    <div>
      <BannerLg />
      <OurWork />
      <WhoWeAre />
      <Reviews />
      <Brands />
      <NumberSection />
      <Join />
    
    </div>
  );
}

export default page;
