import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import myContext from './Context/mycontext';
import ProductData from './DataFetching/dataFetching';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <myContext.Provider value={ProductData}>
        <App />
        </myContext.Provider>
    </BrowserRouter>
    
  </React.StrictMode>

);


reportWebVitals();
