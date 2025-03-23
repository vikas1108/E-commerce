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
    <div className='main-app'>
      
      <HomePage/>

     </div>
    
    
  </>
   
  );
}

export default App;
