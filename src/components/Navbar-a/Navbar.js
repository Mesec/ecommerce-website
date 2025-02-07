import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Logo from '../../assets/icons/logo.svg'
import Cart from '../../assets/icons/cart.svg'
import { Link, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { openCart } from 'features/cart/cartSlice';
import { Grid } from '@mui/material';
import './Navbar.css';
import Promoted from 'components/promoted/Promoted';
import MenuNavBar from './menuNavbar/MenuNavbar';
import NavigationItems from './navigationItems/NavigationItems';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const location = useLocation();
  const borderPathNames = ['/', '/headphones', '/speakers', '/earphones'];
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    console.log('open', event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenCart = () => {
    dispatch(openCart());
  }

  const renderLogo = () => {
    return (
      <Link to='/'>
        <IconButton style={{ padding: '0'}}>
          <img style={ { width: '143px', height: '25px' } } src={ Logo } alt='Audiophile' />
        </IconButton>
      </Link>
    )
  }

  const renderPromotedProduct = () => {
    if (location.pathname === '/') {
      return <Promoted />
    }
    return null
  }

  const toolbarStyle = () => {
    if (borderPathNames.includes(location.pathname)) {
      return { borderBottom: '1px solid rgba(255, 255, 255, 0.2)', padding: '0' }
    }
    return { padding: '0'}
  }

  return (
    <Grid
      container
      width='100%'
      style={{ zIndex: 3 }}>
      <Grid item xl={ 12 } lg={ 12 } md={ 12 } sm={ 12 } className='Nav-Item-Top'>
        <AppBar color='primary' position="static">
          <Box
            className='NavBar-Wrapper'
            >
            <Toolbar style={ toolbarStyle() }>
              <Grid container width='100%' justifyContent='space-between' alignItems='center'>
                <Grid xl={ 1 } md={ 4 } item className='Toolbar-Item-1'>
                  <Box display='flex' alignItems='center'>
                    <MenuNavBar openMenuBar={ handleOpenNavMenu } closeMenuBar={ handleCloseNavMenu } anchor={ anchorElNav } />
                    { renderLogo() }
                  </Box>
                </Grid>
                <Grid xl={ 10 } md={ 4 } item className='Toolbar-Item-2'>
                  <NavigationItems />
                </Grid>
                <Grid xl={ 1 } md={ 4 } item className='Toolbar-Item-3'>
                  <Button onClick={ handleOpenCart }>
                    <img src={ Cart } alt="Add to Cart" />
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </Box>
        </AppBar>
      </Grid>
      <Grid item xl={ 12 } lg={ 12 } md={ 12 } sm={ 12 } className='Nav-Item-Middle'>{ renderPromotedProduct() }</Grid>
      {/* <Grid item xl={ 12 } lg={ 12 } md={ 12 } sm={ 12 } className='Nav-Item-Bottom'>{ renderProductTitle() }</Grid> */}
    </Grid>
  );
}
export default ResponsiveAppBar;
