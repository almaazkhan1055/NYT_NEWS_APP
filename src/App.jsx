import React from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleNewsPage from "./pages/SingleNewsPage";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<SingleNewsPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
