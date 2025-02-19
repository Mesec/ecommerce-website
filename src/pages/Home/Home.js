import { Box, Grid } from '@mui/material'
import React from 'react'
import './Home.css'
import FeaturedItemSingle from '../../components/FeaturedItemSingle/FeaturedItemSingle'
import FeaturedItemDouble from '../../components/FeaturedItemDouble/FeaturedItemDouble'
import Categories from '../../components/Categories/Categories'
import Commercial from '../../components/Commercial/Commercial'
import data from '../../db/products.json'

export default function Home() {
  return (
    <Box className='Home-Main-Content'>
      <Categories />
      <Grid columnSpacing={6} rowSpacing={10} container className='Home-Grid-Item'>
        {
          data.newArticles.map(item => {
            return <Grid item lg={ 6 } xs={ 12 }>
              <FeaturedItemSingle { ...item }/>
            </Grid>
          })
        }
        <Grid item lg={12} width='100%' className='Home-Grid-Item'>
          <FeaturedItemDouble />
        </Grid>
        <Grid xs={12} item className='Home-Grid-Item'>
          <Commercial/>
        </Grid>
      </Grid>
    </Box>
  )
}
