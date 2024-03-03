import ArticleNews from "@/Components/ArticleNews";
import Banner2 from "@/Components/Banner2";
import LatestPost from "@/Components/LatestPost";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="blogBanner">
        <Banner2 header="Articles & News" title="Home / Blog" />
      </div>
      <LatestPost />
      <ArticleNews />
    </div>
  );
};

export default page;
