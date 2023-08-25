import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from '../Home/Home';
import Headphones from '../Headphones/Headphones';

const PageRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/headphones" element={ <Headphones /> } />
        {/* Add more routes here */ }
      </Routes>
  );
}

export default PageRoutes;
