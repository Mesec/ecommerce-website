import React from 'react'
import { Container, Box, Snackbar, Button, IconButton } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import PageRoutes from '../Routes/Routes'
import Footer from '../Footer/Footer'
import './Layout.css'
import Cart from '../Cart/Cart'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux'
import { closeSnackbar } from 'features/snackbar/snackbarSlice'

export default function Layout() {
  const isSnackbarOpened = useSelector(state => state.snackbar.isOpen);
  const snackbarMessage = useSelector(state => state.snackbar.message);
  const dispatch = useDispatch();

  const handleCloseSnackbar = () => {
    dispatch(closeSnackbar())
  }

  const action = (
    <Box>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={ handleCloseSnackbar }
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );

  return (
    <Box 
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      height='100%'
      width='100%'>
      <Cart />
      <Navbar />
      <Snackbar
        anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
        open={ isSnackbarOpened }
        autoHideDuration={ 2000 }
        onClose={ handleCloseSnackbar }
        message={ snackbarMessage }
        action={ action }
      />
      <Box className='Layout-Main-Content'>
        <PageRoutes/>
      </Box>
      <Footer/>
    </Box>
  )
}
