import Banner2 from "@/Components/Banner2";
import Brands from "@/Components/Brands";
import NumberSection from "@/Components/NumberSection";
import ListSec from "@/Components/SingleService/ListSec";
import Portfolio from "@/Components/SingleService/Portfolio";
import SingleServicesSec1 from "@/Components/SingleService/SingleServicesSec1";
import VideoSec from "@/Components/SingleService/VideoSec";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner2 header="Service Single" title="Home / Services Single" />
      <SingleServicesSec1 />
      <Brands />
      <VideoSec />
      <ListSec />
      <Portfolio />
      <NumberSection />
    </div>
  );
};

export default page;
