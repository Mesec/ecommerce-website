import { Box } from '@mui/material'
import React from 'react'
import './Home.css'
import Categories from '../../components/Categories/Categories'

export default function Home() {
  return (
    <Box className='Home-Main-Content'>
      <Categories />
    </Box>
  )
}
