import React from "react";
import { useParams } from "react-router-dom";
import useNews from "../hooks/useNews";
import NewsTopics from "../components/NewsTopics";
import NewsDetails from "../components/NewsDetails";
import CustomLink from "../components/CustomLink";

const SingleNewsPage = () => {
  const { id } = useParams();
  const { news, loading, error } = useNews(1);

  const currentNews = news?.find((singleNews) => String(singleNews.id) === id);

  if (loading) {
    return (
      <p className="text-center text-lg text-gray-600">Loading article...</p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-lg text-red-600 font-semibold">
        Error loading article: {error}
      </p>
    );
  }

  if (!currentNews) {
    return (
      <p className="text-center text-lg text-gray-600 font-semibold">
        Article not found.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-5 px-4 md:px-10 lg:px-20">
      <CustomLink text="Back to Articles" bgColor="#1447e6" url={"/"} />
      <h2 className="text-3xl font-bold text-gray-800">{currentNews.title}</h2>

      <div className="text-gray-600 flex flex-wrap items-center justify-between">
        <span className="text-sm md:text-base">{currentNews.byline}</span>
        <span className="text-sm md:text-base">
          Published: {currentNews.published_date}
        </span>
      </div>

      {currentNews?.media?.[0]?.["media-metadata"]?.[2]?.url ? (
        <img
          className="w-full max-h-96 object-cover rounded-lg object-top shadow-md"
          src={currentNews?.media?.[0]?.["media-metadata"]?.[2]?.url}
          alt={currentNews.media[0]?.copyright}
        />
      ) : (
        <div className="rounded-lg bg-gray-200 flex items-center justify-center h-[200px] w-full text-2xl font-semibold">
          No Image Available
        </div>
      )}

      <p className="text-lg text-gray-700 leading-relaxed">
        {currentNews.abstract}
      </p>
      <hr className="border-gray-300" />

      <NewsDetails
        section={currentNews.nytdsection}
        source={currentNews.source}
      />

      {currentNews.des_facet?.length > 0 && (
        <div className="flex flex-col gap-2">
          <h5 className="font-medium text-gray-700">Topics</h5>
          <div className="flex flex-wrap gap-3">
            {currentNews.des_facet.map((topic, index) => (
              <NewsTopics key={index} topic={topic} />
            ))}
          </div>
        </div>
      )}

      <CustomLink
        text="Read Full Article on NY Times"
        bgColor="#1447e6"
        url={currentNews.url}
        target={"_blank"}
      />
    </div>
  );
};

export default SingleNewsPage;
