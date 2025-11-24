import { Box, Drawer, IconButton, MenuItem } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../../../app/constants';
import { NavLink } from 'react-router-dom';
import '../Navbar.css';

export default function MenuNavBar({ openMenuBar, closeMenuBar, anchor }) {
  return (
    <Box sx={ { flexGrow: 1, display: { sm: 'flex', md: 'none' } } }>
      <IconButton
        size="large"
        onClick={ openMenuBar }
        color="secondary"
      >
        <MenuIcon />
      </IconButton>
      <Drawer 
        open={ Boolean(anchor) } 
        onClose={ closeMenuBar }
        PaperProps={{
          sx: {
            backgroundColor: '#fafafa',
            minWidth: '220px',
            paddingLeft: 0,
            paddingRight: 0,
          }
        }}
      >
        <Box className='MenuNavBar-Title'>Audiophile</Box>
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
      </Drawer>
    </Box>
  )
}
