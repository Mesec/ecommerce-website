import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { pages } from '../../../app/constants'
import './NavigationItems.css'

export default function NavigationItems() {
  return (
    <Box
      sx={ {
        flexGrow: 1,
        gap: 2,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
      } }>
      { pages.length && pages.map((page) => (
        <Link key={page.title} to={ page.url } className='Link' style={ { fontSize: '13px' } }>
          { page.title }
        </Link>
      )) }
    </Box>
  )
}
