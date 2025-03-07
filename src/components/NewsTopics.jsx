const NewsTopics = ({ topic }) => {
  return (
    <span
      data-testid="news-topic"
      className="items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
    >
      {topic || "\u00A0"}
    </span>
  );
};

export default NewsTopics;
