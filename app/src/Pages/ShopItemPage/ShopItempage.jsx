import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Card } from "../../Components/Cards/Card";
import axios from "axios";
import "./shopitem.css";

export const ShopItemPage = ({ located }) => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [permission, setPermission] = useState(false);

  // Fetch product data based on the 'located' category
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${located}`
      );
      setProductsData(response.data.products);
      setFilteredProducts(response.data.products);
    } catch (err) {
      console.log(err, "Error occurred while fetching products");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [located]);

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchTerm(query);
    if (query.trim() === "") {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromCart = () => {
    setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <>
      {/* Navbar with search and cart count */}
      <div id="nav">
        <Navbar
          cartCount={cartCount}
          getData={handleSearch}
          getPermission={setPermission}
        />
      </div>

      {/* Display fetched and filtered product data */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <Card
              key={index}
              imgsrc={item.thumbnail}
              title={item.title}
              price={item.price}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
};
