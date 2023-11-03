import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Speakers from '../../assets/images/speakers.png'
import './Home.css'
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation'

export default function Home() {
  return (
    <Box width className='Home' height='100%'>
      <Box className='Home-Main-Content'>
        <ProductNavigation />
        <Box className='Home-First'>
          <Box className='Circle Home-First-Circle1'></Box>
          <Box className='Circle Home-First-Circle2'></Box>
          <Box className='Circle Home-First-Circle3'></Box>
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
      </Box>
    </Box>
  )
}
