import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Speakers from '../../assets/images/speakers.png'
import './Home.css'
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation'
import { Link } from 'react-router-dom'
import FeaturedItemOne from 'components/FeaturedItems/FeaturedItemOne'
import FeaturedItemTwo from 'components/FeaturedItems/FeaturedItemTwo'
import FeaturedItemThree from 'components/FeaturedItems/FeaturedItemThree'

export default function Home() {
  return (
    <Box className='Home-Main-Content'>
      <Box className='Home-Header'>
        <ProductNavigation />
      </Box>
      <Box className='Home-Body'>
        <FeaturedItemOne />
        <FeaturedItemTwo />
        <FeaturedItemThree />
      </Box>
    </Box>
  )
}
