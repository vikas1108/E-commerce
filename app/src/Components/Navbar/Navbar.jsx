import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import "./navbar.css";
import { useRef } from "react";
import { useState } from "react";

export const Navbar = ({ getData, getPermission }) => {
  const [searchinput, setSearchInput] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isCloseSearchBar, setIsCloseSearchBar] = useState(true);

  const handleSearch = () => {
    if (isSearch === false) {
      setIsSearch(true);
      getPermission(true);
    } else {
      setIsSearch(false);
      getPermission(false);
      let value = "";
      handleSearchInput(value);
    }
  };
  const handleSearchInput = (data) => {
    let value = data;
    setSearchInput(value);
    console.log(value, "");
    if (value === "") {
      setIsSearch(false);
      setSearchInput("");
      getData(value);
    } else {
      setSearchInput(value);
      getData(value);
    }
    // if (isSearch === false) {
    //   console.log(e.target.value, "search element");
    //   setSearchInput(value);
    //   getData(value);
    // } else {
    //   setSearchInput("");
    //   getData("");
    // }
  };
  return (
    <>
      <div className="nav">
        <div className="fw-bold shp fs-5">Shop</div>
        <div className="search-bar">
          <input
            className="search-input"
            placeholder="search here"
            value={searchinput}
            onChange={(e) => handleSearchInput(e.target.value)}
          ></input>
          <button
            style={{
              border: "1px solid skyblue",
              width: "70px",
              color: "white",
              backgroundColor: "	#0096FF",
              borderRadius: "20px",
            }}
            onClick={() => handleSearch()}
          >
            {isSearch ? "Clear" : "Search"}
          </button>
        </div>

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
          {/* <Link to="/search" className="text-white nelem">
            <FaSearch />
          </Link> */}
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

{
  /* <div className="nav">
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
</div>; */
}
