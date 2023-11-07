import { Button } from '@mui/base';
import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductNavigation from '../../components/ProductNavigation/ProductNavigation';
import './ProductSection.css'

export default function Products(props) {
  const { products, type } = props;

  return (
    <Box className='Product'>
      <Box className='ProductSection-Container'>
        {
          products?.map((item, index) => {
            if (item.type === type) {
              return (
                <ProductItem { ...item } key={ index }>
                  <Link to={ `/product/${item.id}` }>
                    <Button variant='contained' className='See-Product'>
                      SEE PRODUCT
                    </Button></Link>
                </ProductItem>
              )
            }
          })
        }
      </Box>
      <ProductNavigation />
    </Box>
  )
}


