import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from '../../pages/Home/Home';
import ProductSection from '../../pages/ProductSection/ProductSection';
import { headphones, speakers, earphones, products } from '../../data';
import Product from '../../pages/Product/Product';

const PageRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/headphones" element={ <ProductSection products={ products } type='headphones'/> } />
        <Route path="/speakers" element={ <ProductSection products={ products } type='speakers'/> } />
        <Route path="/earphones" element={ <ProductSection products={ products } type='earphones'/> } />
        <Route path="/product/:id" element={ <Product/> } />
        {/* Add more routes here */ }
      </Routes>
  );
}

export default PageRoutes;
