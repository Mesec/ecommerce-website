import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from '../Home/Home';
import Headphones from '../Headphones/Headphones';
import Product from '../Product/Product';
import { headphones } from '../../data';

const PageRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/headphones" element={ <Product data={ headphones } /> } />
        {/* Add more routes here */ }
      </Routes>
  );
}

export default PageRoutes;
