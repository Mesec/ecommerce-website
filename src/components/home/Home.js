import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <Box width className='Home' height='100%'>
      <Box className='Home-Header-Container'>
        <Box className='Home-Header'>
          <Typography variant='h7' color='secondary' fontSize='14px'>
            NEW PRODUCT
          </Typography>
          <Typography variant='h4' color='secondary' fontSize='15px'>
            XX99 Mark II HeadphoneS
          </Typography>
          <Typography variant='body1' color='secondary'>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </Typography>
          <Button variant="contained">See Product</Button>

        </Box>
      </Box>
      <Box className='Home-Main-Content' style={ { padding: '0 165px' } }>
        <Box display='flex' justifyContent='space-between' gap='30px'>
          <Box className='Product-Link'></Box>
          <Box className='Product-Link'></Box>
          <Box className='Product-Link'></Box>
        </Box>
      </Box>
    </Box>
  )
}
