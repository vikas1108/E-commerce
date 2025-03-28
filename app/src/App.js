import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { ShopPage } from "./Pages/ShopPage/ShopPage";
import { ShopItemPage } from "./Pages/ShopItemPage/ShopItempage";
import PageLoader from "./Components/FullPageLoader/PageLoader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("beauty");
  const navigate = useNavigate(); // Use to navigate programmatically

  // Set loading state to false after 2 seconds (this can be improved for better UX)
  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulate loading for 2 seconds
    }
  }, [loading]);

  // Function to handle location/category change
  const handleLocation = (category) => {
    setLocation(category);
    navigate(`/shop/${category}`); // Navigate to the respective category page
  };

  return (
    <>
      {/* You could show a loading screen here if needed */}
      {loading ? (
        <div>Loading...</div> // Replace with a spinner or animation if desired
      ) : (
        <Routes>
          <Route
            path="/"
            element={<HomePage Shoplocation={handleLocation} />}
          />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path={`/shop/${location}`}
            element={<ShopItemPage located={location} />}
          />
          {/* Optionally handle '/user/items' and '/Contact-us' with proper components */}
          <Route path="/user/items" element={<div>User Items Page</div>} />
          <Route path="/Contact-us" element={<div>Contact Us Page</div>} />
        </Routes>
      )}
    </>
  );
}

export default App;
