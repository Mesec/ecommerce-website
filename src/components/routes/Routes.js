import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import Product from '../Product/Product';
import { headphones, speakers, earphones } from '../../data';

const PageRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/headphones" element={ <Product data={ headphones } /> } />
        <Route path="/speakers" element={ <Product data={ speakers } /> } />
        <Route path="/earphones" element={ <Product data={ earphones } /> } />
        {/* Add more routes here */ }
      </Routes>
  );
}

export default PageRoutes;
