import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productImagesBasePath } from '../../app/constants'
import './Promoted.css'

export default function Promoted() {
  const product = useSelector((state) => state.products.promoted)
  const cover = require(`/src/assets/images/products${product?.images.cover}`);

  const boxStyle = {
    backgroundImage: `url(${cover})`,
  };

  return (
    <Box className='Home-Header-Container'>
      { product && <Box className='Home-Header' style={ boxStyle }>
        <Typography variant='h7' color='secondary' fontSize='14px'>
          NEW PRODUCT
        </Typography>
        <Typography variant='h4' color='secondary' fontSize='15px'>
          { product.title }
        </Typography>
        <Typography variant='body1' color='secondary'>
          { product.promoInfo }
        </Typography>
        <Link to={ `/product/${product.id}` }>
          <Button variant="contained">
            SEE PRODUCT
          </Button>
        </Link>
      </Box> }
    </Box>
  )
}
