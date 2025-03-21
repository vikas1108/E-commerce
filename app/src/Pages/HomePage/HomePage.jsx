import React from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import "./Homepage.css";
import { useContext } from "react";
import myContext from "../../Context/mycontext";

export const HomePage = () => {
  const productData = useContext(myContext);
  return (
    <>
      <div className="home-page-main">
        <div className="home-page-header">
          <Header />
        </div>
        <div className="Products"></div>
        <div className="home-page-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};
