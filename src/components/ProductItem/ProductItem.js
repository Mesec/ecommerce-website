import React from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import './ProductItem.css'

export default function ProductItem({ src, title, newProduct, generalInfo, children }) {
  return (
    <Box className='Product-Item-Container'>
      <Box className='Product-Item-Image'>
        <img src={ src} alt={ title } />
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
