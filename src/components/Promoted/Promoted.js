import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Promoted.css'

export default function Promoted() {
  return (
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
            SEE PRODUCT
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
