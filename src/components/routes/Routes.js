import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Collection from '../../pages/Collection/Collection';
import data from '../../db/products.json';
import Article from '../../pages/Article/Article';
import Checkout from '../../pages/Checkout/Checkout';

const PageRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/headphones" element={ <Collection products={ data.products } type='headphones'/> } />
        <Route path="/speakers" element={ <Collection products={ data.products } type='speakers'/> } />
        <Route path="/earphones" element={ <Collection products={ data.products } type='earphones'/> } />
        <Route path="/article/:id" element={ <Article/> } />
        <Route path="/checkout" element={ <Checkout /> } />
      </Routes>
  );
}

export default PageRoutes;
