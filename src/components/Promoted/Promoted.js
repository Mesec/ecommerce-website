import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productImagesBasePath } from '../../app/constants'
import './Promoted.css'

const styles = {
  xl: { padding: '400px'}
}

export default function Promoted() {
  const product = useSelector((state) => state.products.promoted)
  // const cover = require(`/src/assets/images/products${product?.images.cover}`);
  // const boxStyle = {
  //   backgroundImage: `url(${cover})`,
  // };

  return (
    <Box width='100%'>
      { product &&
        <Grid
          className='Promoted'
          width='100%'
          container
          justifyContent="center"
          alignItems="center">
          <Grid xl={ 3 } lg={ 4 } md={ 4 } sm={ 12 } item  className='Promoted-Info'>
          <Typography className='New-Product' variant='h7' color='secondary' fontSize='14px'>
            NEW PRODUCT
          </Typography>
          <Box className='Promoted-Info-Text'>
              <Typography variant='h4' color='secondary' fontSize='15px'>
                { product.title }
              </Typography>
              <Typography className='Promoted-Info-Paragraph' variant='body1' color='secondary'>
                { product.promoInfo }
              </Typography>
          </Box>
          <Link to={ `/product/${product.id}` }>
            <Button variant="contained">
              SEE PRODUCT
            </Button>
          </Link>
        </Grid>
          <Grid item xl={ 6 } lg={ 6 } md={ 6 } sm={ 12 } className='Home-Header-Image-Container'></Grid>
      </Grid> }
    </Box>
  )
}
