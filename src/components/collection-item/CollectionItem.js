import React from 'react'
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system'
import './CollectionItem.css'
import { useNavigate } from 'react-router-dom';

export default function ProductItem({ title, newProduct, generalInfo, id, images, reverse }) {
  const thumbnail = require(`/src/assets/images/products${images?.main}`);
  const navigate = useNavigate();

  const redirectToArticle = () => {
    navigate(`/article/${id}`);
  };
  return (
    <Box className='Collection-Item'>
      <Box className='Collection-Item-Thumbnail' style={ { backgroundImage: `url(${thumbnail})` } }>
      </Box>
      <Box className='Collection-Item-Information'>
        { newProduct && <Typography className='Collection-Item-New-Product' variant='h7'>NEW PRODUCT</Typography> }
        <Typography style={{ marginTop: `${newProduct ? '10px' : '0px'}` }} variant='h4'>{ title }</Typography>
        <Typography variant='body1'>{ generalInfo }</Typography>
        <Button onClick={ redirectToArticle } variant='contained'>
            SEE PRODUCT
          </Button>
      </Box>
    </Box>
  )
}
