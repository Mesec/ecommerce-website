import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedItems.css'

export default function FeaturedItemThree() {
  return (
    <Grid item className='Featured-Item-Three'>
      <Box className='Featured-Item-Three-Earphones'></Box>
      <Box>
        <Typography variant='h4'>
          YX1 EARPHONES
        </Typography>
        <Link to={ `/product/e-01` }>
          <Button variant="outlined">See Product</Button>
        </Link>
      </Box>
    </Grid>
  )
}
