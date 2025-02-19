import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import './Home.css'
import FeaturedItemOne from '../../components/FeaturedItems/FeaturedItemOne'
import FeaturedItemTwo from '../../components/FeaturedItems/FeaturedItemTwo'
import FeaturedItemThree from '../../components/FeaturedItems/FeaturedItemThree'
import Categories from '../../components/Categories/Categories'

export default function Home() {
  return (
    <Box className='Home-Main-Content'>
      <Box className='Home-Body'>
        <Categories />
        <FeaturedItemOne />
        <FeaturedItemTwo />
        <FeaturedItemThree />
        <Grid container className='Commercial'>
          <Grid className='Commercial-Info' xl={ 6 } lg={ 6 } md={ 12 } item>
            <Typography variant='h4'>
              Bringing you the <Box component="span">best</Box> audio gear
            </Typography>
            <Typography variant='body1'>
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </Typography>
          </Grid>
          <Grid xl={ 6 } lg={ 6 } md={ 12 } item className='Commercial-Image'></Grid>
        </Grid>
      </Box>
    </Box>
  )
}
