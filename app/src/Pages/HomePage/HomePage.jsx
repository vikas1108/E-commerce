import React, { useEffect, useState, useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import myContext from "../../Context/mycontext";
// import { Card } from "../../UIelement/Card/Card";
// import Card from "../../UIelement/index";
import "./Homepage.css";

export const HomePage = () => {
  const [data, setData] = useState([]);

  const productData = useContext(myContext);
  let productsInfo = productData.data;

  useEffect(() => {
    console.log(productsInfo, "product data---");
    setData(productsInfo);
  }, [productData]); // Fix: Added dependency

  return (
    <>
      <div className="home-page-main">
        <Header />

        <div className="products">
          <div className="container">
            <div className="row">
              {data.map((item, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <div className="card_box">
                    {/* Clickable Category */}
                    <span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="category-link"
                      >
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          {console.log(item.slug, "description")}
                          {/* <p className="card-text">{item.description}</p> */}
                          {/* <button className="btn btn-danger">View</button> */}
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
