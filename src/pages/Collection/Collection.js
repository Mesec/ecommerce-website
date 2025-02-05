import { Button } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import './Collection.css'

export default function Collection(props) {
  const { products, type } = props;
  console.log(products)
  return (
      <Box container className='Collection'>
        {
          products?.map((item, index) => {
            const numberFromId = Number(item.id.split('-')[1]);
            if (item.type === type) {
              return (
                  <ProductItem
                    { ...item }
                    reverse={ numberFromId % 2 !== 0 }
                    key={ index }>
                    <Link to={ `/article/${item.id}` }>
                      <Button variant='contained' className='See-Product'>
                        SEE PRODUCT
                      </Button></Link>
                  </ProductItem>
              )
            } else return null
          })
        }
      </Box>
  )
}


