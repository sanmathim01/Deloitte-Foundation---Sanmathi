import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from '. /Pages/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Compnents/Layout';
import Page404 from './Pages/Page404';
import AddProduct from './Pages/AddProduct.jsx';
 
const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {path:'/', element:<Home />},
      {path: 'addProduct', element:<AddProduct /> }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
