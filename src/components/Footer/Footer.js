import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import NavigationItems from '../Navbar/NavigationItems/NavigationItems'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Person from '../../assets/images/person.png'
import './Footer.css'

export default function Footer() {
  return (
    <Box className='Footer'>
      <Box className='TopFooter'>
        <Box>
          <Typography variant='h4'>
            Bringing you the <Box component="span">best</Box> audio gear
          </Typography>
          <Typography variant='body1'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </Typography>
        </Box>
        <Box>
          <img src={ Person } alt="" />
        </Box>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        className='BottomFooter'>
        <Box></Box>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
          marginBottom='36px'>
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="secondary"
          >
            <img style={ { width: '143px', height: '25px' } } src={ Logo } alt='Audiophile' />
          </IconButton>

          <Box>
            <NavigationItems />
          </Box>
        </Box>
        <Box
          display='flex'
          width='100%'
          justifyContent='space-between'
          className='Footer-Description'>
          <Typography variant='body1' color='secondary' fontSize='15px' lineHeight='25px'>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </Typography>
          <Box
            display='flex'
            width='500px'
            justifyContent='flex-end'
            alignItems='flex-end'
            gap='15px'>
            <FacebookIcon color='secondary' />
            <TwitterIcon color='secondary' />
            <InstagramIcon color='secondary' />
          </Box>
        </Box>
        <Box marginTop='56px' className='Footer-Copy-Right'>
          <Typography variant='body1' color='secondary' fontSize='15px' lineHeight='25px'>
            Copyright 2021. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
   
  )
}
