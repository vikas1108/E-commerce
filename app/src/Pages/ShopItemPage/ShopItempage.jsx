import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Card } from "../../Components/Cards/Card";
import axios from "axios";
import "./shopitem.css";

export const ShopItemPage = ({ located }) => {
  const productitem = ["beauty", "fragrances"];
  const [productsData, setProductsData] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //   const handleAddToCart = () => {
  //     setCartCount((prevCount) => prevCount + 1);
  //   };
  //   setProductsData(productitem);
  //   const handleRemoveFromCart = () => {
  //     setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  const fetchProduct = async () => {
    console.log(located, "location");
    const response = await axios
      .get(`https://dummyjson.com/products/category/${located}`)
      .then((res) => {
        console.log(res, "response is coming");
      })
      .catch((err) => {
        console.log(err, "error occured");
      });
  };
  //   };
  useEffect(() => {
    // console.log("page rendered");
    fetchProduct();
  }, []);

  //   console.log("yeah this page is calling again and again");

  return (
    <>
      <div>
        <h1>this is {located} shop item page</h1>
      </div>
    </>
  );
};

{
  /* <div id="nav">
        <Navbar cartCount={cartCount} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {productsData.map((item, index) => (
          <Card
            key={index}
            imgsrc={item.thumbnail}
            title={item.title}
            price={item.price}
            onAddToCart={handleAddToCart} // Increase count
            onRemoveFromCart={handleRemoveFromCart} // Decrease count
          />
        ))}
      </div> */
}
