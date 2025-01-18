import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Speakers from '../../assets/images/speakers.png'
import './Home.css'
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation'
import { Link } from 'react-router-dom'
import FeaturedItemOne from 'components/FeaturedItems/FeaturedItemOne'

export default function Home() {
  return (
    <Box className='Home-Main-Content'>
      <ProductNavigation />
      <FeaturedItemOne />
      <Grid container className='Home-Main-Content'>
        <Grid lg={ 10 } item className='Home-Second'>
          <Box>
            <Typography variant='h4'>
              ZX7 SPEAKER
            </Typography>
            <Link to={ `/product/s-02` }>
              <Button variant="outlined">See Product</Button>
            </Link>
          </Box>
        </Grid>
        <Grid lg={ 10 } item className='Home-Third'>
          <Box className='Home-Third-Earphones'></Box>
          <Box>
            <Typography variant='h4'>
              YX1 EARPHONES
            </Typography>
            <Link to={ `/product/e-01` }>
              <Button variant="outlined">See Product</Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
      </Box>
  )
}
