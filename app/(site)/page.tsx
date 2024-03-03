import React from "react";
import BannerLg from "@/Components/HomePage/BannerLg";
import OurWork from "@/Components/HomePage/OurWork";
import WhoWeAre from "@/Components/HomePage/WhoWeAre";
import Reviews from "@/Components/HomePage/Reviews";
import Brands from "@/Components/Brands";
import NumberSection from "@/Components/NumberSection";
import Join from "@/Components/Join";
import Projects from "@/Components/HomePage/Projects";
import ArticleSection from "@/Components/HomePage/ArticleSection";
import store from "../../redux/store";
import BrandLogo from "@/Components/BrandLogo";

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
      <ArticleSection />
      <Join />
    </div>
  );
}

export default page;
