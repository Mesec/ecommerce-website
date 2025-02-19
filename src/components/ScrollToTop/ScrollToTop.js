import { useEffect } from 'react';

const { useLocation } = require('react-router-dom');

const ScrollToTop = ({ children }) => {
  console.log(children)
  const pathname = window.location.pathname;
  console.log(pathname)
  useEffect(() => {
    console.log('TEST')
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    console.log(window)
  }, [window.location.pathname]);

  return (
    <>{ children }</>
  );
};

export default ScrollToTop;