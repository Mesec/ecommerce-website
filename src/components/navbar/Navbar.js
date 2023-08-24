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
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import './Navbar.css';


const pages = ['Home', 'Headphones', 'Speakers', 'Earphones'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    console.log('event')
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color='primary' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box width='100%' justifyContent='space-between' display='flex'>
            <Box display='flex' md={ { paddingLeft: '160px' } }>
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
                    <MenuItem key={ page } onClick={ handleCloseNavMenu }>
                      <Typography textAlign="center">{ page }</Typography>
                    </MenuItem>
                  )) }
                </Menu>
              </Box>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={ handleOpenNavMenu }
                color="secondary"
              >
                <img style={ { width: '143px', height: '25px' } } src={ Logo } alt='Audiophile' />
              </IconButton>
            </Box>
            <Box
              sx={ {
                flexGrow: 1,
                gap: 2,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: theme.typography.fontFamily
              } }>
              { pages.map((page) => (
                <Link href="#" className='Link'>
                  { page }
                </Link>
              )) }
            </Box>
            <Box display='flex' md={ { paddingRight: '160px' } }>
              <img src={ Cart } alt="Add to Cart" />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
