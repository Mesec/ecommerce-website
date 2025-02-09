import { useEffect } from 'react';

const { useLocation } = require('react-router-dom');

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("ScrollToTop triggered", pathname);
    setTimeout(() => {
      document.documentElement.scrollTop = 0; // Resetuje <html>
      document.body.scrollTop = 0; // Resetuje <body>
    }, 50); // Dodaj mali delay ako treba
  }, [pathname]);

  return null;
};

export default ScrollToTop;