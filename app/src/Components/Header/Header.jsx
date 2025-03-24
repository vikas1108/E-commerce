import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";
import "./header.css";

export const Header = ({ searchField, searchPermission }) => {
  const [getSearchData, setGetSearchData] = useState([]);
  const handleScrollDown = () => {
    // console.log("get start shoping");
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  const handleInputData = (searchinputData) => {
    setGetSearchData(searchinputData);
    searchField(searchinputData);
    console.log(searchinputData, "--search input data");
  };
  // console.log(searchField, "---search field");
  // console.log(searchPermission, "--searchPermission");
  const handleGetPermission = (spermit) => {
    console.log("spermit", spermit);
    searchPermission(spermit);
  };
  return (
    <>
      <div className="header">
        <Navbar getData={handleInputData} getPermission={handleGetPermission} />
        <div className="second header">
          <p className="h1 text-secondary display-1">Special Offers</p>
          <small
            className="fw-bold text-secondary"
            style={{
              border: "1px solid white",
              backgroundColor: "white",
              marginLeft: "1em",
              boxShadow: "1px 1px 1px white",
              borderRadius: "3px",
            }}
          >
            Buy 2 get 1 free in just Rs-/499
          </small>
          <div className="gss">
            <button className="btn" onClick={handleScrollDown}>
              <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                className="sparkle"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>

              <span className="text">Get Start Shoping Now </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
