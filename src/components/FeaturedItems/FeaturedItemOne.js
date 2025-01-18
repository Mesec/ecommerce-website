import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Speakers from '../../assets/images/speakers.png'
import './FeaturedItems.css'

export default function FeaturedItemOne() {
  return (
    <Grid container className='Featured-Item-One'>
      <Box className='Circle Featured-Item-One-Circle1'></Box>
      <Box className='Circle Featured-Item-One-Circle2'></Box>
      <Box className='Circle Featured-Item-One-Circle3'></Box>
      {/* <img src={ Speakers } alt="" /> */}
      <Grid xl={6} lg={6} md={12} sm={12} xs={12} item className='Featured-Item-Image'></Grid>
      <Grid xl={6} lg={6} md={12} sm={12} xs={12} item className='Featured-Item-One-Description'>
        <Typography variant='h4'>
          ZX9 SPEAKER
        </Typography>
        <Typography variant='body1'>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </Typography>
        <Link to={ `/product/s-01` }>
          <Button variant="contained">See Product</Button>
        </Link>
      </Grid>
    </Grid>
  )
}
