import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { pages } from '../../../app/constants'
import './NavigationItems.css'

export default function NavigationItems() {
  return (
    <Box className='Nav-Items'
      sx={ {
        flexGrow: 1,
        gap: 2,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
      } }>
      { pages.length && pages.map((page) => (
        <NavLink
          activeClassName='active'
          key={page.title}
          to={ page.url }
          className='Link'>
          { page.title }
        </NavLink>
      )) }
    </Box>
  )
}
