import { Box } from '@mui/system'
import React from 'react'
import './AllProducts.css'
import { Grid } from '@mui/material';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import ActiveLastBreadcrumb from '../../components/Breadcrumbs/Breadcrumbs';

export default function AllProducts(props) {
  const { products } = props;
  return (
      <Box container className='AllProducts'>
      <Box className='AllProducts-Breadcrumbs'>
        
      </Box>
      <Grid spacing={ 2 } container justifyContent={ { xl: 'center' } } >
        <Grid xl={ 11 } lg={ 12 } md={ 12 } sm={ 12 } xs={ 12 } item className="allproducts-grid-item">
          <ActiveLastBreadcrumb />
        </Grid>
        {
          products?.map((item, index) => {
            const numberFromId = Number(item.id.split('-')[1]);
            return (
              <Grid xl={11} lg={12} md={12} sm={12} xs={12} item className="allproducts-grid-item" key={index}>
                <CollectionItem
                  { ...item }
                  reverse={ numberFromId % 2 !== 0 }
                >
                </CollectionItem>
              </Grid>
            )
          })
        }
      </Grid>
      </Box>
  )
}

