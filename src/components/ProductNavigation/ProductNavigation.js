import { Box } from '@mui/material'
import React from 'react'
import ProductItem from './NavItem/NavItem'
import Headphones from '../../assets/images/headphones.png'
import Speakers from '../../assets/images/speakers.png'
import Earphones from '../../assets/images/earphones.png'

export default function ProductNavigation() {
  return (
    <Box display='flex' justifyContent='space-between' gap='30px' paddingBottom='160px'>
      <ProductItem title='HEADPHONES' icon={ Headphones } />
      <ProductItem title='SPEAKERS' icon={ Speakers } />
      <ProductItem title='EARPHONES' icon={ Earphones } />
    </Box>
  )
}
