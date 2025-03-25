import React, { useCallback, useEffect } from "react";
// import { Header } from "../../Components/Header/Header";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Card } from "../../Components/Cards/Card";
import { useState } from "react";
import axios from "axios";

export const ShopPage = () => {
  const [shoesData, setShoesData] = useState([]);
  const fetchShoesData = async () => {
    let shoesData;
    await axios
      .get("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => {
        console.log(res, "response for shoes data");
        setShoesData(res.data.products);
      })
      .catch((err) => {
        console.log(err, "err");
      });

    return shoesData;
  };
  useEffect(() => {
    fetchShoesData();
  }, []);
  console.log(shoesData, "shoes data");
  {
    /* <Card imgsrc={"https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png"}
      title={"Nike Air Jordan"}
      price={"20$"} /> */
  }
  return (
    <>
      <Navbar />
      {shoesData.map((item, index) => {
        return (
          <>
            <div>
              <Card
                imgsrc={item.thumbnail}
                title={item.title}
                price={item.price}
              />
            </div>
          </>
        );
      })}
    </>
  );
};
