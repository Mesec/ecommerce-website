import { Button } from '@mui/base';
import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import ProductNavigation from '../ProductNavigation/ProductNavigation';
import './Product.css'

export default function Product(props) {
  const { data } = props;
  return (
    <Box className='Product'>
      <Box className='Product-Container'>
        {
          data.map((item, index) => {
            return (
              <Box className='Product-Items' display='flex' flexDirection={ index % 2 === 0 ? 'row' : 'row-reverse'}>
                <Box className='Product-Image-Container'>
                  <img src={ item.src } alt={ item.title } />
                </Box>
                <Box className='Product-Description'>
                  { item.newProduct && <Typography className='New-Product' variant='h7'>NEW PRODUCT</Typography>}
                  <Typography variant='h4'>{ item.title }</Typography>
                  <Typography variant='body1'>{ item.description }</Typography>
                  <Button variant='contained'>SEE PRODUCT</Button>
                </Box>
              </Box>
            )
          })
        }
      </Box>
      <ProductNavigation />
    </Box>
  )
}
