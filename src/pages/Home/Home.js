import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import './Home.css'
import FeaturedItemSingle from '../../components/FeaturedItemSingle/FeaturedItemSingle'
import FeaturedItemDouble from '../../components/FeaturedItemDouble/FeaturedItemDouble'
import Categories from '../../components/Categories/Categories'
import Commercial from '../../components/Commercial/Commercial'

export default function Home() {
  return (
    <Box className='Home-Main-Content'>
      <Categories />
      <Grid spacing={6} container>
        <Grid item lg={ 6 } xs={12}>
          <FeaturedItemSingle /> 
        </Grid>
        <Grid item lg={ 6 } xs={12}>
          <FeaturedItemSingle />
        </Grid>
        <Grid item lg={12} width='100%'>
          <FeaturedItemDouble />
        </Grid>
        <Grid xs={12} item>
          <Commercial/>
        </Grid>
        {/* <Grid className='Commercial-Info' xl={ 6 } lg={ 6 } md={ 12 } item>
          <Typography variant='h4'>
            Bringing you the <Box component="span">best</Box> audio gear
          </Typography>
          <Typography variant='body1'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </Typography>
        </Grid>
        <Grid xl={ 6 } lg={ 6 } md={ 12 } item className='Commercial-Image'></Grid> */}
      </Grid>
        {/* <Grid container className='Commercial'>

        </Grid> */}
    </Box>
  )
}
