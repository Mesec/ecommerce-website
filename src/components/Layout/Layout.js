import React from 'react'
import { Box, Snackbar, IconButton, Grid } from '@mui/material'
import PageRoutes from 'components/Routes/Routes'
import './Layout.css'
import Cart from 'components/Cart/Cart'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux'
import { closeSnackbar } from 'features/snackbar/snackbarSlice'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/navbar'

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
    <Box width='100%'>
      <Cart />
      <Snackbar
        anchorOrigin={ { vertical: 'bottom', horizontal: 'right' } }
        open={ isSnackbarOpened }
        autoHideDuration={ 2000 }
        onClose={ handleCloseSnackbar }
        message={ snackbarMessage }
        action={ action }
      />
      <Grid container width='100%'>
        <Grid item xl={ 12 } width='100%'>
          <Navbar />
        </Grid>
        <Grid item xl={ 12 } width='100%'>
          <PageRoutes />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  )
}
