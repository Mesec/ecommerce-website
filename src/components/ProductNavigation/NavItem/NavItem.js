import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import './NavItem.css'

export default function ProductItem(props) {
  const { title, icon } = props
  return (
    <Box className='Product-Item'>
      <img src={ icon } alt="" />
      <Box className='Product-Item-Info'>
        <Typography variant='h6'>
          { title }
        </Typography>
        <Box className='Product-Item-Link'>
          <Typography variant='body1'>
            Shop
          </Typography>
          <ArrowForwardIosIcon />
        </Box>
      </Box>
    </Box>
  )
}
