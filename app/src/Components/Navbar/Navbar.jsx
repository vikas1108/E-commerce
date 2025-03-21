import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="fw-bold shp fs-5">Shop</div>

        <div className="elems fw-bold">
          <Link to="/home" className="text-white nelem">
            Home
          </Link>
          <Link to="/Shop" className="text-white nelem">
            Shop
          </Link>
          <Link to="/Contact-us" className="text-white nelem">
            Contact us
          </Link>
          <Link to="/search" className="text-white nelem">
            <FaSearch />
          </Link>
          <Link to="/user/items" className="text-white nelem isActive">
            <LuShoppingCart />
          </Link>
        </div>
        {/* <div>
          <p className="fw-bold">Sign In</p>
        </div> */}
      </div>
    </>
  );
};
