import ArticleNews from "@/Components/ArticleNews";
import Banner2 from "@/Components/Banner2";
import LatestPost from "@/Components/LatestPost";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner2 header="Articles & News" title1="Home" title2="/ Blog" />
      <LatestPost />
      <ArticleNews />
    </div>
  );
};

export default page;
