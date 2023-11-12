import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from '../../pages/Home/Home';
import ProductSection from '../../pages/ProductSection/ProductSection';
import data from '../../db/products.json';
import Product from '../../pages/Product/Product';

const PageRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/headphones" element={ <ProductSection products={ data.products } type='headphones'/> } />
        <Route path="/speakers" element={ <ProductSection products={ data.products } type='speakers'/> } />
        <Route path="/earphones" element={ <ProductSection products={ data.products } type='earphones'/> } />
        <Route path="/product/:id" element={ <Product/> } />
      </Routes>
  );
}

export default PageRoutes;
