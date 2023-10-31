import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Headphones from '../../assets/images/headphones.png'
import Speakers from '../../assets/images/speakers.png'
import Earphones from '../../assets/images/earphones.png'
import './Home.css'
import ProductItem from '../../components/ProductNavigation/NavItem/NavItem';
import Person from '../../assets/images/person.png'
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Box width className='Home' height='100%'>
      <Box className='Home-Header-Container'>
        <Box className='Home-Header'>
          <Typography variant='h7' color='secondary' fontSize='14px'>
            NEW PRODUCT
          </Typography>
          <Typography variant='h4' color='secondary' fontSize='15px'>
            XX99 Mark II Headphones
          </Typography>
          <Typography variant='body1' color='secondary'>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </Typography>
          <Link to={ `/product/h-01` }>
            <Button variant="contained">
              NEW PRODUCT
            </Button>
          </Link>
        </Box>
      </Box>
      <Box className='Home-Main-Content'>
        <ProductNavigation />
        <Box className='Home-First'>
          <img src={ Speakers } alt="" />
          <Box className='Home-First-Description'>
            <Typography variant='h4'>
              ZX9 SPEAKER
            </Typography>
            <Typography variant='body1'>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </Typography>
            <Button variant="contained">See Product</Button>
          </Box>
        </Box>
        <Box className='Home-Second'>
            <Typography variant='h4'>
              ZX9 SPEAKER
            </Typography>
          <Button variant="outlined">See Product</Button>
        </Box>
        <Box className='Home-Third'>
          <Box className='Home-Third-Earphones'></Box>
          <Box>
            <Typography variant='h4'>
              YX1 EARPHONES
            </Typography>
            <Button variant="outlined">See Product</Button>
          </Box>
        </Box>
        {/* <Box className='Home-Fourth'>
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
        </Box> */}
      </Box>
    </Box>
  )
}
