import { Box } from '@mui/material'
import React from 'react'
import './Home.css'
import Categories from '../../components/Categories/Categories'
import { Tab, Tabs } from '@mui/material';

export default function Home() {
  return (
    <Box className='Home-Main-Content'>
      <Tabs
        className='Categories-Tabs'
        value='one'
        // onChange={ handleChange }
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="Popular products"
          wrapped
        />
        <Tab
          value="two"
          label="Recently viewed"
          wrapped
        />
      </Tabs>
      <Box className='Home-Categories-Container'>
        <Categories />
      </Box>
    </Box>
  )
}
