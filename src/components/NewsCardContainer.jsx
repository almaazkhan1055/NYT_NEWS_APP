import React from "react";
import NewsCard from "./NewsCard";

const NewsCardContainer = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {news.map((singleNews) => {
        return <NewsCard key={singleNews.id} singleNews={singleNews} />;
      })}
    </div>
  );
};

export default NewsCardContainer;
