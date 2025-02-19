import { Box, Grid } from '@mui/material'
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
      </Grid>
    </Box>
  )
}
