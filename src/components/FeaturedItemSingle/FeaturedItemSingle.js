import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedItemSingle.css'

export default function FeaturedItemSingle() {
  return (
    <Box className='FeaturedItemTwo'>
      <Box>
        <Typography variant='h4'>
          ZX7 SPEAKER
        </Typography>
        <Link to={ `/article/s-02` }>
          <Button variant="outlined">See Product</Button>
        </Link>
      </Box>
    </Box>
  )
}
