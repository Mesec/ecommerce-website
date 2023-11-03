import { Container, Box } from '@mui/material';
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
// import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Routes from './components/Routes/Routes'
function App() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  return (
    <Box>
      <Layout/>
    </Box>
  );
}

export default App;
