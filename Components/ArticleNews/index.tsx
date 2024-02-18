import React from "react";
import axios from "axios";
import { IProps } from "@/Interface";
import TitleH3Dark from "../TitleH3Dark";
import ArticleBox from "../ArticleBox";

const url = "http://localhost:3001/article_section";
const ArticleNews = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto">
      <div className="container mx-auto mt-10">
        <h3 className="text-primary2 text-[1.8rem] font-[display] font-bold leading-10 tracking-wide">
          Articles & News
        </h3>
      </div>
      <div className="grid grid-cols-3 ">
        {data.map(({ id, imageUrl, title, text }: IProps) => {
          return (
            <ArticleBox id={id} imageUrl={imageUrl} title={title} text={text} />
          );
        })}
      </div>
    </div>
  );
};

export default ArticleNews;
