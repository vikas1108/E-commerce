import logo from './logo.svg';
import Temporary from './Pages';
import PageLoader from './Components';
import { Navbar } from './Components/Navbar/Navbar';
import './App.css';
import { useEffect, useState } from 'react';
// import { Header } from './Components/Header/Header';
// import { Footer } from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage';
import { ShopPage } from './Pages/ShopPage/ShopPage';
import { ShopItemPage } from './Pages/ShopItemPage/ShopItempage';
import { Card } from './Components/Cards/Card';
// import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState("beauty");

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
          setLoading(false)
      },2000)
    }
  }, [loading])
  const handleLocation = (category) => {
    console.log(category, "category is url")
      setLocation(category)   
  
  }
  
  

  
  return (<>
   
    <Routes>
      <Route path={"/"} element={<HomePage Shoplocation={handleLocation} />}></Route>
      <Route path="/shop" element={<ShopPage />}></Route>
      <Route path={`/shop/${location}`} element={<ShopItemPage located={location} />}></Route>
      <Route path='/user/items'></Route>
      <Route path="/Contact-us"></Route>
    </Routes>
    
  </>
   
  );
}

export default App;
