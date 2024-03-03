import Banner2 from "@/Components/Banner2";
import Section2 from "@/Components/TeamSingle/Section2";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bannerTeamSingle bg-center bg-auto bg-no-repeat">
        <Banner2 header="Professional Single" title="Home / Team Single" />
        <Section2 />
      </div>
    </div>
  );
};

export default page;
