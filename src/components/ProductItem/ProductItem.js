import React from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import './ProductItem.css'

export default function ProductItem({ title, newProduct, generalInfo, children, images }) {
  const cover = require(`/src/assets/images/products${images?.main}`);

  return (
    <Box className='Product-Item-Container'>
      <Box className='Product-Item-Image'>
        <img src={ cover } alt={ title } />
      </Box>
      <Box className='Product-General-Info'>
        { newProduct && <Typography className='New-Product' variant='h7'>NEW PRODUCT</Typography> }
        <Typography variant='h4'>{ title }</Typography>
        <Typography variant='body1'>{ generalInfo }</Typography>
        <Box display='flex' gap='16px' className='Product-Controls'>
          { children }
        </Box>
      </Box>
    </Box>
  )
}
