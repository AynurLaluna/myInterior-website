import Banner2 from "@/Components/Banner2";
import RoomGrid from "@/Components/OurProjects/RoomGrid";
import React, { useState } from "react";

const page = () => {
  return (
    <div>
      <div className="ourPBanner">
        <Banner2 header="Our Project" title="Home / Project" />
      </div>
      <RoomGrid/>
    </div>
  );
};

export default page;
