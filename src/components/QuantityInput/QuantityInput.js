import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './QuantityInput.css';

export default function QuantityInput({ increaseHandler, decreaseHandler, quantity, increaseDisabled, decreaseDisabled }) {
  return (
    <Box className="quantity-input-container">
      <IconButton
        onClick={ decreaseHandler }
        disabled={ decreaseDisabled }
        size="small"
        className="quantity-button"
      >
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography variant="body1" className="quantity-number">
        { quantity }
      </Typography>
      <IconButton
        onClick={ increaseHandler }
        disabled={ increaseDisabled }
        size="small"
        className="quantity-button"
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}