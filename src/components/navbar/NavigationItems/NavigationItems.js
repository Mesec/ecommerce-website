import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { pages } from '../../../app/constants'
import './NavigationItems.css'

export default function NavigationItems({ calledInFooter}) {
  return (
    <Box className='Nav-Items'
      sx={ {
        flexGrow: 1,
        gap: 2,
        display: { xs: `${calledInFooter ? 'flex' : 'none'}`, md: 'flex' },
        flexDirection: { xs: `${calledInFooter ? 'column' : 'row'}`, sm: 'row' },
        justifyContent: { xs: 'center', sm: `${!calledInFooter ? 'center' : 'flex-end'}`},
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
