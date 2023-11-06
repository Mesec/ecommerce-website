import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Cart.css'
import { TextField } from '@mui/material';
import Image1 from '../../assets/test/gallery1.png'

export default function Cart({ open, handleClose }) {
  if (open) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <Box className={`Modal-Wrapper ${open ? 'Visible' : 'Hidden'}`}>
      <Box className='Modal-Overlay' onClick={ handleClose }></Box>
       <Box className={`Cart ${open ? 'ShowCart' : 'HideCart'}`}>
          <Box className='Cart-Header'>
            <Typography variant='body1'>CART (3)</Typography>
            <Button>Remove all</Button>
          </Box>
          <Box className='Cart-Items'>
             <Box className='Cart-Item'>
                <Box className='Cart-Left'>
                  <Box className='Cart-Item-Image'>
                  </Box>
                  <Box>
                    <Typography variant='h5'>XX99 MK II</Typography>
                    <Typography variant='body'>$ 2,999</Typography>
                  </Box>
              </Box>
            <TextField
              onChange={ () => {} }
              variant="outlined"
              type="number"
              value={ 1 }
              InputProps={ {
                inputProps: { min: 1 },
              } }
            />
             </Box>
          <Box className='Cart-Item'>
            <Box className='Cart-Left'>
              <Box className='Cart-Item-Image'>
              </Box>
              <Box>
                <Typography variant='h5'>XX99 MK II</Typography>
                <Typography variant='body'>$ 2,999</Typography>
              </Box>
            </Box>
            <TextField
              onChange={ () => { } }
              variant="outlined"
              type="number"
              value={ 1 }
              InputProps={ {
                inputProps: { min: 1 },
              } }
            />
          </Box>
          </Box>
          <Box className='Cart-Total'>
            <Typography variant='body1'>
              TOTAL
            </Typography>
            <Typography variant='h6'>
              $ 5.396
            </Typography>
          </Box>
        <Button variant='contained'>CHECKOUT</Button>
       </Box>
    </Box>
  )
}
