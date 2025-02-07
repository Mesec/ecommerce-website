import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../../../app/constants';

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
          <MenuItem key={ page.url } onClick={ closeMenuBar }>
            <Typography textAlign="center">{ page.name }</Typography>
          </MenuItem>
        )) }
      </Menu>
    </Box>
  )
}
