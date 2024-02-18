import axios from "axios";
import React from "react";
import { IProps } from "@/Interface";
import TitleH3Dark from "../TitleH3Dark";
import ArticleBox from "../ArticleBox";

const url = "http://localhost:3001/articles_news";
const ArticleSection = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mx-auto">
      <div className="">
        <TitleH3Dark title="Article & News" />
        <p className="text-center mb-5">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when looking at its layouts the points
          of using.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 ">
        {data.map(({ id, imageUrl, title, text }: IProps) => {
          return (
            <ArticleBox id={id} imageUrl={imageUrl} title={title} text={text} />
          );
        })}
      </div>
    </div>
  );
};

export default ArticleSection;
