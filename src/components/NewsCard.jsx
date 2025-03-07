import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  return (
    <Link to={`/news/${singleNews?.id}`}>
      <div className="max-w-[400px] min-h-[430px] bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
        {singleNews?.media?.[0]?.["media-metadata"]?.[2]?.url ? (
          <img
            className="rounded-t-lg object-cover object-top h-[200px] w-full"
            src={singleNews?.media?.[0]?.["media-metadata"]?.[2]?.url}
            alt={singleNews?.media?.[0]?.copyright || "News Image"}
          />
        ) : (
          <div className="rounded-t-lg object-cover h-[200px] w-full flex items-center justify-center text-3xl font-semibold">
            No Image Available
          </div>
        )}

        <div className="p-5 flex flex-col gap-5">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
            {singleNews?.title}
          </h3>
          <p className="text-gray-600 line-clamp-3">{singleNews?.abstract}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{singleNews?.byline}</span>
            <span>{singleNews?.published_date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
