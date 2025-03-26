import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import "./navbar.css";

export const Navbar = ({ getData, getPermission, cartCount }) => {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="fw-bold shp fs-5">Shop</div>
        <div className="search-bar">
          <input
            className="search-input"
            placeholder="search here"
            onChange={(e) => getData(e.target.value)}
          />
          <button
            style={{
              border: "1px solid skyblue",
              width: "70px",
              color: "white",
              backgroundColor: "#0096FF",
              borderRadius: "20px",
            }}
            onClick={() => {
              if (isSearching == false) {
                getPermission(true);
                setIsSearching(true);
              } else {
                getPermission(false);
                setIsSearching(false);
              }
            }}
          >
            {!isSearching ? "Search" : "Clear"}
          </button>
        </div>

        <div className="elems fw-bold">
          <Link to="/" className=" nelem">
            Home
          </Link>
          <Link to="/Shop" className=" nelem">
            Shop
          </Link>
          <Link to="/Contact-us" className=" nelem">
            Contact us
          </Link>
          <Link
            to="/user/items"
            className="text-white nelem isActive"
            style={{ position: "relative" }}
          >
            <LuShoppingCart />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "5px 10px",
                  fontSize: "12px",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};
