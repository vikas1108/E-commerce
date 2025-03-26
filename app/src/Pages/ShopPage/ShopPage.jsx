import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Card } from "../../Components/Cards/Card";
import axios from "axios";

export const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [cartCount, setCartCount] = useState(0); // State for cart count

  const categories = ["mens-shoes", "mens-shirts", "mens-watches"];

  const fetchProductsData = async () => {
    try {
      const requests = categories.map((category) =>
        axios.get(`https://dummyjson.com/products/category/${category}`)
      );

      const responses = await Promise.all(requests);
      const mergedData = responses.flatMap((res) => res.data.products);

      setProductsData(mergedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  // Function to increase cart count
  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  // Function to decrease cart count
  const handleRemoveFromCart = () => {
    setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
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
      </div>
    </>
  );
};
