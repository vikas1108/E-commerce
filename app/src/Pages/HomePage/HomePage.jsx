import React from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

export const HomePage = () => {
  return (
    <>
      <div className="home-page-main">
        <div className="home-page-header">
          <Header />
        </div>
        <div className="Products">
          <h4>products</h4>
        </div>
        <div className="home-page-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};
