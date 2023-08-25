import React from 'react'
import { Container, Box } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import PageRoutes from '../Routes/Routes'
import Footer from '../Footer/Footer'
import './Layout.css'

export default function Layout() {
  return (
    <Box 
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      height='100%'
      width='100%'>
      <Navbar/>
      <Box>
        <PageRoutes/>
      </Box>
      <Footer/>
    </Box>
  )
}
