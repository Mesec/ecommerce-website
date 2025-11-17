import { Box } from '@mui/system'
import React from 'react'
import './Collection.css'
import { Grid } from '@mui/material';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import ActiveLastBreadcrumb from '../../components/Breadcrumbs/Breadcrumbs';

export default function Collection(props) {
  const { products, type } = props;
  return (
      <Box container className='Collection'>
      <Grid spacing={ 4 } container justifyContent={ { xl: 'center' } }>
        <Grid xl={ 11 } lg={ 12 } md={ 12 } sm={ 6 } xs={ 12 } item>
          <ActiveLastBreadcrumb />
        </Grid>
        </Grid>
        <Grid spacing={4} container justifyContent={{ xl: 'center'}} >
        {
          products?.map((item, index) => {
            const numberFromId = Number(item.id.split('-')[1]);
            if (item.type === type) {
              return (
                <Grid xl={11} lg={12} md={12} sm={6} xs={12} item>
                  <CollectionItem
                    { ...item }
                    reverse={ numberFromId % 2 !== 0 }
                    key={ index }>
                  </CollectionItem>
                </Grid>
              )
            } else return null
          })
        }
      </Grid>
      </Box>
  )
}


