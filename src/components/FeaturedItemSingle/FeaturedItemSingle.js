import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedItemSingle.css'

export default function FeaturedItemSingle({ src, name}) {
  const image = require(`../../assets/images/${src}`);
  return (
    <Box className='FeaturedItemTwo' style={ { backgroundImage: `url(${image})` } }>
      <Box>
        <Typography variant='h4'>
          { name }
        </Typography>
        <Link to={ `/article/s-02` }>
          <Button variant="outlined">See Product</Button>
        </Link>
      </Box>
    </Box>
  )
}
