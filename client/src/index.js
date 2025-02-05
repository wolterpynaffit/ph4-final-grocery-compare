import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// COMPONENTS //
import App from './components/App';
import Home from './components/Home';
import ProductList from './components/ProductList'
import SupermarketList from './components/SupermarketList';
import About from './components/About'
import CartList from './components/CartList'

// LOADER 
import { getProducts, getSupermarketLoader, getCarts } from './loaders'

const router = createBrowserRouter([

  {
    path:"/",
    element: <App/>,
    children: [
      {
        index: true, // this indicates default route
        element: <Home/>
      },
      {
        path:"/products",
        element: <ProductList/>,
        loader: getProducts
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/supermarkets",
        element: <SupermarketList/>,
        loader: getSupermarketLoader
      },
      {
        path:"/shopping-cart",
        element: <CartList/>,
        loader: getCarts
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
