import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Box, Button, Typography } from '@mui/material';
import './NavItem.css'
import { Link } from 'react-router-dom';

export default function NavItem(props) {
  const { title, icon, info, path } = props

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
        <Link to={ path } className='Product-Item-Link'>
          <Button variant="text" endIcon={ <KeyboardArrowRightIcon /> }>
            Shop
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
