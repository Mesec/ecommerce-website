import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/icons/logo.svg'
import Cart from '../../assets/icons/cart.svg'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css';
import { pages } from '../../app/constants';
import NavigationItems from './NavigationItems/NavigationItems';
import Button from '@mui/material/Button';
import Promoted from '../Promoted/Promoted';

function ResponsiveAppBar({ openCartModal }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const location = useLocation();
  const borderPathNames = ['/', '/headphones', '/speakers', '/earphones'];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box width='100%'>
      <AppBar color='primary' position="static" style={ { padding: '0 348px' } }>
        <Container maxWidth="xxl" style={ { borderBottom: borderPathNames.includes(location.pathname) ? '1px solid rgba(255, 255, 255, 0.2)' : 'none', padding: '7px 0 7px 0' } }>
          <Toolbar disableGutters>
            <Box width='100%' justifyContent='space-between' display='flex'>
              <Box display='flex'>
                <Box sx={ { display: { md: 'none' } } }>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={ handleOpenNavMenu }
                    color="secondary"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={ anchorElNav }
                    anchorOrigin={ {
                      vertical: 'bottom',
                      horizontal: 'left',
                    } }
                    keepMounted
                    transformOrigin={ {
                      vertical: 'top',
                      horizontal: 'left',
                    } }
                    open={ Boolean(anchorElNav) }
                    onClose={ handleCloseNavMenu }
                    sx={ {
                      display: { xs: 'block', md: 'none' },
                    } }
                  >
                    { pages.map((page) => (
                      <MenuItem key={ page.url } onClick={ handleCloseNavMenu }>
                        <Typography textAlign="center">{ page.name }</Typography>
                      </MenuItem>
                    )) }
                  </Menu>
                </Box>
                <Link to='/'>
                  <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="secondary"
                  >
                    <img style={ { width: '143px', height: '25px' } } src={ Logo } alt='Audiophile' />
                  </IconButton>
                </Link>
              </Box>
              <NavigationItems />
              <Button onClick={ openCartModal }>
                <img src={ Cart } alt="Add to Cart" />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      { location.pathname === '/' && <Promoted/>}
      { (location.pathname === '/speakers' || location.pathname === '/headphones' || location.pathname === '/earphones')
        && <Box className='Product-Header'>
          <Typography variant='h3'>{ location.pathname.split('/')[1] } </Typography>
        </Box>}
    </Box>
  );
}
export default ResponsiveAppBar;
