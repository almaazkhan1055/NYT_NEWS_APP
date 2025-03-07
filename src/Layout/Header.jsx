import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#101828] text-white sm:text-4xl text-2xl font-semibold px-10 py-5">
      <Link to="/">NY Times Popular Articles</Link>
    </header>
  );
};

export default Header;
