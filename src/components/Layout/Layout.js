import React from 'react'
import { Container, Box } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import PageRoutes from '../Routes/Routes'
import Footer from '../Footer/Footer'
import './Layout.css'
import Cart from '../Cart/Cart'

export default function Layout() {
  const [openCart, setOpenCart] = React.useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
  }

  const handleCloseCart = () => setOpenCart(false);

  return (
    <Box 
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      height='100%'
      width='100%'>
      <Cart open={ openCart } handleClose={ handleCloseCart } />
      <Navbar openCartModal={ handleOpenCart }/>
      <Box>
        <PageRoutes/>
      </Box>
      <Footer/>
    </Box>
  )
}
