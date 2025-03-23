import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import myContext from './Context/mycontext';
import axios from "axios"
// import ProductData from './DataFetching/dataFetching';



// const ProductData = myContext();
let data;
const ProductData = await axios
   .get("https://dummyjson.com/products/categories")
   .then((res) => {
     console.log(res);
     data = res;
   })
   .catch((err) => {
     console.log(err, "during fetching data through axios");
   });
  //  console.log(ProductData, "data...");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <myContext.Provider value={data}>
        <App />
        </myContext.Provider>
    </BrowserRouter>
    
  </React.StrictMode>

);


reportWebVitals();
