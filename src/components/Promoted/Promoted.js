import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Promoted.css'


export default function Promoted() {
  const product = useSelector((state) => state.products.promoted)

  return (
    <Box width='100%'>
      { product &&
        <Grid
          className='Promoted'
          width='100%'
          container
          alignItems="center"
          >
          <Grid xl={ 6 } item  className='Promoted-Info'>
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
          <Grid item xl={ 6 } className='Home-Header-Image-Container'></Grid>
      </Grid> }
    </Box>
  )
}
