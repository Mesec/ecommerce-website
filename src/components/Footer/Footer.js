import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'
import NavigationItems from '../navbar/NavigationItems/NavigationItems';

export default function Footer() {
  return (
    <Box className='Footer'>
      <Grid container spacing={2} alignItems='center'>
        <Grid xl={ 6 } sm={ 3 } xs={ 12 } item textAlign={{ xs: 'center', sm: 'left' }}>
          <IconButton size="small">
            <img src={ Logo } alt='Audiophile' />
          </IconButton>
        </Grid>
        <Grid xl={ 6 } sm={9} xs={12} item>
          <NavigationItems calledInFooter={true} />
        </Grid>
      </Grid>
      <Grid container spacing={ 2 } className='Footer-Bottom'>
        <Grid xl={ 6 } sm={12} xs={12} item>
          <Typography variant='body1' color='secondary' className='Footer-Description'>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </Typography>
        </Grid>
        <Grid sm={6} xs={12} item>
          <Typography variant='body1' color='secondary' className='Footer-Copyright'>
            Copyright 2021. All Rights Reserved
          </Typography>
        </Grid>
        <Grid xl={ 6 } sm={6} xs={12} item>
          <Box display='flex' justifyContent={{ xs: 'center', sm: 'right'}} gap={2}>
            <FacebookIcon color='secondary' />
            <TwitterIcon color='secondary' />
            <InstagramIcon color='secondary' />
          </Box>
        </Grid>
       </Grid>
     </Box>
  )
}
