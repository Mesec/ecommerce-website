import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import './App.css';
import Layout from './components/Layout/Layout';
import { useDispatch } from 'react-redux'
import { fetchProducts, setPromotedProduct } from './features/product/productSlice';

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(setPromotedProduct())
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [dispatch]);

  if (loading) {
    return <Box className='Product-Spinner'><CircularProgress /></Box>
  }

  return (
      <Box className='App'>
        <Layout />
      </Box>
  );
}

export default App;
