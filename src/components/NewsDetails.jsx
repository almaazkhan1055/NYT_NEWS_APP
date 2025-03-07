const NewsDetails = ({ section, source }) => (
  <div className="flex flex-col gap-2">
    <h4 className="text-xl font-semibold text-gray-800">Article Information</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h5 className="font-medium text-gray-700">Section</h5>
        <p className="text-gray-600">{section}</p>
      </div>
      <div>
        <h5 className="font-medium text-gray-700">Source</h5>
        <p className="text-gray-600">{source}</p>
      </div>
    </div>
  </div>
);

export default NewsDetails;
