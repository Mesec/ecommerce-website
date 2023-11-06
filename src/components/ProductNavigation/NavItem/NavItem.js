import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import './NavItem.css'
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  const { title, icon, info } = props

  return (
    <Box className='Product-Item'>
      <img src={ icon } alt="" />
      <Box className='Product-Item-Info'>
        <Typography variant='h6'>
          { title }
        </Typography>
        <Typography variant='body1'>
          { info }
        </Typography>
        <Link to={`/${title.toLowerCase()}`} className='Product-Item-Link'>
          <Typography variant='body1'>
            Shop
          </Typography>
          <ArrowForwardIosIcon fontSize='small'/>
        </Link>
      </Box>
    </Box>
  )
}
