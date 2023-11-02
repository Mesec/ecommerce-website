import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Cart.css'

export default function Cart({ open, handleClose }) {
  if (open) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <Box className={`Modal-Wrapper ${open ? 'Visible' : 'Hidden'}`}>
      <Box className='Modal-Overlay' onClick={ handleClose }></Box>
       <Box className='Cart'>
          <Box>
            <Typography>Cart (3)</Typography>
            <Button>Remove all</Button>
          </Box>
          <Box></Box>
       </Box>
    </Box>
  )
  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };

  // return (
  //   <Modal
  //     open={ open }
  //     onClose={ handleClose }
  //     aria-labelledby="modal-modal-title"
  //     aria-describedby="modal-modal-description"
  //   >
  //     <Box sx={ style }>
  //       <Typography id="modal-modal-title" variant="h6" component="h2">
  //         Text in a modal
  //       </Typography>
  //       <Typography id="modal-modal-description" sx={ { mt: 2 } }>
  //         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //       </Typography>
  //     </Box>
  //   </Modal>
  // )
}
