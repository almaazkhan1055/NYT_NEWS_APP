import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gray-50 px-10 py-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
