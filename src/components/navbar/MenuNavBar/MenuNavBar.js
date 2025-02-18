import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../../../app/constants';
import { NavLink } from 'react-router-dom';

export default function MenuNavBar({ openMenuBar, closeMenuBar, anchor }) {
  console.log('pages', pages)
  return (
    <Box sx={ { flexGrow: 1, display: { sm: 'flex', md: 'none' } } }>
      <IconButton
        size="large"
        onClick={ openMenuBar }
        color="secondary"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={ anchor }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'left',
        } }
        keepMounted
        transformOrigin={ {
          vertical: 'top',
          horizontal: 'left',
        } }
        open={ Boolean(anchor) }
        onClose={ closeMenuBar }
        sx={ {
          display: { sm: 'block', md: 'none' },
        } }
      >
        { pages.map((page) => (
          <MenuItem key={ page.url } onClick={ closeMenuBar } className='MenuNavBar'>
            <NavLink
              activeClassName='active'
              key={ page.title }
              to={ page.url }>
              { page.title }
            </NavLink>
          </MenuItem>
        )) }
      </Menu>
    </Box>
  )
}
