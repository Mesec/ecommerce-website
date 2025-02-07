import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedItems.css'

export default function FeaturedItemTwo() {
  return (
    <Grid item className='FeaturedItemTwo'>
      <Box>
        <Typography variant='h4'>
          ZX7 SPEAKER
        </Typography>
        <Link to={ `/article/s-02` }>
          <Button variant="outlined">See Product</Button>
        </Link>
      </Box>
    </Grid>
  )
}
