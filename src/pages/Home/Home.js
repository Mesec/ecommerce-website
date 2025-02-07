import { Box } from '@mui/material'
import React from 'react'
import './Home.css'
import ProductNavigation from '../../components/product-navigation/ProductNavigation'
import FeaturedItemOne from 'components/featured-items/FeaturedItemOne'
import FeaturedItemTwo from 'components/featured-items/FeaturedItemTwo'
import FeaturedItemThree from 'components/featured-items/FeaturedItemThree'

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
