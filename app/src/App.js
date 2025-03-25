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
import { Card } from './Components/Cards/Card';
// import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
          setLoading(false)
      },2000)
    }
  }, [loading])

  

  
  return (<>
   
    {/* <Routes>
      <Route path={"/"} element={<HomePage />}></Route>
      <Route path='/shop' element={<ShopPage />}></Route>
      <Route path='/user/items'></Route>
      <Route path="/Contact-us"></Route>
    </Routes> */}
    <Card imgsrc={"https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png"}
      title={"Nike Air Jordan"}
      price={"20$"} />
    
  </>
   
  );
}

export default App;
