import React, { useCallback, useEffect } from "react";
// import { Header } from "../../Components/Header/Header";
import { Navbar } from "../../Components/Navbar/Navbar";
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
        setShoesData(res);
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
  //   let shopdata = fetchShoesData();
  //   console.log(shoesData, "shop data");
  //   useEffect(() => {
  //     console.log(shoesData, "Shop data");
  //   }, [shopdata]);
  return (
    <>
      <Navbar />
    </>
  );
};
