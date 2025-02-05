import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system'
import './ProductItem.css'

export default function ProductItem({ title, newProduct, generalInfo, children, images, reverse }) {
  const thumbnail = require(`/src/assets/images/products${images?.main}`);

  return (
    <Grid
      container
      spacing={{ lg: 5, md: 5, sm: 5}}
      // direction={ reverse ? "row" : "row-reverse" }
      // style={{ justifyContent: `${reverse ? 'start': 'end'}` }}
      className='Product-Item-Container'>
      <Grid item xl={4} lg={4} md={6} sm={12}>
        <Box
          className='Product-Item-Image'
          style={ { backgroundImage: `url(${thumbnail})` }}>
        </Box>
      </Grid>
      <Grid item xl={ 6 } lg={ 6 } md={ 6 } sm={ 12 } className='Product-General-Item-Info'>
        <Box>
          { newProduct && <Box className='New-Product-Container'><Typography className='Product-General-New-Product' variant='h7'>NEW PRODUCT</Typography></Box> }
          <Typography variant='h4'>{ title }</Typography>
          <Typography variant='body1'>{ generalInfo }</Typography>
          <Box display='flex' gap='16px' className='Product-Controls'>
            { children }
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
