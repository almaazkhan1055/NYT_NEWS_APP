import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ text, bgColor, url, target }) => {
  return (
    <span>
      <Link
        to={url}
        target={target}
        className={`inline px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white`}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {text}
      </Link>
    </span>
  );
};

export default CustomLink;
