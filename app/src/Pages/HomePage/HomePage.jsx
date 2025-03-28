import React, { useEffect, useState, useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import myContext from "../../Context/mycontext";
// import { Card } from "../../UIelement/Card/Card";
// import Card from "../../UIelement/index";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { useCallback } from "react";

export const HomePage = ({ Shoplocation }) => {
  const [data, setData] = useState([]);
  const [spermission, setSpermission] = useState(false);
  const [sinput, setSInput] = useState("");
  const [isNoData, setIsNoData] = useState(false);

  const productData = useContext(myContext);
  let productsInfo = productData.data;

  useEffect(() => {
    setData(productsInfo);
  }, [productData]); // Fix: Added dependency

  const handleSearchField = (data) => {
    console.log("finaly in header component", data);
    if (data == "") {
      setIsNoData(false);
      setData(productsInfo);
    } else {
      setSInput(data);
    }
  };
  const handleSearchPermission = (permit) => {
    console.log(permit, "permission in ok");
    setSpermission(permit);
    trigerSearchFunction();
  };

  const trigerSearchFunction = () => {
    if (spermission === true) {
      console.log(sinput, "search input was like");
      setIsNoData(false);
      let dt = data.filter(
        (item) => item.name === sinput || item.slug === sinput
      );
      if (dt.length === 0) {
        setIsNoData(true);
      } else {
        setIsNoData(false);
        setData(dt);
      }

      // setData(searchValue);
    } else {
      setIsNoData(false);
      setData(productsInfo);
    }
  };

  // useCallback(() => {
  //   console.log("this is current location of ", window.location.href);
  // }, [window.location.href]);

  useEffect(() => {
    if (spermission === true) {
      console.log(sinput, "search input was like");
      let dt = data.filter(
        (item) => item.name === sinput || item.slug === sinput
      );
      console.log(dt, "dt");
      if (dt.length === 0) {
        setIsNoData(true);
        console.log("no data found");
      } else {
        setIsNoData(false);
        setData(dt);
      }

      // setData(searchValue);
    } else {
      setData(productsInfo);
    }
  }, [spermission]);

  return (
    <>
      <div className="home-page-main">
        <Header
          searchField={handleSearchField}
          searchPermission={handleSearchPermission}
        />

        <div className="products">
          <div className="container">
            {!isNoData ? (
              <>
                <div className="row">
                  {data.map((item, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                      <div className="card_box">
                        {/* Clickable Category */}
                        <span>
                          <a
                            href={`/shop/${item.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="category-link"
                            onClick={() => Shoplocation(item.slug)}
                          >
                            <div className="card-body">
                              <h3>Category</h3>
                              <h5
                                className="card-title"
                                // style={{ pointerEvents: "none" }}
                                onClick={() => console.log("none clicakble")}
                              >
                                {item.name}
                              </h5>
                              {/* {console.log(item.slug, "description")} */}
                              <Link
                                className="card-text"
                                to={`shop/${item.name}`}
                              >
                                View
                              </Link>
                              {/* <button className="btn btn-danger">View</button> */}
                            </div>
                          </a>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className=" text-white Ndf display-1">No Data Found !</div>
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
